import React from 'react';
import Logo from './Logo';
import { Mail, Clock, MapPin, Award, ShieldCheck, Leaf } from 'lucide-react';

export default function Footer({ onNavigate, onOpenEnquiry }) {
  const handleNav = (pageId, sectionId = null) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer
      style={{
        background: 'color-mix(in srgb, var(--primary-green) 68%, #000000)',
        color: 'var(--bg-light)',
        padding: '88px 64px 32px',
        borderTop: '1px solid rgba(191, 153, 68, 0.25)',
        position: 'relative'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '56px 48px',
          maxWidth: '1380px',
          margin: '0 auto'
        }}
      >
        {/* Column 1: Brand & Credentials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Logo variant="light" height={68} onClick={() => handleNav('home')} />
          <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.8, opacity: 0.9 }}>
            Founded in 2004, EAM Bangkok Co., Ltd. is an integrated real estate business spanning development,
            property management, hospitality investment and residential projects.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'flex-start',
                padding: '10px 18px',
                border: '1px solid rgba(191,153,68,.35)',
                borderRadius: '999px',
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              <Award size={16} strokeWidth={1.5} />
              Forbes Travel Four-Star
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'flex-start',
                padding: '10px 18px',
                border: '1px solid rgba(191,153,68,.35)',
                borderRadius: '999px',
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              <ShieldCheck size={16} strokeWidth={1.5} />
              ISO 9001 Certified
            </span>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'flex-start',
                padding: '10px 18px',
                border: '1px solid rgba(191,153,68,.35)',
                borderRadius: '999px',
                fontSize: '12px',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)'
              }}
            >
              <Leaf size={16} strokeWidth={1.5} />
              Green Key Eco-Rating
            </span>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '8px'
            }}
          >
            Navigation
          </div>
          <button
            type="button"
            onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, fontSize: '15px', cursor: 'pointer' }}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleNav('about')}
            style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, fontSize: '15px', cursor: 'pointer' }}
          >
            About the Group
          </button>
          <button
            type="button"
            onClick={() => handleNav('capabilities')}
            style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, fontSize: '15px', cursor: 'pointer' }}
          >
            Capabilities &amp; What We Do
          </button>
          <button
            type="button"
            onClick={() => handleNav('hospitality')}
            style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, fontSize: '15px', cursor: 'pointer' }}
          >
            Hospitality Portfolio
          </button>
          <button
            type="button"
            onClick={() => handleNav('residential')}
            style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, fontSize: '15px', cursor: 'pointer' }}
          >
            Residential · Aestate Villa
          </button>
          <button
            type="button"
            onClick={() => handleNav('experience')}
            style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, fontSize: '15px', cursor: 'pointer' }}
          >
            Experience &amp; Track Record
          </button>
          <button
            type="button"
            onClick={() => handleNav('contact')}
            style={{ background: 'none', border: 'none', color: 'inherit', textAlign: 'left', padding: 0, fontSize: '15px', cursor: 'pointer' }}
          >
            Contact &amp; Inquiries
          </button>
        </nav>

        {/* Column 3: Direct Contact Information */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)'
            }}
          >
            Direct Contact
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
              <Mail size={18} strokeWidth={1.5} />
            </span>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '4px' }}>
                Email
              </div>
              <a href="mailto:Contact@aeminvestment.com" style={{ fontSize: '15px', color: 'inherit' }}>
                Contact@aeminvestment.com
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
              <Clock size={18} strokeWidth={1.5} />
            </span>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '4px' }}>
                Concierge Hours
              </div>
              <div style={{ fontSize: '15px' }}>
                Mon – Sat: 09:00 – 18:00 ICT (GMT+7)
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
              <MapPin size={18} strokeWidth={1.5} />
            </span>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '4px' }}>
                Head Office
              </div>
              <div style={{ fontSize: '15px', lineHeight: 1.6 }}>
                Sathorn Square Office Tower, 98 North Sathorn Rd, Silom, Bang Rak, Bangkok 10500
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid rgba(191,153,68,.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)',
                fontSize: '13px',
                fontWeight: 600
              }}
            >
              in
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid rgba(191,153,68,.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)'
              }}
            >
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" stroke="currentColor" strokeWidth="1.4" fill="none">
                <rect x="2.5" y="2.5" width="13" height="13" rx="4" />
                <circle cx="9" cy="9" r="3" />
              </svg>
            </a>
            <a
              href="mailto:Contact@aeminvestment.com"
              aria-label="Email"
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid rgba(191,153,68,.4)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)'
              }}
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Sub-footer copyright */}
      <div
        style={{
          marginTop: '64px',
          paddingTop: '28px',
          borderTop: '1px solid rgba(249,248,246,.15)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '13px',
          opacity: 0.85,
          maxWidth: '1380px',
          margin: '64px auto 0'
        }}
      >
        <span>&copy; 2026 EAM Estate &amp; Hospitality Investment. All rights reserved.</span>
        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '28px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms & Conditions: EAM Group adheres to institutional governance standards."); }}>Terms &amp; Conditions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: All client dialogues and investor data remain strictly confidential under NDA."); }}>Privacy Policy</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Cookie Preferences: Privacy-first analytics only."); }}>Cookie Preferences</a>
        </span>
      </div>
    </footer>
  );
}
