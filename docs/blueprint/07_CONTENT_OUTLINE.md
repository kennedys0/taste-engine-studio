# Content Plan and Editorial Outline — All Website Pages

**Language:** English only  
**Voice:** Direct, credible, thoughtful, concise, specific; technically accurate without being inaccessible  
**Source of truth:** The checked-out Taste Engine repository and installed Agent Skill  
**Goal:** Every page teaches something true about Taste Engine and offers a meaningful action.

## Content integrity rules

- Distinguish **Agent Skill instructions** from **a running frontend framework** or a hosted generation product. The website is an interactive showcase built with the skill, not proof the skill automatically executes in every coding agent.
- Use **exactly ten** canonical style packs. Don't invent separate Swiss and Editorial packs or promote a fake default style for user projects.
- Distinguish real implemented UI functionality from demo-only state. `Demo validation passed` is honest; `You're signed in` is not.
- Never invent user counts, GitHub star numbers, sponsor lists, speed benchmarks, production traffic or testimonial names.
- Include concrete examples whenever “anti-slop”, “SEO”, “motion”, “quality” or “style fidelity” is mentioned.
- Keep brand specifics editable. Avoid pretending official logo files exist unless provided by the actual repository or user.

## 1. Home — `/`

**Audience question:** What is Taste Engine, and why should I care?  
**Primary CTA:** Explore styles (`/styles`)  
**Secondary CTA:** Install Taste Engine (`/installation`)

**Hero suggestion:**

- Eyebrow: `OPEN-SOURCE AGENT SKILL`
- Heading: **“Your taste. Your interface. No default aesthetic.”**
- Description: “Taste Engine helps coding agents ask which visual direction you want, load that style's rules, and evaluate the result for usability, clarity and design integrity.”
- Demonstration: same sample interactive UI in a Neo-brutalism card and a contrasting second style, with a style toggle.

**Recommended section flow:**

1. A problem visually explained: an AI agent chooses a generic aesthetic without asking.
2. A solution explained: explicit style request → selected pack → build and check.
3. One system, ten styles: curated style-gallery preview and full gallery CTA.
4. Live component demonstration: tabs or theme switcher that works immediately.
5. What's included: routing, style packs, anti-slop, SEO, motion, hero layout, engineering.
6. Install snippet with copy button; verify exact command.
7. A real FAQ and community/GitHub links.

**Avoid:** fabricated adoption badges, “trusted by 10,000 teams”, stock dashboard KPIs, purposeless floating blobs.

## 2. About — `/about`

**Question:** Why does the project exist?  
**Headline:** “Design preference should belong to the person building the product.”

Explain how AI-generated interfaces converge on a recognizable generic look, how that frustrates different designers, and why Taste Engine separates aesthetic selection from page structure. Describe the skill as portable, modular, not tied to a house style or mandatory framework. Admit limits: host agent controls discovery, humans still need to judge outcomes, and a style pack doesn't eliminate accessibility/performance work.

**CTA:** See how it works → `/how-it-works`.

## 3. How it works — `/how-it-works`

**Question:** What will an agent actually do when Taste Engine is installed?  
**Headline:** “Ask when needed. Load when specified. Preserve what already works.”

Use a readable, interactive 3-scenario stepper or segmented demo with exact request/behavior pairs:

- **No style:** `Build a portfolio website.` → agent asks one aesthetic question **before implementation**.
- **Named style:** `Build a glassmorphism portfolio.` → agent loads Glassmorphism rules and proceeds without asking again.
- **Existing project:** `Fix mobile navigation on this website.` → agent preserves approved project design system.

Then describe the quality pipeline: product/usage context → style material and layout → anti-slop review → conditional SEO → purposeful motion → browser validation. Clarify that skill invocation is conditional on host agent capabilities.

**CTA:** Explore styles → `/styles`.

## 4. Features — `/features`

**Question:** What comes inside Taste Engine?  
**Headline:** “Design guidance that travels with the work.”

Cover:

- Style routing and source registry.
- Ten independent style packs.
- Anti-slop design, copy and QA gates.
- Full-viewport hero guidance for public marketing contexts.
- SEO for public-facing sites, not private dashboards.
- Anime.js v4 optional motion; CSS/native default.
- React-specific optimization when React is actually used.
- Installer and update tooling; warn that exact availability depends on repository version.

Each feature has an example trigger and a concrete benefit. Avoid arbitrary equal-card grids if grouped rows, illustrations or a narrative layout serve the content better.

## 5. Style gallery — `/styles`

**Question:** Which visual language fits my product?  
**Headline:** “Ten styles. No aesthetic assigned for you.”

Each card includes **real distinct style treatment**, short description, characteristic material and CTA (`Explore Glassmorphism`, `Explore Bento`, etc.). Add filters if useful (expressive, content-driven, data-first) but do not misrepresent ranking as an official quality score. Clicking a card opens its canonical route.

