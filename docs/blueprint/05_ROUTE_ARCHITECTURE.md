# Vite + React JavaScript Route and Component Architecture

This is a **recommended implementation architecture**, not a replacement for Taste Engine style packs. Adapt naming to an existing project when appropriate. Use `.js` and `.jsx`; **no TypeScript**.

## 1. Example project layout

```text
taste-engine-studio/
├── public/
│   └── assets/                  # Original/authorized public media
├── src/
│   ├── app/
│   │   ├── App.jsx
│   │   ├── router.jsx
│   │   ├── routes.js
│   │   └── routeMetadata.js
│   ├── layouts/
│   │   ├── SiteLayout.jsx       # Neo-brutalism public shell
│   │   ├── StyleLayout.jsx      # Reads canonical style from URL
│   │   └── PreviewLayout.jsx    # Local style/theme/variant controls
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── InfoPage.jsx         # Shared informational template, not content cloning
│   │   ├── StylesPage.jsx
│   │   ├── ShowcasePage.jsx
│   │   ├── ComparePage.jsx
│   │   ├── InstallationPage.jsx
│   │   ├── DocsPage.jsx
│   │   ├── StyleOverviewPage.jsx
│   │   ├── PlaygroundPage.jsx
│   │   ├── AuthDemoPage.jsx
│   │   ├── DashboardDemoPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── styles/
│   │   ├── registry.js          # Canonical Taste Engine IDs, descriptions
│   │   ├── tokens.css           # Foundations + style-specific variables
│   │   ├── neo-brutalism.css
│   │   ├── glassmorphism.css
│   │   ├── claymorphism.css
│   │   └── ...                  # All ten actual pack implementations
│   ├── components/
│   │   ├── shell/               # Header, footer, responsive nav, theme toggle
│   │   ├── content/             # Hero, information sections, code blocks, FAQ
│   │   ├── specimens/           # Real working UI demonstrations
│   │   ├── forms/               # Accessible form primitives and validation
│   │   ├── overlays/            # Dialog, dropdown, drawer, toast
│   │   ├── data/                # Search, sort, table, empty state
│   │   └── feedback/            # Error, loading, success samples
│   ├── data/
│   │   ├── navigation.js
│   │   ├── specimenCatalog.js
│   │   ├── sampleProjects.js    # Explicit sample fixture; shared by all styles
│   │   ├── faq.js
│   │   └── installMethods.js    # Commands verified against repository
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useDemoState.js
│   │   └── useCopyCommand.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── utilities/
│   │   ├── parseStyleRoute.js
│   │   ├── demoValidation.js
│   │   └── format.js
│   ├── main.jsx
│   └── index.css
├── tests/
│   ├── routes.test.jsx
│   ├── specimens.test.jsx
│   └── e2e/                     # Playwright if installed/authorized
├── package.json
├── vite.config.js
└── README.md
```

**Guardrail:** Don't create fake files to fill the tree. Create only working modules you actually need and keep component APIs practical.

## 2. Router model (conceptual JSX)

Use explicit fixed routes for public informational pages, then a validated parameterized style family. React Router can match fixed and dynamic segments by specificity; still validate style IDs before rendering and redirect aliases explicitly.

```jsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout.jsx';
import StyleLayout from './layouts/StyleLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import StyleOverviewPage from './pages/StyleOverviewPage.jsx';
import PlaygroundPage from './pages/PlaygroundPage.jsx';
import AuthDemoPage from './pages/AuthDemoPage.jsx';
import DashboardDemoPage from './pages/DashboardDemoPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // Add explicitly named informational pages from 04_SITEMAP.md.
      { path: 'glassmorphsm', element: <Navigate to="/glassmorphism" replace /> },
      { path: 'skeumorphism', element: <Navigate to="/skeuomorphism" replace /> },
      { path: ':style', element: <StyleLayout />, children: [
        { index: true, element: <StyleOverviewPage /> },
        { path: 'playground', element: <PlaygroundPage /> },
        { path: 'login', element: <AuthDemoPage /> },
        { path: 'dashboard', element: <DashboardDemoPage /> },
      ]},
      { path: '*', element: <NotFoundPage /> },
    ]
  }
]);

export default router;
```

**Important:** This fragment is **illustrative**, not a complete drop-in router. Add all static routes, remaining aliases, route error boundaries, scroll restoration, lazy loading and 404 handling. `StyleLayout` must reject unknown IDs using registry membership; otherwise dynamic `:style` mistakenly treats `/about` or `/random` as an aesthetic. If deploying static pages, coordinate the router with the output/rewrite strategy.

## 3. Canonical style registry

The website registry is a content model **derived from Taste Engine `styles/registry.json`**; it should not invent 10 unrelated aesthetic labels or create a separate Swiss and Editorial pack.

```js
export const STYLE_IDS = [
  'claymorphism', 'glassmorphism', 'brutalism', 'neo-brutalism',
  'minimalism', 'swiss-editorial', 'bento', 'skeuomorphism',
  'retro-terminal', 'enterprise',
];

export const STYLE_SET = new Set(STYLE_IDS);
export const isValidStyle = (id) => STYLE_SET.has(id);
```

Store style names, short descriptions, pack locations and style-specific composition hints in one registry. Read actual source packs before defining token sets. Never use “the glassmorphism style” while rendering Neo-brutalism tokens on its page.

## 4. Style system and CSS tokens

Set `data-taste-style="glassmorphism"` and `data-theme="light|dark"` on the style route root. Keep *separate semantic variables* for typography, foreground/background, surface, border, shadow, focus, contrast, overlays and motion. Avoid a single global opacity/gradient palette imposed on all ten styles.

