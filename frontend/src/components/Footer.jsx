import { Heart, ArrowUp, Phone, MapPin, Mail } from 'lucide-react';
import { EVENT, openRegistration } from '../data/eventData';

export default function Footer({ onOpenPortal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111A17] text-white pt-20 pb-12 border-t border-white/10" aria-label="Footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/marathon-logo.png"
                alt="Adamya Dhavanam logo"
                className="h-12 w-12 rounded-full ring-2 ring-[#FFC36A]/50 bg-white/10 object-contain p-0.5"
              />
              <div>
                <span className="font-serif italic text-lg text-[#FFC36A] block leading-none">
                  अदम्यधावनम्
                </span>
                <span className="text-xs uppercase tracking-widest text-white/70 font-semibold block mt-1">
                  Adamya Dhāvanam
                </span>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              Inaugural marathon organised by National Forensic Sciences University (NFSU), Goa Campus.
              Celebrating endurance, spirit, and community.
            </p>
            <div className="pt-2 text-xs text-[#FFC36A] flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FFC36A] animate-ping" />
              Race Day: 6th December 2026
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Marathon</a>
              </li>
              <li>
                <a href="#categories" className="text-white/70 hover:text-white transition-colors">Race Categories (3K/6K/10K)</a>
              </li>
              <li>
                <a href="#schedule" className="text-white/70 hover:text-white transition-colors">Race Day Schedule</a>
              </li>
              <li>
                <a href="#route" className="text-white/70 hover:text-white transition-colors">Course & Route Map</a>
              </li>
              <li>
                <a href="#faqs" className="text-white/70 hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#sponsors" className="text-white/70 hover:text-white transition-colors">Partners & Sponsors</a>
              </li>
            </ul>
          </div>

          {/* Logistics & Bibs */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Event Logistics</h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#FFC36A] mt-0.5 shrink-0" />
                <span>NFSU Goa Campus, Ponda, Goa</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-[#25D366] mt-0.5 shrink-0" />
                <span>Contact: Abhay (+91 87886 29231)</span>
              </li>
              <li className="bg-white/5 p-3 rounded-xl border border-white/10 mt-2">
                <span className="text-white/90 font-medium block mb-1">Bib Distribution</span>
                4 & 5 Dec 2026, 4:00 PM – 8:00 PM at NFSU Goa Campus, Canteen Area. Bring original ID + Registration ID.
              </li>
            </ul>
          </div>

          {/* Registration Action */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Registration</h4>
            <div className="space-y-3">
              <a
                href={EVENT.googleFormUrl || '#contact'}
                target={EVENT.googleFormUrl ? '_blank' : undefined}
                rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
                onClick={openRegistration}
                className="block text-center bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md"
              >
                Register as Runner
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 NFSU Goa Marathon (Adamya Dhāvanam). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white/80 transition-colors">Terms & Conditions</a>
            <a href="#terms" className="hover:text-white/80 transition-colors">Health Waiver</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

