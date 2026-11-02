import React, { useState, useRef } from 'react';
import { Eye, EyeOff, Upload, Check, AlertCircle } from 'lucide-react';

export default function SpecimenForm({ styleId = 'neo-brutalism' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tier: 'standard',
    notifications: true,
    agreeTerms: false,
    selectedFile: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitFeedback, setSubmitFeedback] = useState(null);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, selectedFile: e.target.files[0].name }));
      setSubmitFeedback({
        type: 'info',
        message: `File "${e.target.files[0].name}" selected locally. (No upload performed in demo).`
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Valid email address is required';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Please acknowledge demo terms';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitFeedback(null);
      // Focus first error field
      if (newErrors.name && nameInputRef.current) nameInputRef.current.focus();
      else if (newErrors.email && emailInputRef.current) emailInputRef.current.focus();
      else if (newErrors.password && passwordInputRef.current) passwordInputRef.current.focus();
      return;
    }

    setErrors({});
    setSubmitFeedback({
      type: 'success',
      message: 'Demo validation passed. No account was accessed or created.'
    });
  };

  // Get input class based on style
  const getInputClass = () => {
    switch (styleId) {
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

  const inputClass = getInputClass();
  const btnClass = getButtonClass();

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        width: '100%',
        maxWidth: '520px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      <div style={{ padding: '8px 12px', backgroundColor: 'rgba(234, 179, 8, 0.15)', border: '1px solid #eab308', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>
        Demo Form — Inputs are validated locally. No credentials or data are stored.
      </div>

      {/* Name */}
      <div>
        <label htmlFor={`name-${styleId}`} style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
          Full Name
        </label>
        <input
          ref={nameInputRef}
          id={`name-${styleId}`}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g. Alex Morgan"
          className={inputClass}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `name-err-${styleId}` : undefined}
        />
        {errors.name && (
          <p id={`name-err-${styleId}`} style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor={`email-${styleId}`} style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
          Work Email
        </label>
        <input
          ref={emailInputRef}
          id={`email-${styleId}`}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="alex@example.com"
          className={inputClass}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? `email-err-${styleId}` : undefined}
        />
        {errors.email && (
          <p id={`email-err-${styleId}`} style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Password with show/hide */}
      <div>
        <label htmlFor={`pass-${styleId}`} style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
          Demo Password
        </label>
        <div style={{ position: 'relative' }}>
          <input
            ref={passwordInputRef}
            id={`pass-${styleId}`}
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Min. 8 characters"
            className={inputClass}
            style={{ paddingRight: '44px' }}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? `pass-err-${styleId}` : undefined}
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
              color: 'inherit',
              opacity: 0.7,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && (
          <p id={`pass-err-${styleId}`} style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>
            {errors.password}
          </p>
        )}
      </div>

      {/* Select tier */}
      <div>
        <label htmlFor={`tier-${styleId}`} style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
          Deployment Scope
        </label>
        <select
          id={`tier-${styleId}`}
          name="tier"
          value={formData.tier}
          onChange={handleInputChange}
          className={inputClass}
          style={{ cursor: 'pointer' }}
        >
          <option value="standard">Standard Web UI (SPA)</option>
          <option value="enterprise">Enterprise Data Console</option>
          <option value="creative">Creative Portfolio / Landing</option>
        </select>
      </div>

      {/* File picker */}
      <div>
        <label htmlFor={`file-${styleId}`} style={{ display: 'block', fontWeight: '700', fontSize: '0.875rem', marginBottom: '0.4rem' }}>
          Sample File Upload (Local Demo)
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label
            htmlFor={`file-${styleId}`}
            className={styleId === 'neo-brutalism' ? 'neo-btn-secondary' : 'mini-btn-secondary'}
            style={{ cursor: 'pointer', padding: '8px 16px', fontSize: '0.875rem' }}
          >
            <Upload size={16} />
            <span>Select File</span>
          </label>
          <input
            id={`file-${styleId}`}
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>
            {formData.selectedFile ? formData.selectedFile : 'No file selected'}
          </span>
        </div>
      </div>

      {/* Switch toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <input
          id={`notif-${styleId}`}
          name="notifications"
          type="checkbox"
          checked={formData.notifications}
          onChange={handleInputChange}
          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
        />
        <label htmlFor={`notif-${styleId}`} style={{ fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer' }}>
          Enable style-aligned motion transitions
        </label>
      </div>

      {/* Terms checkbox */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <input
            id={`terms-${styleId}`}
            name="agreeTerms"
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <label htmlFor={`terms-${styleId}`} style={{ fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer' }}>
            Acknowledge this is a front-end demonstration only
          </label>
        </div>
        {errors.agreeTerms && (
          <p style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: '600', marginTop: '4px' }}>
            {errors.agreeTerms}
          </p>
        )}
      </div>

      {/* Feedback banner */}
      {submitFeedback && (
        <div
          role="status"
          aria-live="polite"
          style={{
            padding: '12px 16px',
            borderRadius: styleId === 'brutalism' ? '0px' : '6px',
            border: submitFeedback.type === 'success' ? '2px solid #10b981' : '2px solid #3b82f6',
            backgroundColor: submitFeedback.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)',
            fontWeight: '700',
            fontSize: '0.9rem',
          }}
        >
          {submitFeedback.message}
        </div>
      )}

      {/* Submit Button */}
      <button type="submit" className={btnClass} style={{ marginTop: '0.5rem' }}>
        Validate Inputs (Demo)
      </button>
    </form>
  );
}
