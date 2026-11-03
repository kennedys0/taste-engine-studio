import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sliders, ExternalLink } from 'lucide-react';
import { STYLES } from '../styles/registry';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getStyleThemeClasses } from '../utils/styleTheme';

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
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1240px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent, #3b82f6)' }}>
          Design Language Gallery
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Ten styles. No aesthetic assigned for you.
        </h1>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.25rem', maxWidth: '780px' }}>
          Every card below is rendered directly in its authentic design language—showcasing unique surface physics, shadows, typography, and interactive buttons.
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

      {/* Styles Grid with Authentic Style Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {filteredStyles.map((styleItem) => {
          const theme = getStyleThemeClasses(styleItem.id);
          const isTerm = styleItem.id === 'retro-terminal';
          const isBrutal = styleItem.id === 'brutalism';
          const isGlass = styleItem.id === 'glassmorphism';
          const isClay = styleItem.id === 'claymorphism';
          const isBento = styleItem.id === 'bento';
          const isSwiss = styleItem.id === 'swiss-editorial';
          const isSkeuo = styleItem.id === 'skeuomorphism';
          const isEnterprise = styleItem.id === 'enterprise';
          const isMini = styleItem.id === 'minimalism';

          // Specific card styling enhancements to bring out the material signature of each style
          let customCardStyle = {};
          if (isGlass) {
            customCardStyle = {
              background: 'radial-gradient(ellipse 65% 55% at 20% 35%, rgba(99, 164, 255, 0.28) 0%, transparent 70%), radial-gradient(ellipse 55% 50% at 85% 65%, rgba(196, 181, 253, 0.32) 0%, transparent 70%), var(--glass-surface)',
              border: '1px solid var(--glass-edge)',
              backdropFilter: 'blur(16px)',
              boxShadow: 'var(--glass-shadow)',
            };
          } else if (isClay) {
            customCardStyle = {
              borderRadius: '24px',
              boxShadow: 'var(--clay-shadow-outer)',
            };
          } else if (isBrutal) {
            customCardStyle = {
              borderRadius: '0px',
              fontFamily: 'Courier, monospace',
              border: '2px solid currentColor',
            };
          } else if (isTerm) {
            customCardStyle = {
              fontFamily: 'var(--term-font, monospace)',
              backgroundImage: 'var(--term-scanline)',
              textShadow: 'var(--term-amber-glow)',
              border: 'var(--term-border)',
              borderRadius: '4px',
            };
          } else if (isSwiss) {
            customCardStyle = {
              borderRadius: '0px',
              fontFamily: 'var(--swiss-font, system-ui)',
              borderTop: '5px solid #ef4444',
            };
          } else if (isBento) {
            customCardStyle = {
              borderRadius: '22px',
              border: 'var(--bento-border)',
            };
          } else if (isSkeuo) {
            customCardStyle = {
              border: 'var(--skeuo-border)',
              boxShadow: 'var(--skeuo-shadow-raised)',
            };
          } else if (isEnterprise) {
            customCardStyle = {
              borderRadius: '6px',
              border: 'var(--ent-border)',
              boxShadow: 'var(--ent-shadow)',
            };
          } else if (isMini) {
            customCardStyle = {
              borderRadius: '6px',
              border: 'var(--mini-border)',
            };
          } else {
            // Neo-brutalism
            customCardStyle = {
              border: 'var(--neo-border)',
              boxShadow: 'var(--neo-shadow)',
            };
          }

          return (
            <div
              key={styleItem.id}
              data-taste-style={styleItem.id}
              className={theme.card}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                transition: 'transform 180ms ease, box-shadow 180ms ease',
                ...customCardStyle,
              }}
            >
              <div>
                {/* Header Tag / Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
                  {isTerm ? (
                    <span style={{ fontFamily: 'monospace', fontWeight: '800', fontSize: '0.75rem', opacity: 0.9 }}>
                      [SYS // {styleItem.id.toUpperCase().replace('-', '_')}]
                    </span>
                  ) : isBrutal ? (
                    <span style={{ fontSize: '0.725rem', fontWeight: '800', textTransform: 'uppercase', padding: '2px 8px', border: '1.5px solid currentColor' }}>
                      {styleItem.id}
                    </span>
                  ) : isSwiss ? (
                    <span style={{ fontSize: '0.725rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ef4444' }}>
                      CANONICAL • {styleItem.label}
                    </span>
                  ) : (
                    <span
                      className={theme.badge || ''}
                      style={{
                        fontSize: '0.725rem',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        padding: '3px 9px',
                        borderRadius: isClay ? '14px' : isBento ? '9999px' : '4px',
                        backgroundColor: isGlass ? 'rgba(255, 255, 255, 0.2)' : undefined,
                        border: isGlass ? '1px solid var(--glass-edge)' : undefined,
                      }}
                    >
                      {styleItem.label}
                    </span>
                  )}
                </div>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.75rem' }}>
                  {styleItem.label}
                </h2>

                <p style={{ fontSize: '0.925rem', lineHeight: '1.55', opacity: 0.85, marginBottom: '1.25rem' }}>
                  {styleItem.tagline}
                </p>

                {/* Best Fit Callout Box */}
                <div
                  className={
                    isClay ? 'clay-input-well' :
                    isSkeuo ? 'skeuo-well' : ''
                  }
                  style={{
                    padding: '10px 14px',
                    borderRadius: isBrutal ? '0px' : isClay ? '16px' : isBento ? '14px' : '6px',
                    border: isClay || isSkeuo ? undefined : '1px solid rgba(125, 125, 125, 0.18)',
                    backgroundColor: isGlass ? 'rgba(255, 255, 255, 0.12)' : 'rgba(125, 125, 125, 0.06)',
                    fontSize: '0.8rem',
                    lineHeight: '1.5',
                    marginBottom: '1.5rem',
                  }}
                >
                  <strong>{isTerm ? '> BEST_FIT: ' : 'Best fit: '}</strong>
                  {styleItem.recommendedFor}
                </div>
              </div>

              {/* Action Buttons styled in authentic design language */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.625rem',
                  borderTop: isBrutal ? '2px solid currentColor' : '1px solid rgba(125, 125, 125, 0.18)',
                  paddingTop: '1.25rem',
                }}
              >
                <Link
                  to={`/${styleItem.id}`}
                  className={theme.btnPrimary}
                  style={{ padding: '8px 16px', fontSize: '0.825rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
                >
                  <span>{isTerm ? '[ EXPLORE ]' : `Explore ${styleItem.label}`}</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to={`/${styleItem.id}/playground`}
                  className={theme.btnSecondary}
                  style={{ padding: '8px 14px', fontSize: '0.825rem', display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none' }}
                >
                  <span>{isTerm ? '[ PLAYGROUND ]' : 'Playground'}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
