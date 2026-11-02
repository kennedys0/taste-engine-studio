import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';
import { usePageMetadata } from '../hooks/usePageMetadata';
import SpecimenFAQ from '../components/specimens/SpecimenFAQ';

export default function FaqPage() {
  usePageMetadata(
    'Frequently Asked Questions — Taste Engine',
    'Comprehensive answers to common questions about Taste Engine: runtime frameworks, style routing, SEO, motion, and installation.'
  );

  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#eab308' }}>
          Questions & Answers
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Honest answers about what Taste Engine is, what it isn't, and how it behaves across different AI coding environments.
        </p>
      </div>

      {/* Search Input */}
      <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }} />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter questions (e.g. SEO, framework, gradients, accounts)..."
          className="neo-input"
          style={{ paddingLeft: '48px', fontSize: '1.05rem' }}
          aria-label="Filter frequently asked questions"
        />
      </div>

      {/* Accordion Component */}
      <SpecimenFAQ styleId="neo-brutalism" items={filteredItems} />

      {filteredItems.length === 0 && (
        <div className="neo-card" style={{ textAlign: 'center', padding: '3rem', marginTop: '2rem' }}>
          <p style={{ fontWeight: '800', fontSize: '1.1rem' }}>No questions matched "{searchQuery}"</p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="neo-btn-secondary"
            style={{ marginTop: '1rem', padding: '8px 18px' }}
          >
            Clear filter query
          </button>
        </div>
      )}

      {/* Extra links */}
      <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/installation" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <span>Installation Guide</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/docs" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <span>Documentation Index</span>
        </Link>
      </div>
    </div>
  );
}
