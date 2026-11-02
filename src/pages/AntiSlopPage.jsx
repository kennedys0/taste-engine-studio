import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, X, AlertTriangle, ArrowRight } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function AntiSlopPage() {
  usePageMetadata(
    'Anti-Slop Constitution — Taste Engine',
    'The 3-tier review process (FLOOR, REFLEX, FINISH) ensuring quality without imposing a single bland aesthetic.'
  );

  const [activeTier, setActiveTier] = useState('floor');

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>
          Quality Architecture
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Quality without a mandated aesthetic.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Taste Engine anti-slop is a decision framework, not a minimalism preset. It prevents fake metrics, dishonest demo states, and broken controls while preserving each style's deliberate visual personality.
        </p>
      </div>

      {/* The Three Tiers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div
          className="neo-card"
          onClick={() => setActiveTier('floor')}
          style={{
            cursor: 'pointer',
            borderColor: activeTier === 'floor' ? 'var(--site-ink)' : 'transparent',
            backgroundColor: activeTier === 'floor' ? 'var(--site-accent)' : 'var(--site-card)',
            color: activeTier === 'floor' ? '#121212' : 'inherit',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#ef4444', color: '#fff' }}>
            TIER 1
          </span>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0.75rem 0 0.5rem' }}>FLOOR</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
            Non-waivable integrity: accessible contrast, working controls, truthful demo labels, responsive layouts.
          </p>
        </div>

        <div
          className="neo-card"
          onClick={() => setActiveTier('reflex')}
          style={{
            cursor: 'pointer',
            borderColor: activeTier === 'reflex' ? 'var(--site-ink)' : 'transparent',
            backgroundColor: activeTier === 'reflex' ? 'var(--site-accent-cyan)' : 'var(--site-card)',
            color: activeTier === 'reflex' ? '#121212' : 'inherit',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#f59e0b', color: '#fff' }}>
            TIER 2
          </span>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0.75rem 0 0.5rem' }}>REFLEX</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
            Weak habit interception: rejects nested card clutter, fake telemetry, unlabelled icons, and filler slogans.
          </p>
        </div>

        <div
          className="neo-card"
          onClick={() => setActiveTier('finish')}
          style={{
            cursor: 'pointer',
            borderColor: activeTier === 'finish' ? 'var(--site-ink)' : 'transparent',
            backgroundColor: activeTier === 'finish' ? 'var(--site-accent-mint)' : 'var(--site-card)',
            color: activeTier === 'finish' ? '#121212' : 'inherit',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', backgroundColor: '#10b981', color: '#fff' }}>
            TIER 3
          </span>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', margin: '0.75rem 0 0.5rem' }}>FINISH</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
            Nonblocking craft: optical alignment, tabular numeral figures, reduced-motion fallbacks, and microcopy clarity.
          </p>
        </div>
      </div>

      {/* Before / After Concrete Examples */}
      <div style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>
          Concrete Before & After Comparisons
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Example 1: Honest Demo Claims */}
          <div className="neo-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem' }}>
              1. Demo Truthfulness vs Fake Production Claims
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', border: '2px solid #ef4444', borderRadius: '6px', backgroundColor: 'rgba(239, 68, 68, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: '800', marginBottom: '0.5rem' }}>
                  <X size={18} />
                  <span>SLOP (REJECTED)</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Button displays: <code>"Changes saved to cloud database"</code> when only React state was toggled.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#ef4444' }}>Violates Tier 1 FLOOR truthfulness.</span>
              </div>

              <div style={{ padding: '1rem', border: '2px solid #10b981', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: '800', marginBottom: '0.5rem' }}>
                  <Check size={18} />
                  <span>TASTE ENGINE (APPROVED)</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Button displays: <code>"Preference saved in this local demo"</code> or <code>"Validation passed. No account was accessed."</code>
                </p>
                <span style={{ fontSize: '0.8rem', color: '#10b981' }}>Honest user-facing communication.</span>
              </div>
            </div>
          </div>

          {/* Example 2: Material Fidelity in Glassmorphism */}
          <div className="neo-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1rem' }}>
              2. Material Fidelity in Glassmorphism
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1rem', border: '2px solid #ef4444', borderRadius: '6px', backgroundColor: 'rgba(239, 68, 68, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: '800', marginBottom: '0.5rem' }}>
                  <X size={18} />
                  <span>SLOP (REJECTED)</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  A flat navy blue page with solid opaque cards labeled as "Glassmorphism" in heading text. No visible frosting or light refraction.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#ef4444' }}>Fails Glass Material Fidelity Gate.</span>
              </div>

              <div style={{ padding: '1rem', border: '2px solid #10b981', borderRadius: '6px', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: '800', marginBottom: '0.5rem' }}>
                  <Check size={18} />
                  <span>TASTE ENGINE (APPROVED)</span>
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Translucent frosted pane filtering purposefully lit ambient gradient fields behind it, with specular top edge highlight and opaque fallback.
                </p>
                <span style={{ fontSize: '0.8rem', color: '#10b981' }}>Passes screenshot-level material contract.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/styles" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <span>Explore 10 Styles</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/engineering" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <span>Engineering Quality Gates</span>
        </Link>
      </div>
    </div>
  );
}

