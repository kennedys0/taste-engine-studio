import React, { useState } from 'react';
import { Layers, Sliders, Shield, Code2 } from 'lucide-react';

export default function SpecimenTabs({ styleId = 'neo-brutalism' }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Layers, content: 'Taste Engine examines user intent before any UI implementation, asking one concise aesthetic question if no style is given.' },
    { id: 'tokens', label: 'Design DNA', icon: Sliders, content: 'Each style pack supplies typography, spacing, surface geometry, borders, shadows, and motion personality rules.' },
    { id: 'antislop', label: 'Anti-Slop', icon: Shield, content: 'FLOOR, REFLEX, and FINISH quality tiers prevent generic templates, dishonest states, and fake badges while preserving legitimate style traits.' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: '780px' }}>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Component specifications"
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: styleId === 'swiss-editorial' || styleId === 'minimalism' ? '1px solid currentColor' : 'none',
          paddingBottom: '0.5rem',
          marginBottom: '1rem',
          overflowX: 'auto',
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;

          let tabStyle = {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: isActive ? '800' : '600',
            transition: 'all 120ms ease-out',
            borderRadius: styleId === 'brutalism' || styleId === 'swiss-editorial' ? '0px' : '6px',
          };

          if (styleId === 'neo-brutalism') {
            tabStyle = {
              ...tabStyle,
              backgroundColor: isActive ? 'var(--neo-accent-primary)' : 'var(--neo-card)',
              border: 'var(--neo-border)',
              boxShadow: isActive ? '3px 3px 0 var(--neo-ink)' : 'none',
              color: isActive ? '#121212' : 'var(--neo-ink)',
            };
          } else if (styleId === 'glassmorphism') {
            tabStyle = {
              ...tabStyle,
              backgroundColor: isActive ? 'var(--glass-surface)' : 'transparent',
              border: '1px solid var(--glass-edge)',
              color: 'var(--glass-ink)',
              backdropFilter: 'blur(10px)',
              boxShadow: isActive ? 'var(--glass-shadow)' : 'none',
            };
          } else if (styleId === 'claymorphism') {
            tabStyle = {
              ...tabStyle,
              backgroundColor: isActive ? 'var(--clay-primary)' : 'var(--clay-light)',
              color: isActive ? '#ffffff' : 'var(--clay-text-dark)',
              boxShadow: isActive ? 'var(--clay-inner-primary)' : 'var(--clay-inner-light)',
              borderRadius: '16px',
            };
          } else if (styleId === 'brutalism') {
            tabStyle = {
              ...tabStyle,
              backgroundColor: isActive ? 'var(--brutal-ink)' : 'var(--brutal-bg)',
              color: isActive ? 'var(--brutal-bg)' : 'var(--brutal-ink)',
              border: 'var(--brutal-border)',
            };
          } else {
            // default / minimalism / enterprise / bento / retro-terminal / swiss
            tabStyle = {
              ...tabStyle,
              backgroundColor: isActive ? 'rgba(125, 125, 125, 0.15)' : 'transparent',
              border: isActive ? '1px solid currentColor' : '1px solid transparent',
            };
          }

          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              style={tabStyle}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      {tabs.map((tab) => {
        if (activeTab !== tab.id) return null;

        let panelStyle = {
          padding: '1.5rem',
          fontSize: '0.95rem',
          lineHeight: '1.6',
        };

        if (styleId === 'glassmorphism') {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'var(--glass-surface)',
            border: '1px solid var(--glass-edge)',
            borderRadius: '16px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: 'var(--glass-ink)',
            boxShadow: 'var(--glass-shadow)',
          };
        } else if (styleId === 'claymorphism') {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'var(--clay-light)',
            borderRadius: '24px',
            boxShadow: 'var(--clay-inner-light), var(--clay-shadow-light)',
            color: 'var(--clay-text-dark)',
          };
        } else if (styleId === 'neo-brutalism') {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'var(--neo-card)',
            border: 'var(--neo-border)',
            borderRadius: 'var(--neo-radius)',
            boxShadow: 'var(--neo-shadow-md)',
            color: 'var(--neo-ink)',
          };
        } else if (styleId === 'brutalism') {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'var(--brutal-surface)',
            border: 'var(--brutal-border)',
            borderRadius: '0px',
            color: 'var(--brutal-ink)',
          };
        } else if (styleId === 'bento') {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'var(--bento-surface)',
            border: 'var(--bento-border)',
            borderRadius: 'var(--bento-radius)',
            boxShadow: 'var(--bento-shadow)',
            color: 'var(--bento-ink)',
          };
        } else if (styleId === 'skeuomorphism') {
          panelStyle = {
            ...panelStyle,
            background: 'var(--skeuo-chassis)',
            border: 'var(--skeuo-panel-border)',
            borderRadius: 'var(--skeuo-radius)',
            boxShadow: 'var(--skeuo-highlight), 0 8px 24px rgba(0,0,0,0.35)',
            color: 'var(--skeuo-ink)',
          };
        } else if (styleId === 'retro-terminal') {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'var(--term-surface)',
            border: 'var(--term-border)',
            borderRadius: 'var(--term-radius)',
            color: 'var(--term-ink)',
          };
        } else if (styleId === 'enterprise') {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'var(--ent-surface)',
            border: 'var(--ent-border)',
            borderRadius: 'var(--ent-radius)',
            color: 'var(--ent-ink)',
          };
        } else {
          panelStyle = {
            ...panelStyle,
            backgroundColor: 'transparent',
            border: '1px solid rgba(125, 125, 125, 0.2)',
            borderRadius: '8px',
          };
        }

        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`tabpanel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            style={panelStyle}
          >
            <p>{tab.content}</p>
          </div>
        );
      })}
    </div>
  );
}

