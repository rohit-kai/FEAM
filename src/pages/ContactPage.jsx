import React, { useState } from 'react';
import Header from '../components/Header';
import { COMPANY_INFO, INQUIRY_CATEGORIES } from '../data/siteData';
import { Mail, MapPin, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

export default function ContactPage({ onNavigate, onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: INQUIRY_CATEGORIES[0],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-light)' }}>
      {/* Subpage Header Banner */}
      <section
        style={{
          backgroundColor: 'var(--primary-green)',
          color: 'var(--bg-light)',
          paddingBottom: '80px',
          position: 'relative'
        }}
      >
        <Header
          activePage="contact"
          onNavigate={onNavigate}
          onOpenEnquiry={() => onOpenEnquiry(INQUIRY_CATEGORIES[0])}
          isDarkHeader={true}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '60px 48px 0',
            boxSizing: 'border-box'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '16px'
            }}
          >
            <span style={{ width: '32px', height: '1px', background: 'var(--accent-gold)' }} />
            Contact &amp; Investor Relations
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '54px',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--bg-light)',
              maxWidth: '850px',
              marginBottom: '20px'
            }}
          >
            Contact Our Team
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '740px',
              opacity: 0.92
            }}
          >
            {COMPANY_INFO.valueStatement}
          </p>
        </div>
      </section>

      {/* Main Office Details & Form Section */}
      <section style={{ padding: '96px 48px', background: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '64px'
          }}
        >
          {/* Office Details */}
          <div>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Corporate Headquarters
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text-dark)', marginBottom: '16px' }}>
              {COMPANY_INFO.name}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '36px' }}>
              {COMPANY_INFO.tagline}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(191,153,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>Direct Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontSize: '17px', fontWeight: 600, color: 'var(--primary-green)', marginTop: '4px', display: 'block' }}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(191,153,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>Office Location</div>
                  <div style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text-dark)', marginTop: '4px' }}>
                    {COMPANY_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Categories Overview */}
            <div style={{ marginTop: '48px', padding: '28px', background: 'var(--bg-light)', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--primary-green)', marginBottom: '12px' }}>
                Inquiry Categories
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {INQUIRY_CATEGORIES.map((cat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-dark)' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>•</span>
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form with Glassmorphism */}
          <div
            style={{
              background: 'rgba(14, 77, 68, 0.88)',
              color: 'var(--bg-light)',
              padding: '48px 44px',
              border: '1px solid rgba(191, 153, 68, 0.4)',
              borderTop: '1px solid rgba(255, 255, 255, 0.3)',
              borderBottom: '4px solid var(--accent-gold)',
              borderRadius: '8px',
              backdropFilter: 'blur(32px) saturate(190%)',
              WebkitBackdropFilter: 'blur(32px) saturate(190%)',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <CheckCircle2 size={54} color="var(--accent-gold)" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '30px', color: 'var(--bg-light)', marginBottom: '16px' }}>
                  Inquiry Dispatched
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '24px' }}>
                  Thank you, <strong style={{ color: 'var(--accent-gold)' }}>{formData.name}</strong>. A member of {COMPANY_INFO.name} will respond to your inquiry regarding <em>{formData.category}</em> within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn-gold"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="gold-badge-dark" style={{ marginBottom: '14px' }}>
                  <span className="gold-line" />
                  Investor Inquiries
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--bg-light)', marginBottom: '12px' }}>
                  Contact Our Team
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.6, opacity: 0.88, marginBottom: '28px' }}>
                  Please select your inquiry category and our team will get back to you directly.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '6px' }}>
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="luxury-input"
                      style={{ cursor: 'pointer' }}
                    >
                      {INQUIRY_CATEGORIES.map((cat, idx) => (
                        <option key={idx} value={cat} style={{ background: '#0E4D44' }}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Full name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="luxury-input"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="luxury-input"
                  />

                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify your project or criteria... *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="luxury-input"
                    style={{ minHeight: '120px', resize: 'vertical' }}
                  />

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      marginTop: '10px',
                      padding: '18px',
                      width: '100%'
                    }}
                  >
                    Send Inquiry
                  </button>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>
                    Discreet fiduciary management. All discussions covered by NDA.
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
