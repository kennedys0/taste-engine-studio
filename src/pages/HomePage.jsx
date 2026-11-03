import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Sparkles,
  Shield,
  Layers,
  Compass,
  CheckCircle2,
  Cpu,
  Zap,
} from 'lucide-react';
import GithubIcon from '../components/icons/GithubIcon';
import { STYLES } from '../styles/registry';
import { useCopyCommand } from '../hooks/useCopyCommand';
import { usePageMetadata } from '../hooks/usePageMetadata';
import SpecimenHeroDemo from '../components/specimens/SpecimenHeroDemo';
import SpecimenFAQ from '../components/specimens/SpecimenFAQ';

export default function HomePage() {
  usePageMetadata(
    'Your Taste. Your Interface. No Default Aesthetic',
    'Taste Engine is an open-source Agent Skill that routes AI coding agents to 10 distinct, recognizable design languages with anti-slop quality gates.'
  );

  const { copy, copyStatus } = useCopyCommand();
  const installCommand = 'npx skills add kennedys0/taste-engine --skill taste-engine';

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* ====================================================================
          Hero Section — One visible screen composition (min-height: 100svh)
          ==================================================================== */}
      <section
        style={{
          minHeight: 'calc(100svh - var(--header-height))',
          display: 'flex',
          alignItems: 'center',
          padding: '3rem 0',
          borderBottom: 'var(--site-border)',
          backgroundColor: 'var(--site-bg)',
          position: 'relative',
        }}
      >
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Mission & CTAs */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                backgroundColor: 'var(--site-card)',
                border: 'var(--site-border)',
                borderRadius: '9999px',
                boxShadow: 'var(--site-shadow-sm)',
                fontWeight: '800',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={16} color="#eab308" />
              <span>OPEN-SOURCE AGENT SKILL</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                fontWeight: '800',
                lineHeight: '1.08',
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Your taste.{' '}
              <span
                style={{
                  backgroundColor: 'var(--site-accent)',
                  color: '#121212',
                  padding: '2px 8px',
                  border: 'var(--site-border)',
                  borderRadius: 'var(--site-radius)',
                  display: 'inline-block',
                }}
              >
                Your interface.
              </span>{' '}
              No default aesthetic.
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.6',
                opacity: 0.9,
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              Taste Engine asks for a visual direction, loads the matching style pack, and checks the finished interface for useful design—not generic AI decoration.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '2.5rem',
              }}
            >
              <Link
                to="/styles"
                className="neo-btn-primary"
                style={{ padding: '14px 32px', fontSize: '1.05rem' }}
              >
                <span>Explore 10 Styles</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/installation"
                className="neo-btn-secondary"
                style={{ padding: '14px 28px', fontSize: '1.05rem' }}
              >
                <Terminal size={18} />
                <span>Install Taste Engine</span>
              </Link>
            </div>

            {/* Verified CLI snippet with auto-copy and icon-only copy button */}
            <div
              onClick={() => copy(installCommand)}
              title={copyStatus === 'success' ? 'Copied to clipboard!' : 'Click to copy command'}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  copy(installCommand);
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 10px 8px 14px',
                backgroundColor: 'var(--site-card)',
                border: 'var(--site-border)',
                borderRadius: 'var(--site-radius)',
                boxShadow: 'var(--site-shadow-sm)',
                maxWidth: '100%',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'transform 120ms ease-out, box-shadow 120ms ease-out',
              }}
            >
              <Terminal size={16} style={{ flexShrink: 0, opacity: 0.7 }} />
              <code
                className="no-scrollbar"
                style={{
                  fontFamily: 'var(--site-font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  overflowX: 'auto',
                  whiteSpace: 'nowrap',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  userSelect: 'text',
                }}
              >
                {installCommand}
              </code>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  copy(installCommand);
                }}
                aria-label={copyStatus === 'success' ? 'Copied to clipboard' : 'Copy install command'}
                title={copyStatus === 'success' ? 'Copied!' : 'Copy command'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  border: '1.5px solid var(--site-ink)',
                  borderRadius: '4px',
                  backgroundColor: copyStatus === 'success' ? '#10b981' : 'var(--site-accent)',
                  color: copyStatus === 'success' ? '#ffffff' : '#121212',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'background-color 140ms ease-out',
                }}
              >
                {copyStatus === 'success' ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Specimen */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecimenHeroDemo />
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 2: The Core Problem vs The Taste Engine Solution
          ==================================================================== */}
      <section style={{ padding: '5rem 0', borderBottom: 'var(--site-border)', backgroundColor: 'var(--site-card)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#3b82f6',
              }}
            >
              Why Taste Engine Exists
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.2' }}>
              AI coding agents default to the exact same look.
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1rem' }}>
              When asked to "build a dashboard" or "make a landing page," AI models converge on generic blue-tinted SaaS cards, soft drop shadows, and filler marketing copy. Design preference should belong to the person building the product.
            </p>
          </div>

          {/* The 3-Step Decision Flow */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
            }}
          >
            <div className="neo-card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--site-accent)',
                  border: 'var(--site-border)',
                  borderRadius: 'var(--site-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  marginBottom: '1.25rem',
                  boxShadow: 'var(--site-shadow-sm)',
                  color: '#121212',
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                Ask Before Coding
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: '1.55', opacity: 0.85 }}>
                If you request a new interface without specifying a design language, Taste Engine commands the agent to <strong>pause and ask ONE question</strong> offering contrasting choices. It never secretly decides for you.
              </p>
            </div>

            <div className="neo-card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--site-accent-cyan)',
                  border: 'var(--site-border)',
                  borderRadius: 'var(--site-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  marginBottom: '1.25rem',
                  boxShadow: 'var(--site-shadow-sm)',
                  color: '#121212',
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                Load Canonical Rules
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: '1.55', opacity: 0.85 }}>
                When you specify a style (e.g. "Build a Glassmorphism landing page"), the agent loads that exact Markdown style pack from disk. It implements genuine material physics—not superficial recoloring.
              </p>
            </div>

            <div className="neo-card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--site-accent-secondary)',
                  border: 'var(--site-border)',
                  borderRadius: 'var(--site-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '1.25rem',
                  marginBottom: '1.25rem',
                  boxShadow: 'var(--site-shadow-sm)',
                  color: '#ffffff',
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                Preserve What Works
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: '1.55', opacity: 0.85 }}>
                When making incremental edits to an existing codebase with established brand tokens, Taste Engine enforces restraint: no unsolicited redesigns and no repetitive menus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 3: The Ten Registered Styles
          ==================================================================== */}
      <section style={{ padding: '5rem 0', borderBottom: 'var(--site-border)', backgroundColor: 'var(--site-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8b5cf6' }}>
                Canonical Registry
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', marginTop: '0.4rem' }}>
                Ten Distinct Design Languages
              </h2>
            </div>
            <Link to="/styles" className="neo-btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              <span>Compare All 10 in Gallery</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {STYLES.map((styleItem) => (
              <Link
                key={styleItem.id}
                to={`/${styleItem.id}`}
                className="neo-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 140ms ease-out, box-shadow 140ms ease-out',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>
                      {styleItem.label}
                    </h3>
                    <ArrowRight size={18} />
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: 0.85, marginBottom: '1.25rem' }}>
                    {styleItem.tagline}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(125, 125, 125, 0.2)', paddingTop: '0.75rem', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', opacity: 0.75 }}>
                  {styleItem.path}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 4: The Anti-Slop Constitution
          ==================================================================== */}
      <section style={{ padding: '5rem 0', borderBottom: 'var(--site-border)', backgroundColor: 'var(--site-card)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>
                Three-Tier Quality Review
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.2' }}>
                Anti-Slop is a quality bar, not a minimalism preset.
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1rem' }}>
                Taste Engine does not ban gradients, shadows, or expressive visuals. Instead, it audits code across three rigorous tiers:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ padding: '4px 8px', height: 'fit-content', borderRadius: '4px', backgroundColor: '#ef4444', color: '#fff', fontWeight: '800', fontSize: '0.75rem' }}>
                    FLOOR
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800' }}>Non-waivable Integrity</h4>
                    <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>
                      Working buttons, accessible contrast, focus management, truthful data, responsive layout without clipping.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ padding: '4px 8px', height: 'fit-content', borderRadius: '4px', backgroundColor: '#f59e0b', color: '#fff', fontWeight: '800', fontSize: '0.75rem' }}>
                    REFLEX
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800' }}>Weak Habit Interception</h4>
                    <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>
                      Rejects nested card-in-card clutter, fake metrics, unlabelled icons, and gratuitous looped particle animations.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ padding: '4px 8px', height: 'fit-content', borderRadius: '4px', backgroundColor: '#10b981', color: '#fff', fontWeight: '800', fontSize: '0.75rem' }}>
                    FINISH
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '800' }}>Nonblocking Craft</h4>
                    <p style={{ fontSize: '0.875rem', opacity: 0.85, marginTop: '2px' }}>
                      Optical spacing, tabular number alignment, reduced-motion fallbacks, and polished micro-interactions.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/anti-slop" className="neo-btn-secondary" style={{ padding: '10px 22px' }}>
                  <span>Read Full Anti-Slop Guide</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div
              className="neo-card"
              style={{
                backgroundColor: 'var(--site-bg)',
                padding: '2rem',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={20} color="#10b981" />
                <span>The Glassmorphism Exception</span>
              </h3>
              <p style={{ fontSize: '0.925rem', lineHeight: '1.6', opacity: 0.9, marginBottom: '1.25rem' }}>
                Standard anti-slop rules warn against gratuitous background gradients. But for <strong>Glassmorphism</strong>, purposeful ambient gradients and atmospheric light fields are <strong>explicitly allowed</strong> because translucent frosting cannot be seen without light filtering behind the pane.
              </p>
              <div
                style={{
                  padding: '12px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '1.5px solid #3b82f6',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                }}
              >
                "Removing a useful glass backdrop to satisfy a generic gradient heuristic is a design regression." — Taste Engine v0.10.3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 5: Real Project FAQ
          ==================================================================== */}
      <section style={{ padding: '5rem 0', borderBottom: 'var(--site-border)', backgroundColor: 'var(--site-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#eab308' }}>
                Got Questions?
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', marginTop: '0.4rem' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <SpecimenFAQ styleId="neo-brutalism" />

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <Link to="/faq" className="neo-btn-secondary" style={{ padding: '10px 24px' }}>
                <span>View All Questions & Answers</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Section 6: Final Installation Banner
          ==================================================================== */}
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--site-accent)' }}>
        <div className="container" style={{ textAlign: 'center', color: '#121212' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Ready to give your AI agent good taste?
          </h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 2.5rem', fontWeight: '600' }}>
            Install Taste Engine into Claude Code, Codex, or Google Antigravity in seconds. Free and open source under the MIT License.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link
              to="/installation"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                backgroundColor: '#121212',
                color: '#ffffff',
                border: '2.5px solid #121212',
                borderRadius: 'var(--site-radius)',
                fontWeight: '800',
                fontSize: '1.1rem',
                boxShadow: '4px 4px 0 #ffffff',
                textDecoration: 'none',
              }}
            >
              <Terminal size={20} />
              <span>Get Install Command</span>
            </Link>

            <a
              href="https://github.com/kennedys0/taste-engine"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: '#ffffff',
                color: '#121212',
                border: '2.5px solid #121212',
                borderRadius: 'var(--site-radius)',
                fontWeight: '800',
                fontSize: '1.1rem',
                boxShadow: '4px 4px 0 #121212',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={20} />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