Optional toggle: light/dark preview on gallery. It must genuinely alter rendering, not only a label.

## 6. Showcase — `/showcase`

**Question:** What UI patterns can I actually test?  
**Headline:** “Try the controls, not just the colors.”

Show clear functional category entry points: navigation, buttons, media cards, content, auth, data, overlays, FAQ, feedback states, responsive and themes. Let visitors choose a style and category; open canonical `/:style/playground`. Explain that some examples are intentionally local demos to keep the site safe and truthful.

**CTA:** Open Playground.

## 7. Compare — `/compare`

**Question:** How does the same interface change between styles?  
**Headline:** “Same behavior. Different visual language.”

Two selectors for style A/style B, one specimen selector, two equal-content live renders. Include short notes on what differs (material, rhythm, hierarchy, motion) and what stays constant (labels, tasks, keyboard support, accurate state). Default comparison can be Neo-brutalism vs Glassmorphism for strong contrast. Shareable URL parameters.

## 8. Installation — `/installation`

**Question:** How do I install it in my coding agent?  
**Headline:** “Install the skill. Keep your own aesthetic.”

Show:

- Preflight: Node.js / agent support caveats as applicable.
- Quick start CLI: `npx skills add kennedys0/taste-engine --skill taste-engine`.
- Claude Code / Codex / Antigravity Agent Skills CLI choices with documented command examples.
- Native installer paths and manual SKILL.md placement, **only if confirmed against checked-out repo**.
- Global vs project-scoped installation tradeoffs.
- How to verify skill discovery and load (`Build a portfolio`, `Build a glassmorphism portfolio`).
- Updating: distinguish release-based updater from local ZIP; do not imply new GitHub Releases already exist.
- Troubleshooting: permission denied for executable scripts, PATH issues, missing style selection and unsupported host version.

Use functional copy buttons. Show warnings next to commands whose details may vary; link to `README.md` and `INSTALL.md` on GitHub.

## 9. Docs — `/docs`

**Question:** Where do I find reference instructions?  
**Headline:** “From style selection to finishing quality.”

Create a task-driven reference index linking to the site's How it works, Style library, Anti-slop, SEO, Motion and Engineering guides, plus canonical GitHub source files where valid. Offer search filtering by topic if working. Do not display made-up `documentation updated` timestamps.

## 10. Anti-slop — `/anti-slop`

**Question:** What does the anti-slop rule actually reject?  
**Headline:** “Quality without a mandated aesthetic.”

Explain three tiers:

- **Floor:** Real content, functional controls, accessibility, truthful claims, responsive behavior.
- **Reflex:** Examine common weak habits—fake metrics, generic hero claims, nested-card clutter, decorative badges, no-purpose animation.
- **Finish:** Improve optical spacing, alignment, font hierarchy, motion details where supported.

Interactive examples: button that falsely says “Saved to cloud” (flag as wrong, not actionable) versus `Changes are saved in this demo only`; empty state with a useful next step versus random dashboard graphic; Glassmorphism without visible frosted effect versus gradient-backlit glass. Explain that gradients, expressive shadows and physical controls are valid when **purposeful and characteristic of the selected style**.

## 11. SEO — `/seo`

**Question:** What SEO help is actually included?  
**Headline:** “Search readiness follows the page's purpose.”

Cover semantic HTML, unique titles, descriptions, real canonical targets, robots/sitemap, structured data only when supported by facts, and honest readable content. Show public site vs internal application conditional behavior. Explain that **a Vite React SPA needs a verified prerender/render strategy for crawlable route content**; avoid the claim that React metadata automatically makes everything SEO-optimized. Link to the skill's SEO references.

## 12. Motion — `/motion`

**Question:** How does Taste Engine decide what moves?  
**Headline:** “Motion should explain interaction.”

A working micro-interaction lab with style-specific button press, tab switching, modal entry and navigation state. Compare CSS/native motion vs optional Anime.js v4 for coordinated effects. Reduced-motion toggle is an educational **preview** of the behavior, but the app must also honor the browser's actual system preference. No endless ambient loops.

## 13. Engineering — `/engineering`

**Question:** What keeps implementations usable?  
**Headline:** “Aesthetic fidelity and engineering discipline are complementary.”

Explain accessible focus, form labels, keyboard use, responsive content, honest loading/error states, code splitting, image sizing and React-specific performance where relevant. No claim of passing audits before actual tests are performed. Link to the actual code/skill reference files where possible.

## 14. FAQ — `/faq`

A keyboard-friendly accordion with honest sample questions and answers:

