import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Terminal, RefreshCw, ShieldCheck } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function HowItWorksPage() {
  usePageMetadata(
    'How It Works — The Decision Flow',
    'The 3-step decision flow of Taste Engine: ask when needed, load when specified, preserve what already works.'
  );

  const [activeScenario, setActiveScenario] = useState('no-style');

  const scenarios = [
    {
      id: 'no-style',
      label: '1. No Style Specified',
      userPrompt: 'Build me a developer portfolio website.',
      agentAction: 'Preflight Interception',
      agentResponse: `Before I start designing, which visual style would you like?
1. Claymorphism — soft, tactile, molded volumetric depth
2. Glassmorphism — translucent, layered, ambient light
3. Brutalism — stark monochrome, raw grid, 0ms inversion
4. Neo-brutalism — bold color blocking, hard offset shadows
5. Minimalism — mathematical whitespace, quiet clarity
6. Swiss / Editorial — grid-precise typographic hierarchy
Or type custom, or provide visual references.`,
      explanation: 'When user intent lacks an explicit aesthetic direction, the agent stops and asks ONE concise question offering contrasting choices. It does not begin coding prematurely.',
    },
    {
      id: 'named-style',
      label: '2. Explicit Style Named',
      userPrompt: 'Build me a glassmorphism portfolio website.',
      agentAction: 'Direct Rule Loading',
      agentResponse: `Loading Taste Engine style pack: styles/glassmorphism.md
Aesthetic confirmed: Glassmorphism.
Enforcing Glass Material Fidelity Gate:
- Composing first viewport with visible frosted pane (backdrop-filter: blur(18px) saturate(145%)).
- Applying differentiated ambient radial gradient backdrop behind pane.
- Providing 1px specular top highlight and accessible text contrast.
Proceeding directly to implementation without redundant questions.`,
      explanation: 'The agent recognizes the registered style ID (or common alias/typo), reads the markdown pack, and proceeds immediately.',
    },
    {
      id: 'existing-project',
      label: '3. Existing Codebase',
      userPrompt: 'Fix the mobile navigation drawer alignment on my site.',
      agentAction: 'Style Preservation',
      agentResponse: `Inspecting existing project design tokens and layout rules.
Preserving current brand palette, radius, and elevation tokens.
Fixing mobile drawer CSS transform and focus trap without altering the approved design system.`,
      explanation: 'For incremental tasks or established projects, Taste Engine preserves existing design tokens and does NOT interrupt with a new style selector.',
    },
  ];

  const current = scenarios.find((s) => s.id === activeScenario);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#3b82f6' }}>
          The Routing Contract
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Ask when needed. Load when specified. Preserve what already works.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Taste Engine operates as a stateful router inside your AI coding assistant. Here is how it behaves across real-world workflows:
        </p>
      </div>

      {/* Interactive Scenario Stepper */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div
          role="tablist"
          aria-label="Decision scenarios"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '1.5rem',
          }}
        >
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={activeScenario === s.id}
              onClick={() => setActiveScenario(s.id)}
              className={activeScenario === s.id ? 'neo-btn-primary' : 'neo-btn-secondary'}
              style={{ padding: '10px 18px', fontSize: '0.9rem' }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Scenario Display Card */}
        <div className="neo-card" style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#6366f1' }}>
              User Prompt
            </span>
            <div
              style={{
                marginTop: '0.4rem',
                padding: '12px 16px',
                backgroundColor: 'var(--site-bg)',
                border: 'var(--site-border)',
                borderRadius: 'var(--site-radius)',
                fontWeight: '700',
                fontSize: '1.05rem',
              }}
            >
              "{current.userPrompt}"
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#10b981' }}>
              Agent Behavior: {current.agentAction}
            </span>
            <pre
              style={{
                marginTop: '0.4rem',
                padding: '14px 16px',
                backgroundColor: '#0c0d0e',
                color: '#ffb000',
                border: '1px solid rgba(255, 176, 0, 0.3)',
                borderRadius: '6px',
                fontFamily: 'var(--site-font-mono)',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                overflowX: 'auto',
              }}
            >
              {current.agentResponse}
            </pre>
          </div>

          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid #3b82f6',
              borderRadius: '6px',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              fontWeight: '600',
            }}
          >
            {current.explanation}
          </div>
        </div>
      </div>

      {/* Quality Pipeline */}
      <div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>
          The Post-Selection Quality Pipeline
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div className="neo-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              1. Extract Design DNA
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: 0.85 }}>
              Derives font families, type scale, surface materials, border physics, shadows, and spacing grid directly from the loaded pack.
            </p>
          </div>

          <div className="neo-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              2. Anti-Slop Audit
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: 0.85 }}>
              Audits the generated code against FLOOR (usability/truth), REFLEX (weak habit elimination), and FINISH (visual craft) gates.
            </p>
          </div>

          <div className="neo-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              3. Conditional Public SEO
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: 0.85 }}>
              Applies technical metadata and semantic structure to public marketing pages while leaving private dashboards unindexed.
            </p>
          </div>

          <div className="neo-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>
              4. Style-Aligned Motion
            </h3>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: 0.85 }}>
              Uses native CSS transitions first, with optional Anime.js v4 for coordinated interactions, honoring prefers-reduced-motion.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/styles" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <span>Explore 10 Styles</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/features" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <span>View Feature Inventory</span>
        </Link>
      </div>
    </div>
  );
}
