import React from 'react';
import Header from '../components/Header';
import { KEY_PROJECTS, STRATEGIC_PARTNERS } from '../data/siteData';
import { Check, ChevronRight, ArrowUpRight, MapPin, Building, ShieldCheck } from 'lucide-react';

export default function ResidentialPage({ onNavigate, onOpenEnquiry }) {
  const aestate = KEY_PROJECTS.find(p => p.id === 'aestate');
  const bangKhae = KEY_PROJECTS.find(p => p.id === 'bang-khae');
  const lhPartner = STRATEGIC_PARTNERS.find(p => p.name === 'Land & Houses PLC');

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
          onOpenEnquiry={() => onOpenEnquiry('Land Acquisitions & Joint Venture Development')}
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
            Residential &amp; Villa Development
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
            Residential &amp; Land Transformation Projects
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '740px',
              opacity: 0.92
            }}
          >
            Developing premium lifestyle residential communities, long-term leasehold luxury villas, and strategic land redevelopment transformations.
          </p>
        </div>
      </section>

      {/* Project 1: Aestate Villa (Ao Nang, Krabi) */}
      <section style={{ padding: '96px 48px', background: '#ffffff', borderBottom: '1px solid rgba(112, 138, 114, 0.2)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Featured Residential Villa Project
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--text-dark)', marginBottom: '12px' }}>
              {aestate?.name || 'Aestate Villa'}
            </h2>

            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '6px' }}>
              Asset Class: {aestate?.assetClass}
            </div>

            <div style={{ fontSize: '13px', color: 'var(--secondary-sage)', marginBottom: '20px' }}>
              <strong>Location:</strong> {aestate?.location} · <strong>Structure:</strong> {aestate?.structure}
            </div>

            <p style={{ fontSize: '16.5px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '24px' }}>
              {aestate?.profile}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid rgba(112, 138, 114, 0.25)', paddingTop: '20px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Check size={16} color="var(--accent-gold)" />
                <span style={{ fontSize: '14.5px', color: 'var(--text-dark)' }}>
                  30-Year Registered Lease executed officially at Krabi Land Office
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Check size={16} color="var(--accent-gold)" />
                <span style={{ fontSize: '14.5px', color: 'var(--text-dark)' }}>
                  Contemporary tropical lifestyle architecture with private pools
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Check size={16} color="var(--accent-gold)" />
                <span style={{ fontSize: '14.5px', color: 'var(--text-dark)' }}>
                  High capital appreciation and rental yield in Krabi’s prime corridor
                </span>
              </div>
            </div>

            <button
              type="button"
              className="btn-gold"
              onClick={() => onOpenEnquiry('Aestate Villa (Ao Nang, Krabi)')}
            >
              <span>Inquire Regarding Aestate Villa</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-elevated)' }}>
            <img
              src="/assets/aestate-villa.jpg"
              alt="Aestate Villa in Ao Nang Krabi"
              style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Project 2: Bang Khae Asset Transformation with Land & Houses PLC */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          <div style={{ position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-elevated)' }}>
            <img
              src="/assets/resort-phuket.jpg"
              alt="Bang Khae Land Transformation Site"
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Strategic Land Repositioning
            </div>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text-dark)', marginBottom: '12px' }}>
              {bangKhae?.name || 'Bang Khae Asset Transformation'}
            </h2>

            <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold-dark)', marginBottom: '6px' }}>
              Asset Class: {bangKhae?.assetClass}
            </div>

            <div style={{ fontSize: '13px', color: 'var(--secondary-sage)', marginBottom: '20px' }}>
              <strong>Location:</strong> {bangKhae?.location}
            </div>

            <p style={{ fontSize: '16.5px', lineHeight: 1.8, color: 'var(--text-dark)', marginBottom: '24px' }}>
              {bangKhae?.profile}
            </p>

            {/* Strategic Partner Box: Land & Houses PLC */}
            <div style={{ background: '#ffffff', border: '1px solid rgba(112, 138, 114, 0.25)', borderLeft: '3px solid var(--accent-gold)', padding: '24px 28px', marginBottom: '28px' }}>
              <div style={{ fontSize: '11px', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600, marginBottom: '4px' }}>
                Development Counterparty
              </div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--primary-green)', marginBottom: '6px' }}>
                {lhPartner?.name || 'Land & Houses PLC'}
              </h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {lhPartner?.desc || 'Redevelopment collaboration and property counterparty involving high-end residential land transformation in the Bang Khae district.'}
              </p>
            </div>

            <button
              type="button"
              className="btn-gold"
              onClick={() => onOpenEnquiry('Land Acquisitions & Joint Venture Development')}
            >
              <span>Inquire Land Acquisitions &amp; JVs</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Subpage CTA */}
      <section style={{ padding: '80px 48px', textAlign: 'center', background: 'var(--primary-green)', color: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', color: 'var(--bg-light)', marginBottom: '16px' }}>
            Land Acquisitions &amp; Joint Venture Development
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '32px' }}>
            EAM Bangkok engages in strategic land acquisitions, residential community development, and collaborative redevelopment across Thailand.
          </p>
          <button
            type="button"
            className="btn-gold"
            onClick={() => onOpenEnquiry('Land Acquisitions & Joint Venture Development')}
          >
            <span>Contact Our Team</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
