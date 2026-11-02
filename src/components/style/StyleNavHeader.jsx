import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LayoutGrid, ArrowLeft, Sliders, Shield, Lock, LayoutDashboard } from 'lucide-react';
import { STYLES, STYLE_IDS } from '../../styles/registry';
import ThemeToggle from '../shell/ThemeToggle';

export default function StyleNavHeader({ styleObj }) {
  const navigate = useNavigate();
  const currentIndex = STYLE_IDS.indexOf(styleObj.id);
  const prevStyleId = STYLE_IDS[(currentIndex - 1 + STYLE_IDS.length) % STYLE_IDS.length];
  const nextStyleId = STYLE_IDS[(currentIndex + 1) % STYLE_IDS.length];

  const subroutes = [
    { label: 'Overview', path: `/${styleObj.id}`, icon: LayoutGrid, exact: true },
    { label: 'Playground', path: `/${styleObj.id}/playground`, icon: Sliders },
    { label: 'Login Demo', path: `/${styleObj.id}/login`, icon: Lock },
    { label: 'Dashboard Demo', path: `/${styleObj.id}/dashboard`, icon: LayoutDashboard },
  ];

  return (
    <div
      style={{
        borderBottom: 'var(--site-border)',
        backgroundColor: 'var(--site-card)',
        color: 'var(--site-ink)',
        padding: '0.75rem 0',
        position: 'sticky',
        top: 'var(--header-height)',
        zIndex: 90,
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Top row: Back to styles, style selector, prev/next, theme toggle */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              to="/styles"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.85rem',
                fontWeight: '700',
                padding: '4px 10px',
                borderRadius: 'var(--site-radius)',
                border: 'var(--site-border)',
                backgroundColor: 'var(--site-bg)',
                textDecoration: 'none',
              }}
            >
              <ArrowLeft size={16} />
              <span>All 10 Styles</span>
            </Link>

            {/* Current Style Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label htmlFor="style-select" className="sr-only">Switch visual style</label>
              <select
                id="style-select"
                value={styleObj.id}
                onChange={(e) => navigate(`/${e.target.value}`)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--site-radius)',
                  border: 'var(--site-border)',
                  backgroundColor: 'var(--site-accent)',
                  color: '#121212',
                  fontWeight: '800',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                }}
              >
                {STYLES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Prev / Next buttons */}
            <Link
              to={`/${prevStyleId}`}
              title={`Previous style: ${prevStyleId}`}
              aria-label={`Previous style: ${prevStyleId}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--site-radius)',
                border: 'var(--site-border)',
                backgroundColor: 'var(--site-bg)',
                color: 'var(--site-ink)',
                textDecoration: 'none',
              }}
            >
              <ChevronLeft size={18} />
            </Link>
            <Link
              to={`/${nextStyleId}`}
              title={`Next style: ${nextStyleId}`}
              aria-label={`Next style: ${nextStyleId}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: 'var(--site-radius)',
                border: 'var(--site-border)',
                backgroundColor: 'var(--site-bg)',
                color: 'var(--site-ink)',
                textDecoration: 'none',
              }}
            >
              <ChevronRight size={18} />
            </Link>

            <ThemeToggle styleId={styleObj.id} />
          </div>
        </div>

        {/* Bottom row: Subroute tabs */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '2px',
          }}
          aria-label={`${styleObj.label} sub-routes`}
        >
          {subroutes.map((sub) => {
            const Icon = sub.icon;
            return (
              <NavLink
                key={sub.path}
                to={sub.path}
                end={sub.exact}
                style={({ isActive }) => ({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: 'var(--site-radius)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? '800' : '600',
                  color: isActive ? '#121212' : 'var(--site-ink)',
                  backgroundColor: isActive ? 'var(--site-accent)' : 'transparent',
                  border: isActive ? 'var(--site-border)' : '1px solid transparent',
                  boxShadow: isActive ? '2px 2px 0 var(--site-ink)' : 'none',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                })}
              >
                <Icon size={16} />
                <span>{sub.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

