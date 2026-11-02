import React from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { isValidStyle, getStyle, ALIAS_MAP } from '../styles/registry';
import StyleNavHeader from '../components/style/StyleNavHeader';
import NotFoundPage from '../pages/NotFoundPage';

export default function StyleLayout() {
  const { style } = useParams();

  // Check aliases first
  if (style && ALIAS_MAP.has(style.toLowerCase())) {
    return <Navigate to={`/${ALIAS_MAP.get(style.toLowerCase())}`} replace />;
  }

  // Reject unknown styles with true 404
  if (!style || !isValidStyle(style.toLowerCase())) {
    return <NotFoundPage requestedPath={`/${style}`} isUnknownStyle={true} />;
  }

  const normalizedId = style.toLowerCase();
  const styleObj = getStyle(normalizedId);

  return (
    <div
      data-taste-style={normalizedId}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - var(--header-height))',
        width: '100%',
      }}
    >
      <StyleNavHeader styleObj={styleObj} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet context={{ styleObj }} />
      </div>
    </div>
  );
}

