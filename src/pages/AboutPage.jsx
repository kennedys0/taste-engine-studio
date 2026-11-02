import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Users, Heart, Terminal, Sparkles } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function AboutPage() {
  usePageMetadata(
    'About Taste Engine — Origins & Mission',
    'Why Taste Engine exists: giving developers and designers control over AI visual outputs without mandatory default aesthetics.'
  );

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-cyan)' }}>
          Origins & Mission
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Design preference should belong to the person building the product.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Taste Engine was created out of a simple observation: AI coding agents build functional software with remarkable speed, but almost always default to the exact same generic, purple-accented, rounded-card aesthetic.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
        <div className="neo-card">
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Compass size={22} color="#3b82f6" />
            <span>The Problem: The Convergence of AI UI</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Left to their own defaults, modern Large Language Models converge on the statistical mean of web design. They generate identical components: 12px rounded cards, faint gray drop shadows, indigo buttons, and decorative badges that provide zero user utility.
          </p>
          <p>
            Whether you are building an architectural magazine, a hacker developer tool, or a tactile audio synthesizer, the default output looks like a cookie-cutter B2B analytics dashboard.
          </p>
        </div>

        <div className="neo-card">
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={22} color="#eab308" />
            <span>The Solution: Separation of Style from Anatomy</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Taste Engine separates <strong>what the interface does</strong> (user flows, forms, accessibility, semantic hierarchy) from <strong>the visual material it uses</strong> (tactile clay, frosted glass, raw brutalist scaffolding, or dense enterprise data tables).
          </p>
          <p>
            Instead of hardcoding a single opinionated look, Taste Engine is an open-source instruction skill that gives the AI agent a library of ten canonical design systems and teaches it when to ask, which pack to load, and how to verify the material against real quality gates.
          </p>
        </div>

        <div className="neo-card">
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={22} color="#10b981" />
            <span>Honest Limitations</span>
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            We believe in honest software engineering without inflated marketing hype:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <strong>Host-dependent invocation:</strong> While compatible agents (Claude Code, Codex, Antigravity) discover the skill automatically, no instruction file can create an operating-system-level hook.
            </li>
            <li>
              <strong>Human judgment required:</strong> Taste Engine guides the agent's initial draft and audits code quality, but human designers and engineers remain the final arbiters of visual harmony.
            </li>
            <li>
              <strong>Not a code generator service:</strong> Taste Engine is an instruction package for existing AI coding tools—not a standalone cloud AI service or website builder.
            </li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '3.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/how-it-works" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <span>See How It Works</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/styles" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <span>Explore 10 Styles</span>
        </Link>
      </div>
    </div>
  );
}

