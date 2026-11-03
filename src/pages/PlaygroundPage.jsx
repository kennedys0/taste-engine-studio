import React, { useState } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import {
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
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { SPECIMEN_CATEGORIES } from '../data/specimenCatalog';
import { SAMPLE_PROJECTS } from '../data/sampleProjects';
import { STYLES, getStyle } from '../styles/registry';
import { getStyleThemeClasses } from '../utils/styleTheme';
import SpecimenButtons from '../components/specimens/SpecimenButtons';
import SpecimenTabs from '../components/specimens/SpecimenTabs';
import SpecimenForm from '../components/specimens/SpecimenForm';
import SpecimenImageCard from '../components/specimens/SpecimenImageCard';
import SpecimenDataTable from '../components/specimens/SpecimenDataTable';
import SpecimenDialog from '../components/specimens/SpecimenDialog';
import SpecimenFAQ from '../components/specimens/SpecimenFAQ';

/**
 * Authentic Stage Physics: Background styling reflecting the true material constraints of each style
 */
function getStageStyle(styleId) {
  switch (styleId) {
    case 'glassmorphism':
      return {
        background: `
          radial-gradient(ellipse 65% 55% at 20% 35%, rgba(99, 164, 255, 0.35) 0%, transparent 70%),
          radial-gradient(ellipse 55% 50% at 85% 65%, rgba(196, 181, 253, 0.40) 0%, transparent 70%),
          linear-gradient(135deg, rgba(240, 246, 255, 0.95) 0%, rgba(226, 237, 252, 0.95) 100%)
        `,
        border: '1px solid var(--glass-edge, rgba(255, 255, 255, 0.7))',
        boxShadow: 'var(--glass-shadow, 0 20px 50px rgba(28, 76, 156, 0.15))',
        borderRadius: '24px',
      };
    case 'retro-terminal':
      return {
        backgroundColor: '#0c1017',
        color: 'var(--term-ink, #523102)',
        border: 'var(--term-border, 1px solid rgba(124, 74, 3, 0.35))',
        boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.65), 0 8px 30px rgba(0, 0, 0, 0.5)',
        borderRadius: '8px',
      };
    case 'claymorphism':
      return {
        backgroundColor: 'var(--clay-bg, #f3f0fa)',
        borderRadius: '32px',
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
        backgroundColor: 'var(--bento-surface, #f9fafb)',
        border: 'var(--bento-border, 1px solid rgba(0, 0, 0, 0.08))',
        borderRadius: '24px',
        boxShadow: 'var(--bento-shadow, 0 8px 24px rgba(0, 0, 0, 0.06))',
      };
    case 'skeuomorphism':
      return {
        background: 'var(--skeuo-chassis, linear-gradient(180deg, #edf0f5 0%, #d8dde6 100%))',
        border: 'var(--skeuo-panel-border, 1px solid #b8bec9)',
        boxShadow: 'var(--skeuo-highlight, inset 0 1px 0 rgba(255, 255, 255, 0.85)), 0 12px 32px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
      };
    case 'enterprise':
      return {
        backgroundColor: 'var(--ent-surface, #ffffff)',
        border: 'var(--ent-border, 1px solid #e5e7eb)',
        borderRadius: '12px',
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
        borderRadius: '16px',
        boxShadow: 'var(--mini-shadow, 0 1px 3px rgba(0, 0, 0, 0.04))',
      };
    case 'neo-brutalism':
      return {
        backgroundColor: 'var(--neo-card, #ffffff)',
        border: 'var(--neo-border, 2.5px solid #121212)',
        boxShadow: 'var(--neo-shadow-sm, 3px 3px 0 #121212)',
        borderRadius: 'var(--neo-radius, 8px)',
      };
    default:
      return {
        backgroundColor: 'var(--site-card, #ffffff)',
        border: '1px solid rgba(125, 125, 125, 0.2)',
        borderRadius: '12px',
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
  const themeClasses = getStyleThemeClasses(styleObj.id);
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

  const isFocusedCategory = activeCategory !== 'all';
  const activeCategoryObj = SPECIMEN_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem 4rem', maxWidth: '1360px', width: '100%', fontFamily: 'var(--site-font-body)' }}>
      {/* =========================================================================
          1. Header Area: Clean, Refined & Spacious
          ========================================================================= */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '9999px', backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              <Sparkles size={13} />
              <span>Interactive Component Laboratory</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '700', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2 }}>
              {styleObj.label} Playground
            </h1>
            <div style={{ minHeight: '36px', display: 'flex', alignItems: 'center' }}>
              <p style={{ fontSize: '0.95rem', opacity: 0.8, margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
                {styleObj.tagline}
              </p>
            </div>
          </div>

          {/* Quick Subroute Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link
              to={`/${styleObj.id}/login`}
              className={themeClasses.btnSecondary}
              style={{ padding: '8px 14px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Full-screen authentication demo"
            >
              <Lock size={14} />
              <span>Auth Demo</span>
            </Link>
            <Link
              to={`/${styleObj.id}/dashboard`}
              className={themeClasses.btnSecondary}
              style={{ padding: '8px 14px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Operational dashboard demo"
            >
              <Grid size={14} />
              <span>Dashboard Demo</span>
            </Link>
            <Link
              to={`/${styleObj.id}`}
              className={themeClasses.btnPrimary}
              style={{ padding: '8px 16px', fontSize: '0.85rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="View full architectural specification"
            >
              <span>Overview</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Live 10-Style Switcher Track */}
        <div
          style={{
            marginTop: '1.25rem',
            padding: '6px 10px',
            backgroundColor: 'rgba(125, 125, 125, 0.05)',
            border: '1px solid rgba(125, 125, 125, 0.15)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.65, paddingLeft: '4px', whiteSpace: 'nowrap' }}>
            Styles:
          </span>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'nowrap' }}>
            {STYLES.map((s) => {
              const isCurrent = s.id === styleObj.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleStyleChange(s.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: isCurrent ? '1px solid var(--site-ink)' : '1px solid transparent',
                    backgroundColor: isCurrent ? 'var(--site-ink)' : 'transparent',
                    color: isCurrent ? 'var(--site-bg)' : 'var(--site-ink)',
                    fontSize: '0.785rem',
                    fontWeight: '700',
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
          2. Category Segmented Control & Navigation
          ========================================================================= */}
      <div
        role="tablist"
        aria-label="Component categories"
        style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          marginBottom: '1rem',
          scrollbarWidth: 'thin',
        }}
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          className={activeCategory === 'all' ? themeClasses.btnPrimary : themeClasses.btnSecondary}
          style={{ padding: '6px 14px', fontSize: '0.825rem', fontWeight: '700', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
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
              className={isSelected ? themeClasses.btnPrimary : themeClasses.btnSecondary}
              style={{ padding: '6px 12px', fontSize: '0.825rem', fontWeight: '700', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title={cat.desc}
            >
              <Icon size={14} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          3. Canvas Inspector Toolbar (Device Presets, State, Reset)
          ========================================================================= */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px',
          backgroundColor: 'rgba(125, 125, 125, 0.05)',
          border: '1px solid rgba(125, 125, 125, 0.15)',
          borderRadius: '10px',
          marginBottom: '1.75rem',
        }}
      >
        {/* Viewport Presets Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', marginRight: '4px', textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.7 }}>
            Viewport:
          </span>
          <button
            type="button"
            onClick={() => setViewportPreset('100%')}
            style={{
              padding: '5px 10px',
              fontSize: '0.785rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '6px',
              border: viewportPreset === '100%' ? '1px solid var(--site-ink)' : '1px solid transparent',
              backgroundColor: viewportPreset === '100%' ? 'rgba(125, 125, 125, 0.14)' : 'transparent',
              color: 'inherit',
              cursor: 'pointer',
            }}
            title="Fluid responsive canvas"
          >
            <Monitor size={14} />
            <span>Fluid (100%)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('768px')}
            style={{
              padding: '5px 10px',
              fontSize: '0.785rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '6px',
              border: viewportPreset === '768px' ? '1px solid var(--site-ink)' : '1px solid transparent',
              backgroundColor: viewportPreset === '768px' ? 'rgba(125, 125, 125, 0.14)' : 'transparent',
              color: 'inherit',
              cursor: 'pointer',
            }}
            title="Tablet simulator (768px)"
          >
            <Tablet size={14} />
            <span>Tablet (768px)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('390px')}
            style={{
              padding: '5px 10px',
              fontSize: '0.785rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '6px',
              border: viewportPreset === '390px' ? '1px solid var(--site-ink)' : '1px solid transparent',
              backgroundColor: viewportPreset === '390px' ? 'rgba(125, 125, 125, 0.14)' : 'transparent',
              color: 'inherit',
              cursor: 'pointer',
            }}
            title="Mobile phone simulator (390px)"
          >
            <Smartphone size={14} />
            <span>Mobile (390px)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('320px')}
            style={{
              padding: '5px 10px',
              fontSize: '0.785rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              borderRadius: '6px',
              border: viewportPreset === '320px' ? '1px solid var(--site-ink)' : '1px solid transparent',
              backgroundColor: viewportPreset === '320px' ? 'rgba(125, 125, 125, 0.14)' : 'transparent',
              color: 'inherit',
              cursor: 'pointer',
            }}
            title="Compact mobile simulator (320px)"
          >
            <Smartphone size={14} />
            <span>Narrow (320px)</span>
          </button>
        </div>

        {/* State Simulation & Reset */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <label htmlFor="state-switcher" style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', opacity: 0.7 }}>
              State:
            </label>
            <select
              id="state-switcher"
              value={feedbackState}
              onChange={(e) => setFeedbackState(e.target.value)}
              className={themeClasses.input}
              style={{
                padding: '4px 8px',
                fontSize: '0.8rem',
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
            className={themeClasses.btnSecondary}
            style={{ padding: '5px 10px', fontSize: '0.785rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            title="Reset playground viewports, states, and filters"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          4. Unified Stage Canvas: Elegant, Harmonious & Focused
          ========================================================================= */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'auto',
          paddingBottom: '2rem',
        }}
      >
        <div
          data-taste-style={styleObj.id}
          data-viewport={viewportPreset}
          className="viewport-simulator-frame"
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
          }}
        >
          {/* Simulated Device Bezel Top Bar */}
          {viewportPreset !== '100%' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 14px',
                backgroundColor: 'var(--site-ink)',
                color: 'var(--site-bg)',
                fontSize: '0.75rem',
                fontWeight: '800',
                letterSpacing: '0.06em',
                borderRadius: '20px 20px 0 0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span>DEVICE PREVIEW: {viewportPreset}</span>
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

          {/* Unified Primary Stage Canvas */}
          <div
            className="simulator-stage"
            style={{
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              ...getStageStyle(styleObj.id),
            }}
          >
            {/* Global Simulated Feedback Overrides */}
            {feedbackState === 'loading' && (
              <div
                className={themeClasses.card}
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div style={{ height: '20px', width: '40%', backgroundColor: 'rgba(125, 125, 125, 0.2)', borderRadius: '6px' }} />
                <div style={{ height: '14px', width: '65%', backgroundColor: 'rgba(125, 125, 125, 0.12)', borderRadius: '4px' }} />
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ height: '38px', width: '130px', backgroundColor: 'rgba(125, 125, 125, 0.2)', borderRadius: '6px' }} />
                  <div style={{ height: '38px', width: '100px', backgroundColor: 'rgba(125, 125, 125, 0.12)', borderRadius: '6px' }} />
                </div>
                <p style={{ fontSize: '0.85rem', fontWeight: '700', opacity: 0.75, marginTop: '1rem' }}>
                  Simulated Loading Skeleton State
                </p>
              </div>
            )}

            {feedbackState === 'error' && (
              <div
                style={{
                  padding: '1.5rem',
                  border: '1.5px solid #ef4444',
                  borderRadius: styleObj.id === 'brutalism' ? '0px' : styleObj.id === 'claymorphism' ? '20px' : '12px',
                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <AlertCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#ef4444', margin: 0 }}>
                    Simulated Error Presentation
                  </h4>
                  <p style={{ fontSize: '0.85rem', marginTop: '4px', lineHeight: 1.5, opacity: 0.9 }}>
                    Shows how system faults or validation blocks communicate cleanly in {styleObj.label} style.
                  </p>
                </div>
              </div>
            )}

            {feedbackState === 'empty' && (
              <div
                className={themeClasses.card}
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(125, 125, 125, 0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <HelpCircle size={24} style={{ opacity: 0.7 }} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', margin: '0 0 0.5rem' }}>
                  No Content Available
                </h4>
                <p style={{ fontSize: '0.875rem', opacity: 0.75, maxWidth: '420px', margin: '0 0 1.5rem', lineHeight: 1.5 }}>
                  Helpful empty states describe why no records appear and provide a clear one-click corrective action.
                </p>
                <button
                  type="button"
                  onClick={() => setFeedbackState('default')}
                  className={themeClasses.btnPrimary}
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Return to Default View
                </button>
              </div>
            )}

            {feedbackState === 'default' && (
              <>
                {/* Focused Category Header (when a single category is selected) */}
                {isFocusedCategory && activeCategoryObj && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.2)' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6' }}>
                        Focused Category Specimen
                      </span>
                      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', margin: '2px 0 0' }}>
                        {activeCategoryObj.label}
                      </h2>
                      <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '2px' }}>
                        {activeCategoryObj.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('all')}
                      className={themeClasses.btnSecondary}
                      style={{ padding: '6px 14px', fontSize: '0.8rem', fontWeight: '700' }}
                    >
                      Show All Specimens
                    </button>
                  </div>
                )}

                {/* Section 1: Buttons & Interactive Actions */}
                {(activeCategory === 'all' || activeCategory === 'buttons') && (
                  <div
                    id="buttons"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Interactive Actions
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Buttons & Feedback States
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('buttons')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <SpecimenButtons styleId={styleObj.id} />
                  </div>
                )}

                {/* Section 2: Form Controls & Validation */}
                {(activeCategory === 'all' || activeCategory === 'forms') && (
                  <div
                    id="forms"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Form Engine
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Forms & Validation Controls
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('forms')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <SpecimenForm styleId={styleObj.id} />
                    </div>
                  </div>
                )}

                {/* Section 3: Cards & Media Presentation */}
                {(activeCategory === 'all' || activeCategory === 'cards') && (
                  <div
                    id="cards"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Card Components
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Cards & Media Specimens
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('cards')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
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
                        description="Filtering differentiated ambient light through 18px blur to make frosted glass visible."
                        author="Kennedys Lab"
                        date="Oct 2026"
                      />
                    </div>
                  </div>
                )}

                {/* Section 4: Navigation & Tabs */}
                {(activeCategory === 'all' || activeCategory === 'navigation') && (
                  <div
                    id="navigation"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Navigation
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Navigation & Accessible Tabs
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('navigation')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <SpecimenTabs styleId={styleObj.id} />
                  </div>
                )}

                {/* Section 5: Data & Search Table */}
                {(activeCategory === 'all' || activeCategory === 'data') && (
                  <div
                    id="data"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Data Cockpit
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Data, Search & Filtering Table
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('data')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                      <SpecimenDataTable styleId={styleObj.id} />
                    </div>
                  </div>
                )}

                {/* Section 6: Dialogs & Overlays */}
                {(activeCategory === 'all' || activeCategory === 'overlays') && (
                  <div
                    id="overlays"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Overlays
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Dialogs & Accessible Modals
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('overlays')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <SpecimenDialog styleId={styleObj.id} />
                  </div>
                )}

                {/* Section 7: FAQ & Disclosure */}
                {(activeCategory === 'all' || activeCategory === 'disclosure') && (
                  <div
                    id="disclosure"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Disclosures
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          FAQ & Disclosure Accordion
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('disclosure')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <SpecimenFAQ styleId={styleObj.id} />
                  </div>
                )}

                {/* Section 8: System Feedback Patterns */}
                {(activeCategory === 'all' || activeCategory === 'feedback') && (
                  <div
                    id="feedback"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          System Feedback
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Feedback Patterns & Resilience
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('feedback')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                      <div className={themeClasses.card} style={{ padding: '1.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>1. Loading Skeleton</span>
                        <div style={{ marginTop: '0.75rem' }}>
                          <div style={{ height: '14px', width: '70%', backgroundColor: 'rgba(125,125,125,0.2)', borderRadius: '4px', marginBottom: '8px' }} />
                          <div style={{ height: '12px', width: '90%', backgroundColor: 'rgba(125,125,125,0.12)', borderRadius: '4px', marginBottom: '8px' }} />
                          <div style={{ height: '12px', width: '40%', backgroundColor: 'rgba(125,125,125,0.12)', borderRadius: '4px' }} />
                        </div>
                      </div>

                      <div style={{ padding: '1.25rem', borderRadius: styleObj.id === 'brutalism' ? '0px' : styleObj.id === 'claymorphism' ? '20px' : '8px', border: '1px solid rgba(239, 68, 68, 0.3)', backgroundColor: 'rgba(239, 68, 68, 0.08)' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: '#ef4444' }}>2. Error Banner</span>
                        <p style={{ fontSize: '0.85rem', fontWeight: '600', marginTop: '0.5rem', color: '#ef4444' }}>
                          Authentication simulation prevented: Missing required parameter.
                        </p>
                      </div>

                      <div className={themeClasses.card} style={{ padding: '1.25rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>3. Empty State</span>
                        <p style={{ fontSize: '0.85rem', fontWeight: '600', marginTop: '0.5rem' }}>
                          Zero matching records found.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 9: Foundations & Design DNA */}
                {(activeCategory === 'all' || activeCategory === 'foundations') && (
                  <div
                    id="foundations"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Foundations & Tokens
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Design DNA & Hierarchy
                        </h3>
                      </div>
                      {!isFocusedCategory && (
                        <button
                          type="button"
                          onClick={() => setActiveCategory('foundations')}
                          style={{ fontSize: '0.785rem', fontWeight: '700', opacity: 0.7, cursor: 'pointer', background: 'transparent', border: 'none', color: 'inherit' }}
                        >
                          Focus &rarr;
                        </button>
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: '800', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                        The Quick Brown Fox Jumps
                      </div>
                      <p style={{ fontSize: '0.925rem', lineHeight: 1.5, opacity: 0.85, maxWidth: '680px' }}>
                        Design systems enforce rigor across components while respecting each style's genuine material constraints.
                      </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
                      <div className={themeClasses.card} style={{ padding: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Motion Profile</span>
                        <p style={{ fontSize: '0.875rem', fontWeight: '700', marginTop: '4px' }}>{styleObj.motionPersonality.split(';')[0]}</p>
                      </div>
                      <div className={themeClasses.card} style={{ padding: '1rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Material Quality Gate</span>
                        <p style={{ fontSize: '0.875rem', fontWeight: '700', marginTop: '4px' }}>{styleObj.materialFidelityGate.split('.')[0]}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 10: Auth Simulation Preview */}
                {(activeCategory === 'all' || activeCategory === 'auth') && (
                  <div
                    id="auth"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Authentication Specimen
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Auth Simulation Preview
                        </h3>
                      </div>
                      <Link
                        to={`/${styleObj.id}/login`}
                        className={themeClasses.btnSecondary}
                        style={{ padding: '5px 10px', fontSize: '0.785rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                      >
                        <ExternalLink size={13} />
                        <span>Open Demo</span>
                      </Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div
                        className={themeClasses.card}
                        style={{ maxWidth: '400px', width: '100%', padding: '1.75rem', boxSizing: 'border-box' }}
                      >
                        <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
                          <h4 style={{ fontSize: '1.15rem', fontWeight: '800', margin: 0 }}>Sign In</h4>
                          <p style={{ fontSize: '0.8rem', opacity: 0.75, marginTop: '2px' }}>Front-end demo validation. No credentials stored.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          <div>
                            <label style={{ fontSize: '0.785rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Email</label>
                            <input
                              type="email"
                              readOnly
                              value="designer@example.com"
                              className={themeClasses.input}
                              style={{ width: '100%', fontSize: '0.875rem' }}
                            />
                          </div>
                          <div>
                            <label style={{ fontSize: '0.785rem', fontWeight: '700', display: 'block', marginBottom: '4px' }}>Password</label>
                            <input
                              type="password"
                              readOnly
                              value="samplepassword"
                              className={themeClasses.input}
                              style={{ width: '100%', fontSize: '0.875rem' }}
                            />
                          </div>
                          <Link
                            to={`/${styleObj.id}/login`}
                            className={themeClasses.btnPrimary}
                            style={{ marginTop: '0.5rem', padding: '9px', textAlign: 'center', fontSize: '0.85rem' }}
                          >
                            Test Full Auth Flow
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 11: Dashboard Module Preview */}
                {(activeCategory === 'all' || activeCategory === 'dashboard') && (
                  <div
                    id="dashboard"
                    className={themeClasses.card}
                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(125, 125, 125, 0.15)' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.65 }}>
                          Application Screen
                        </span>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '2px 0 0' }}>
                          Dashboard Module Preview
                        </h3>
                      </div>
                      <Link
                        to={`/${styleObj.id}/dashboard`}
                        className={themeClasses.btnSecondary}
                        style={{ padding: '5px 10px', fontSize: '0.785rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                      >
                        <ExternalLink size={13} />
                        <span>Open Dashboard</span>
                      </Link>
                    </div>

                    {/* Live Mini KPI Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                      <div className={themeClasses.card} style={{ padding: '1.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Sample Work Items</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '4px', fontVariantNumeric: 'tabular-nums' }}>
                          {SAMPLE_PROJECTS.length}
                        </div>
                        <span style={{ fontSize: '0.75rem', opacity: 0.75, fontWeight: '700' }}>Active in Fixture</span>
                      </div>
                      <div className={themeClasses.card} style={{ padding: '1.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Completed Gates</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '4px', color: '#10b981', fontVariantNumeric: 'tabular-nums' }}>
                          {SAMPLE_PROJECTS.filter((p) => p.status === 'Completed').length}
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: '700' }}>40% Complete</span>
                      </div>
                      <div className={themeClasses.card} style={{ padding: '1.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>Under Visual QA</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '4px', color: '#f59e0b', fontVariantNumeric: 'tabular-nums' }}>
                          {SAMPLE_PROJECTS.filter((p) => p.status === 'In Review').length}
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#f59e0b', fontWeight: '700' }}>Pending Approval</span>
                      </div>
                    </div>

                    {/* Live Mini Activity Feed of Recent Tasks */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>
                        Recent Sample Activity:
                      </span>
                      {SAMPLE_PROJECTS.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '8px 12px',
                            borderRadius: styleObj.id === 'brutalism' ? '0px' : styleObj.id === 'claymorphism' ? '12px' : '6px',
                            backgroundColor: 'rgba(125, 125, 125, 0.08)',
                            fontSize: '0.8rem',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontFamily: 'monospace', fontWeight: '700' }}>{item.id}</span>
                            <span style={{ fontWeight: '600' }}>{item.name}</span>
                          </div>
                          <span
                            style={{
                              fontSize: '0.725rem',
                              fontWeight: '700',
                              padding: '2px 6px',
                              borderRadius: styleObj.id === 'brutalism' ? '0px' : '4px',
                              backgroundColor:
                                item.status === 'Completed' ? 'rgba(16, 185, 129, 0.15)' :
                                item.status === 'In Review' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                              color:
                                item.status === 'Completed' ? '#10b981' :
                                item.status === 'In Review' ? '#f59e0b' : '#3b82f6',
                            }}
                          >
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                      <Link
                        to={`/${styleObj.id}/dashboard`}
                        className={themeClasses.btnPrimary}
                        style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                      >
                        Explore Interactive Dashboard
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
