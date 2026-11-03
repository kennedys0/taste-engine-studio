import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/shell/Header';
import Footer from '../components/shell/Footer';
import { ThemeProvider } from '../context/ThemeContext';

export default function SiteLayout() {
  const { pathname } = useLocation();

  // Scroll to top instantly on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <ThemeProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
