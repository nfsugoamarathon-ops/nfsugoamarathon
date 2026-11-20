import { ChevronRight, Building2, ArrowUpRight } from 'lucide-react';
import { PROMINENT_PARTICIPANTS, EVENT, openRegistration } from '../data/eventData';

export default function ProminentParticipants({ onOpenFullPage }) {
  const isFew = PROMINENT_PARTICIPANTS.length <= 3;

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
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

        {/* ── Cards Display: Marquee Carousel (or Center-aligned if <= 3 cards) ── */}
        {isFew ? (
          <div className="flex flex-wrap justify-center gap-5 lg:gap-6 max-w-5xl mx-auto">
            {PROMINENT_PARTICIPANTS.map((person) => (
              <div
                key={person.id}
                className="w-[240px] sm:w-[260px] group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(7,23,48,0.22)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(7,23,48,0.38)] shrink-0"
              >
                <div className="relative overflow-hidden bg-[#030a16] h-[280px] sm:h-[300px] w-full">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ objectFit: person.objectFit || 'cover', objectPosition: person.objectPosition || 'top' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071730] via-[#071730]/30 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                    <div className="text-[#FFC36A] text-[10px] font-bold uppercase tracking-wider mb-0.5 leading-tight">
                      {person.designation}
                    </div>
                    <h3 className="font-sans font-black text-base sm:text-lg text-white tracking-tight leading-snug mb-1">
                      {person.name}
                    </h3>
                    <p className="text-[11px] text-white/75 font-medium flex items-center gap-1 leading-tight">
                      <Building2 size={11} className="text-[#38bdf8] shrink-0" />
                      <span className="line-clamp-1">{person.organization}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative w-full overflow-hidden py-3">
            {/* Left & Right gradient fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#FFFCEB] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#FFFCEB] to-transparent z-20" />

            {/* Seamless Infinite Marquee Track */}
            <div className="flex animate-marquee-cards hover:[animation-play-state:paused] gap-5 items-stretch py-2 w-max">
              {[...PROMINENT_PARTICIPANTS, ...PROMINENT_PARTICIPANTS].map((person, index) => (
                <div
                  key={`${person.id}-${index}`}
                  className="w-[240px] sm:w-[260px] group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(7,23,48,0.22)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(7,23,48,0.38)] shrink-0"
                >
                  <div className="relative overflow-hidden bg-[#030a16] h-[280px] sm:h-[300px] w-full">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{ objectFit: person.objectFit || 'cover', objectPosition: person.objectPosition || 'top' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071730] via-[#071730]/30 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 p-4 z-10">
                      <div className="text-[#FFC36A] text-[10px] font-bold uppercase tracking-wider mb-0.5 leading-tight">
                        {person.designation}
                      </div>
                      <h3 className="font-sans font-black text-base sm:text-lg text-white tracking-tight leading-snug mb-1">
                        {person.name}
                      </h3>
                      <p className="text-[11px] text-white/75 font-medium flex items-center gap-1 leading-tight">
                        <Building2 size={11} className="text-[#38bdf8] shrink-0" />
                        <span className="line-clamp-1">{person.organization}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
