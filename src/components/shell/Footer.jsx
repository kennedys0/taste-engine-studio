import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../data/navigation';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: 'var(--site-border)',
        backgroundColor: 'var(--site-card)',
        color: 'var(--site-ink)',
        padding: '4rem 0 2rem',
        marginTop: 'auto',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand info */}
          <div style={{ maxWidth: '320px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '800',
                fontSize: '1.2rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'var(--site-accent)',
                  border: 'var(--site-border)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '2px 2px 0 var(--site-ink)',
                  color: '#121212',
                }}
              >
                <Sparkles size={16} />
              </div>
              <span>TASTE ENGINE STUDIO</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--site-ink)', opacity: 0.9 }}>
              The interactive UI laboratory and product showcase for the open-source <strong>Taste Engine</strong> Agent Skill. One system, ten design languages, and real interfaces you can try.
            </p>
            <div
              style={{
                marginTop: '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                fontWeight: '700',
                padding: '4px 10px',
                backgroundColor: 'var(--site-bg)',
                border: 'var(--site-border)',
                borderRadius: '4px',
                boxShadow: '2px 2px 0 var(--site-ink)',
              }}
            >
              <ShieldCheck size={16} color="#10b981" />
              <span>MIT Licensed • Open Source</span>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div>
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
                borderBottom: '2px solid var(--site-accent)',
                paddingBottom: '4px',
                display: 'inline-block',
              }}
            >
              Experience
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {FOOTER_LINKS.product.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      color: 'var(--site-ink)',
                      opacity: 0.85,
                      transition: 'opacity 120ms',
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = '1')}
                    onMouseLeave={(e) => (e.target.style.opacity = '0.85')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Architecture */}
          <div>
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
                borderBottom: '2px solid var(--site-accent)',
                paddingBottom: '4px',
                display: 'inline-block',
              }}
            >
              Quality & Architecture
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {FOOTER_LINKS.architecture.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textDecoration: 'none',
                      color: 'var(--site-ink)',
                      opacity: 0.85,
                      transition: 'opacity 120ms',
                    }}
                    onMouseEnter={(e) => (e.target.style.opacity = '1')}
                    onMouseLeave={(e) => (e.target.style.opacity = '0.85')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Project */}
          <div>
            <h3
              style={{
                fontSize: '0.95rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.25rem',
                borderBottom: '2px solid var(--site-accent)',
                paddingBottom: '4px',
                display: 'inline-block',
              }}
            >
              Project
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {FOOTER_LINKS.project.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        color: 'var(--site-ink)',
                        opacity: 0.85,
                      }}
                    >
                      {item.label} ↗
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        color: 'var(--site-ink)',
                        opacity: 0.85,
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: 'var(--site-border)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.85rem',
          }}
        >
          <p style={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Taste Engine Studio. Built with Vite, React & JSX in English. Default site aesthetic: Neo-brutalism.
          </p>
          <p style={{ opacity: 0.8 }}>
            Notice: Authentication and dashboard metrics on this website are client-side simulations on labeled sample data.
          </p>
        </div>
      </div>
    </footer>
  );
}
