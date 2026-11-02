# Product Requirements Document — Taste Engine Studio

**Status:** Implementation specification  
**Scope:** Public marketing + documentation + interactive design showcase  
**Stack:** Vite, React, JavaScript/JSX, React Router  
**Source:** [kennedys0/taste-engine](https://github.com/kennedys0/taste-engine)  
**Reference:** Taste Engine v0.10.3 Glassmorphism rules / 10-style registry (agent verifies installed version)

## 1. Product statement

Taste Engine Studio gives developers, designers, maintainers, and the curious public a **hands-on way to understand and evaluate** the Taste Engine Agent Skill. It demonstrates how one style-routing framework guides AI coding agents to produce **different, recognizable design languages** while preserving usable component behavior, accessibility, honest states and production-minded engineering.

The project has two linked products: (a) a trustworthy information site about the skill; (b) a functioning UI demonstration suite. Visitors should leave knowing how to install Taste Engine and whether its style packs fit their work.

### Primary promise

> **One system. Many design languages. Real interfaces you can try.**

### Non-promises

Taste Engine is not itself an online AI website generator, no hosted design service is included, and the demos do not imply backend authentication, account storage, production telemetry, live billing or real transactions. The open-source skill instructs compatible agents; invocation behavior depends on the host.

## 2. Audience and jobs-to-be-done

| Audience | User job | Primary journey |
| --- | --- | --- |
| First-time coding agent user | Understand what it does and install for my agent | Home → How it works → Installation |
| Frontend developer | Evaluate quality of ten style outputs on real controls | Styles → Chosen style → Playground → Compare |
| UI/UX designer | Judge material fidelity, interaction and accessibility | Styles → Detail → Light/dark → Login + Dashboard |
| Open-source contributor | Understand structure, contribute a new style or fix a defect | Docs → Architecture explanation → GitHub |
| Developer choosing a stack | Verify support and constraints | Features/Engineering → Installation → Docs |

## 3. Goals and measurable acceptance

1. **Clarity:** A first-time visitor can explain the skill's ask-or-load routing contract after reading Home and How it works.
2. **Coverage:** All **10 canonical styles** have a working full-page demo, playground, login simulation and dashboard.
3. **Material fidelity:** Each style is recognizably distinct without reading its page label; special Glassmorphism gate shows visibly frosted/translucent foreground with ambient backdrop in first viewport.
4. **Function:** All listed controls respond truthfully to input. No dead CTA, fake submit, broken navigation or phantom saved confirmation.
5. **Theme:** Each style has intentional light/dark support and appropriate contrast.
6. **Access:** Keyboard workflows, focus management, form labels, usable mobile layouts and reduced-motion behavior meet the QA checklist.
7. **Documentation:** Installation commands are verifiable against current repo; update and troubleshooting notes are accurate.
8. **Publishability:** Public routes direct-load/reload correctly, Vite build succeeds, and SEO output has a tested rendering/deployment approach.

Avoid invented business KPIs. QA metrics should be computed from real implementation/test output, not shown as fabricated marketing statistics.

## 4. Functional scope

### P0 — Must ship

- Main Neo-brutalism website routes and honest Taste Engine overview.
- Ten registered style routes and robust unknown-style/404 handling.
- Full first-viewport style hero with clear content and CTA.
- Design system/theme tokens for all ten styles and independently crafted light/dark variants.
- Reusable **Playground** per style featuring navigation, image/content cards, FAQ, buttons, tabs, forms, dialogs, toasts, state switcher, responsive behavior.
- Functional `/STYLE/login` with local-only validation, sign-up/reset steps and explicit demo disclaimers.
- Functional `/STYLE/dashboard` with clearly labeled sample dataset, filter/search/sort and settings.
- `/compare` for same specimen in two different styles with the same content and behavior.
- Accessible interactions and responsive navigation.
- Install instructions for Agent Skills CLI and named agents; working copy command.
- Static or prerender strategy for main public content in Vite, plus direct route refresh.
- A verified `npm run build`, testing evidence and documented limitations.

### P1 — Strongly desired

- Playground category deep links, search/filter for specimens, full-screen specimen mode, responsive-size switcher with explicit simulation label.
- Style-specific explanatory notes drawn from real skill packs, linked to source docs.
- Dedicated anti-slop, SEO, motion, engineering pages and FAQ explaining caveats.
- Accessibility checks in CI with a selected test framework; automated route smoke tests.
- Progressive loading, route-level lazy imports, image optimization and readable code examples.
- User control for theme and style preference persisted in localStorage (only non-sensitive data).

### P2 — Optional polish

- Animated state transitions for complex interaction sequences if they communicate meaningful changes.
- Export/copy current demonstration tokens or CSS recipe for educational use, without claiming generated production code.
- Standalone component detail URLs if they measurably improve navigation and accessibility.
- Interactive visual selector thumbnails if original local assets exist.

## 5. Core experiences

### 5.1 Visit and orient

Visitors arrive on `/`, immediately see Neo-brutalism and an understandable hero. They choose either **Explore styles** or **Install**. Critical overview text is actual readable HTML, not embedded inside images.

### 5.2 Explore ten styles

The `/styles` gallery presents ten visually distinct previews with short truthful descriptions. Each entry navigates to a canonical style route where a meaningful Taste Engine hero and interactive controls demonstrate the selected aesthetic. Label styles accurately; do not invent an eleventh “Editorial” pack.

### 5.3 Test a style

Inside `/:style/playground`, the user navigates component categories, toggles theme, changes responsive preview viewport, opens dialogs, validates forms, expands FAQ and explores media cards. Each demo reacts with realistic UI-state transitions, not backend pretenses. UI controls are keyboard usable.

### 5.4 Try login and dashboard

Login is a sandbox *front-end validation simulator*: no remote call, token, account, email or persisted password. Dashboard is an educational working app demo backed by static sample data, explicitly identified as sample. All variations across styles share the same dataset and semantics for fair comparison.

### 5.5 Compare two styles

In `/compare`, users select Style A and Style B, pick the same specimen, and compare two independent, synchronized presentation variants. Avoid duplicated interactive element IDs, trap focus or scroll collisions. Provide a narrow-screen stacked layout.

### 5.6 Install

Choose an agent (interactive Agent Skills CLI, Claude Code, Codex, Antigravity IDE/CLI, manual) and copy a **verified** command; link to GitHub source. Clarify global vs project scope, permissions, verification and current release availability. Do not show untested instructions as fact.

## 6. UX content and demo data rules

1. All marketing and docs copy is in English. Aesthetic name labels match the repository.
2. All specimens concern Taste Engine itself or generic **clearly labeled demo** information. Do not switch to fictional fintech startups, fake growth charts or imaginary customers.
3. Sample data must be stored as a single shared local fixture with a visible `Demo / Sample data` indicator near relevant groups.
4. Artwork for image/media cards must be original/local with suitable alt text or attributed. No unlicensed or watermarked imagery.
5. CTA verbs describe real outcomes (`Explore styles`, `Open playground`, `Copy command`). Do not use `Join now`, `Sign in`, or `Pay` for functionality that does not exist, except where clearly framed as a local simulation.
6. Empty, error, loading and success examples must be represented as **explicitly selectable sample UI states**. Only say `Saved locally` if the setting truly persisted; never use `Deployed` or `Email sent` unless it happened.
7. No user credentials in localStorage, URL, logs or client telemetry. For auth demos, never connect external OAuth buttons without working providers.
8. Accessibility is a functional requirement rather than a decorative style preference.

## 7. Visual system requirements

- **Default site identity:** Neo-brutalism in global shell, public marketing sections, documentation nav and footer.
- **Style route isolation:** the chosen pack controls layout rhythm, surface anatomy, colors, shadows, typography and motion for that route's showcase; dark/light variants are intentionally adapted.
- **Shared semantics:** layout and appearance can vary, but the specimen's purpose, headings, states and controls remain comparable across styles.
- **Glassmorphism:** noticeable filtered backdrop, translucent surface tint, edge reflection and foreground readability. Purposeful radial/mesh gradients explicitly permitted to reveal the material. No generic flat navy hero.
- **No style lock-in:** Neo-brutalism is the website identity only, not the default style for people installing the underlying skill.
- **Hero contract:** full first viewport for main marketing and style landing routes with responsive growth as needed, not full-height every component panel.

## 8. Nonfunctional requirements

| Area | Requirement |
| --- | --- |
| Accessibility | Semantic HTML; labels; contrast; keyboard/focus; modal trapping; Escape and focus restore; reduced motion; descriptive errors |
| Responsive | Real support at 320, 390, 768 and 1440 px plus zoom and landscape; no hidden actions or horizontal overflow |
| Performance | Lazy route sections/preview assets; size images; font fallback; don't ship unnecessary animations or full-size media |
| Privacy | Local-only demo inputs; no collection of personal passwords; no remote mutation without explicit configuration |
| SEO | Proper per-route meta; route refresh strategy; static output/prerender or documented limitations; no fictitious domain/canonical |
| Correctness | Routes match registry; no 11th fictional style; real action states; truth about installation compatibility |
| Reliability | Error boundaries, missing route fallback, disabled controls with semantics, clear loading/empty examples |

## 9. Dependencies and constraints

- A readable Taste Engine skill package and the actual ten source style packs. The agent must inspect actual files rather than assuming all features from memory.
- Public GitHub repository, currently known as `kennedys0/taste-engine`. Inspect its README and release status before asserting details.
- No server authentication or backend service is required for demo scope. Do not invent one.
- Current prototype demo art may be CSS/SVG if original and genuinely useful. Brand/logo assets should come from repository/user-provided sources if available; otherwise use proper text treatment, not a counterfeit official logo.
- Vite SPA rendering and hosting fallback are implementation tasks, not automatically solved by React Router.

## 10. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Scope explosion from 10 styles × many specimens | Shared semantics/content and stateful primitives; style registry with CSS tokens + targeted anatomy overrides |
| Ten reskins that don't reflect style material | Mandatory style pack reading; screenshot-level style fidelity review; style-specific material examples |
| High-impact visuals hurt accessibility | Test real contrast and focus; opaque fallbacks; reduced motion/transparency; keyboard validation |
| Demo implies real service | Persistent explicit demo labels; no pseudo-backend; copy states that describe simulation accurately |
| Heavy JavaScript delays interactivity | Lazy routes; load demos on demand; CSS-first motion; simple sample fixtures |
| SEO misrepresented on Vite SPA | Prerender/SSG plan for public routes, host rewrites and actual output checks |
| Broken direct links | Ensure fallback or static route output; test deep URL refresh |
| Product marketing fabricates adoption | Only claim documented repository capabilities; use absence of data rather than invented metrics |

## 11. Definition of Done

P0 is completed, demonstrated on a real running app, keyboard and responsive QA performed, build succeeds, public content is English, and known gaps are explicitly listed. A static mockup or a generated single screenshot **does not** satisfy the PRD.
