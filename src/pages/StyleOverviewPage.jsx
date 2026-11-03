import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import {
  Sliders,
  Lock,
  LayoutDashboard,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Info,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { STYLE_IDS, getStyle } from '../styles/registry';
import { usePageMetadata } from '../hooks/usePageMetadata';
import SpecimenImageCard from '../components/specimens/SpecimenImageCard';
import SpecimenButtons from '../components/specimens/SpecimenButtons';
import SpecimenFAQ from '../components/specimens/SpecimenFAQ';
import SpecimenTabs from '../components/specimens/SpecimenTabs';
import SpecimenForm from '../components/specimens/SpecimenForm';

export default function StyleOverviewPage() {
  const context = useOutletContext() || {};
  const styleObj = context.styleObj || getStyle('neo-brutalism');
  const currentIndex = STYLE_IDS.indexOf(styleObj.id);
  const prevStyleId = STYLE_IDS[(currentIndex - 1 + STYLE_IDS.length) % STYLE_IDS.length];
  const nextStyleId = STYLE_IDS[(currentIndex + 1) % STYLE_IDS.length];

  usePageMetadata(
    `${styleObj.label} — Taste Engine Visual Style`,
    `${styleObj.label} style pack: ${styleObj.tagline} Live interactive specimens, material fidelity gates, and UI component laboratory.`
  );

  // Render style-authentic hero
  const renderHeroContent = () => {
    if (styleObj.id === 'glassmorphism') {
      return (
        <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto' }}>
          {/* Glass Material Gate: Prominent frosted pane filtering ambient gradient backdrop */}
          <div className="glass-pane" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--glass-accent)',
                marginBottom: '1rem',
              }}
            >
              FROSTED TRANSLUCENT MATERIAL GATE
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                color: 'var(--glass-ink)',
                lineHeight: '1.15',
              }}
            >
              Taste Engine, interpreted through {styleObj.label}
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.6',
                color: 'var(--glass-muted)',
                maxWidth: '680px',
                margin: '0 auto 2rem',
              }}
            >
              {styleObj.tagline} Notice the ambient radial gradients filtering through this translucent pane with 18px blur and 1px specular top reflection.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link to={`/${styleObj.id}/playground`} className="glass-btn-primary">
                <Sliders size={18} />
                <span>Open Component Playground</span>
              </Link>
              <Link to={`/${styleObj.id}/dashboard`} className="glass-btn-secondary">
                <LayoutDashboard size={18} />
                <span>Try Sample Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'claymorphism') {
      return (
        <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto' }}>
          <div className="clay-card" style={{ padding: '3.5rem 2.5rem', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.85rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--clay-primary)',
                marginBottom: '1rem',
              }}
            >
              VOLUMETRIC SCULPTED MATERIAL GATE
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: '800',
                marginBottom: '1rem',
                lineHeight: '1.15',
                color: 'var(--clay-text-dark)',
              }}
            >
              Taste Engine, interpreted through {styleObj.label}
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.6',
                color: 'var(--clay-muted)',
                maxWidth: '680px',
                margin: '0 auto 2.5rem',
              }}
            >
              {styleObj.tagline} Notice the dual opposing inner highlights (top-left) and form shadows (bottom-right) providing authentic tactile depth.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link to={`/${styleObj.id}/playground`} className="clay-btn-primary">
                <Sliders size={18} />
                <span>Open Component Playground</span>
              </Link>
              <Link to={`/${styleObj.id}/login`} className="clay-btn-secondary">
                <Lock size={18} />
                <span>Simulate Login Flow</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'brutalism') {
      return (
        <div style={{ width: '100%', maxWidth: '920px', margin: '0 auto' }}>
          <div className="brutal-card" style={{ padding: '3.5rem 2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'var(--brutal-border)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span className="brutal-tag">[GATE: ARCHITECTURAL_STRUCTURAL_HONESTY]</span>
              <span style={{ fontFamily: 'var(--brutal-font-mono)', fontSize: '0.85rem' }}>REV: 2026.11</span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--brutal-font-heading)',
                fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                lineHeight: '1.05',
                marginBottom: '1.5rem',
              }}
            >
              TASTE ENGINE // {styleObj.label}
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.6',
                marginBottom: '2.5rem',
                maxWidth: '720px',
              }}
            >
              {styleObj.tagline} Exposed black border grid, 0px square corners, zero blur, and immediate 0ms color inversion.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to={`/${styleObj.id}/playground`} className="brutal-btn-primary">
                OPEN PLAYGROUND [P_01]
              </Link>
              <Link to={`/${styleObj.id}/dashboard`} className="brutal-btn-secondary">
                ACCESS DATA COCKPIT [D_01]
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'retro-terminal') {
      return (
        <div style={{ width: '100%', maxWidth: '880px', margin: '0 auto' }}>
          <div className="term-window">
            <div className="term-header">
              <span>CRT_SESSION // TASTE_ENGINE_V0.10.3</span>
              <span>STATE: OPERATIONAL</span>
            </div>
            <div style={{ padding: '2.5rem 2rem' }}>
              <div style={{ marginBottom: '1.5rem', color: 'var(--term-green)', fontWeight: '700' }}>
                visitor@terminal:~$ load-style --name retro-terminal --phosphor amber
              </div>
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  marginBottom: '1rem',
                  color: 'var(--term-amber)',
                  textShadow: 'var(--term-amber-glow)',
                }}
              >
                &gt; TASTE_ENGINE: {styleObj.label.toUpperCase()}
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '680px' }}>
                {styleObj.tagline} Monospace character alignment with static scanline raster overlay.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to={`/${styleObj.id}/playground`} className="term-btn-primary">
                  [ EXECUTE: PLAYGROUND ]
                </Link>
                <Link to={`/${styleObj.id}/dashboard`} className="term-btn-secondary">
                  [ EXECUTE: DASHBOARD ]
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'swiss-editorial') {
      return (
        <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
          <div className="swiss-card">
            <span className="swiss-index">01 / TYPOGRAPHIC SPECIFICATION</span>
            <h1
              style={{
                fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
                fontWeight: '800',
                letterSpacing: '-0.04em',
                lineHeight: '1.02',
                marginBottom: '1.5rem',
              }}
            >
              Taste Engine, interpreted through {styleObj.label}
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                color: 'var(--swiss-muted)',
                maxWidth: '680px',
                marginBottom: '2.5rem',
              }}
            >
              {styleObj.tagline} Dramatic scale contrast, 1px horizontal hairline rules, and asymmetric 12-column grid structure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', borderTop: 'var(--swiss-rule)', paddingTop: '1.5rem' }}>
              <Link to={`/${styleObj.id}/playground`} className="swiss-btn-primary">
                Open Component Laboratory
              </Link>
              <Link to={`/${styleObj.id}/dashboard`} className="swiss-btn-secondary">
                View Editorial Dashboard
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'bento') {
      return (
        <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--bento-gap)',
            }}
          >
            {/* Dominant Hero Tile (2 cols if wide) */}
            <div className="bento-tile" style={{ gridColumn: 'span 2' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--bento-accent)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                ASYMMETRIC HERO TILE
              </span>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: '800', lineHeight: '1.15', marginBottom: '1rem' }}>
                Taste Engine: Bento Grid Architecture
              </h1>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--bento-muted)', marginBottom: '2rem' }}>
                {styleObj.tagline} Notice how the 2x2 dominant hero tile anchors the composition while supporting tiles present distinct internal layouts.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to={`/${styleObj.id}/playground`} className="bento-btn-primary">
                  Open Bento Laboratory
                </Link>
                <Link to={`/${styleObj.id}/dashboard`} className="bento-btn-secondary">
                  Dashboard Demo
                </Link>
              </div>
            </div>

            {/* Supporting Tile 1 */}
            <div className="bento-tile">
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--bento-accent)' }}>TILE // 02</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0.5rem 0' }}>Internal Diversity</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--bento-muted)', lineHeight: '1.5' }}>
                Authentic bento grids reject identical repeating cards. Each tile has an anatomy tuned to its content.
              </p>
            </div>

            {/* Supporting Tile 2 */}
            <div className="bento-tile">
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--bento-accent)' }}>TILE // 03</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0.5rem 0' }}>Unified Gutters</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--bento-muted)', lineHeight: '1.5' }}>
                Consistent 20px-24px gaps and 24px corner curvature lock the entire modular layout into harmony.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'skeuomorphism') {
      return (
        <div style={{ width: '100%', maxWidth: '880px', margin: '0 auto' }}>
          <div className="skeuo-panel" style={{ padding: '3.5rem 2.5rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span className="skeuo-led" />
              <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                HARDWARE INSTRUMENT SPECIFICATION
              </span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: '700',
                letterSpacing: '-0.01em',
                marginBottom: '1rem',
                lineHeight: '1.15',
                color: 'var(--skeuo-ink)',
              }}
            >
              Taste Engine, interpreted through {styleObj.label}
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.6',
                color: 'var(--skeuo-muted)',
                maxWidth: '680px',
                margin: '0 auto 2.5rem',
              }}
            >
              {styleObj.tagline} Multi-stop metallic gradients, top specular highlights, and physical 1.5px mechanical button depression.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link to={`/${styleObj.id}/playground`} className="skeuo-btn-primary">
                Launch Tactile Controls
              </Link>
              <Link to={`/${styleObj.id}/dashboard`} className="skeuo-btn-primary">
                Instrument Console Demo
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'enterprise') {
      return (
        <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto' }}>
          <div className="ent-table-container" style={{ padding: '2.5rem 2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="ent-status-pill ent-status-info">DATA COCKPIT FIDELITY GATE</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--ent-muted)' }}>ENTERPRISE_SYSTEMS_2026</span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                lineHeight: '1.15',
                color: 'var(--ent-ink)',
              }}
            >
              Taste Engine, interpreted through {styleObj.label}
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--ent-muted)',
                maxWidth: '720px',
                marginBottom: '2rem',
              }}
            >
              {styleObj.tagline} Compact 36px table rows, tabular figures (tabular-nums), and WCAG AA calibrated semantic status pills.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to={`/${styleObj.id}/playground`} className="ent-btn-primary">
                Open Enterprise Components
              </Link>
              <Link to={`/${styleObj.id}/dashboard`} className="ent-btn-secondary">
                Launch Sample Dashboard
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (styleObj.id === 'minimalism') {
      return (
        <div style={{ width: '100%', maxWidth: '880px', margin: '0 auto' }}>
          <div className="mini-card" style={{ padding: '3.5rem 2.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--mini-accent)',
                marginBottom: '1rem',
              }}
            >
              PURPOSEFUL RESTRAINT GATE
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                lineHeight: '1.15',
                color: 'var(--mini-ink)',
              }}
            >
              Taste Engine, interpreted through {styleObj.label}
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.65',
                color: 'var(--mini-muted)',
                maxWidth: '680px',
                marginBottom: '2.5rem',
              }}
            >
              {styleObj.tagline} Active negative space, mathematical type hierarchy, hairline dividers, and quiet affordances.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to={`/${styleObj.id}/playground`} className="mini-btn-primary">
                Open Component Laboratory
              </Link>
              <Link to={`/${styleObj.id}/login`} className="mini-btn-secondary">
                Authentication Demo
              </Link>
            </div>
          </div>
        </div>
      );
    }

    // Default: Neo-brutalism
    return (
      <div style={{ width: '100%', maxWidth: '880px', margin: '0 auto' }}>
        <div className="neo-card" style={{ padding: '3.5rem 2.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', marginBottom: '1rem' }}>
            <span className="neo-badge">MATERIAL FIDELITY GATE</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: '800',
              lineHeight: '1.12',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            Taste Engine, interpreted through {styleObj.label}
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: '1.6',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              opacity: 0.9,
            }}
          >
            {styleObj.tagline} Crisp 2.5px solid black borders, hard unblurred offset shadows, and tactile mechanical press feedback.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link to={`/${styleObj.id}/playground`} className="neo-btn-primary">
              <Sliders size={18} />
              <span>Open Component Playground</span>
            </Link>
            <Link to={`/${styleObj.id}/dashboard`} className="neo-btn-secondary">
              <LayoutDashboard size={18} />
              <span>Sample Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Full First Viewport Hero (min-height: calc(100svh - 130px)) */}
      <section
        style={{
          minHeight: 'calc(100svh - 130px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1.5rem',
          position: 'relative',
        }}
      >
        {renderHeroContent()}
      </section>

      {/* Style DNA Specification */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '2px solid rgba(125, 125, 125, 0.2)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6' }}>
              Design DNA & Tokens
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.4rem' }}>
              Style Anatomy & Material Rules
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="neo-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Typography</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>{styleObj.typography}</p>
            </div>

            <div className="neo-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Material Fidelity Gate</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>{styleObj.materialFidelityGate}</p>
            </div>

            <div className="neo-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Motion Personality</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>{styleObj.motionPersonality}</p>
            </div>

            <div className="neo-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Anti-Slop Exception</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>{styleObj.antiSlopException}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Specimen Gallery */}
      <section style={{ padding: '4rem 1.5rem', borderTop: '2px solid rgba(125, 125, 125, 0.2)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6' }}>
                Live Laboratory
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '0.4rem' }}>
                Curated Interactive Specimens
              </h2>
            </div>
            <Link to={`/${styleObj.id}/playground`} className="neo-btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              <span>Open Full Playground</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '1rem' }}>Image Card Specimen</h3>
              <SpecimenImageCard styleId={styleObj.id} />
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '1rem' }}>Interactive Buttons & Toast</h3>
              <SpecimenButtons styleId={styleObj.id} />

              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginTop: '2rem', marginBottom: '1rem' }}>Accessible Tab Strip</h3>
              <SpecimenTabs styleId={styleObj.id} />
            </div>
          </div>
        </div>
      </section>

      {/* Previous / Next Style Navigation */}
      <section style={{ padding: '3rem 1.5rem', borderTop: '2px solid rgba(125, 125, 125, 0.2)' }}>
        <div className="container" style={{ maxWidth: '960px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to={`/${prevStyleId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              border: '2px solid currentColor',
              borderRadius: '6px',
              fontWeight: '700',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <ChevronLeft size={18} />
            <span>Previous: {prevStyleId}</span>
          </Link>

          <Link
            to="/styles"
            style={{
              fontWeight: '700',
              textDecoration: 'underline',
              color: 'inherit',
            }}
          >
            Back to All 10 Styles
          </Link>

          <Link
            to={`/${nextStyleId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              border: '2px solid currentColor',
              borderRadius: '6px',
              fontWeight: '700',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <span>Next: {nextStyleId}</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
