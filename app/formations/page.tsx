"use client";

import Image from "next/image";
import Link from "next/link";

const FORMATIONS = [
  {
    slug: "/formations/data-master",
    title: "DATA MASTER",
    tag: "DATA",
    meta1: "Parcours certifiant",
    meta2: "Durée : 6 semaines",
    desc: "Collecter, structurer et analyser des données pour mieux piloter une activité.",
    image: "/DATA.jpg",
  },
  {
    slug: "/formations/ia-master",
    title: "IA MASTER",
    tag: "IA",
    meta1: "Multimodal, agents & MCP",
    meta2: "Durée : 6 semaines",
    desc: "Comprendre et exploiter l’IA moderne : multimodal, agents, MCP, projets concrets.",
    image: "/IA2.jpg",
  },
] as const;

export default function FormationsIndexPage() {
  return (
    <main className="min-h-[100dvh] px-[var(--padding-section-x)] py-10 min-[360px]:py-12 sm:py-16" style={{ background: "var(--color-background-white)" }}>
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-[var(--font-weight-medium)] text-[var(--color-link-text)] hover:text-[var(--color-brand-primary)] transition-colors" style={{ fontFamily: "var(--font-family-sans)" }}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <h1 className="mt-3 font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)]" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
              Toutes nos formations
            </h1>
            <p className="mt-2 text-[var(--color-text-body)] max-w-2xl text-sm sm:text-base" style={{ fontFamily: "var(--font-family-sans)" }}>
              Découvrez nos parcours disponibles et ceux à venir. Cliquez sur une formation pour voir le programme et demander des informations.
            </p>
          </div>
          <Link
            href="/formulaire"
            className="inline-flex items-center justify-center rounded-[var(--border-radius-button)] px-5 py-3 text-white font-[var(--font-weight-medium)] transition-colors hover:opacity-90"
            style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
          >
            Demander une formation
          </Link>
        </div>

        <section className="mt-8 sm:mt-10">
          <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
            Formations disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {FORMATIONS.map((f) => (
              <article key={f.slug} className="rounded-2xl border border-[var(--color-border-light)] bg-white shadow-sm overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10]">
                  <Image src={f.image} alt={f.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <span
                    className="absolute top-3 left-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-[var(--font-weight-bold)] shadow-sm border border-white/25 text-white"
                    style={{ backgroundColor: "rgba(255,255,255,0.16)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", fontFamily: "var(--font-family-sans)" }}
                  >
                    Disponible
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col gap-3">
                  <p className="text-[var(--color-brand-primary)] text-xs font-[var(--font-weight-bold)] uppercase tracking-[var(--letter-spacing-expanded)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                    {f.tag}
                  </p>
                  <h3 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] leading-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
                    {f.title}
                  </h3>

                  <ul className="mt-1 space-y-2 text-sm text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                    <li className="flex items-center gap-2">
                      <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" />
                        <path d="M6 12v6c3 2 9 2 12 0v-6" />
                      </svg>
                      {f.meta1}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4" />
                        <path d="M8 2v4" />
                        <path d="M3 10h18" />
                      </svg>
                      {f.meta2}
                    </li>
                  </ul>

                  <p className="text-[var(--color-text-body)] text-sm sm:text-base" style={{ fontFamily: "var(--font-family-sans)" }}>
                    {f.desc}
                  </p>

                  <div className="pt-2 mt-auto">
                    <Link
                      href={f.slug}
                      className="inline-flex items-center justify-center w-full rounded-[var(--border-radius-button)] px-4 py-2.5 text-white text-sm font-[var(--font-weight-bold)] transition-colors hover:opacity-90"
                      style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
                    >
                      Voir la formation
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 sm:mt-14 rounded-2xl border border-[var(--color-border-light)] p-5 min-[360px]:p-6 sm:p-8" style={{ backgroundColor: "var(--color-section-muted)" }}>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-2" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
                Formations à venir
              </h2>
              <p className="text-[var(--color-text-body)] text-sm sm:text-base" style={{ fontFamily: "var(--font-family-sans)" }}>
                Nous préparons de nouveaux parcours. Dites-nous ce dont vous avez besoin et nous vous recontactons dès l’ouverture des inscriptions.
              </p>
            </div>
            <Link
              href={{ pathname: "/formulaire", query: { objet: "Formation (à venir)" } }}
              className="inline-flex items-center justify-center rounded-[var(--border-radius-button)] px-5 py-3 text-white font-[var(--font-weight-medium)] transition-colors hover:opacity-90"
              style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
            >
              Être notifié
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {["Bootcamp Agents IA", "Marketing IA", "Automatisation avancée"].map((title) => (
              <div key={title} className="rounded-xl border border-[var(--color-border-light)] bg-white p-4 sm:p-5">
                <p className="text-xs font-[var(--font-weight-medium)] text-[var(--color-link-text)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                  À venir
                </p>
                <p className="mt-1 font-[var(--font-weight-bold)] text-[var(--color-text-heading)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

