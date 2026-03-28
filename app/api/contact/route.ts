import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(8, "Le numéro doit contenir au moins 8 caractères"),
  objet: z.string(),
});

const inscriptionSchema = z.object({
  type: z.literal("inscription"),
  prenom: z.string().trim().min(1, "Le prénom est requis."),
  nom: z.string().trim().min(1, "Le nom est requis."),
  phone: z.string().min(8, "Le numéro doit contenir au moins 8 caractères"),
  email: z.string().trim().email("Adresse e-mail invalide."),
  parcours: z.string().trim().min(1, "Le parcours est requis."),
});

type InscriptionData = z.infer<typeof inscriptionSchema>;
type ContactData = z.infer<typeof contactSchema>;

type ParsedBody =
  | { ok: true; mode: "inscription"; data: InscriptionData }
  | { ok: true; mode: "contact"; data: ContactData }
  | { ok: false; error: z.ZodError };

function parseContactBody(body: unknown): ParsedBody {
  const isInscription =
    typeof body === "object" &&
    body !== null &&
    "type" in body &&
    (body as { type?: unknown }).type === "inscription";

  if (isInscription) {
    const r = inscriptionSchema.safeParse(body);
    return r.success ? { ok: true, mode: "inscription", data: r.data } : { ok: false, error: r.error };
  }

  const r = contactSchema.safeParse(body);
  return r.success ? { ok: true, mode: "contact", data: r.data } : { ok: false, error: r.error };
}

/**
 * API route — exécutée uniquement côté serveur.
 * FLOW_API_KEY est lue depuis process.env et n’est jamais exposée au client.
 */
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { allowed, resetIn } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          error: "Trop de requêtes. Réessayez dans quelques minutes.",
          retryAfter: Math.ceil(resetIn / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(resetIn / 1000)),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const body = await request.json();
    const parsed = parseContactBody(body);

    if (!parsed.ok) {
      const errors = parsed.error.flatten();
      return NextResponse.json(
        {
          error: "Validation échouée",
          fieldErrors: errors.fieldErrors,
          formErrors: errors.formErrors,
        },
        { status: 400 }
      );
    }

    let name: string;
    let phone: string;
    let orderId: string;
    const isInscription = parsed.mode === "inscription";

    if (parsed.mode === "inscription") {
      const d = parsed.data;
      phone = d.phone.replace(/\s/g, "");
      name = `${d.prenom} ${d.nom} | ${d.email} | ${d.parcours}`.slice(0, 200);
      orderId = `INS-${Date.now()}`;
    } else {
      const d = parsed.data;
      name = d.name.trim();
      phone = d.phone.replace(/\s/g, "");
      orderId = `NODES-${Date.now()}`;
    }

    const apiKey = process.env.FLOW_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "FLOW_API_KEY non configurée" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://flowapi.nodes-hub.com/v1/whatsapp/broadcasts/personalized",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          template_name: "order_confirmation",
          language_code: "fr",
          campaign_name: isInscription ? "Inscription formation" : "Site Vitrine",
          recipients: [
            {
              phone,
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: name },
                    { type: "text", text: orderId },
                  ],
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const safeDetails =
        typeof data === "object" && data !== null
          ? Object.fromEntries(
              Object.entries(data).filter(([k]) => !/key|token|secret|authorization/i.test(k))
            )
          : data;
      return NextResponse.json(
        { error: "Erreur lors de l'envoi", details: safeDetails },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Contact API error:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Erreur serveur", message: error instanceof Error ? error.message : "Erreur inconnue" },
      { status: 500 }
    );
  }
}
