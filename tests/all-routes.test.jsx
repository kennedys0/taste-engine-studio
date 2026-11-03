import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from '../src/router';
import { STYLE_IDS } from '../src/styles/registry';

describe('Complete 54-Route Matrix Smoke Verification', () => {
  const coreRoutes = [
    '/',
    '/about',
    '/how-it-works',
    '/features',
    '/styles',
    '/compare',
    '/installation',
    '/docs',
    '/anti-slop',
    '/seo',
    '/motion',
    '/engineering',
    '/faq',
  ];

  it.each(coreRoutes)('renders core route %s cleanly', (path) => {
    const memoryRouter = createMemoryRouter(routes, { initialEntries: [path] });
    const { container } = render(<RouterProvider router={memoryRouter} />);
    expect(container).toBeDefined();
    expect(document.querySelector('header')).toBeInTheDocument();
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  describe('Ten Canonical Style Overview Routes', () => {
    it.each(STYLE_IDS)('renders canonical style overview: /%s', (styleId) => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: [`/${styleId}`] });
      const { container } = render(<RouterProvider router={memoryRouter} />);
      expect(container.querySelector(`[data-taste-style="${styleId}"]`)).toBeInTheDocument();
    });
  });

  describe('Thirty Canonical Style Subroutes', () => {
    for (const styleId of STYLE_IDS) {
      it(`renders /${styleId}/playground`, () => {
        const memoryRouter = createMemoryRouter(routes, { initialEntries: [`/${styleId}/playground`] });
        const { container } = render(<RouterProvider router={memoryRouter} />);
        expect(container.querySelector(`[data-taste-style="${styleId}"]`)).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: /playground/i })).toBeInTheDocument();
      });

      it(`renders /${styleId}/login`, () => {
        const memoryRouter = createMemoryRouter(routes, { initialEntries: [`/${styleId}/login`] });
        const { container } = render(<RouterProvider router={memoryRouter} />);
        expect(container.querySelector(`[data-taste-style="${styleId}"]`)).toBeInTheDocument();
        expect(screen.getByText(/demo only — no account/i)).toBeInTheDocument();
      });

      it(`renders /${styleId}/dashboard`, () => {
        const memoryRouter = createMemoryRouter(routes, { initialEntries: [`/${styleId}/dashboard`] });
        const { container } = render(<RouterProvider router={memoryRouter} />);
        expect(container.querySelector(`[data-taste-style="${styleId}"]`)).toBeInTheDocument();
        expect(screen.getByText(/sample data notice/i)).toBeInTheDocument();
      });
    }
  });

  describe('Route Aliases & Unknown 404 Handling', () => {
    it('redirects /glassmorphsm to /glassmorphism', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/glassmorphsm'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(memoryRouter.state.location.pathname).toBe('/glassmorphism');
    });

    it('redirects /skeumorphism to /skeuomorphism', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/skeumorphism'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(memoryRouter.state.location.pathname).toBe('/skeuomorphism');
    });

    it('redirects /swiss to /swiss-editorial', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/swiss'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(memoryRouter.state.location.pathname).toBe('/swiss-editorial');
    });

    it('redirects /showcase to /styles', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/showcase'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(memoryRouter.state.location.pathname).toBe('/styles');
    });

    it('redirects /editorial to /swiss-editorial', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/editorial'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(memoryRouter.state.location.pathname).toBe('/swiss-editorial');
    });

    it('renders 404 for unknown nested route /some/deep/nonexistent-route', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/some/deep/nonexistent-route'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    });

    it('renders 404 for unknown style /nope', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/nope'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(screen.getByText(/unrecognized style id/i)).toBeInTheDocument();
    });

    it('renders 404 for unknown style /nope/playground', () => {
      const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/nope/playground'] });
      render(<RouterProvider router={memoryRouter} />);
      expect(screen.getByText(/unrecognized style id/i)).toBeInTheDocument();
    });
  });
});