1. **Is Taste Engine a UI framework?** No. It's a portable instruction skill for compatible AI coding agents.
2. **Does it always force a style?** No. It asks when none is given, or uses an approved choice.
3. **Do I need React?** No for the skill; this particular showcase is built with React.
4. **Can I create my own style?** Taste Engine allows custom aesthetic directions; check the installed skill for its composition/extension rules.
5. **Does it support SEO?** Conditional advice for public websites, not a guarantee of ranking.
6. **Is Anime.js mandatory?** No; native/CSS first, library only when useful.
7. **Are the login and dashboard demos real accounts?** No. The forms and sample data run locally for design evaluation.
8. **Does it work in every AI IDE?** Host support and skill discovery vary; inspect compatible hosts and install docs.
9. **How can I contribute?** Link to the repository's contribution guidance.
10. **Does Glassmorphism allow gradients?** Yes. Controlled backdrops make frosted material visually perceptible.

Use these questions in both the dedicated FAQ and contextual mini-FAQ sections where appropriate. Avoid duplicating dozens of identical blocks on every route.

## 15. Ten style overview routes — shared information, different expression

Each style page's headline pattern can be `Taste Engine, interpreted through [Style Name]`, but vary the actual editorial composition and specimen presentation according to its pack. Each page contains: recognizable first-viewport hero, one useful interactive element, factual style DNA, a sample content/media card, FAQ or disclosure sample, links to Playground/Login/Dashboard, theme toggle and style traversal.

| Style | Demonstrable material character | Appropriate signature specimen |
| --- | --- | --- |
| Claymorphism | Sculpted highlights and depth, soft tactile actions | Pressable settings control / profile specimen |
| Glassmorphism | Frosted translucent foreground, milky or smoked glass, lit gradients | Layered auth or media card over soft ambient backdrop |
| Brutalism | Raw typographic structure, direct edges and assertive grid | Strong editorial/content block with accessible action |
| Neo-brutalism | Thick borders, offset shadows, color contrast | Expressive CTA/button/form with decisive pressed feedback |
| Minimalism | Quiet hierarchy, clear typographic scale and negative space | Well-structured search form or editorial card |
| Swiss / Editorial | Grid logic, typographic rhythm, disciplined hierarchy | Asymmetric documentation/article card composition |
| Bento | Variable tile geometry with information priorities | Media+feature tiles with meaningful card-size difference |
| Skeuomorphism | Physical control affordances, credible tactile materials | Dial/toggle or inset form with operable state |
| Retro Terminal | Terminal visual grammar, legible console blocks | Keyboard-friendly command reference with copy action |
| Enterprise | Data hierarchy and efficient operational controls | Searchable, sortable sample project table |

**Material warning:** A generic bold heading and a colored button are not sufficient to demonstrate Glassmorphism, Claymorphism, Skeuomorphism or another material-dependent aesthetic. Refer to actual style pack acceptance rules.

## 16. Playground demo copy and sample fixture

### Reusable images/cards

- **Image card:** `The shape of glass` — a clearly labeled original vector illustration of a frosted pane over two ambient light fields. CTA: `View material notes`.
- **Content card:** `How style routing works` — link to the real explanatory route.
- **Feature card:** `Quality gates` — short factual explanation with link to Anti-slop.
- **Profile/sample card:** `Component specimen` with **no invented person or human avatar**.

### Example sample project rows (clearly labeled demo data)

| ID | Sample task | Category | Sample status |
| --- | --- | --- | --- |
| 01 | Glass material fidelity check | Visual QA | Review |
| 02 | Keyboard-operable dialog | Accessibility | In progress |
| 03 | Build a responsive style hero | Layout | Planned |
| 04 | Audit Vite route metadata | SEO | Planned |
| 05 | Verify animation reduction | Motion | Complete |

These are **illustrative local fixtures, not actual open GitHub issues**. The dataset should be the same across styles. The status filter, search and sort must genuinely work. Do not label it `Live projects` or `Production uptime`.

### Honest feedback copy

- Toast: `Demo notification displayed.`
- Form invalid: `Enter a valid email address.`
- Login valid: `Demo validation passed. No account was accessed.`
- Reset password: `Demo only. No email was sent.`
- Preference change: `Theme preference saved on this device.` (only if actually persisted).
- File selection: `Selected locally: example.png. Nothing was uploaded.` (with actual selected filename).
- Empty search: `No sample items match these filters. Clear filters to see all samples.`

## 17. Footer and external destinations

- Taste Engine short explanation and open-source identity.
- `GitHub` → `https://github.com/kennedys0/taste-engine`.
- `Install` → `/installation`.
- `Explore styles` → `/styles`.
- `Documentation` → `/docs`.
- `Contribute` → checked repository's contribution guidelines.
- MIT license only if repo actually contains LICENSE confirming it.
- Sponsorship links only if they **exist and are verified**; do not create dead donation CTAs.

## 18. Editorial QA questions

Before approving copy, ask: Is every claim supported by the source? Does each route answer a distinct reader question? Are styles described visually rather than with empty buzzwords? Does every CTA have a real destination? Are demo actions explicitly local? Would a developer understand how to install the skill without guessing a package name? Does public website copy distinguish design instruction from runtime capability?
