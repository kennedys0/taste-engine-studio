import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AuthDemoPage from '../src/pages/AuthDemoPage';
import { getStyle } from '../src/styles/registry';

describe('Auth Simulation Page & Truthful Contract', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const renderWithContext = (styleId = 'neo-brutalism') => {
    const styleObj = getStyle(styleId);
    return render(
      <MemoryRouter initialEntries={[`/${styleId}/login`]}>
        <Routes>
          <Route path="/:style/login" element={<AuthDemoPage />} />
        </Routes>
      </MemoryRouter>,
      {
        // Provide mock outlet context
        wrapper: ({ children }) => {
          return React.cloneElement(children, {}, children.props.children);
        },
      }
    );
  };

  it('renders auth simulation with explicit demo disclaimer', () => {
    const styleObj = getStyle('glassmorphism');
    render(
      <MemoryRouter>
        <AuthDemoPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/demo only — no account is accessed, created, or transmitted\./i)
    ).toBeInTheDocument();
  });

  it('validates empty inputs on submit and displays inline errors', () => {
    render(
      <MemoryRouter>
        <AuthDemoPage />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /sign in \(demo\)/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  it('shows demo-only confirmation on valid login and does NOT persist credentials', async () => {
    render(
      <MemoryRouter>
        <AuthDemoPage />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText(/demo\.user@example\.com/i);
    const passInput = screen.getByPlaceholderText(/at least 8 characters/i);
    const submitBtn = screen.getByRole('button', { name: /sign in \(demo\)/i });

    fireEvent.change(emailInput, { target: { value: 'tester@example.com' } });
    fireEvent.change(passInput, { target: { value: 'password123' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/demo validation passed\. no account was accessed\./i)
      ).toBeInTheDocument();
    });

    // Verify localStorage has no stored credentials
    expect(localStorage.getItem('password')).toBeNull();
    expect(localStorage.getItem('user')).toBeNull();
  });

  it('shows truthful disclaimer when submitting reset password', async () => {
    render(
      <MemoryRouter>
        <AuthDemoPage />
      </MemoryRouter>
    );

    // Switch to forgot password
    const forgotBtn = screen.getByRole('button', { name: /forgot password\?/i });
    fireEvent.click(forgotBtn);

    const emailInput = screen.getByPlaceholderText(/demo\.user@example\.com/i);
    const submitBtn = screen.getByRole('button', { name: /send reset link \(demo\)/i });

    fireEvent.change(emailInput, { target: { value: 'tester@example.com' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(
        screen.getByText(/demo only\. no password reset email was sent\./i)
      ).toBeInTheDocument();
    });
  });
});

