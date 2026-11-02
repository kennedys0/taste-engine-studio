import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { routes } from '../src/router';
import { getStyle } from '../src/styles/registry';

describe('Glassmorphism Material Fidelity Quality Gate', () => {
  const cssPath = path.resolve(__dirname, '../src/styles/glassmorphism.css');
  const cssContent = fs.readFileSync(cssPath, 'utf-8');

  it('defines required glassmorphism CSS tokens and optical properties', () => {
    expect(cssContent).toContain('--glass-surface');
    expect(cssContent).toContain('--glass-edge');
    expect(cssContent).toContain('--glass-fallback');
    expect(cssContent).toContain('--glass-blur: 18px');
    expect(cssContent).toContain('backdrop-filter: blur(var(--glass-blur)) saturate(145%)');
  });

  it('preserves intentional radial/mesh ambient background gradients for both light and dark themes', () => {
    // Light theme ambient illumination
    expect(cssContent).toContain('[data-taste-style="glassmorphism"][data-theme="light"]');
    expect(cssContent).toContain('radial-gradient(ellipse 55% 50% at 20% 40%');
    // Dark theme ambient illumination
    expect(cssContent).toContain('[data-taste-style="glassmorphism"][data-theme="dark"]');
    expect(cssContent).toContain('radial-gradient(ellipse 50% 50% at 15% 20%');
    expect(cssContent).toContain('background-attachment: fixed');
  });

  it('implements specular top highlight edge on glass panes', () => {
    expect(cssContent).toContain('.glass-pane::before');
    expect(cssContent).toContain('linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.65), transparent)');
  });

  it('implements fallback for environments without backdrop-filter support', () => {
    expect(cssContent).toContain('@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))');
    expect(cssContent).toContain('background: var(--glass-fallback) !important');
  });

  it('implements accessibility fallback for prefers-reduced-transparency', () => {
    expect(cssContent).toContain('@media (prefers-reduced-transparency: reduce)');
    expect(cssContent).toContain('backdrop-filter: none !important');
  });

  it('renders the glassmorphism overview page with glass panes and material tokens', () => {
    const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/glassmorphism'] });
    const { container } = render(<RouterProvider router={memoryRouter} />);

    const styleContainer = container.querySelector('[data-taste-style="glassmorphism"]');
    expect(styleContainer).toBeInTheDocument();

    const glassPanes = container.querySelectorAll('.glass-pane');
    expect(glassPanes.length).toBeGreaterThan(0);

    const styleObj = getStyle('glassmorphism');
    expect(screen.getByRole('heading', { level: 1, name: styleObj.name })).toBeInTheDocument();
  });
});

