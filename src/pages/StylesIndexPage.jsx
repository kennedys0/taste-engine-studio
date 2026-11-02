import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sliders, ExternalLink } from 'lucide-react';
import { STYLES } from '../styles/registry';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function StylesIndexPage() {
  usePageMetadata(
    'Ten Canonical Styles — Taste Engine',
    'Explore the 10 canonical Taste Engine visual design languages with live specimens, material fidelity gates, and dedicated playgrounds.'
  );

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Tactile & Expressive', 'Typographic & Grid', 'Data & Developer'];

  const filteredStyles = STYLES.filter((styleItem) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Tactile & Expressive') {
      return ['neo-brutalism', 'glassmorphism', 'claymorphism', 'skeuomorphism'].includes(styleItem.id);
    }
    if (activeFilter === 'Typographic & Grid') {
      return ['brutalism', 'minimalism', 'swiss-editorial', 'bento'].includes(styleItem.id);
    }
    if (activeFilter === 'Data & Developer') {
      return ['retro-terminal', 'enterprise', 'bento'].includes(styleItem.id);
    }
    return true;
  });

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1180px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-cyan)' }}>
          Design Language Gallery
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Ten styles. No aesthetic assigned for you.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem', maxWidth: '780px' }}>
          Each style pack represents a complete design system with unique surface materials, border physics, typographic scale, and interaction personality.
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        role="tablist"
        aria-label="Filter styles by category"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '2.5rem',
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={activeFilter === f}
            onClick={() => setActiveFilter(f)}
            className={activeFilter === f ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '8px 18px', fontSize: '0.875rem' }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Styles Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {filteredStyles.map((styleItem) => (
          <div
            key={styleItem.id}
            data-taste-style={styleItem.id}
            className="neo-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(125, 125, 125, 0.15)',
                  }}
                >
                  {styleItem.id}
                </span>
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                {styleItem.label}
              </h2>

              <p style={{ fontSize: '0.925rem', lineHeight: '1.55', opacity: 0.85, marginBottom: '1.25rem' }}>
                {styleItem.tagline}
              </p>

              <div
                style={{
                  padding: '10px 12px',
                  backgroundColor: 'var(--site-bg)',
                  border: '1px solid rgba(125, 125, 125, 0.2)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  marginBottom: '1.5rem',
                }}
              >
                <strong>Best fit:</strong> {styleItem.recommendedFor}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid rgba(125, 125, 125, 0.2)', paddingTop: '1.25rem' }}>
              <Link
                to={`/${styleItem.id}`}
                className="neo-btn-primary"
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                <span>Explore {styleItem.label}</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to={`/${styleItem.id}/playground`}
                className="neo-btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.85rem' }}
              >
                <span>Playground</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
