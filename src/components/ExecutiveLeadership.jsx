import React, { useState } from 'react';
import {
  Mail,
  Award,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Globe,
  TrendingUp,
  MapPin,
  Building
} from 'lucide-react';

// Custom inline SVG for LinkedIn
const LinkedinIcon = ({ size = 15, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DIRECTORS = [
  {
    id: 'supakit',
    name: 'Supakit Eimsamank',
    title: 'Founder & Managing Director, EAM Bangkok Co., Ltd.',
    academic: 'Master’s degree in International Banking and Finance from the University of Birmingham (UK)',
    roleTag: 'FOUNDER · 25+ YRS EXPERIENCE',
    image: '/assets/managing-director.png',
    objectPosition: 'center center',
    stats: [
      { label: 'Leadership Exp.', value: '25+ Years' },
      { label: 'Academic Heritage', value: 'Birmingham (UK)' },
      { label: 'Market Footprint', value: 'Pan-Thailand' }
    ],
    chips: [
      'Deal Origination & M&A',
      'Capital Raising & Structured Finance',
      'Asset Turnaround',
      'Destination Group Partner',
      'JLL & Erawan Alumni'
    ],
    biography: [
      'Supakit Eimsamank brings over 25 years of leadership experience across the Thai real estate and hospitality investment landscape. He launched his career with Jones Lang LaSalle (JLL) and subsequently held senior executive positions at major Thai real estate and hospitality corporations, including Central Pattana PCL, CP Land, and The Erawan Group PCL.',
      'In 2004, he founded EAM Bangkok Co., Ltd. to build upon decades of family-owned real estate development and asset management operations. Over time, he established EAM Bangkok as a focused investment platform dedicated to prime real estate, high-end villa communities, and resort-oriented projects, notably across Southern Thailand.'
    ],
    competencies: [
      {
        title: 'Deal Origination & Acquisitions',
        desc: 'Sourcing, evaluating, acquiring, and divesting hotel and real estate assets both domestically across Thailand and internationally.'
      },
      {
        title: 'Capital Raising & Structured Finance',
        desc: 'Structuring bank syndications, debentures, asset-backed facilities, and hybrid financing instruments while negotiating with major domestic and international financial institutions.'
      },
      {
        title: 'Asset Repositioning & Turnaround',
        desc: 'Managing complex tenant negotiations, brand transitions, operational restructuring, and exit strategies to maximize asset valuation.'
      },
      {
        title: 'Cross-Border Investor Relations',
        desc: 'Bridging local deal execution with international institutional capital through cross-cultural communication and market insight.'
      }
    ],
    alliance: {
      badge: 'KEY STRATEGIC ALLIANCE',
      title: 'Destination Group (Destination Resorts Group)',
      desc: 'A significant pillar of Supakit’s track record is his long-standing collaboration with Destination Group (Destination Resorts Group). His capabilities in deal origination, legal and financial structuring, and asset turnaround have served as core drivers in executing key hotel acquisitions and divestments within Destination Group’s portfolio.'
    },
    geographicReach: {
      subtext:
        'Supakit maintains an extensive network of relationships with hotel owners, institutional developers, commercial lenders, regulatory bodies, and advisory firms across Thailand’s most competitive markets:',
      locations: [
        {
          region: 'Bangkok',
          detail: 'Urban mixed-use and transit-oriented commercial assets'
        },
        {
          region: 'Phuket',
          detail: 'Patong Beach, Karon Beach, Surin Beach, and Kamala Beach'
        },
        {
          region: 'Krabi',
          detail: 'Luxury residential and villa leasehold developments in Ao Nang'
        },
        {
          region: 'Regional Gateways',
          detail: 'Pattaya, Koh Samui, Hua Hin, Khao Lak, Phang Nga, and Chiang Mai'
        }
      ]
    },
    email: 'Contact@aeminvestment.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'executive-director',
    name: 'Executive Director & CEO',
    title: 'Chief Executive Officer & Executive Director, EAM Bangkok Co., Ltd.',
    academic: 'Executive Education in Corporate Governance, Structured Finance & Real Estate Private Equity',
    roleTag: 'EXECUTIVE BOARD · CAPITAL GOVERNANCE',
    image: '/assets/ceo-portrait.jpg',
    stats: [
      { label: 'Underwriting', value: 'Institutional' },
      { label: 'Strategic JVs', value: 'Tier-1 Partners' },
      { label: 'Mandate', value: 'Fiduciary Yield' }
    ],
    chips: [
      'Transaction Underwriting',
      'Asset Governance',
      'Joint Ventures & PE',
      'Structured Syndication',
      'Counterparty Alignment'
    ],
    biography: [
      'Our executive leadership directs institutional transaction underwriting, capital raising, and structured debt/equity financing across residential developments, retail commercial complexes, and luxury resort destinations.',
      'Working in disciplined alignment with premier corporate stakeholders, they institutionalize multi-generational property holdings through robust audit protocols, asset recapitalization models, and lifecycle value-add repositioning to ensure generational preservation and superior risk-adjusted yields.'
    ],
    competencies: [
      {
        title: 'Joint Venture & Equity Structuring',
        desc: 'Underwriting institutional co-investment vehicles, private equity syndications, and joint venture architecture for major development opportunities.'
      },
      {
        title: 'Counterparty Risk Governance',
        desc: 'Directing rigorous legal, tax, and commercial due diligence across multi-million-dollar real estate acquisitions and tenant lease commitments.'
      },
      {
        title: 'Asset Enhancement & Recapitalization',
        desc: 'Formulating financial restructuring, debt refinancing, and capital improvement schedules to elevate asset yield and capitalization rates.'
      },
      {
        title: 'Institutional Exit Strategy',
        desc: 'Architecting structured divestment programs, freehold/leasehold transfers, and portfolio reallocations to institutional buyers.'
      }
    ],
    alliance: {
      badge: 'STRATEGIC COUNTERPARTY ALIGNMENT',
      title: 'Tier-1 Developers & Commercial Anchors',
      desc: 'Maintains direct collaboration with leading national real estate developers including Land & Houses PLC on complex land repositioning projects, as well as institutional commercial operators, national retail anchors (Lotus’s), and commercial banking lenders across Southeast Asia.'
    },
    geographicReach: {
      subtext:
        'Directs structured capital allocation and governance protocols across primary commercial hubs and high-growth investment regions:',
      locations: [
        {
          region: 'Commercial Centers',
          detail: 'High-traffic retail leasing and long-term tenant administration'
        },
        {
          region: 'Hospitality Capital',
          detail: 'Prime resort debt syndications, refinancing & acquisitions'
        },
        {
          region: 'Regulatory Compliance',
          detail: 'Registered 30-year leasehold architecture & audit standards'
        },
        {
          region: 'Institutional Co-Investors',
          detail: 'Family office co-investment structuring & fund governance'
        }
      ]
    },
    email: 'Contact@aeminvestment.com',
    linkedin: 'https://linkedin.com'
  }
];

const ADVISORY_PILLARS = [
  {
    tag: 'GOVERNANCE 01',
    title: 'Asset Governance',
    desc: 'Disciplined oversight of multi-generational property holdings and commercial leasing portfolios with strict fiduciary accountability.'
  },
  {
    tag: 'GOVERNANCE 02',
    title: 'Transaction & Fund Structuring',
    desc: 'Structuring institutional co-investments, brand partnerships, debt/equity syndications, and long-term exit architecture.'
  },
  {
    tag: 'GOVERNANCE 03',
    title: 'Operational Oversight',
    desc: 'Commercial tenant relations, residential development delivery, and rigorous hospitality operator alignment.'
  }
];

function DirectorCard({ director, onOpenEnquiry }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="executive-vertical-card"
      style={{
        position: 'relative',
        borderRadius: '18px',
        background: 'linear-gradient(180deg, rgba(14, 77, 68, 0.24) 0%, rgba(6, 32, 28, 0.5) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isHovered ? '1px solid rgba(191, 153, 68, 0.55)' : '1px solid rgba(14, 77, 68, 0.45)',
        boxShadow: isHovered
          ? '0 32px 65px -15px rgba(0, 0, 0, 0.75), 0 0 35px rgba(14, 77, 68, 0.5), 0 0 20px rgba(191, 153, 68, 0.2)'
          : '0 20px 45px -15px rgba(0, 0, 0, 0.55), 0 0 25px rgba(14, 77, 68, 0.25)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Dynamic Cursor Spotlight Radial Backlight in #0E4D44 Emerald Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: isHovered
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 77, 68, 0.45), rgba(191, 153, 68, 0.12) 40%, transparent 70%)`
            : 'none',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 1
        }}
      />

      {/* =========================================================================
          UPPER SIDE: EXECUTIVE PORTRAIT PHOTO
          ========================================================================= */}
      <div className="card-photo-upper">
        <div className="photo-container">
          <img
            src={director.image}
            alt={director.name}
            className="director-photo-img"
            style={{
              objectPosition: director.objectPosition || 'center center',
              transform: isHovered ? 'scale(1.02)' : 'scale(1)'
            }}
          />

          {/* Floating Subtle Glass Status/Tenure Badge */}
          <div className="photo-glass-badge">
            <span className="badge-gold-indicator" />
            <span className="badge-title-text">{director.roleTag}</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DOWN SIDE: STRUCTURED EXECUTIVE INFORMATION (ALL DIRECTLY DISPLAYED)
          ========================================================================= */}
      <div className="card-info-down">
        {/* 1. Header Block: Category Tag, Name & Academic Distinction */}
        <div className="info-header-block">
          <div className="info-category-tag">
            <span className="category-decor-line" />
            <span>EXECUTIVE LEADERSHIP</span>
          </div>

          <h3 className="director-editorial-name">
            {director.name}
          </h3>

          <div className="director-role-subtext">
            {director.title}
          </div>

          {/* Academic Background Badge */}
          <div className="director-academic-badge">
            <GraduationCap size={15} color="var(--accent-gold)" />
            <span>{director.academic}</span>
          </div>
        </div>

        {/* 2. Metric / Credential Highlights Bar */}
        <div className="info-stats-row">
          {director.stats.map((st, idx) => (
            <div key={idx} className="stat-highlight-pill">
              <span className="stat-val">{st.value}</span>
              <span className="stat-lbl">{st.label}</span>
            </div>
          ))}
        </div>

        {/* 3. Micro Tag Chips: Key Strategic Focus */}
        <div className="info-chips-row">
          {director.chips.map((chip, idx) => (
            <span key={idx} className="focus-micro-chip">
              {chip}
            </span>
          ))}
        </div>

        {/* 4. Executive Biography & Career Background (Directly Displayed) */}
        <div className="direct-section-block">
          <div className="direct-section-title">
            <Briefcase size={14} color="var(--accent-gold)" />
            <h4>Executive Biography &amp; Career Background</h4>
          </div>
          <div className="direct-bio-content">
            {director.biography.map((pText, pIdx) => (
              <p key={pIdx} className="direct-bio-paragraph">
                {pText}
              </p>
            ))}
          </div>
        </div>

        {/* 5. Core Competencies & Deal Execution (Directly Displayed) */}
        <div className="direct-section-block">
          <div className="direct-section-title">
            <Award size={14} color="var(--accent-gold)" />
            <h4>Core Competencies &amp; Deal Execution</h4>
          </div>
          <div className="competencies-stack">
            {director.competencies.map((comp, cIdx) => (
              <div key={cIdx} className="competency-card">
                <div className="comp-dot" />
                <div>
                  <strong className="comp-title">{comp.title}</strong>
                  <p className="comp-desc">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Key Strategic Alliance (Directly Displayed) */}
        <div className="direct-section-block">
          <div className="alliance-spotlight-box">
            <div className="alliance-badge">{director.alliance.badge}</div>
            <h5 className="alliance-headline">{director.alliance.title}</h5>
            <p className="alliance-text">{director.alliance.desc}</p>
          </div>
        </div>

        {/* 7. Geographic Reach & Market Network (Directly Displayed) */}
        <div className="direct-section-block">
          <div className="direct-section-title">
            <Globe size={14} color="var(--accent-gold)" />
            <h4>Geographic Reach &amp; Market Network</h4>
          </div>
          <p className="geo-subtext">
            {director.geographicReach.subtext}
          </p>
          <div className="geo-grid">
            {director.geographicReach.locations.map((loc, lIdx) => (
              <div key={lIdx} className="geo-pill">
                <MapPin size={13} color="var(--accent-gold)" />
                <div>
                  <strong>{loc.region}:</strong> {loc.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Direct Action CTAs: Glass-Pill Buttons */}
        <div className="info-cta-footer">
          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry(`Direct Inquiry - ${director.name}`)}
            className="glass-pill-action cta-action-primary"
          >
            <Mail size={14} color="var(--accent-gold)" />
            <span>Direct Communication</span>
          </button>

          <a
            href={director.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with ${director.name} on LinkedIn`}
            className="glass-pill-action cta-action-icon"
            title="Connect via LinkedIn"
          >
            <LinkedinIcon size={14} color="var(--accent-gold)" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ExecutiveLeadership({ onOpenEnquiry }) {
  return (
    <section id="executive-leadership" className="executive-section-root">
      {/* Ambient Moody Orbs for Deep #0E4D44 Glass Refraction */}
      <div aria-hidden="true" className="moody-orb orb-teal-glow" />
      <div aria-hidden="true" className="moody-orb orb-gold-glow" />

      <div className="executive-inner-wrapper">
        {/* Section Header */}
        <div className="section-title-center">
          <div className="luxury-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span>LEADERSHIP &amp; GOVERNANCE</span>
            <span className="eyebrow-accent-bar" />
          </div>

          <h2 className="luxury-title-heading">
            The Minds Behind The Legacy
          </h2>

          <p className="luxury-description-paragraph">
            Combining generational real estate development heritage with institutional capital stewardship, disciplined transaction underwriting, and long-term asset excellence.
          </p>
        </div>

        {/* 2-Column Responsive Grid on Desktop, 1-Column on Mobile */}
        <div className="directors-two-col-grid">
          {DIRECTORS.map((director) => (
            <DirectorCard
              key={director.id}
              director={director}
              onOpenEnquiry={onOpenEnquiry}
            />
          ))}
        </div>

        {/* Executive Board & Advisory Focus Grid */}
        <div className="advisory-section-block">
          <div className="advisory-intro-row">
            <div>
              <h3 className="advisory-headline">
                Executive Board &amp; Advisory Focus
              </h3>
              <p className="advisory-subheadline">
                Disciplined governance frameworks across multi-sector real estate investments
              </p>
            </div>
          </div>

          <div className="advisory-three-grid">
            {ADVISORY_PILLARS.map((pillar, idx) => (
              <div key={idx} className="advisory-dark-glass-card">
                <div className="advisory-tag-pill">{pillar.tag}</div>
                <h4 className="advisory-card-heading">{pillar.title}</h4>
                <p className="advisory-card-text">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scoped CSS Styles Infused with Brand Theme Color #0E4D44 */}
      <style>{`
        .executive-section-root {
          position: relative;
          padding: 110px 24px;
          background: linear-gradient(135deg, #031513 0%, #06231f 35%, #0e4d44 75%, #041815 100%);
          color: #FFFFFF;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .executive-section-root {
            padding: 120px 48px;
          }
        }

        @media (min-width: 1280px) {
          .executive-section-root {
            padding: 130px 64px;
          }
        }

        .moody-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .orb-teal-glow {
          top: 15%;
          left: -80px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(14, 77, 68, 0.65) 0%, rgba(14, 77, 68, 0) 70%);
          filter: blur(85px);
        }

        .orb-gold-glow {
          bottom: 12%;
          right: -80px;
          width: 640px;
          height: 640px;
          background: radial-gradient(circle, rgba(191, 153, 68, 0.28) 0%, rgba(14, 77, 68, 0.3) 50%, transparent 70%);
          filter: blur(95px);
        }

        .executive-inner-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-title-center {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 64px;
        }

        .luxury-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 16px;
        }

        .eyebrow-accent-bar {
          width: 32px;
          height: 1px;
          background: var(--accent-gold);
        }

        .luxury-title-heading {
          margin: 0 0 20px;
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 500;
          line-height: 1.15;
          color: #FFFFFF;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .luxury-title-heading {
            font-size: 48px;
          }
        }

        .luxury-description-paragraph {
          font-size: 16.5px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
        }

        /* 2-Column Responsive Grid on Desktop, 1-Column on Mobile */
        .directors-two-col-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: stretch;
          margin-bottom: 72px;
        }

        @media (min-width: 1024px) {
          .directors-two-col-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (min-width: 1280px) {
          .directors-two-col-grid {
            gap: 44px;
          }
        }

        /* Card Container (Upper Photo, Down Info) */
        .executive-vertical-card {
          width: 100%;
        }

        /* UPPER PHOTO SECTION */
        .card-photo-upper {
          position: relative;
          width: 100%;
          aspect-ratio: 440 / 399;
          height: auto;
          overflow: hidden;
          background: rgba(3, 21, 19, 0.4);
          border-top-left-radius: 17px;
          border-top-right-radius: 17px;
          border-bottom: 1px solid rgba(14, 77, 68, 0.45);
        }

        @media (min-width: 768px) {
          .card-photo-upper {
            aspect-ratio: 440 / 399;
            height: auto;
          }
        }

        .photo-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .director-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .photo-gradient-blend {
          display: none;
        }

        .photo-glass-badge {
          position: absolute;
          top: 18px;
          left: 18px;
          background: rgba(6, 32, 28, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(14, 77, 68, 0.6);
          border-radius: 999px;
          padding: 7px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5), 0 0 15px rgba(14, 77, 68, 0.3);
        }

        .badge-gold-indicator {
          width: 6.5px;
          height: 6.5px;
          border-radius: 50%;
          background-color: var(--accent-gold);
          box-shadow: 0 0 8px var(--accent-gold);
          flex-shrink: 0;
        }

        .badge-title-text {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FFFFFF;
          white-space: nowrap;
        }

        /* DOWN INFORMATION SECTION */
        .card-info-down {
          padding: 32px 28px 36px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .card-info-down {
            padding: 36px 36px 40px;
          }
        }

        .info-header-block {
          margin-bottom: 22px;
        }

        .info-category-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .category-decor-line {
          width: 20px;
          height: 1px;
          background: var(--accent-gold);
        }

        .director-editorial-name {
          margin: 0 0 6px;
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 600;
          line-height: 1.2;
          color: #FFFFFF;
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .director-editorial-name {
            font-size: 32px;
          }
        }

        .director-role-subtext {
          font-size: 13.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.76);
          margin-bottom: 12px;
        }

        /* Academic Background Badge */
        .director-academic-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 6px;
          background: rgba(191, 153, 68, 0.12);
          border: 1px solid rgba(191, 153, 68, 0.32);
          font-size: 12.5px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 4px;
        }

        /* Highlights Stats Bar in #0E4D44 Tint */
        .info-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 20px;
          padding: 14px 16px;
          background: rgba(14, 77, 68, 0.22);
          border: 1px solid rgba(14, 77, 68, 0.45);
          border-radius: 10px;
        }

        .stat-highlight-pill {
          display: flex;
          flex-direction: column;
          gap: 2px;
          text-align: center;
        }

        .stat-val {
          font-family: var(--font-serif);
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-gold);
          letter-spacing: 0.02em;
        }

        @media (min-width: 768px) {
          .stat-val {
            font-size: 15px;
          }
        }

        .stat-lbl {
          font-size: 9.5px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 500;
        }

        /* Micro Tag Chips */
        .info-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 24px;
        }

        .focus-micro-chip {
          background: rgba(14, 77, 68, 0.28);
          border: 1px solid rgba(14, 77, 68, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 5px 12px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 500;
          color: #E6F7F4;
          letter-spacing: 0.04em;
        }

        /* DIRECT SECTION BLOCKS */
        .direct-section-block {
          margin-bottom: 26px;
          padding-top: 18px;
          border-top: 1px solid rgba(14, 77, 68, 0.35);
        }

        .direct-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .direct-section-title h4 {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-gold);
        }

        .direct-bio-content .direct-bio-paragraph {
          margin: 0 0 12px;
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.85);
        }

        .direct-bio-content .direct-bio-paragraph:last-child {
          margin-bottom: 0;
        }

        /* Competencies Stack */
        .competencies-stack {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .competency-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 14px;
          background: rgba(4, 24, 21, 0.45);
          border: 1px solid rgba(14, 77, 68, 0.4);
          border-radius: 8px;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .competency-card:hover {
          background: rgba(14, 77, 68, 0.28);
          border-color: rgba(191, 153, 68, 0.4);
        }

        .comp-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-gold);
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--accent-gold);
        }

        .comp-title {
          font-size: 13px;
          color: #FFFFFF;
          display: block;
          margin-bottom: 3px;
        }

        .comp-desc {
          margin: 0;
          font-size: 12.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.75);
        }

        /* Alliance Spotlight Box */
        .alliance-spotlight-box {
          padding: 18px 20px;
          background: rgba(14, 77, 68, 0.28);
          border: 1px solid rgba(14, 77, 68, 0.6);
          border-left: 3px solid var(--accent-gold);
          border-radius: 8px;
        }

        .alliance-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 6px;
        }

        .alliance-headline {
          margin: 0 0 8px;
          font-family: var(--font-serif);
          font-size: 17px;
          color: #FFFFFF;
          font-weight: 600;
        }

        .alliance-text {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
        }

        /* Geographic Reach */
        .geo-subtext {
          margin: 0 0 14px;
          font-size: 13px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.76);
        }

        .geo-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        @media (min-width: 640px) {
          .geo-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .geo-pill {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 10px 12px;
          background: rgba(4, 24, 21, 0.45);
          border: 1px solid rgba(14, 77, 68, 0.4);
          border-radius: 6px;
          font-size: 12.5px;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.82);
        }

        .geo-pill strong {
          color: #FFFFFF;
        }

        /* Bottom Action CTAs in #0E4D44 Glass Glow */
        .info-cta-footer {
          margin-top: 10px;
          padding-top: 24px;
          border-top: 1px solid rgba(14, 77, 68, 0.4);
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .glass-pill-action {
          position: relative;
          background: rgba(14, 77, 68, 0.45);
          border: 1px solid rgba(14, 77, 68, 0.75);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 999px;
          color: #FFFFFF;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .cta-action-primary {
          padding: 12px 24px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          gap: 8px;
        }

        .cta-action-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }

        .glass-pill-action:hover {
          background: #0E4D44 !important;
          border-color: var(--accent-gold) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -6px rgba(0, 0, 0, 0.5), 0 0 20px rgba(14, 77, 68, 0.5) !important;
        }

        /* Button Shine Sweep Effect */
        .glass-pill-action::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -70%;
          width: 45%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.28) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(25deg);
          transition: all 0.75s ease;
          pointer-events: none;
        }

        .glass-pill-action:hover::after {
          left: 140%;
        }

        /* Advisory Governance Block */
        .advisory-section-block {
          padding-top: 56px;
          border-top: 1px solid rgba(14, 77, 68, 0.4);
        }

        .advisory-intro-row {
          margin-bottom: 28px;
        }

        .advisory-headline {
          font-family: var(--font-serif);
          font-size: 28px;
          color: #FFFFFF;
          margin: 0 0 6px;
          font-weight: 500;
        }

        .advisory-subheadline {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.02em;
          margin: 0;
        }

        .advisory-three-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        @media (min-width: 768px) {
          .advisory-three-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .advisory-dark-glass-card {
          background: rgba(14, 77, 68, 0.2);
          border: 1px solid rgba(14, 77, 68, 0.45);
          border-top: 3px solid var(--accent-gold);
          border-radius: 12px;
          padding: 30px 24px;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .advisory-dark-glass-card:hover {
          background: rgba(14, 77, 68, 0.32);
          border-color: rgba(191, 153, 68, 0.55);
          transform: translateY(-4px);
        }

        .advisory-tag-pill {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent-gold);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .advisory-card-heading {
          font-family: var(--font-serif);
          font-size: 21px;
          color: #FFFFFF;
          margin: 0 0 10px;
          font-weight: 500;
        }

        .advisory-card-text {
          margin: 0;
          font-size: 13.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
        }
      `}</style>
    </section>
  );
}
