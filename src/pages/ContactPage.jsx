import React, { useState } from 'react';
import Header from '../components/Header';
import { Mail, Clock, MapPin, Phone, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

export default function ContactPage({ onNavigate, onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Residential - Aestate Villa Krabi',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: 'How does the 30-year registered lease structure protect foreign buyers at Aestate Villa?',
      a: 'Under Thai Civil and Commercial Code Section 538, leases exceeding 3 years must be formally registered on the title deed (Chanote) at the Provincial Land Office. Aestate Villa leases are officially recorded with the government, giving the leaseholder legally protected real rights against any third party or subsequent land transfer. Succession and assignment clauses are incorporated to allow transfer to heirs or sale.'
    },
    {
      q: 'What is the nature of EAM’s relationship with Destination Resorts Group?',
      a: 'EAM collaborates with Destination Resorts Group as a strategic investment advisor and co-investor across 8 premier coastal destinations in Thailand. Destination Resorts operates and manages the properties with international hospitality standards, while EAM stewards asset positioning, capital structuring, and long-term valuation enhancement.'
    },
    {
      q: 'Can family offices co-invest in new coastal hotel acquisitions?',
      a: 'Yes. EAM frequently structures private syndications, co-investment vehicles, and joint ventures alongside select family offices and accredited institutional partners seeking exposure to high-yielding Thai resort assets.'
    },
    {
      q: 'What are the concierge hours and response timeline for confidential proposals?',
      a: 'Our Private Concierge operates Monday through Saturday, 09:00 to 18:00 ICT (GMT+7). All investor inquiries and proposal requests receive a personalized response from an executive principal within 24 business hours.'
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
          activePage="contact"
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
            Private Concierge &amp; Inquiries
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
            Direct Private Engagement
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              maxWidth: '740px',
              opacity: 0.92
            }}
          >
            Connect directly with our investment principals, residential advisors, and corporate hospitality team for tailored asset consultations.
          </p>
        </div>
      </section>

      {/* Main Office Locations & Form Section */}
      <section style={{ padding: '96px 48px', background: '#ffffff' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '64px'
          }}
        >
          {/* Office Details */}
          <div>
            <div className="gold-badge" style={{ marginBottom: '16px' }}>
              <span className="gold-line" />
              Corporate Headquarters
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text-dark)', marginBottom: '24px' }}>
              EAM Bangkok Co., Ltd.
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '36px' }}>
              Established in Bangkok in 2004. Our primary executive suite oversees development pipelines, corporate partnerships, and institutional asset management.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(191,153,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>Head Office Address</div>
                  <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-dark)', marginTop: '4px', lineHeight: 1.5 }}>
                    Sathorn Square Office Tower, 98 North Sathorn Rd, Silom, Bang Rak, Bangkok 10500, Thailand
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(191,153,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>Direct Investor Inquiries</div>
                  <a href="mailto:Contact@aeminvestment.com" style={{ fontSize: '16px', fontWeight: 500, color: 'var(--primary-green)', marginTop: '4px', display: 'block' }}>
                    Contact@aeminvestment.com
                  </a>
                  <a href="mailto:partnerships@aeminvestment.com" style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '2px', display: 'block' }}>
                    partnerships@aeminvestment.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(191,153,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)', flexShrink: 0 }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>Concierge Availability</div>
                  <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-dark)', marginTop: '4px' }}>
                    Monday – Saturday: 09:00 – 18:00 ICT (GMT+7)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(191,153,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold-dark)', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--secondary-sage)', fontWeight: 600 }}>Telephone &amp; WhatsApp</div>
                  <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-dark)', marginTop: '4px' }}>
                    +66 (0) 2 123 4567 / +66 (0) 81 987 6543
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Project Desks */}
            <div style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-light)', borderLeft: '3px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--primary-green)', marginBottom: '8px' }}>
                Regional Project Offices
              </div>
              <div style={{ fontSize: '14.5px', color: 'var(--text-dark)', lineHeight: 1.6 }}>
                <strong>Krabi Project Office:</strong> Aestate Villa Site Gallery, Ao Nang, Muang Krabi 81180<br />
                <strong>Phuket Hospitality Desk:</strong> Surin &amp; Patong Asset Management Suite, Phuket 83110
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div
            style={{
              background: 'var(--primary-green)',
              color: 'var(--bg-light)',
              padding: '48px 44px',
              borderTop: '4px solid var(--accent-gold)'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <CheckCircle2 size={56} color="var(--accent-gold)" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--bg-light)', marginBottom: '16px' }}>
                  Enquiry Dispatched
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.9, marginBottom: '24px' }}>
                  Thank you, <strong style={{ color: 'var(--accent-gold)' }}>{formData.name}</strong>. An advisor from EAM Bangkok Private Concierge has received your requirements and will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn-gold"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="gold-badge-dark" style={{ marginBottom: '14px' }}>
                  <span className="gold-line" />
                  Private Inquiry Form
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', color: 'var(--bg-light)', marginBottom: '12px' }}>
                  Make an Enquiry
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.6, opacity: 0.88, marginBottom: '28px' }}>
                  Tell us what you are looking for and an executive advisor will get back to you personally.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '6px' }}>
                      Interest Focus
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="luxury-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="Residential - Aestate Villa Krabi" style={{ background: '#1E2229' }}>Residential · Aestate Villa Krabi</option>
                      <option value="Hospitality Investment & Hotel Portfolios" style={{ background: '#1E2229' }}>Hospitality Investment &amp; Hotel Portfolios</option>
                      <option value="Real Estate Development & Asset Management" style={{ background: '#1E2229' }}>Real Estate Development &amp; Asset Management</option>
                      <option value="Commercial & Retail Lease Structuring" style={{ background: '#1E2229' }}>Commercial &amp; Retail Lease Structuring</option>
                      <option value="Asset Repositioning & Disposal Strategy" style={{ background: '#1E2229' }}>Asset Repositioning &amp; Disposal Strategy</option>
                      <option value="General Private Concierge" style={{ background: '#1E2229' }}>General Private Concierge</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Full name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="luxury-input"
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    <input
                      type="email"
                      required
                      placeholder="Email address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="luxury-input"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="luxury-input"
                    />
                  </div>

                  <textarea
                    rows={4}
                    required
                    placeholder="How can we assist you? *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="luxury-input"
                    style={{ minHeight: '130px', resize: 'vertical' }}
                  />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', opacity: 0.8 }}>
                    <ShieldCheck size={16} color="var(--accent-gold)" />
                    <span>All client disclosures remain strictly protected under NDA.</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      marginTop: '10px',
                      padding: '18px',
                      width: '100%'
                    }}
                  >
                    Send Enquiry
                  </button>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>
                    By submitting you agree to our Privacy Policy.
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ padding: '96px 48px', background: 'var(--bg-light)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="gold-badge" style={{ marginBottom: '14px', justifyContent: 'center' }}>
              <span className="gold-line" />
              Clarity &amp; Transparency
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '38px', color: 'var(--text-dark)' }}>
              Investor Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(112, 138, 114, 0.25)',
                    borderLeft: isOpen ? '4px solid var(--accent-gold)' : '1px solid rgba(112, 138, 114, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '24px 28px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '19px', fontWeight: 600, color: 'var(--primary-green)' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={20} color="var(--accent-gold)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 28px 24px', fontSize: '15px', lineHeight: 1.75, color: 'var(--text-dark)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
