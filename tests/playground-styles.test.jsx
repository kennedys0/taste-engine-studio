import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PlaygroundPage from '../src/pages/PlaygroundPage';
import StyleLayout from '../src/layouts/StyleLayout';
import { STYLES } from '../src/styles/registry';
import { getStyleThemeClasses } from '../src/utils/styleTheme';

describe('Playground Style Isolation & Anti-Contamination Verification', () => {
  // Test non-neo styles to ensure NO neo-brutalism buttons/cards leak into them
  const nonNeoStyles = STYLES.filter((s) => s.id !== 'neo-brutalism');

  nonNeoStyles.forEach((style) => {
    it(`verifies ${style.label} (${style.id}) playground contains zero neo-brutalist buttons or cards`, () => {
      const theme = getStyleThemeClasses(style.id);

      const { container } = render(
        <MemoryRouter initialEntries={[`/${style.id}/playground`]}>
          <Routes>
            <Route path="/:style" element={<StyleLayout />}>
              <Route path="playground" element={<PlaygroundPage />} />
            </Route>
          </Routes>
        </MemoryRouter>
      );

      // 1. Heading verification
      expect(screen.getByRole('heading', { level: 1, name: new RegExp(`${style.label} Playground`, 'i') })).toBeInTheDocument();

      // 2. Assert NO neo-btn-primary or neo-btn-secondary elements exist in the playground container
      const neoButtons = container.querySelectorAll('.neo-btn-primary, .neo-btn-secondary');
      expect(neoButtons.length).toBe(0);

      // 3. Assert NO neo-card elements exist in the playground container
      const neoCards = container.querySelectorAll('.neo-card');
      expect(neoCards.length).toBe(0);

      // 4. Assert active style's authentic primary buttons exist
      const activePrimaryButtons = container.querySelectorAll(`.${theme.btnPrimary}`);
      expect(activePrimaryButtons.length).toBeGreaterThan(0);

      // 5. Assert active style's authentic secondary buttons exist
      const activeSecondaryButtons = container.querySelectorAll(`.${theme.btnSecondary}`);
      expect(activeSecondaryButtons.length).toBeGreaterThan(0);

      // 6. Assert active style's authentic card / pane exists
      const activeCards = container.querySelectorAll(`.${theme.card}`);
      expect(activeCards.length).toBeGreaterThan(0);
    });
  });

  it('verifies neo-brutalism playground authentically uses neo-btn and neo-card', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/neo-brutalism/playground']}>
        <Routes>
          <Route path="/:style" element={<StyleLayout />}>
            <Route path="playground" element={<PlaygroundPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1, name: /Neo-brutalism Playground/i })).toBeInTheDocument();

    const neoButtons = container.querySelectorAll('.neo-btn-primary, .neo-btn-secondary');
    expect(neoButtons.length).toBeGreaterThan(0);

    const neoCards = container.querySelectorAll('.neo-card');
    expect(neoCards.length).toBeGreaterThan(0);
  });
});
