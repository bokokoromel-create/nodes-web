"use client";

import { useRouter } from "next/navigation";

export type BackButtonProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
};

/**
 * Retourne à la page précédente dans l’historique du navigateur (comme le bouton Précédent).
 */
export default function BackButton({
  children,
  className,
  style,
  "aria-label": ariaLabel,
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={[className, "cursor-pointer"].filter(Boolean).join(" ")}
      style={style}
      aria-label={ariaLabel ?? "Retour à la page précédente"}
    >
      {children}
    </button>
  );
}
