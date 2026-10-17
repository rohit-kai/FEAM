import React, { useState } from 'react';
import Header from '../components/Header';
import { VILLA_DETAILS } from '../data/siteData';
import { Home, Shield, MapPin, Check, ChevronRight, ArrowUpRight, Compass, Sparkles, Key } from 'lucide-react';

export default function ResidentialPage({ onNavigate, onOpenEnquiry }) {
  const [selectedModel, setSelectedModel] = useState(VILLA_DETAILS.models[0]);

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
          activePage="residential"
          onNavigate={onNavigate}
          onOpenEnquiry={() => onOpenEnquiry('Residential - Aestate Villa Krabi')}
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
            Residential Development · Ao Nang, Krabi
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '56px',
              fontWeight: 500,
              lineHeight: 1.15,
              color: 'var(--bg-light)',
              maxWidth: '850px',
              marginBottom: '20px'
            }}
          >
            Aestate Villa
          </h1>

          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '20px'
            }}
          >
            Luxury Residential Investment | Tropical Lifestyle Living | Long-Term Value Creation
          </div>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '740px',
              opacity: 0.92
            }}
          >
            Aestate Villa is designed to combine contemporary architecture with the vibrant essence of tropical island living, creating a premium residential environment focused on comfort, privacy, and lifestyle.
          </p>
        </div>
      </section>

      {/* Hero Showcase Image of Aestate Villa */}
      <section style={{ padding: '0 48px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', boxShadow: 'var(--shadow-elevated)', overflow: 'hidden' }}>
          <img
            src="/assets/aestate-villa.jpg"
            alt="Aestate Villa in Ao Nang Krabi overlooking private pool and towering limestone karst cliffs"
            style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* Structural Overview & 30-Year Lease Highlights */}
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
              Legal &amp; Tenure Structure
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text-dark)', marginBottom: '20px' }}>
              30-Year Registered Lease Architecture
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '20px' }}>
              Every villa at Aestate Villa is backed by a registered 30-year lease directly executed and officially recorded at the Krabi Provincial Land Department, ensuring uncompromising transparency, enforceability, and long-term security.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid rgba(112, 138, 114, 0.25)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Check size={20} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '15px', color: 'var(--text-dark)' }}>
                  <strong>Official Land Office Registration:</strong> Recorded directly on title deed (Chanote) with succession and assignment covenants.
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Check size={20} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '15px', color: 'var(--text-dark)' }}>
                  <strong>Foreign Ownership Protection:</strong> Fully compliant structure engineered specifically for international private investors.
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Check size={20} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '15px', color: 'var(--text-dark)' }}>
                  <strong>Turnkey Rental Management:</strong> Optional fully-managed rental yield program offering projected 8–11% net returns.
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'var(--bg-light)',
              border: '1px solid rgba(112, 138, 114, 0.3)',
              borderTop: '4px solid var(--accent-gold)',
              padding: '48px 40px'
            }}
          >
            <div style={{ fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '8px' }}>
              Development Summary
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--primary-green)', marginBottom: '20px' }}>
              Ao Nang Sanctuary Highlights
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Setting</div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginTop: '2px' }}>
                  Nestled beside dramatic limestone karsts &amp; lush coconut palms
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Accessibility</div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginTop: '2px' }}>
                  7 mins to Ao Nang Beach · 30 mins to Krabi International Airport
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Villa Typologies</div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginTop: '2px' }}>
                  Boutique collection of 3, 4 &amp; 5 Bedroom private pool residences
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Concierge Services</div>
                <div style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginTop: '2px' }}>
                  Private in-villa chef, yacht charter coordination, 24/7 security
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Typologies Explorer */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <div className="gold-badge" style={{ marginBottom: '14px', justifyContent: 'center' }}>
              <span className="gold-line" />
              Villa Collections
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Distinctive Architectural Typologies
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '12px' }}>
              Each residence balances indoor-outdoor living, generous shaded teak terraces, and private infinity lap pools.
            </p>
          </div>

          {/* Model Selection Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
            {VILLA_DETAILS.models.map(model => {
              const isSelected = selectedModel.name === model.name;
              return (
                <button
                  key={model.name}
                  type="button"
                  onClick={() => setSelectedModel(model)}
                  style={{
                    padding: '16px 28px',
                    fontSize: '13px',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: isSelected ? 'var(--primary-green)' : '#fff',
                    color: isSelected ? 'var(--bg-light)' : 'var(--text-dark)',
                    border: '1px solid',
                    borderColor: isSelected ? 'var(--primary-green)' : 'rgba(112, 138, 114, 0.3)',
                    boxShadow: isSelected ? 'var(--shadow-gold)' : 'none'
                  }}
                >
                  {model.name}
                </button>
              );
            })}
          </div>

          {/* Selected Model Showcase Card */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid rgba(112, 138, 114, 0.3)',
              borderTop: '4px solid var(--accent-gold)',
              padding: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '8px' }}>
                {selectedModel.type}
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--primary-green)', marginBottom: '16px' }}>
                {selectedModel.name}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '28px' }}>
                Engineered with expansive glass curtain walls framing the dramatic Krabi mountains, local stone cladding, and private infinity lap pool.
              </p>

              {/* Specs Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid rgba(112,138,114,0.25)', paddingTop: '24px', marginBottom: '32px' }}>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Built Area</div>
                  <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginTop: '4px' }}>{selectedModel.builtArea}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Land Plot</div>
                  <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginTop: '4px' }}>{selectedModel.landArea}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Infinity Pool</div>
                  <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginTop: '4px' }}>{selectedModel.pool}</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)' }}>Price Guidance</div>
                  <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold-dark)', marginTop: '4px' }}>{selectedModel.priceGuide}</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <button
                  type="button"
                  className="btn-gold"
                  onClick={() => onOpenEnquiry(`Aestate Villa Reservation - ${selectedModel.name}`)}
                >
                  <span>Inquire About {selectedModel.name}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            <div style={{ background: 'var(--bg-light)', padding: '36px', border: '1px solid rgba(112, 138, 114, 0.25)' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--primary-green)', marginBottom: '20px' }}>
                Key Villa Inclusions
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {selectedModel.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>
                      <Check size={18} strokeWidth={2.5} />
                    </span>
                    <span style={{ fontSize: '15px', color: 'var(--text-dark)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: '#ffffff', borderTop: '1px solid rgba(112,138,114,0.2)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            Book a Private VIP Site Visit in Krabi
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
            Experience the tranquility of Ao Nang firsthand. Our concierge will arrange private airport transfers, site inspections, and legal consultation.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Residential - Aestate Villa Krabi')}
          >
            <span>Request VIP Site Inspection</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
