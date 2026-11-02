import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Shield, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function SeoPage() {
  usePageMetadata(
    'Conditional Public SEO — Taste Engine',
    'How Taste Engine applies semantic SEO to public websites while protecting private routes and addressing Vite SPA crawlability.'
  );

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#06b6d4' }}>
          Search & Semantics
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Search readiness follows the page's purpose.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          SEO is not a visual style choice. Taste Engine conditionally applies technical search readiness to public pages while preserving the privacy of internal applications.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
        {/* Conditional Policy */}
        <div className="neo-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={22} color="#06b6d4" />
            <span>Conditional Scope: Public vs Private</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            When an agent builds a public portfolio, marketing landing page, or documentation hub, Taste Engine instructs it to include semantic HTML headings, descriptive meta titles, Open Graph tags, and crawl directives automatically.
          </p>
          <p>
            Conversely, for private admin dashboards, authenticated workspaces, or internal APIs, it strictly forbids generating public sitemaps or exposing private route schemas to crawlers.
          </p>
        </div>

        {/* Truthful Vite SPA Crawlability Note */}
        <div className="neo-card" style={{ borderLeft: '6px solid #f59e0b' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertTriangle size={22} color="#f59e0b" />
            <span>Vite + React SPA Crawlability Reality</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            A standard Vite Single Page Application serves a minimal <code>index.html</code> shell where client-side JavaScript injects page content dynamically.
          </p>
          <div
            style={{
              padding: '14px 18px',
              backgroundColor: 'var(--site-bg)',
              border: 'var(--site-border)',
              borderRadius: 'var(--site-radius)',
              fontSize: '0.95rem',
              lineHeight: '1.6',
            }}
          >
            <strong>Engineering Truth:</strong> Updating <code>document.title</code> and meta tags via React hooks alone does NOT guarantee that every search engine or social preview bot will render full route content. For production SEO, public routes require a verified SSG / prerendering step or host-level fallback configuration.
          </div>
        </div>

        {/* Semantic Hierarchy Checklist */}
        <div className="neo-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem' }}>
            Technical SEO Requirements
          </h2>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <li>
              <strong>Unique document titles:</strong> Distinct, contextual titles for every canonical page and visual style route.
            </li>
            <li>
              <strong>Semantic headings:</strong> Exactly one <code>&lt;h1&gt;</code> per page reflecting core intent, followed by logical <code>&lt;h2&gt;</code> and <code>&lt;h3&gt;</code> nesting.
            </li>
            <li>
              <strong>Descriptive alt attributes:</strong> All visual diagrams and image specimens include meaningful alternative text or explicit decorative tags.
            </li>
            <li>
              <strong>Ground truth URLs:</strong> Canonical links reference confirmed deployment domains—never fabricated live URLs or fake social share metrics.
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/styles" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <span>Explore 10 Styles</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/how-it-works" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <span>Decision Flow</span>
        </Link>
      </div>
    </div>
  );
}

