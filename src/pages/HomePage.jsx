import React, { useState } from 'react';
import Header from '../components/Header';
import {
  COMPANY_INFO,
  MILESTONES,
  CORE_VALUES,
  MISSION_PILLARS,
  LEADERSHIP,
  CORE_VERTICALS,
  KEY_PROJECTS,
  RESORT_DESTINATIONS,
  STRATEGIC_PARTNERS,
  INQUIRY_CATEGORIES
} from '../data/siteData';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Award,
  ShieldCheck,
  Mail,
  MapPin,
  Building2,
  Store,
  Hotel,
  Home,
  TrendingUp,
  Users,
  Compass,
  Handshake,
  Check
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenEnquiry }) {
  const [selectedResort, setSelectedResort] = useState(RESORT_DESTINATIONS[0]);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    category: INQUIRY_CATEGORIES[0],
    message: ''
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const verticalIcons = {
    development: <Building2 size={24} color="var(--accent-gold)" />,
    retail: <Store size={24} color="var(--accent-gold)" />,
    hospitality: <Hotel size={24} color="var(--accent-gold)" />,
    residential: <Home size={24} color="var(--accent-gold)" />,
    repositioning: <TrendingUp size={24} color="var(--accent-gold)" />,
    hr: <Users size={24} color="var(--accent-gold)" />
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'var(--bg-light)' }}>
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section
        id="hero"
        style={{
          position: 'relative',
          backgroundColor: 'var(--primary-green)',
          color: 'var(--bg-light)',
          minHeight: '840px',
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
            alt="Modern architectural estate at golden hour"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, var(--primary-green) 0%, color-mix(in srgb, var(--primary-green) 65%, transparent) 30%, color-mix(in srgb, var(--primary-green) 0%, transparent) 75%)'
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(0deg, color-mix(in srgb, var(--primary-green) 75%, transparent) 0%, color-mix(in srgb, var(--primary-green) 0%, transparent) 50%)'
            }}
          />
        </div>

        {/* Embedded Header in Hero */}
        <Header
          activePage="home"
          onNavigate={onNavigate}
          onOpenEnquiry={() => onOpenEnquiry(INQUIRY_CATEGORIES[0])}
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
            gap: '30px',
            padding: '70px 64px 80px',
            maxWidth: '720px',
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
            {COMPANY_INFO.name}
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              fontSize: '54px',
              lineHeight: 1.12,
              letterSpacing: '-.02em',
              color: 'var(--bg-light)'
            }}
          >
            {COMPANY_INFO.tagline}
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: '17px',
              lineHeight: 1.8,
              maxWidth: '560px',
              opacity: 0.92
            }}
          >
            {COMPANY_INFO.valueStatement}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', paddingTop: '8px' }}>
            {/* Primary CTA: Anchors down to Section 5 (Portfolio) */}
            <button
              type="button"
              className="btn-gold"
              onClick={() => scrollToSection('portfolio')}
            >
              <span>Explore Our Portfolio</span>
              <ChevronRight size={16} />
            </button>

            {/* Secondary CTA: Leads to Section 7 (Contact) */}
            <button
              type="button"
              className="btn-outline-gold"
              onClick={() => scrollToSection('contact')}
            >
              <span>Contact Our Team</span>
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
            opacity: 0.85
          }}
        >
          <span>Bangkok · Krabi · Andaman Coast · Gulf of Thailand</span>
          <span>EST. {COMPANY_INFO.established}</span>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT US & HERITAGE
          ========================================================================= */}
      <section
        id="about"
        style={{
          background: '#ffffff',
          borderTop: '1px solid rgba(112, 138, 114, 0.25)',
          padding: '104px 64px'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 64px' }}>
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
              About Us &amp; Heritage
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
              Two Decades of Disciplined Value Creation
            </h2>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '16px' }}>
              <strong>Founding &amp; Roots:</strong> Founded in 2004 by Supakit Eimsamank, rooted in decades of family-office real estate development, asset administration, property enhancement, and long-term investment operations.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              <strong>Strategic Evolution:</strong> Transitioned from managing private family holdings into a multi-sector platform covering retail centers, residential developments, hotel investments, and human capital solutions.
            </p>
          </div>

          {/* Corporate Mission Box */}
          <div
            style={{
              background: 'var(--bg-light)',
              border: '1px solid rgba(112, 138, 114, 0.3)',
              borderTop: '4px solid var(--accent-gold)',
              padding: '48px 40px',
              marginBottom: '64px'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', fontWeight: 600, marginBottom: '8px' }}>
                Corporate Mission
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '30px', color: 'var(--primary-green)' }}>
                Creating sustainable value through strategic growth and asset excellence.
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {MISSION_PILLARS.map((m, idx) => (
                <div key={idx} style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '16px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '4px' }}>
                    Pillar 0{idx + 1}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                    {m.title}
                  </h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values Grid */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--primary-green)', marginBottom: '8px' }}>
                Our Operating Principles
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--text-dark)' }}>
                Core Values
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '24px' }}>
              {CORE_VALUES.map((val, idx) => (
                <div
                  key={idx}
                  className="card-hover-lift"
                  style={{
                    background: '#ffffff',
                    borderTop: '3px solid var(--accent-gold)',
                    border: '1px solid rgba(112, 138, 114, 0.25)',
                    borderTopWidth: '3px',
                    borderTopColor: 'var(--accent-gold)',
                    padding: '30px 24px',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--primary-green)', marginBottom: '10px' }}>
                    {val.title}
                  </h4>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--text-dark)' }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: LEADERSHIP & GOVERNANCE
          ========================================================================= */}
      <section
        id="leadership"
        style={{
          padding: '104px 64px',
          background: 'var(--bg-light)',
          borderTop: '1px solid rgba(112, 138, 114, 0.25)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Leadership &amp; Governance
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '44px', color: 'var(--text-dark)' }}>
              Stewarding Long-Term Capital &amp; Partnerships
            </h2>
          </div>

          {/* Founder Profile */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid rgba(112, 138, 114, 0.3)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '56px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div style={{ height: '100%', minHeight: '360px' }}>
              <img
                src={LEADERSHIP.founder.image}
                alt={LEADERSHIP.founder.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
            </div>
            <div style={{ padding: '40px 48px 40px 0' }}>
              <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '6px' }}>
                Executive Leadership
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--primary-green)', marginBottom: '6px' }}>
                {LEADERSHIP.founder.name}
              </h3>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '20px' }}>
                {LEADERSHIP.founder.title}
              </div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '24px' }}>
                {LEADERSHIP.founder.bio}
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a
                  href={`mailto:${LEADERSHIP.founder.email}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 22px',
                    border: '1px solid var(--secondary-sage)',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--primary-green)'
                  }}
                >
                  <Mail size={15} />
                  <span>Direct Communication</span>
                </a>
              </div>
            </div>
          </div>

          {/* Executive Board & Advisory Focus */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--primary-green)', marginBottom: '24px' }}>
              Executive Board &amp; Advisory Focus
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
              {LEADERSHIP.advisoryFocus.map((focus, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(112, 138, 114, 0.25)',
                    borderTop: '3px solid var(--accent-gold)',
                    padding: '32px 28px'
                  }}
                >
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '8px' }}>
                    Advisory Focus 0{idx + 1}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--text-dark)', marginBottom: '10px' }}>
                    {focus.title}
                  </h4>
                  <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                    {focus.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE BUSINESS VERTICALS
          ========================================================================= */}
      <section
        id="verticals"
        style={{
          padding: '104px 64px',
          background: '#ffffff',
          borderTop: '1px solid rgba(112, 138, 114, 0.25)'
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
              <div className="gold-badge" style={{ marginBottom: '14px' }}>
                <span className="gold-line" />
                Specialized Disciplines
              </div>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: '44px', color: 'var(--text-dark)' }}>
                Core Business Verticals
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('capabilities')}
              className="btn-outline-gold"
              style={{ borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}
            >
              <span>Explore Capabilities Subpage</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {CORE_VERTICALS.map((vert) => (
              <div
                key={vert.id}
                className="card-hover-lift"
                style={{
                  border: '1px solid rgba(112, 138, 114, 0.25)',
                  borderTop: '3px solid var(--accent-gold)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-light)'
                }}
              >
                <div>
                  <div style={{ marginBottom: '16px' }}>{verticalIcons[vert.id]}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--primary-green)', marginBottom: '12px', lineHeight: 1.3 }}>
                    {vert.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '24px' }}>
                    {vert.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(112, 138, 114, 0.2)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {vert.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-muted)' }}>
                        <Check size={14} color="var(--accent-gold)" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PORTFOLIO & KEY PROJECTS
          ========================================================================= */}
      <section
        id="portfolio"
        style={{
          padding: '104px 64px',
          background: 'var(--primary-green)',
          color: 'var(--bg-light)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <div className="gold-badge-dark" style={{ marginBottom: '14px' }}>
              <span className="gold-line" />
              Asset Deployments
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '44px', color: 'var(--bg-light)', marginBottom: '16px' }}>
              Portfolio &amp; Key Projects
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, opacity: 0.9 }}>
              Strategic property assets across Thailand spanning residential villas, prime transportation-hub commercial centers, land transformations, and premier coastal hotel destinations.
            </p>
          </div>

          {/* 4 Project Showcase Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '56px' }}>
            {KEY_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(191, 153, 68, 0.3)',
                  borderTop: '3px solid var(--accent-gold)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={proj.image}
                    alt={proj.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ padding: '32px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '6px' }}>
                    {proj.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--bg-light)', marginBottom: '10px' }}>
                    {proj.name}
                  </h3>

                  <div style={{ fontSize: '13px', color: 'var(--secondary-sage)', marginBottom: '4px' }}>
                    <strong>Asset Class:</strong> {proj.assetClass}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--secondary-sage)', marginBottom: '14px' }}>
                    <strong>Structure / Location:</strong> {proj.location}
                  </div>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.7, opacity: 0.88, marginBottom: '20px' }}>
                    {proj.profile}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(191,153,68,0.2)' }}>
                    <span style={{ fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                      {proj.structure}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hospitality Footprint Destinations Detail */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(191, 153, 68, 0.3)',
              padding: '40px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  Hospitality Asset Advisory &amp; Capital Deployment
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--bg-light)', marginTop: '4px' }}>
                  Prime Resort Markets Across Thailand
                </h3>
              </div>
              <button
                type="button"
                className="btn-outline-gold"
                onClick={() => onNavigate('hospitality')}
                style={{ padding: '10px 20px', fontSize: '11.5px' }}
              >
                <span>View Hospitality Explorer</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
              {RESORT_DESTINATIONS.map((dest, i) => {
                const isSelected = selectedResort.name === dest.name;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedResort(dest)}
                    style={{
                      padding: '10px 18px',
                      background: isSelected ? 'var(--accent-gold)' : 'transparent',
                      color: isSelected ? 'var(--text-dark)' : 'var(--bg-light)',
                      border: '1px solid rgba(191, 153, 68, 0.5)',
                      fontSize: '12.5px',
                      fontWeight: isSelected ? 600 : 400,
                      cursor: 'pointer'
                    }}
                  >
                    {dest.name} ({dest.region})
                  </button>
                );
              })}
            </div>

            <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '24px 28px', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--accent-gold)' }}>
                {selectedResort.name} · {selectedResort.region}
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.6, opacity: 0.9, marginTop: '6px' }}>
                {selectedResort.desc} In partnership with Destination Resorts Group for capital structuring and operational enhancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: STRATEGIC PARTNERS & INSTITUTIONAL COUNTERPARTIES
          ========================================================================= */}
      <section
        id="partners"
        style={{
          padding: '104px 64px',
          background: '#ffffff',
          borderTop: '1px solid rgba(112, 138, 114, 0.25)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px' }}>
            <div className="gold-badge" style={{ justifyContent: 'center', marginBottom: '14px' }}>
              <span className="gold-line" />
              Institutional Alliances
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Strategic Partners &amp; Institutional Counterparties
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginTop: '12px' }}>
              Long-term alliances with premier operators, corporate retailers, and residential developers across Thailand.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {STRATEGIC_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="card-hover-lift"
                style={{
                  background: 'var(--bg-light)',
                  border: '1px solid rgba(112, 138, 114, 0.25)',
                  borderTop: '4px solid var(--accent-gold)',
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--accent-gold)' }}>
                    <Handshake size={22} />
                    <span style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>
                      Institutional Partner 0{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', color: 'var(--primary-green)', marginBottom: '8px' }}>
                    {partner.name}
                  </h3>

                  <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '18px' }}>
                    {partner.role}
                  </div>

                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-dark)' }}>
                    {partner.desc}
                  </p>
                </div>

                <div style={{ marginTop: '28px', paddingTop: '16px', borderTop: '1px solid rgba(112, 138, 114, 0.2)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--secondary-sage)', fontWeight: 600 }}>
                    Active Ongoing Collaboration
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CONTACT & INVESTOR RELATIONS
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
            {/* Left Narrative */}
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
                Investor Relations &amp; Advisory
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
                Contact Our Team
              </h2>

              <p style={{ margin: '0 0 32px', fontSize: '17px', lineHeight: 1.7, opacity: 0.9 }}>
                Direct engagement with our investment principals and advisory directors across multi-sector assets.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', borderTop: '1px solid rgba(191, 153, 68, 0.35)', paddingTop: '24px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <Mail size={18} color="var(--accent-gold)" />
                  <div>
                    <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', opacity: 0.7 }}>Direct Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontSize: '16px', color: 'var(--accent-gold)' }}>
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <MapPin size={18} color="var(--accent-gold)" />
                  <div>
                    <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', opacity: 0.7 }}>Office Location</div>
                    <div style={{ fontSize: '16px' }}>{COMPANY_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
              {inquirySubmitted ? (
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '36px', border: '1px solid var(--accent-gold)', textAlign: 'center' }}>
                  <CheckCircle2 size={44} color="var(--accent-gold)" style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#fff', marginBottom: '8px' }}>
                    Inquiry Received
                  </h4>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.9 }}>
                    Thank you, {inquiryForm.name}. A representative from {COMPANY_INFO.name} will respond to your inquiry regarding <em>{inquiryForm.category}</em> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '6px' }}>
                      Inquiry Category
                    </label>
                    <select
                      value={inquiryForm.category}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, category: e.target.value })}
                      className="luxury-input"
                      style={{ cursor: 'pointer' }}
                    >
                      {INQUIRY_CATEGORIES.map((cat, idx) => (
                        <option key={idx} value={cat} style={{ background: '#101C3A' }}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

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
                    placeholder="Project requirements or investment criteria... *"
                    rows={4}
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="luxury-input"
                    style={{ minHeight: '120px', resize: 'vertical' }}
                  />

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      marginTop: '10px',
                      padding: '20px',
                      width: '100%'
                    }}
                  >
                    Submit Inquiry
                  </button>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>
                    Discreet fiduciary management. All discussions covered by NDA.
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
