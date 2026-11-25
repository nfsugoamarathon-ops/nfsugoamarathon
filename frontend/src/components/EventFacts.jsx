import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, Flag, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FACTS = [
  {
    icon: Calendar,
    label: 'Date',
    value: '24 January 2027',
    subtext: 'Sunday · Race Day',
    accent: '#38bdf8',
  },
  {
    icon: MapPin,
    label: 'Venue',
    value: 'NFSU Goa Campus',
    subtext: 'Curti, Ponda, Goa',
    accent: '#e8e337',
  },
  {
    icon: Clock,
    label: 'Reporting',
    value: '5:00 – 5:30 AM',
    subtext: 'Assembly & Warm-up',
    accent: '#34d399',
  },
  {
    icon: Flag,
    label: 'Flag-off',
    value: '6:30 AM onwards',
    subtext: 'Official Timed Waves',
    accent: '#f43f5e',
  },
  {
    icon: Layers,
    label: 'Distances',
    value: '3 km · 6 km · 10 km',
    subtext: 'Open & Veteran Categories',
    accent: '#a78bfa',
  },
];

export default function EventFacts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.fact-card', sectionRef.current);

      gsap.fromTo(
        cards,
        { y: 24, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 pt-2 sm:pt-2.5 lg:pt-3 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8"
      aria-label="Event facts at a glance"
    >
      <div className="max-w-6xl mx-auto">
        {/* Athletic Telemetry Glass Card */}
        <div className="relative bg-[#051124] border border-white/15 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-5 shadow-xl overflow-hidden">

          {/* ───────────────────────────────────────────────────────────
              MOBILE & TABLET REIMAGINED TELEMETRY PASS (<1024px)
              Sleek, unified race pass with neon status radar & row dividers
              ─────────────────────────────────────────────────────────── */}
          <div className="lg:hidden relative z-10">
            {/* Header: Pulsing Live Indicator */}
            <div className="flex items-center justify-between pb-3 mb-1.5 border-b border-white/10 px-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/75">
                  Race Day Quick Facts
                </span>
              </div>
              <span className="text-[10px] font-semibold text-[#e8e337] tracking-wider uppercase bg-[#e8e337]/10 border border-[#e8e337]/20 px-2.5 py-0.5 rounded-full">
                24 Jan 2027
              </span>
            </div>

            {/* Telemetry Rows - 5 Distinct Boxes with clean spacing */}
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="fact-card relative bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 transition-all duration-200 flex items-start gap-3 shadow-sm"
                  >
                    {/* Icon Squircle */}
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-sm mt-0.5"
                      style={{
                        backgroundColor: `${fact.accent}15`,
                        borderColor: `${fact.accent}30`,
                        color: fact.accent,
                      }}
                    >
                      <Icon size={17} className="sm:w-5 sm:h-5" />
                    </div>

                    {/* Content: Top Row (Label + Subtext badge) & Bottom Row (Value) */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/50">
                          {fact.label}
                        </span>
                        <span
                          className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full border truncate max-w-[150px] sm:max-w-none"
                          style={{
                            backgroundColor: `${fact.accent}12`,
                            borderColor: `${fact.accent}25`,
                            color: fact.accent,
                          }}
                        >
                          {fact.subtext}
                        </span>
                      </div>
                      <div className="text-white font-bold text-[13.5px] sm:text-[15px] leading-snug tracking-tight mt-1">
                        {fact.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────
              DESKTOP LAYOUT (>=1024px) - STRICTLY UNCHANGED
              Exact 5-card horizontal telemetry grid
              ─────────────────────────────────────────────────────────── */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-3 lg:gap-3.5 relative z-10">
            {FACTS.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className="fact-card group relative bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex flex-col justify-between"
                >
                  {/* Top Glowing Hover Accent Line */}
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: fact.accent }}
                  />

                  {/* Header: Icon + Category Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0"
                      style={{
                        backgroundColor: `${fact.accent}18`,
                        color: fact.accent,
                        border: `1px solid ${fact.accent}35`,
                      }}
                    >
                      <Icon size={14} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 group-hover:text-white/80 transition-colors">
                      {fact.label}
                    </span>
                  </div>

                  {/* Body: Value + Context Subtext */}
                  <div>
                    <span className="block text-white font-bold text-xs sm:text-sm lg:text-[14px] leading-snug tracking-tight group-hover:text-[#e8e337] transition-colors">
                      {fact.value}
                    </span>
                    <span className="block text-white/45 text-[10px] font-light mt-0.5 leading-tight">
                      {fact.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
