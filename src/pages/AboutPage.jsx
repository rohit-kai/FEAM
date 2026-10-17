import React from 'react';
import Header from '../components/Header';
import { FOUNDERS, CORE_VALUES, HERITAGE_TIMELINE } from '../data/siteData';
import { Award, ShieldCheck, Leaf, ArrowRight, Mail, ChevronRight } from 'lucide-react';

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
          onOpenEnquiry={() => onOpenEnquiry('General Investment')}
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
            About EAM Group
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
            Two Decades of Restraint, Service &amp; Stewardship
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '720px',
              opacity: 0.92
            }}
          >
            EAM Bangkok was founded in 2004 by Supakit Eimsamank, originating from multi-generational family asset management, land development, and property operations across Thailand.
          </p>
        </div>
      </section>

      {/* Legacy & Foundation Narrative */}
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
              The Founding Philosophy
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '38px',
                lineHeight: 1.25,
                color: 'var(--text-dark)',
                marginBottom: '24px'
              }}
            >
              "True luxury is measured in restraint, in service remembered years later."
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '20px' }}>
              Unlike speculative developers driven by transient fashion, EAM has maintained a steadfast doctrine: acquire irreplaceable locations, structure legally sound frameworks, and operate with long-term capital stewardship.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-dark)' }}>
              From prime commercial retail management in central Bangkok to ultra-luxury tropical residential villas in Ao Nang, Krabi and landmark coastal hospitality investments with Destination Resorts Group, our portfolio exemplifies enduring value.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-light)',
              border: '1px solid rgba(112, 138, 114, 0.3)',
              borderTop: '4px solid var(--accent-gold)',
              padding: '48px 40px'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '26px',
                color: 'var(--primary-green)',
                marginBottom: '24px'
              }}
            >
              Key Institutional Pillars
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '18px' }}>01</span>
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>
                    Family Office Governance
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)' }}>
                    Generational capital alignment ensuring investments endure through multi-decade economic cycles.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '18px' }}>02</span>
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>
                    Institutional Operator Partnerships
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)' }}>
                    Co-investing alongside proven hospitality operators like Destination Resorts Group to maximize RevPAR.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '18px' }}>03</span>
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>
                    Uncompromising Legal Rigor
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)' }}>
                    Full 30-year registered government leases, transparent titling, and clear regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '56px' }}>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Executive Leadership
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '42px',
                color: 'var(--text-dark)',
                marginBottom: '16px'
              }}
            >
              The Minds Behind The Legacy
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
              Under the joint stewardship of our Managing Director and Chief Executive Officer, EAM has evolved into an agile, highly respected real estate and hospitality investment powerhouse.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '40px' }}>
            {FOUNDERS.map((founder, idx) => (
              <article
                key={idx}
                className="card-hover-lift"
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(112, 138, 114, 0.3)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '360px', overflow: 'hidden' }}>
                  <img
                    src={founder.image}
                    alt={founder.role}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '12px', letterSpacing: '.2em', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '8px' }}>
                    {founder.number} &mdash;
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', color: 'var(--primary-green)', marginBottom: '6px' }}>
                    {founder.role}
                  </h3>
                  <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '16px' }}>
                    {founder.title}
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '24px' }}>
                    {founder.bio}
                  </p>
                  <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(112, 138, 114, 0.25)', paddingTop: '16px', display: 'flex', gap: '12px' }}>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '10px 18px',
                        border: '1px solid var(--secondary-sage)',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--primary-green)'
                      }}
                    >
                      LinkedIn Profile
                    </a>
                    <a
                      href={`mailto:${founder.email}`}
                      style={{
                        padding: '10px 18px',
                        border: '1px solid var(--secondary-sage)',
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--primary-green)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Mail size={14} />
                      Direct Inquiry
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Heritage Timeline */}
      <section style={{ padding: '96px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px' }}>
            <div className="gold-badge" style={{ marginBottom: '16px', justifyContent: 'center' }}>
              <span className="gold-line" />
              Two Decades of Growth
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)' }}>
              Heritage &amp; Milestones
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {HERITAGE_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="card-hover-lift"
                style={{
                  background: 'var(--bg-light)',
                  padding: '32px',
                  borderTop: '3px solid var(--accent-gold)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '38px',
                    color: 'var(--accent-gold-dark)',
                    fontWeight: 600,
                    lineHeight: 1,
                    marginBottom: '14px'
                  }}
                >
                  {item.year}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    color: 'var(--primary-green)',
                    marginBottom: '10px',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'var(--text-dark)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Certifications Strip */}
      <section
        style={{
          backgroundColor: 'var(--primary-green)',
          color: 'var(--bg-light)',
          padding: '72px 48px'
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '36px'
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--bg-light)', marginBottom: '8px' }}>
              Certified Excellence &amp; ESG Standards
            </h3>
            <p style={{ fontSize: '16px', opacity: 0.85, maxWidth: '600px' }}>
              Our assets adhere to international hospitality benchmarks, quality management systems, and sustainable eco-footprint criteria.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ border: '1px solid rgba(191,153,68,0.5)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Award size={24} color="var(--accent-gold)" />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '.1em' }}>FORBES TRAVEL</div>
                <div style={{ fontSize: '12px', opacity: 0.85 }}>Four-Star Hospitality Standard</div>
              </div>
            </div>

            <div style={{ border: '1px solid rgba(191,153,68,0.5)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={24} color="var(--accent-gold)" />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '.1em' }}>ISO 9001:2015</div>
                <div style={{ fontSize: '12px', opacity: 0.85 }}>Quality Management Certified</div>
              </div>
            </div>

            <div style={{ border: '1px solid rgba(191,153,68,0.5)', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Leaf size={24} color="var(--accent-gold)" />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '.1em' }}>GREEN KEY</div>
                <div style={{ fontSize: '12px', opacity: 0.85 }}>Global Eco-Rating Benchmark</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subpage CTA */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--text-dark)', marginBottom: '16px' }}>
            Partner With EAM Bangkok
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '32px' }}>
            Whether discussing hotel investment structuring, private villa acquisitions, or family asset repositioning, our executive team welcomes confidential dialogues.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('General Investment')}
          >
            <span>Connect with our Principals</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
