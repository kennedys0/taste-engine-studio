/**
 * Canonical Style Component Class Map
 * Maps each of the 10 canonical styles to its authentic primary button, secondary button,
 * surface card, and input classes, ensuring zero cross-contamination of neo-brutalism
 * into other design systems.
 */
export function getStyleThemeClasses(styleId) {
  switch (styleId) {
    case 'glassmorphism':
      return {
        btnPrimary: 'glass-btn-primary',
        btnSecondary: 'glass-btn-secondary',
        card: 'glass-pane',
        input: 'glass-input',
        badge: 'glass-badge',
      };
    case 'claymorphism':
      return {
        btnPrimary: 'clay-btn-primary',
        btnSecondary: 'clay-btn-secondary',
        card: 'clay-card',
        input: 'clay-input-well',
        badge: 'clay-badge',
      };
    case 'brutalism':
      return {
        btnPrimary: 'brutal-btn-primary',
        btnSecondary: 'brutal-btn-secondary',
        card: 'brutal-card',
        input: 'brutal-input',
        badge: 'brutal-badge',
      };
    case 'minimalism':
      return {
        btnPrimary: 'mini-btn-primary',
        btnSecondary: 'mini-btn-secondary',
        card: 'mini-card',
        input: 'mini-input',
        badge: 'mini-badge',
      };
    case 'swiss-editorial':
      return {
        btnPrimary: 'swiss-btn-primary',
        btnSecondary: 'swiss-btn-secondary',
        card: 'swiss-card',
        input: 'swiss-input',
        badge: 'swiss-badge',
      };
    case 'bento':
      return {
        btnPrimary: 'bento-btn-primary',
        btnSecondary: 'bento-btn-secondary',
        card: 'bento-tile',
        input: 'bento-input',
        badge: 'bento-badge',
      };
    case 'skeuomorphism':
      return {
        btnPrimary: 'skeuo-btn-primary',
        btnSecondary: 'skeuo-btn-secondary',
        card: 'skeuo-panel',
        input: 'skeuo-well',
        badge: 'skeuo-badge',
      };
    case 'retro-terminal':
      return {
        btnPrimary: 'term-btn-primary',
        btnSecondary: 'term-btn-secondary',
        card: 'term-window',
        input: 'term-input',
        badge: 'term-badge',
      };
    case 'enterprise':
      return {
        btnPrimary: 'ent-btn-primary',
        btnSecondary: 'ent-btn-secondary',
        card: 'ent-card',
        input: 'ent-input',
        badge: 'ent-badge',
      };
    case 'neo-brutalism':
    default:
      return {
        btnPrimary: 'neo-btn-primary',
        btnSecondary: 'neo-btn-secondary',
        card: 'neo-card',
        input: 'neo-input',
        badge: 'neo-badge',
      };
  }
}

