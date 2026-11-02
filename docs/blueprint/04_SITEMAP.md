# Sitemap and Information Architecture

**Routing library:** React Router (SPA, with deliberate public prerender/hosting strategy)  
**Marketing/default identity:** Neo-brutalism  
**Language:** English  
**Style IDs:** Exactly 10, from Taste Engine's registry

## 1. Site hierarchy

```text
/
├── /about
├── /how-it-works
├── /features
├── /styles
│   ├── /claymorphism
│   ├── /glassmorphism
│   ├── /brutalism
│   ├── /neo-brutalism
│   ├── /minimalism
│   ├── /swiss-editorial
│   ├── /bento
│   ├── /skeuomorphism
│   ├── /retro-terminal
│   └── /enterprise
│       └── Each of these 10 styles additionally has:
│           /<style>/playground
│           /<style>/login
│           /<style>/dashboard
├── /showcase
├── /compare
├── /installation
├── /docs
├── /anti-slop
├── /seo
├── /motion
├── /engineering
└── /faq

/* (unknown routes) → accessible 404 with a home link
```

The ten visual style routes are intentionally **root-level** (`/glassmorphism`), not nested under `/styles/glassmorphism`, to support direct public sharing and the requested URL format.

## 2. Core page map

| Canonical URL | Main audience intent | Primary action | Content focus |
| --- | --- | --- | --- |
| `/` | What is this? | Explore styles | Value proposition, flow, preview, install |
| `/about` | Why does it exist? | See how it works | Mission, project nature, audience and limits |
| `/how-it-works` | What will the agent do? | Pick a style | Ask → route → load → build → quality check |
| `/features` | What's included? | Open showcase | 10 packs, anti-slop, SEO, motion, hero, engineering |
| `/styles` | Which aesthetic fits? | Open a style | Visual comparison of 10 canonical styles |
| `/showcase` | What UI can I test? | Open playground | Component inventory and interactive category map |
| `/compare` | How does style change output? | Compare two styles | Same specimen, side-by-side interactive demo |
| `/installation` | How do I use it? | Copy install command | Agent/CLI options, verification, troubleshooting |
| `/docs` | Where are the rules? | Open source reference | Topics, quickstarts, GitHub file links |
| `/anti-slop` | What quality gates apply? | See real examples | Truth, purpose, readability, style-specific exceptions |
| `/seo` | How is search readiness handled? | Read install/how-to | Semantic SEO and limits of SPA |
| `/motion` | How does motion work? | Try interaction | CSS/native first, optional Anime.js v4 |
| `/engineering` | How is implementation quality checked? | Explore demo | Accessibility, responsive, React-aware rules |
| `/faq` | Clarify specifics | Go to installation | Real repository, style, compat and demo questions |

## 3. Canonical style routes and presentation identifiers

| Style ID | Public page | Playground | Login demo | Dashboard demo |
| --- | --- | --- | --- | --- |
| `claymorphism` | `/claymorphism` | `/claymorphism/playground` | `/claymorphism/login` | `/claymorphism/dashboard` |
| `glassmorphism` | `/glassmorphism` | `/glassmorphism/playground` | `/glassmorphism/login` | `/glassmorphism/dashboard` |
| `brutalism` | `/brutalism` | `/brutalism/playground` | `/brutalism/login` | `/brutalism/dashboard` |
| `neo-brutalism` | `/neo-brutalism` | `/neo-brutalism/playground` | `/neo-brutalism/login` | `/neo-brutalism/dashboard` |
| `minimalism` | `/minimalism` | `/minimalism/playground` | `/minimalism/login` | `/minimalism/dashboard` |
| `swiss-editorial` | `/swiss-editorial` | `/swiss-editorial/playground` | `/swiss-editorial/login` | `/swiss-editorial/dashboard` |
| `bento` | `/bento` | `/bento/playground` | `/bento/login` | `/bento/dashboard` |
| `skeuomorphism` | `/skeuomorphism` | `/skeuomorphism/playground` | `/skeuomorphism/login` | `/skeuomorphism/dashboard` |
| `retro-terminal` | `/retro-terminal` | `/retro-terminal/playground` | `/retro-terminal/login` | `/retro-terminal/dashboard` |
| `enterprise` | `/enterprise` | `/enterprise/playground` | `/enterprise/login` | `/enterprise/dashboard` |

These 40 style-focused URLs share meaningful content architecture but may use distinct component composition and material tokens. The global homepage remains Neo-brutalism.

## 4. Redirects and aliases

| Incoming URL | Redirect target | Reason |
| --- | --- | --- |
| `/glassmorphsm` | `/glassmorphism` | Common typo seen in earlier prompts |
| `/skeumorphism` | `/skeuomorphism` | Common alternate spelling |
| `/skeumorphsm` | `/skeuomorphism` | Common typo |
| `/swiss` | `/swiss-editorial` | Source pack alias |
| `/editorial` | `/swiss-editorial` | One combined source style pack |
| `/install` | `/installation` | Concise alias |
| `/style` | `/styles` | Singular navigational alias if needed |

**Never create fictional independent `/swiss` or `/editorial` style pack**: both redirect to the combined `swiss-editorial` pack. Do not advertise `/glassmorphsm` as the canonical URL.

## 5. Primary navigation

Desktop top navigation: **Product**, **How it works**, **Styles**, **Showcase**, **Install**, **GitHub**. Secondary routes are discoverable through product/docs navigation and footer. The site should not overload the primary bar with 14 equal-priority items.

Mobile: one accessible menu or suitable adapted navigation. Do not force a five-item app bottom navigation onto a marketing site merely because it appeared in some previous project.

### Style-local navigation

- Back to Styles (`/styles`).
- Current Style Overview (`/:style`).
- Playground (`/:style/playground`).
- Login Demo (`/:style/login`).
- Dashboard Demo (`/:style/dashboard`).
- Previous and next style; style selector; visible light/dark toggle.
- Playground category anchors: `#foundations`, `#navigation`, `#cards`, `#forms`, `#feedback`, `#overlays`, `#data`, `#faq`, `#responsive`.

## 6. URL state and direct linking

Prefer URL search parameters for shareable non-sensitive comparisons and view choices, e.g.:

```text
/compare?left=glassmorphism&right=neo-brutalism&specimen=login
/glassmorphism/playground?category=forms&state=error
/enterprise/dashboard?q=design&sort=name&status=active
```

Validate parameter values against finite allowed lists. Never put email, password, uploaded file path or confidential data in the URL. Theme may be stored as non-sensitive browser preference; allow intentional per-style override where needed.

## 7. Search indexing and crawlability intent

- **Indexable:** public informational pages, canonical style overview pages, optionally meaningful playground/about specimens with unique content.
- **Conditional:** `/.../login` and `/.../dashboard` are demo-only pages; avoid indexing them if their textual content duplicates overviews. Use explicit, accurate metadata and canonical/noindex plan.
- **Robots/sitemap:** generate from real deployment domain and real build output; do not invent a canonical host or include aliases and 404s.
- **Vite SPA:** make static route discoverability a concrete production task—prerender fixed public routes or clearly document that JS-only rendering may be limited for some crawlers.

## 8. Not-found contract

Unknown root path → real 404 experience. Unknown style ID under a style-layout path must not silently fall back to Neo-brutalism or a valid style. Display clear navigation back to styles. For static hosting, configure fallback and correct HTTP status where supported.
