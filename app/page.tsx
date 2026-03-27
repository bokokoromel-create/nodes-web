"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function AnimateOnScroll({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`animate-on-scroll ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

const NAV_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
];

const LINKEDIN_URL = "https://cg.linkedin.com/company/nodes-technology";
const INSTAGRAM_URL = "https://www.instagram.com/nodes.technology?igsh=emZ5Zm5kZHEwdGpp";
const FACEBOOK_URL = "https://www.facebook.com/share/18KURY3nja/?mibextid=wwXIfr";

const SERVICES = [
  { icon: "gear", title: "Développement de solutions IA", desc: "Agents intelligents, automatisation et plateformes conversationnelles." },
  { icon: "chart", title: "Transformation digitale", desc: "Optimisation des processus et intégration technologique." },
  { icon: "search", title: "Marketing de précision avec l'IA", desc: "Campagnes marketing et commerciales de précision pilotées par l'IA pour une meilleure conversion." },
  { icon: "handshake", title: "Travail d'équipe & excellence technique", desc: "Une approche collaborative pour livrer des solutions fiables et performantes." },
];

const TEAM_FEATURES = [
  { icon: "check", label: "Développement IA" },
  { icon: "handshake", label: "Travail d'équipe" },
  { icon: "lightbulb", label: "Transformation digitale" },
  { icon: "plant", label: "Excellence technique" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Analyse et conception", desc: "Nous échangeons avec vous pour comprendre vos besoins, analyser vos processus et définir la meilleure solution technologique adaptée à votre activité." },
  { num: "02", title: "Développement et intégration", desc: "Notre équipe conçoit et développe votre solution en utilisant les technologies les plus avancées en intelligence artificielle et en automatisation." },
  { num: "03", title: "Déploiement et amélioration continue", desc: "Après la mise en production, nous analysons les performances, recueillons vos retours et améliorons continuellement la solution pour maximiser son impact." },
];

const PARTNER_IMAGES = [
  { src: "/nsia.png", alt: "NSIA Assurances" },
  { src: "/Airtel_RDC.png", alt: "Airtel RDC" },
  { src: "/canal.png", alt: "Canal" },
  { src: "/caria.png", alt: "CARIA" },
  { src: "/base.png", alt: "BASE64" },
  { src: "/mtn.jpg", alt: "MTN" },
];

const FOOTER_SERVICES = ["Solutions d'intelligence artificielle", "Automatisation des processus", "Marketing conversationnel", "Formation en informatique", "Transformation digitale"];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-2 min-[280px]:px-3 min-[360px]:px-4 sm:px-5 lg:px-6 xl:px-8" style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}>
        <div
          className="max-w-6xl xl:max-w-7xl mx-auto flex items-center justify-between rounded-lg min-[360px]:rounded-xl sm:rounded-2xl px-3 py-2.5 min-[280px]:px-3.5 min-[360px]:px-4 min-[360px]:py-3 sm:px-5 sm:py-3.5 lg:px-8 lg:py-4 border border-white/60 transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "var(--shadow-nav-elevated)",
          }}
        >
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <Image
              src="/nodes png.png"
              alt="Nodes technology"
              width={36}
              height={36}
              className="w-6 h-6 min-[280px]:w-7 min-[280px]:h-7 min-[360px]:w-8 min-[360px]:h-8 sm:w-9 sm:h-9 rounded-lg object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xs min-[280px]:text-sm min-[360px]:text-base sm:text-lg font-[var(--font-weight-extrabold)] tracking-tight text-[var(--color-text-heading)]" style={{ fontFamily: "var(--font-family-sans)" }}>Nodes</span>
              <span className="text-[8px] min-[280px]:text-[9px] min-[360px]:text-[10px] sm:text-xs font-[var(--font-weight-medium)] text-[var(--color-link-text)] -mt-0.5" style={{ fontFamily: "var(--font-family-sans)" }}>technology</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link text-sm font-[var(--font-weight-medium)] tracking-wide hover:text-[var(--color-brand-primary)] ${i === 0 ? "text-[var(--color-brand-primary)]" : "text-[var(--color-text-body)]"}`}
                style={{ fontFamily: "var(--font-family-sans)" }}
                data-active={i === 0 ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <button type="button" className="hidden sm:flex p-2.5 text-[var(--color-text-body)] hover:text-[var(--color-brand-primary)] rounded-xl hover:bg-[var(--color-section-tint)] transition-colors" aria-label="Rechercher">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-white text-sm font-[var(--font-weight-medium)] tracking-wide transition-all duration-200 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-button-primary-bg)]"
              style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)", boxShadow: "0 2px 12px rgba(26, 0, 93, 0.25)" }}
            >
              Consultation gratuite
            </a>
            <button
              type="button"
              className="touch-target md:hidden p-2.5 min-[280px]:p-3 rounded-xl hover:bg-[var(--color-section-tint)] transition-colors flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <>
            <div className="md:hidden fixed inset-0 top-[3.75rem] min-[360px]:top-[4.5rem] sm:top-[5.5rem] bg-black/20 backdrop-blur-sm z-40" aria-hidden onClick={() => setMobileMenuOpen(false)} />
            <div
              className="md:hidden absolute left-4 right-4 mt-3 rounded-2xl border border-[var(--color-border-light)] p-5 z-50 flex flex-col gap-1"
              style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", boxShadow: "var(--shadow-nav-elevated)" }}
            >
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="py-3 px-3 rounded-xl font-[var(--font-weight-medium)] text-[var(--color-text-body)] hover:bg-[var(--color-section-tint)] hover:text-[var(--color-brand-primary)] transition-colors" style={{ fontFamily: "var(--font-family-sans)" }} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex justify-center rounded-xl px-4 py-3 text-white font-[var(--font-weight-medium)] text-sm" style={{ backgroundColor: "var(--color-button-primary-bg)" }} onClick={() => setMobileMenuOpen(false)}>
                Consultation gratuite
              </a>
            </div>
          </>
        )}
      </header>

      <section id="hero" className="relative min-h-[100svh] min-h-[100dvh] min-h-screen flex items-center pt-16 min-[280px]:pt-20 min-[360px]:pt-24 pb-8 min-[280px]:pb-10 min-[360px]:pb-12 sm:pt-28 sm:pb-16 lg:pt-0 lg:pb-0">
        <div className="absolute inset-0">
        <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85"
            alt="Équipe en collaboration"
            fill
            className="object-cover object-center"
            sizes="100vw"
          priority
        />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(15,15,25,0.82) 0%, rgba(20,10,35,0.78) 50%, rgba(10,5,20,0.85) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-[var(--padding-section-x)] py-5 min-[280px]:py-6 min-[360px]:py-8 sm:py-12 lg:py-[var(--padding-section-y)]">
          <AnimateOnScroll className="max-w-2xl">
            <h1
              className="font-[var(--font-weight-extrabold)] leading-[1.12] text-white text-xl min-[360px]:text-2xl sm:text-3xl lg:text-[length:var(--font-size-heading-1)]"
              style={{ fontFamily: "var(--font-family-sans)" }}
            >
              Nous concevons des solutions intelligentes qui automatisent et transforment votre business.
            </h1>
            <div className="w-10 min-[360px]:w-12 sm:w-16 h-0.5 mt-3 mb-3 min-[360px]:mt-4 min-[360px]:mb-4 sm:mt-5 sm:mb-5 rounded-full bg-[var(--color-brand-primary)]" aria-hidden />
            <p className="text-white/85 mb-3 min-[280px]:mb-4 min-[360px]:mb-6 sm:mb-8 max-w-lg leading-relaxed text-xs min-[280px]:text-[13px] min-[360px]:text-sm sm:text-base" style={{ fontFamily: "var(--font-family-sans)" }}>
              Experts en intelligence artificielle et en transformation digitale, nous aidons les entreprises à gagner du temps, réduire leurs coûts et créer de nouvelles opportunités grâce à la technologie.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 min-[360px]:gap-3 sm:gap-5">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--border-radius-button)] px-4 py-2.5 min-[360px]:px-5 min-[360px]:py-3 sm:px-6 sm:py-3.5 text-white text-xs min-[360px]:text-sm sm:text-base font-[var(--font-weight-medium)] transition-all hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-button-primary-bg)]"
                style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)", boxShadow: "0 4px 14px rgba(26, 0, 93, 0.35)" }}
              >
                Travailler avec Nodes
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a
                href="#story"
                className="text-[var(--font-size-link)] font-[var(--font-weight-normal)] text-white/80 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                style={{ fontFamily: "var(--font-family-sans)" }}
              >
                Lire notre histoire
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="services" className="py-[var(--padding-section-y)] px-[var(--padding-section-x)]" style={{ background: "var(--color-section-muted)" }}>
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-6 min-[360px]:gap-8 sm:gap-12 lg:gap-16 items-start">
          <AnimateOnScroll>
          <div>
            <Link href="/formulaire" className="inline-block uppercase tracking-[var(--letter-spacing-expanded)] text-[var(--color-brand-primary)] font-[var(--font-weight-medium)] text-[var(--font-size-tagline)] mb-4 hover:underline" style={{ fontFamily: "var(--font-family-sans)" }}>
              COMMENCER
            </Link>
            <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
              Une équipe jeune et dynamique qui transforme les idées en solutions intelligentes
            </h2>
            <p className="text-[var(--color-text-body)] mb-6 max-w-md" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-body)" }}>
              Nous accompagnons des organisations dans des secteurs clés tels que les télécommunications, la finance, l&apos;assurance et le commerce, tout en contribuant à former la prochaine génération de talents technologiques à travers nos programmes de formations certifiantes.
            </p>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-[var(--border-radius-button)] px-5 py-2.5 text-white font-[var(--font-weight-medium)] transition-colors hover:opacity-90"
              style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
            >
              EN SAVOIR PLUS
            </a>
          </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
          <p className="text-[var(--color-brand-primary)] font-[var(--font-weight-medium)] text-sm mb-4" style={{ fontFamily: "var(--font-family-sans)" }}>Nos expertises</p>
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 min-[360px]:gap-4 sm:gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="p-3 min-[360px]:p-4 sm:p-6 rounded-lg min-[360px]:rounded-xl bg-white shadow-sm border border-[var(--color-border-light)]">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-section-tint)", color: "var(--color-brand-primary)" }}>
                  {s.icon === "gear" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>}
                  {s.icon === "chart" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="m7 16 4-4 4 2 4-6" /></svg>}
                  {s.icon === "lightbulb" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M15 8a3 3 0 1 0-6 0c0 2 3 3 3 5M12 2v1" /><path d="M12 2a6 6 0 0 1 4.5 9.8A4 4 0 0 0 14 18h-4a4 4 0 0 0-2.5-6.2A6 6 0 0 1 12 2Z" /></svg>}
                  {s.icon === "search" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>}
                  {s.icon === "handshake" && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                </div>
                <h3 className="font-[var(--font-weight-bold)] text-[var(--color-text-heading)] mb-2" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>{s.title}</h3>
                <p className="text-[var(--color-text-body)] text-[var(--font-size-small)]" style={{ fontFamily: "var(--font-family-sans)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="formation" className="py-[var(--padding-section-y)] px-[var(--padding-section-x)]" style={{ background: "var(--color-background-white)" }}>
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-6 min-[360px]:gap-8 sm:gap-12 items-center">
          <AnimateOnScroll>
          <div>
            <p className="text-[var(--color-brand-primary)] font-[var(--font-weight-medium)] text-sm mb-3" style={{ fontFamily: "var(--font-family-sans)" }}>
              Formations
            </p>
            <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
              Apprenez l&apos;IA et l&apos;automatisation avec Nodes
            </h2>
            <p className="text-[var(--color-text-body)] mb-6 max-w-xl text-sm sm:text-base" style={{ fontFamily: "var(--font-family-sans)" }}>
              Nous proposons des formations pratiques, adaptées au contexte local, pour développer des compétences immédiatement applicables en entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/formulaire"
                className="inline-flex items-center justify-center rounded-[var(--border-radius-button)] px-5 py-3 text-white font-[var(--font-weight-medium)] transition-colors hover:opacity-90"
                style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
              >
                Demander une formation
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[var(--border-radius-button)] px-5 py-3 border border-[var(--color-border-light)] bg-white text-[var(--color-text-heading)] font-[var(--font-weight-medium)] transition-colors hover:bg-[var(--color-section-tint)]"
                style={{ fontFamily: "var(--font-family-sans)" }}
              >
                Nous contacter
              </a>
            </div>
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 min-[360px]:gap-4 sm:gap-6">
            <article className="rounded-2xl bg-white shadow-sm border border-[var(--color-border-light)] overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10]">
                <Image src="/DATA.jpg" alt="Formation DATA MASTER" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <span
                  className="absolute top-3 left-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-[var(--font-weight-bold)] shadow-sm border border-white/25 text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.16)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", fontFamily: "var(--font-family-sans)" }}
                >
                  Disponible
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <p className="text-[var(--color-brand-primary)] text-xs font-[var(--font-weight-bold)] uppercase tracking-[var(--letter-spacing-expanded)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                  DATA
                </p>
                <h3 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] leading-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
                  DATA MASTER
                </h3>
                <ul className="mt-1 space-y-2 text-sm text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                  <li className="flex items-center gap-2">
                    <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" /><path d="M6 12v6c3 2 9 2 12 0v-6" /></svg>
                    Parcours certifiant
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg>
                    Durée : 6 semaines
                  </li>
                </ul>

                <div className="pt-2 mt-auto">
                  <Link
                    href="/formations/data-master"
                    className="inline-flex items-center justify-center w-full rounded-[var(--border-radius-button)] px-4 py-2.5 text-white text-sm font-[var(--font-weight-bold)] transition-colors hover:opacity-90"
                    style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white shadow-sm border border-[var(--color-border-light)] overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10]">
                <Image src="/IA2.jpg" alt="Formation IA MASTER" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <span
                  className="absolute top-3 left-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-[var(--font-weight-bold)] shadow-sm border border-white/25 text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.16)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", fontFamily: "var(--font-family-sans)" }}
                >
                  Disponible
                </span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <p className="text-[var(--color-brand-primary)] text-xs font-[var(--font-weight-bold)] uppercase tracking-[var(--letter-spacing-expanded)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                  IA
                </p>
                <h3 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] leading-tight" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>
                  IA MASTER
                </h3>
                <ul className="mt-1 space-y-2 text-sm text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-family-sans)" }}>
                  <li className="flex items-center gap-2">
                    <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z" /><path d="M6 10v1a6 6 0 0 0 12 0v-1" /><path d="M12 17v5" /></svg>
                    Multimodal, agents & MCP
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg>
                    Durée : 6 semaines
                  </li>
                </ul>

                <div className="pt-2 mt-auto">
                  <Link
                    href="/formations/ia-master"
                    className="inline-flex items-center justify-center w-full rounded-[var(--border-radius-button)] px-4 py-2.5 text-white text-sm font-[var(--font-weight-bold)] transition-colors hover:opacity-90"
                    style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </article>
          </div>
          <div className="flex justify-end mt-4 sm:mt-5">
            <Link
              href="/formations"
              className="group inline-flex items-center justify-center gap-3 rounded-[var(--border-radius-button)] px-6 py-3 sm:px-7 sm:py-3.5 text-white font-[var(--font-weight-bold)] text-sm sm:text-base shadow-[0_10px_30px_rgba(26,0,93,0.25)] hover:shadow-[0_14px_38px_rgba(26,0,93,0.32)] hover:translate-y-[-1px] active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-button-primary-bg)]"
              style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
              aria-label="Voir toutes les formations"
            >
              Voir toutes les formations
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/20 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="story" className="py-[var(--padding-section-y)] px-[var(--padding-section-x)]" style={{ background: "var(--color-section-tint)" }}>
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-6 min-[360px]:gap-8 sm:gap-12 items-center">
          <AnimateOnScroll delay={100} className="relative aspect-[4/5] max-h-[220px] min-[280px]:max-h-[260px] min-[360px]:max-h-[320px] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[560px] rounded-lg min-[360px]:rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image src="/ia.jpg" alt="Membre de l'équipe" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
          </AnimateOnScroll>
          <AnimateOnScroll className="order-1 lg:order-2">
          <div>
            <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
              Une équipe d&apos;experts au service de l&apos;IA
            </h2>
            <p className="text-[var(--color-text-body)] mb-6 sm:mb-8 text-sm sm:text-base" style={{ fontFamily: "var(--font-family-sans)" }}>
              Nodes Technology est une entreprise congolaise basée à Brazzaville. Nous développons des solutions d&apos;intelligence artificielle et d&apos;automatisation pour les entreprises (télécoms, assurance, finance) et formons la nouvelle génération via BASE64.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {TEAM_FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-primary)", color: "white" }}>
                    <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span className="font-[var(--font-weight-medium)] text-[var(--color-text-heading)] text-sm sm:text-base" style={{ fontFamily: "var(--font-family-sans)" }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section id="process" className="py-[var(--padding-section-y)] px-[var(--padding-section-x)]" style={{ background: "var(--color-background-white)" }}>
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
          <AnimateOnScroll>
          <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-8 sm:mb-12 text-center" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
            Notre processus métier
          </h2>
          </AnimateOnScroll>
          <div className="grid lg:grid-cols-2 gap-6 min-[360px]:gap-8 sm:gap-12 items-center">
            <AnimateOnScroll delay={100} className="space-y-6 sm:space-y-8 order-1 lg:order-none">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="flex gap-4 sm:gap-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-weight-extrabold)] shrink-0" style={{ color: "var(--color-section-tint)", fontFamily: "var(--font-family-sans)" }}>{step.num}</span>
                  <div>
                    <h3 className="font-[var(--font-weight-bold)] text-[var(--color-text-heading)] mb-2" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-3)" }}>{step.title}</h3>
                    <p className="text-[var(--color-text-body)] text-[var(--font-size-small)]" style={{ fontFamily: "var(--font-family-sans)" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </AnimateOnScroll>
            <AnimateOnScroll delay={200} className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
              <Image src="/pr2.jpg" alt="Notre processus métier" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="py-[var(--padding-section-y)] px-[var(--padding-section-x)]" style={{ background: "var(--color-background-white)" }}>
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
          <AnimateOnScroll>
          <div className="max-w-3xl">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-section-tint)", color: "var(--color-brand-primary)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </div>
            <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
              Des entreprises leaders choisissent Nodes Technology pour leurs solutions d&apos;intelligence artificielle et d&apos;automatisation.
            </h2>
            <p className="text-[var(--color-text-body)]" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-body)" }}>
              Nous accompagnons des organisations dans les secteurs télécoms, assurance, finance et médias pour moderniser leurs systèmes, automatiser leurs interactions clients et développer des solutions technologiques innovantes.
            </p>
          </div>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll delay={200}>
        <div className="max-w-4xl xl:max-w-5xl mx-auto mt-8 min-[360px]:mt-10 sm:mt-16 flex flex-wrap justify-center items-center gap-4 min-[360px]:gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {PARTNER_IMAGES.map((partner) => (
            <div key={partner.src} className="flex items-center justify-center h-10 min-[360px]:h-12 sm:h-14 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        </AnimateOnScroll>
      </section>

      <section className="py-10 min-[360px]:py-12 sm:py-16 lg:py-20 px-[var(--padding-section-x)] text-center" style={{ background: "var(--color-section-tint)" }}>
        <AnimateOnScroll>
        <h2 className="font-[var(--font-weight-extrabold)] text-[var(--color-text-heading)] mb-4 sm:mb-6" style={{ fontFamily: "var(--font-family-sans)", fontSize: "var(--font-size-heading-2)" }}>
          Prêt ? Lancez votre Entreprise
        </h2>
        <Link
          href="/formulaire"
          className="inline-flex items-center justify-center rounded-[var(--border-radius-button)] px-6 py-3 sm:px-8 sm:py-4 text-white font-[var(--font-weight-medium)] text-base sm:text-lg transition-colors hover:opacity-90"
          style={{ backgroundColor: "var(--color-button-primary-bg)", fontFamily: "var(--font-family-sans)" }}
        >
          COMMENCER
        </Link>
        </AnimateOnScroll>
      </section>

      <footer id="contact" className="py-8 min-[280px]:py-10 min-[360px]:py-12 sm:py-16 px-[var(--padding-section-x)] text-white pb-[max(2.5rem,env(safe-area-inset-bottom))]" style={{ background: "var(--color-footer-bg)" }}>
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-5 min-[280px]:gap-6 min-[360px]:gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="text-lg sm:text-xl font-[var(--font-weight-bold)] text-white" style={{ fontFamily: "var(--font-family-sans)" }}>Nodes Technology</a>
            <p className="mt-3 sm:mt-4 text-white/90 text-xs sm:text-[var(--font-size-small)] leading-relaxed" style={{ fontFamily: "var(--font-family-sans)" }}>
              Entreprise technologique congolaise spécialisée en intelligence artificielle, automatisation et transformation digitale. Nous concevons des solutions innovantes qui aident les entreprises à optimiser leurs opérations, automatiser leurs processus et améliorer l&apos;expérience client grâce à l&apos;IA. Brazzaville, Congo. Fondée en 2023.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="LinkedIn Nodes Technology">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Instagram Nodes Technology">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Facebook Nodes Technology">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="uppercase tracking-[var(--letter-spacing-expanded)] font-[var(--font-weight-bold)] text-xs sm:text-[var(--font-size-tagline)] mb-3 sm:mb-4" style={{ fontFamily: "var(--font-family-sans)" }}>NOS SERVICES</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-white/90 text-xs sm:text-[var(--font-size-small)]" style={{ fontFamily: "var(--font-family-sans)" }}>
              {FOOTER_SERVICES.map((item) => (
                <li key={item}><a href="#services" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="uppercase tracking-[var(--letter-spacing-expanded)] font-[var(--font-weight-bold)] text-xs sm:text-[var(--font-size-tagline)] mb-3 sm:mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-family-sans)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Nous contacter
            </h3>
            <p className="text-white/90 text-xs sm:text-[var(--font-size-small)] leading-relaxed" style={{ fontFamily: "var(--font-family-sans)" }}>
              Brazzaville, République du Congo<br />+242 06 529 05 97<br />+242 05 659 11 59<br /><a href="mailto:support@nodes-hub.com" className="hover:text-white transition-colors break-all sm:break-normal inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                support@nodes-hub.com
              </a>
            </p>
          </div>
        </div>
        <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto mt-8 min-[360px]:mt-10 sm:mt-12 pt-5 min-[360px]:pt-6 sm:pt-8 border-t border-white/20 flex flex-col min-[500px]:flex-row justify-between items-center gap-3 min-[360px]:gap-4 text-[var(--font-size-small)] text-white/80 text-center min-[500px]:text-left" style={{ fontFamily: "var(--font-family-sans)" }}>
          <p>© 2026 Nodes Technology — Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </>
  );
}
