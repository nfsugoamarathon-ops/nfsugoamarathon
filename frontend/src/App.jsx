import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventFacts from './components/EventFacts';
import About from './components/About';
import CrossedMarquee from './components/CrossedMarquee';
import Categories from './components/Categories';
import Prizes from './components/Prizes';
import ProminentParticipants from './components/ProminentParticipants';
import RegistrationForm from './components/RegistrationForm';
import Schedule from './components/Schedule';
import Route from './components/Route';
import Sponsors from './components/Sponsors';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import TermsAndConditions from './components/TermsAndConditions';
import { CinematicFooter } from '@/components/ui/motion-footer';
import ParticipantDashboard from './pages/ParticipantDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProminentParticipantsPage from './pages/ProminentParticipants';
import VolunteersPage from './pages/VolunteersPage';
import VolunteerBannerModal from './components/VolunteerBannerModal';

// Feature flags: registration is moving to Google Forms, so on-site
// registration and participant/admin login portals are hidden.
const SHOW_PORTALS = false;
const SHOW_BUILT_IN_REGISTRATION = false;

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'participant' | 'admin' | 'prominent-participants' | 'volunteers'
  const [showBannerModal, setShowBannerModal] = useState(false);

  // Pop banner when user comes to website; automatically disabled/closed after 2s
  useEffect(() => {
    setShowBannerModal(true);
  }, []);

  const handleCloseBanner = () => {
    setShowBannerModal(false);
  };

  // Scroll to top when view changes & listen for hash
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#prominent-participants-page') {
        setCurrentView('prominent-participants');
      } else if (window.location.hash === '#volunteers' || window.location.hash === '#committee') {
        setCurrentView('volunteers');
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentView('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (SHOW_PORTALS && currentView === 'participant') {
    return <ParticipantDashboard onBackToHome={() => setCurrentView('home')} />;
  }

  if (SHOW_PORTALS && currentView === 'admin') {
    return <AdminDashboard onBackToHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'prominent-participants') {
    return <ProminentParticipantsPage onBackToHome={() => {
      setCurrentView('home');
      window.location.hash = '';
    }} />;
  }

  if (currentView === 'volunteers') {
    return (
      <>
        <VolunteersPage onBackToHome={() => {
          setCurrentView('home');
          window.location.hash = '';
        }} />
        <VolunteerBannerModal
          isOpen={showBannerModal}
          onClose={handleCloseBanner}
          onExploreVolunteers={() => {
            handleCloseBanner();
            setCurrentView('volunteers');
          }}
        />
      </>
    );
  }

  const handleOpenPortal = SHOW_PORTALS ? (portal) => setCurrentView(portal) : undefined;

  return (
    <div className="relative min-h-screen bg-[#051124] text-[#191A17] font-sans selection:bg-[#1749D1] selection:text-white overflow-x-clip">
      {/* 
        MAIN CONTENT FLOW LAYER (z-10)
        Elevated above the fixed curtain-reveal footer with a bottom shadow and rounded corner 
      */}
      <div className="relative z-10 bg-[#FFFCEB] shadow-2xl rounded-b-3xl">
        <Navbar
          onOpenPortal={handleOpenPortal}
          onOpenProminent={() => setCurrentView('prominent-participants')}
          onOpenVolunteers={() => setCurrentView('volunteers')}
        />
        <Hero />
        <EventFacts />
        <About onOpenVolunteers={() => setCurrentView('volunteers')} />
        <CrossedMarquee />
        <Categories />
        <Prizes />
        <ProminentParticipants onOpenFullPage={() => setCurrentView('prominent-participants')} />
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

      {/* 
        CINEMATIC CURTAIN REVEAL FOOTER 
        Revealed as the user scrolls past the main content
      */}
      <CinematicFooter
        giantText="ADAMYADHAVANAM"
        heading="Dare to run. Run to dare."
        onOpenPortal={handleOpenPortal}
        onOpenVolunteers={() => setCurrentView('volunteers')}
      />
      <VolunteerBannerModal
        isOpen={showBannerModal}
        onClose={handleCloseBanner}
        onExploreVolunteers={() => {
          handleCloseBanner();
          setCurrentView('volunteers');
        }}
      />
      <Analytics />
    </div>
  );
}
