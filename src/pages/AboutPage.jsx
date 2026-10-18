import React from 'react';
import Header from '../components/Header';
import ExecutiveLeadership from '../components/ExecutiveLeadership';
import { COMPANY_INFO, CORE_VALUES, MISSION_PILLARS, LEADERSHIP } from '../data/siteData';
import { Mail, Check, ChevronRight } from 'lucide-react';

export default function AboutPage({ onNavigate, onOpenEnquiry }) {
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
          activePage="about"
          onNavigate={onNavigate}
          onOpenEnquiry={() => onOpenEnquiry('Institutional & Private Co-Investment')}
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
            About Us &amp; Heritage
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
            {COMPANY_INFO.name}
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '720px',
              opacity: 0.92
            }}
          >
            {COMPANY_INFO.tagline}
          </p>
        </div>
      </section>

      {/* Founding & Roots and Strategic Evolution */}
      <section style={{ padding: '96px 48px', background: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Founding &amp; Roots
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '38px',
                lineHeight: 1.25,
                color: 'var(--text-dark)',
                marginBottom: '20px'
              }}
            >
              Established 2004 in Bangkok
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '20px' }}>
              Founded in 2004 by Supakit Eimsamank, rooted in decades of family-office real estate development, asset administration, property enhancement, and long-term investment operations.
            </p>
            <div style={{ borderTop: '1px solid rgba(112, 138, 114, 0.25)', paddingTop: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '8px' }}>
                Strategic Evolution
              </div>
              <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                Transitioned from managing private family holdings into a multi-sector platform covering retail centers, residential developments, hotel investments, and human capital solutions.
              </p>
            </div>
          </div>

          {/* Corporate Mission Box */}
          <div
            style={{
              backgroundColor: 'var(--bg-light)',
              border: '1px solid rgba(112, 138, 114, 0.3)',
              borderTop: '4px solid var(--accent-gold)',
              padding: '44px 36px'
            }}
          >
            <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', fontWeight: 600, marginBottom: '8px' }}>
              Corporate Mission
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '26px',
                color: 'var(--primary-green)',
                marginBottom: '20px'
              }}
            >
              Creating sustainable value through strategic growth and asset excellence.
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {MISSION_PILLARS.map((p, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>0{idx + 1}</span>
                  <div>
                    <h4 style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '2px' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Governance Section */}
      <ExecutiveLeadership onOpenEnquiry={onOpenEnquiry} />

      {/* Core Values Section */}
      <section style={{ padding: '96px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <div className="gold-badge" style={{ justifyContent: 'center', marginBottom: '14px' }}>
              <span className="gold-line" />
              Foundational Principles
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Core Values
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '24px' }}>
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="card-hover-lift"
                style={{
                  background: 'var(--bg-light)',
                  padding: '32px 26px',
                  borderTop: '3px solid var(--accent-gold)'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--primary-green)', marginBottom: '10px' }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subpage CTA */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: 'var(--primary-green)', color: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--bg-light)', marginBottom: '16px' }}>
            Partner With {COMPANY_INFO.name}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '32px' }}>
            Delivering long-term asset value creation through practical operational expertise, disciplined property stewardship, and institutional investment structuring.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Institutional & Private Co-Investment')}
          >
            <span>Contact Our Team</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
