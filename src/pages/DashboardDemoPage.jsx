import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sliders,
  Settings,
  ArrowLeft,
  X,
  Filter,
  BarChart3,
  ListTodo,
} from 'lucide-react';
import { SAMPLE_PROJECTS } from '../data/sampleProjects';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getStyle } from '../styles/registry';
import SpecimenDataTable from '../components/specimens/SpecimenDataTable';

export default function DashboardDemoPage() {
  const context = useOutletContext() || {};
  const styleObj = context.styleObj || getStyle('neo-brutalism');

  usePageMetadata(
    `${styleObj.label} Dashboard Demo — Taste Engine`,
    `Operational dashboard demo rendered in ${styleObj.label} style, featuring search, sorting, and metrics on labeled sample data.`
  );

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [denseRows, setDenseRows] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [savedLocallyNote, setSavedLocallyNote] = useState(false);

  // Compute actual metrics from sample projects
  const totalTasks = SAMPLE_PROJECTS.length;
  const completedTasks = SAMPLE_PROJECTS.filter((p) => p.status === 'Completed').length;
  const inReviewTasks = SAMPLE_PROJECTS.filter((p) => p.status === 'In Review').length;
  const activeTasks = SAMPLE_PROJECTS.filter((p) => p.status === 'Active').length;

  const getPrimaryBtnClass = () => {
    switch (styleObj.id) {
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
    switch (styleObj.id) {
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

  const getCardClass = () => {
    switch (styleObj.id) {
      case 'glassmorphism': return 'glass-pane';
      case 'claymorphism': return 'clay-card';
      case 'brutalism': return 'brutal-card';
      case 'minimalism': return 'mini-card';
      case 'swiss-editorial': return 'swiss-card';
      case 'bento': return 'bento-tile';
      case 'skeuomorphism': return 'skeuo-panel';
      case 'retro-terminal': return 'term-window';
      case 'enterprise': return 'ent-card';
      default: return 'neo-card';
    }
  };

  const cardClass = getCardClass();
  const primaryBtnClass = getPrimaryBtnClass();
  const secondaryBtnClass = getSecondaryBtnClass();

  const handleSaveSettings = () => {
    setSavedLocallyNote(true);
    setTimeout(() => setSavedLocallyNote(false), 2500);
    setSettingsOpen(false);
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem', maxWidth: '1280px' }}>
      {/* Top Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Link
                to={`/${styleObj.id}/playground`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'inherit',
                  opacity: 0.8,
                  textDecoration: 'none',
                }}
              >
                <ArrowLeft size={14} />
                <span>Playground</span>
              </Link>
              <span style={{ opacity: 0.4 }}>/</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', opacity: 0.7 }}>Demo Dashboard</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800' }}>
              {styleObj.label} Workspace Cockpit
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className={secondaryBtnClass}
              style={{ padding: '8px 16px', fontSize: '0.875rem' }}
            >
              <Settings size={16} />
              <span>Dashboard Preferences</span>
            </button>
          </div>
        </div>
      </div>

      {/* Prominent Sample Data Indicator */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 16px',
          backgroundColor: 'rgba(59, 130, 246, 0.12)',
          border: '1.5px solid #3b82f6',
          borderRadius: styleObj.id === 'brutalism' ? '0px' : '6px',
          marginBottom: '2rem',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <AlertCircle size={18} color="#3b82f6" />
        <span>
          Sample Data Notice: All counts, tasks, and progress indicators are computed from a local sample fixture. No live cloud monitoring.
        </span>
      </div>

      {savedLocallyNote && (
        <div
          role="status"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1.5px solid #10b981',
            borderRadius: '6px',
            color: '#10b981',
            fontWeight: '700',
            fontSize: '0.875rem',
            marginBottom: '1.5rem',
          }}
        >
          <CheckCircle2 size={18} />
          <span>Dashboard preferences saved locally in browser state.</span>
        </div>
      )}

      {/* Summary KPI Cards derived honestly from sample fixture */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        <div
          className={cardClass}
          style={{ padding: '1.5rem' }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: '700', opacity: 0.75, textTransform: 'uppercase' }}>
            Total Sample Items
          </span>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0.25rem 0', fontVariantNumeric: 'tabular-nums' }}>
            {totalTasks}
          </div>
          <span style={{ fontSize: '0.8rem', color: '#3b82f6', fontWeight: '600' }}>
            Active audit tasks
          </span>
        </div>

        <div
          className={cardClass}
          style={{ padding: '1.5rem' }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: '700', opacity: 0.75, textTransform: 'uppercase' }}>
            Completed Tasks
          </span>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0.25rem 0', color: '#10b981', fontVariantNumeric: 'tabular-nums' }}>
            {completedTasks}
          </div>
          <span style={{ fontSize: '0.8rem', opacity: 0.75 }}>
            Verified against gates
          </span>
        </div>

        <div
          className={cardClass}
          style={{ padding: '1.5rem' }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: '700', opacity: 0.75, textTransform: 'uppercase' }}>
            In Review
          </span>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0.25rem 0', color: '#f59e0b', fontVariantNumeric: 'tabular-nums' }}>
            {inReviewTasks}
          </div>
          <span style={{ fontSize: '0.8rem', opacity: 0.75 }}>
            Awaiting browser check
          </span>
        </div>

        <div
          className={cardClass}
          style={{ padding: '1.5rem' }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: '700', opacity: 0.75, textTransform: 'uppercase' }}>
            Active Development
          </span>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0.25rem 0', color: '#6366f1', fontVariantNumeric: 'tabular-nums' }}>
            {activeTasks}
          </div>
          <span style={{ fontSize: '0.8rem', opacity: 0.75 }}>
            In current sprint slice
          </span>
        </div>
      </div>

      {/* Main Interactive Table */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: '800', marginBottom: '1rem' }}>
          Sample Tasks & Work Items
        </h2>
        <SpecimenDataTable styleId={styleObj.id} />
      </div>

      {/* Settings Modal */}
      {settingsOpen && (
        <div
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSettingsOpen(false);
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            zIndex: 1000,
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-title"
            style={{
              width: '100%',
              maxWidth: '460px',
              backgroundColor: 'var(--site-card)',
              color: 'var(--site-ink)',
              border: 'var(--site-border)',
              borderRadius: styleObj.id === 'brutalism' ? '0px' : '10px',
              boxShadow: 'var(--site-shadow-lg)',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 id="settings-title" style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                Dashboard Preferences
              </h3>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                aria-label="Close preferences"
                style={{ padding: '4px', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Dense Table Rows</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Reduces row padding for higher scannability</div>
                </div>
                <input
                  type="checkbox"
                  checked={denseRows}
                  onChange={(e) => setDenseRows(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Local Notifications</div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>Show toast banners on table actions</div>
                </div>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className={secondaryBtnClass}
                style={{ padding: '8px 16px', fontSize: '0.875rem' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveSettings}
                className={primaryBtnClass}
                style={{ padding: '8px 18px', fontSize: '0.875rem' }}
              >
                Save Preferences (Local)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
