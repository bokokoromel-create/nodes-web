"use client";

import { useEffect } from "react";

/**
 * Évite que l'erreur "Failed to connect to MetaMask" de l'extension Chrome
 * n'apparaisse dans l'overlay Next.js en développement.
 * L'erreur vient de l'extension, pas de l'application.
 */
export default function MetaMaskErrorSuppress() {
  useEffect(() => {
    const handler = (event: PromiseRejectionEvent) => {
      const msg = event.reason?.message ?? String(event.reason ?? "");
      if (
        msg.includes("MetaMask") ||
        msg.includes("Failed to connect")
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    window.addEventListener("unhandledrejection", handler);
    return () => window.removeEventListener("unhandledrejection", handler);
  }, []);
  return null;
}
