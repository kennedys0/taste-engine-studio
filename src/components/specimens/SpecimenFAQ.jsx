import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/faq';

export default function SpecimenFAQ({ styleId = 'neo-brutalism', items = FAQ_ITEMS.slice(0, 5) }) {
  const [openIds, setOpenIds] = useState(new Set([items[0]?.id || 'faq-1']));

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '780px' }}>
      {items.map((item, idx) => {
        const isOpen = openIds.has(item.id);
        const headerId = `faq-header-${styleId}-${item.id}`;
        const panelId = `faq-panel-${styleId}-${item.id}`;

        let itemStyle = {
          padding: '1.25rem',
          cursor: 'pointer',
          transition: 'all 140ms ease-out',
        };

        if (styleId === 'glassmorphism') {
          itemStyle = {
            ...itemStyle,
            backgroundColor: 'var(--glass-surface)',
            color: 'var(--glass-ink)',
            border: '1px solid var(--glass-edge)',
            borderRadius: '16px',
            boxShadow: 'var(--glass-shadow)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          };
        } else if (styleId === 'claymorphism') {
          itemStyle = {
            ...itemStyle,
            backgroundColor: 'var(--clay-light)',
            color: 'var(--clay-text-dark)',
            borderRadius: '20px',
            boxShadow: 'var(--clay-inner-light), var(--clay-shadow-light)',
          };
        } else if (styleId === 'brutalism') {
          itemStyle = {
            ...itemStyle,
            backgroundColor: isOpen ? '#000000' : 'var(--brutal-bg)',
            color: isOpen ? '#ffffff' : 'var(--brutal-ink)',
            border: 'var(--brutal-border)',
            borderRadius: '0px',
          };
        } else if (styleId === 'minimalism') {
          itemStyle = {
            ...itemStyle,
            borderBottom: 'var(--mini-border)',
            padding: '1.25rem 0',
            backgroundColor: 'transparent',
          };
        } else if (styleId === 'swiss-editorial') {
          itemStyle = {
            ...itemStyle,
            borderTop: 'var(--swiss-rule)',
            padding: '1.25rem 0',
            backgroundColor: 'transparent',
          };
        } else if (styleId === 'bento') {
          itemStyle = {
            ...itemStyle,
            backgroundColor: 'var(--bento-surface)',
            color: 'var(--bento-ink)',
            border: 'var(--bento-border)',
            borderRadius: '16px',
          };
        } else if (styleId === 'skeuomorphism') {
          itemStyle = {
            ...itemStyle,
            background: 'var(--skeuo-chassis)',
            border: 'var(--skeuo-panel-border)',
            borderRadius: '8px',
            boxShadow: 'var(--skeuo-highlight), 0 2px 6px rgba(0,0,0,0.3)',
          };
        } else if (styleId === 'retro-terminal') {
          itemStyle = {
            ...itemStyle,
            backgroundColor: 'var(--term-surface)',
            border: 'var(--term-border)',
            borderRadius: '2px',
          };
        } else if (styleId === 'enterprise') {
          itemStyle = {
            ...itemStyle,
            backgroundColor: 'var(--ent-surface)',
            border: 'var(--ent-border)',
            borderRadius: '6px',
          };
        } else {
          // neo-brutalism
          itemStyle = {
            ...itemStyle,
            backgroundColor: 'var(--neo-card)',
            border: 'var(--neo-border)',
            borderRadius: 'var(--neo-radius)',
            boxShadow: isOpen ? '4px 4px 0 var(--neo-ink)' : '2px 2px 0 var(--neo-ink)',
          };
        }

        return (
          <div key={item.id} style={itemStyle}>
            <button
              type="button"
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                gap: '1rem',
                fontWeight: styleId === 'brutalism' || styleId === 'neo-brutalism' ? '800' : '600',
                fontSize: '1rem',
                color: 'inherit',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {styleId === 'swiss-editorial' && (
                  <span style={{ color: 'var(--swiss-accent)', fontWeight: '700' }}>
                    0{idx + 1}
                  </span>
                )}
                {styleId === 'retro-terminal' && (
                  <span style={{ color: 'var(--term-green)' }}>&gt;</span>
                )}
                <span>{item.question}</span>
              </div>
              <ChevronDown
                size={18}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 160ms ease-out',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                style={{
                  marginTop: '0.75rem',
                  paddingTop: styleId === 'minimalism' || styleId === 'swiss-editorial' ? '0' : '0.75rem',
                  borderTop: styleId === 'minimalism' || styleId === 'swiss-editorial' ? 'none' : '1px solid rgba(125, 125, 125, 0.2)',
                  fontSize: '0.925rem',
                  lineHeight: '1.6',
                  opacity: 0.9,
                }}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

