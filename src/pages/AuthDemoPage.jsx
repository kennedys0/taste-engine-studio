import React, { useState, useRef } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import {
  Lock,
  Eye,
  EyeOff,
  ShieldAlert,
  CheckCircle2,
  ArrowLeft,
  KeyRound,
  UserPlus,
  LogIn,
} from 'lucide-react';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getStyle } from '../styles/registry';

export default function AuthDemoPage() {
  const context = useOutletContext() || {};
  const styleObj = context.styleObj || getStyle('neo-brutalism');

  usePageMetadata(
    `${styleObj.label} Auth Simulation — Taste Engine`,
    `Full-page authentication preview in ${styleObj.label} style with local client-side validation and explicit demo disclaimers.`
  );

  const [authView, setAuthView] = useState('login'); // 'login' | 'signup' | 'reset'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim() || !email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (authView !== 'reset') {
      if (!password || password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
    }

    if (authView === 'signup') {
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setConfirmationMessage(null);
      // Focus first error
      if (newErrors.email && emailRef.current) emailRef.current.focus();
      else if (newErrors.password && passwordRef.current) passwordRef.current.focus();
      else if (newErrors.confirmPassword && confirmPasswordRef.current) confirmPasswordRef.current.focus();
      return;
    }

    setErrors({});
    if (authView === 'login') {
      setConfirmationMessage('Demo validation passed. No account was accessed.');
    } else if (authView === 'signup') {
      setConfirmationMessage('Demo validation passed. No account was created.');
    } else if (authView === 'reset') {
      setConfirmationMessage('Demo only. No password reset email was sent.');
    }
  };

  const switchView = (newView) => {
    setAuthView(newView);
    setErrors({});
    setConfirmationMessage(null);
  };

  // Get style-specific classes
  const getInputClass = () => {
    switch (styleObj.id) {
      case 'glassmorphism': return 'glass-input';
      case 'claymorphism': return 'clay-input-well';
      case 'brutalism': return 'brutal-input';
      case 'minimalism': return 'mini-input';
      case 'swiss-editorial': return 'swiss-input';
      case 'bento': return 'bento-input';
      case 'skeuomorphism': return 'skeuo-well';
      case 'retro-terminal': return 'term-input';
      case 'enterprise': return 'ent-input';
      default: return 'neo-input';
    }
  };

  const getButtonClass = () => {
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

  const inputClass = getInputClass();
  const btnClass = getButtonClass();
  const cardClass = getCardClass();

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        minHeight: 'calc(100vh - 140px)',
      }}
    >
      {/* Return link */}
      <div style={{ width: '100%', maxWidth: '440px', marginBottom: '1.25rem' }}>
        <Link
          to={`/${styleObj.id}/playground`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.875rem',
            fontWeight: '700',
            textDecoration: 'none',
            color: 'inherit',
            opacity: 0.85,
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to {styleObj.label} Playground</span>
        </Link>
      </div>

      {/* Main Auth Card */}
      <div
        className={cardClass}
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '2.5rem 2rem',
          position: 'relative',
        }}
      >
        {/* Explicit Demo Disclaimer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: 'rgba(234, 179, 8, 0.15)',
            border: '1px solid #eab308',
            borderRadius: styleObj.id === 'brutalism' ? '0px' : '6px',
            fontSize: '0.8rem',
            fontWeight: '700',
            marginBottom: '1.75rem',
          }}
        >
          <ShieldAlert size={16} color="#eab308" style={{ flexShrink: 0 }} />
          <span>Demo only — No account is accessed, created, or transmitted.</span>
        </div>

        {/* Auth View Heading */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.5rem' }}>
            {authView === 'login' && 'Sign in to Demo'}
            {authView === 'signup' && 'Create Demo Account'}
            {authView === 'reset' && 'Reset Demo Password'}
          </h1>
          <p style={{ fontSize: '0.9rem', opacity: 0.85 }}>
            Rendered in authentic <strong>{styleObj.label}</strong> style.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAuthSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Email */}
          <div>
            <label htmlFor="auth-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem' }}>
              Work Email Address
            </label>
            <input
              ref={emailRef}
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
              }}
              placeholder="demo.user@example.com"
              className={inputClass}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'auth-email-err' : undefined}
            />
            {errors.email && (
              <p id="auth-email-err" style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Password (for login and signup) */}
          {authView !== 'reset' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label htmlFor="auth-pass" style={{ fontSize: '0.85rem', fontWeight: '700' }}>
                  Password
                </label>
                {authView === 'login' && (
                  <button
                    type="button"
                    onClick={() => switchView('reset')}
                    style={{ fontSize: '0.8rem', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  ref={passwordRef}
                  id="auth-pass"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
                  }}
                  placeholder="At least 8 characters"
                  className={inputClass}
                  style={{ paddingRight: '42px' }}
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? 'auth-pass-err' : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.7,
                    cursor: 'pointer',
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p id="auth-pass-err" style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>
                  {errors.password}
                </p>
              )}
            </div>
          )}

          {/* Confirm Password (for signup) */}
          {authView === 'signup' && (
            <div>
              <label htmlFor="auth-confirm" style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.4rem' }}>
                Confirm Password
              </label>
              <input
                ref={confirmPasswordRef}
                id="auth-confirm"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: null }));
                }}
                placeholder="Repeat password"
                className={inputClass}
                aria-invalid={!!errors.confirmPassword}
                aria-describedby={errors.confirmPassword ? 'auth-confirm-err' : undefined}
              />
              {errors.confirmPassword && (
                <p id="auth-confirm-err" style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}

          {/* Remember me (login only) */}
          {authView === 'login' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input
                id="auth-remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
              />
              <label htmlFor="auth-remember" style={{ fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>
                Remember me on this browser (local state only)
              </label>
            </div>
          )}

          {/* Confirmation Message */}
          {confirmationMessage && (
            <div
              role="status"
              aria-live="polite"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1.5px solid #10b981',
                borderRadius: '6px',
                color: '#10b981',
                fontWeight: '700',
                fontSize: '0.85rem',
              }}
            >
              <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
              <span>{confirmationMessage}</span>
            </div>
          )}

          {/* Submit */}
          <button type="submit" className={btnClass} style={{ width: '100%', marginTop: '0.5rem' }}>
            {authView === 'login' && 'Sign In (Demo)'}
            {authView === 'signup' && 'Create Account (Demo)'}
            {authView === 'reset' && 'Send Reset Link (Demo)'}
          </button>
        </form>

        {/* View Switchers */}
        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(125, 125, 125, 0.2)', textAlign: 'center', fontSize: '0.875rem' }}>
          {authView === 'login' && (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => switchView('signup')}
                style={{ fontWeight: '800', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Sign up
              </button>
            </p>
          )}

          {authView === 'signup' && (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => switchView('login')}
                style={{ fontWeight: '800', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Sign in
              </button>
            </p>
          )}

          {authView === 'reset' && (
            <p>
              Remember your password?{' '}
              <button
                type="button"
                onClick={() => switchView('login')}
                style={{ fontWeight: '800', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Return to sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
