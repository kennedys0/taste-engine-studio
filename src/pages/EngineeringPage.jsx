import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, CheckCircle2, Shield, Eye, Layers, ArrowRight, Smartphone } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function EngineeringPage() {
  usePageMetadata(
    'Engineering & Web Quality Gates — Taste Engine',
    'Accessibility standards, keyboard focus management, responsive viewports, and React performance practices.'
  );

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6366f1' }}>
          Quality Gates
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Aesthetic fidelity and engineering discipline are complementary.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Taste Engine treats accessibility, performance, and responsive integrity as non-negotiable requirements, not optional finishing touches.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
        {/* Accessibility & Focus */}
        <div className="neo-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Eye size={22} color="#6366f1" />
            <span>1. Accessibility & Keyboard Navigation</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Every component in Taste Engine must be fully operable by keyboard alone:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
            <li>
              <strong>Visible focus indicators:</strong> Distinct <code>:focus-visible</code> rings styled specifically for each aesthetic (e.g. 3px solid ink in Neo-brutalism, high-contrast glow in Retro Terminal, specular outline in Glassmorphism).
            </li>
            <li>
              <strong>Accessible modal traps:</strong> Dialogs trap tab focus while open, dismiss on Escape or backdrop click, and immediately restore focus to the opening trigger upon close.
            </li>
            <li>
              <strong>Semantic form associations:</strong> All inputs feature programmatic <code>&lt;label htmlFor="..."&gt;</code> tags, <code>aria-invalid</code> states, and announce errors clearly.
            </li>
          </ul>
        </div>

        {/* Real Responsive Behavior */}
        <div className="neo-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Smartphone size={22} color="#10b981" />
            <span>2. Responsive Viewports & Zoom</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Interfaces must function seamlessly from 320px mobile screens to 1440px+ ultra-wide displays:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
            <li>
              <strong>No clipped heroes:</strong> Uses <code>min-height: 100svh</code> with fallback, permitting natural expansion when text scales or on short landscape mobile devices.
            </li>
            <li>
              <strong>200% Zoom protection:</strong> Critical actions and table columns do not cause accidental horizontal document overflow or clip interactive buttons.
            </li>
          </ul>
        </div>

        {/* Composited Contrast */}
        <div className="neo-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={22} color="#f59e0b" />
            <span>3. Composited Contrast Over Real Backdrops</span>
          </h2>
          <p>
            Contrast is tested against <strong>actual composited surfaces</strong>, not isolated CSS token values. For Glassmorphism, text placed over translucent blurred panes must maintain WCAG AA (4.5:1) legibility across all gradient transitions, with opaque fallbacks for users preferring reduced transparency.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/styles" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <span>Explore 10 Styles</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/anti-slop" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <span>Anti-Slop Constitution</span>
        </Link>
      </div>
    </div>
  );
}

