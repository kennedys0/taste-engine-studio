# Taste Engine Studio — Quick Build Prompt

Build a production-quality, **English-language** marketing + documentation + interactive UI/UX showcase website for the open-source [Taste Engine](https://github.com/kennedys0/taste-engine) Agent Skill, using **Vite + React + JavaScript/JSX + React Router**. Do not use Next.js or TypeScript.

**Mandatory preflight:** Locate and read Taste Engine's actual `SKILL.md`, `styles/registry.json`, and the relevant style packs before coding. The aesthetic is explicitly decided: **Neo-brutalism is the homepage/default site identity**, so do not ask a style question. Follow anti-slop, full-screen hero, SEO, motion, web-quality and engineering rules. If the skill cannot be read, say so—never pretend compliance.

**Product thesis:** “One system. Many design languages. Real interfaces you can try.” Explain what Taste Engine is, how its agent-side style routing works, why it avoids generic UI, what is included, who it serves and how to install it. Distinguish an Agent Skill from a UI framework or hosted AI generator. No invented stats, testimonials, credentials or live data.

**Main pages:** `/`, `/about`, `/how-it-works`, `/features`, `/styles`, `/showcase`, `/compare`, `/installation`, `/docs`, `/anti-slop`, `/seo`, `/motion`, `/engineering`, `/faq`.

**Exactly ten canonical aesthetic routes** (read actual packs): `/claymorphism`, `/glassmorphism`, `/brutalism`, `/neo-brutalism`, `/minimalism`, `/swiss-editorial`, `/bento`, `/skeuomorphism`, `/retro-terminal`, `/enterprise`. Every style route must be a visually recognizable, full-screen-hero Taste Engine explanation with a functional demo and links to `/:style/playground`, `/:style/login`, `/:style/dashboard`.

**Every style's playable showcase must include** usable navigation and responsive menu, image/media/content cards, FAQ accordion, tabs, inputs and validation, form controls, theme toggle with **intentional light/dark themes**, modal/toast/dropdown, searchable sortable labeled-sample dataset, local-only login/signup/reset-password **simulator**, demo dashboard, settings, loading/empty/error/success previews, and mobile behavior. Controls do not count as functional if nothing happens. Auth demos MUST say no accounts are created and no email is sent; do not transmit or store passwords.

**Visual fidelity:** Styles are not mere palette switches. Clay must feel sculpted; Swiss typographic; Neo-brutal bold with offset shadows; Glassmorphism must have obvious **translucent frosted glass over gradient/ambient backdrop** (light milky and dark smoked), not flat navy. Purposeful gradients are allowed where material fidelity needs them. All styles require accessibility, reduced motion and honest demo feedback.

**Engineering:** Reuse stateful specimens with a registry-driven theme system; use style-specific anatomy when necessary. Code-split large demos. Validate React Router direct refresh, keyboard/focus, mobile 320–1440 widths, zoom, no fake status, and Vite SEO/prerender limitations. Public content is English. Verify real install commands before showing them; expected command is `npx skills add kennedys0/taste-engine --skill taste-engine`.

**Deliver working code**, not only an attractive mockup. Implement the routes, functionality, responsive designs, documentation, theme switching and error states. Test and report what was actually verified. Follow the full specification in `01_MASTER_PROMPT.md` and supporting `03_PRD.md` through `09_BUILD_PLAN.md`.