```css
[data-taste-style="neo-brutalism"][data-theme="light"] {
  --surface: #fffefa;
  --ink: #141414;
  --accent: #ffd84e;
  --edge: 3px solid var(--ink);
  --raised-shadow: 5px 5px 0 var(--ink);
}
/* Glass needs independently composed ambient backdrop, translucency,
   -webkit-backdrop-filter, inset edge and accessible opaque fallback. */
```

**Material fidelity:** CSS custom properties alone may be insufficient. Implement style-specific primitive anatomy and layouts using composition/variants where required. Glassmorphism has a specialized material fidelity gate; Claymorphism needs tactile depth; Swiss needs deliberate grid and type; Retro Terminal needs accessible console semantics.

Avoid manipulating the whole DOM with repetitive inline styles. Prefer scoped classes and semantic variants. A component should know its state and variant, not silently infer a different style.

## 5. Shared specimen contract

Separate **what a demo is** (content and behavior) from **how the style displays it**.

```js
export const specimenCatalog = [
  { id: 'image-card', label: 'Image card', category: 'cards',
    description: 'Image, text, source and a meaningful action' },
  { id: 'faq', label: 'FAQ accordion', category: 'disclosure',
    description: 'Accessible expand/collapse with project answers' },
  { id: 'auth', label: 'Authentication form demo', category: 'forms',
    description: 'Local validation, no account creation' },
  { id: 'data-table', label: 'Sample project table', category: 'data',
    description: 'Local search/filter/sort of labeled sample data' },
];
```

Use shared React state and event semantics for specimens across all ten styles, but provide style-specific presentational variants for structural characteristics. This makes Compare and Playground consistent without producing ten separate forms and ten broken toasts.

### Source of image cards

Store image metadata `{ id, title, src, alt, credit, licenseOrOrigin }`; use original SVG/CSS assets if they are created for the project. If assets are unavailable, show intentional generated vector art or honest empty image placeholder—not unrelated licensed photography, fake brands or watermarked stock. Keep stable image aspect ratios/dimensions to avoid CLS.

## 6. State architecture

| State | Source | Persistence | Risk |
| --- | --- | --- | --- |
| Current style | URL path | URL | Validate against registry |
| Current specimen | URL query or category anchor | URL | Whitelist allowed values |
| Compare left/right | URL query | URL | Distinct when possible; keep shared specimen |
| Light/dark theme | Theme context | localStorage | Respect OS as initial preference; expose reset |
| Modal, toast, drawer | Local React state | None | Focus trap, Escape and cleanup |
| Form values/password | Local component state | **None** | Never log or transmit credentials |
| Search/filter/sort | URL + local view state | URL where appropriate | Only sample data, no fake server |
| Dashboard sample fixture | Static module | Source code | Prominently label sample |
| Uploaded file example | File input local state | **None** | Display filename only; no upload request |

Handle browser back/forward and state restoration deliberately; prevent theme flashes when feasible without blocking rendering. Don't store significant private data.

## 7. Auth demo interaction model

```text
Initial → Enter credentials → Validate
  ├── invalid input → inline validation errors + focus first error
  └── valid input → demo-only confirmation (NOT signed in)
Switch to sign-up → validate password confirmation → demo-only confirmation
Switch to reset → validate email → "Demo only. No email was sent."
```

No real accounts, auth service, sessions, refresh tokens or fake OAuth. Use an actual `type="password"` input with an accessible show/hide control and **do not persist values**.

## 8. Sample-data dashboard semantics

For a neutral example, use `sampleProjects.js` with **labeled fixture rows**, for instance sample component work items (`Accessible modal`, `Glass material check`, `Mobile navigation`, `SEO page metadata`) each with `status`, `category`, `priority`, and a timestamp only if explicitly marked sample. Search and filters operate over the fixture.

If charting adds value, derive it **from fixture rows**; avoid unsupported KPI claims. `Sample data` label must remain visible in both light/dark. No pretend remote refresh, save, payment, enterprise uptime or user activity.

## 9. Comparing style systems

`/compare?left=glassmorphism&right=neo-brutalism&specimen=auth` renders the same content model under two named style roots. Ensure unique element IDs in each pane, separate form names/labels, deterministic behavior, keyboard navigation and meaningful title announcements on style selection. Mobile comparison stacks; users can focus a single style for detailed inspection.

## 10. Accessibility and motion implementation

- Use `<button>` for actions, `<a>`/Router `<Link>` for navigation; avoid clickable non-semantic divs.
- For toast, use `aria-live` as appropriate. Dialogs should restore prior focus; Escape closes, backdrop behavior is predictable.
- FAQ may use native `<details>`/`<summary>` where appropriate or accessible accordion with `aria-expanded`.
- Focus ring must be visually distinct in every style/theme. Ensure links/icons have names.
- Prefer `transform` and `opacity` for animated feedback; no endless backdrop animations. `prefers-reduced-motion` disables nonessential animations.
- Glassmorphism additionally needs reduced-transparency and blur-not-supported fallbacks.

## 11. SEO, routing and deployment boundaries

Vite + client-side React may serve an identical HTML shell for all URLs. **Unique React `<title>` updates alone are not a guarantee that every search engine sees complete route content.** Prefer a tested static prerender strategy for finite public routes. Verify deep URLs and optional static output on the hosting platform. Add correct route metadata; avoid inventing a canonical domain or release status.

Automated tests can use Vitest + React Testing Library; browser tests may use Playwright if available. Run `npm run build` and a route smoke test. Do not claim end-to-end behavior unless a real browser was run.
