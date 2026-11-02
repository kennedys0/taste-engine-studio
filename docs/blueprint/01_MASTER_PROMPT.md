# Taste Engine — Interactive Showcase Website

> **Master build prompt** | Version 1.0 | Vite + React + JavaScript/JSX | English | Default aesthetic: Neo-brutalism
>
> Copy this complete file into a coding agent at the root of the website project. The accompanying documents provide deeper product, route, content, and QA specifications. This prompt overrides earlier Next.js/TypeScript drafts.

## Mission

Build **Taste Engine Studio**: an unusually polished, credible, highly interactive, public-facing product website, documentation entry point, and live UI/UX laboratory for the open-source [Taste Engine](https://github.com/kennedys0/taste-engine) Agent Skill.

**The thesis:** *One system. Many design languages. Real interfaces you can try.*

Visitors should learn what Taste Engine does, understand why style routing matters, install it in their preferred coding agent, and experience the **same functional interface patterns rendered faithfully in each of Taste Engine's ten visual styles**.

This is NOT a collection of ten static themed screenshots. It is a working showcase with forms, navigation, themes, content cards, FAQs, login simulation, dashboards, dialogs, responsive components, and realistic UI states. Every meaningful control must have an observable, truthful outcome.

## 0. Non-negotiable: actually load Taste Engine

1. Before any interface implementation, locate and **read the installed `taste-engine/SKILL.md`**, or the package's `skills/taste-engine/SKILL.md` in the project/repository. Do not merely mention it.
2. Read and apply its routing contract, anti-slop, visual fidelity, hero layout, web quality, SEO, engineering, motion guidance, and **each selected style pack**. Read styles from the installed `styles/` directory; do not recreate them from stereotypes.
3. Read `styles/registry.json` and treat its ten canonical style IDs as the source of truth. For each style route, inspect that style's Markdown rules before implementing its theme and demo components.
4. **Default public website style is explicitly selected: `neo-brutalism`.** Do not stop to ask a style question; this project has an approved direction. Every other style route is also explicitly specified.
5. **Glassmorphism is a material fidelity test:** follow the most recent available Glassmorphism rules. The first viewport must visibly show tinted, frosted glass over differentiated backdrop light; purposeful gradients and ambient color fields are allowed and should be used where they reveal the material. A flat navy page with ordinary buttons FAILS.
6. If the skill is absent or cannot be read, **do not pretend you used it**. Report the missing dependency and give the exact install instruction. Once installed, resume. Verify repo files and current skill version before claiming feature availability.
7. Treat Taste Engine as **design decision authority**, not an excuse to invent content, credentials, functionality, test results, or brand assets. Preserve user decisions and accessibility.

Mandatory evidence in completion report: which skill path was read, which style files were used, what was implemented, what was actually tested, and any known gaps. The skill is an agent instruction package, not proof the website itself is an AI design generator.

## 1. Stack and engineering boundaries

- Vite, React, **plain JavaScript and JSX**, React Router. **No Next.js and no TypeScript.**
- Use modular React components and scoped or token-driven CSS; vanilla CSS/CSS Modules is preferred when sufficient. An accessible component library is allowed if it helps and does not erase style fidelity. Never force Material UI, Tailwind, or a single component library.
- Use React state and local browser storage for **explicitly local demo preferences** only. No backend, accounts, analytics, remote mutation, or fabricated API calls unless specifically configured and genuinely working.
- Native CSS transitions and browser behavior are the motion default. Anime.js v4 may be added for justified coordinated effects only, with cleanup and reduced-motion support.
- Favor minimal dependencies, route/component code splitting, accessible semantic markup, and appropriate image loading.
- Use the actual Taste Engine repository and installed package as the source for module names, supported agents, CLI commands, pack names, and project claims. Do not present unverifiable adoption counts, benchmarks, reviews, testimonials, partnerships, or badge statuses.
- Public-facing content is **English throughout**. Maintain consistent spelling, capitalization, accessible labels, semantic hierarchy, and actionable instructions.

## 2. Information architecture

### Core routes

| Route | Purpose |
| --- | --- |
| `/` | Neo-brutalism homepage and product introduction |
| `/about` | Mission, positioning, who the skill serves |
| `/how-it-works` | Style-routing decision flow and quality gates |
| `/features` | Style packs, anti-slop, SEO, motion, hero, engineering |
| `/styles` | Ten-style exploration index with **working** previews |
| `/showcase` | Feature-rich UI gallery, filters, and live comparison entry |
| `/compare` | Same specimen, two selectable style systems side-by-side |
| `/installation` | Install by agent, global/project, verification and upgrades |
| `/docs` | Documentation index and task-based navigation |
| `/anti-slop` | Anti-slop principles with actionable before/after examples |
| `/seo` | Conditional SEO and truthful content rules |
| `/motion` | Purposeful interaction and reduced-motion guidance |
| `/engineering` | Framework-aware integration, performance and accessibility |
| `/faq` | Real project and installation questions |

### Ten canonical visual style routes

`/claymorphism`, `/glassmorphism`, `/brutalism`, `/neo-brutalism`, `/minimalism`, `/swiss-editorial`, `/bento`, `/skeuomorphism`, `/retro-terminal`, `/enterprise`.

Each canonical style route must link to its **own functional subroutes**:

- `/:style/playground` — comprehensive component laboratory.
- `/:style/login` — full-page auth flow **simulation only**.
- `/:style/dashboard` — operational dashboard with **clearly labeled sample data** and working local filters/preferences.

A single shared implementation backed by the style registry is encouraged; do **not** clone ten unrelated apps. Allow component anatomy to vary for style fidelity, not just button color. Route aliases: `/glassmorphsm` → `/glassmorphism`, `/skeumorphism` → `/skeuomorphism`, `/editorial` and `/swiss` → `/swiss-editorial`, `/install` → `/installation`. Handle unknown style IDs with an actual 404.

Full sitemap and route layout contract: `04_SITEMAP.md` and `05_ROUTE_ARCHITECTURE.md`.

## 3. Homepage: Neo-brutalism as the project's identity

Use the Taste Engine **Neo-brutalism** pack, not a generic bold-colored template. Design a strong **one-visible-screen header + hero**; `100svh` with safe fallback and natural growth on small devices. Deliberate grid, confident typography, purposeful hard shadows/borders, bright but controlled accents, and accessible CTA hierarchy.

The first viewport must explain the product instantly:

- Eyebrow: `OPEN-SOURCE AGENT SKILL` (only if accurate).
- Headline direction: **“Your taste. Your interface. No default aesthetic.”**
- Supporting copy: *“Taste Engine asks for a visual direction, loads the matching style pack, and checks the finished interface for useful design—not generic AI decoration.”*
- Primary CTA **Explore 10 styles** → `/styles`.
- Secondary CTA **Install Taste Engine** → `/installation`.
- Functional, visually compelling mini-comparison showing the **same named specimen** in two to three styles with an actual style switch; no fake statistics.

Page sections, not all crammed into uniform cards: What it is; why generic outputs happen; three-step routing flow; ten style teasers; interactive specimen highlight; anti-slop explained; SEO/motion/engineering; install quick start; functional FAQ; GitHub/contribute CTA and footer. Include a visible command copy button that actually copies a verified install command.

## 4. Every style page is a complete, distinguishable experience

A style page is the product demonstration, not a dark/light reskin of one hero. Each canonical `/:style` route must include:

1. An unmistakable, **full first viewport** hero (unless accessibility on short screens requires expansion), style-specific primary CTA, and one live interactive specimen in the hero. Different material systems may demand different hero compositions.
2. A concise explanation: what this aesthetic is, when it works, why this route is built with Taste Engine.
3. Style DNA: typography, palette logic, spacing/grid, material/surface, borders, shadows, interaction personality. Cite the relevant bundled pack in prose or source attribution.
4. A **curated live specimen gallery**: image/media cards, content/product cards, CTA, FAQ, real navigational affordances, selected form controls, responsive elements and theme toggle. Treat it as a composed page, NOT 30 unrelated nested cards.
5. Clear links to **Playground**, **Login demo**, **Dashboard demo**.
6. A before/after microcase or “What Taste Engine prevents” note that is style-specific and factual; never fabricate a customer quote.
7. Light/dark toggle that retains **the recognizable chosen style** in both modes, with accessible contrast and a meaningful visual transformation rather than automatic color inversion.
8. Previous/next style navigation and back to styles index. Preserve page/anchor navigation on direct refresh.

**Distinct material requirements:**

- Claymorphism: tactile sculpted material, physically plausible soft highlights and controlled depth—not ordinary rounded boxes.
- Glassmorphism: visible refracted/frosted translucent panels filtering differentiated gradient/ambient backdrop; both milky light and smoked dark; backup for unsupported blur and reduced transparency.
- Brutalism: raw structure, type hierarchy, stark edges; no forced rounded friendly UI.
- Neo-brutalism: expressive offset shadows, saturated contrast, playful but disciplined geometry.
- Minimalism: restrained, content-led whitespace, nondecorative controls, excellent typography.
- Swiss/Editorial: precise modular grids, typographic hierarchy, asymmetry backed by content.
- Bento: meaningful tile proportions and hierarchy; avoid generic equally-sized card grids.
- Skeuomorphism: understandable physical control affordances, credible materials, usable native semantics.
- Retro Terminal: terminal-inspired typography and state, *not* illegible tiny green text or fake command execution.
- Enterprise: high-density, efficient forms/tables, durable status architecture, restrained clarity, no fake live operational data.

**Anti-slop is not anti-style:** intentional gradient, border, blur, shadows and illustrations are allowed when characteristic of the chosen aesthetic, meaningful, performant and accessible.

## 5. The Playground: every functional UI/UX category, in EVERY style

Build `/:style/playground` as a navigable, purpose-driven component lab with persistent style/theme controls, category navigation, meaningful states and a “View full screen” action for specimens. Do not dump a mega-grid of idle previews. Each category must demonstrate the **current selected style**, with actual stateful behavior:

| Category | Minimum specimens | Required observable behavior |
| --- | --- | --- |
| **Foundations** | Color palette, type scale, elevation, shape, spacing, icon treatment | Light/dark change reflected immediately; explanatory tokens accurately labeled |
| **Navigation** | Header, responsive menu, tabs, breadcrumb, sidebar or drawer | Tabs change content, mobile menu opens/closes, navigation links go somewhere real |
| **Buttons & feedback** | Primary/secondary/quiet buttons, icon-only, disabled, progress, toast | Valid clicks produce a toast/state; disabled has no action; `aria-live` for updates |
| **Cards & media** | Image card, editorial/blog card, feature card, profile card, optional pricing/product card | Cards have meaningful CTA/action; original/local image assets or attributable assets; no made-up testimonials |
| **Forms** | Text/email/password, checkbox, radio, select, switch, textarea, file picker | Correct labels; client validation; errors announced; input updates; file picker displays filename locally only |
| **Authentication** | Login, create-account, reset-password screens | Working local validation and screen transitions; **explicit “Demo only—no authentication or account creation”** |
| **Data & search** | Searchable list/table, sort, filter, pagination/empty state | Actual filtering/sorting of labeled sample data and URL state where appropriate |
| **Dialogs & overlays** | Modal, dropdown, popover, drawer, tooltip | Keyboard and Escape handling; modal focus management/restore; no fake saves |
| **FAQ & disclosure** | Accordion, details, help text, inline docs | Expand/collapse accessibly; content belongs to Taste Engine, not generic placeholders |
| **Feedback states** | Loading, error, success, empty, offline/disabled | Explicit local state switcher; no manufactured network event or fake “connected” badge |
| **Dashboard** | Summary layout, table, chart/list where useful, settings panel | Filters, toggles and tabs work on **Sample data**; never imply production monitoring |
| **Theme & responsive** | Light/dark switch, viewport preview presets, touch/keyboard path | Theme persists; viewport preview is accurately labeled simulated, plus real device QA |

Build each demo from one shared **specimen content model** and common interaction semantics so cross-style comparisons are meaningful. Allow a style-specific component implementation where tokens alone cannot capture genuine material identity. If the selected aesthetic conflicts with an extreme interaction pattern, keep semantics, accessible affordances, and behavior intact; alter presentation rather than silently deleting coverage.

### “Try it” interactions that must work

- Switch theme and see immediately updated surfaces and contrast; persist preference locally.
- Switch style and **keep the same specimen/content/state when practical**, so users can compare.
- Search/filter/sort a real local sample dataset; display the correct empty state.
- Open a modal; close with button, Escape, and appropriate backdrop click; restore focus.
- Submit login form with local validation. After valid input, show `Demo validation passed. No account was accessed.` NEVER “Signed in” without backend auth.
- Submit reset-password demo and show `Demo only. No email was sent.`
- Expand FAQs and switch tabs; keyboard users receive same function.
- Click `Show toast` and display truthful demo notification.
- Select an image card; show detail with title, alternate text and provenance; avoid unsourced stock photos.
- Try responsive nav in actual mobile width, not just CSS preview frames.
- Copy an installation command; handle clipboard success/failure honestly.

## 6. Full-screen auth preview

Every `/:style/login` is a **complete, responsive, full-page experience** using that style: contextual background or illustration, visually sound fields, email/password, show-password control, remember-me local checkbox, validation, submit action, reset-password step, create-account step, and a return-to-playground link. The route must have a visible **Demo only** note: no account is created, no credentials are persisted or transmitted, no verification message is sent.

Auth preview is not a real authentication system. Do not use fake OAuth logos, third-party login, or misleading “Continue with Google” buttons that do nothing. Never retain entered passwords in localStorage, logs or analytics. On valid demo submission, show **validation-only confirmation**; do not pretend to log in. A production app should later integrate a real provider separately.

## 7. Dashboard preview

Every `/:style/dashboard` showcases information density and state with **one consistent, labeled demonstration dataset** shared across styles. Include a table, search, filters, sort, status chips with explicit `Sample`, a useful chart only if the dataset justifies it, settings toggles, a detail panel/modal, empty state and loading-state preview. No invented live customers, MRR or real traffic. Prefer believable and modest *sample project tasks* over fake growth metrics. Never claim an action saved to the cloud if it only changed React state.

## 8. Theme, contrast and motion quality

All public pages and all ten style variants support intentional **light and dark** schemes. Use per-style color/material tokens instead of inverting colors or setting one purple theme across every pack. Save user theme setting locally; respect initial OS preference if no explicit saved choice. Add a visible theme control and accessible labels.

`prefers-reduced-motion` is mandatory. Avoid perpetual floating particles, scroll hijacking, forced parallax or cinematic intros. CSS/native animation first; Anime.js v4 only for a justified coordinated interaction. Do not animate blur continuously. Components must work even with motion disabled.

## 9. Responsive design and first viewport

- Public landing/marketing heroes default to a **single usable first viewport** (navbar + hero); use `100svh`/safe fallbacks and `min-height`, not a fixed height that clips content. Respect zoom, short viewport, accessibility and user content.
- Mobile: 320px, 375/390px; tablet: 768px; desktop: 1024/1440px; extra-wide when appropriate. Test navigation, form fields, keyboard, landscape, content wrapping, grids, card/action layouts and theme control.
- Use actual responsive layout; preview frame switches do not replace browser/device checks. No clipped CTA, hidden modal dismissal, sideways scrolling or text smaller than necessary to keep a layout.

## 10. Information, content and documentation truth

All site sections introduce or explain **Taste Engine**, not a fictional company. Never create fake contributors, clients, performance data or official endorsements. Explain the honest relationship between this website and the repository's Agent Skill. In copy, distinguish a **style-routing agent skill** from a runtime UI framework and from a web-based AI generator.

Document:

- What it is; who it serves; who it is *not* for; original motivation.
- Style routing: unspecified style → agent asks one question and waits; specified style → reads pack and proceeds; established style → preserves it. Host agent controls skill invocation, so do not promise 100% automatic triggering.
- Ten canonical styles and visual/material quality rules.
- Anti-slop as design utility/truth/copy/accessibility, **not an aesthetic ban**.
- Conditional SEO for public websites; semantic structure, metadata, indexing and truthful content; Vite SPA limitations and actual prerender strategy.
- Motion guidelines; Anime.js as optional not universally mandatory.
- Browser QA and React-aware engineering checks where relevant.
- Installation for Agent Skills CLI, Claude Code, Codex, Antigravity, manual placement, doctor/verifying version and updates. Commands must be checked against the actual repository and CLI.
- Security/privacy of local demos; how to contribute; license; GitHub links.

### Install copy: only if still accurate in checked repository

```bash
npx skills add kennedys0/taste-engine --skill taste-engine
npx skills add kennedys0/taste-engine --skill taste-engine -a claude-code -g -y
npx skills add kennedys0/taste-engine --skill taste-engine -a codex -g -y
npx skills add kennedys0/taste-engine --skill taste-engine -a antigravity -g -y
```

Show a selector for install method/scope, per-method copy, caveats, a verification example and GitHub source link. Never falsely claim a release is published or a one-click updater works when it does not.

See `07_CONTENT_OUTLINE.md` for full page-by-page copy and proof requirements.

## 11. SEO and public deployment readiness for Vite

- Build crawlable, semantic public routes with unique metadata, canonical only when the live canonical domain is known, Open Graph where grounded, valid alt text and accessible heading structure.
- **Vite + React SPA alone does NOT guarantee crawler-visible initial HTML for every client route**. Implement a realistic prerender/static-generation strategy for fixed public routes **or explicitly document unfinished SEO rendering and do not claim it is production-ready**. Route refreshes must work with host fallback or emitted static pages.
- Generate `sitemap.xml` and `robots.txt` for a real known deployment origin; avoid fake URLs. Exclude any private routes. These are public demos but should still have meaningful unique titles and descriptions.
- Minimize layout shift from images, lazy-load below-fold assets, code-split style demos and expensive panels, and preserve Core Web Vitals performance intent without inventing performance measurements.

## 12. Anti-slop, accessibility and quality floor

Use Taste Engine's three-tier review: **FLOOR** usability/truth, **REFLEX** questionable patterns, **FINISH** visual craft. Do not reject genuine stylistic gradients or material treatments because of a simplistic ban. The goal is **stunning because of deliberate design, not spectacular because of meaningless animation**.

Required:

- Every interactive affordance has a working outcome or honest disabled/demo label.
- Semantic HTML, visible `:focus-visible`, proper labels, meaningful icon button names, accessible accordions, dialog semantics, Escape, focus return, validation and `aria-live` where appropriate.
- Sufficient contrast in **actual composited theme states**, including glass-over-gradient.
- No forced mock brand logos, testimonials, fake “online”, fake metrics or pretend network requests.
- Correct empty/error/loading states and truthful feedback copy.
- Responsive layouts free of clipping at narrow widths and zoom.
- Compare **recognizable visual material**, not only background/primary button color.

## 13. Implementation strategy — deliver the working product

Read the companion planning files:

- `02_QUICK_PROMPT.md` — condensed re-entry prompt.
- `03_PRD.md` — product goals, scope, functional requirements and priorities.
- `04_SITEMAP.md` — canonical URL map and relationships.
- `05_ROUTE_ARCHITECTURE.md` — React Router setup, registry, tokens, data, state model and suggested structure.
- `06_COMPONENT_CHECKLIST.md` — component inventory and exact interactions.
- `07_CONTENT_OUTLINE.md` — the written content plan per route.
- `08_QA_ACCEPTANCE.md` — manual/automated test scenarios and release gates.
- `09_BUILD_PLAN.md` — implementation phases and stopping gates.

Implementation order:

1. Inspect repository, skill and available assets; log evidence; verify framework and packages.
2. Build the content architecture, ten-style registry and route shell; no fabricated data.
3. Build a highly finished Neo-brutalism home, style index, install docs and one complete shared specimen.
4. Establish working shared component primitives, state model, auth demo, sample-data dashboard, dark/light and accessible motion.
5. Integrate all ten genuine style-specific material systems, **visually inspecting each one**. Give Glassmorphism a first-viewport material check.
6. Build comparison and playground routes with reliable state and responsive behavior.
7. Test real interactions, keyboard, zoom, mobile, contrast, routing, build, SEO/prerender and error states; fix FLOOR issues before optional polish.
8. Document installation, honest limitations and what was verified.

Do **not** respond with a pretty mockup or a giant untested single component. Implement the project. If time is constrained, ship a smaller **fully functional slice** and explicitly identify unfinished routes rather than making fake working buttons or claiming completion.

## 14. Explicit acceptance contract

The project is acceptable only when all of the following are true:

1. The Taste Engine skill was actually read; the ten real style packs were consulted.
2. `/` is recognizable Neo-brutalism with a usable one-viewport opening.
3. All ten canonical styles are recognizable **without reading their titles**; Glassmorphism looks frosted and layered.
4. Every style can access a working playground, login demo and sample dashboard.
5. Every style has intentional light/dark support; theme switching is not broken.
6. Image cards, FAQ, navbar, tabs, forms, validation, modal, toast, search/filter and settings interactions actually work.
7. Auth and dashboard previews are explicitly labeled as local demos; nothing implies real account/network actions.
8. Internal links, direct refresh and unknown routes behave correctly.
9. Site content truthfully introduces Taste Engine and includes install instructions grounded in repository facts.
10. Keyboard, focus, screen-reader labeling, mobile widths, motion preference and core performance have been tested or explicitly marked unverified.
11. React/Vite builds without errors. Public pages have an honest SEO strategy, not a false blanket promise.
12. The final report distinguishes **implemented**, **tested**, **not tested** and **known gaps**.

**Ship an interactive reference experience people can really use to judge Taste Engine.** Spectacle comes from aesthetic fidelity, strong composition and real interactions. Function and truth always win.
