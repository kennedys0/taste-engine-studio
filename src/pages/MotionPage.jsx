import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Play, Zap, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function MotionPage() {
  usePageMetadata(
    'Style-Aligned Motion Engine — Taste Engine',
    'CSS-first interaction feedback and optional Anime.js v4 coordinated transitions with strict reduced-motion support.'
  );

  const [simulatedReducedMotion, setSimulatedReducedMotion] = useState(false);
  const [pressedStyle, setPressedStyle] = useState(null);

  const handlePress = (id) => {
    setPressedStyle(id);
    setTimeout(() => setPressedStyle(null), 350);
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ec4899' }}>
          Micro-interactions & Physics
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Motion should explain interaction.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Taste Engine rejects gratuitous looped particle animations and slow cinematic entrances. Motion exists to provide immediate physical feedback aligned with each style's material personality.
        </p>
      </div>

      {/* Interactive Micro-interaction Lab */}
      <div className="neo-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Interactive Motion Lab</h2>
            <p style={{ fontSize: '0.9rem', opacity: 0.85, marginTop: '2px' }}>
              Test how different styles translate physical click physics into CSS transitions.
            </p>
          </div>

          {/* Reduced motion simulation switch */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              id="sim-motion"
              type="checkbox"
              checked={simulatedReducedMotion}
              onChange={(e) => setSimulatedReducedMotion(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="sim-motion" style={{ fontSize: '0.85rem', fontWeight: '700', cursor: 'pointer' }}>
              Simulate Reduced Motion
            </label>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {/* Neo-brutalist mechanical collapse */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => handlePress('neo')}
              className="neo-btn-primary"
              style={{
                transitionDuration: simulatedReducedMotion ? '0ms' : '120ms',
                transform: !simulatedReducedMotion && pressedStyle === 'neo' ? 'translate(3px, 3px)' : undefined,
                boxShadow: !simulatedReducedMotion && pressedStyle === 'neo' ? '2px 2px 0 #121212' : undefined,
              }}
            >
              <span>Mechanical Press</span>
            </button>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Neo-brutalism: 120ms shadow collapse</span>
          </div>

          {/* Claymorphism tactile squish */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => handlePress('clay')}
              className="clay-btn-primary"
              style={{
                transitionDuration: simulatedReducedMotion ? '0ms' : '160ms',
                transform: !simulatedReducedMotion && pressedStyle === 'clay' ? 'scale(0.96) translateY(2px)' : undefined,
              }}
            >
              <span>Tactile Compression</span>
            </button>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Clay: 160ms squircle compression</span>
          </div>

          {/* Brutalism 0ms state flip */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
            <button
              type="button"
              onClick={() => handlePress('brutal')}
              className="brutal-btn-primary"
              style={{
                backgroundColor: pressedStyle === 'brutal' ? '#ffffff' : '#000000',
                color: pressedStyle === 'brutal' ? '#000000' : '#ffffff',
              }}
            >
              <span>Immediate Inversion</span>
            </button>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Brutalism: 0ms stark flip</span>
          </div>
        </div>
      </div>

      {/* Core Rules */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
        <div className="neo-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={22} color="#ec4899" />
            <span>CSS Native Transitions First</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Simple hover states, button presses, and modal reveals use lightweight, compositor-friendly CSS transitions (<code>opacity</code> and <code>transform</code>).
          </p>
          <p>
            Taste Engine strictly forbids animating heavy properties like <code>box-shadow</code> or <code>backdrop-filter</code> in continuous loops, protecting battery life and frame rates.
          </p>
        </div>

        <div className="neo-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={22} color="#3b82f6" />
            <span>Optional Anime.js v4 Recipe</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            When a user explicitly asks for coordinated micro-interactions (e.g. synchronized staggered cards or intricate SVG draw sequences), the agent consults <code>references/motion-engine.md</code>.
          </p>
          <p>
            In React environments, it mandates <code>createScope()</code> and cleanup functions inside <code>useEffect</code> to prevent memory leaks and detached DOM animations.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
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

