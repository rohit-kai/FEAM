import React from 'react';
import Header from '../components/Header';
import { MILESTONES } from '../data/siteData';
import { Award, ShieldCheck, Leaf, ArrowUpRight, ChevronRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function ExperiencePage({ onNavigate, onOpenEnquiry }) {
  const caseStudies = [
    {
      title: 'Aestate Villa Development Masterplan',
      location: 'Ao Nang, Krabi',
      category: 'Luxury Residential Development',
      year: '2019 – Present',
      summary: 'Origination, masterplanning, and development of ultra-luxury pool residences on prime hillside land with panoramic karst mountain views. Structured with 30-year registered leases recorded at the Krabi Land Office.',
      metrics: ['100% Legal Lease Registration', 'Turnkey Tropical Architecture', 'Projected 8-11% Net Rental Yield']
    },
    {
      title: 'Coastal Hotel Portfolio Expansion & Repositioning',
      location: 'Phuket, Samui, Pattaya & Hua Hin',
      category: 'Hospitality Investment Advisory',
      year: '2015 – 2026',
      summary: 'Strategic co-investment and advisory alongside Destination Resorts Group across 8 premier coastal destinations. Repositioning resort assets, upgrading guest experience doctrines, and expanding direct digital channels.',
      metrics: ['2,400+ Hospitality Keys', '+24% RevPAR Index Premium', 'Green Key Eco-Rating Certified']
    },
    {
      title: 'Prime Bangkok Commercial & Retail Structuring',
      location: 'Central Bangkok',
      category: 'Commercial Asset Management',
      year: '2004 – 2026',
      summary: 'Two decades of active tenancy administration, long-term lease optimization, and revenue restructuring across high-traffic prime retail and mixed-use commercial developments in Bangkok’s central business district.',
      metrics: ['98.4% Average Historical Occupancy', 'Long-term Tier-1 Tenant Retention', 'Consistent Generational Cash Flow']
    },
    {
      title: 'Strategic Land Repositioning & Disposal',
      location: 'Eastern Seaboard & Coastal Corridors',
      category: 'Asset Repositioning & Divestment',
      year: '2018 – 2024',
      summary: 'Identification of underutilized land parcels, comprehensive zoning modifications, and development approvals before executing off-market disposals to institutional buyers at peak cycle valuations.',
      metrics: ['3.2x Realized Capital Return', 'Zero Litigation Exposure', 'Strict NDA Discretion']
    }
  ];

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
          onOpenEnquiry={() => onOpenEnquiry('Experience & Track Record')}
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
            Proven Performance
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
            Two Decades of Proven Value &amp; Track Record
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '740px',
              opacity: 0.92
            }}
          >
            Since 2004, EAM has navigated complex market cycles with disciplined underwriting, long-term capital alignment, and uncompromised fiduciary execution.
          </p>
        </div>
      </section>

      {/* Track Record Stats */}
      <section style={{ padding: '80px 48px', background: '#ffffff', borderBottom: '1px solid rgba(112, 138, 114, 0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '50px', color: 'var(--primary-green)', fontWeight: 500, lineHeight: 1 }}>
                2004
              </div>
              <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-dark)', fontWeight: 600, marginTop: '12px' }}>
                Bangkok Founding
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Established by Supakit Eimsamank
              </div>
            </div>

            <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '50px', color: 'var(--primary-green)', fontWeight: 500, lineHeight: 1 }}>
                2,400+
              </div>
              <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-dark)', fontWeight: 600, marginTop: '12px' }}>
                Hospitality Keys
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Across 8 coastal destinations
              </div>
            </div>

            <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '50px', color: 'var(--primary-green)', fontWeight: 500, lineHeight: 1 }}>
                7
              </div>
              <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-dark)', fontWeight: 600, marginTop: '12px' }}>
                Business Areas
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Fully integrated lifecycle capabilities
              </div>
            </div>

            <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '24px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '50px', color: 'var(--primary-green)', fontWeight: 500, lineHeight: 1 }}>
                30<span style={{ fontSize: '32px', color: 'var(--accent-gold-dark)' }}>-Yr</span>
              </div>
              <div style={{ fontSize: '12px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-dark)', fontWeight: 600, marginTop: '12px' }}>
                Registered Lease
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Aestate Villa, Ao Nang, Krabi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <div className="gold-badge" style={{ marginBottom: '14px' }}>
              <span className="gold-line" />
              Landmark Transactions &amp; Projects
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Selected Portfolio Engagements
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '12px' }}>
              Examining real-world execution across residential development, hotel advisory, and commercial lease structuring.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="card-hover-lift"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(112, 138, 114, 0.25)',
                  borderTop: '4px solid var(--accent-gold)',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>
                      {cs.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>
                      {cs.year}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--primary-green)', marginBottom: '8px', lineHeight: 1.25 }}>
                    {cs.title}
                  </h3>

                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '16px' }}>
                    {cs.location}
                  </div>

                  <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '24px' }}>
                    {cs.summary}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(112, 138, 114, 0.2)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', fontWeight: 600, marginBottom: '10px' }}>
                    Key Outcomes
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cs.metrics.map((m, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-dark)' }}>
                        <CheckCircle2 size={15} color="var(--accent-gold)" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Accreditations */}
      <section style={{ padding: '80px 48px', background: 'var(--primary-green)', color: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div className="gold-badge-dark" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <span className="gold-line" />
            Global Quality Standards
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--bg-light)', marginBottom: '20px' }}>
            Rigorous Fiduciary Standards
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, maxWidth: '680px', margin: '0 auto 48px' }}>
            Our corporate structure and managed properties maintain stringent third-party certifications ensuring accountability, eco-efficiency, and institutional operational governance.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', textAlign: 'left' }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(191,153,68,0.3)', padding: '32px 28px' }}>
              <Award size={32} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--bg-light)', marginBottom: '10px' }}>
                Forbes Travel Four-Star
              </h3>
              <p style={{ fontSize: '14.5px', opacity: 0.85, lineHeight: 1.6 }}>
                Benchmarked against global hospitality standards for bespoke guest service, attention to nuance, and immaculate facility upkeep.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(191,153,68,0.3)', padding: '32px 28px' }}>
              <ShieldCheck size={32} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--bg-light)', marginBottom: '10px' }}>
                ISO 9001 Certified
              </h3>
              <p style={{ fontSize: '14.5px', opacity: 0.85, lineHeight: 1.6 }}>
                Certified Quality Management Systems across property administration, vendor contracting, and financial controls.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(191,153,68,0.3)', padding: '32px 28px' }}>
              <Leaf size={32} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--bg-light)', marginBottom: '10px' }}>
                Green Key Eco-Rating
              </h3>
              <p style={{ fontSize: '14.5px', opacity: 0.85, lineHeight: 1.6 }}>
                Strict environmental stewardship, renewable energy integration, water reclamation, and zero-single-use plastics across resort destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: '#ffffff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            Request Our Track Record &amp; Institutional Deck
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
            Qualified institutions, family offices, and investors may request our confidential track record dossier and audited historical metrics under NDA.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Experience & Track Record')}
          >
            <span>Request Institutional Dossier</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
