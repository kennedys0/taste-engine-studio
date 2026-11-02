import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';
import { PRIMARY_NAV } from '../../data/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        height: 'var(--header-height)',
        borderBottom: 'var(--site-border)',
        backgroundColor: 'var(--site-bg)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Logo / Brand */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'var(--site-ink)',
            fontWeight: '800',
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: 'var(--site-accent)',
              border: 'var(--site-border)',
              borderRadius: 'var(--site-radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--site-shadow-sm)',
              color: '#121212',
            }}
          >
            <Sparkles size={20} strokeWidth={2.5} />
          </div>
          <span>
            TASTE <span style={{ backgroundColor: 'var(--site-accent)', padding: '2px 6px', border: '1.5px solid var(--site-ink)', borderRadius: '4px' }}>ENGINE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem',
          }}
          className="desktop-nav"
        >
          {PRIMARY_NAV.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                fontWeight: isActive ? '800' : '600',
                fontSize: '0.925rem',
                color: 'var(--site-ink)',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: 'var(--site-radius)',
                backgroundColor: isActive ? 'var(--site-accent)' : 'transparent',
                border: isActive ? 'var(--site-border)' : '2px solid transparent',
                boxShadow: isActive ? '2px 2px 0 var(--site-ink)' : 'none',
                transition: 'all 120ms ease-out',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.75rem',
          }}
          className="desktop-actions"
        >
          <ThemeToggle
            style={{
              border: 'var(--site-border)',
              backgroundColor: 'var(--site-card)',
              color: 'var(--site-ink)',
              boxShadow: '2px 2px 0 var(--site-ink)',
            }}
          />

          <a
            href="https://github.com/kennedys0/taste-engine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository (opens in new tab)"
            title="GitHub Repository"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              border: 'var(--site-border)',
              borderRadius: 'var(--site-radius)',
              backgroundColor: 'var(--site-card)',
              color: 'var(--site-ink)',
              fontWeight: '700',
              fontSize: '0.875rem',
              boxShadow: '2px 2px 0 var(--site-ink)',
              textDecoration: 'none',
            }}
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-only-controls">
          <ThemeToggle
            style={{
              border: 'var(--site-border)',
              backgroundColor: 'var(--site-card)',
              color: 'var(--site-ink)',
              boxShadow: '2px 2px 0 var(--site-ink)',
            }}
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              backgroundColor: 'var(--site-accent)',
              border: 'var(--site-border)',
              borderRadius: 'var(--site-radius)',
              boxShadow: 'var(--site-shadow-sm)',
              color: '#121212',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--site-bg)',
            borderTop: 'var(--site-border)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            overflowY: 'auto',
            zIndex: 99,
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={({ isActive }) => ({
                  display: 'block',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  padding: '12px 16px',
                  borderRadius: 'var(--site-radius)',
                  border: 'var(--site-border)',
                  backgroundColor: isActive ? 'var(--site-accent)' : 'var(--site-card)',
                  color: isActive ? '#121212' : 'var(--site-ink)',
                  boxShadow: 'var(--site-shadow-sm)',
                  textDecoration: 'none',
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.5rem', borderTop: 'var(--site-border)' }}>
            <a
              href="https://github.com/kennedys0/taste-engine"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px',
                border: 'var(--site-border)',
                borderRadius: 'var(--site-radius)',
                backgroundColor: 'var(--site-card)',
                color: 'var(--site-ink)',
                fontWeight: '700',
                boxShadow: 'var(--site-shadow-sm)',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={20} />
              <span>View on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-only-controls { display: none !important; }
        }
      `}</style>
    </header>
  );
}
