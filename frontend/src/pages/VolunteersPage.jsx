import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Share2,
  ChevronRight,
  Users,
  Sparkles,
  HeartHandshake,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';
import { COMMITTEES_DATA } from '../data/committeeData';
import { EVENT } from '../data/eventData';

export default function VolunteersPage({ onBackToHome }) {
  const [copied, setCopied] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${EVENT.name} 2026 - Organizing Committee & Volunteers`,
        text: `Meet the student volunteers and organizing committee behind ${EVENT.name} 2026, NFSU Goa!`,
        url: window.location.href,
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    if (onBackToHome) {
      onBackToHome();
      setTimeout(() => {
        document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.location.href = '/#categories';
    }
  };

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
            <span className="font-serif italic text-[#FFC36A]">॥ सेवा परमो धर्मः ॥</span>
            <span>·</span>
            <span>Organizing Committee &amp; Volunteers</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Share volunteers page"
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
            href="#categories"
            onClick={handleRegisterClick}
            className="inline-flex items-center gap-1.5 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Register Now</span>
            <ChevronRight size={14} />
          </a>
        </div>
      </header>

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-gradient-to-b from-[#1749D1]/25 via-[#FFC36A]/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -top-10 right-10 w-96 h-96 bg-[#0052FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-full px-4 py-1.5 text-white/90 text-xs sm:text-sm font-medium tracking-wide shadow-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFC36A] animate-pulse" />
            <span className="font-serif italic text-[#FFC36A]">कर्मण्येवाधिकारस्ते</span>
            <span>·</span>
            <span>The Pillars Behind Adamya Dhāvanam 2026</span>
          </div>

          <h1 className="text-white mb-4">
            <span className="block font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[0.95]">
              Organizing Committee
            </span>
            <span className="block font-serif italic text-white/80 text-2xl sm:text-4xl lg:text-5xl tracking-normal mt-1">
              &amp; Student Volunteers
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Every step forward is powered by the passion, relentless dedication, and selfless service of our student volunteers and committee coordinators at <strong className="text-white font-medium">NFSU, Goa Campus</strong>.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Users size={16} className="text-[#38bdf8]" />
              <span className="font-bold text-white">100+</span>
              <span className="text-white/60">Volunteers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <ShieldCheck size={16} className="text-[#FFC36A]" />
              <span className="font-bold text-white">17</span>
              <span className="text-white/60">Dedicated Committees</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <HeartHandshake size={16} className="text-emerald-400" />
              <span className="font-bold text-white">1</span>
              <span className="text-white/60">United Spirit</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content: Committee Sections ─────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {COMMITTEES_DATA.map((committee) => {
          const isLeadership = ['organizers', 'head-volunteers'].includes(committee.id);

          return (
            <section key={committee.id} id={committee.id} className="scroll-mt-32">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 mb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      committee.id === 'organizers'
                        ? 'bg-[#FFC36A]/20 text-[#FFC36A] border border-[#FFC36A]/40'
                        : committee.id === 'web-team'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : committee.id === 'head-volunteers'
                        ? 'bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/40'
                        : 'bg-white/10 text-white/70 border border-white/15'
                    }`}>
                      {committee.badge}
                    </span>
                    <span className="text-xs text-white/40">·</span>
                    <span className="text-xs text-white/50 font-medium">
                      {committee.members.length} {committee.members.length === 1 ? 'Member' : 'Members'}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white flex items-center gap-2">
                    {committee.title}
                    {isLeadership && <Sparkles size={16} className="text-[#FFC36A]" />}
                  </h2>
                  <p className="text-xs text-white/60 font-light mt-0.5">
                    {committee.description}
                  </p>
                </div>
              </div>

              {/* Member Cards Grid */}
              <div className={`grid gap-3 sm:gap-4 lg:gap-5 ${
                isLeadership
                  ? 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
              }`}>
                {committee.members.map((member, idx) => {
                  const isCoreRole = isLeadership;

                  return (
                    <article
                      key={`${member.name}-${idx}`}
                      className={`group relative rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${
                        isCoreRole
                          ? 'bg-[#08152c] border border-[#FFC36A]/40 hover:border-[#FFC36A] p-2 sm:p-2.5 shadow-lg hover:shadow-[0_0_20px_rgba(255,195,106,0.15)] hover:-translate-y-0.5'
                          : 'bg-white/[0.03] border border-white/10 hover:border-[#38bdf8]/50 p-2 sm:p-2.5 hover:bg-white/[0.06] hover:-translate-y-0.5 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {/* Photo frame */}
                      <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-[#030914] mb-2">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading={idx < 4 ? 'eager' : 'lazy'}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051124] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>

                      {/* Member Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <h3 className={`font-black font-sans tracking-tight text-white group-hover:text-[#FFC36A] transition-colors leading-snug ${
                              isCoreRole ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs line-clamp-1'
                            }`}>
                              {member.name}
                            </h3>
                            {member.role === 'Committee Head' && (
                              <span className="text-[8px] font-bold uppercase tracking-wider bg-[#FFC36A]/20 text-[#FFC36A] border border-[#FFC36A]/40 px-1 py-0.2 rounded shrink-0">
                                Head
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>

      {/* ── Floating Back to Top Button ──────────────────────────── */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#1749D1] hover:bg-[#1340b8] text-white shadow-xl hover:scale-110 transition-all cursor-pointer border border-white/20"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* ── Page Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-10 px-4 sm:px-8 text-center text-xs text-white/50">
        <p className="max-w-xl mx-auto mb-2 leading-relaxed">
          National Forensic Sciences University, Goa Campus · Official Organizing Committee &amp; Student Volunteers of Adamya Dhāvanam 2026.
        </p>
        <p>© 2026 {EVENT.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
