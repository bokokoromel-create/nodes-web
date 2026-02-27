# Nodes Technologie

> Site vitrine one-page de **Nodes Technologie** — entreprise congolaise (Brazzaville) spécialisée en intelligence artificielle et automatisation.

**Stack** : Next.js 16 &bull; React 19 &bull; TypeScript 5 &bull; Tailwind CSS 4

**Production** : [nodes-web](https://github.com/bokokoromel-create/nodes-web)

---

## Sommaire

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Scripts](#scripts)
- [Architecture](#architecture)
- [Design system](#design-system)
- [Sections](#sections)
- [Responsive](#responsive)
- [Animations](#animations)
- [Personnalisation](#personnalisation)
- [Images](#images)
- [Licence](#licence)

---

## Prérequis

| Outil    | Version minimale |
|----------|-----------------|
| Node.js  | 18+             |
| npm      | 9+ (ou yarn / pnpm) |

---

## Installation

```bash
git clone https://github.com/bokokoromel-create/nodes-web.git
cd nodes-web
npm install
```

---

## Scripts

| Commande          | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Serveur de développement (port 3000) |
| `npm run build`   | Build de production                |
| `npm run start`   | Serveur de production              |
| `npm run lint`    | Vérification ESLint                |

---

## Architecture

```
nodes-web/
├── app/
│   ├── globals.css        # Design tokens (variables CSS) + styles globaux
│   ├── layout.tsx         # Layout racine, metadata, balise <html lang="fr">
│   └── page.tsx           # Page unique : toutes les sections
├── public/
│   └── nodes png.png      # Logo Nodes Technologie
├── next.config.ts         # Config Next.js (domaines images autorisés)
├── postcss.config.mjs     # PostCSS + Tailwind
├── tsconfig.json          # Configuration TypeScript
├── package.json
└── README.md
```

### Fichiers clés

| Fichier             | Rôle                                                                 |
|---------------------|----------------------------------------------------------------------|
| `app/page.tsx`      | Composant principal : navbar, hero, services, team, process, projets, témoignages, CTA, footer |
| `app/globals.css`   | Design system centralisé (couleurs, typo, espacements, animations)   |
| `app/layout.tsx`    | Enveloppe HTML, langue FR, metadata SEO, viewport                    |

---

## Design system

Toutes les valeurs sont centralisées dans `app/globals.css` via des variables CSS (`:root`). Modifier une variable met à jour l'ensemble du site.

### Palette

| Variable                       | Valeur     | Usage                       |
|--------------------------------|------------|-----------------------------|
| `--color-brand-primary`        | `#1a005d`  | Accent principal            |
| `--color-text-heading`         | `#1a005d`  | Titres                      |
| `--color-text-body`            | `#2a2a3e`  | Texte courant               |
| `--color-link-text`            | `#5a5a6e`  | Liens, texte secondaire     |
| `--color-border-light`         | `#e0e2ee`  | Bordures, séparateurs       |
| `--color-section-muted`        | `#f5f4fa`  | Fond sections claires       |
| `--color-section-tint`         | `#ebe8f5`  | Fond sections teintées      |
| `--color-footer-bg`            | `#1a005d`  | Fond footer                 |
| `--color-button-primary-bg`    | `#1a005d`  | Boutons CTA                 |

### Typographie

| Variable                    | Valeur / Plage          |
|-----------------------------|-------------------------|
| `--font-family-sans`        | System UI sans-serif    |
| `--font-size-heading-1`     | `clamp(2rem, 4vw, 3rem)` |
| `--font-size-heading-2`     | `clamp(1.5rem, 3vw, 2.25rem)` |
| `--font-size-heading-3`     | `clamp(1.125rem, 2vw, 1.5rem)` |
| `--font-size-body`          | `1rem`                  |
| `--font-size-small`         | `0.875rem`              |
| `--font-weight-extrabold`   | `800`                   |

### Espacements

| Variable                | Valeur                         |
|-------------------------|--------------------------------|
| `--padding-section-x`  | `clamp(0.75rem, 3vw, 4rem)`   |
| `--padding-section-y`  | `clamp(1.5rem, 4vw, 4rem)`    |
| `--border-radius-button`| `0.5rem`                      |

---

## Sections

| #  | Section          | ID            | Description                                                              |
|----|------------------|---------------|--------------------------------------------------------------------------|
| 1  | **Navbar**       | —             | Barre flottante glassmorphism, logo, navigation, CTA, menu mobile        |
| 2  | **Hero**         | `#hero`       | Image plein écran + overlay, titre, tagline, CTA "Travailler avec Nodes" |
| 3  | **Services**     | `#services`   | 4 cartes (IA, Assistant Virtuel, Chatbot, Marketing), bouton             |
| 4  | **Équipe**       | `#story`      | Photo + texte mission, 4 points forts                                    |
| 5  | **Process**      | `#process`    | 3 étapes métier (01, 02, 03) + image                                     |
| 6  | **Projets**      | `#projects`   | Slider horizontal (AYA, YANOLA, AGRISEARCH, BASE64), pagination dots     |
| 7  | **Témoignages**  | —             | Citation client, avatar, logos partenaires                               |
| 8  | **CTA**          | —             | Titre + bouton "Commencer"                                               |
| 9  | **Footer**       | `#contact`    | Infos, services, liens, contact, newsletter, copyright                   |

---

## Responsive

Le site s'adapte à **5 breakpoints** pour couvrir tous les appareils :

| Breakpoint        | Largeur       | Appareils ciblés                              |
|-------------------|---------------|-----------------------------------------------|
| **xs**            | < 360px       | Petits mobiles (iPhone SE, Galaxy A01)         |
| **mobile**        | 360 – 639px   | Mobiles standard (iPhone, Galaxy, Pixel)       |
| **sm** (tablette) | 640 – 767px   | Grands mobiles, petites tablettes              |
| **md**            | 768 – 1023px  | Tablettes (iPad, Galaxy Tab)                   |
| **lg+**           | 1024px+       | Desktop, grands écrans                         |

### Adaptations par breakpoint

- **< 360px** : navbar compacte, titre hero `text-xl`, cartes projets 260px, padding réduit, logo 28px
- **360 – 639px** : titre `text-2xl`, cartes 280px, espacement standard mobile
- **640 – 767px** : grilles à 2 colonnes (services, team), boutons côte à côte
- **768 – 1023px** : navigation desktop visible, recherche affichée
- **1024px+** : grilles 2 colonnes complètes, cartes 320px, espacement large

### Gestion des encoches (notch)

- `viewport-fit: cover` activé via metadata
- `env(safe-area-inset-*)` appliqué sur le body et le footer
- Navbar : `paddingTop` calculé avec `max(0.5rem, env(safe-area-inset-top))`

---

## Animations

Chaque section apparaît avec une animation **fade-up** déclenchée au scroll via `IntersectionObserver`.

| Composant          | Animation          | Délai     |
|--------------------|--------------------|-----------|
| `AnimateOnScroll`  | fade-up (28px → 0) | 0 – 200ms |

- Seuil de déclenchement : 10% de l'élément visible
- Éléments en cascade dans la même section via le paramètre `delay`
- Respecte `prefers-reduced-motion` du navigateur (via Tailwind)

---

## Personnalisation

### Données

Toutes les données sont définies dans des constantes en haut de `app/page.tsx` :

| Constante          | Contenu                              |
|---------------------|--------------------------------------|
| `NAV_LINKS`         | Liens de navigation (label + href)   |
| `SERVICES`          | Cartes services (icône, titre, desc) |
| `TEAM_FEATURES`     | Points forts de l'équipe             |
| `PROCESS_STEPS`     | Étapes du processus métier           |
| `PROJECT_SLIDES`    | Projets du slider (image, titre)     |
| `CLIENT_LOGOS`      | Noms des partenaires                 |
| `FOOTER_SERVICES`   | Liste services footer                |
| `FOOTER_LINKS`      | Liens utiles footer                  |

### Changer la couleur principale

Modifier `--color-brand-primary` dans `app/globals.css`. Les variables dérivées (`--color-text-heading`, `--color-footer-bg`, `--color-button-primary-bg`) utilisent la même valeur par défaut.

---

## Images

- **Composant** : `next/image` pour l'optimisation automatique
- **Domaines autorisés** (dans `next.config.ts`) : `images.unsplash.com`, `placehold.co`
- **Logo** : `public/nodes png.png`
- **Images locales** : placer dans `public/` et référencer via `/nom-fichier.ext`

---

## Licence

Projet privé — Nodes Technologie, Brazzaville, Congo.
