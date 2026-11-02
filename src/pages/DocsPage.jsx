import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, FileText, ExternalLink } from 'lucide-react';
import { DOCS_SECTIONS } from '../data/navigation';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function DocsPage() {
  usePageMetadata(
    'Documentation Index — Taste Engine',
    'Task-based documentation index covering style routing, anti-slop quality gates, conditional SEO, motion, and installation.'
  );

  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = DOCS_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--site-accent-cyan)' }}>
          Reference Library
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          From style selection to finishing quality.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Explore guides, architecture specifications, and implementation references for the Taste Engine open-source skill.
        </p>
      </div>

      {/* Search Input */}
      <div style={{ position: 'relative', marginBottom: '3rem' }}>
        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }} />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search documentation topics..."
          className="neo-input"
          style={{ paddingLeft: '48px', fontSize: '1.05rem' }}
          aria-label="Search documentation topics"
        />
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {filteredSections.map((section) => (
          <div key={section.title}>
            <h2
              style={{
                fontSize: '1.35rem',
                fontWeight: '800',
                marginBottom: '1.25rem',
                borderBottom: '2px solid var(--site-accent)',
                paddingBottom: '6px',
                display: 'inline-block',
              }}
            >
              {section.title}
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {section.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="neo-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    color: 'inherit',
                    padding: '1.5rem',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.4rem' }}>
                      {item.label}
                    </h3>
                    <p style={{ fontSize: '0.875rem', lineHeight: '1.5', opacity: 0.85 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '1rem', fontWeight: '700', fontSize: '0.85rem' }}>
                    <span>Read guide</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {filteredSections.length === 0 && (
          <div className="neo-card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ fontWeight: '800', fontSize: '1.1rem' }}>No documentation topics matched "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="neo-btn-secondary"
              style={{ marginTop: '1rem', padding: '8px 18px' }}
            >
              Clear search query
            </button>
          </div>
        )}
      </div>

      {/* GitHub Repository Reference */}
      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: 'var(--site-border)' }}>
        <div className="neo-card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>Looking for source skill files?</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.85, marginTop: '2px' }}>
              Inspect the raw Markdown files, examples, and test definitions on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/kennedys0/taste-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          >
            <span>GitHub Repository</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
