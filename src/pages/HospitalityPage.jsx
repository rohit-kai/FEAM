import React, { useState } from 'react';
import Header from '../components/Header';
import { HOSPITALITY_DESTINATIONS } from '../data/siteData';
import { MapPin, Key, Award, ArrowUpRight, ChevronRight, CheckCircle2, ShieldCheck, Waves } from 'lucide-react';

export default function HospitalityPage({ onNavigate, onOpenEnquiry }) {
  const [regionFilter, setRegionFilter] = useState('ALL');
  const [selectedDestination, setSelectedDestination] = useState(HOSPITALITY_DESTINATIONS[0]);

  const filteredDestinations = HOSPITALITY_DESTINATIONS.filter(dest => {
    if (regionFilter === 'ALL') return true;
    if (regionFilter === 'PHUKET') return dest.region === 'Phuket';
    if (regionFilter === 'GULF') return dest.tag === 'Gulf of Thailand';
    if (regionFilter === 'ANDAMAN') return dest.tag === 'Andaman Coast';
    return true;
  });

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
          activePage="hospitality"
          onNavigate={onNavigate}
          onOpenEnquiry={() => onOpenEnquiry('Hospitality Investment & Hotel Portfolios')}
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
            Hospitality Division
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '56px',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--bg-light)',
              maxWidth: '880px',
              marginBottom: '24px'
            }}
          >
            Hotel Investment Through Established Operators
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '740px',
              opacity: 0.92
            }}
          >
            Leveraging decades of real estate mastery, EAM advises and co-invests across 8 premier coastal hotel destinations in partnership with Destination Resorts Group, optimizing asset value, guest satisfaction, and risk-adjusted yield.
          </p>
        </div>
      </section>

      {/* Featured Strategic Partnership Banner */}
      <section style={{ padding: '80px 48px', background: '#ffffff', borderBottom: '1px solid rgba(112, 138, 114, 0.2)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Strategic Alignment
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Collaboration with Destination Resorts Group
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-dark)', marginBottom: '20px' }}>
              EAM’s hospitality platform merges institutional asset ownership with seasoned operational leadership. Through our close strategic relationship with Destination Resorts Group, we identify underperforming or high-potential resort assets, underwrite capital repositioning, and execute transformative operational enhancements.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
              <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '16px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--primary-green)', fontWeight: 600 }}>2,400+</div>
                <div style={{ fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--secondary-sage)', marginTop: '4px' }}>Portfolio Keys</div>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '16px' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--primary-green)', fontWeight: 600 }}>+24%</div>
                <div style={{ fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--secondary-sage)', marginTop: '4px' }}>RevPAR Outperformance</div>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-elevated)' }}>
            <img
              src="/assets/resort-phuket.jpg"
              alt="Destination resort in Phuket with sunset over the infinity pool and beachfront"
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(0deg, rgba(15,42,18,0.9) 0%, transparent 100%)',
                padding: '24px',
                color: '#fff'
              }}
            >
              <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                Andaman Flagship Property
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', marginTop: '4px' }}>
                Phuket Beachfront Resort &amp; Lagoon Villas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Coastal Destinations Explorer */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', marginBottom: '40px' }}>
            <div>
              <div className="gold-badge" style={{ marginBottom: '14px' }}>
                <span className="gold-line" />
                Portfolio Exposure
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
                8 Coastal Hotel Destinations
              </h2>
            </div>

            {/* Filter buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'ALL', label: 'All Destinations (8)' },
                { id: 'PHUKET', label: 'Phuket (4)' },
                { id: 'GULF', label: 'Gulf of Thailand (3)' },
                { id: 'ANDAMAN', label: 'Andaman Coast (5)' }
              ].map(btn => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setRegionFilter(btn.id)}
                  style={{
                    padding: '10px 18px',
                    fontSize: '12px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: regionFilter === btn.id ? 'var(--primary-green)' : '#fff',
                    color: regionFilter === btn.id ? 'var(--bg-light)' : 'var(--text-dark)',
                    border: '1px solid',
                    borderColor: regionFilter === btn.id ? 'var(--primary-green)' : 'rgba(112, 138, 114, 0.3)'
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Destination Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {filteredDestinations.map(dest => {
              const isSelected = selectedDestination.id === dest.id;
              return (
                <div
                  key={dest.id}
                  className="card-hover-lift"
                  onClick={() => setSelectedDestination(dest)}
                  style={{
                    background: '#ffffff',
                    border: isSelected ? '2px solid var(--accent-gold)' : '1px solid rgba(112, 138, 114, 0.25)',
                    borderTop: '4px solid var(--accent-gold)',
                    padding: '32px 28px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isSelected ? 'var(--shadow-gold)' : 'var(--shadow-subtle)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>
                        {dest.tag}
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-gold-dark)' }}>
                        {dest.keys} Keys
                      </span>
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--primary-green)', marginBottom: '8px' }}>
                      {dest.name}
                    </h3>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '14px' }}>
                      {dest.type} · {dest.region}
                    </div>
                    <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                      {dest.desc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {dest.features.map((f, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '11px',
                            background: 'var(--bg-light)',
                            padding: '4px 8px',
                            color: 'var(--text-dark)',
                            border: '1px solid rgba(112, 138, 114, 0.2)'
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenEnquiry(`Hospitality Acquisition / Joint Venture - ${dest.name}`);
                      }}
                      style={{
                        width: '100%',
                        padding: '12px',
                        background: 'transparent',
                        border: '1px solid var(--accent-gold)',
                        color: 'var(--accent-gold-dark)',
                        fontSize: '12px',
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Inquire Portfolio Specs</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Hospitality Expertise Section */}
      <section style={{ padding: '96px 48px', background: 'var(--primary-green)', color: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <div className="gold-badge-dark" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Specialized Underwriting
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--bg-light)' }}>
              Core Hospitality Advisory &amp; Operations
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              {
                title: 'Hotel Investment Structuring',
                desc: 'Tailored co-investment frameworks, equity syndication, debt advisory, and cross-border capital solutions for single-asset or portfolio acquisitions.'
              },
              {
                title: 'Asset Management & Repositioning',
                desc: 'Active asset stewardship, capital expenditure planning, operational audits, and repositioning legacy assets into premium branded lifestyle resorts.'
              },
              {
                title: 'Branding & Operational Enhancement',
                desc: 'Alignment with international hotel flags or distinctive boutique identities, driving higher ADR, direct booking channels, and guest loyalty.'
              },
              {
                title: 'Financing & Capital Stacking',
                desc: 'Optimizing debt-to-equity ratios through preferred banking partnerships, mezzanine facilities, and tax-efficient asset holding vehicles.'
              },
              {
                title: 'Acquisitions & Divestments',
                desc: 'Proprietary deal sourcing across Thailand’s coastal corridors, rigorous technical due diligence, and discreet institutional divestments.'
              },
              {
                title: 'Strategic Partnerships',
                desc: 'Forging enduring joint ventures between family offices, institutional private equity, and leading operators like Destination Resorts Group.'
              }
            ].map((exp, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(191, 153, 68, 0.3)',
                  borderTop: '3px solid var(--accent-gold)',
                  padding: '36px 30px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.18em', color: 'var(--accent-gold)', marginBottom: '8px' }}>
                  EXPERTISE 0{idx + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--bg-light)', marginBottom: '14px' }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, opacity: 0.88 }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: '#ffffff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            Explore Hotel Co-Investment Opportunities
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
            We invite qualified family offices, institutional investors, and hospitality developers to explore current acquisition pipelines and coastal hotel partnerships.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Hospitality Investment & Hotel Portfolios')}
          >
            <span>Request Hospitality Portfolio Deck</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
