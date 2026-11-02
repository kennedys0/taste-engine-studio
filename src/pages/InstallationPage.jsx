import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Terminal,
  Copy,
  Check,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { INSTALL_METHODS, VERIFICATION_STEPS } from '../data/installMethods';
import { useCopyCommand } from '../hooks/useCopyCommand';
import { usePageMetadata } from '../hooks/usePageMetadata';

export default function InstallationPage() {
  usePageMetadata(
    'Installation Guide — Taste Engine',
    'How to install the Taste Engine skill in Claude Code, Codex, Google Antigravity, or any Git repository.'
  );

  const [activeTab, setActiveTab] = useState('cli-auto');
  const { copy, copyStatus, copiedText } = useCopyCommand();

  const selectedMethod = INSTALL_METHODS.find((m) => m.id === activeTab) || INSTALL_METHODS[0];

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '880px' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#eab308' }}>
          Setup & Deployment
        </span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: '800', marginTop: '0.5rem', lineHeight: '1.15' }}>
          Install the skill. Keep your own aesthetic.
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.85, marginTop: '1.5rem' }}>
          Taste Engine installs into your preferred AI coding environment using the standard Agent Skills specification.
        </p>
      </div>

      {/* Method Tabs */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          role="tablist"
          aria-label="Installation targets"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '1.5rem',
          }}
        >
          {INSTALL_METHODS.map((method) => (
            <button
              key={method.id}
              type="button"
              role="tab"
              aria-selected={activeTab === method.id}
              onClick={() => setActiveTab(method.id)}
              className={activeTab === method.id ? 'neo-btn-primary' : 'neo-btn-secondary'}
              style={{ padding: '10px 18px', fontSize: '0.875rem' }}
            >
              {method.agent}
            </button>
          ))}
        </div>

        {/* Selected Method Details */}
        <div className="neo-card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            {selectedMethod.name}
          </h2>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.85, marginBottom: '1.5rem' }}>
            {selectedMethod.description}
          </p>

          {/* Command Snippet */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '14px 18px',
              backgroundColor: '#0c0d0e',
              border: '2px solid var(--site-ink)',
              borderRadius: '6px',
              color: '#ffb000',
              fontFamily: 'var(--site-font-mono)',
              fontSize: '0.9rem',
              overflowX: 'auto',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto' }}>
              <span style={{ color: '#10b981', fontWeight: '700' }}>$</span>
              <code style={{ whiteSpace: 'nowrap' }}>{selectedMethod.command}</code>
            </div>

            <button
              type="button"
              onClick={() => copy(selectedMethod.command)}
              aria-label={`Copy command: ${selectedMethod.command}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                backgroundColor: copiedText === selectedMethod.command ? '#10b981' : '#ffe600',
                color: copiedText === selectedMethod.command ? '#ffffff' : '#121212',
                border: '1.5px solid #121212',
                borderRadius: '4px',
                fontWeight: '800',
                fontSize: '0.8rem',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {copiedText === selectedMethod.command ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedText === selectedMethod.command ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <p style={{ fontSize: '0.85rem', lineHeight: '1.5', opacity: 0.75 }}>
            <strong>Note:</strong> {selectedMethod.notes}
          </p>
        </div>
      </div>

      {/* Verification Steps */}
      <div style={{ marginTop: '3.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>
          How to Verify Your Installation
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {VERIFICATION_STEPS.map((step) => (
            <div key={step.step} className="neo-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--site-accent)',
                    color: '#121212',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '0.75rem',
                  }}
                >
                  {step.step}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800' }}>{step.title}</h3>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Prompt your agent with: <code>"{step.prompt}"</code>
              </p>
              <div
                style={{
                  padding: '10px 14px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  fontWeight: '600',
                }}
              >
                Expected: {step.expected}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting Section */}
      <div style={{ marginTop: '3.5rem' }}>
        <div className="neo-card" style={{ backgroundColor: 'var(--site-bg)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={20} color="#f59e0b" />
            <span>Troubleshooting & Common Questions</span>
          </h3>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.925rem', lineHeight: '1.6' }}>
            <li>
              <strong>Permission Denied on Scripts:</strong> If executing `python3 scripts/style_probe.py` fails with permissions, ensure files are readable with `chmod -R u+rw ~/.skills/taste-engine`.
            </li>
            <li>
              <strong>Agent Ignores Skill:</strong> In Claude Code, verify that the skill is listed when running `/skills`. In Antigravity, verify that `taste-engine` is in the active workspace skills list.
            </li>
            <li>
              <strong>Updating Taste Engine:</strong> Re-run the install command with the same target flag to fetch the latest canonical style updates from GitHub.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
