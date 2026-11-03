import React, { useState } from 'react';
import SpecimenImageCard from './SpecimenImageCard';

export default function SpecimenHeroDemo() {
  const [selectedStyle, setSelectedStyle] = useState('neo-brutalism');

  const demoStyles = [
    { id: 'neo-brutalism', label: 'Neo-brutalism', badge: 'Active Site Style' },
    { id: 'glassmorphism', label: 'Glassmorphism', badge: 'Frosted Translucent' },
    { id: 'claymorphism', label: 'Claymorphism', badge: 'Sculpted Tactile' },
    { id: 'swiss-editorial', label: 'Swiss Editorial', badge: 'Grid Typographic' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        maxWidth: '380px',
      }}
    >
      {/* Live Style Switcher Pills */}
      <div
        role="group"
        aria-label="Select style to preview"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          justifyContent: 'center',
          backgroundColor: 'var(--site-card)',
          padding: '6px',
          border: 'var(--site-border)',
          borderRadius: 'var(--site-radius)',
          boxShadow: 'var(--site-shadow-sm)',
          width: '100%',
        }}
      >
        {demoStyles.map((item) => {
          const isActive = selectedStyle === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedStyle(item.id)}
              aria-pressed={isActive}
              style={{
                padding: '6px 12px',
                borderRadius: '4px',
                border: isActive ? '1.5px solid var(--site-ink)' : '1.5px solid transparent',
                backgroundColor: isActive ? 'var(--site-accent)' : 'transparent',
                color: isActive ? '#121212' : 'var(--site-ink)',
                fontWeight: isActive ? '800' : '600',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 120ms ease-out',
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Rendered Specimen in selected style: exact 380px x 430px card, no background wrapper */}
      <div
        data-taste-style={selectedStyle}
        style={{
          width: '100%',
          maxWidth: '380px',
          height: '430px',
          background: 'transparent',
          backgroundColor: 'transparent',
          padding: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        <SpecimenImageCard
          styleId={selectedStyle}
          title="Same Component, Different Material"
          category="Material Test"
          description="Notice how button physics, typography, shadows, and surfaces transform completely while preserving content hierarchy."
          author="Taste Engine"
          date="Live Preview"
        />
      </div>

      <div style={{ fontSize: '0.8rem', opacity: 0.8, textAlign: 'center', fontWeight: '600' }}>
        Interactive specimen: Switch styles to verify true material differences.
      </div>
    </div>
  );
}
