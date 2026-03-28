"use client";

import BackButton from "@/components/BackButton";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { IA_MASTER_MODULES, IA_MASTER_PARCOURS, IA_MASTER_PRICE } from "../../ia-master-data";

export default function IaMasterParcoursPage() {
  const params = useParams<{ id: string }>();
  const parcours = IA_MASTER_PARCOURS.find((p) => p.id === params.id);
  if (!parcours) notFound();

  const orderedModules = parcours.modules
    .map((id) => IA_MASTER_MODULES.find((m) => m.id === id))
    .filter(Boolean);

  return (
    <main
      className="min-h-[100dvh] px-[var(--padding-section-x)] py-10 min-[360px]:py-12 sm:py-20"
      style={{
        background: "var(--color-background-white)",
      }}
    >
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-brand-primary)]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-[var(--color-brand-primary)]/3 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto relative z-10">
        <BackButton
          className="inline-flex items-center gap-2 text-sm font-[var(--font-weight-medium)] text-[var(--color-link-text)] hover:text-[var(--color-brand-primary)] transition-all hover:-translate-x-1"
          style={{ fontFamily: "var(--font-family-sans)" }}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Retour
        </BackButton>

        {/* Premium Page Header */}
        <section className="mt-8 sm:mt-12 group">
          <div className="relative p-8 sm:p-12 rounded-[2.5rem] border border-[var(--color-border-light)] bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-[var(--color-brand-primary)]/10">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
              <span className="text-[12rem] font-[var(--font-weight-extrabold)] leading-none" style={{ fontFamily: "var(--font-family-sans)" }}>{parcours.id}</span>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-[var(--font-weight-bold)] uppercase tracking-wider bg-[var(--color-brand-primary)] text-white">
                  Parcours {parcours.id.padStart(2, "0")}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-light)]"></span>
                <span className="text-[11px] font-[var(--font-weight-bold)] uppercase tracking-widest text-[var(--color-link-text)]">
                  IA Master Series
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
                <h1 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] leading-[1.1] max-w-4xl" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-1)" }}>
                  {parcours.title}
                </h1>
                
                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-[var(--font-weight-bold)] uppercase text-[var(--color-link-text)] mb-1 opacity-70">Durée Totale</span>
                    <span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-[var(--font-weight-extrabold)] bg-white border border-[var(--color-border-light)] shadow-sm text-[var(--color-text-heading)]">
                      {parcours.duration}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-[var(--font-weight-bold)] uppercase text-[var(--color-link-text)] mb-1 opacity-70">Investissement</span>
                    <span className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-[var(--font-weight-extrabold)] text-white bg-[var(--color-brand-primary)] border border-transparent shadow-sm">
                      {IA_MASTER_PRICE}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-body)] text-base sm:text-lg max-w-3xl leading-relaxed opacity-90" style={{ fontFamily: "var(--font-family-sans)" }}>
                {parcours.who}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 sm:mt-20 grid lg:grid-cols-12 gap-12 relative items-start">
          {/* Main Content: Module Timeline */}
          <div className="lg:col-span-8 animate-fade-up">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] tracking-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
                Programme du <span className="text-[var(--color-brand-primary)]">Parcours</span>
              </h2>
              <span className="text-sm font-[var(--font-weight-bold)] text-[var(--color-link-text)] bg-[var(--color-section-muted)] px-3 py-1 rounded-full">
                {orderedModules.length} Modules
              </span>
            </div>

            <div className="relative space-y-12 pl-4 sm:pl-8 border-l-2 border-[var(--color-border-light)] ml-4 sm:ml-6">
              {orderedModules.map((m, idx) => (
                <div key={m!.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[calc(1.5rem+3px)] sm:-left-[calc(2.5rem+3px)] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[var(--color-border-light)] flex items-center justify-center z-10 group-hover:border-[var(--color-brand-primary)] group-hover:scale-110 transition-all shadow-sm">
                    <span className="text-xs font-[var(--font-weight-extrabold)] text-[var(--color-brand-primary)]">{idx + 1}</span>
                  </div>

                  <div className="relative rounded-3xl border border-[var(--color-border-light)] bg-white p-6 sm:p-8 transition-all hover:shadow-xl hover:border-[var(--color-brand-primary)]/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-[var(--font-weight-extrabold)] uppercase tracking-widest text-[var(--color-link-text)] py-1 px-2.5 bg-[var(--color-section-muted)] rounded-md">
                          Module {m!.id}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-[var(--font-weight-bold)] text-[var(--color-brand-primary)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)]"></span>
                          {m!.level}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4 leading-tight group-hover:text-[var(--color-brand-primary)] transition-colors" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
                      {m!.title}
                    </h3>

                    <p className="text-[var(--color-text-body)] text-sm sm:text-base leading-relaxed opacity-80 mb-8" style={{ fontFamily: "var(--font-family-sans)" }}>
                      {m!.summary}
                    </p>

                    <div className="grid gap-6">
                      <div className="rounded-2xl bg-[var(--color-brand-primary)]/[0.02] p-5 border border-[var(--color-brand-primary)]/5 hover:bg-white transition-all">
                        <h4 className="flex items-center gap-2 text-[10px] font-[var(--font-weight-bold)] uppercase tracking-wider text-[var(--color-brand-primary)] mb-4">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          Projet Pratique
                        </h4>
                        <p className="text-[13px] font-[var(--font-weight-medium)] text-[var(--color-text-heading)] leading-relaxed italic">
                          &quot;{m!.project}&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 animate-fade-up">
            <div className="p-8 rounded-[2rem] border border-[var(--color-border-light)] bg-[var(--color-section-tint)]/30 backdrop-blur-md shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              
              <h3 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4 leading-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
                Objectif du <span className="text-[var(--color-brand-primary)]">Parcours</span>
              </h3>
              <p className="text-[var(--color-text-body)] text-sm sm:text-base leading-relaxed opacity-90 mb-8" style={{ fontFamily: "var(--font-family-sans)" }}>
                {parcours.outcome}
              </p>

              <div className="space-y-4 pt-6 border-t border-[var(--color-border-light)]">
                <Link
                  href={{ pathname: "/formulaire/inscription", query: { parcours: `IA MASTER — ${parcours.title}` } }}
                  className="inline-flex items-center justify-center w-full rounded-2xl px-6 py-4 text-white text-sm font-[var(--font-weight-bold)] transition-all hover:shadow-2xl hover:opacity-95 active:scale-[0.98]"
                  style={{
                    backgroundColor: "var(--color-button-primary-bg)",
                    fontFamily: "var(--font-family-sans)",
                  }}
                >
                  S&apos;inscrire et payer • {IA_MASTER_PRICE}
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-[var(--color-border-light)] bg-white shadow-sm">
              <h4 className="text-[10px] font-[var(--font-weight-bold)] uppercase tracking-widest text-[var(--color-link-text)] mb-4">Informations Clé</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-section-muted)] flex items-center justify-center text-[var(--color-brand-primary)]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-[var(--font-weight-bold)] text-[var(--color-link-text)] opacity-60">Durée</span>
                    <span className="text-xs font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)]">{parcours.duration}</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

