/**
 * Taste Engine Canonical Style Registry
 * Derived directly from Taste Engine v0.10.3 / styles/registry.json
 * This is the single source of truth for the ten canonical design languages.
 */

export const STYLES = [
  {
    id: 'neo-brutalism',
    label: 'Neo-brutalism',
    tagline: 'Playful bold strokes, high-contrast black borders, hard unblurred offset shadows, and tactile mechanical click feedback.',
    recommendedFor: 'Creator tools, playful SaaS, modern developer portals, indie products, and marketing pages demanding unmistakable personality.',
    materialFidelityGate: 'Solid 2.5px-3px jet-black outlines, crisp 0-blur directional offset drop shadows (3px-8px), tactile click depression along shadow vector, saturated pop color blocking.',
    typography: 'Space Grotesk, Archivo, system-ui; bold display scale (36px-64px), tight line-height, uppercase tracked tags.',
    colorDirection: {
      light: 'Warm cream base (#FFFDF7), jet black ink (#121212), electric yellow (#FFE600), hot coral (#FF5757), cyan (#4DEEEA).',
      dark: 'Deep ink base (#18181B), stark white borders (2.5px solid #FAFAFA), electric lime/violet accents, white/accent offset shadows.'
    },
    motionPersonality: 'Crisp 120ms-140ms linear/ease-out physical press collapse; zero spring bounce or endless floating loops.',
    antiSlopException: 'Hard unblurred offset shadows, thick black outlines, and saturated color pills are legitimate material traits, not decorative clutter.',
    path: 'styles/neo-brutalism.md',
    aliases: ['neobrutalism', 'neo brutalism', 'neubrutalism', 'neobrutalisme', 'neo brutalist', 'neobrutalist']
  },
  {
    id: 'glassmorphism',
    label: 'Glassmorphism',
    tagline: 'Visibly frosted, translucent panels filtering differentiated background light, with readable specular edges and genuine optical depth.',
    recommendedFor: 'Expressive portfolios, product landing pages, media interfaces, hero overlays, and bounded creative dashboards.',
    materialFidelityGate: 'First viewport MUST visibly show tinted frosted glass filtering differentiated ambient gradient light behind and beyond the pane. Backdrop blur 16px-24px, 1px highlight edge, opaque fallback.',
    typography: 'Inter, DM Sans, system-ui; clear geometric sans (15px-17px body, 36px-56px display), high contrast over composite surfaces.',
    colorDirection: {
      light: 'Milky frosted glass: semi-opaque white panes (rgba(255,255,255,0.38)) over blue/lavender atmospheric radial light fields (#F8FBFF base).',
      dark: 'Smoked dark glass: translucent slate panels (rgba(43,53,80,0.42)) over deep navy (#0F1727) base with purple/cyan ambient light fields.'
    },
    motionPersonality: 'Gentle 160ms-220ms smooth opacity/translate response on hover/dialogs; no perpetual orbiting particle animations.',
    antiSlopException: 'Purposeful multi-stop radial/mesh gradient backdrops and ambient light fields are EXPLICITLY PERMITTED because they make translucent frosting perceptible.',
    path: 'styles/glassmorphism.md',
    aliases: ['glass', 'glass morphism', 'glassmorph', 'glassmorfisme', 'frosted glass', 'frosted ui', 'glassmorphsm']
  },
  {
    id: 'claymorphism',
    label: 'Claymorphism',
    tagline: 'Molded, tactile, sculpted surfaces with dual inner-shadow volumetric depth, soft ambient tinted drop shadows, and friendly physical presence.',
    recommendedFor: 'Playful consumer tools, creative software, personal dashboards, interactive widgets, and educational platforms.',
    materialFidelityGate: 'Opposing dual inner shadows (top-left highlight + bottom-right form shadow), directional tinted drop shadows, plush pill/squircle geometry (24px-32px radius), sunken well inputs with relief rim.',
    typography: 'Manrope, Nunito Sans, system-ui; warm friendly geometric type, generous line height, clear sentence case.',
    colorDirection: {
      light: 'Pastel lilac canvas (#D7D1F1), saturated violet primary clay (#813FFC), soft porcelain light clay (#ECEBF5), sunken relief wells (#D7D1F1).',
      dark: 'Deep midnight violet canvas (#1E1838), luminous sculpted purple clay (#7A38F0), slate-lavender surfaces (#2D2550), dark sunken wells.'
    },
    motionPersonality: 'Smooth 160ms-200ms ease-out tactile compression (scale(0.97) translateY(2px)) on click; zero cartoon rubber bounce.',
    antiSlopException: 'Dual inner highlights and soft ambient drop shadows are material-enabling properties essential for tactile volumetric depth.',
    path: 'styles/claymorphism.md',
    aliases: ['clay', 'claymorph', 'clay morphism', 'claymorfisme', 'soft clay', 'sculpted clay', 'tactile clay']
  },
  {
    id: 'brutalism',
    label: 'Brutalism',
    tagline: 'Raw structural honesty, exposed layout scaffolding, unapologetic monochrome contrast, and zero cosmetic camouflage.',
    recommendedFor: 'Architectural portfolios, independent publishing, art/culture institutions, and activist or developer manifestos.',
    materialFidelityGate: 'Exposed structural border grid (2px-3px solid #000000), 0px square corners, zero blur or drop shadows, instant 0ms color inversion on click/hover, WCAG AAA contrast.',
    typography: 'Arial Black, Helvetica, IBM Plex Mono; massive display scale (44px-72px), tight line-height, monospaced metadata [DOC_REF: 4092].',
    colorDirection: {
      light: 'Stark paper white (#FFFFFF) or architectural concrete (#E5E5E5), pure black ink/borders (#000000), single signal red (#FF0000) or warning amber accent.',
      dark: 'Pitch black base (#000000), stark white lines/text (#FFFFFF), heavy rectangular blocks, single signal yellow or red.'
    },
    motionPersonality: 'Immediate 0ms state flips or 60ms-80ms linear transitions; zero easing, zero spring physics.',
    antiSlopException: 'Exposed thick structural borders and razor-sharp monochrome contrast celebrate honest layout scaffolding, not decorative noise.',
    path: 'styles/brutalism.md',
    aliases: ['brutalist', 'brutalisme', 'raw brutalism', 'web brutalism']
  },
  {
    id: 'minimalism',
    label: 'Minimalism',
    tagline: 'Purposeful restraint, active intentional negative space, mathematical typographic calibration, and effortless information clarity.',
    recommendedFor: 'High-focus productivity tools, developer utilities, focused e-commerce storefronts, personal portfolios, and documentation hubs.',
    materialFidelityGate: 'Generous active negative space framing content, mathematical type scale (32px-44px heading, 15px-16px body), hairline dividers (1px rgba(0,0,0,0.08)), high contrast WCAG AA, quiet 6px-12px radii.',
    typography: 'Inter, Source Sans 3, SF Pro, system-ui; disciplined hierarchy, tight tracking on titles, scannable reading layout.',
    colorDirection: {
      light: 'Warm neutral paper base (#FAFAF9 or #FFFFFF), deep slate typography (#18181B), balanced neutral secondary text (#52525B), cobalt accent (#2563EB).',
      dark: 'Muted obsidian canvas (#121214), crisp porcelain typography (#F4F4F5), quiet borders (rgba(255,255,255,0.10)), amber or cobalt accent focus.'
    },
    motionPersonality: 'Quiet 120ms-160ms ease-out opacity and subtle background transitions; motion is felt, not watched.',
    antiSlopException: 'Active whitespace and deliberate omission of boxes/badges is authentic functional design, not unfinished empty space.',
    path: 'styles/minimalism.md',
    aliases: ['minimalist', 'minimalis', 'minimalisme', 'minimal ui']
  },
  {
    id: 'swiss-editorial',
    label: 'Swiss / Editorial',
    tagline: 'Rigorous grid-driven typographic hierarchy, stark scale contrast, structural hairline rules, numbered indexes, and intentional negative space.',
    recommendedFor: 'Design agencies, architectural publications, editorial portfolios, cultural magazines, and luxury product narratives.',
    materialFidelityGate: 'Decisive contrast between massive display headlines (48px-72px) and disciplined body copy (16px), 1px horizontal structural dividing rules, numbered section hierarchy (01, 02), strict 12-column grid alignment, single signal accent.',
    typography: 'Helvetica Neue, Neue Haas Grotesk, Inter; dramatic display scale, tight tracking, tracked uppercase section markers (letter-spacing: 0.08em).',
    colorDirection: {
      light: 'Crisp paper white (#FFFFFF or #FBFBFA), deep obsidian ink (#111111), 1px structural dividing rules, single Swiss Red (#E3000F) or Klein Blue (#002FA7).',
      dark: 'Deep gallery charcoal (#141416), crisp off-white typography (#F5F5F7), subtle hairline rules (#2A2A2E), electric Swiss Red or International Klein Blue.'
    },
    motionPersonality: 'Minimal, instantaneous or 120ms clean linear transitions; focus on crisp typographic state changes.',
    antiSlopException: 'Dramatic headline scale up to 72px and generous asymmetric negative space serve as primary structural materials, replacing graphics or shadows.',
    path: 'styles/swiss-editorial.md',
    aliases: ['swiss', 'editorial', 'swiss design', 'international typographic style', 'swiss editorial']
  },
  {
    id: 'bento',
    label: 'Bento Grid',
    tagline: 'Asymmetric modular card composition with strict visual weight hierarchy, diverse internal tile anatomy, and unified spatial rhythm.',
    recommendedFor: 'Product overviews, developer feature discovery, dashboard summaries, hardware/software ecosystem showcases, and portfolio landing pages.',
    materialFidelityGate: 'Distinct focal hierarchy: 1 dominant hero tile (2x2 or 2x1), 1-2 medium tiles, 2-3 compact tiles; each tile features a unique internal anatomy; uniform 16px-24px gutters; 20px-28px corner curvature.',
    typography: 'DM Sans, Manrope, Inter; hero titles 28px-44px, tile headings 18px-22px, scannable concise body text.',
    colorDirection: {
      light: 'Clean architectural light (#F8F9FA), pure white porcelain tiles (#FFFFFF), hairline dividers (rgba(0,0,0,0.06)), charcoal typography (#18181B), violet accent.',
      dark: 'Obsidian slate base (#0B0D10), elevated graphite tiles (#15191E), 1px translucent borders (rgba(255,255,255,0.08)), electric violet (#8B5CF6) or cyan (#06B6D4) accent.'
    },
    motionPersonality: '140ms-200ms smooth ease-out tile elevation on hover; no competing animated tiles.',
    antiSlopException: 'Asymmetric grid spans and compartmentalized modular tiles reflect authentic Japanese bento organization; uniform card templates are slop.',
    path: 'styles/bento.md',
    aliases: ['bento grid', 'bento layout', 'bento ui']
  },
  {
    id: 'skeuomorphism',
    label: 'Skeuomorphism',
    tagline: 'Digital controls borrow tangible affordances from physical objects, industrial machinery, and analog hardware.',
    recommendedFor: 'Music production and audio gear tools, specialized simulators, tactile dashboard widgets, creative instruments, and playful tactile experiences.',
    materialFidelityGate: 'Top-down specular highlight catch (1px white top highlight inset), multi-stop linear/radial reflective gradients, recessed dark wells for displays/sliders, 1.5px physical mechanical depression on click, LED jewel indicators.',
    typography: 'IBM Plex Sans, DIN Next, Roboto Mono; uppercase tracked labels (letter-spacing: 0.08em), high-contrast LCD/LED monospace readouts.',
    colorDirection: {
      light: 'Brushed studio aluminum chassis (linear-gradient #E8ECEF to #D2D7DE), dark engraved labels (#1A1E24), polished metal buttons with top highlights, jewel LED indicators.',
      dark: 'Anodized gunmetal / machined slate chassis (linear-gradient #323741 to #262A32), 1px top highlight, sunken black wells (#141619), signal amber (#FFAE00) or aviation green (#10B981) LEDs.'
    },
    motionPersonality: '140ms-180ms mechanical weighted response; direct 1.5px physical depression on click without cartoon bounce.',
    antiSlopException: 'Multi-stop metallic gradients, 1px highlight bevels, recessed well channels, and physical spring travel communicate mechanical affordance.',
    path: 'styles/skeuomorphism.md',
    aliases: ['skeuomorphic', 'skeuomorph', 'skeuomorfisme', 'skeumorphism', 'skeumorphsm', 'physical ui', 'realistic physical controls']
  },
  {
    id: 'retro-terminal',
    label: 'Retro Terminal',
    tagline: 'Authentic CRT developer-console visual language, phosphor glow, monospace tabular structure, and modern keyboard-driven utility.',
    recommendedFor: 'Developer portfolios, CLI cloud dashboards, cybersecurity and devops tools, system monitoring consoles, and creative coding experiences.',
    materialFidelityGate: 'Obsidian base with phosphor glow (text-shadow 0 0 6px currentColor), controlled static CRT scanline overlay, bracketed ASCII framing ([SYS_OK], ┌─┐), active prompt line (visitor@terminal:~$), monospace character tabular alignment.',
    typography: 'JetBrains Mono, IBM Plex Mono, Fira Code; strict character grid alignment, bracketed uppercase headings (### [SYSTEM_STATUS]).',
    colorDirection: {
      light: 'Paper CRT console: bone cream (#F4F1EA) background with subtle scanlines, deep amber-brown (#7C4A03) phosphor text, dark box borders.',
      dark: 'Classic amber CRT: obsidian black (#0C0D0E) with warm phosphor amber (#FFB000, glow rgba(255,176,0,0.45)); or phosphor matrix green (#33FF33).'
    },
    motionPersonality: 'Immediate 0ms-80ms terminal response; optional skippable prompt typing effect; respects reduced-motion strictly.',
    antiSlopException: 'Static CRT scanline raster and phosphor text glow are material-enabling properties of cathode-ray tube terminals, not empty gimmickry.',
    path: 'styles/retro-terminal.md',
    aliases: ['terminal ui', 'terminal aesthetic', 'retro terminal', 'cli style', 'console aesthetic']
  },
  {
    id: 'enterprise',
    label: 'Enterprise / Data-first',
    tagline: 'Information-dense operational cockpits, tabular data alignment, semantic status tokens, keyboard productivity, and reliable workflow architecture.',
    recommendedFor: 'B2B SaaS platforms, operational admin consoles, cloud infrastructure monitors, fintech/trading portals, logistics backends, and data-intensive productivity tools.',
    materialFidelityGate: 'Compact tabular architecture (32px-40px rows), flush tabular numerals (tabular-nums), calibrated WCAG AA semantic status tokens, search with keyboard hint (⌘K), real sort/pagination controls.',
    typography: 'Inter, Source Sans 3, system-ui; 13px-14px cells, 12px uppercase tracking on column headers, JetBrains Mono for IDs/hashes.',
    colorDirection: {
      light: 'Soft neutral canvas (#F9FAFB), pure white table rows (#FFFFFF), hairline dividers (#E5E7EB), deep enterprise blue accent (#2563EB), calibrated status pills (Healthy #ECFDF5/#065F46).',
      dark: 'Charcoal slate foundation (#0F1117), elevated table surface (#161922), hairline borders (#232733), high-contrast status tokens, vibrant blue/emerald accents.'
    },
    motionPersonality: 'Minimal 100ms-120ms linear state feedback; zero movement during data filtering or sorting.',
    antiSlopException: 'Dense scannable data tables, filter toolbars, status indicators, and keyboard badges are required operational instruments, not dashboard clutter.',
    path: 'styles/enterprise.md',
    aliases: ['data first', 'data-first ui', 'enterprise ui', 'enterprise design', 'professional data ui']
  }
];

