import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sliders,
  Compass,
  MousePointer,
  Layout,
  CheckSquare,
  Lock,
  Database,
  Layers,
  HelpCircle,
  AlertCircle,
  Grid,
  ArrowRight,
} from 'lucide-react';
import { STYLES } from '../styles/registry';
import { SPECIMEN_CATEGORIES } from '../data/specimenCatalog';
import { usePageMetadata } from '../hooks/usePageMetadata';

const ICON_MAP = {
  Palette: Sliders,
  Compass: Compass,
  MousePointer: MousePointer,
  Layout: Layout,
  CheckSquare: CheckSquare,
  Lock: Lock,
  Database: Database,
  Layers: Layers,
  HelpCircle: HelpCircle,
  AlertCircle: AlertCircle,
  Grid: Grid,
};

export default function ShowcasePage() {
  usePageMetadata(
    'UI Showcase — Interactive Components in 10 Styles',
    'Interactive showcase of working UI patterns: navigation, forms, data tables, dialogs, auth, and feedback states.'
  );

  const [activeStyle, setActiveStyle] = useState('neo-brutalism');

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1080px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>
          Interactive UI Laboratory
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Try the controls, not just the colors.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem', maxWidth: '780px' }}>
          Every category below features genuine working states—validation, keyboard focus trap, search filtering, and active theme switching across all 10 styles.
        </p>
      </div>

      {/* Select Style Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          padding: '1rem',
          backgroundColor: 'var(--site-card)',
          border: 'var(--site-border)',
          borderRadius: 'var(--site-radius)',
          boxShadow: 'var(--site-shadow-sm)',
          marginBottom: '3rem',
        }}
      >
        <span style={{ fontWeight: '800', fontSize: '0.9rem', marginRight: '4px' }}>
          Selected Style:
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {STYLES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveStyle(s.id)}
              className={activeStyle === s.id ? 'neo-btn-primary' : 'neo-btn-secondary'}
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4rem',
        }}
      >
        {SPECIMEN_CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Sliders;
          return (
            <div key={cat.id} className="neo-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--site-accent)',
                    border: 'var(--site-border)',
                    borderRadius: 'var(--site-radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#121212',
                    boxShadow: 'var(--site-shadow-sm)',
                    marginBottom: '1rem',
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  {cat.label}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.55', opacity: 0.85 }}>
                  {cat.desc}
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <Link
                  to={`/${activeStyle}/playground#${cat.id}`}
                  className="neo-btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', padding: '8px 14px', fontSize: '0.85rem' }}
                >
                  <span>Open in {STYLES.find((s) => s.id === activeStyle)?.label}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

