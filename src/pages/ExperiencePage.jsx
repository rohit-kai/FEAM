import React from 'react';
import Header from '../components/Header';
import { KEY_PROJECTS, STRATEGIC_PARTNERS, COMPANY_INFO } from '../data/siteData';
import { ArrowUpRight, ChevronRight, CheckCircle2, Handshake } from 'lucide-react';

export default function ExperiencePage({ onNavigate, onOpenEnquiry }) {
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
          activePage="experience"
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
            Portfolio &amp; Key Projects
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
            Track Record &amp; Asset Deployments
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

      {/* Key Projects Section */}
      <section style={{ padding: '96px 48px', background: '#ffffff', borderBottom: '1px solid rgba(112, 138, 114, 0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
            <div className="gold-badge" style={{ marginBottom: '14px' }}>
              <span className="gold-line" />
              Strategic Portfolio
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Key Projects &amp; Asset Deployments
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Examining real-world execution across commercial hubs, residential communities, land repositioning, and resort hospitality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {KEY_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="card-hover-lift"
                style={{
                  background: 'var(--bg-light)',
                  border: '1px solid rgba(112, 138, 114, 0.25)',
                  borderTop: '4px solid var(--accent-gold)',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '8px' }}>
                    {proj.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--primary-green)', marginBottom: '8px' }}>
                    {proj.name}
                  </h3>

                  <div style={{ fontSize: '13px', color: 'var(--accent-gold-dark)', fontWeight: 600, marginBottom: '6px' }}>
                    {proj.assetClass}
                  </div>

                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    <strong>Location:</strong> {proj.location}
                  </div>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '24px' }}>
                    {proj.profile}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(112, 138, 114, 0.2)', paddingTop: '18px' }}>
                  <div style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--primary-green)', fontWeight: 600, marginBottom: '14px' }}>
                    Structure: {proj.structure}
                  </div>

                  <button
                    type="button"
                    className="btn-gold"
                    onClick={() => onOpenEnquiry(proj.name)}
                    style={{ width: '100%', padding: '12px', fontSize: '12px' }}
                  >
                    <span>Inquire About {proj.name}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners & Institutional Counterparties Section */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
            <div className="gold-badge" style={{ marginBottom: '14px' }}>
              <span className="gold-line" />
              Strategic Partners
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Strategic Partners &amp; Institutional Counterparties
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {STRATEGIC_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(112, 138, 114, 0.25)',
                  borderTop: '4px solid var(--accent-gold)',
                  padding: '36px 30px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '12px' }}>
                  <Handshake size={20} />
                  <span style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>
                    Alliance 0{idx + 1}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--primary-green)', marginBottom: '6px' }}>
                  {partner.name}
                </h3>
                <div style={{ fontSize: '12.5px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '16px' }}>
                  {partner.role}
                </div>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-dark)' }}>
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subpage CTA */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: 'var(--primary-green)', color: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--bg-light)', marginBottom: '16px' }}>
            Connect With Our Investment Team
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '32px' }}>
            {COMPANY_INFO.valueStatement}
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
