import React, { useState } from 'react';
import Header from '../components/Header';
import { CAPABILITIES } from '../data/siteData';
import { Check, ChevronRight, ArrowUpRight, Layers, Target, TrendingUp, Shield } from 'lucide-react';

export default function CapabilitiesPage({ onNavigate, onOpenEnquiry }) {
  const [activeCapId, setActiveCapId] = useState(CAPABILITIES[0].id);
  const activeCap = CAPABILITIES.find(c => c.id === activeCapId) || CAPABILITIES[0];

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
          onOpenEnquiry={() => onOpenEnquiry('Capabilities & Advisory')}
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
            Institutional Capabilities
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '56px',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--bg-light)',
              maxWidth: '850px',
              marginBottom: '24px'
            }}
          >
            Seven Areas, One Long-Term Focus
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '720px',
              opacity: 0.92
            }}
          >
            From high-value land development and commercial lease structuring to luxury resort acquisitions and workforce solutions, EAM deploys integrated capabilities across the property asset lifecycle.
          </p>
        </div>
      </section>

      {/* Interactive Capabilities Explorer */}
      <section style={{ padding: '96px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {/* Left Nav List of 7 areas */}
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
                Select Discipline
              </div>

              {CAPABILITIES.map((cap, idx) => {
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
                        Area 0{idx + 1}
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
                  Discipline Overview
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

                <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '24px' }}>
                  {activeCap.details}
                </p>

                <div style={{ borderTop: '1px solid rgba(112, 138, 114, 0.3)', paddingTop: '24px', marginBottom: '32px' }}>
                  <h4 style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '16px' }}>
                    Key Focus &amp; Value Deliverables
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
                  <span>Request Advisory Proposal</span>
                  <ArrowUpRight size={16} />
                </button>
                {activeCap.id === 'residential' && (
                  <button
                    type="button"
                    className="btn-outline-gold"
                    style={{ borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}
                    onClick={() => onNavigate('residential')}
                  >
                    <span>View Aestate Villa Project</span>
                  </button>
                )}
                {activeCap.id === 'hospitality' && (
                  <button
                    type="button"
                    className="btn-outline-gold"
                    style={{ borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}
                    onClick={() => onNavigate('hospitality')}
                  >
                    <span>View Hotel Destinations</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Execution Lifecycle Diagram */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
            <div className="gold-badge" style={{ marginBottom: '16px', justifyContent: 'center' }}>
              <span className="gold-line" />
              Operational Framework
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              The EAM Asset Lifecycle
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '12px' }}>
              A disciplined, risk-managed path from identification to generational yield creation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#fff', padding: '36px 28px', borderTop: '3px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.2em', color: 'var(--secondary-sage)', marginBottom: '8px' }}>
                STAGE 01
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--primary-green)', marginBottom: '12px' }}>
                Sourcing &amp; Due Diligence
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                Rigorous land titling verification, environmental assessments, zoning analysis, and proprietary off-market origination.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '36px 28px', borderTop: '3px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.2em', color: 'var(--secondary-sage)', marginBottom: '8px' }}>
                STAGE 02
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--primary-green)', marginBottom: '12px' }}>
                Structuring &amp; Underwriting
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                30-year registered lease architectures, tax-efficient JV syndications, debt optimization, and risk-adjusted return underwriting.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '36px 28px', borderTop: '3px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.2em', color: 'var(--secondary-sage)', marginBottom: '8px' }}>
                STAGE 03
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--primary-green)', marginBottom: '12px' }}>
                Value Creation &amp; Ops
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                World-class architectural execution, institutional operator collaboration with Destination Resorts Group, and active yield enhancement.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '36px 28px', borderTop: '3px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.2em', color: 'var(--secondary-sage)', marginBottom: '8px' }}>
                STAGE 04
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--primary-green)', marginBottom: '12px' }}>
                Stewardship &amp; Exit
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                Generational holding structures, strategic portfolio refinancing, or discreet private disposition timed to market peak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: '#ffffff', borderTop: '1px solid rgba(112,138,114,0.2)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            Retain EAM as Your Strategic Advisor
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
            Connect with our executive principals for corporate proposals, hospitality underwriting, or asset management mandate discussions.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Capabilities & Advisory')}
          >
            <span>Initiate Advisory Dialogue</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
