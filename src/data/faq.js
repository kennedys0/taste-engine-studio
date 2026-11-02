/**
 * Taste Engine FAQ
 * Factual, truthful project answers reflecting the open-source Agent Skill.
 */

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Is Taste Engine a runtime UI framework or component library?',
    answer: 'No. Taste Engine is an open-source Agent Skill—a portable package of structured instructions, design tokens, anti-slop rules, and quality gates for AI coding agents (such as Claude Code, Codex, and Antigravity). It instructs the agent on how to write interface code in whatever stack your project uses.'
  },
  {
    id: 'faq-2',
    question: 'Does Taste Engine always force a style onto my project?',
    answer: 'No. The routing contract is threefold: 1) If you request an explicit style (e.g., "Build a glassmorphism landing page"), it loads that pack immediately; 2) If you make a generic request ("Build a portfolio"), it asks ONE single aesthetic question before coding; 3) If you work in an established project with existing styles, it preserves the existing brand without interruption.'
  },
  {
    id: 'faq-3',
    question: 'Do I need React to use Taste Engine?',
    answer: 'No. The Taste Engine skill works across vanilla HTML/CSS, React, Vue, Svelte, Next.js, or mobile frameworks. This particular website (Taste Engine Studio) happens to be built using Vite, React, and plain JavaScript to showcase the styles interactively.'
  },
  {
    id: 'faq-4',
    question: 'Can I define my own custom visual style?',
    answer: 'Yes! Custom aesthetics are first-class in Taste Engine. If your desired look is not in the ten built-in packs, the skill derives a project-specific Design DNA using the same dimensions: typography, palette logic, spatial rhythm, surface materials, borders, shadows, and motion personality.'
  },
  {
    id: 'faq-5',
    question: 'Does Taste Engine handle SEO automatically?',
    answer: 'For new public-facing websites, Taste Engine automatically applies conditional SEO guidance (semantic HTML, unique metadata, crawl structure, Open Graph tags). However, it does not force SEO onto private dashboards or internal tools, nor does it guarantee search engine ranking. In client-side SPAs like Vite, public routes need prerendering or SSG for guaranteed crawler indexing.'
  },
  {
    id: 'faq-6',
    question: 'Is Anime.js v4 mandatory for motion?',
    answer: 'No. Native CSS transitions and standard browser animations are the default. Taste Engine only considers Anime.js v4 when complex coordinated micro-interactions are explicitly needed, and always enforces lifecycle cleanup and prefers-reduced-motion compatibility.'
  },
  {
    id: 'faq-7',
    question: 'Are the login and dashboard previews connected to a real backend?',
    answer: 'No. Every login form, signup flow, password reset, and dashboard on this website is an explicitly local front-end simulation. No credentials are transmitted, stored, or verified, and all dashboard metrics operate on labeled local sample data.'
  },
  {
    id: 'faq-8',
    question: 'Does Taste Engine trigger automatically in every AI IDE?',
    answer: 'Skill discovery and automatic invocation depend on the host platform. Supported platforms like Claude Code, Codex, Antigravity IDE, and the Agent Skills CLI discover installed skills. For agents that lack automated skill discovery, an AGENTS.md snippet or system prompt inclusion ensures activation.'
  },
  {
    id: 'faq-9',
    question: 'Why does Glassmorphism explicitly allow background gradients?',
    answer: 'Glassmorphism is a material fidelity test: a frosted, translucent pane needs something visually differentiated behind it to refract and blur. Without atmospheric light fields or soft radial gradients, a glass card looks like a flat opaque rectangle. Taste Engine anti-slop explicitly permits purposeful ambient gradients that enable the material.'
  },
  {
    id: 'faq-10',
    question: 'How can I contribute to Taste Engine?',
    answer: 'Taste Engine is open source on GitHub under the MIT License (kennedys0/taste-engine). You can propose new style packs, refine anti-slop rules, improve engineering references, or submit bug fixes via GitHub Pull Requests.'
  }
];
