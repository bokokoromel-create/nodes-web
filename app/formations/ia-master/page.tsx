"use client";

import Image from "next/image";
import Link from "next/link";
import { IA_MASTER_PARCOURS } from "./ia-master-data";

export default function IaMasterPage() {
  return (
    <main className="min-h-[100dvh] px-[var(--padding-section-x)] py-10 min-[360px]:py-12 sm:py-20" style={{ background: "var(--color-background-white)" }}>
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-[var(--font-weight-medium)] text-[var(--color-link-text)] hover:text-[var(--color-brand-primary)] transition-all hover:-translate-x-1" style={{ fontFamily: "var(--font-family-sans)" }}>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Retour à l&apos;accueil
        </Link>

        {/* Hero Section */}
        <section className="mt-8 sm:mt-12 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center animate-fade-up">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-[var(--font-weight-bold)] bg-[var(--color-section-tint)] text-[var(--color-brand-primary)] mb-6" style={{ fontFamily: "var(--font-family-sans)" }}>
              Formations Certifiantes
            </span>
            <h1 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4 tracking-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-1)", lineHeight: "1.1" }}>
              IA <span className="text-[var(--color-brand-primary)]">MASTER</span>
            </h1>
            <p className="text-[var(--color-text-body)] mb-8 max-w-xl text-base sm:text-lg leading-relaxed opacity-90" style={{ fontFamily: "var(--font-family-sans)" }}>
              Maitrisez l&apos;intelligence artificielle moderne de bout en bout. De l&apos;IA generative aux agents autonomes, construisez des solutions concretes et immediatement applicables a votre metier.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={{ pathname: "/formulaire", query: { objet: "IA MASTER" } }}
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-[var(--border-radius-button)] px-6 sm:px-8 py-3.5 sm:py-4 text-white text-sm sm:text-base font-[var(--font-weight-bold)] transition-all hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
              >
                Commencer mon parcours
              </Link>
              <a
                href="#parcours"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-[var(--border-radius-button)] px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-[var(--color-border-light)] bg-white text-[var(--color-text-heading)] text-sm sm:text-base font-[var(--font-weight-bold)] transition-all hover:bg-[var(--color-section-muted)] hover:border-[var(--color-brand-primary)] active:bg-[var(--color-section-tint)]"
                style={{ fontFamily: "var(--font-family-sans)" }}
              >
                Explorer les 6 parcours
              </a>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 min-[360px]:grid-cols-2 gap-4 sm:gap-6 border-t border-[var(--color-border-light)] pt-6 sm:pt-8">
              <div className="flex items-center gap-3">
                <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-section-tint)] text-[var(--color-brand-primary)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="text-sm font-[var(--font-weight-medium)] text-[var(--color-text-heading)]">IA appliquee et concrete</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-section-tint)] text-[var(--color-brand-primary)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="text-sm font-[var(--font-weight-medium)] text-[var(--color-text-heading)]">Agents, MCP et cas reels</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-[var(--color-brand-primary)]/5 rounded-[2rem] blur-2xl group-hover:bg-[var(--color-brand-primary)]/10 transition-colors duration-500"></div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image src="/IA3.jpg" alt="IA MASTER" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-primary)]/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Parcours Section */}
        <section id="parcours" className="mt-24 sm:mt-32">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4 tracking-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
              Trouvez votre <span className="text-[var(--color-brand-primary)]">voie d&apos;expertise</span>
            </h2>
            <p className="text-[var(--color-text-body)] text-base sm:text-lg opacity-80" style={{ fontFamily: "var(--font-family-sans)" }}>
              Choisissez le parcours qui correspond le mieux a vos objectifs professionnels et progressez etape par etape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-[360px]:gap-5 sm:gap-8">
            {IA_MASTER_PARCOURS.map((p, idx) => (
              <article
                key={p.id}
                className="group relative flex flex-col rounded-3xl border border-[var(--color-border-light)] bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-[var(--color-brand-primary)]/20 hover:-translate-y-2 overflow-hidden"
              >
                {/* Card Header with Gradient */}
                <div className="relative p-4 min-[360px]:p-5 sm:p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="text-6xl font-[var(--font-weight-extrabold)]" style={{ fontFamily: "var(--font-family-sans)" }}>{idx + 1}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-[var(--font-weight-bold)] uppercase tracking-wider bg-white/80 backdrop-blur-sm border border-[var(--color-border-light)] text-[var(--color-link-text)]">
                      Parcours {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex max-w-[58%] sm:max-w-none items-center rounded-lg px-2 py-1 text-[10px] sm:text-xs leading-tight font-[var(--font-weight-bold)] bg-[var(--color-brand-primary)] text-white shadow-sm break-words">
                      {p.duration}
                    </span>
                  </div>

                  <h3 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] leading-tight group-hover:text-[var(--color-brand-primary)] transition-colors" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs font-[var(--font-weight-medium)] text-[var(--color-link-text)] flex items-center gap-1.5 opacity-80 leading-relaxed">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {p.duration}
                  </p>
                </div>

                <div className="px-4 min-[360px]:px-5 sm:px-8 pb-5 min-[360px]:pb-6 sm:pb-8 flex flex-col flex-1 gap-4 sm:gap-6">
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed opacity-90 line-clamp-3" style={{ fontFamily: "var(--font-family-sans)" }}>
                    {p.who}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[10px] font-[var(--font-weight-bold)] uppercase tracking-[0.1em] text-[var(--color-link-text)] opacity-70">
                      Modules cles
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {p.modules.slice(0, 4).map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center rounded-md px-2 py-1 text-[11px] font-[var(--font-weight-bold)] bg-[var(--color-section-muted)] text-[var(--color-text-heading)] border border-[var(--color-border-light)] group-hover:border-[var(--color-brand-primary)]/20 transition-colors"
                        >
                          M{m}
                        </span>
                      ))}
                      {p.modules.length > 4 && (
                        <span className="text-[11px] font-[var(--font-weight-bold)] text-[var(--color-link-text)] flex items-center">
                          +{p.modules.length - 4} plus
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-[var(--color-border-light)] group-hover:border-[var(--color-brand-primary)]/10 transition-colors">
                    <div className="rounded-2xl bg-[var(--color-section-tint)]/40 p-4 border border-transparent group-hover:border-[var(--color-brand-primary)]/10 group-hover:bg-white transition-all">
                      <p className="text-[10px] font-[var(--font-weight-bold)] uppercase tracking-wider text-[var(--color-brand-primary)] mb-1">Impact final</p>
                      <p className="text-[13px] font-[var(--font-weight-medium)] text-[var(--color-text-heading)] leading-snug">
                        {p.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <Link
                      href={`/formations/ia-master/parcours/${p.id}`}
                      className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 border-2 border-[var(--color-border-light)] bg-white text-[var(--color-text-heading)] text-sm font-[var(--font-weight-bold)] transition-all hover:bg-[var(--color-section-muted)] hover:border-[var(--color-brand-primary)]"
                    >
                      Details du programme
                    </Link>
                    <Link
                      href={{ pathname: "/formulaire", query: { objet: `IA MASTER — ${p.title} (paiement)` } }}
                      className="inline-flex items-center justify-center w-full rounded-xl px-5 py-3 text-white text-sm font-[var(--font-weight-bold)] transition-all hover:shadow-xl active:scale-[0.98]"
                      style={{ backgroundColor: "var(--color-button-primary-bg)" }}
                    >
                      S&apos;inscrire maintenant
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section id="details" className="mt-20 sm:mt-32 relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] border border-[var(--color-border-light)] bg-gradient-to-br from-[var(--color-section-muted)] to-white p-5 min-[360px]:p-8 sm:p-16 text-center animate-fade-up">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--color-brand-primary)]/5 rounded-full blur-3xl"></div>

          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-6 tracking-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
              Une formation pensee pour <span className="text-[var(--color-brand-primary)]">votre succes</span>
            </h2>
            <p className="text-[var(--color-text-body)] text-base sm:text-lg leading-relaxed opacity-80" style={{ fontFamily: "var(--font-family-sans)" }}>
              Nous vous apprenons a transformer l&apos;IA en valeur concrete : productivite, automatisation et solutions innovantes, avec une progression claire et des livrables utilisables en contexte professionnel.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-[var(--font-weight-extrabold)] text-[var(--color-brand-primary)]">100%</span>
                <span className="text-xs uppercase font-[var(--font-weight-bold)] text-[var(--color-link-text)] mt-1">Pratique</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[var(--color-border-light)]"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-[var(--font-weight-extrabold)] text-[var(--color-brand-primary)]">Pro</span>
                <span className="text-xs uppercase font-[var(--font-weight-bold)] text-[var(--color-link-text)] mt-1">Mentorat</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-[var(--color-border-light)]"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-[var(--font-weight-extrabold)] text-[var(--color-brand-primary)]">H24</span>
                <span className="text-xs uppercase font-[var(--font-weight-bold)] text-[var(--color-link-text)] mt-1">Acces</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

