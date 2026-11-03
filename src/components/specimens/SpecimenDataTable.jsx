import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, ChevronDown, CheckCircle2, AlertCircle, Clock, X } from 'lucide-react';
import { SAMPLE_PROJECTS, CATEGORIES, STATUSES } from '../../data/sampleProjects';

export default function SpecimenDataTable({ styleId = 'neo-brutalism' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' | 'desc'
  const [selectedRow, setSelectedRow] = useState(null);

  const filteredData = useMemo(() => {
    return SAMPLE_PROJECTS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCat && matchesStatus;
    }).sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [searchTerm, selectedCategory, selectedStatus, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedStatus('All');
  };

  // Style-specific styling mappings
  const isEnterprise = styleId === 'enterprise';
  const isBrutal = styleId === 'brutalism';
  const isGlass = styleId === 'glassmorphism';
  const isClay = styleId === 'claymorphism';
  const isTerm = styleId === 'retro-terminal';
  const getPrimaryBtnClass = () => {
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

  const getContainerClass = () => {
    if (isEnterprise) return 'ent-table-container';
    if (isGlass) return 'glass-pane';
    if (isBrutal) return 'brutal-card';
    if (isClay) return 'clay-card';
    if (styleId === 'bento') return 'bento-tile';
    if (styleId === 'skeuomorphism') return 'skeuo-panel';
    if (styleId === 'retro-terminal') return 'term-window';
    return 'neo-card';
  };


  return (
    <div style={{ width: '100%', maxWidth: '960px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Sample Data Disclaimer Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
          padding: '8px 14px',
          backgroundColor: 'rgba(59, 130, 246, 0.12)',
          border: '1px solid #3b82f6',
          borderRadius: isBrutal ? '0px' : '6px',
          fontSize: '0.85rem',
          fontWeight: '700',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <AlertCircle size={16} color="#3b82f6" />
          <span>Sample Dataset — Local Demonstration Fixture ({SAMPLE_PROJECTS.length} records total)</span>
        </div>
        <span style={{ fontSize: '0.8rem', opacity: 0.85 }}>Showing {filteredData.length} matches</span>
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Search */}
        <div style={{ position: 'relative', flex: '1 1 240px', minWidth: '220px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }} />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search sample items by ID, title, or scope..."
            aria-label="Search sample projects"
            style={{
              width: '100%',
              padding: '10px 14px 10px 38px',
              borderRadius: isBrutal ? '0px' : isClay ? '20px' : '6px',
              border: isBrutal ? 'var(--brutal-border)' : isGlass ? '1px solid var(--glass-edge)' : '1px solid currentColor',
              backgroundColor: isGlass ? 'var(--glass-surface)' : 'transparent',
              color: 'inherit',
              fontSize: '0.9rem',
            }}
          />
        </div>

        {/* Category filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label htmlFor="cat-filter" className="sr-only">Category</label>
          <select
            id="cat-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: isBrutal ? '0px' : '6px',
              border: '1px solid currentColor',
              backgroundColor: 'transparent',
              color: 'inherit',
              fontWeight: '600',
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c} style={{ backgroundColor: 'var(--site-card)', color: 'var(--site-ink)' }}>Category: {c}</option>
            ))}
          </select>

          {/* Status filter */}
          <label htmlFor="status-filter" className="sr-only">Status</label>
          <select
            id="status-filter"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: isBrutal ? '0px' : '6px',
              border: '1px solid currentColor',
              backgroundColor: 'transparent',
              color: 'inherit',
              fontWeight: '600',
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s} style={{ backgroundColor: 'var(--site-card)', color: 'var(--site-ink)' }}>Status: {s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div
        className={getContainerClass()}
        style={{
          overflowX: 'auto',
          padding: isBrutal ? '0' : isEnterprise ? '0' : '1.5rem',
        }}
      >
        <table
          className={isEnterprise ? 'ent-table' : ''}
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9rem',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '2px solid currentColor' }}>
              <th
                onClick={() => handleSort('id')}
                style={{ padding: '12px 16px', cursor: 'pointer', fontWeight: '700' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>ID</span>
                  <ArrowUpDown size={14} />
                </div>
              </th>
              <th
                onClick={() => handleSort('name')}
                style={{ padding: '12px 16px', cursor: 'pointer', fontWeight: '700' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>Task Name</span>
                  <ArrowUpDown size={14} />
                </div>
              </th>
              <th style={{ padding: '12px 16px', fontWeight: '700' }}>Category</th>
              <th style={{ padding: '12px 16px', fontWeight: '700' }}>Status</th>
              <th
                onClick={() => handleSort('progress')}
                style={{ padding: '12px 16px', cursor: 'pointer', fontWeight: '700', textAlign: 'right' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                  <span>Progress</span>
                  <ArrowUpDown size={14} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
                  <p style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                    No sample records match your filters
                  </p>
                  <p style={{ opacity: 0.7, marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                    Try adjusting your search query or reset the filter dropdowns.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className={getPrimaryBtnClass()}
                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                  >
                    Reset All Filters
                  </button>
                </td>
              </tr>
            ) : (
              filteredData.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => setSelectedRow(row)}
                  style={{
                    borderBottom: '1px solid rgba(125, 125, 125, 0.2)',
                    cursor: 'pointer',
                    transition: 'background-color 100ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(125, 125, 125, 0.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ padding: '12px 16px', fontFamily: 'monospace', fontWeight: '700' }}>
                    {row.id}
                  </td>
                  <td style={{ padding: '12px 16px', fontWeight: '600' }}>
                    {row.name}
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ fontSize: '0.8rem', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(125, 125, 125, 0.15)' }}>
                      {row.category}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        padding: '3px 8px',
                        borderRadius: '9999px',
                        backgroundColor:
                          row.status === 'Completed' ? 'rgba(16, 185, 129, 0.2)' :
                          row.status === 'In Review' ? 'rgba(245, 158, 11, 0.2)' :
                          row.status === 'Active' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(125, 125, 125, 0.2)',
                        color:
                          row.status === 'Completed' ? '#10b981' :
                          row.status === 'In Review' ? '#f59e0b' :
                          row.status === 'Active' ? '#3b82f6' : 'inherit',
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: '700' }}>
                    {row.progress}%
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Row detail drawer / modal preview */}
      {selectedRow && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-title"
          style={{
            marginTop: '1rem',
            padding: '1.5rem',
            border: '2px solid currentColor',
            borderRadius: isBrutal ? '0px' : '8px',
            backgroundColor: isGlass ? 'var(--glass-surface)' : 'rgba(125, 125, 125, 0.08)',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <div>
              <span style={{ fontFamily: 'monospace', fontWeight: '700', fontSize: '0.85rem' }}>
                {selectedRow.id}
              </span>
              <h4 id="detail-title" style={{ fontSize: '1.15rem', fontWeight: '800', marginTop: '2px' }}>
                {selectedRow.name}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setSelectedRow(null)}
              aria-label="Close detail panel"
              style={{ padding: '4px', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            {selectedRow.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', opacity: 0.85 }}>
            <span><strong>Assignee:</strong> {selectedRow.assignee}</span>
            <span><strong>Priority:</strong> {selectedRow.priority}</span>
            <span><strong>Updated:</strong> {selectedRow.updatedAt}</span>
          </div>
        </div>
      )}
    </div>
  );
}

