# Taste Engine Studio — Complete Website Blueprint

A developer-ready, **English-only** planning and agent-prompt package for a public, interactive showcase of the Taste Engine open-source Agent Skill.

**Chosen stack:** Vite + React + JavaScript/JSX + React Router.  
**Site identity:** Neo-brutalism.  
**Style coverage:** All ten canonical Taste Engine styles.  
**Unique selling point:** Real, reusable interactive UI patterns across all styles, including light/dark, image cards, FAQ, login simulation, dashboard, responsive navigation and state previews.  
**Source of truth:** [kennedys0/taste-engine](https://github.com/kennedys0/taste-engine). Local specification aligned with the v0.10.3 style registry and Glassmorphism fidelity/gradient rules; agent must consult the **version actually installed/checked out**, as online `main` may differ.

## Documents

1. [`01_MASTER_PROMPT.md`](01_MASTER_PROMPT.md) — full non-negotiable instructions for the coding agent; start here for a new project.
2. [`02_QUICK_PROMPT.md`](02_QUICK_PROMPT.md) — concise prompt for re-entry, follow-ups or agents with smaller contexts.
3. [`03_PRD.md`](03_PRD.md) — product requirements, scope, priorities, honest demo semantics and success criteria.
4. [`04_SITEMAP.md`](04_SITEMAP.md) — canonical public routes, aliases, navigation and SEO intent.
5. [`05_ROUTE_ARCHITECTURE.md`](05_ROUTE_ARCHITECTURE.md) — suggested React Router tree, JavaScript modules, state, styling and specimen architecture.
6. [`06_COMPONENT_CHECKLIST.md`](06_COMPONENT_CHECKLIST.md) — complete clickable component/interaction inventory and readiness checklist.
7. [`07_CONTENT_OUTLINE.md`](07_CONTENT_OUTLINE.md) — page-by-page editorial plan, example copy, content model and truthful claims.
8. [`08_QA_ACCEPTANCE.md`](08_QA_ACCEPTANCE.md) — browser, interaction, accessibility, visuals, SEO and functional acceptance tests.
9. [`09_BUILD_PLAN.md`](09_BUILD_PLAN.md) — milestone sequence, verification gates and agent handoff protocol.

## Recommended use

Copy the ZIP contents into a project's `docs/blueprint/` (or give them to a coding agent as input). Tell the agent:

> **Read `docs/blueprint/01_MASTER_PROMPT.md`, then the linked specification files. Read the installed Taste Engine skill and every selected style pack before implementing. Build the actual Vite + React JavaScript website, not a design-only draft.**

The project explicitly chooses Neo-brutalism for its main identity. It does not need to ask the preflight style question again. Each of the other ten style routes is explicitly chosen by its route.

## Implementation philosophy

- A preview is **working**, not a static picture: buttons click, tabs switch, dialogs close, forms validate, search filters data and themes change.
- Demo auth **does not authenticate** and sample analytics **do not claim live metrics**. Accurate states are more important than theatrical effects.
- A style is **material and composition**, not a recolor. Apply Taste Engine's actual style packs and visual acceptance checks.
- Light and dark variants must be intentionally designed for every style.
- Glassmorphism may use purposeful gradient illumination behind frosted panes; anti-slop must not flatten the design.
- A public Vite SPA needs an explicit SEO/prerender/hosting strategy; metadata alone is not sufficient proof of crawlability.
- The full website has many routes. Build a tested vertical slice, reuse functional primitives, then scale without cloning ten independent applications.

## Deliverable definition

This ZIP contains **project instructions and planning**, not a prebuilt website. An AI coding agent or developer must implement and test the actual application. All website copy and planning documents are in English.
