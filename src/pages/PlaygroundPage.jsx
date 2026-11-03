import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import {
  Sliders,
  Maximize2,
  Minimize2,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { SPECIMEN_CATEGORIES } from '../data/specimenCatalog';
import SpecimenImageCard from '../components/specimens/SpecimenImageCard';
import SpecimenButtons from '../components/specimens/SpecimenButtons';
import SpecimenFAQ from '../components/specimens/SpecimenFAQ';
import SpecimenTabs from '../components/specimens/SpecimenTabs';
import SpecimenForm from '../components/specimens/SpecimenForm';
import SpecimenDataTable from '../components/specimens/SpecimenDataTable';
import SpecimenDialog from '../components/specimens/SpecimenDialog';
import { getStyle } from '../styles/registry';

export default function PlaygroundPage() {
  const context = useOutletContext() || {};
  const styleObj = context.styleObj || getStyle('neo-brutalism');

  usePageMetadata(
    `${styleObj.label} Component Playground — Taste Engine`,
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

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem', maxWidth: '1280px' }}>
      {/* Playground Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6' }}>
              Component Laboratory
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: '800', marginTop: '0.25rem' }}>
              {styleObj.label} Playground
            </h1>
          </div>

          {/* Quick links to Login & Dashboard */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <Link
              to={`/${styleObj.id}/login`}
              className="neo-btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <Lock size={15} />
              <span>Full-Screen Auth Demo</span>
            </Link>
            <Link
              to={`/${styleObj.id}/dashboard`}
              className="neo-btn-secondary"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <span>Full Dashboard Demo</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Control Toolbar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          backgroundColor: 'var(--site-card)',
          border: 'var(--site-border)',
          borderRadius: 'var(--site-radius)',
          boxShadow: 'var(--site-shadow-sm)',
          marginBottom: '2rem',
        }}
      >
        {/* Viewport simulation presets */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', marginRight: '4px' }}>
            Viewport Simulation:
          </span>
          <button
            type="button"
            onClick={() => setViewportPreset('100%')}
            className={viewportPreset === '100%' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 10px', fontSize: '0.8rem' }}
            title="Full Width Responsive"
          >
            <Monitor size={14} />
            <span>Fluid (100%)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('768px')}
            className={viewportPreset === '768px' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 10px', fontSize: '0.8rem' }}
            title="Tablet Width (768px)"
          >
            <Tablet size={14} />
            <span>Tablet (768px)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('390px')}
            className={viewportPreset === '390px' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 10px', fontSize: '0.8rem' }}
            title="Mobile Width (390px)"
          >
            <Smartphone size={14} />
            <span>Mobile (390px)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewportPreset('320px')}
            className={viewportPreset === '320px' ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 10px', fontSize: '0.8rem' }}
            title="Narrow Mobile (320px)"
          >
            <span>Narrow (320px)</span>
          </button>
        </div>

        {/* State Switcher & Reset */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label htmlFor="state-switcher" style={{ fontSize: '0.85rem', fontWeight: '700' }}>
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
              fontSize: '0.85rem',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            <option value="default">Default State</option>
            <option value="loading">Loading Skeleton</option>
            <option value="error">Error Banner</option>
            <option value="empty">Empty State</option>
          </select>

          <button
            type="button"
            onClick={handleReset}
            className="neo-btn-secondary"
            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            title="Reset playground state"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div
        role="tablist"
        aria-label="Component categories"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginBottom: '2.5rem',
        }}
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          className={activeCategory === 'all' ? 'neo-btn-primary' : 'neo-btn-secondary'}
          style={{ padding: '6px 14px', fontSize: '0.85rem' }}
        >
          All Specimens
        </button>
        {SPECIMEN_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={activeCategory === cat.id ? 'neo-btn-primary' : 'neo-btn-secondary'}
            style={{ padding: '6px 14px', fontSize: '0.85rem' }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Viewport Simulation Frame */}
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
          key={resetNonce}
          style={{
            width: viewportPreset,
            maxWidth: '100%',
            transition: 'width 240ms ease-out',
            border: viewportPreset !== '100%' ? '3px dashed #121212' : 'none',
            borderRadius: viewportPreset !== '100%' ? '16px' : '0',
            padding: viewportPreset !== '100%' ? '1.5rem' : '0',
            backgroundColor: viewportPreset !== '100%' ? 'var(--site-bg)' : 'transparent',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
          {/* Simulated Viewport Label */}
          {viewportPreset !== '100%' && (
            <div
              style={{
                textAlign: 'center',
                padding: '4px 10px',
                backgroundColor: 'var(--site-accent)',
                color: '#121212',
                fontWeight: '800',
                fontSize: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #121212',
                marginBottom: '1rem',
              }}
            >
              SIMULATED VIEWPORT: {viewportPreset}
            </div>
          )}

          {/* Feedback State Previews */}
          {feedbackState === 'loading' && (
            <div className="neo-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ height: '24px', width: '60%', backgroundColor: 'rgba(125, 125, 125, 0.2)', borderRadius: '4px', margin: '0 auto 1rem' }} />
              <div style={{ height: '16px', width: '80%', backgroundColor: 'rgba(125, 125, 125, 0.15)', borderRadius: '4px', margin: '0 auto 1.5rem' }} />
              <div style={{ height: '40px', width: '140px', backgroundColor: 'rgba(125, 125, 125, 0.25)', borderRadius: '6px', margin: '0 auto' }} />
              <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', fontWeight: '700', opacity: 0.8 }}>
                Loading State Preview — Not a real network delay.
              </p>
            </div>
          )}

          {feedbackState === 'error' && (
            <div
              style={{
                padding: '1.5rem',
                border: '2px solid #ef4444',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <AlertTriangle size={24} color="#ef4444" style={{ flexShrink: 0 }} />
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#ef4444' }}>
                  Simulated Error State
                </h4>
                <p style={{ fontSize: '0.875rem', marginTop: '2px' }}>
                  This is a sample error presentation demonstrating how form or network errors are communicated without fake crash telemetry.
                </p>
              </div>
            </div>
          )}

          {feedbackState === 'empty' && (
            <div className="neo-card" style={{ padding: '3rem', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                No Items Found (Empty State)
              </h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '1.25rem' }}>
                Clear, helpful empty states explain why no content appears and provide an immediate corrective action.
              </p>
              <button
                type="button"
                onClick={() => setFeedbackState('default')}
                className="neo-btn-primary"
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                Reset to Default State
              </button>
            </div>
          )}

          {/* Section: Buttons & Actions */}
          {(activeCategory === 'all' || activeCategory === 'buttons') && (
            <section id="buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderBottom: '1px solid rgba(125, 125, 125, 0.2)', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Buttons & Feedback States</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>Primary, secondary, icon-only, disabled, and toast notification triggers.</p>
              </div>
              <SpecimenButtons styleId={styleObj.id} />
            </section>
          )}

          {/* Section: Tabs & Foundations */}
          {(activeCategory === 'all' || activeCategory === 'foundations' || activeCategory === 'navigation') && (
            <section id="navigation" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderBottom: '1px solid rgba(125, 125, 125, 0.2)', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Navigation & Tabs</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>Accessible tab switching with panel transitions and keyboard support.</p>
              </div>
              <SpecimenTabs styleId={styleObj.id} />
            </section>
          )}

          {/* Section: Cards & Media */}
          {(activeCategory === 'all' || activeCategory === 'cards') && (
            <section id="cards" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderBottom: '1px solid rgba(125, 125, 125, 0.2)', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Cards & Media Specimen</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>Structured media presentation with attribution, tags, and interactive likes.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
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
            </section>
          )}

          {/* Section: Forms & Controls */}
          {(activeCategory === 'all' || activeCategory === 'forms') && (
            <section id="forms" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderBottom: '1px solid rgba(125, 125, 125, 0.2)', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Forms & Validation</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>Text inputs, email, password show/hide, select, checkbox, switch, and local file picker.</p>
              </div>
              <SpecimenForm styleId={styleObj.id} />
            </section>
          )}

          {/* Section: Dialogs & Overlays */}
          {(activeCategory === 'all' || activeCategory === 'overlays') && (
            <section id="overlays" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderBottom: '1px solid rgba(125, 125, 125, 0.2)', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Dialogs & Overlays</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>Accessible modal dialog with Escape dismiss, focus trap, and trigger restoration.</p>
              </div>
              <SpecimenDialog styleId={styleObj.id} />
            </section>
          )}

          {/* Section: Data & Search Table */}
          {(activeCategory === 'all' || activeCategory === 'data') && (
            <section id="data" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderBottom: '1px solid rgba(125, 125, 125, 0.2)', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>Data, Search & Filtering</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>Search, category filtering, column sorting, and row selection on labeled sample data.</p>
              </div>
              <SpecimenDataTable styleId={styleObj.id} />
            </section>
          )}

          {/* Section: FAQ & Disclosure */}
          {(activeCategory === 'all' || activeCategory === 'disclosure') && (
            <section id="disclosure" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderBottom: '1px solid rgba(125, 125, 125, 0.2)', paddingBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800' }}>FAQ Accordion</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.85 }}>Accessible expand/collapse panels with ARIA expanded states.</p>
              </div>
              <SpecimenFAQ styleId={styleObj.id} />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
