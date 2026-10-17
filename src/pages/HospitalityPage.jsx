import React, { useState } from 'react';
import Header from '../components/Header';
import { RESORT_DESTINATIONS, STRATEGIC_PARTNERS } from '../data/siteData';
import { MapPin, ArrowUpRight, ChevronRight, Check } from 'lucide-react';

export default function HospitalityPage({ onNavigate, onOpenEnquiry }) {
  const [selectedResort, setSelectedResort] = useState(RESORT_DESTINATIONS[0]);
  const destPartner = STRATEGIC_PARTNERS.find(p => p.name === 'Destination Resorts Group');

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
          onOpenEnquiry={() => onOpenEnquiry('Hospitality Advisory & Asset Management')}
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
            Hospitality Investment &amp; Fund Raising
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '54px',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--bg-light)',
              maxWidth: '880px',
              marginBottom: '20px'
            }}
          >
            Hospitality Footprint &amp; Resort Destinations
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '740px',
              opacity: 0.92
            }}
          >
            Capital sourcing, hotel investment structuring, brand repositioning, asset operations, and hotel acquisition/divestment advisory across prime resort markets in Thailand.
          </p>
        </div>
      </section>

      {/* Destination Resorts Group Alliance Section */}
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
              Strategic Alliance
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text-dark)', marginBottom: '18px' }}>
              Destination Resorts Group
            </h2>
            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '16px' }}>
              Hospitality Operator &amp; Co-Investment Alliance
            </div>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-dark)', marginBottom: '24px' }}>
              {destPartner?.desc || 'Collaborative alliance covering hotel investment structuring, capital raising, hospitality repositioning, and operational enhancement across Thailand’s resort destinations.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Hotel Investment Structuring & Underwriting',
                'Institutional Capital Sourcing & Co-Investment',
                'Hospitality Brand Repositioning & Upgrades',
                'Operational Performance & RevPAR Optimization',
                'Hotel Acquisition & Divestment Advisory'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Check size={16} color="var(--accent-gold)" />
                  <span style={{ fontSize: '14.5px', color: 'var(--text-dark)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-elevated)' }}>
            <img
              src="/assets/resort-phuket.jpg"
              alt="Prime coastal resort destination"
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Prime Resort Markets Explorer */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <div className="gold-badge" style={{ marginBottom: '14px' }}>
              <span className="gold-line" />
              Prime Resort Markets Across Thailand
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Hospitality Asset Advisory &amp; Capital Deployment
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '10px' }}>
              Key locations include Phuket (Patong, Karon, Surin, Kamala), Pattaya Beach, Koh Samui, Hua Hin, and Khao Lak.
            </p>
          </div>

          {/* Destinations Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {RESORT_DESTINATIONS.map((dest, idx) => {
              const isSelected = selectedResort.name === dest.name;
              return (
                <div
                  key={idx}
                  className="card-hover-lift"
                  onClick={() => setSelectedResort(dest)}
                  style={{
                    background: '#ffffff',
                    border: isSelected ? '2px solid var(--accent-gold)' : '1px solid rgba(112, 138, 114, 0.25)',
                    borderTop: '4px solid var(--accent-gold)',
                    padding: '32px 28px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '8px' }}>
                      {dest.region}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--primary-green)', marginBottom: '12px' }}>
                      {dest.name}
                    </h3>
                    <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '20px' }}>
                      {dest.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenEnquiry(`Hospitality Advisory - ${dest.name}`);
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
                    <span>Inquire Asset Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subpage CTA */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: 'var(--primary-green)', color: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--bg-light)', marginBottom: '16px' }}>
            Hospitality Investment &amp; Fund Raising Inquiries
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '32px' }}>
            Connect with our hotel investment advisory team to discuss capital sourcing, asset repositioning, or acquisition pipelines.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Hospitality Advisory & Asset Management')}
          >
            <span>Contact Our Team</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
