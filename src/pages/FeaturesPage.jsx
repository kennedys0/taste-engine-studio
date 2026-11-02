import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Shield,
  Eye,
  Search,
  Activity,
  Code2,
  Terminal,
  ArrowRight,
  Maximize2,
  Sliders,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function FeaturesPage() {
  usePageMetadata(
    'Features & Capabilities — Taste Engine',
    'Comprehensive feature overview: style routing, 10 canonical packs, anti-slop quality gates, conditional SEO, and style-aligned motion.'
  );

  const features = [
    {
      title: 'Automated Style Routing',
      category: 'Core Engine',
      icon: Layers,
      color: '#3b82f6',
      desc: 'Automatic task-triggered skill discovery. Intercepts broad UI requests, prompts for visual preferences when missing, and loads matching markdown packs.',
    },
    {
      title: 'Ten Canonical Style Packs',
      category: 'Design Systems',
      icon: Sliders,
      color: '#8b5cf6',
      desc: 'Complete token specifications and material fidelity gates for Claymorphism, Glassmorphism, Brutalism, Neo-brutalism, Minimalism, Swiss Editorial, Bento, Skeuomorphism, Retro Terminal, and Enterprise.',
    },
    {
      title: 'Anti-Slop Constitution',
      category: 'Quality Assurance',
      icon: Shield,
      color: '#10b981',
      desc: 'Rigorous three-tier review (FLOOR, REFLEX, FINISH) preventing nested-card clutter, fake metrics, unlabelled icons, and dishonest demo states.',
    },
    {
      title: 'Full-Screen Hero Contract',
      category: 'Layout Geometry',
      icon: Maximize2,
      color: '#f59e0b',
      desc: 'Ensures public marketing heroes fill the first visible viewport (min-height: 100svh) cleanly with actual content and CTA, expanding gracefully on mobile viewports.',
    },
    {
      title: 'Conditional Public SEO',
      category: 'Engineering',
      icon: Search,
      color: '#06b6d4',
      desc: 'Applies semantic tags, Open Graph meta, and truthful crawlability advice to public sites while keeping private dashboards unindexed.',
    },
    {
      title: 'Style-Aligned Motion Engine',
      category: 'Micro-interactions',
      icon: Activity,
      color: '#ec4899',
      desc: 'CSS transitions by default; optional Anime.js v4 for coordinated interactions with lifecycle cleanup and prefers-reduced-motion compatibility.',
    },
    {
      title: 'Framework-Aware Integrations',
      category: 'Architecture',
      icon: Code2,
      color: '#6366f1',
      desc: 'Engineering best practices adapted for React performance, component composition, and web interface accessibility without forcing external libraries.',
    },
    {
      title: 'Universal Agent Compatibility',
      category: 'Tooling',
      icon: Terminal,
      color: '#eab308',
      desc: 'Compatible with Agent Skills CLI, Claude Code, Codex, and Google Antigravity. Project-scoped or global installation options.',
    },
  ];

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '1080px' }}>
      <div style={{ marginBottom: '3.5rem', maxWidth: '780px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981' }}>
          What Comes Inside
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Design guidance that travels with the work.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Taste Engine is not just a collection of color palettes. It is an end-to-end design engineering system bundled into an open-source Agent Skill.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
        }}
      >
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <div key={feat.title} className="neo-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      backgroundColor: feat.color,
                      color: '#ffffff',
                      border: 'var(--site-border)',
                      borderRadius: 'var(--site-radius)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--site-shadow-sm)',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.75 }}>
                      {feat.category}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{feat.title}</h3>
                  </div>
                </div>
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6', opacity: 0.85 }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/styles" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <span>Explore 10 Styles</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/showcase" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <span>Open UI Showcase</span>
        </Link>
      </div>
    </div>
  );
}

