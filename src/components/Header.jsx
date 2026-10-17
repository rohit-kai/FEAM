import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'residential', label: 'Residential' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export default function Header({ activePage, onNavigate, onOpenEnquiry, isDarkHeader = true }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navTextColor = isDarkHeader ? '#F9F8F6' : 'var(--text-dark)';
  const activeColor = 'var(--accent-gold)';

  return (
    <>
      <header
        style={{
          position: 'relative',
          zIndex: 40,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          padding: '28px 48px',
          width: '100%',
          boxSizing: 'border-box',
          backgroundColor: isDarkHeader ? 'transparent' : '#FFFFFF',
          borderBottom: isDarkHeader ? 'none' : '1px solid rgba(112, 138, 114, 0.2)'
        }}
      >
        {/* Brand Logo */}
        <Logo
          variant={isDarkHeader ? 'light' : 'dark'}
          height={72}
          onClick={() => handleNavClick('home')}
        />

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '32px',
            fontSize: '13px',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            fontWeight: 500
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.filter(item => item.id !== 'contact').map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 0',
                  color: isActive ? activeColor : navTextColor,
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  position: 'relative',
                  opacity: isActive ? 1 : 0.88,
                  transition: 'opacity 0.2s, color 0.2s'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: 'var(--accent-gold)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="btn-gold"
            style={{
              padding: '14px 26px',
              fontSize: '12.5px'
            }}
          >
            <span>Make an Enquiry</span>
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(191, 153, 68, 0.4)',
              padding: '10px',
              color: isDarkHeader ? '#F9F8F6' : 'var(--text-dark)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '80px',
            backgroundColor: 'var(--bg-dark)',
            color: 'var(--bg-light)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 28px',
            gap: '24px'
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  color: isActive ? 'var(--accent-gold)' : 'var(--bg-light)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  fontWeight: 500,
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="btn-gold"
            style={{ marginTop: '20px', width: '100%' }}
          >
            Make an Enquiry
          </button>
        </div>
      )}

      {/* Responsive media style for header */}
      <style>{`
        @media (max-width: 980px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
