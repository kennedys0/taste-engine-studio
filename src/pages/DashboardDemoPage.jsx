import React, { useState, useMemo, useEffect } from 'react';
import { useOutletContext, Link, useSearchParams } from 'react-router-dom';
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
  RefreshCw,
  Search,
  ArrowUpDown,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Eye,
  Activity,
  Layers,
  ChevronRight,
  TrendingUp,
  RotateCcw,
  Sparkles,
  Check,
} from 'lucide-react';
import { SAMPLE_PROJECTS, CATEGORIES, STATUSES } from '../data/sampleProjects';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getStyle } from '../styles/registry';
import { getStyleThemeClasses } from '../utils/styleTheme';

export default function DashboardDemoPage() {
  const context = useOutletContext() || {};
  const styleObj = context.styleObj || getStyle('neo-brutalism');
  const themeClasses = getStyleThemeClasses(styleObj.id);

  const [searchParams, setSearchParams] = useSearchParams();

  usePageMetadata(
    `${styleObj.label} Dashboard Demo — Taste Engine`,
    `Operational dashboard demo rendered in ${styleObj.label} style, featuring search, sorting, and metrics on labeled sample data.`
  );

  // Read URL query params if present (per blueprint §8 sitemap query specification)
  const initialQuery = searchParams.get('q') || '';
  const initialStatus = searchParams.get('status') || 'All';
  const initialCategory = searchParams.get('category') || 'All';
  const initialSort = searchParams.get('sort') || 'name';
  const initialState = searchParams.get('state') || 'normal';

  // State Management
  const [projects, setProjects] = useState(SAMPLE_PROJECTS);
  const [simState, setSimState] = useState(initialState); // 'normal' | 'loading' | 'empty' | 'error'
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [sortField, setSortField] = useState(initialSort);
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' | 'desc'
  const [selectedRow, setSelectedRow] = useState(null);

  // Settings & Preferences
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [denseRows, setDenseRows] = useState(false);
  const [showDistribution, setShowDistribution] = useState(true);
  const [showActivityFeed, setShowActivityFeed] = useState(true);
  const [feedbackToast, setFeedbackToast] = useState(null);

  const showToast = (message) => {
    setFeedbackToast(message);
    setTimeout(() => {
      setFeedbackToast(null);
    }, 3200);
  };

  // Sync state changes with URL query parameters without cluttering history
  useEffect(() => {
    const params = {};
    if (searchTerm) params.q = searchTerm;
    if (selectedStatus !== 'All') params.status = selectedStatus;
    if (selectedCategory !== 'All') params.category = selectedCategory;
    if (sortField !== 'name') params.sort = sortField;
    if (simState !== 'normal') params.state = simState;
    setSearchParams(params, { replace: true });
  }, [searchTerm, selectedStatus, selectedCategory, sortField, simState, setSearchParams]);

  // Derived Metrics from truthful local sample fixture
  const totalTasks = projects.length;
  const completedTasks = projects.filter((p) => p.status === 'Completed').length;
  const inReviewTasks = projects.filter((p) => p.status === 'In Review').length;
  const activeTasks = projects.filter((p) => p.status === 'Active').length;
  const plannedTasks = projects.filter((p) => p.status === 'Planned').length;

  const completionRate = Math.round((completedTasks / (totalTasks || 1)) * 100);
  const averageProgress = Math.round(
    projects.reduce((sum, p) => sum + (p.progress || 0), 0) / (totalTasks || 1)
  );

  // Filtered & Sorted Projects
  const filteredProjects = useMemo(() => {
    if (simState === 'empty') return [];

    return projects
      .filter((item) => {
        const query = searchTerm.toLowerCase();
        const matchesSearch =
          item.name.toLowerCase().includes(query) ||
          item.id.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.assignee.toLowerCase().includes(query);

        const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesStatus =
          selectedStatus === 'All' ||
          item.status.toLowerCase() === selectedStatus.toLowerCase();
        const matchesPriority =
          selectedPriority === 'All' || item.priority === selectedPriority;

        return matchesSearch && matchesCat && matchesStatus && matchesPriority;
      })
      .sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
  }, [projects, searchTerm, selectedCategory, selectedStatus, selectedPriority, sortField, sortDirection, simState]);

  // Handle Sort Toggle
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedStatus('All');
    setSelectedPriority('All');
    setSortField('name');
    setSortDirection('asc');
    if (simState === 'empty') setSimState('normal');
    showToast('Filters cleared. Displaying all sample records.');
  };

  // Reset Entire Dataset to Initial Sample Fixture
  const handleResetAllData = () => {
    setProjects(SAMPLE_PROJECTS);
    setSelectedRow(null);
    setSimState('normal');
    handleResetFilters();
    showToast('Sample dataset restored to initial fixture.');
  };

  // Simulate updating task status locally (truthful in-memory modification)
  const handleSimulateStatusChange = (taskId, newStatus) => {
    const updated = projects.map((p) => {
      if (p.id === taskId) {
        return {
          ...p,
          status: newStatus,
          progress: newStatus === 'Completed' ? 100 : newStatus === 'Planned' ? 10 : p.progress,
          updatedAt: 'Just now (simulated)',
        };
      }
      return p;
    });

    setProjects(updated);
    if (selectedRow && selectedRow.id === taskId) {
      setSelectedRow((prev) => ({
        ...prev,
        status: newStatus,
        progress: newStatus === 'Completed' ? 100 : newStatus === 'Planned' ? 10 : prev.progress,
        updatedAt: 'Just now (simulated)',
      }));
    }
    showToast(`Status updated in browser memory: ${taskId} → ${newStatus}. (Demo only — no API call)`);
  };

  // Style-specific UI characteristics
  const isTerm = styleObj.id === 'retro-terminal';
  const isBrutal = styleObj.id === 'brutalism';
  const isGlass = styleObj.id === 'glassmorphism';
  const isClay = styleObj.id === 'claymorphism';
  const isBento = styleObj.id === 'bento';
  const isSwiss = styleObj.id === 'swiss-editorial';
  const isSkeuo = styleObj.id === 'skeuomorphism';
  const isEnterprise = styleObj.id === 'enterprise';

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem', maxWidth: '1360px', width: '100%' }}>
      {/* Breadcrumb Navigation & Style Cockpit Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', fontWeight: '700' }}>
            <Link
              to={`/${styleObj.id}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'inherit', opacity: 0.8, textDecoration: 'none' }}
            >
              <ArrowLeft size={14} />
              <span>{styleObj.label} Overview</span>
            </Link>
            <span style={{ opacity: 0.35 }}>/</span>
            <Link
              to={`/${styleObj.id}/playground`}
              style={{ color: 'inherit', opacity: 0.8, textDecoration: 'none' }}
            >
              Playground
            </Link>
            <span style={{ opacity: 0.35 }}>/</span>
            <span style={{ opacity: 1, color: 'var(--site-accent, #3b82f6)' }}>Cockpit Dashboard</span>
          </nav>

          {/* Quick Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            {/* Reset fixture button */}
            <button
              type="button"
              onClick={handleResetAllData}
              className={themeClasses.btnSecondary}
              style={{ padding: '6px 12px', fontSize: '0.785rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              title="Reset all sample data changes in browser state"
            >
              <RotateCcw size={13} />
              <span>Reset Fixture</span>
            </button>

            {/* Dashboard Preferences trigger */}
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className={themeClasses.btnSecondary}
              style={{ padding: '6px 14px', fontSize: '0.785rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              <Settings size={14} />
              <span>Preferences</span>
            </button>

            {/* Open Playground */}
            <Link
              to={`/${styleObj.id}/playground`}
              className={themeClasses.btnPrimary}
              style={{ padding: '6px 14px', fontSize: '0.785rem', display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none' }}
            >
              <ExternalLink size={13} />
              <span>Open Playground</span>
            </Link>
          </div>
        </div>

        {/* Cockpit Headline & Philosophy Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.725rem',
                fontWeight: '800',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '3px 9px',
                borderRadius: isBrutal ? '0px' : isClay ? '12px' : '4px',
                backgroundColor: 'rgba(59, 130, 246, 0.14)',
                color: '#3b82f6',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              {isTerm ? '[SYSTEM_COCKPIT // OS_DEMO]' : `${styleObj.label} Specimen`}
            </span>
            <span style={{ fontSize: '0.75rem', opacity: 0.65, fontWeight: '600' }}>
              Operational Data Fixture
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: '800', margin: '4px 0 0', letterSpacing: '-0.02em' }}>
            {styleObj.label} Workspace Cockpit
          </h1>

          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8, maxWidth: '780px', lineHeight: '1.5' }}>
            {isEnterprise
              ? 'High-density scannable data workspace prioritizing tabular alignment, instant sorting, and low-cognitive-load information hierarchy.'
              : isTerm
              ? 'Headless sysadmin terminal console with strict character column alignments, live ASCII progress meters, and amber phosphor glow.'
              : isGlass
              ? 'Frosted ambient operational console featuring multi-layered translucent glass panes, specular edge highlights, and luminous status indicators.'
              : isBento
              ? 'Modular asymmetric bento-box dashboard balancing prominent metric cards with dense scannable work item feeds.'
              : isClay
              ? 'Tactile sculpted dashboard utilizing friendly 3D squircle containers, dual inner/outer shadows, and approachable visual status tags.'
              : isBrutal
              ? 'Monochrome utilitarian audit dashboard with zero border-radius, pure high-contrast black dividers, and unadorned structural clarity.'
              : isSwiss
              ? 'Modernist editorial grid cockpit defined by dramatic typographic scale, asymmetric numerical anchors, and rigid 1px divider lines.'
              : isSkeuo
              ? 'Tactile hardware-inspired simulator dashboard with recessed control wells, brushed borders, and physical indicator LEDs.'
              : 'Expressive operational dashboard engineered with authentic style tokens, responsive layouts, and local state management.'}
          </p>
        </div>
      </div>

      {/* Mandatory Truthful Sample Data Notice */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          padding: '12px 18px',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          border: '1.5px solid #3b82f6',
          borderRadius: isBrutal ? '0px' : isClay ? '16px' : '6px',
          marginBottom: '1.75rem',
          fontSize: '0.85rem',
          fontWeight: '700',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={18} color="#3b82f6" />
          <span>
            Sample Data Notice: All counts, tasks, and progress indicators are computed from a local sample fixture. No live cloud monitoring.
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.775rem', opacity: 0.85 }}>
          <ShieldCheck size={14} color="#10b981" />
          <span>Zero network tracking or remote telemetry</span>
        </div>
      </div>

      {/* Interactive State Simulator Selector Bar */}
      <div
        className={themeClasses.card}
        style={{
          padding: '12px 16px',
          marginBottom: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={16} />
          <span style={{ fontSize: '0.825rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            State Simulator:
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {[
            { id: 'normal', label: '1. Normal Cockpit', desc: 'Loaded state' },
            { id: 'loading', label: '2. Loading Skeletons', desc: 'Simulated fetch' },
            { id: 'empty', label: '3. Empty State', desc: 'Zero records' },
            { id: 'error', label: '4. Error Handling', desc: '503 timeout' },
          ].map((st) => {
            const isActive = simState === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setSimState(st.id)}
                className={isActive ? themeClasses.btnPrimary : themeClasses.btnSecondary}
                style={{
                  padding: '5px 12px',
                  fontSize: '0.785rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.75,
                }}
              >
                {st.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Local Feedback Toast Banner */}
      {feedbackToast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px',
            backgroundColor: 'rgba(16, 185, 129, 0.15)',
            border: '1.5px solid #10b981',
            borderRadius: isBrutal ? '0px' : isClay ? '14px' : '6px',
            color: '#10b981',
            fontWeight: '700',
            fontSize: '0.85rem',
            marginBottom: '1.75rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <CheckCircle2 size={16} />
          <span>{feedbackToast}</span>
        </div>
      )}

      {/* =========================================================================
         SIMULATED STATE 1: LOADING SKELETON PREVIEW
         ========================================================================= */}
      {simState === 'loading' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid #f59e0b',
              borderRadius: isBrutal ? '0px' : '6px',
              fontSize: '0.85rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>Simulating asynchronous data fetching & skeleton pulse rendering in {styleObj.label} style...</span>
            <button
              type="button"
              onClick={() => setSimState('normal')}
              className={themeClasses.btnPrimary}
              style={{ padding: '4px 10px', fontSize: '0.75rem' }}
            >
              Finish Loading
            </button>
          </div>

          {/* Skeleton KPI Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={themeClasses.card} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ height: '12px', width: '60%', backgroundColor: 'rgba(125, 125, 125, 0.25)', borderRadius: '4px' }} />
                <div style={{ height: '36px', width: '40%', backgroundColor: 'rgba(125, 125, 125, 0.35)', borderRadius: '6px' }} />
                <div style={{ height: '10px', width: '75%', backgroundColor: 'rgba(125, 125, 125, 0.2)', borderRadius: '4px' }} />
              </div>
            ))}
          </div>

          {/* Skeleton Table */}
          <div className={themeClasses.card} style={{ padding: '2rem' }}>
            <div style={{ height: '16px', width: '200px', backgroundColor: 'rgba(125, 125, 125, 0.3)', borderRadius: '4px', marginBottom: '1.5rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2, 3, 4, 5].map((row) => (
                <div key={row} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ height: '14px', width: '60px', backgroundColor: 'rgba(125, 125, 125, 0.25)', borderRadius: '4px' }} />
                  <div style={{ height: '14px', flex: 1, backgroundColor: 'rgba(125, 125, 125, 0.2)', borderRadius: '4px' }} />
                  <div style={{ height: '14px', width: '90px', backgroundColor: 'rgba(125, 125, 125, 0.25)', borderRadius: '4px' }} />
                  <div style={{ height: '14px', width: '80px', backgroundColor: 'rgba(125, 125, 125, 0.2)', borderRadius: '4px' }} />
                  <div style={{ height: '14px', width: '50px', backgroundColor: 'rgba(125, 125, 125, 0.3)', borderRadius: '4px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
         SIMULATED STATE 2: EMPTY STATE PREVIEW
         ========================================================================= */}
      {simState === 'empty' && (
        <div
          className={themeClasses.card}
          style={{
            padding: '3.5rem 2rem',
            textAlign: 'center',
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: isBrutal ? '0px' : isClay ? '24px' : '50%',
              backgroundColor: 'rgba(125, 125, 125, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.5rem',
            }}
          >
            <ListTodo size={32} opacity={0.65} />
          </div>

          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>
            Zero Matching Sample Records
          </h2>

          <p style={{ fontSize: '0.9rem', opacity: 0.75, maxWidth: '480px', margin: 0, lineHeight: '1.5' }}>
            The current workspace slice has no tasks. In a production environment, this view displays guidance and onboarding steps for your first data ingestion.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button
              type="button"
              onClick={handleResetAllData}
              className={themeClasses.btnPrimary}
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              Reset Sample Fixture
            </button>
            <button
              type="button"
              onClick={() => setSimState('normal')}
              className={themeClasses.btnSecondary}
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Return to Normal Cockpit
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
         SIMULATED STATE 3: ERROR HANDLING PREVIEW
         ========================================================================= */}
      {simState === 'error' && (
        <div
          className={themeClasses.card}
          style={{
            padding: '3rem 2rem',
            marginBottom: '3rem',
            border: '2px solid #ef4444',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: isBrutal ? '0px' : '50%',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertTriangle size={28} />
          </div>

          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: 0, color: '#ef4444' }}>
            Simulated Network Timeout (HTTP 503)
          </h2>

          <p style={{ fontSize: '0.875rem', opacity: 0.8, maxWidth: '520px', margin: 0, lineHeight: '1.5' }}>
            This simulated error illustrates how {styleObj.label} communicates infrastructure disconnections truthfully to users, offering accessible retries rather than silently failing.
          </p>

          <div
            style={{
              padding: '6px 12px',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              backgroundColor: 'rgba(125, 125, 125, 0.1)',
              borderRadius: '4px',
              marginTop: '0.25rem',
            }}
          >
            ERR_SAMPLE_TIMEOUT: Client simulation mode abort
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
            <button
              type="button"
              onClick={() => {
                setSimState('normal');
                showToast('Simulated connection restored successfully.');
              }}
              className={themeClasses.btnPrimary}
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              Retry Connection
            </button>
            <button
              type="button"
              onClick={handleResetAllData}
              className={themeClasses.btnSecondary}
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Reset Data State
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
         SIMULATED STATE 0: NORMAL OPERATIONAL COCKPIT
         ========================================================================= */}
      {simState === 'normal' && (
        <>
          {/* Summary KPI Cards derived honestly from sample fixture */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isBento
                ? 'repeat(auto-fit, minmax(240px, 1fr))'
                : 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            {/* Card 1: Total Sample Tasks */}
            <div
              className={themeClasses.card}
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gridColumn: isBento ? 'span 1' : 'auto',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isTerm ? '[1.0 // TOTAL_ITEMS]' : 'Total Sample Items'}
                  </span>
                  <ListTodo size={18} opacity={0.6} />
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '800', margin: '0.35rem 0', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
                  {totalTasks}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.775rem', fontWeight: '700', marginBottom: '4px' }}>
                  <span>Sprint Velocity</span>
                  <span style={{ fontVariantNumeric: 'tabular-nums' }}>{averageProgress}% avg</span>
                </div>
                {/* Visual Progress Bar */}
                <div
                  style={{
                    height: '6px',
                    width: '100%',
                    backgroundColor: 'rgba(125, 125, 125, 0.2)',
                    borderRadius: isBrutal ? '0px' : '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${averageProgress}%`,
                      backgroundColor: '#3b82f6',
                      transition: 'width 300ms ease',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Completed Tasks */}
            <div
              className={themeClasses.card}
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isTerm ? '[2.0 // VERIFIED_GATE]' : 'Completed Tasks'}
                  </span>
                  <CheckCircle2 size={18} color="#10b981" />
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '800', margin: '0.35rem 0', color: '#10b981', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
                  {completedTasks}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.775rem', opacity: 0.85, fontWeight: '700' }}>
                <span>{completionRate}% of sprint targets</span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: isBrutal ? '0px' : '4px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                  }}
                >
                  Sample Passed
                </span>
              </div>
            </div>

            {/* Card 3: In Review */}
            <div
              className={themeClasses.card}
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isTerm ? '[3.0 // VISUAL_QA]' : 'In Review'}
                  </span>
                  <Clock size={18} color="#f59e0b" />
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '800', margin: '0.35rem 0', color: '#f59e0b', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
                  {inReviewTasks}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.775rem', opacity: 0.85, fontWeight: '700' }}>
                <span>Awaiting QA approval</span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: isBrutal ? '0px' : '4px',
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    color: '#f59e0b',
                  }}
                >
                  Pending Gate
                </span>
              </div>
            </div>

            {/* Card 4: Active Development */}
            <div
              className={themeClasses.card}
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '800', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isTerm ? '[4.0 // ACTIVE_SPRINT]' : 'Active Tasks'}
                  </span>
                  <TrendingUp size={18} color="#6366f1" />
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '800', margin: '0.35rem 0', color: '#6366f1', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
                  {activeTasks}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.775rem', opacity: 0.85, fontWeight: '700' }}>
                <span>In current slice</span>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: isBrutal ? '0px' : '4px',
                    backgroundColor: 'rgba(99, 102, 241, 0.15)',
                    color: '#6366f1',
                  }}
                >
                  In Progress
                </span>
              </div>
            </div>
          </div>

          {/* Visual Category & Status Analytics Distribution (Truthful Sample Charting) */}
          {showDistribution && (
            <div
              className={themeClasses.card}
              style={{ padding: '1.75rem 2rem', marginBottom: '2.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>
                    {isTerm ? '[DATA_DISTRIBUTION // METRIC_PROPORTIONS]' : 'Task Status & Category Distribution'}
                  </h3>
                  <span style={{ fontSize: '0.785rem', opacity: 0.75 }}>
                    Proportional segment distribution derived strictly from the {totalTasks} sample fixture tasks. Click a chip to filter.
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: '700' }}>
                  <span style={{ color: '#10b981' }}>■ Completed ({completedTasks})</span>
                  <span style={{ opacity: 0.35 }}>|</span>
                  <span style={{ color: '#3b82f6' }}>■ Active ({activeTasks})</span>
                  <span style={{ opacity: 0.35 }}>|</span>
                  <span style={{ color: '#f59e0b' }}>■ In Review ({inReviewTasks})</span>
                  <span style={{ opacity: 0.35 }}>|</span>
                  <span style={{ color: '#8b5cf6' }}>■ Planned ({plannedTasks})</span>
                </div>
              </div>

              {/* Multi-Segment Proportional Status Bar */}
              <div
                style={{
                  height: '14px',
                  width: '100%',
                  borderRadius: isBrutal ? '0px' : isClay ? '10px' : '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  backgroundColor: 'rgba(125, 125, 125, 0.2)',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  title={`Completed: ${completedTasks} (${Math.round((completedTasks / totalTasks) * 100)}%)`}
                  style={{ width: `${(completedTasks / totalTasks) * 100}%`, backgroundColor: '#10b981' }}
                />
                <div
                  title={`Active: ${activeTasks} (${Math.round((activeTasks / totalTasks) * 100)}%)`}
                  style={{ width: `${(activeTasks / totalTasks) * 100}%`, backgroundColor: '#3b82f6' }}
                />
                <div
                  title={`In Review: ${inReviewTasks} (${Math.round((inReviewTasks / totalTasks) * 100)}%)`}
                  style={{ width: `${(inReviewTasks / totalTasks) * 100}%`, backgroundColor: '#f59e0b' }}
                />
                <div
                  title={`Planned: ${plannedTasks} (${Math.round((plannedTasks / totalTasks) * 100)}%)`}
                  style={{ width: `${(plannedTasks / totalTasks) * 100}%`, backgroundColor: '#8b5cf6' }}
                />
              </div>

              {/* Interactive Category Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', opacity: 0.7 }}>
                  Filter by Domain:
                </span>
                {CATEGORIES.map((cat) => {
                  const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={isSelected ? themeClasses.btnPrimary : themeClasses.btnSecondary}
                      style={{
                        padding: '4px 10px',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        borderRadius: isBrutal ? '0px' : isClay ? '12px' : '9999px',
                        opacity: isSelected ? 1 : 0.8,
                      }}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* =========================================================================
             MAIN OPERATIONAL TABLE WITH SEARCH, FILTER, AND SORT TOOLBAR
             ========================================================================= */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: '800', margin: 0 }}>
                  {isTerm ? '[TASK_MATRIX // VERIFICATION_ITEMS]' : 'Sample Tasks & Work Items'}
                </h2>
                <span style={{ fontSize: '0.8rem', opacity: 0.75 }}>
                  Showing {filteredProjects.length} of {totalTasks} sample items
                </span>
              </div>

              {/* Reset filter button if any active filter */}
              {(searchTerm || selectedCategory !== 'All' || selectedStatus !== 'All' || selectedPriority !== 'All') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className={themeClasses.btnSecondary}
                  style={{ padding: '6px 12px', fontSize: '0.785rem' }}
                >
                  Clear Filters ({filteredProjects.length} shown)
                </button>
              )}
            </div>

            {/* Filter Toolbar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              {/* Search input */}
              <div style={{ position: 'relative', flex: '1 1 240px', minWidth: '220px' }}>
                <Search
                  size={16}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.6,
                    pointerEvents: 'none',
                  }}
                />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search sample items by ID, title, or assignee..."
                  aria-label="Search sample projects"
                  className={themeClasses.input}
                  style={{
                    width: '100%',
                    paddingLeft: '36px',
                    paddingRight: '12px',
                    fontSize: '0.85rem',
                  }}
                />
              </div>

              {/* Category Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter by category"
                  className={themeClasses.input}
                  style={{ padding: '8px 12px', fontSize: '0.825rem', fontWeight: '600', cursor: 'pointer' }}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>Category: {cat}</option>
                  ))}
                </select>

                {/* Status Dropdown */}
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  aria-label="Filter by status"
                  className={themeClasses.input}
                  style={{ padding: '8px 12px', fontSize: '0.825rem', fontWeight: '600', cursor: 'pointer' }}
                >
                  {STATUSES.map((st) => (
                    <option key={st} value={st}>Status: {st}</option>
                  ))}
                </select>

                {/* Priority Dropdown */}
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  aria-label="Filter by priority"
                  className={themeClasses.input}
                  style={{ padding: '8px 12px', fontSize: '0.825rem', fontWeight: '600', cursor: 'pointer' }}
                >
                  <option value="All">Priority: All</option>
                  <option value="Critical">Priority: Critical</option>
                  <option value="High">Priority: High</option>
                  <option value="Medium">Priority: Medium</option>
                  <option value="Low">Priority: Low</option>
                </select>
              </div>
            </div>

            {/* Table Container */}
            <div
              className={themeClasses.card}
              style={{
                overflowX: 'auto',
                padding: isEnterprise ? '0' : isBrutal ? '0' : '1rem',
              }}
            >
              <table
                className={isEnterprise ? 'ent-table' : ''}
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: denseRows ? '0.8rem' : '0.875rem',
                  textAlign: 'left',
                }}
              >
                <thead>
                  <tr style={{ borderBottom: isBrutal ? '2px solid currentColor' : '1px solid rgba(125, 125, 125, 0.25)' }}>
                    <th
                      onClick={() => handleSort('id')}
                      style={{ padding: denseRows ? '8px 12px' : '12px 16px', cursor: 'pointer', fontWeight: '700' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>ID</span>
                        <ArrowUpDown size={13} opacity={0.6} />
                      </div>
                    </th>

                    <th
                      onClick={() => handleSort('name')}
                      style={{ padding: denseRows ? '8px 12px' : '12px 16px', cursor: 'pointer', fontWeight: '700' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>Task Name</span>
                        <ArrowUpDown size={13} opacity={0.6} />
                      </div>
                    </th>

                    <th style={{ padding: denseRows ? '8px 12px' : '12px 16px', fontWeight: '700' }}>
                      Category
                    </th>

                    <th
                      onClick={() => handleSort('priority')}
                      style={{ padding: denseRows ? '8px 12px' : '12px 16px', cursor: 'pointer', fontWeight: '700' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>Priority</span>
                        <ArrowUpDown size={13} opacity={0.6} />
                      </div>
                    </th>

                    <th style={{ padding: denseRows ? '8px 12px' : '12px 16px', fontWeight: '700' }}>
                      Assignee
                    </th>

                    <th
                      onClick={() => handleSort('status')}
                      style={{ padding: denseRows ? '8px 12px' : '12px 16px', cursor: 'pointer', fontWeight: '700' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span>Status</span>
                        <ArrowUpDown size={13} opacity={0.6} />
                      </div>
                    </th>

                    <th
                      onClick={() => handleSort('progress')}
                      style={{ padding: denseRows ? '8px 12px' : '12px 16px', cursor: 'pointer', fontWeight: '700', textAlign: 'right' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                        <span>Progress</span>
                        <ArrowUpDown size={13} opacity={0.6} />
                      </div>
                    </th>

                    <th style={{ padding: denseRows ? '8px 12px' : '12px 16px', textAlign: 'center', fontWeight: '700' }}>
                      Inspect
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProjects.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ padding: '3.5rem 1.5rem', textAlign: 'center' }}>
                        <p style={{ fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                          No sample records match your filters
                        </p>
                        <p style={{ opacity: 0.7, marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                          Try adjusting your search query, selecting "Category: All", or clearing active status filters.
                        </p>
                        <button
                          type="button"
                          onClick={handleResetFilters}
                          className={themeClasses.btnPrimary}
                          style={{ padding: '8px 18px', fontSize: '0.825rem' }}
                        >
                          Reset All Filters
                        </button>
                      </td>
                    </tr>
                  ) : (
                    filteredProjects.map((row) => (
                      <tr
                        key={row.id}
                        onClick={() => setSelectedRow(row)}
                        style={{
                          borderBottom: '1px solid rgba(125, 125, 125, 0.15)',
                          cursor: 'pointer',
                          transition: 'background-color 120ms',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(125, 125, 125, 0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px', fontFamily: 'monospace', fontWeight: '700', fontSize: '0.8rem' }}>
                          {row.id}
                        </td>

                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px', fontWeight: '600' }}>
                          <div>{row.name}</div>
                          <div style={{ fontSize: '0.725rem', opacity: 0.65, marginTop: '2px', maxWidth: '380px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {row.description}
                          </div>
                        </td>

                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px' }}>
                          <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.15)' }}>
                            {row.category}
                          </span>
                        </td>

                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px' }}>
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: '700',
                              color:
                                row.priority === 'Critical' ? '#ef4444' :
                                row.priority === 'High' ? '#f97316' :
                                row.priority === 'Medium' ? '#3b82f6' : 'inherit',
                            }}
                          >
                            {row.priority}
                          </span>
                        </td>

                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px', fontSize: '0.8rem' }}>
                          {row.assignee}
                        </td>

                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px' }}>
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: '700',
                              padding: '2px 8px',
                              borderRadius: isBrutal ? '0px' : isClay ? '10px' : '9999px',
                              backgroundColor:
                                row.status === 'Completed' ? 'rgba(16, 185, 129, 0.15)' :
                                row.status === 'In Review' ? 'rgba(245, 158, 11, 0.15)' :
                                row.status === 'Active' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(125, 125, 125, 0.15)',
                              color:
                                row.status === 'Completed' ? '#10b981' :
                                row.status === 'In Review' ? '#f59e0b' :
                                row.status === 'Active' ? '#3b82f6' : 'inherit',
                            }}
                          >
                            {isTerm ? `[${row.status.toUpperCase()}]` : row.status}
                          </span>
                        </td>

                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: '700' }}>
                          {row.progress}%
                        </td>

                        <td style={{ padding: denseRows ? '8px 12px' : '12px 16px', textAlign: 'center' }}>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRow(row);
                            }}
                            className={themeClasses.btnSecondary}
                            style={{ padding: '3px 8px', fontSize: '0.725rem' }}
                            aria-label={`Inspect ${row.id}`}
                          >
                            <Eye size={12} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* =========================================================================
             RECENT ACTIVITY AUDIT STREAM
             ========================================================================= */}
          {showActivityFeed && (
            <div className={themeClasses.card} style={{ padding: '2rem', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>
                    {isTerm ? '[AUDIT_STREAM // EVENT_LOG]' : 'Recent Verification Activity Log'}
                  </h3>
                  <span style={{ fontSize: '0.785rem', opacity: 0.75 }}>
                    Chronological audit log entries derived from sample component verification gates
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', opacity: 0.7 }}>
                  Local Fixture Stream
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {projects.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      padding: '10px 14px',
                      borderRadius: isBrutal ? '0px' : isClay ? '12px' : '6px',
                      backgroundColor: 'rgba(125, 125, 125, 0.08)',
                      fontSize: '0.825rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: isBrutal ? '0px' : '50%',
                          backgroundColor: 'rgba(59, 130, 246, 0.15)',
                          color: '#3b82f6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: '800',
                        }}
                      >
                        {p.assignee.split(' ').map((n) => n[0]).join('')}
                      </div>

                      <div>
                        <span style={{ fontWeight: '700' }}>{p.assignee}</span>
                        <span style={{ opacity: 0.75, marginLeft: '6px' }}>updated</span>
                        <span style={{ fontWeight: '700', marginLeft: '6px' }}>{p.id}: {p.name}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.725rem',
                          fontWeight: '700',
                          padding: '2px 6px',
                          borderRadius: isBrutal ? '0px' : '4px',
                          backgroundColor:
                            p.status === 'Completed' ? 'rgba(16, 185, 129, 0.15)' :
                            p.status === 'In Review' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                          color:
                            p.status === 'Completed' ? '#10b981' :
                            p.status === 'In Review' ? '#f59e0b' : '#3b82f6',
                        }}
                      >
                        {p.status}
                      </span>
                      <span style={{ fontSize: '0.725rem', opacity: 0.6, fontVariantNumeric: 'tabular-nums' }}>
                        {p.updatedAt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* =========================================================================
         INTERACTIVE ITEM DETAIL DRAWER / MODAL WITH STATUS SIMULATOR
         ========================================================================= */}
      {selectedRow && (
        <div
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedRow(null);
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
            aria-labelledby="detail-title"
            className={themeClasses.card}
            style={{
              width: '100%',
              maxWidth: '560px',
              padding: '2rem',
              boxShadow: 'var(--site-shadow-lg, 0 16px 36px rgba(0,0,0,0.3))',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontFamily: 'monospace', fontWeight: '800', fontSize: '0.8rem', opacity: 0.7 }}>
                  {selectedRow.id} • {selectedRow.category}
                </span>
                <h3 id="detail-title" style={{ fontSize: '1.3rem', fontWeight: '800', margin: '4px 0 0' }}>
                  {selectedRow.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRow(null)}
                aria-label="Close detail modal"
                style={{ padding: '6px', background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Description */}
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0, opacity: 0.85 }}>
              {selectedRow.description}
            </p>

            {/* Specimen Metadata Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                padding: '1rem',
                borderRadius: isBrutal ? '0px' : isClay ? '12px' : '6px',
                backgroundColor: 'rgba(125, 125, 125, 0.08)',
                fontSize: '0.825rem',
              }}
            >
              <div><strong>Assignee:</strong> {selectedRow.assignee}</div>
              <div><strong>Priority:</strong> {selectedRow.priority}</div>
              <div><strong>Current Status:</strong> {selectedRow.status}</div>
              <div><strong>Progress:</strong> {selectedRow.progress}%</div>
              <div style={{ gridColumn: 'span 2' }}><strong>Updated:</strong> {selectedRow.updatedAt}</div>
            </div>

            {/* Simulated Status Transition Controls */}
            <div>
              <div style={{ fontSize: '0.785rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '8px', opacity: 0.8 }}>
                Simulate Status Transition (In-Memory Demo Only):
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Active', 'In Review', 'Completed', 'Planned'].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => handleSimulateStatusChange(selectedRow.id, st)}
                    className={selectedRow.status === st ? themeClasses.btnPrimary : themeClasses.btnSecondary}
                    style={{ padding: '5px 12px', fontSize: '0.785rem', fontWeight: '700' }}
                  >
                    Set as {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer close action */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setSelectedRow(null)}
                className={themeClasses.btnPrimary}
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              >
                Done Inspecting
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
         DASHBOARD PREFERENCES MODAL
         ========================================================================= */}
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
            className={themeClasses.card}
            style={{
              width: '100%',
              maxWidth: '480px',
              padding: '2rem',
              boxShadow: 'var(--site-shadow-lg, 0 16px 36px rgba(0,0,0,0.3))',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 id="settings-title" style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0 }}>
                Dashboard Preferences
              </h3>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                aria-label="Close preferences"
                style={{ padding: '4px', background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Dense Rows Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Dense Table Rows</div>
                  <div style={{ fontSize: '0.785rem', opacity: 0.75 }}>Reduces row padding for higher scannability</div>
                </div>
                <input
                  type="checkbox"
                  checked={denseRows}
                  onChange={(e) => setDenseRows(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
              </div>

              {/* Show Distribution Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Show Analytics Distribution Bar</div>
                  <div style={{ fontSize: '0.785rem', opacity: 0.75 }}>Renders proportional status breakdown bar</div>
                </div>
                <input
                  type="checkbox"
                  checked={showDistribution}
                  onChange={(e) => setShowDistribution(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
              </div>

              {/* Show Activity Feed Toggle */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Show Recent Activity Log</div>
                  <div style={{ fontSize: '0.785rem', opacity: 0.75 }}>Displays recent component verification events</div>
                </div>
                <input
                  type="checkbox"
                  checked={showActivityFeed}
                  onChange={(e) => setShowActivityFeed(e.target.checked)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className={themeClasses.btnSecondary}
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setSettingsOpen(false);
                  showToast('Dashboard preferences saved locally in browser state.');
                }}
                className={themeClasses.btnPrimary}
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
