import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Home, Compass } from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function NotFoundPage({ requestedPath = null, isUnknownStyle = false }) {
  const location = useLocation();
  const currentPath = requestedPath || location.pathname;

  usePageMetadata(
    'Page Not Found (404) — Taste Engine Studio',
    'The requested route could not be found. Return to Taste Engine Studio homepage or explore the 10 canonical styles.'
  );

  return (
    <div
      className="container"
      style={{
        padding: '5rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: '680px',
        flex: 1,
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          backgroundColor: '#ef4444',
          color: '#ffffff',
          border: 'var(--site-border)',
          borderRadius: 'var(--site-radius)',
          boxShadow: 'var(--site-shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <AlertCircle size={32} />
      </div>

      <span
        style={{
          fontSize: '0.9rem',
          fontWeight: '800',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#ef4444',
        }}
      >
        HTTP 404 Error
      </span>

      <h1
        style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: '800',
          marginTop: '0.5rem',
          marginBottom: '1rem',
          lineHeight: '1.1',
        }}
      >
        {isUnknownStyle ? 'Unrecognized Style ID' : 'Page Not Found'}
      </h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.85, marginBottom: '2rem' }}>
        {isUnknownStyle ? (
          <>
            The style ID in <code>{currentPath}</code> is not in Taste Engine's ten canonical packs. Taste Engine rejects unknown styles rather than silently falling back to defaults.
          </>
        ) : (
          <>
            The requested URL <code>{currentPath}</code> does not exist in Taste Engine Studio.
          </>
        )}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/styles" className="neo-btn-primary" style={{ padding: '12px 28px' }}>
          <Compass size={18} />
          <span>Browse 10 Canonical Styles</span>
        </Link>
        <Link to="/" className="neo-btn-secondary" style={{ padding: '12px 24px' }}>
          <Home size={18} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
