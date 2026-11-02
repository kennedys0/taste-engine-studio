import React, { useState } from 'react';
import { ExternalLink, Tag, Heart, Eye } from 'lucide-react';

export default function SpecimenImageCard({
  styleId = 'neo-brutalism',
  title = 'Autonomous Agent Design Systems',
  category = 'Engineering',
  description = 'Real-time style routing and anti-slop verification applied across interactive web interfaces.',
  author = 'Taste Engine Research',
  date = 'Nov 2026',
  onAction = () => {},
}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  // Render SVG artwork based on style
  const renderVisual = () => {
    if (styleId === 'retro-terminal') {
      return (
        <div
          style={{
            height: '140px',
            backgroundColor: '#050708',
            borderBottom: 'var(--term-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            fontFamily: 'var(--term-font)',
            fontSize: '0.8rem',
            color: 'var(--term-amber)',
          }}
        >
          <pre style={{ margin: 0, lineHeight: 1.2 }}>
{`+-----------------------+
| [SYS_RENDER: ACTIVE]  |
| SCANLINES: ENABLED    |
| PHOSPHOR: 589nm       |
+-----------------------+`}
          </pre>
        </div>
      );
    }

    if (styleId === 'brutalism') {
      return (
        <div
          style={{
            height: '140px',
            backgroundColor: '#000000',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            fontFamily: 'var(--brutal-font-heading)',
          }}
        >
          <span style={{ fontSize: '1.25rem', letterSpacing: '0.1em' }}>PLATE // 01</span>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--brutal-font-mono)', color: '#ff0000' }}>
            RAW STRUCTURAL ARTIFACT
          </span>
        </div>
      );
    }

    // Default SVG vector illustration
    return (
      <div
        style={{
          height: '150px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: styleId === 'glassmorphism'
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.45) 0%, rgba(236, 72, 153, 0.45) 100%)'
            : styleId === 'claymorphism'
            ? 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)'
            : styleId === 'skeuomorphism'
            ? 'linear-gradient(180deg, #1f242c 0%, #15191f 100%)'
            : 'linear-gradient(135deg, #fef08a 0%, #fed7aa 100%)',
        }}
      >
        <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Stylized vector artwork">
          <circle cx="55" cy="55" r="35" fill="currentColor" fillOpacity="0.2" />
          <rect x="70" y="25" width="80" height="60" rx="8" fill="currentColor" fillOpacity="0.3" />
          <path d="M120 75 L180 35 L195 85 Z" fill="currentColor" fillOpacity="0.25" />
          <line x1="20" y1="95" x2="200" y2="95" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
    );
  };

  // Render style-specific card wrapper and action
  if (styleId === 'glassmorphism') {
    return (
      <div className="glass-pane" style={{ maxWidth: '380px', width: '100%', padding: '0', overflow: 'hidden' }}>
        {renderVisual()}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--glass-accent)' }}>
              {category}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--glass-muted)' }}>{date}</span>
          </div>
          <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--glass-ink)' }}>
            {title}
          </h4>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--glass-muted)', marginBottom: '1.25rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--glass-edge)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '500', color: 'var(--glass-muted)' }}>By {author}</span>
            <button
              type="button"
              onClick={handleLike}
              className="glass-btn-secondary"
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              <Heart size={15} fill={liked ? '#ef4444' : 'none'} color={liked ? '#ef4444' : 'currentColor'} />
              <span>{likeCount}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'claymorphism') {
    return (
      <div className="clay-card" style={{ maxWidth: '380px', width: '100%', padding: '0', overflow: 'hidden' }}>
        {renderVisual()}
        <div style={{ padding: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--clay-primary)' }}>
              {category}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--clay-muted)' }}>{date}</span>
          </div>
          <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--clay-text-dark)' }}>
            {title}
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--clay-muted)', marginBottom: '1.5rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>By {author}</span>
            <button type="button" onClick={handleLike} className="clay-btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              <Heart size={16} fill={liked ? '#ffffff' : 'none'} />
              <span>{likeCount}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'brutalism') {
    return (
      <div className="brutal-card" style={{ maxWidth: '380px', width: '100%', padding: '0' }}>
        {renderVisual()}
        <div style={{ padding: '1.5rem', borderTop: 'var(--brutal-border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span className="brutal-tag">[{category}]</span>
            <span style={{ fontFamily: 'var(--brutal-font-mono)', fontSize: '0.8rem' }}>{date}</span>
          </div>
          <h4 style={{ fontFamily: 'var(--brutal-font-heading)', fontSize: '1.15rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {title}
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--brutal-border)', paddingTop: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--brutal-font-mono)', fontSize: '0.8rem' }}>BY: {author}</span>
            <button type="button" onClick={handleLike} className="brutal-btn-primary" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
              ACTIVATE [{likeCount}]
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'retro-terminal') {
    return (
      <div className="term-window" style={{ maxWidth: '380px', width: '100%' }}>
        <div className="term-header">
          <span>ITEM_ID: 0x4B2</span>
          <span>TAG: {category}</span>
        </div>
        {renderVisual()}
        <div style={{ padding: '1.25rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--term-amber)' }}>
            &gt; {title}
          </h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--term-ink)', opacity: 0.9, marginBottom: '1rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--term-border)', paddingTop: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem' }}>AUTHOR: {author}</span>
            <button type="button" onClick={handleLike} className="term-btn-primary" style={{ padding: '4px 10px', fontSize: '0.75rem' }}>
              [ ACK: {likeCount} ]
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'skeuomorphism') {
    return (
      <div className="skeuo-panel" style={{ maxWidth: '380px', width: '100%', padding: '1.5rem' }}>
        <div className="skeuo-well" style={{ padding: '0', overflow: 'hidden', marginBottom: '1rem' }}>
          {renderVisual()}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="skeuo-led" />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {category}
            </span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--skeuo-muted)' }}>{date}</span>
        </div>
        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--skeuo-ink)' }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--skeuo-muted)', marginBottom: '1.25rem' }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.4)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--skeuo-muted)' }}>{author}</span>
          <button type="button" onClick={handleLike} className="skeuo-btn-primary" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
            <span>TEST DISPATCH</span>
            <span style={{ opacity: 0.8 }}>({likeCount})</span>
          </button>
        </div>
      </div>
    );
  }

  if (styleId === 'swiss-editorial') {
    return (
      <div className="swiss-card" style={{ maxWidth: '380px', width: '100%' }}>
        <span className="swiss-index">01 / {category}</span>
        {renderVisual()}
        <div style={{ marginTop: '1rem' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            {title}
          </h4>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.55', color: 'var(--swiss-muted)', marginBottom: '1.25rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--swiss-rule-subtle)', paddingTop: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>{author} • {date}</span>
            <button type="button" onClick={handleLike} className="swiss-btn-primary" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
              READ MORE ({likeCount})
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'bento') {
    return (
      <div className="bento-tile" style={{ maxWidth: '380px', width: '100%', padding: '0', overflow: 'hidden' }}>
        {renderVisual()}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--bento-accent)' }}>{category}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--bento-muted)' }}>{date}</span>
          </div>
          <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h4>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--bento-muted)', marginBottom: '1.25rem' }}>
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--bento-border)', paddingTop: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--bento-muted)' }}>{author}</span>
            <button type="button" onClick={handleLike} className="bento-btn-primary" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
              EXPLORE TILE ({likeCount})
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'enterprise') {
    return (
      <div className="ent-table-container" style={{ maxWidth: '380px', width: '100%', padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span className="ent-status-pill ent-status-info">{category}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--ent-muted)' }}>{date}</span>
        </div>
        <h4 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '0.4rem', color: 'var(--ent-ink)' }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.85rem', lineHeight: '1.45', color: 'var(--ent-muted)', marginBottom: '1rem' }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--ent-border)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--ent-muted)' }}>Assigned: {author}</span>
          <button type="button" onClick={handleLike} className="ent-btn-primary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
            View Record ({likeCount})
          </button>
        </div>
      </div>
    );
  }

  if (styleId === 'minimalism') {
    return (
      <div className="mini-card" style={{ maxWidth: '380px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--mini-accent)' }}>{category}</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--mini-muted)' }}>{date}</span>
        </div>
        <h4 style={{ fontSize: '1.15rem', fontWeight: '600', letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--mini-muted)', marginBottom: '1.25rem' }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--mini-border)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--mini-muted)' }}>{author}</span>
          <button type="button" onClick={handleLike} className="mini-btn-secondary" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
            Details ({likeCount})
          </button>
        </div>
      </div>
    );
  }

  // Default: Neo-brutalism
  return (
    <div className="neo-card" style={{ maxWidth: '380px', width: '100%', padding: '0', overflow: 'hidden' }}>
      {renderVisual()}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span className="neo-badge">{category}</span>
          <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{date}</span>
        </div>
        <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: '1.3' }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
          {description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'var(--neo-border)', paddingTop: '0.75rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>By {author}</span>
          <button type="button" onClick={handleLike} className="neo-btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <Heart size={16} fill={liked ? '#121212' : 'none'} />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
