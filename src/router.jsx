import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Layouts
import SiteLayout from './layouts/SiteLayout';
import StyleLayout from './layouts/StyleLayout';

// Core Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FeaturesPage from './pages/FeaturesPage';
import StylesIndexPage from './pages/StylesIndexPage';
import ComparePage from './pages/ComparePage';
import InstallationPage from './pages/InstallationPage';
import DocsPage from './pages/DocsPage';
import AntiSlopPage from './pages/AntiSlopPage';
import SeoPage from './pages/SeoPage';
import MotionPage from './pages/MotionPage';
import EngineeringPage from './pages/EngineeringPage';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';

// Style Subroutes
import StyleOverviewPage from './pages/StyleOverviewPage';
import PlaygroundPage from './pages/PlaygroundPage';
import AuthDemoPage from './pages/AuthDemoPage';
import DashboardDemoPage from './pages/DashboardDemoPage';

export const routes = [
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      // Core Informational Pages
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'how-it-works', element: <HowItWorksPage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'styles', element: <StylesIndexPage /> },
      { path: 'showcase', element: <Navigate to="/styles" replace /> },
      { path: 'compare', element: <ComparePage /> },
      { path: 'installation', element: <InstallationPage /> },
      { path: 'docs', element: <DocsPage /> },
      { path: 'anti-slop', element: <AntiSlopPage /> },
      { path: 'seo', element: <SeoPage /> },
      { path: 'motion', element: <MotionPage /> },
      { path: 'engineering', element: <EngineeringPage /> },
      { path: 'faq', element: <FaqPage /> },

      // Canonical Redirects / Common Aliases
      { path: 'glassmorphsm', element: <Navigate to="/glassmorphism" replace /> },
      { path: 'glassmorph', element: <Navigate to="/glassmorphism" replace /> },
      { path: 'skeumorphism', element: <Navigate to="/skeuomorphism" replace /> },
      { path: 'skeumorphsm', element: <Navigate to="/skeuomorphism" replace /> },
      { path: 'swiss', element: <Navigate to="/swiss-editorial" replace /> },
      { path: 'editorial', element: <Navigate to="/swiss-editorial" replace /> },
      { path: 'install', element: <Navigate to="/installation" replace /> },
      { path: 'style', element: <Navigate to="/styles" replace /> },

      // Canonical 10 Style Families with parameterized subroutes
      {
        path: ':style',
        element: <StyleLayout />,
        children: [
          { index: true, element: <StyleOverviewPage /> },
          { path: 'playground', element: <PlaygroundPage /> },
          { path: 'login', element: <AuthDemoPage /> },
          { path: 'dashboard', element: <DashboardDemoPage /> },
        ],
      },

      // Fallback 404
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default router;
