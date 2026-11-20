import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Building2,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Users,
  Share2,
} from 'lucide-react';
import { PROMINENT_PARTICIPANTS, EVENT, openRegistration } from '../data/eventData';

export default function ProminentParticipantsPage({ onBackToHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${EVENT.name} 2026 - Prominent Participants`,
        text: `Meet prominent participants and dignitaries attending ${EVENT.name} 2026, NFSU Goa!`,
        url: window.location.href,
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const filteredParticipants = PROMINENT_PARTICIPANTS.filter((p) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    return (
      p.name.toLowerCase().includes(query) ||
      p.designation.toLowerCase().includes(query) ||
      p.organization.toLowerCase().includes(query) ||
      (p.role && p.role.toLowerCase().includes(query)) ||
      (p.credentials && p.credentials.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-[#051124] text-white font-sans selection:bg-[#1749D1] selection:text-white">

      {/* ── Top Floating Navigation Bar ──────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#051124]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-all cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="h-4 w-px bg-white/20 hidden sm:block" />

          <div className="hidden sm:flex items-center gap-2 text-xs text-white/70">
            <span className="font-serif italic text-[#FFC36A]">अदम्यधावनम्</span>
            <span>·</span>
            <span>Prominent Dignitaries Roster</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Share page"
            aria-label="Share page"
          >
            <Share2 size={16} />
          </button>
          {copied && (
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
              Link copied!
            </span>
          )}

          <a
            href={EVENT.googleFormUrl || '#contact'}
            target={EVENT.googleFormUrl ? '_blank' : undefined}
            rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
            onClick={openRegistration}
            className="inline-flex items-center gap-1.5 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Register Now</span>
            <ChevronRight size={14} />
          </a>
        </div>
      </header>

      {/* ── Page Hero Banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        {/* Ambient background glow & radial highlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#1749D1]/20 via-[#FFC36A]/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -top-10 right-10 w-96 h-96 bg-[#0052FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Sanskrit Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-full px-4 py-1.5 text-white/90 text-xs sm:text-sm font-medium tracking-wide shadow-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFC36A] animate-pulse" />
            <span className="font-serif italic text-[#FFC36A]">विशिष्ट महानुभावाः</span>
            <span>·</span>
            <span>Prominent Participants &amp; Dignitaries</span>
          </div>

          <h1 className="text-white mb-4">
            <span className="block font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[0.95]">
              Prominent Participants
            </span>
            <span className="block font-serif italic text-white/80 text-2xl sm:text-4xl lg:text-5xl tracking-normal mt-1">
              at Adamya Dhāvanam 2026
            </span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mb-6">
            Meet the distinguished administrators, healthcare luminaries, and institutional leaders joining and patronizing the inaugural marathon at the National Forensic Sciences University, Goa Campus.
          </p>

          {/* Quick Race Facts Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white/5 border border-white/10 rounded-2xl px-5 py-2.5 text-xs text-white/75 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#FFC36A]" />
              <span>{EVENT.date}</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#FFC36A]" />
              <span>{EVENT.venue}, Ponda</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#FFC36A]" />
              <span>Flag-off: 6:30 AM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search Bar ───────────────────────────────────────────── */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#071730]/80 border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Users size={16} className="text-[#38bdf8]" />
            <span className="font-semibold uppercase tracking-wider text-white/70">
              Honoured Guests &amp; Dignitaries ({filteredParticipants.length})
            </span>
          </div>

          {/* Search Input 
          <div className="relative w-full sm:w-80">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, organization, title..."
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#38bdf8] focus:bg-white/10 transition-all"
            />
          </div>
        </div>
      </section> */}

      {/* ── Prominent Participants Detailed Showcase ─────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {filteredParticipants.length === 0 ? (
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
            <Users size={40} className="mx-auto text-white/30 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No participants found</h3>
            <p className="text-xs sm:text-sm text-white/60 mb-4">Try clearing the search query.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
            {filteredParticipants.map((person, idx) => (
              <article
                key={person.id}
                className="w-[calc(50%-10px)] sm:w-[240px] lg:w-[260px] group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.55)] shrink-0"
              >
                {/* Hero photo */}
                <div className="relative bg-[#030a16] h-[260px] sm:h-[300px] lg:h-[300px] w-full overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ objectFit: person.objectFit || 'cover', objectPosition: person.objectPosition || 'top' }}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071730] via-[#071730]/30 to-transparent" />

                  {/* Name & designation overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                    <div className="text-[#FFC36A] text-[10px] font-bold uppercase tracking-wider mb-0.5 leading-tight">
                      {person.designation}
                    </div>
                    <h2 className="font-sans font-black text-base sm:text-lg text-white tracking-tight leading-snug mb-1">
                      {person.name}
                    </h2>
                    <p className="text-[11px] text-white/75 font-medium flex items-center gap-1 leading-tight">
                      <Building2 size={11} className="text-[#38bdf8] shrink-0" />
                      <span className="line-clamp-1">{person.organization}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ── Dignitary Participation Callout ─────────────────────── */}
        {/* <section className="mt-16 sm:mt-20 bg-gradient-to-br from-[#071730] via-[#0b2247] to-[#071730] rounded-3xl p-8 sm:p-10 border border-[#FFC36A]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFC36A] uppercase tracking-wider mb-3">
              <Sparkles size={14} />
              <span>Leadership in Action</span>
            </div>
            <h3 className="font-serif italic text-2xl sm:text-3xl text-white mb-3">
              Empowering Community Resilience through Sports &amp; Wellness
            </h3>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light mb-6">
              When public leaders and medical visionaries like Shri. Naveen Kumar and Dr. Gaurav Desai champion our marathon, it sends an empowering message: physical endurance, discipline, and holistic health are foundational pillars for individual and institutional excellence.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={EVENT.googleFormUrl || '#contact'}
                target={EVENT.googleFormUrl ? '_blank' : undefined}
                rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
                onClick={openRegistration}
                className="px-6 py-3 rounded-full bg-[#1749D1] hover:bg-[#1340b8] text-white font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-[1.02]"
              >
                Register for the Marathon
              </a>
              <button
                onClick={onBackToHome}
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Explore Race Route &amp; Categories
              </button>
            </div>
          </div>
        </section> */}
      </main>

      {/* ── Simple Page Footer ───────────────────────────────────── */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs text-white/50">
        <p>© 2026 {EVENT.name} · National Forensic Sciences University, Goa Campus. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
