import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { EVENT, openRegistration } from '../data/eventData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Route', href: '#route' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const STRIP_ITEMS = [
  {
    icon: '🏃',
    highlight: 'ADAMYA DHĀVANAM:',
    text: 'NFSU Goa Marathon · 6 Dec 2026',
  },
  {
    icon: '⏰',
    highlight: 'REPORTING TIME:',
    text: '5:00 – 5:30 AM · NFSU Goa Campus',
  },
  {
    icon: '🏷️',
    highlight: 'BIB DISTRIBUTION:',
    text: '4 & 5 Dec, 4:00 PM – 8:00 PM at NFSU Goa Campus, Canteen Area (Carry Original ID)',
  },
  {
    icon: '⚡',
    highlight: 'FLAG-OFF WAVES:',
    text: '10K at 6:30 AM · 6K at 6:45 AM · 3K at 6:50 AM',
  },
  {
    icon: '💬',
    highlight: 'HELPDESK:',
    text: 'WhatsApp Abhay at +91 87886 29231',
  },
  {
    icon: '🏅',
    highlight: 'INCLUDED PERKS:',
    text: 'Finisher Medal, Dry-Fit T-Shirt, Certificate & Recovery Breakfast',
  },
];

export default function Navbar({ onOpenPortal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111A17]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Dark & Gold Theme Marquee Ribbon (Matching Event Identity & Uploaded Reference) */}
      <div className="w-full overflow-hidden bg-[#111A17] border-b border-white/10 py-1.5 text-[11px] sm:text-xs select-none shadow-sm">
        <div className="animate-top-marquee flex items-center whitespace-nowrap cursor-pointer">
          {/* Primary Track */}
          <div className="flex items-center">
            {STRIP_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 mx-6 text-white/85 font-medium">
                <span className="w-4 h-4 rounded bg-white/10 border border-white/15 text-[#FFC36A] flex items-center justify-center text-[9px] shrink-0 font-bold shadow-xs">
                  {item.icon}
                </span>
                <span className="text-[#FFC36A] font-bold tracking-wide">{item.highlight}</span>
                <span>{item.text}</span>
                <span className="text-[#FFC36A]/40 ml-4 font-light text-xs">✦</span>
              </div>
            ))}
          </div>

          {/* Duplicate Track for Smooth Infinite Loop */}
          <div className="flex items-center" aria-hidden="true">
            {STRIP_ITEMS.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2 mx-6 text-white/85 font-medium">
                <span className="w-4 h-4 rounded bg-white/10 border border-white/15 text-[#FFC36A] flex items-center justify-center text-[9px] shrink-0 font-bold shadow-xs">
                  {item.icon}
                </span>
                <span className="text-[#FFC36A] font-bold tracking-wide">{item.highlight}</span>
                <span>{item.text}</span>
                <span className="text-[#FFC36A]/40 ml-4 font-light text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Adamya Dhavanam — back to top"
        >
          <img
            src="/marathon-logo.png"
            alt="Adamya Dhavanam marathon logo"
            className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-[#FFC36A]/60 transition-all shadow shrink-0"
          />
          <span className="flex flex-col text-white font-semibold text-xs sm:text-sm leading-tight">
            <span className="block text-[#FFC36A] font-serif italic text-sm sm:text-base">Adamya Dhāvanam</span>
            <span className="block text-white/70 text-[9px] sm:text-[10px] tracking-widest font-mono">NFSU GOA · 6 DEC 2026</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
              className="text-white/70 hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors focus-visible:outline-none focus-visible:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Registration CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href={EVENT.googleFormUrl || '#contact'}
            target={EVENT.googleFormUrl ? '_blank' : undefined}
            rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
            onClick={openRegistration}
            className="flex items-center gap-1 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1749D1]"
          >
            <span>Register</span>
            <ChevronRight size={13} />
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-nav-drawer lg:hidden bg-[#111A17]/98 backdrop-blur-md border-t border-white/10 px-4 pb-5 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
                className="text-white/80 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}

            <a
              href={EVENT.googleFormUrl || '#contact'}
              target={EVENT.googleFormUrl ? '_blank' : undefined}
              rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
              onClick={(e) => { setMenuOpen(false); openRegistration(e); }}
              className="mt-2 flex items-center justify-center gap-1 bg-[#1749D1] hover:bg-[#1340b8] text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors shadow-md"
            >
              Register Now <ChevronRight size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
