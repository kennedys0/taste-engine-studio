import React, { useState } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import {
  Sliders,
  Monitor,
  Tablet,
  Smartphone,
  RotateCcw,
  Layers,
  MousePointer,
  Layout,
  CheckSquare,
  Lock,
  Database,
  HelpCircle,
  AlertCircle,
  Grid,
  ExternalLink,
  Palette,
  Compass,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { SPECIMEN_CATEGORIES } from '../data/specimenCatalog';
import { STYLES, getStyle } from '../styles/registry';
import SpecimenButtons from '../components/specimens/SpecimenButtons';
import SpecimenTabs from '../components/specimens/SpecimenTabs';
import SpecimenForm from '../components/specimens/SpecimenForm';
import SpecimenImageCard from '../components/specimens/SpecimenImageCard';
import SpecimenDataTable from '../components/specimens/SpecimenDataTable';
import SpecimenDialog from '../components/specimens/SpecimenDialog';
import SpecimenFAQ from '../components/specimens/SpecimenFAQ';

/**
 * Stage background styling tailored to reveal the distinctive physics of each style
 */
function getStageStyle(styleId) {
  switch (styleId) {
    case 'glassmorphism':
      return {
        background: `
          radial-gradient(ellipse 65% 55% at 20% 35%, rgba(99, 164, 255, 0.40) 0%, transparent 70%),
          radial-gradient(ellipse 55% 50% at 85% 65%, rgba(196, 181, 253, 0.45) 0%, transparent 70%),
          radial-gradient(ellipse 50% 50% at 50% 85%, rgba(147, 197, 253, 0.35) 0%, transparent 70%),
          linear-gradient(135deg, rgba(240, 246, 255, 0.95) 0%, rgba(226, 237, 252, 0.95) 100%)
        `,
        border: '1px solid var(--glass-edge, rgba(255, 255, 255, 0.6))',
        boxShadow: 'var(--glass-shadow, 0 20px 50px rgba(28, 76, 156, 0.16))',
        position: 'relative',
      };
    case 'retro-terminal':
      return {
        backgroundColor: '#0c1017',
        color: 'var(--term-ink, #523102)',
        border: 'var(--term-border, 1px solid rgba(124, 74, 3, 0.35))',
        boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.65), 0 8px 30px rgba(0, 0, 0, 0.5)',
      };
    case 'claymorphism':
      return {
        backgroundColor: 'var(--clay-bg, #f3f0fa)',
        borderRadius: '28px',
        boxShadow: 'inset 3px 3px 10px rgba(0, 0, 0, 0.05), inset -3px -3px 10px rgba(255, 255, 255, 0.7)',
        border: 'none',
      };
    case 'brutalism':
      return {
        backgroundColor: 'var(--brutal-bg, #ffffff)',
        color: 'var(--brutal-ink, #000000)',
        border: '3px solid #000000',
        borderRadius: '0px',
        boxShadow: 'none',
      };
    case 'bento':
      return {
        backgroundColor: 'var(--bento-surface, #ffffff)',
        border: 'var(--bento-border, 1px solid rgba(0, 0, 0, 0.08))',
        borderRadius: '20px',
        boxShadow: 'var(--bento-shadow, 0 8px 24px rgba(0, 0, 0, 0.06))',
      };
    case 'skeuomorphism':
      return {
        background: 'var(--skeuo-chassis, linear-gradient(180deg, #edf0f5 0%, #d8dde6 100%))',
        border: 'var(--skeuo-panel-border, 1px solid #b8bec9)',
        boxShadow: 'var(--skeuo-highlight, inset 0 1px 0 rgba(255, 255, 255, 0.85)), 0 12px 32px rgba(0, 0, 0, 0.25)',
        borderRadius: '16px',
      };
    case 'enterprise':
      return {
        backgroundColor: 'var(--ent-surface, #ffffff)',
        border: 'var(--ent-border, 1px solid #e5e7eb)',
        borderRadius: '8px',
        boxShadow: 'var(--ent-shadow, 0 1px 3px rgba(0, 0, 0, 0.05))',
      };
    case 'swiss-editorial':
      return {
        backgroundColor: 'var(--swiss-surface, #ffffff)',
        borderTop: '3px solid currentColor',
        borderBottom: '1px solid rgba(125, 125, 125, 0.25)',
        borderRadius: '0px',
        boxShadow: 'none',
      };
    case 'minimalism':
      return {
        backgroundColor: 'var(--mini-surface, #ffffff)',
        border: 'var(--mini-border, 1px solid rgba(0, 0, 0, 0.08))',
        borderRadius: '12px',
        boxShadow: 'var(--mini-shadow, 0 1px 3px rgba(0, 0, 0, 0.04))',
      };
    case 'neo-brutalism':
    default:
      return {
        backgroundColor: 'var(--site-card, #ffffff)',
        border: 'var(--site-border, 2.5px solid #121212)',
        boxShadow: 'var(--site-shadow-sm, 3px 3px 0 #121212)',
        borderRadius: 'var(--site-radius, 6px)',
      };
  }
}

