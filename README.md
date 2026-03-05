# 🚀 Nodes Technology

**Site vitrine moderne pour une startup congolaise spécialisée en intelligence artificielle et automatisation.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

> Application one-page performante, responsive et animée — conçue pour présenter les services et l'identité de Nodes Technology (Brazzaville, Congo).

🔗 **Dépôt** : [github.com/bokokoromel-create/nodes-web](https://github.com/bokokoromel-create/nodes-web)

---

## 📋 Sommaire

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Architecture](#-architecture)
- [API Contact](#-api-contact)
- [Ce que j'ai appris](#-ce-que-jai-appris)
- [Améliorations futures](#-améliorations-futures)
- [Auteur / Contact](#-auteur--contact)

---

## 🎯 Aperçu

### Problème résolu

Les entreprises tech africaines manquent souvent d'une vitrine web professionnelle qui reflète leur expertise. Ce projet offre à Nodes Technology une présence digitale moderne, crédible et optimisée pour convertir les visiteurs en clients.

### Public cible

- Entreprises congolaises (télécoms, assurance, finance) recherchant des solutions IA
- Partenaires potentiels et investisseurs
- Candidats souhaitant rejoindre l'équipe

### Points clés

| Métrique | Détail |
|----------|--------|
| Type | Site vitrine one-page |
| Langue | Français |
| Responsive | Mobile, tablette, desktop |
| Performance | SSR Next.js, images optimisées |
| Accessibilité | Navigation clavier, ARIA labels |

---

## ✨ Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| 🧭 **Navbar glassmorphism** | Barre flottante avec effet de flou, menu burger mobile, navigation par ancres (Accueil, Services, Contact) |
| 🖼️ **Hero immersif** | Image plein écran avec overlay, titre animé, boutons CTA « Travailler avec Nodes » et « Lire notre histoire » |
| 🤖 **Section services** | 4 cartes (Développement IA, Transformation digitale, Marketing de précision, Travail d'équipe) + lien vers formulaire |
| 👥 **Présentation équipe** | Photo, mission, points forts (Développement IA, Travail d'équipe, Transformation digitale, Excellence technique) |
| 📊 **Processus métier** | 3 étapes : Analyse et conception, Développement et intégration, Déploiement et amélioration continue |
| 🤝 **Partenaires** | Logos NSIA, Airtel, Canal, CARIA, BASE64, MTN |
| 📝 **Formulaire de contact** | Page `/formulaire` avec validation, envoi vers WhatsApp via API Flow |
| 🛡️ **Dashboard admin** | Interface `/admin` (stats, graphiques, déconnexion) |
| 🎬 **Animations au scroll** | Apparition progressive (fade-up) via IntersectionObserver |
| 📱 **Responsive complet** | Adapté de 320px à 2560px+ |
| 🔗 **Réseaux sociaux** | Liens LinkedIn, Instagram, Facebook dans le footer |

---

## 🛠️ Technologies

| Technologie | Version | Rôle |
|-------------|---------|------|
| **Next.js** | 16.1 | Framework React (App Router, SSR, optimisation images) |
| **React** | 19.2 | Composants UI, hooks (useState, useRef, useEffect) |
| **TypeScript** | 5 | Typage statique et sécurité du code |
| **Tailwind CSS** | 4 | Utility-first CSS, responsive design |
| **Zod** | — | Validation des schémas (API) |
| **Recharts** | 3.x | Graphiques du dashboard admin |
| **CSS Variables** | — | Design system centralisé (couleurs, typo, espacements) |
| **IntersectionObserver** | API native | Animations déclenchées au scroll |
| **ESLint** | 9 | Qualité et cohérence du code |

---

## 📦 Installation

### Prérequis

- **Node.js** 18+
- **npm** 9+ (ou yarn / pnpm)

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/bokokoromel-create/nodes-web.git

# 2. Accéder au dossier
cd nodes-web

# 3. Installer les dépendances
npm install

# 4. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local et renseigner FLOW_API_KEY pour l'envoi WhatsApp

# 5. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur **http://localhost:3000**

---

## 🚀 Utilisation

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (port 3000, hot reload) |
| `npm run build` | Build de production optimisé |
| `npm run start` | Serveur de production |
| `npm run lint` | Vérification ESLint |

### Personnalisation rapide

- **Couleur principale** : modifier `--color-brand-primary` dans `app/globals.css`
- **Contenu** : modifier les constantes (`SERVICES`, `PROCESS_STEPS`, `FOOTER_SERVICES`, etc.) dans `app/page.tsx`
- **Logo** : remplacer `public/nodes png.png`
- **Images** : `ia.jpg` (équipe), `pr2.jpg` (processus), logos partenaires dans `public/`
- **API WhatsApp** : configurer `FLOW_API_KEY` dans `.env.local`

---

## 🏗️ Architecture

```
nodes-web/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     ← API POST contact (validation, rate limit, envoi WhatsApp)
│   ├── admin/
│   │   ├── layout.tsx       ← Layout admin (sidebar)
│   │   └── page.tsx         ← Dashboard (graphiques, stats)
│   ├── formulaire/
│   │   └── page.tsx         ← Formulaire de contact (nom, téléphone, objet)
│   ├── globals.css          ← Design system (variables CSS, animations)
│   ├── layout.tsx           ← Layout racine, metadata SEO
│   └── page.tsx             ← Page d'accueil one-page
├── components/
│   └── admin/
│       ├── Sidebar.tsx      ← Navigation latérale admin
│       └── StatsCard.tsx    ← Cartes Satisfaction / Applications
├── lib/
│   └── rate-limit.ts        ← Rate limiting in-memory (5 req/min par IP)
├── public/
│   ├── nodes png.png        ← Logo de l'entreprise
│   ├── ia.jpg               ← Photo section équipe
│   ├── pr2.jpg              ← Image processus métier
│   └── *.png, *.jpg         ← Logos partenaires (NSIA, Airtel, etc.)
├── .env.example             ← Variables d'environnement (FLOW_API_KEY)
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

### Design system

Le projet utilise un **système de tokens CSS** centralisé dans `:root` :

- **Couleurs** : palette complète (brand, texte, fonds, bordures, boutons)
- **Typographie** : tailles fluides avec `clamp()`
- **Espacements** : padding responsive via `clamp()`
- **Ombres** : ombres portées pour navbar, boutons, cartes

### Responsive design

| Breakpoint | Largeur | Cible |
|------------|---------|-------|
| xs | < 360px | Petits mobiles |
| mobile | 360 – 639px | Mobiles standard |
| sm | 640 – 767px | Grands mobiles |
| md | 768 – 1023px | Tablettes |
| lg+ | 1024px+ | Desktop |

---

## 📡 API Contact

### `POST /api/contact`

Envoie les données du formulaire vers WhatsApp via l'API Flow.

#### Corps de la requête (JSON)

| Champ   | Type   | Validation       | Obligatoire |
|---------|--------|------------------|-------------|
| `name`  | string | min 2 caractères | Oui         |
| `phone` | string | min 8 caractères | Oui         |
| `objet` | string | —                | Oui         |

#### Réponses

| Code | Description                          |
|------|--------------------------------------|
| 200  | Succès — réponse de l'API Flow       |
| 400  | Validation échouée (Zod)             |
| 429  | Trop de requêtes (rate limit)        |
| 500  | Erreur serveur ou clé API manquante  |

#### Rate limiting

- **Limite** : 5 requêtes par minute par IP
- **Variables** : `FLOW_API_KEY` dans `.env.local` (voir `.env.example`)

---

## 📚 Ce que j'ai appris

- **Next.js App Router** : structure moderne avec App Router et Server Components
- **Design system avec CSS Variables** : tokens maintenables
- **Responsive avancé** : breakpoints Tailwind (dont `min-[360px]`)
- **Animations performantes** : IntersectionObserver + CSS
- **Accessibilité** : ARIA, navigation clavier, safe-area-inset
- **API Routes** : validation Zod, rate limiting, envoi API externe
- **Tailwind CSS 4** : nouvelles fonctionnalités

---

## 🔮 Améliorations futures

- [x] ~~Backend (API routes) pour le formulaire de contact~~
- [ ] **CMS headless** (Sanity / Strapi) pour contenu dynamique
- [ ] **Mode sombre** (dark mode)
- [ ] **Multi-langue** (français / anglais)
- [ ] **Tests** (Jest + Testing Library)
- [ ] **Déploiement continu** (Vercel / GitHub Actions)
- [ ] Pages **Mentions légales** et **Politique de confidentialité**

---

## 👤 Auteur / Contact

**Nodes Technology** — Brazzaville, République du Congo

| Canal | Lien |
|-------|------|
| 📧 Email | [support@nodes-hub.com](mailto:support@nodes-hub.com) |
| 💼 LinkedIn | [Nodes Technology](https://cg.linkedin.com/company/nodes-technology) |
| 📷 Instagram | [nodes.technology](https://www.instagram.com/nodes.technology) |
| 📘 Facebook | [Nodes Technology](https://www.facebook.com/share/18KURY3nja/) |
| 🐙 GitHub | [bokokoromel-create](https://github.com/bokokoromel-create) |
| 📞 Téléphone | +242 06 529 05 97 / +242 05 659 11 59 |

---

<p align="center">
  <sub>Fait avec ❤️ à Brazzaville — © 2026 Nodes Technology. Tous droits réservés.</sub>
</p>
