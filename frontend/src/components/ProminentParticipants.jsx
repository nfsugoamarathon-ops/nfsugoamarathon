import { Award, ChevronRight, Sparkles, Building2, UserCheck, ArrowUpRight, GraduationCap } from 'lucide-react';
import { PROMINENT_PARTICIPANTS, EVENT, openRegistration } from '../data/eventData';

export default function ProminentParticipants({ onOpenFullPage }) {
  return (
    <section
      id="prominent-participants"
      className="py-20 sm:py-24 bg-[#FFFCEB] border-t border-[#DADBCF] scroll-mt-20 relative overflow-hidden"
      aria-labelledby="prominent-heading"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFC36A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#1749D1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1749D1]/10 text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC36A] animate-pulse" />
              <span>Dignitaries &amp; Inspiring Leaders</span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <span className="font-serif italic text-base sm:text-lg text-[#9A6200] font-medium">
                विशिष्ट महानुभावाः
              </span>
              <span className="text-xs text-[#686D66] font-medium tracking-wide uppercase">· Distinguished Dignitaries</span>
            </div>

            <h2
              id="prominent-heading"
              className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-[#191A17] tracking-tight leading-tight"
            >
              Prominent Participants
            </h2>

            <p className="text-sm sm:text-base text-[#686D66] font-light leading-relaxed mt-3">
              Distinguished administrators, healthcare experts, and institutional leaders joining and supporting{' '}
              <strong className="text-[#191A17] font-semibold">{EVENT.name} 2026</strong>.
            </p>
          </div>

          {/* Quick action buttons */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            {onOpenFullPage && (
              <button
                onClick={onOpenFullPage}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1749D1] hover:text-[#0f3499] px-4 py-2.5 rounded-full bg-[#1749D1]/5 hover:bg-[#1749D1]/10 border border-[#1749D1]/20 transition-all cursor-pointer"
              >
                <span>View Full Dignitaries Page</span>
                <ArrowUpRight size={15} />
              </button>
            )}
            <a
              href={EVENT.googleFormUrl || '#contact'}
              target={EVENT.googleFormUrl ? '_blank' : undefined}
              rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
              onClick={openRegistration}
              className="inline-flex items-center gap-2 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(23,73,209,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Join Marathon</span>
              <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Prominent Participants Cards Grid (Big Picture + Lesser Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto items-stretch">
          {PROMINENT_PARTICIPANTS.map((person) => (
            <div
              key={person.id}
              className="group relative bg-[#071730] text-white rounded-3xl overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(7,23,48,0.25)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(7,23,48,0.4)] hover:border-[#FFC36A]/40 flex flex-col hover:-translate-y-1"
            >
              {/* ── BIG HERO PICTURE ── */}
              <div className="relative shrink-0 overflow-hidden bg-[#030a16] h-[380px] sm:h-[420px] w-full">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay on photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071730] via-black/10 to-black/30" />

                {/* VIP / Dignitary Ribbon Badge on photo */}
                {/* <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFC36A] text-[#071730] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    <Award size={13} className="shrink-0" />
                    <span>{person.badge || 'Distinguished Dignitary'}</span>
                  </span>
                  {person.credentials && (
                    <span className="inline-flex items-center gap-1 bg-[#1749D1] text-white text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full shadow-sm">
                      <GraduationCap size={12} className="text-[#FFC36A]" />
                      <span>{person.credentials}</span>
                    </span>
                  )}
                </div> */}

                {/* Name & Title Overlay on Photo Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#071730] via-[#071730]/90 to-transparent z-10">
                  <div className="text-[#FFC36A] text-xs font-bold uppercase tracking-wider mb-0.5">
                    {person.designation}
                  </div>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-1">
                    {person.name}
                  </h3>
                  <p className="text-xs text-white/80 font-medium flex items-center gap-1.5 truncate">
                    <Building2 size={13} className="text-[#38bdf8] shrink-0" />
                    <span className="truncate">{person.organization}</span>
                  </p>
                </div>
              </div>

              {/* ── CONCISE DETAILS (Lesser text) ── */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 relative">
                <div>
                  {/* Concise 1-sentence bio */}
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    {person.description}
                  </p>

                  {/* Highlights Pills */}
                  {person.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {person.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-white/85 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <div className="flex items-center gap-1.5">
                    <UserCheck size={13} className="text-[#38bdf8]" />
                    <span>NFSU Goa · 6 Dec 2026</span>
                  </div>
                  {onOpenFullPage && (
                    <button
                      onClick={onOpenFullPage}
                      className="text-[#FFC36A] hover:text-white font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Full Bio</span>
                      <ChevronRight size={13} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        {/* <div className="mt-12 sm:mt-16 bg-[#071730] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFC36A]/15 border border-[#FFC36A]/40 flex items-center justify-center shrink-0 text-[#FFC36A]">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-serif italic text-xl sm:text-2xl text-white font-medium">
                Celebrating leadership, wellness &amp; resilience
              </h4>
              <p className="text-xs sm:text-sm text-white/65 mt-0.5 max-w-xl">
                Experience an inspiring race day where institutional leadership, medical experts, and enthusiastic runners come together at NFSU Goa.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            {onOpenFullPage && (
              <button
                onClick={onOpenFullPage}
                className="w-full sm:w-auto px-5 py-3 rounded-full border border-white/20 hover:border-white/40 text-white text-xs sm:text-sm font-semibold transition-all hover:bg-white/5 cursor-pointer text-center"
              >
                View Dignitaries Roster
              </button>
            )}
            <a
              href={EVENT.googleFormUrl || '#contact'}
              target={EVENT.googleFormUrl ? '_blank' : undefined}
              rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
              onClick={openRegistration}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs sm:text-sm font-bold shadow-[0_6px_20px_rgba(23,73,209,0.4)] transition-all hover:scale-[1.02] text-center"
            >
              Join the Marathon
            </a>
          </div>
        </div> */}

      </div>
    </section>
  );
}
