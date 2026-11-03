import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeftRight, Check, Sliders, RefreshCw } from 'lucide-react';
import { STYLES, STYLE_MAP, isValidStyle } from '../styles/registry';
import { usePageMetadata } from '../hooks/usePageMetadata';
import SpecimenImageCard from '../components/specimens/SpecimenImageCard';
import SpecimenFAQ from '../components/specimens/SpecimenFAQ';
import SpecimenForm from '../components/specimens/SpecimenForm';
import SpecimenDataTable from '../components/specimens/SpecimenDataTable';
import SpecimenButtons from '../components/specimens/SpecimenButtons';

export default function ComparePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  usePageMetadata(
    'Side-by-Side Style Comparison — Taste Engine',
    'Compare the exact same functional UI specimen rendered simultaneously in two selectable Taste Engine visual languages.'
  );

  const initialLeft = searchParams.get('left');
  const initialRight = searchParams.get('right');
  const initialSpecimen = searchParams.get('specimen');

  const [leftStyle, setLeftStyle] = useState(() =>
    initialLeft && isValidStyle(initialLeft) ? initialLeft : 'neo-brutalism'
  );
  const [rightStyle, setRightStyle] = useState(() =>
    initialRight && isValidStyle(initialRight) ? initialRight : 'glassmorphism'
  );
  const [selectedSpecimen, setSelectedSpecimen] = useState(() =>
    ['card', 'faq', 'form', 'data', 'buttons'].includes(initialSpecimen) ? initialSpecimen : 'card'
  );

  // Sync to URL parameters
  useEffect(() => {
    setSearchParams({
      left: leftStyle,
      right: rightStyle,
      specimen: selectedSpecimen,
    });
  }, [leftStyle, rightStyle, selectedSpecimen, setSearchParams]);

  const specimens = [
    { id: 'card', label: 'Media Card' },
    { id: 'faq', label: 'FAQ Accordion' },
    { id: 'form', label: 'Validated Form' },
    { id: 'data', label: 'Data Table' },
    { id: 'buttons', label: 'Buttons & Toast' },
  ];

  const renderSpecimen = (styleId) => {
    switch (selectedSpecimen) {
      case 'faq':
        return <SpecimenFAQ styleId={styleId} />;
      case 'form':
        return <SpecimenForm styleId={styleId} />;
      case 'data':
        return <SpecimenDataTable styleId={styleId} />;
      case 'buttons':
        return <SpecimenButtons styleId={styleId} />;
      default:
        return (
          <SpecimenImageCard
            styleId={styleId}
            title="Cross-Style Component Specimen"
            category="Comparison"
            description="Evaluating identical functional inputs, labels, and state transitions across contrasting design systems."
            author="Studio Bench"
            date="Live Sync"
          />
        );
    }
  };

  const styleObjLeft = STYLE_MAP.get(leftStyle);
  const styleObjRight = STYLE_MAP.get(rightStyle);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1280px' }}>
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6' }}>
          Interactive Bench
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Same behavior. Different visual language.
        </h1>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1rem', maxWidth: '720px', margin: '1rem auto 0' }}>
          Compare how material physics, typographic scale, borders, and shadows diverge while maintaining the exact same functional semantics.
        </p>
      </div>

      {/* Control Bar: Specimen Selector + Style Selectors */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.5rem',
          backgroundColor: 'var(--site-card)',
          border: 'var(--site-border)',
          borderRadius: 'var(--site-radius)',
          boxShadow: 'var(--site-shadow-md)',
          marginBottom: '3rem',
        }}
      >
        {/* Specimen choice */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: '800', fontSize: '0.9rem', marginRight: '4px' }}>
            Specimen:
          </span>
          {specimens.map((sp) => (
            <button
              key={sp.id}
              type="button"
              onClick={() => setSelectedSpecimen(sp.id)}
              className={selectedSpecimen === sp.id ? 'neo-btn-primary' : 'neo-btn-secondary'}
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              {sp.label}
            </button>
          ))}
        </div>

        {/* Swap Button */}
        <button
          type="button"
          onClick={() => {
            const temp = leftStyle;
            setLeftStyle(rightStyle);
            setRightStyle(temp);
          }}
          className="neo-btn-secondary"
          style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          title="Swap Left and Right styles"
        >
          <ArrowLeftRight size={16} />
          <span>Swap Sides</span>
        </button>
      </div>

      {/* Two Comparison Columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start',
        }}
      >
        {/* Left Pane */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label htmlFor="select-left-style" style={{ fontWeight: '800', fontSize: '1.1rem' }}>
              Style A:
            </label>
            <select
              id="select-left-style"
              value={leftStyle}
              onChange={(e) => setLeftStyle(e.target.value)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--site-radius)',
                border: 'var(--site-border)',
                backgroundColor: 'var(--site-accent)',
                color: '#121212',
                fontWeight: '800',
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              {STYLES.map((s) => (
                <option key={s.id} value={s.id} style={{ backgroundColor: 'var(--site-card)', color: 'var(--site-ink)' }}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div
            data-taste-style={leftStyle}
            style={{
              padding: '2rem',
              borderRadius: '16px',
              border: '2px solid rgba(125, 125, 125, 0.25)',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {renderSpecimen(leftStyle)}
          </div>

          <div style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
            <strong>Material:</strong> {styleObjLeft?.tagline}
          </div>
        </div>

        {/* Right Pane */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label htmlFor="select-right-style" style={{ fontWeight: '800', fontSize: '1.1rem' }}>
              Style B:
            </label>
            <select
              id="select-right-style"
              value={rightStyle}
              onChange={(e) => setRightStyle(e.target.value)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--site-radius)',
                border: 'var(--site-border)',
                backgroundColor: 'var(--site-accent-cyan)',
                color: '#121212',
                fontWeight: '800',
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              {STYLES.map((s) => (
                <option key={s.id} value={s.id} style={{ backgroundColor: 'var(--site-card)', color: 'var(--site-ink)' }}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div
            data-taste-style={rightStyle}
            style={{
              padding: '2rem',
              borderRadius: '16px',
              border: '2px solid rgba(125, 125, 125, 0.25)',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {renderSpecimen(rightStyle)}
          </div>

          <div style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
            <strong>Material:</strong> {styleObjRight?.tagline}
          </div>
        </div>
      </div>
    </div>
  );
}

