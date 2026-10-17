import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, initialInterest = 'General Investment' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: initialInterest,
    message: '',
    agreed: true
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 20, 16, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--primary-green)',
          color: 'var(--bg-light)',
          maxWidth: '640px',
          width: '100%',
          border: '1px solid var(--accent-gold)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
          padding: '44px 48px',
          position: 'relative',
          boxSizing: 'border-box',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--accent-gold)',
            cursor: 'pointer',
            padding: '8px'
          }}
        >
          <X size={24} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '32px 16px' }}>
            <CheckCircle2 size={54} color="var(--accent-gold)" style={{ margin: '0 auto 20px' }} />
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '32px',
                color: 'var(--bg-light)',
                marginBottom: '16px'
              }}
            >
              Enquiry Received
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '28px' }}>
              Thank you, <strong style={{ color: 'var(--accent-gold)' }}>{formData.name || 'valued investor'}</strong>. A senior investment advisor from EAM Bangkok Private Concierge will review your inquiry regarding <em>{formData.interest}</em> and contact you within 24 hours.
            </p>
            <button
              type="button"
              className="btn-gold"
              onClick={handleReset}
              style={{ minWidth: '160px' }}
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--accent-gold)' }} />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)'
                }}
              >
                Private Concierge
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '34px',
                color: 'var(--bg-light)',
                marginBottom: '12px'
              }}
            >
              Make an Enquiry
            </h2>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, opacity: 0.85, marginBottom: '28px' }}>
              Direct private consultation for luxury residential acquisitions, hotel joint ventures, or corporate asset advisory.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '6px' }}>
                  Interest Category
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="luxury-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="Residential - Aestate Villa Krabi" style={{ background: '#1E2229' }}>Residential · Aestate Villa Krabi</option>
                  <option value="Hospitality Investment & Hotel Portfolios" style={{ background: '#1E2229' }}>Hospitality Investment &amp; Hotel Portfolios</option>
                  <option value="Real Estate Development & Asset Management" style={{ background: '#1E2229' }}>Real Estate Development &amp; Asset Management</option>
                  <option value="Commercial & Retail Lease Structuring" style={{ background: '#1E2229' }}>Commercial &amp; Retail Lease Structuring</option>
                  <option value="Asset Repositioning & Disposal Strategy" style={{ background: '#1E2229' }}>Asset Repositioning &amp; Disposal Strategy</option>
                  <option value="General Private Concierge" style={{ background: '#1E2229' }}>General Private Concierge</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Full name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="luxury-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <input
                  type="email"
                  required
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="luxury-input"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="luxury-input"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your requirements or investment criteria... *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="luxury-input"
                  style={{ minHeight: '110px', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', opacity: 0.8 }}>
                <ShieldCheck size={16} color="var(--accent-gold)" />
                <span>Strict privacy and NDA confidentiality guaranteed.</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold"
                style={{
                  marginTop: '8px',
                  padding: '18px',
                  width: '100%',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Submitting...' : 'Send Private Enquiry'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
