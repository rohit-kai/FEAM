import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import HospitalityPage from './pages/HospitalityPage';
import ResidentialPage from './pages/ResidentialPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryInterest, setEnquiryInterest] = useState('General Investment');

  // Sync with URL hash for seamless bookmarking and browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'capabilities', 'hospitality', 'residential', 'experience', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openEnquiry = (interest = 'General Investment') => {
    setEnquiryInterest(interest);
    setEnquiryModalOpen(true);
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        color: 'var(--text-dark)',
        backgroundColor: 'var(--bg-light)'
      }}
    >
      {/* Main Page Router View */}
      <main style={{ flex: 1, width: '100%' }}>
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenEnquiry={openEnquiry}
          />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenEnquiry={openEnquiry}
          />
        )}
        {activePage === 'capabilities' && (
          <CapabilitiesPage
            onNavigate={navigateTo}
            onOpenEnquiry={openEnquiry}
          />
        )}
        {activePage === 'hospitality' && (
          <HospitalityPage
            onNavigate={navigateTo}
            onOpenEnquiry={openEnquiry}
          />
        )}
        {activePage === 'residential' && (
          <ResidentialPage
            onNavigate={navigateTo}
            onOpenEnquiry={openEnquiry}
          />
        )}
        {activePage === 'experience' && (
          <ExperiencePage
            onNavigate={navigateTo}
            onOpenEnquiry={openEnquiry}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onOpenEnquiry={openEnquiry}
          />
        )}
      </main>

      {/* Persistent Comprehensive Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEnquiry={openEnquiry}
      />

      {/* Global Luxury Concierge Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialInterest={enquiryInterest}
      />
    </div>
  );
}
