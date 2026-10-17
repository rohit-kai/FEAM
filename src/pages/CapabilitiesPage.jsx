import React, { useState } from 'react';
import Header from '../components/Header';
import { CORE_VERTICALS, COMPANY_INFO } from '../data/siteData';
import { ChevronRight, ArrowUpRight, Check } from 'lucide-react';

export default function CapabilitiesPage({ onNavigate, onOpenEnquiry }) {
  const [activeCapId, setActiveCapId] = useState(CORE_VERTICALS[0].id);
  const activeCap = CORE_VERTICALS.find(c => c.id === activeCapId) || CORE_VERTICALS[0];

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
          activePage="capabilities"
          onNavigate={onNavigate}
          onOpenEnquiry={() => onOpenEnquiry('Commercial & Retail Tenancy Opportunities')}
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
            Business Verticals
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
            Core Business Verticals
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '720px',
              opacity: 0.92
            }}
          >
            {COMPANY_INFO.valueStatement}
          </p>
        </div>
      </section>

      {/* Interactive Capabilities Explorer */}
      <section style={{ padding: '96px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {/* Left Nav List of 6 areas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: 'var(--secondary-sage)',
                  marginBottom: '12px'
                }}
              >
                Select Vertical
              </div>

              {CORE_VERTICALS.map((cap, idx) => {
                const isActive = cap.id === activeCap.id;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setActiveCapId(cap.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      padding: '20px 24px',
                      background: isActive ? 'var(--primary-green)' : 'var(--bg-light)',
                      color: isActive ? 'var(--bg-light)' : 'var(--text-dark)',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--primary-green)' : 'rgba(112, 138, 114, 0.25)',
                      borderLeft: isActive ? '4px solid var(--accent-gold)' : '1px solid rgba(112, 138, 114, 0.25)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: isActive ? 'var(--accent-gold)' : 'var(--secondary-sage)', marginBottom: '4px' }}>
                        Vertical 0{idx + 1}
                      </div>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 600 }}>
                        {cap.title}
                      </div>
                    </div>
                    <ChevronRight size={18} color={isActive ? 'var(--accent-gold)' : 'var(--text-muted)'} />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Panel */}
            <div
              style={{
                background: 'var(--bg-light)',
                border: '1px solid rgba(112, 138, 114, 0.3)',
                borderTop: '4px solid var(--accent-gold)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div className="gold-badge" style={{ marginBottom: '16px' }}>
                  <span className="gold-line" />
                  Vertical Scope &amp; Focus
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '34px',
                    color: 'var(--primary-green)',
                    marginBottom: '20px'
                  }}
                >
                  {activeCap.title}
                </h2>

                <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '28px' }}>
                  {activeCap.desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(112, 138, 114, 0.3)', paddingTop: '24px', marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '16px' }}>
                    Operational Highlights &amp; Execution
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                    {activeCap.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-gold)', marginTop: '2px' }}>
                          <Check size={16} strokeWidth={2.5} />
                        </span>
                        <span style={{ fontSize: '14.5px', color: 'var(--text-dark)', lineHeight: 1.5 }}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '24px', borderTop: '1px solid rgba(112, 138, 114, 0.2)' }}>
                <button
                  type="button"
                  className="btn-gold"
                  onClick={() => onOpenEnquiry(activeCap.title)}
                >
                  <span>Inquire Regarding This Vertical</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subpage CTA */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: 'var(--primary-green)', color: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--bg-light)', marginBottom: '16px' }}>
            Explore Joint Venture &amp; Tenancy Opportunities
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '32px' }}>
            We welcome institutional counterparties, prospective tenants, and hospitality partners to connect with our asset managers.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Commercial & Retail Tenancy Opportunities')}
          >
            <span>Contact Our Team</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