/**
 * Category Icon Resolver
 */
function getCategoryIcon(id) {
  switch (id) {
    case 'foundations': return Palette;
    case 'navigation': return Compass;
    case 'buttons': return MousePointer;
    case 'cards': return Layout;
    case 'forms': return CheckSquare;
    case 'auth': return Lock;
    case 'data': return Database;
    case 'overlays': return Layers;
    case 'disclosure': return HelpCircle;
    case 'feedback': return AlertCircle;
    case 'dashboard': return Grid;
    default: return Sparkles;
  }
}

export default function PlaygroundPage() {
  const context = useOutletContext() || {};
  const styleObj = context.styleObj || getStyle('neo-brutalism');
  const navigate = useNavigate();

  usePageMetadata(
    `${styleObj.label} Component Playground — Taste Engine Studio`,
    `Interactive laboratory testing foundations, forms, dialogs, data tables, and navigation in ${styleObj.label} style.`
  );

  const [activeCategory, setActiveCategory] = useState('all');
  const [viewportPreset, setViewportPreset] = useState('100%'); // '100%' | '768px' | '390px' | '320px'
  const [feedbackState, setFeedbackState] = useState('default'); // 'default' | 'loading' | 'error' | 'empty'
  const [resetNonce, setResetNonce] = useState(0);

  const handleReset = () => {
    setFeedbackState('default');
    setViewportPreset('100%');
    setActiveCategory('all');
    setResetNonce((n) => n + 1);
  };

  const handleStyleChange = (targetStyleId) => {
    navigate(`/${targetStyleId}/playground`);
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem', maxWidth: '1360px', width: '100%' }}>
      {/* =========================================================================
          1. Playground Header & Live Style Switcher
          ========================================================================= */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '4px', backgroundColor: 'rgba(139, 92, 246, 0.12)', border: '1px solid rgba(139, 92, 246, 0.3)', marginBottom: '0.5rem' }}>
              <Sparkles size={14} color="#8b5cf6" />
              <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6' }}>
                Component Laboratory & Specimen Workbench
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              {styleObj.label} Playground
            </h1>
            <p style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '0.5rem', maxWidth: '680px', lineHeight: 1.5 }}>
              {styleObj.tagline}
            </p>
          </div>

          {/* Quick Subroute Action Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', alignItems: 'center' }}>
            <Link
              to={`/${styleObj.id}/login`}
              className="neo-btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Inspect dedicated full-screen authentication experience"
            >
              <Lock size={14} />
              <span>Auth Demo</span>
            </Link>
            <Link
              to={`/${styleObj.id}/dashboard`}
              className="neo-btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Inspect dense operational dashboard experience"
            >
              <Grid size={14} />
              <span>Dashboard Demo</span>
            </Link>
            <Link
              to={`/${styleObj.id}`}
              className="neo-btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="View full style overview and architectural specification"
            >
              <span>Style Overview</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Live 10-Style Fast Switcher Track */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '8px 12px',
            backgroundColor: 'var(--site-card)',
            border: 'var(--site-border)',
            borderRadius: 'var(--site-radius)',
            boxShadow: 'var(--site-shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap', opacity: 0.75, marginRight: '4px' }}>
            Switch Style:
          </span>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'nowrap' }}>
            {STYLES.map((s) => {
              const isCurrent = s.id === styleObj.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleStyleChange(s.id)}
                  style={{
                    padding: '5px 11px',
                    borderRadius: '4px',
                    border: isCurrent ? '1.5px solid var(--site-ink)' : '1px solid transparent',
                    backgroundColor: isCurrent ? 'var(--site-accent)' : 'transparent',
                    color: isCurrent ? '#121212' : 'var(--site-ink)',
                    fontWeight: isCurrent ? '800' : '600',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 120ms ease-out',
                  }}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. Unified Control Toolbar (Viewport, State, Reset)
          ========================================================================= */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.875rem 1.25rem',
          backgroundColor: 'var(--site-card)',
          border: 'var(--site-border)',
          borderRadius: 'var(--site-radius)',
          boxShadow: 'var(--site-shadow-sm)',
          marginBottom: '1.75rem',
        }}
      >
        {/* Viewport Simulation Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.825rem', fontWeight: '800', marginRight: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Viewport:
          </span>
          <button
            type="button"
            onClick={() => setViewportPreset('100%')}
            className={viewportPreset === '100%' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            title="Full Width Responsive Fluid Canvas"
          >
            <Monitor size={14} />
            <span>Fluid (100%)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('768px')}
            className={viewportPreset === '768px' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            title="Tablet Width Simulator (768px)"
          >
            <Tablet size={14} />
            <span>Tablet (768px)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('390px')}
            className={viewportPreset === '390px' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            title="Mobile Width Simulator (390px)"
          >
            <Smartphone size={14} />
            <span>Mobile (390px)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('320px')}
            className={viewportPreset === '320px' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            title="Narrow Mobile Simulator (320px)"
          >
            <Smartphone size={14} />
            <span>Narrow (320px)</span>
          </button>
        </div>

        {/* State Simulation & Reset */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <label htmlFor="state-switcher" style={{ fontSize: '0.825rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              State:
            </label>
            <select
              id="state-switcher"
              value={feedbackState}
              onChange={(e) => setFeedbackState(e.target.value)}
              style={{
                padding: '6px 10px',
                borderRadius: 'var(--site-radius)',
                border: 'var(--site-border)',
                backgroundColor: 'var(--site-bg)',
                color: 'var(--site-ink)',
                fontSize: '0.825rem',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              <option value="default">Default State</option>
              <option value="loading">Loading Skeleton</option>
              <option value="error">Error Banner</option>
              <option value="empty">Empty State</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="neo-btn-secondary"
            style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            title="Reset playground viewports, states, and filters"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          3. Category Filter Navigation (11 Complete Categories)
          ========================================================================= */}
      <div
        role="tablist"
        aria-label="Component categories"
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '0.75rem',
          marginBottom: '2.5rem',
          scrollbarWidth: 'thin',
        }}
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          className={activeCategory === 'all' ? 'neo-btn-primary' : 'neo-btn-secondary'}
          style={{ padding: '7px 14px', fontSize: '0.85rem', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <Sparkles size={14} />
          <span>All Specimens</span>
        </button>

        {SPECIMEN_CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;
          const Icon = getCategoryIcon(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(cat.id)}
              className={isSelected ? 'neo-btn-primary' : 'neo-btn-secondary'}
              style={{ padding: '7px 14px', fontSize: '0.85rem', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title={cat.desc}
            >
              <Icon size={14} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          4. Viewport Simulation Canvas Frame
          ========================================================================= */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
          paddingBottom: '3rem',
        }}
      >
        <div
          data-taste-style={styleObj.id}
          key={resetNonce}
          style={{
            width: viewportPreset,
            maxWidth: '100%',
            transition: 'width 240ms cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: viewportPreset !== '100%' ? '0 25px 60px -15px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(125, 125, 125, 0.25)' : 'none',
            borderRadius: viewportPreset !== '100%' ? '20px' : '0',
            overflow: 'hidden',
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {/* Simulated Device Bezel Top Bar */}
          {viewportPreset !== '100%' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px',
                backgroundColor: 'var(--site-ink)',
                color: 'var(--site-bg)',
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '0.06em',
                borderRadius: '20px 20px 0 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span>DEVICE SIMULATOR: {viewportPreset}</span>
              </div>
              <button
                type="button"
                onClick={() => setViewportPreset('100%')}
                style={{ color: 'var(--site-accent)', fontWeight: '800', cursor: 'pointer', fontSize: '0.75rem' }}
              >
                Exit Simulator
              </button>
            </div>
          )}

          {/* =======================================================================
              5. Global Simulated Feedback State Overrides
              ======================================================================= */}
          {feedbackState === 'loading' && (
            <section style={{ width: '100%' }}>
              <div
                style={{
                  padding: '2.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <div style={{ height: '24px', width: '50%', backgroundColor: 'rgba(125, 125, 125, 0.2)', borderRadius: '6px', margin: '0 auto 1rem' }} />
                <div style={{ height: '16px', width: '75%', backgroundColor: 'rgba(125, 125, 125, 0.15)', borderRadius: '4px', margin: '0 auto 1.5rem' }} />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                  <div style={{ height: '42px', width: '140px', backgroundColor: 'rgba(125, 125, 125, 0.25)', borderRadius: '8px' }} />
                  <div style={{ height: '42px', width: '110px', backgroundColor: 'rgba(125, 125, 125, 0.15)', borderRadius: '8px' }} />
                </div>
                <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', fontWeight: '700', opacity: 0.8 }}>
                  Loading Skeleton Preview — Demonstrates responsive placeholder layout without simulated network stalling.
                </p>
              </div>
            </section>
          )}

          {feedbackState === 'error' && (
            <section style={{ width: '100%' }}>
              <div
                style={{
                  padding: '1.75rem',
                  border: '2px solid #ef4444',
                  borderRadius: styleObj.id === 'brutalism' ? '0px' : '12px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <AlertCircle size={28} color="#ef4444" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#ef4444', margin: 0 }}>
                    Simulated Error Presentation
                  </h4>
                  <p style={{ fontSize: '0.875rem', marginTop: '4px', lineHeight: 1.5 }}>
                    This demonstrates how system faults or validation blocks are communicated honestly in {styleObj.label} style without fabricated telemetry errors.
                  </p>
                </div>
              </div>
            </section>
          )}

          {feedbackState === 'empty' && (
            <section style={{ width: '100%' }}>
              <div
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  borderRadius: '16px',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(125, 125, 125, 0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <HelpCircle size={28} style={{ opacity: 0.7 }} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  No Content Available (Empty State)
                </h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.8, maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
                  Helpful empty states describe why no records appear and provide a clear, one-click corrective action.
                </p>
                <button
                  type="button"
                  onClick={() => setFeedbackState('default')}
                  className="neo-btn-primary"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Return to Default View
                </button>
              </div>
            </section>
          )}

          {/* =======================================================================
              6. Specimen Workbench Sections (11 Categories)
              ======================================================================= */}

          {/* Section: Foundations & Design DNA */}
          {(activeCategory === 'all' || activeCategory === 'foundations') && (
            <section id="foundations" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Foundations & Tokens
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Design DNA & Token System</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Core typography, color tokens, and elevation physics for {styleObj.label}.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  DNA SPECIMEN
                </span>
              </div>

              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                {/* Typography Scale Preview */}
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem', opacity: 0.75 }}>
                    Typography Hierarchy ({styleObj.typography.split(';')[0]})
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: '800', lineHeight: 1.15 }}>
                      The Quick Brown Fox Jumps
                    </div>
                    <div style={{ fontSize: '1rem', lineHeight: 1.5, opacity: 0.85 }}>
                      Design systems enforce rigor across components while respecting each style's genuine material constraints.
                    </div>
                    <div style={{ fontSize: '0.85rem', fontFamily: 'monospace', opacity: 0.7 }}>
                      mono: const theme = "{styleObj.id}"; // Token scale: 12px, 14px, 16px, 24px, 36px
                    </div>
                  </div>
                </div>

                {/* Token Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: 'rgba(125, 125, 125, 0.08)', border: '1px solid rgba(125, 125, 125, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Motion Profile</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: '700', marginTop: '4px' }}>{styleObj.motionPersonality.split(';')[0]}</p>
                  </div>
                  <div style={{ padding: '1rem', borderRadius: '8px', backgroundColor: 'rgba(125, 125, 125, 0.08)', border: '1px solid rgba(125, 125, 125, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Material Quality Gate</span>
                    <p style={{ fontSize: '0.875rem', fontWeight: '700', marginTop: '4px' }}>{styleObj.materialFidelityGate.split('.')[0]}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section: Buttons & Actions */}
          {(activeCategory === 'all' || activeCategory === 'buttons') && (
            <section id="buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Interactive Actions
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Buttons & Feedback States</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Primary, secondary, icon-only, disabled, and toast notification triggers.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  INTERACTIVE
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <SpecimenButtons styleId={styleObj.id} />
              </div>
            </section>
          )}

          {/* Section: Navigation & Tabs */}
          {(activeCategory === 'all' || activeCategory === 'navigation') && (
            <section id="navigation" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Navigation
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Navigation & Tabs</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Accessible tab switching with panel transitions and keyboard support.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  WCAG AA ACCESSIBLE
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <SpecimenTabs styleId={styleObj.id} />
              </div>
            </section>
          )}

          {/* Section: Cards & Media */}
          {(activeCategory === 'all' || activeCategory === 'cards') && (
            <section id="cards" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Card Components
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Cards & Media Specimen</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Structured media presentation with original artwork, tags, and interactive like counts.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  RESPONSIVE GRID
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                  <SpecimenImageCard
                    styleId={styleObj.id}
                    title="Tactile Architecture in Silicon"
                    category="Design Systems"
                    description="Real-time style routing and anti-slop verification applied across interactive web interfaces."
                    author="Studio Archive"
                    date="Nov 2026"
                  />
                  <SpecimenImageCard
                    styleId={styleObj.id}
                    title="Frosted Glass Material Physics"
                    category="Refraction"
                    description="Filtering differentiated background ambient light through 18px blur to make frosted glass visible."
                    author="Kennedys Lab"
                    date="Oct 2026"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Section: Forms & Controls */}
          {(activeCategory === 'all' || activeCategory === 'forms') && (
            <section id="forms" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Form Engine
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Forms & Validation Controls</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Text inputs, email, password reveal, selects, switches, file picker, and real client validation.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  FORM VALIDATION
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <SpecimenForm styleId={styleObj.id} />
              </div>
            </section>
          )}

          {/* Section: Auth Simulation Preview */}
          {(activeCategory === 'all' || activeCategory === 'auth') && (
            <section id="auth" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Authentication Specimen
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Auth Simulation Preview</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Authentic login & registration interface adhering to truthful front-end demo contracts.</p>
                </div>
                <Link
                  to={`/${styleObj.id}/login`}
                  className="neo-btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <ExternalLink size={14} />
                  <span>Open Full-Screen Auth Demo</span>
                </Link>
              </div>
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <div style={{ maxWidth: '440px', width: '100%', padding: '1.5rem', borderRadius: '12px', backgroundColor: 'var(--site-card, #ffffff)', border: 'var(--site-border, 1px solid rgba(0,0,0,0.1))', boxShadow: 'var(--site-shadow-sm, 0 4px 12px rgba(0,0,0,0.08))' }}>
                  <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Sign In to Studio</h4>
                    <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '2px' }}>Front-end demo validation. No remote credentials stored.</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Email Address</label>
                      <input
                        type="email"
                        readOnly
                        value="designer@example.com"
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(125,125,125,0.3)', backgroundColor: 'transparent', fontSize: '0.9rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Password</label>
                      <input
                        type="password"
                        readOnly
                        value="samplepassword"
                        style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(125,125,125,0.3)', backgroundColor: 'transparent', fontSize: '0.9rem' }}
                      />
                    </div>
                    <Link
                      to={`/${styleObj.id}/login`}
                      className="neo-btn-primary"
                      style={{ marginTop: '0.5rem', padding: '10px', textAlign: 'center', fontSize: '0.875rem' }}
                    >
                      Test Full Auth Flow
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section: Dialogs & Overlays */}
          {(activeCategory === 'all' || activeCategory === 'overlays') && (
            <section id="overlays" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Overlays
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Dialogs & Overlays</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Accessible modal dialog with Escape key dismiss, backdrop focus trap, and trigger restoration.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  FOCUS TRAPPED
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <SpecimenDialog styleId={styleObj.id} />
              </div>
            </section>
          )}

          {/* Section: Data & Search Table */}
          {(activeCategory === 'all' || activeCategory === 'data') && (
            <section id="data" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Data Cockpit
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Data, Search & Filtering</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Search, category filtering, column sorting, and row selection on labeled sample data.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  SORTABLE TABLE
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  overflowX: 'auto',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <SpecimenDataTable styleId={styleObj.id} />
              </div>
            </section>
          )}

          {/* Section: FAQ & Disclosure */}
          {(activeCategory === 'all' || activeCategory === 'disclosure') && (
            <section id="disclosure" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Disclosures
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>FAQ Accordion</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Accessible expand/collapse panels with ARIA expanded states and keyboard controls.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  KEYBOARD ACCESSIBLE
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <SpecimenFAQ styleId={styleObj.id} />
              </div>
            </section>
          )}

          {/* Section: Feedback States Specimen */}
          {(activeCategory === 'all' || activeCategory === 'feedback') && (
            <section id="feedback" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    System Feedback
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Feedback States & Resilience</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Explicit visual feedback patterns for loading skeletons, alerts, and empty states.</p>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.12)' }}>
                  FEEDBACK PATTERNS
                </span>
              </div>
              <div
                style={{
                  padding: '2rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                {/* State 1: Skeleton */}
                <div style={{ padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(125,125,125,0.2)', backgroundColor: 'rgba(125,125,125,0.06)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>1. Loading Skeleton</span>
                  <div style={{ marginTop: '0.75rem' }}>
                    <div style={{ height: '16px', width: '70%', backgroundColor: 'rgba(125,125,125,0.2)', borderRadius: '4px', marginBottom: '8px' }} />
                    <div style={{ height: '12px', width: '90%', backgroundColor: 'rgba(125,125,125,0.12)', borderRadius: '4px', marginBottom: '8px' }} />
                    <div style={{ height: '12px', width: '40%', backgroundColor: 'rgba(125,125,125,0.12)', borderRadius: '4px' }} />
                  </div>
                </div>

                {/* State 2: Warning Banner */}
                <div style={{ padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.3)', backgroundColor: 'rgba(239, 68, 68, 0.08)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#ef4444' }}>2. Error Banner</span>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', marginTop: '0.5rem', color: '#ef4444' }}>
                    Authentication simulation prevented: Missing required parameter.
                  </p>
                </div>

                {/* State 3: Empty State */}
                <div style={{ padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(125,125,125,0.2)', backgroundColor: 'rgba(125,125,125,0.06)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>3. Empty State</span>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', marginTop: '0.5rem' }}>
                    Zero matching records found.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Section: Dashboard Module Preview */}
          {(activeCategory === 'all' || activeCategory === 'dashboard') && (
            <section id="dashboard" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-secondary, #ff5757)' }}>
                    Application Screen
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: '2px 0 0' }}>Dashboard Module Preview</h3>
                  <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>Operational KPI cards, project summary metrics, and management controls.</p>
                </div>
                <Link
                  to={`/${styleObj.id}/dashboard`}
                  className="neo-btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <ExternalLink size={14} />
                  <span>Open Full Dashboard Demo</span>
                </Link>
              </div>
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  ...getStageStyle(styleObj.id),
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: 'rgba(125, 125, 125, 0.08)', border: '1px solid rgba(125, 125, 125, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Specimen Coverage</span>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', marginTop: '4px' }}>100%</div>
                    <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700' }}>11 / 11 Categories Tested</span>
                  </div>
                  <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: 'rgba(125, 125, 125, 0.08)', border: '1px solid rgba(125, 125, 125, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Anti-Slop Quality Gate</span>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', marginTop: '4px' }}>Pass</div>
                    <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700' }}>3-Tier Audit Verified</span>
                  </div>
                  <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: 'rgba(125, 125, 125, 0.08)', border: '1px solid rgba(125, 125, 125, 0.15)' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Style Identity</span>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', marginTop: '4px' }}>{styleObj.label}</div>
                    <span style={{ fontSize: '0.75rem', opacity: 0.8, fontWeight: '700' }}>Active Token Profile</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link
                    to={`/${styleObj.id}/dashboard`}
                    className="neo-btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                  >
                    Explore Interactive Dashboard
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
