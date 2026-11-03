import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SpecimenDialog({ styleId = 'neo-brutalism' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const triggerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);

  // Restore focus to trigger upon modal close
  useEffect(() => {
    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button initially
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      // Simple focus trap within dialog
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const getTriggerClass = () => {
    switch (styleId) {
      case 'glassmorphism': return 'glass-btn-primary';
      case 'claymorphism': return 'clay-btn-primary';
      case 'brutalism': return 'brutal-btn-primary';
      case 'minimalism': return 'mini-btn-primary';
      case 'swiss-editorial': return 'swiss-btn-primary';
      case 'bento': return 'bento-btn-primary';
      case 'skeuomorphism': return 'skeuo-btn-primary';
      case 'retro-terminal': return 'term-btn-primary';
      case 'enterprise': return 'ent-btn-primary';
      default: return 'neo-btn-primary';
    }
  };

  const getSecondaryBtnClass = () => {
    switch (styleId) {
      case 'glassmorphism': return 'glass-btn-secondary';
      case 'claymorphism': return 'clay-btn-secondary';
      case 'brutalism': return 'brutal-btn-secondary';
      case 'minimalism': return 'mini-btn-secondary';
      case 'swiss-editorial': return 'swiss-btn-secondary';
      case 'bento': return 'bento-btn-secondary';
      case 'skeuomorphism': return 'skeuo-btn-secondary';
      case 'retro-terminal': return 'term-btn-secondary';
      case 'enterprise': return 'ent-btn-secondary';
      default: return 'neo-btn-secondary';
    }
  };

  const getDialogStyle = () => {
    switch (styleId) {
      case 'glassmorphism':
        return {
          backgroundColor: 'var(--glass-surface, rgba(255, 255, 255, 0.65))',
          color: 'var(--glass-ink, #0f172a)',
          border: '1px solid var(--glass-edge, rgba(255, 255, 255, 0.7))',
          borderRadius: '20px',
          boxShadow: 'var(--glass-shadow, 0 20px 50px rgba(28, 76, 156, 0.2))',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
        };
      case 'claymorphism':
        return {
          backgroundColor: 'var(--clay-light, #ffffff)',
          color: 'var(--clay-text-dark, #2d3748)',
          border: 'none',
          borderRadius: '28px',
          boxShadow: 'var(--clay-inner-light), 0 20px 40px rgba(0,0,0,0.18)',
        };
      case 'brutalism':
        return {
          backgroundColor: 'var(--brutal-bg, #ffffff)',
          color: 'var(--brutal-ink, #000000)',
          border: 'var(--brutal-border, 3px solid #000000)',
          borderRadius: '0px',
          boxShadow: 'none',
        };
      case 'minimalism':
        return {
          backgroundColor: 'var(--mini-surface, #ffffff)',
          color: 'var(--mini-ink, #111827)',
          border: 'var(--mini-border, 1px solid rgba(0, 0, 0, 0.08))',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        };
      case 'swiss-editorial':
        return {
          backgroundColor: 'var(--swiss-surface, #ffffff)',
          color: 'var(--swiss-ink, #000000)',
          border: '2px solid currentColor',
          borderRadius: '0px',
          boxShadow: 'none',
        };
      case 'bento':
        return {
          backgroundColor: 'var(--bento-surface, #ffffff)',
          color: 'var(--bento-ink, #1f2937)',
          border: 'var(--bento-border, 1px solid rgba(0, 0, 0, 0.08))',
          borderRadius: '20px',
          boxShadow: 'var(--bento-shadow, 0 20px 50px rgba(0,0,0,0.12))',
        };
      case 'skeuomorphism':
        return {
          background: 'var(--skeuo-chassis, linear-gradient(180deg, #edf0f5 0%, #d8dde6 100%))',
          color: 'var(--skeuo-ink, #1a202c)',
          border: 'var(--skeuo-panel-border, 1px solid #b8bec9)',
          borderRadius: '16px',
          boxShadow: 'var(--skeuo-highlight), 0 24px 50px rgba(0, 0, 0, 0.4)',
        };
      case 'retro-terminal':
        return {
          backgroundColor: 'var(--term-surface, #0c1017)',
          color: 'var(--term-ink, #523102)',
          border: 'var(--term-border, 1px solid rgba(124, 74, 3, 0.35))',
          borderRadius: '4px',
          boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.6), 0 20px 40px rgba(0, 0, 0, 0.6)',
        };
      case 'enterprise':
        return {
          backgroundColor: 'var(--ent-surface, #ffffff)',
          color: 'var(--ent-ink, #111827)',
          border: 'var(--ent-border, 1px solid #e5e7eb)',
          borderRadius: '8px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        };
      case 'neo-brutalism':
      default:
        return {
          backgroundColor: 'var(--neo-card, #ffffff)',
          color: 'var(--neo-ink, #121212)',
          border: 'var(--neo-border, 2.5px solid #121212)',
          borderRadius: 'var(--neo-radius, 8px)',
          boxShadow: '8px 8px 0 var(--neo-ink, #121212)',
        };
    }
  };

  return (
    <div>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setIsOpen(true);
          setConfirmed(false);
        }}
        className={getTriggerClass()}
      >
        <Sparkles size={16} />
        <span>Open Accessible Modal</span>
      </button>

      {isOpen && (
        <div
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: styleId === 'glassmorphism' ? 'rgba(15, 23, 42, 0.45)' : 'rgba(0, 0, 0, 0.65)',
            backdropFilter: styleId === 'glassmorphism' ? 'blur(8px)' : 'none',
            WebkitBackdropFilter: styleId === 'glassmorphism' ? 'blur(8px)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 1000,
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-desc"
            style={{
              width: '100%',
              maxWidth: '480px',
              padding: '2rem',
              position: 'relative',
              ...getDialogStyle(),
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 id="dialog-title" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                Taste Engine Modal Demo
              </h3>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close modal dialog (or press Escape)"
                style={{
                  padding: '6px',
                  borderRadius: '4px',
                  border: '1px solid currentColor',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <p id="dialog-desc" style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', opacity: 0.9 }}>
              This dialog implements strict accessibility: keyboard focus trap, Escape key dismiss, backdrop click dismissal, and focus restoration to the opening button upon close.
            </p>

            {confirmed ? (
              <div
                role="status"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  fontWeight: '700',
                  color: '#10b981',
                  marginBottom: '1.5rem',
                }}
              >
                <CheckCircle2 size={18} />
                <span>Action confirmed locally!</span>
              </div>
            ) : null}

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={getSecondaryBtnClass()}
                style={{ padding: '10px 18px', fontSize: '0.9rem' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className={getTriggerClass()}
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                Confirm (Demo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

