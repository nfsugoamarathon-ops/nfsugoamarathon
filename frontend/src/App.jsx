import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventFacts from './components/EventFacts';
import About from './components/About';
import CrossedMarquee from './components/CrossedMarquee';
import Categories from './components/Categories';
import RegistrationForm from './components/RegistrationForm';
import Schedule from './components/Schedule';
import Route from './components/Route';
import Sponsors from './components/Sponsors';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer';
import ParticipantDashboard from './pages/ParticipantDashboard';
import AdminDashboard from './pages/AdminDashboard';

// Feature flags: registration is moving to Google Forms, so on-site
// registration and participant/admin login portals are hidden.
const SHOW_PORTALS = false;
const SHOW_BUILT_IN_REGISTRATION = false;

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'participant' | 'admin'

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  if (SHOW_PORTALS && currentView === 'participant') {
    return <ParticipantDashboard onBackToHome={() => setCurrentView('home')} />;
  }

  if (SHOW_PORTALS && currentView === 'admin') {
    return <AdminDashboard onBackToHome={() => setCurrentView('home')} />;
  }

  const handleOpenPortal = SHOW_PORTALS ? (portal) => setCurrentView(portal) : undefined;

  return (
    <div className="relative min-h-screen bg-[#030d1e] text-[#191A17] font-sans selection:bg-[#1749D1] selection:text-white overflow-x-clip">
      {/* 
        MAIN CONTENT FLOW LAYER (z-10)
        Flows directly into the top wave of the footer
      */}
      <div className="relative z-10 bg-[#FFFCEB]">
        <Navbar onOpenPortal={handleOpenPortal} />
        <Hero />
        <EventFacts />
        <About />
        <CrossedMarquee />
        <Categories />
        {SHOW_BUILT_IN_REGISTRATION && (
          <RegistrationForm onOpenPortal={handleOpenPortal} />
        )}
        <Schedule />
        <Route />
        <Sponsors />
        <FAQs />
        <Contact />
        <TermsAndConditions />
      </div>

      {/* Footer */}
      <Footer onOpenPortal={handleOpenPortal} />
      <Analytics />
    </div>
  );
}
