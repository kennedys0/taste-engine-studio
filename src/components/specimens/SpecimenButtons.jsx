import React, { useState } from 'react';
import { Play, Download, Settings, Bell, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function SpecimenButtons({ styleId = 'neo-brutalism' }) {
  const [toastMessage, setToastMessage] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const getBtnClasses = () => {
    switch (styleId) {
      case 'glassmorphism':
        return { primary: 'glass-btn-primary', secondary: 'glass-btn-secondary' };
      case 'claymorphism':
        return { primary: 'clay-btn-primary', secondary: 'clay-btn-secondary' };
      case 'brutalism':
        return { primary: 'brutal-btn-primary', secondary: 'brutal-btn-secondary' };
      case 'minimalism':
        return { primary: 'mini-btn-primary', secondary: 'mini-btn-secondary' };
      case 'swiss-editorial':
        return { primary: 'swiss-btn-primary', secondary: 'swiss-btn-secondary' };
      case 'bento':
        return { primary: 'bento-btn-primary', secondary: 'bento-btn-secondary' };
      case 'skeuomorphism':
        return { primary: 'skeuo-btn-primary', secondary: 'skeuo-btn-primary' };
      case 'retro-terminal':
        return { primary: 'term-btn-primary', secondary: 'term-btn-secondary' };
      case 'enterprise':
        return { primary: 'ent-btn-primary', secondary: 'ent-btn-secondary' };
      default:
        return { primary: 'neo-btn-primary', secondary: 'neo-btn-secondary' };
    }
  };

  const classes = getBtnClasses();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '780px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
        {/* Primary button */}
        <button
          type="button"
          className={classes.primary}
          onClick={() => {
            setClickCount((c) => c + 1);
            showToast(`Primary action clicked (total clicks: ${clickCount + 1})`);
          }}
        >
          <Play size={16} />
          <span>Primary Action</span>
        </button>

        {/* Secondary button */}
        <button
          type="button"
          className={classes.secondary}
          onClick={() => showToast('Secondary action performed')}
        >
          <Download size={16} />
          <span>Secondary Action</span>
        </button>

        {/* Icon button with accessible label */}
        <button
          type="button"
          className={classes.secondary}
          aria-label="Open settings panel"
          title="Open settings"
          onClick={() => showToast('Settings shortcut triggered')}
          style={{ width: '42px', height: '42px', padding: '0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Settings size={18} aria-hidden="true" />
        </button>

        {/* Disabled button */}
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={classes.secondary}
          style={{ opacity: 0.5, cursor: 'not-allowed' }}
          onClick={() => {}}
        >
          <span>Disabled State</span>
        </button>
      </div>

      {/* Toast announcement banner */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            borderRadius: styleId === 'brutalism' ? '0px' : '6px',
            border: '2px solid #10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            color: 'inherit',
            fontWeight: '600',
            fontSize: '0.9rem',
          }}
        >
          <CheckCircle2 size={18} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
