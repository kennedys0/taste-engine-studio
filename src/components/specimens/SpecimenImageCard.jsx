import React, { useState } from 'react';
import { ExternalLink, Tag, Heart, Eye } from 'lucide-react';
import bannerImg from '../../assets/banner.png';

export default function SpecimenImageCard({
  styleId = 'neo-brutalism',
  title = 'Autonomous Agent Design Systems',
  category = 'Engineering',
  description = 'Real-time style routing and anti-slop verification applied across interactive web interfaces.',
  author = 'Taste Engine Research',
  date = 'Nov 2026',
  imageSrc,
  onAction = () => {},
}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  // Render banner visual
  const renderVisual = () => {
    if (styleId === 'retro-terminal') {
      return (
        <div
          style={{
            height: '150px',
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
            flexShrink: 0,
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
            height: '150px',
            backgroundColor: '#000000',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            fontFamily: 'var(--brutal-font-heading)',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: '1.25rem', letterSpacing: '0.1em' }}>PLATE // 01</span>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--brutal-font-mono)', color: '#ff0000' }}>
            RAW STRUCTURAL ARTIFACT
          </span>
        </div>
      );
    }

    // Default to the provided banner asset
    const activeBanner = imageSrc || bannerImg;
    return (
      <div
        style={{
          height: '150px',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#121212',
          flexShrink: 0,
        }}
      >
        <img
          src={activeBanner}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    );
  };

  // Render style-specific card wrapper and action
  if (styleId === 'glassmorphism') {
    return (
      <div
        className="glass-pane"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {renderVisual()}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '28px',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(37, 99, 235, 0.12)',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--glass-accent)',
                  lineHeight: 1,
                }}
              >
                {category}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--glass-muted)' }}>{date}</span>
            </div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: '700',
                marginBottom: '0.4rem',
                color: 'var(--glass-ink)',
                lineHeight: '1.3',
                minHeight: '3rem',
              }}
            >
              {title}
            </h4>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: '1.45',
                color: 'var(--glass-muted)',
                marginBottom: '0.75rem',
                minHeight: '3.75rem',
              }}
            >
              {description}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--glass-edge)',
              paddingTop: '0.65rem',
              height: '48px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--glass-muted)' }}>By {author}</span>
            <button
              type="button"
              onClick={handleLike}
              className="glass-btn-secondary"
              style={{ height: '34px', padding: '0 14px', fontSize: '0.85rem' }}
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
      <div
        className="clay-card"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {renderVisual()}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '28px',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(129, 63, 252, 0.1)',
                  border: '1px solid rgba(129, 63, 252, 0.25)',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  color: 'var(--clay-primary)',
                  lineHeight: 1,
                }}
              >
                {category}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--clay-muted)' }}>{date}</span>
            </div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: '800',
                marginBottom: '0.4rem',
                lineHeight: '1.3',
                color: 'var(--clay-text-dark)',
                minHeight: '3rem',
              }}
            >
              {title}
            </h4>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: '1.45',
                color: 'var(--clay-muted)',
                marginBottom: '0.75rem',
                minHeight: '3.75rem',
              }}
            >
              {description}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(110, 95, 165, 0.2)',
              paddingTop: '0.65rem',
              height: '48px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>By {author}</span>
            <button
              type="button"
              onClick={handleLike}
              className="clay-btn-primary"
              style={{ height: '34px', padding: '0 14px', fontSize: '0.85rem' }}
            >
              <Heart size={15} fill={liked ? '#ffffff' : 'none'} />
              <span>{likeCount}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'brutalism') {
    return (
      <div
        className="brutal-card"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {renderVisual()}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderTop: 'var(--brutal-border)',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '28px',
                marginBottom: '0.5rem',
              }}
            >
              <span className="brutal-tag">[{category}]</span>
              <span style={{ fontFamily: 'var(--brutal-font-mono)', fontSize: '0.8rem' }}>{date}</span>
            </div>
            <h4
              style={{
                fontFamily: 'var(--brutal-font-heading)',
                fontSize: '1.15rem',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
                minHeight: '3rem',
              }}
            >
              {title}
            </h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.45', marginBottom: '0.75rem', minHeight: '3.75rem' }}>
              {description}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: 'var(--brutal-border)',
              paddingTop: '0.65rem',
              height: '48px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontFamily: 'var(--brutal-font-mono)', fontSize: '0.8rem' }}>BY: {author}</span>
            <button
              type="button"
              onClick={handleLike}
              className="brutal-btn-primary"
              style={{ height: '34px', padding: '0 14px', fontSize: '0.8rem' }}
            >
              ACTIVATE [{likeCount}]
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'retro-terminal') {
    return (
      <div
        className="term-window"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <div className="term-header" style={{ height: '32px', flexShrink: 0 }}>
          <span>ITEM_ID: 0x4B2</span>
          <span>TAG: {category}</span>
        </div>
        {renderVisual()}
        <div
          style={{
            padding: '1.25rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: '700',
                marginBottom: '0.4rem',
                color: 'var(--term-amber)',
                minHeight: '2.5rem',
              }}
            >
              &gt; {title}
            </h4>
            <p
              style={{
                fontSize: '0.8rem',
                lineHeight: '1.45',
                color: 'var(--term-ink)',
                opacity: 0.9,
                marginBottom: '0.75rem',
                minHeight: '3.5rem',
              }}
            >
              {description}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: 'var(--term-border)',
              paddingTop: '0.65rem',
              height: '48px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontSize: '0.75rem' }}>AUTHOR: {author}</span>
            <button
              type="button"
              onClick={handleLike}
              className="term-btn-primary"
              style={{ height: '30px', padding: '0 10px', fontSize: '0.75rem' }}
            >
              [ ACK: {likeCount} ]
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'skeuomorphism') {
    return (
      <div
        className="skeuo-panel"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <div className="skeuo-well" style={{ padding: '0', overflow: 'hidden', marginBottom: '0.75rem' }}>
            {renderVisual()}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '24px',
              marginBottom: '0.35rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="skeuo-led" />
              <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {category}
              </span>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--skeuo-muted)' }}>{date}</span>
          </div>
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: '700',
              marginBottom: '0.35rem',
              color: 'var(--skeuo-ink)',
              minHeight: '2.5rem',
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: '0.825rem',
              lineHeight: '1.4',
              color: 'var(--skeuo-muted)',
              marginBottom: '0.5rem',
              minHeight: '3.2rem',
            }}
          >
            {description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(0,0,0,0.4)',
            paddingTop: '0.5rem',
            height: '46px',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--skeuo-muted)' }}>{author}</span>
          <button
            type="button"
            onClick={handleLike}
            className="skeuo-btn-primary"
            style={{ height: '34px', padding: '0 14px', fontSize: '0.85rem' }}
          >
            <span>TEST DISPATCH</span>
            <span style={{ opacity: 0.8 }}>({likeCount})</span>
          </button>
        </div>
      </div>
    );
  }

  if (styleId === 'swiss-editorial') {
    return (
      <div
        className="swiss-card"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: 'var(--swiss-rule)',
          borderRadius: '0px',
          boxSizing: 'border-box',
        }}
      >
        {renderVisual()}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '28px',
                marginBottom: '0.5rem',
              }}
            >
              <span
                className="swiss-index"
                style={{
                  margin: 0,
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  lineHeight: 1,
                }}
              >
                01 / {category}
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--swiss-muted)' }}>{date}</span>
            </div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginBottom: '0.4rem',
                lineHeight: '1.3',
                minHeight: '3rem',
              }}
            >
              {title}
            </h4>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: '1.45',
                color: 'var(--swiss-muted)',
                marginBottom: '0.75rem',
                minHeight: '3.75rem',
              }}
            >
              {description}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: 'var(--swiss-rule)',
              paddingTop: '0.65rem',
              height: '48px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>By {author}</span>
            <button
              type="button"
              onClick={handleLike}
              className="swiss-btn-primary"
              style={{ height: '34px', padding: '0 14px', fontSize: '0.85rem' }}
            >
              <Heart size={15} fill={liked ? '#e3000f' : 'none'} color={liked ? '#e3000f' : 'currentColor'} />
              <span>{likeCount}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'bento') {
    return (
      <div
        className="bento-tile"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        {renderVisual()}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '28px',
                marginBottom: '0.5rem',
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--bento-accent)' }}>{category}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--bento-muted)' }}>{date}</span>
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.4rem', minHeight: '3rem' }}>
              {title}
            </h4>
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: '1.45',
                color: 'var(--bento-muted)',
                marginBottom: '0.75rem',
                minHeight: '3.75rem',
              }}
            >
              {description}
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: 'var(--bento-border)',
              paddingTop: '0.65rem',
              height: '48px',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ fontSize: '0.8rem', color: 'var(--bento-muted)' }}>{author}</span>
            <button
              type="button"
              onClick={handleLike}
              className="bento-btn-primary"
              style={{ height: '34px', padding: '0 14px', fontSize: '0.85rem' }}
            >
              EXPLORE TILE ({likeCount})
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (styleId === 'enterprise') {
    return (
      <div
        className="ent-table-container"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '28px',
              marginBottom: '0.5rem',
            }}
          >
            <span className="ent-status-pill ent-status-info">{category}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--ent-muted)' }}>{date}</span>
          </div>
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: '600',
              marginBottom: '0.4rem',
              color: 'var(--ent-ink)',
              minHeight: '2.8rem',
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: '0.85rem',
              lineHeight: '1.45',
              color: 'var(--ent-muted)',
              marginBottom: '0.75rem',
              minHeight: '3.5rem',
            }}
          >
            {description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: 'var(--ent-border)',
            paddingTop: '0.65rem',
            height: '48px',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--ent-muted)' }}>Assigned: {author}</span>
          <button
            type="button"
            onClick={handleLike}
            className="ent-btn-primary"
            style={{ height: '32px', padding: '0 12px', fontSize: '0.8rem' }}
          >
            View Record ({likeCount})
          </button>
        </div>
      </div>
    );
  }

  if (styleId === 'minimalism') {
    return (
      <div
        className="mini-card"
        style={{
          maxWidth: '380px',
          width: '100%',
          height: '430px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '28px',
              marginBottom: '0.5rem',
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--mini-accent)' }}>{category}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--mini-muted)' }}>{date}</span>
          </div>
          <h4
            style={{
              fontSize: '1.15rem',
              fontWeight: '600',
              letterSpacing: '-0.01em',
              marginBottom: '0.5rem',
              minHeight: '3rem',
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: '0.85rem',
              lineHeight: '1.5',
              color: 'var(--mini-muted)',
              marginBottom: '0.75rem',
              minHeight: '3.75rem',
            }}
          >
            {description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: 'var(--mini-border)',
            paddingTop: '0.65rem',
            height: '48px',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--mini-muted)' }}>{author}</span>
          <button
            type="button"
            onClick={handleLike}
            className="mini-btn-secondary"
            style={{ height: '34px', padding: '0 14px', fontSize: '0.85rem' }}
          >
            Details ({likeCount})
          </button>
        </div>
      </div>
    );
  }

  // Default: Neo-brutalism
  return (
    <div
      className="neo-card"
      style={{
        maxWidth: '380px',
        width: '100%',
        height: '430px',
        padding: '0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {renderVisual()}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '28px',
              marginBottom: '0.5rem',
            }}
          >
            <span className="neo-badge" style={{ padding: '3px 8px', fontSize: '0.75rem', lineHeight: 1 }}>
              {category}
            </span>
            <span style={{ fontSize: '0.8rem', fontWeight: '700' }}>{date}</span>
          </div>
          <h4
            style={{
              fontSize: '1.15rem',
              fontWeight: '800',
              marginBottom: '0.4rem',
              lineHeight: '1.3',
              minHeight: '3rem',
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: '0.85rem',
              lineHeight: '1.45',
              marginBottom: '0.75rem',
              minHeight: '3.75rem',
            }}
          >
            {description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: 'var(--neo-border)',
            paddingTop: '0.65rem',
            height: '48px',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>By {author}</span>
          <button
            type="button"
            onClick={handleLike}
            className="neo-btn-primary"
            style={{ height: '34px', padding: '0 14px', fontSize: '0.85rem' }}
          >
            <Heart size={15} fill={liked ? '#121212' : 'none'} />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
