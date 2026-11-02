/**
 * Specimen Catalog for Taste Engine Studio
 * Standardized components and interaction patterns tested across all 10 styles.
 */

export const SPECIMEN_CATEGORIES = [
  { id: 'foundations', label: 'Foundations', icon: 'Palette', desc: 'Palette, type scale, borders, surfaces, elevation' },
  { id: 'navigation', label: 'Navigation', icon: 'Compass', desc: 'Responsive headers, tabs, breadcrumbs, drawers' },
  { id: 'buttons', label: 'Buttons & Actions', icon: 'MousePointer', desc: 'Primary, secondary, icon, disabled, mechanical press' },
  { id: 'cards', label: 'Cards & Media', icon: 'Layout', desc: 'Image cards, editorial teasers, feature modules' },
  { id: 'forms', label: 'Forms & Controls', icon: 'CheckSquare', desc: 'Inputs, selects, checkboxes, switches, file picker' },
  { id: 'auth', label: 'Auth Simulation', icon: 'Lock', desc: 'Login, sign up, password reset demo flows' },
  { id: 'data', label: 'Data & Search', icon: 'Database', desc: 'Filterable, sortable sample table with search' },
  { id: 'overlays', label: 'Dialogs & Toasts', icon: 'Layers', desc: 'Accessible modals, notifications, tooltips' },
  { id: 'disclosure', label: 'FAQ & Disclosure', icon: 'HelpCircle', desc: 'Accessible accordions with real project answers' },
  { id: 'feedback', label: 'Feedback States', icon: 'AlertCircle', desc: 'Loading skeletons, empty states, error banners' },
  { id: 'dashboard', label: 'Dashboard Module', icon: 'Grid', desc: 'Sample project summary, metrics, and actions' }
];

export const MEDIA_CARDS = [
  {
    id: 'media-1',
    title: 'Tactile Architecture in Silicon',
    category: 'Design Systems',
    author: 'Studio Archive',
    date: 'Nov 2026',
    description: 'How physical materials, incident lighting, and edge reflections translate into web interfaces without becoming decorative fluff.',
    alt: 'Abstract vector architectural forms with structured light and shadow',
    accentColor: '#3B82F6',
    // Original SVG art generated for Taste Engine Studio
    svgType: 'geometry'
  },
  {
    id: 'media-2',
    title: 'The Anti-Slop Decision System',
    category: 'AI Engineering',
    author: 'Agent Skills Team',
    date: 'Oct 2026',
    description: 'Separating aesthetic personality from AI-generated boilerplate. Three-tier review: FLOOR, REFLEX, and FINISH quality gates.',
    alt: 'Visual representation of modular decision tiers and quality checkpoints',
    accentColor: '#10B981',
    svgType: 'tiers'
  },
  {
    id: 'media-3',
    title: 'Frosted Glass Physics & Rendering',
    category: 'Material Science',
    author: 'Kennedys Research',
    date: 'Oct 2026',
    description: 'Why Glassmorphism requires differentiated ambient backdrop illumination to make translucent refraction and blur visible.',
    alt: 'Layered frosted glass panes filtering gradient light beams',
    accentColor: '#8B5CF6',
    svgType: 'prism'
  }
];

