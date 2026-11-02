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
              backgroundColor: styleId === 'glassmorphism' ? 'var(--glass-surface)' : styleId === 'claymorphism' ? 'var(--clay-light)' : 'var(--site-card)',
              color: 'inherit',
              border: styleId === 'glassmorphism' ? '1px solid var(--glass-edge)' : styleId === 'brutalism' ? 'var(--brutal-border)' : 'var(--site-border)',
              borderRadius: styleId === 'brutalism' || styleId === 'swiss-editorial' ? '0px' : styleId === 'claymorphism' ? '28px' : '12px',
              boxShadow: styleId === 'neo-brutalism' ? '8px 8px 0 var(--neo-ink)' : styleId === 'claymorphism' ? 'var(--clay-inner-light), 0 20px 40px rgba(0,0,0,0.3)' : '0 20px 50px rgba(0,0,0,0.35)',
              padding: '2rem',
              position: 'relative',
              backdropFilter: styleId === 'glassmorphism' ? 'blur(20px) saturate(140%)' : 'none',
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
                style={{
                  padding: '10px 18px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  border: '1px solid currentColor',
                  borderRadius: styleId === 'brutalism' ? '0px' : '6px',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                }}
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