export const STYLE_IDS = STYLES.map((s) => s.id);
export const STYLE_MAP = new Map(STYLES.map((s) => [s.id, s]));

export const ALIAS_MAP = new Map([
  ['glassmorphsm', 'glassmorphism'],
  ['glassmorph', 'glassmorphism'],
  ['glass-morphism', 'glassmorphism'],
  ['skeumorphism', 'skeuomorphism'],
  ['skeumorphsm', 'skeuomorphism'],
  ['skeuomorph', 'skeuomorphism'],
  ['swiss', 'swiss-editorial'],
  ['editorial', 'swiss-editorial'],
  ['neobrutalism', 'neo-brutalism'],
  ['neubrutalism', 'neo-brutalism'],
  ['clay', 'claymorphism'],
  ['brutalist', 'brutalism'],
  ['minimalist', 'minimalism'],
  ['terminal', 'retro-terminal'],
  ['data-first', 'enterprise']
]);

export function resolveStyleId(input) {
  if (!input) return null;
  const normalized = input.toLowerCase().trim();
  if (STYLE_MAP.has(normalized)) return normalized;
  if (ALIAS_MAP.has(normalized)) return ALIAS_MAP.get(normalized);
  return null;
}

export function isValidStyle(id) {
  return STYLE_MAP.has(id);
}

export function getStyle(id) {
  return STYLE_MAP.get(id) || null;
}
