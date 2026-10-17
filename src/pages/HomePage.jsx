import React, { useState } from 'react';
import Header from '../components/Header';
import { MILESTONES, CAPABILITIES, HOSPITALITY_DESTINATIONS, CORE_VALUES, FOUNDERS } from '../data/siteData';
import { ArrowUpRight, CheckCircle2, ChevronRight, Award, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function HomePage({ onNavigate, onOpenEnquiry }) {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', email: '', message: '' });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-light)' }}>
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--primary-green)',
          color: 'var(--bg-light)',
          minHeight: '820px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Hero Background Image & Gradient Overlays */}
        <div
          className="hero-img-container"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '54%',
            zIndex: 1
          }}
        >
          <img
            src="/assets/hero-estate.jpg"
            alt="Modern stone and timber home with an infinity pool overlooking coastal hills at sunset"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
          />
          {/* Subtle directional gradient overlays */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, var(--primary-green) 0%, color-mix(in srgb, var(--primary-green) 65%, transparent) 30%, color-mix(in srgb, var(--primary-green) 0%, transparent) 75%)'
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(0deg, color-mix(in srgb, var(--primary-green) 75%, transparent) 0%, color-mix(in srgb, var(--primary-green) 0%, transparent) 50%)'
            }}
          />
        </div>

        {/* Embedded Header in Hero */}
        <Header
          activePage="home"
          onNavigate={onNavigate}
          onOpenEnquiry={() => onOpenEnquiry('General Investment')}
          isDarkHeader={true}
        />

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '32px',
            padding: '70px 64px 80px',
            maxWidth: '680px',
            boxSizing: 'border-box'
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span style={{ width: '28px', height: '1px', background: 'var(--accent-gold)' }} />
            Residential real estate, considered differently
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              fontSize: '62px',
              lineHeight: 1.08,
              letterSpacing: '-.02em',
              color: 'var(--bg-light)'
            }}
          >
            Find the place{' '}
            <em style={{ color: 'var(--accent-gold)', fontStyle: 'italic', fontWeight: 500 }}>
              that feels like you.
            </em>
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: '17px',
              lineHeight: 1.75,
              maxWidth: '490px',
              opacity: 0.92
            }}
          >
            Integrated real estate and hospitality investment, built on decades of family asset management and long-term partnerships.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '8px' }}>
            <button
              type="button"
              className="btn-gold"
              onClick={() => onOpenEnquiry('Residential - Aestate Villa Krabi')}
            >
              <span>Explore Portfolio</span>
              <ChevronRight size={16} />
            </button>
            <button
              type="button"
              className="btn-outline-gold"
              onClick={() => onNavigate('capabilities')}
            >
              <span>Our Capabilities</span>
            </button>
          </div>
        </div>

        {/* Hero Footer Strip */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            padding: '0 64px 36px',
            fontSize: '12px',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            opacity: 0.8
          }}
        >
          <span>Bangkok · Krabi · Andaman Coast · Gulf of Thailand</span>
          <span>EST. 2004</span>
        </div>
      </section>

      {/* =========================================================================
          MILESTONES & TRACK RECORD
          ========================================================================= */}
      <section
        style={{
          background: '#ffffff',
          borderTop: '1px solid rgba(112, 138, 114, 0.25)',
          padding: '104px 64px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'var(--primary-green)',
            marginBottom: '16px'
          }}
        >
          <span style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
          Milestones &amp; Track Record
        </div>

        <h2
          style={{
            margin: '0 auto 20px',
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            fontSize: '44px',
            color: 'var(--text-dark)'
          }}
        >
          Two Decades of Long-Term Value
        </h2>

        <p
          style={{
            margin: '0 auto 64px',
            maxWidth: '680px',
            fontSize: '17px',
            lineHeight: 1.75,
            color: 'var(--text-dark)'
          }}
        >
          EAM Bangkok was established in 2004 by Supakit Eimsamank, building on decades of family real estate development, property management and investment operations.
        </p>

        {/* 4 Metric Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '0 20px',
                borderLeft: '1px solid rgba(112, 138, 114, 0.3)',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '54px',
                  color: 'var(--text-dark)',
                  lineHeight: 1,
                  fontWeight: 500
                }}
              >
                {item.number}
                <span style={{ fontSize: '30px', color: 'var(--accent-gold-dark)' }}>{item.suffix}</span>
              </div>
              <div
                style={{
                  marginTop: '16px',
                  fontSize: '12px',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: 'var(--text-dark)',
                  fontWeight: 600
                }}
              >
                {item.label}
              </div>
              <div style={{ marginTop: '6px', fontSize: '13.5px', color: 'var(--text-muted)' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHAT WE DO (CAPABILITIES)
          ========================================================================= */}
      <section
        id="services"
        style={{
          padding: '112px 64px',
          background: '#ffffff'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '24px',
              marginBottom: '56px'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '.18em',
                  color: 'var(--primary-green)',
                  marginBottom: '12px'
                }}
              >
                WHAT WE DO
              </div>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontSize: '44px',
                  color: 'var(--text-dark)'
                }}
              >
                Seven areas, one long-term focus
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('capabilities')}
              className="btn-outline-gold"
              style={{
                borderColor: 'var(--primary-green)',
                color: 'var(--primary-green)',
                padding: '12px 24px'
              }}
            >
              <span>Explore All Capabilities</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* 7 Capabilities Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px 32px'
            }}
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="card-hover-lift"
                onClick={() => onNavigate('capabilities')}
                style={{
                  borderTop: '3px solid var(--accent-gold)',
                  paddingTop: '24px',
                  cursor: 'pointer'
                }}
              >
                <h3
                  style={{
                    margin: '0 0 12px',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    lineHeight: 1.3,
                    fontWeight: 600,
                    color: 'var(--primary-green)'
                  }}
                >
                  {cap.title}
                </h3>
                <p style={{ margin: 0, lineHeight: 1.7, fontSize: '15px', color: 'var(--text-dark)' }}>
                  {cap.desc}
                </p>
                <div
                  style={{
                    marginTop: '16px',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Learn more</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOSPITALITY INVESTMENT SECTION
          ========================================================================= */}
      <section
        id="hospitality"
        style={{
          padding: '112px 64px',
          background: 'var(--primary-green)',
          color: 'var(--bg-light)'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '64px'
          }}
        >
          {/* Left Column: Hospitality Doctrine & Core Expertise */}
          <div style={{ flex: '1 1 440px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '16px'
              }}
            >
              <span style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
              Hospitality Investment
            </div>

            <h2
              style={{
                margin: '0 0 20px',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: '44px',
                lineHeight: 1.15,
                color: 'var(--bg-light)'
              }}
            >
              Hotel investment through established operators
            </h2>

            <p style={{ margin: '0 0 28px', fontSize: '17px', lineHeight: 1.7, opacity: 0.9 }}>
              Leveraging decades of experience in real estate and asset management, EAM Bangkok expanded into hotel investment consultancy through collaboration with established hospitality operators, including Destination Resorts Group.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)'
                }}
              >
                Core expertise
              </div>

              {[
                'Hotel Investment Structuring',
                'Asset Management & Repositioning',
                'Branding & Operational Enhancement',
                'Financing',
                'Acquisitions & Divestments',
                'Strategic Partnerships'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', fontSize: '15px' }}>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>&mdash;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn-gold"
              onClick={() => onNavigate('hospitality')}
            >
              <span>Explore Hospitality Division</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Right Column: Portfolio Exposure Badges with interactive drawer */}
          <div style={{ flex: '1 1 440px' }}>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '20px'
              }}
            >
              Portfolio exposure · 8 Premier Destinations
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              {HOSPITALITY_DESTINATIONS.map((dest) => {
                const isSelected = selectedDestination?.id === dest.id;
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setSelectedDestination(dest)}
                    style={{
                      padding: '12px 18px',
                      border: isSelected ? '1px solid #FFFFFF' : '1px solid rgba(191,153,68,.55)',
                      backgroundColor: isSelected ? 'var(--accent-gold)' : 'transparent',
                      color: isSelected ? 'var(--text-dark)' : 'var(--bg-light)',
                      fontSize: '13px',
                      letterSpacing: '.08em',
                      fontWeight: isSelected ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {dest.name}
                  </button>
                );
              })}
            </div>

            {/* Interactive Destination Preview Card */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(191, 153, 68, 0.3)',
                padding: '28px',
                borderRadius: '2px'
              }}
            >
              {selectedDestination ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--accent-gold)' }}>
                      {selectedDestination.name}
                    </h4>
                    <span style={{ fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.7 }}>
                      {selectedDestination.tag}
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--bg-light)', marginBottom: '12px' }}>
                    {selectedDestination.type} · {selectedDestination.keys} Keys
                  </div>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.6, opacity: 0.88, marginBottom: '16px' }}>
                    {selectedDestination.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedDestination.features.map((feat, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11px',
                          letterSpacing: '.06em',
                          padding: '4px 10px',
                          background: 'rgba(191, 153, 68, 0.15)',
                          border: '1px solid rgba(191, 153, 68, 0.3)',
                          color: 'var(--bg-light)'
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px 0', opacity: 0.85 }}>
                  <p style={{ fontSize: '14.5px', fontStyle: 'italic' }}>
                    Click any coastal destination above to review property positioning, keys, and market metrics.
                  </p>
                </div>
              )}
            </div>

            {/* Showcase Image */}
            <div style={{ marginTop: '24px', position: 'relative', overflow: 'hidden', height: '200px' }}>
              <img
                src="/assets/resort-phuket.jpg"
                alt="Luxury coastal resort in Phuket"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(15, 42, 18, 0.85) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px 20px',
                  fontSize: '12px',
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)'
                }}
              >
                In partnership with Destination Resorts Group
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RESIDENTIAL DEVELOPMENT · AESTATE VILLA, AO NANG, KRABI
          ========================================================================= */}
      <section
        id="residential"
        style={{
          padding: '112px 64px',
          background: '#ffffff'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Real Photographic Image of Aestate Villa */}
          <div
            style={{
              flex: '1 1 440px',
              minHeight: '440px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-elevated)'
            }}
          >
            <img
              src="/assets/aestate-villa.jpg"
              alt="Aestate Villa in Ao Nang Krabi with private lap pool and limestone cliffs"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '440px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(0deg, rgba(15,42,18,0.85) 0%, transparent 100%)',
                padding: '24px',
                boxSizing: 'border-box'
              }}
            >
              <span style={{ fontSize: '12px', letterSpacing: '.16em', color: 'var(--bg-light)', textTransform: 'uppercase' }}>
                Aestate Villa · Ao Nang, Krabi
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Key Parameters */}
          <div style={{ flex: '1 1 440px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--primary-green)',
                marginBottom: '16px'
              }}
            >
              <span style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
              Residential Development · Ao Nang, Krabi
            </div>

            <h2
              style={{
                margin: '0 0 20px',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: '44px',
                lineHeight: 1.15,
                color: 'var(--text-dark)'
              }}
            >
              Aestate Villa
            </h2>

            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold-dark)',
                marginBottom: '20px'
              }}
            >
              Luxury Residential Investment | Tropical Lifestyle Living | Long-Term Value Creation
            </div>

            <p style={{ margin: '0 0 32px', fontSize: '17px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
              Aestate Villa is designed to combine contemporary architecture with the vibrant essence of tropical island living, creating a premium residential environment focused on comfort, privacy, and lifestyle.
            </p>

            {/* Structure Specs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '48px',
                borderTop: '1px solid rgba(112, 138, 114, 0.3)',
                paddingTop: '24px',
                marginBottom: '32px'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--secondary-sage)', marginBottom: '6px' }}>
                  Location
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--text-dark)', fontWeight: 500 }}>
                  Ao Nang, Krabi
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--secondary-sage)', marginBottom: '6px' }}>
                  Structure
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--text-dark)', fontWeight: 500 }}>
                  30-Year Registered Lease
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <button
                type="button"
                className="btn-dark"
                onClick={() => onNavigate('residential')}
              >
                <span>Discover Villa Residences</span>
                <ChevronRight size={16} />
              </button>
              <button
                type="button"
                className="btn-outline-gold"
                onClick={() => onOpenEnquiry('Residential - Aestate Villa Krabi')}
              >
                <span>Request Villa Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE VALUES
          ========================================================================= */}
      <section
        style={{
          padding: '112px 64px',
          background: 'var(--bg-light)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '48px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--primary-green)',
                marginBottom: '16px'
              }}
            >
              <span style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
              Core Values
            </div>

            <h2
              style={{
                margin: '0 0 20px',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: '44px',
                lineHeight: 1.15,
                color: 'var(--text-dark)'
              }}
            >
              Principles driving long-term growth
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '24px'
            }}
          >
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="card-hover-lift"
                style={{
                  background: '#ffffff',
                  borderTop: '3px solid var(--accent-gold)',
                  padding: '32px 28px',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <h3
                  style={{
                    margin: '0 0 12px',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px',
                    fontWeight: 600,
                    color: 'var(--primary-green)'
                  }}
                >
                  {val.title}
                </h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT THE GROUP / THE MINDS BEHIND THE LEGACY
          ========================================================================= */}
      <section
        id="about"
        style={{
          padding: '112px 64px',
          background: 'var(--bg-light)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--primary-green)',
                marginBottom: '16px'
              }}
            >
              <span style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
              About the Group
            </div>

            <h2
              style={{
                margin: '0 0 20px',
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                fontSize: '44px',
                color: 'var(--text-dark)'
              }}
            >
              The Minds Behind The Legacy
            </h2>

            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
              Two founders, one conviction: that true luxury is measured in restraint, in service remembered years later, and in places that age with grace rather than fashion.
            </p>
          </div>

          {/* Founders Grid */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
            {FOUNDERS.map((founder, idx) => (
              <article
                key={idx}
                className="card-hover-lift"
                style={{
                  flex: '1 1 480px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  background: '#ffffff',
                  border: '1px solid rgba(112, 138, 114, 0.3)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.role}
                  style={{
                    flex: '1 1 220px',
                    minWidth: '220px',
                    maxHeight: '600px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    display: 'block'
                  }}
                />

                <div
                  style={{
                    flex: '2 1 280px',
                    padding: '40px 36px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}
                >
                  <div style={{ fontSize: '12px', letterSpacing: '.2em', color: 'var(--secondary-sage)', fontWeight: 600 }}>
                    {founder.number} &mdash;
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-serif)',
                      fontSize: '32px',
                      lineHeight: 1.1,
                      fontWeight: 600,
                      color: 'var(--primary-green)'
                    }}
                  >
                    {founder.role}
                  </h3>

                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-gold-dark)'
                    }}
                  >
                    {founder.title}
                  </div>

                  <p style={{ margin: 0, lineHeight: 1.7, fontSize: '15px', color: 'var(--text-dark)' }}>
                    {founder.bio}
                  </p>

                  <div
                    style={{
                      borderTop: '1px solid rgba(112, 138, 114, 0.3)',
                      paddingTop: '16px',
                      display: 'flex',
                      gap: '12px',
                      marginTop: 'auto'
                    }}
                  >
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      style={{
                        width: '44px',
                        height: '44px',
                        border: '1px solid var(--secondary-sage)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--primary-green)'
                      }}
                    >
                      in
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      aria-label="Email"
                      style={{
                        width: '44px',
                        height: '44px',
                        border: '1px solid var(--secondary-sage)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-green)'
                      }}
                    >
                      <Mail size={18} strokeWidth={1.4} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT / PRIVATE CONCIERGE ENQUIRY FORM
          ========================================================================= */}
      <section
        id="contact"
        style={{
          padding: '0 64px 112px',
          background: 'var(--bg-light)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--primary-green)',
              color: 'var(--bg-light)',
              padding: '72px 80px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '64px',
              borderBottom: '3px solid var(--accent-gold)'
            }}
          >
            {/* Left Contact Narrative */}
            <div style={{ flex: '1 1 380px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  marginBottom: '16px'
                }}
              >
                <span style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
                Private Concierge
              </div>

              <h2
                style={{
                  margin: '0 0 20px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 500,
                  fontSize: '40px',
                  lineHeight: 1.1,
                  color: 'var(--bg-light)'
                }}
              >
                Make an Enquiry
              </h2>

              <p style={{ margin: '0 0 32px', fontSize: '17px', lineHeight: 1.7, opacity: 0.9 }}>
                Tell us what you are looking for and an advisor will get back to you personally.
              </p>

              <div style={{ borderTop: '1px solid rgba(191, 153, 68, 0.35)', paddingTop: '24px', fontSize: '15px' }}>
                Corporate proposals &amp; partnerships:
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '14px', color: 'var(--accent-gold)' }}>
                  <a
                    href="mailto:partnerships@aeminvestment.com"
                    style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'inherit' }}
                  >
                    <Mail size={18} strokeWidth={1.4} />
                    <span>partnerships@aeminvestment.com</span>
                  </a>
                  <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    +66 (0) 2 123 4567
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              {inquirySubmitted ? (
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '36px', border: '1px solid var(--accent-gold)', textAlign: 'center' }}>
                  <CheckCircle2 size={44} color="var(--accent-gold)" style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#fff', marginBottom: '8px' }}>
                    Enquiry Dispatched
                  </h4>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.9 }}>
                    Thank you, {inquiryForm.name}. A representative from EAM Bangkok Concierge will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input
                    type="text"
                    required
                    aria-label="Full name"
                    placeholder="Full name *"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="luxury-input"
                  />
                  <input
                    type="email"
                    required
                    aria-label="Email address"
                    placeholder="Email address *"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="luxury-input"
                  />
                  <textarea
                    required
                    aria-label="Your message"
                    placeholder="How can we help? *"
                    rows={5}
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="luxury-input"
                    style={{ minHeight: '140px', resize: 'vertical' }}
                  />
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      marginTop: '12px',
                      padding: '22px',
                      width: '100%'
                    }}
                  >
                    Send Enquiry
                  </button>
                  <div style={{ fontSize: '13px', opacity: 0.8 }}>
                    By submitting you agree to our Privacy Policy.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Responsive adjustments */}
      <style>{`
        @media(max-width: 900px){
          .hero-img-container {
            position: relative !important;
            width: 100% !important;
            height: 420px;
            order: 3;
          }
        }
      `}</style>
    </div>
  );
}
