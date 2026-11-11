import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Volume2,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATIONS = [
  {
    id: 'bib-expo',
    code: 'PF 0 · PRE-RACE',
    script: 'प्रवेश पत्र वितरण',
    title: 'BIB & KIT EXPO',
    time: '4:00 PM – 8:00 PM',
    date: '4th & 5th Dec 2026',
    venue: 'NFSU Goa Campus, Canteen Area',
    summary: 'Official race kit pickup, race bib verification, and dry-fit t-shirt collection.',
    announcement: 'Now announcing: Bib collection counters active at NFSU Goa Campus, Canteen Area. Carry government ID + Reg ID.',
    badge: 'Expo',
    tags: ['Original ID Required', 'Official Race Bib', 'Official T-Shirt'],
    milestone: '0.0 KM',
    accentColor: '#FFC36A',
  },
  {
    id: 'reporting',
    code: 'PF 1 · 05:00 AM',
    script: 'उपस्थिति एवं प्रवेश',
    title: 'GATES OPEN',
    time: '5:00 AM – 5:30 AM',
    date: 'Sunday, 6 Dec 2026',
    venue: 'NFSU Goa Campus',
    summary: 'Dawn reporting, baggage drop counters, runner identity verification, and medical pre-check.',
    announcement: 'Reporting gates open at NFSU Goa Campus. Pin your bib visibly on your chest.',
    badge: 'Check-in',
    tags: ['Baggage Drop', 'Hydration Ready', 'Medical Desk'],
    milestone: 'CHECK-IN',
    accentColor: '#6BD49F',
  },
  {
    id: 'warmup',
    code: 'PF 2 · 06:00 AM',
    script: 'सामूहिक अभ्यास',
    title: 'DYNAMIC WARM-UP',
    time: '6:00 AM – 6:20 AM',
    date: 'Start Line Arena',
    venue: 'NFSU Goa Campus Ground',
    summary: 'Coach-led mobility drills, dynamic hamstring activation, and marathon pacing instructions.',
    announcement: 'All runners report to central arena for guided group mobility and national anthem.',
    badge: 'Coach Led',
    tags: ['Muscle Activation', 'Hydration Sip', 'Briefing'],
    milestone: 'WARM-UP',
    accentColor: '#EBD3F5',
  },
  {
    id: '10k-elite',
    code: 'PF 3 · 06:30 AM',
    script: '१० कि.मी. मुख्य धावन',
    title: '10 KM ELITE RUN',
    time: '6:30 AM Sharp',
    date: 'Marquee Race Flag-Off',
    venue: 'Start Line Arch, Ponda Course',
    summary: 'The premier distance departs as the sun breaks over Ponda’s green hills. 2 hour cut-off strictly monitored.',
    announcement: '10 KM Elite Run flag-off! Ponda route open. Hydration every 2 km, medical every 3 km.',
    badge: '10 KM Race',
    tags: ['2h Strict Cut-Off', 'Water Every 2 KM', 'Medical Every 3 KM'],
    milestone: '10.0 KM',
    accentColor: '#0041CA',
  },
  {
    id: '6k-challenge',
    code: 'PF 4 · 06:45 AM',
    script: '६ कि.मी. चुनौती धावन',
    title: '6 KM CHALLENGE',
    time: '6:45 AM Sharp',
    date: 'Second Wave Flag-Off',
    venue: 'Start Line Arch',
    summary: 'Fast and spirited distance for competitive runners aged 15–59 along the scenic Ponda course.',
    announcement: '6 KM Challenge runners to starting grid. Race commences in 5 minutes.',
    badge: '6 KM Race',
    tags: ['Ages 15–59', 'Official Timing', 'Water Stations'],
    milestone: '6.0 KM',
    accentColor: '#FFA946',
  },
  {
    id: '3k-fun',
    code: 'PF 5 · 06:50 AM',
    script: '३ कि.मी. उत्सव धावन',
    title: '3 KM FUN RUN',
    time: '6:50 AM Sharp',
    date: 'Community Wave',
    venue: 'Start Line Arch',
    summary: 'Family and junior run for runners under 14 and senior champions 60+. Full marshal support.',
    announcement: '3 KM Fun Run departs! Youngest athletes and senior champions lead the way.',
    badge: '3 KM Race',
    tags: ['Ages <14 & 60+', 'Family Friendly', 'Full Marshals'],
    milestone: '3.0 KM',
    accentColor: '#FFBCF2',
  },
  {
    id: 'finish-line',
    code: 'PF 6 · 08:30 AM',
    script: 'विजय रेखा एवं पदक',
    title: 'FINISH & RECOVERY',
    time: '7:30 AM – 9:30 AM',
    date: 'Victory Arena',
    venue: 'NFSU Goa Main Grounds',
    summary: 'Finisher medal distribution, electrolyte breakfast, podium ceremony, and photo-ops.',
    announcement: 'Congratulations finishers! Collect your medals and hot breakfast at recovery plaza.',
    badge: 'Podium',
    tags: ['Finisher Medals', 'Hot Breakfast', 'Results in 24h'],
    milestone: 'FINISH',
    accentColor: '#FFC36A',
  },
];

export default function Schedule() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef(null);
  const scrubberFillRef = useRef(null);
  const runnerMarkerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const track = trackRef.current;
      const container = containerRef.current;

      if (!cards || !track || !container) return;

      const mm = gsap.matchMedia();

      // Desktop & Tablet (Horizontal Pinned Scroll)
      mm.add('(min-width: 768px)', () => {
        const totalScrollWidth = cards.scrollWidth - track.clientWidth;

        const timeline = gsap.to(cards, {
          x: -totalScrollWidth,
          ease: 'none',
          scrollTrigger: {
            id: 'schedule-trigger',
            trigger: container,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            start: 'top top',
            end: () => `+=${Math.max(totalScrollWidth, 2000)}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              setScrollProgress(p);

              const idx = Math.min(
                STATIONS.length - 1,
                Math.floor(p * STATIONS.length)
              );
              setActiveIndex(idx);

              if (runnerMarkerRef.current) {
                gsap.to(runnerMarkerRef.current, {
                  left: `${p * 100}%`,
                  duration: 0.1,
                  ease: 'none',
                });
              }

              if (scrubberFillRef.current) {
                gsap.to(scrubberFillRef.current, {
                  width: `${p * 100}%`,
                  duration: 0.1,
                  ease: 'none',
                });
              }
            },
          },
        });

        return () => {
          timeline.kill();
        };
      });

      // Mobile Touch Interaction
      mm.add('(max-width: 767px)', () => {
        const track = trackRef.current;
        const cards = cardsRef.current;
        if (!track) return;

        const handleScroll = (e) => {
          const el = (e && e.target) ? e.target : track;
          const scrollLeft = el.scrollLeft;
          const maxScroll = el.scrollWidth - el.clientWidth;
          const p = maxScroll > 0 ? Math.min(1, Math.max(0, scrollLeft / maxScroll)) : 0;
          setScrollProgress(p);

          if (runnerMarkerRef.current) {
            runnerMarkerRef.current.style.left = `${p * 100}%`;
          }
          if (scrubberFillRef.current) {
            scrubberFillRef.current.style.width = `${p * 100}%`;
          }

          if (cards && cards.children.length > 0) {
            const trackCenter = el.scrollLeft + el.clientWidth / 2;
            let closestIdx = 0;
            let minDiff = Infinity;
            Array.from(cards.children).forEach((child, idx) => {
              const childCenter = child.offsetLeft + child.clientWidth / 2;
              const diff = Math.abs(trackCenter - childCenter);
              if (diff < minDiff) {
                minDiff = diff;
                closestIdx = idx;
              }
            });
            setActiveIndex(closestIdx);
          } else {
            const idx = Math.min(
              STATIONS.length - 1,
              Math.max(0, Math.round(p * (STATIONS.length - 1)))
            );
            setActiveIndex(idx);
          }
        };

        track.addEventListener('scroll', handleScroll, { passive: true });
        if (cards) {
          cards.addEventListener('scroll', handleScroll, { passive: true });
        }

        // Run initial alignment
        handleScroll();

        return () => {
          track.removeEventListener('scroll', handleScroll);
          if (cards) {
            cards.removeEventListener('scroll', handleScroll);
          }
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Jump to milestone on click
  const scrollToStation = (index) => {
    setActiveIndex(index);
    if (window.innerWidth >= 768) {
      const st = ScrollTrigger.getById('schedule-trigger');
      if (st) {
        const targetScroll = st.start + (index / (STATIONS.length - 1)) * (st.end - st.start);
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    } else {
      const track = trackRef.current;
      const cards = cardsRef.current;
      if (track && cards && cards.children[index]) {
        const card = cards.children[index];
        const trackRect = track.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const currentRelativeLeft = cardRect.left - trackRect.left;
        const targetLeft = track.scrollLeft + currentRelativeLeft - (track.clientWidth - card.clientWidth) / 2;
        track.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
      }
    }
  };

  const activeStation = STATIONS[activeIndex] || STATIONS[0];

  return (
    <section
      id="schedule"
      ref={containerRef}
      className="relative w-full bg-[#FFFCEB] text-[#191A17] overflow-hidden flex flex-col justify-between py-4 md:py-8 border-t-2 border-[#191A17] scroll-mt-0 min-h-[auto] md:min-h-screen md:h-screen md:max-h-screen"
      aria-label="Race Day Timeline"
    >
      {/* Background Subtle Paper Grid Texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#191A17 0.75px, transparent 0.75px), radial-gradient(#191A17 0.75px, #FFFCEB 0.75px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-between">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-[#191A17]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#191A17] text-[#FFFCEB] text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded font-bold">
                TIMELINE · 6 DEC 2026
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#686D66] flex items-center gap-1">
                <span>📍</span> NFSU Goa Campus, Ponda
              </span>
            </div>
            <h2 className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-[#191A17] font-bold leading-tight tracking-tight">
              Seven milestones, <span className="font-sans not-italic font-black text-[#1749D1]">dawn in Ponda</span>.
            </h2>
          </div>

          <div className="flex flex-row items-center gap-4">
            <div className="text-left md:text-right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#686D66] block">
                Journey Progress
              </span>
              <span className="font-mono text-xl sm:text-2xl font-black text-[#191A17]">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-[#FFF7E6] border-2 border-[#191A17] px-3 py-1.5 rounded-xl shadow-[3px_3px_0_#191A17] text-xs font-bold text-[#191A17]">
              <span>KEEP SCROLLING TO RUN ALONG</span>
              <ArrowRight size={13} className="animate-pulse text-[#1749D1]" />
            </div>
          </div>
        </div>

        {/* Live Station Audio Announcement Balloon */}
        <div className="py-2.5 w-full max-w-full">
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 bg-[#191A17] text-white px-3.5 sm:px-4 py-2.5 rounded-2xl shadow-[3px_3px_0_#FFC36A] sm:shadow-[4px_4px_0_#FFC36A] w-full max-w-2xl min-w-0 transition-all duration-300">
            <div className="w-7 h-7 rounded-lg bg-[#FFC36A] text-[#191A17] flex items-center justify-center shrink-0 font-bold mt-0.5 sm:mt-0">
              <Volume2 size={15} />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FFC36A] block font-bold leading-tight mb-1">
                NOW ANNOUNCING · {activeStation.code}
              </span>
              <p className="text-xs sm:text-sm font-medium text-white leading-snug break-words">
                {activeStation.announcement}
              </p>
            </div>
          </div>
        </div>

        {/* Pinned Horizontal Track Viewport */}
        <div
          ref={trackRef}
          className="w-full overflow-x-auto md:overflow-hidden my-auto py-3 scrollbar-none snap-x snap-mandatory md:snap-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div
            ref={cardsRef}
            className="flex items-stretch gap-5 md:gap-7 overflow-visible pl-4 sm:pl-6 md:pl-12 pr-12 sm:pr-16 md:pr-24 py-3"
            style={{ width: 'max-content' }}
          >
            {STATIONS.map((station, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={station.id}
                  onClick={() => scrollToStation(i)}
                  className={`w-[270px] sm:w-[310px] md:w-[360px] shrink-0 cursor-pointer snap-center transition-all duration-300 flex flex-col justify-between ${
                    isActive ? 'scale-[1.02]' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  {/* Station Board - Scaler x Wispr Platform Signboard Aesthetic */}
                  <div className="relative mb-2 flex flex-col items-center">
                    {/* The Retro Indian Railway Station Board */}
                    <div className="w-full bg-[#FFC36A] border-4 border-[#191A17] rounded-xl p-3 sm:p-4 shadow-[5px_5px_0_#191A17] text-center relative z-10">
                      <span className="block font-serif italic text-xs font-semibold text-[#191A17]/80 tracking-wide mb-0.5">
                        {station.script}
                      </span>
                      <h3 className="font-sans font-black text-lg sm:text-xl text-[#191A17] tracking-tight uppercase leading-none">
                        {station.title}
                      </h3>
                      <div className="mt-2 pt-1 border-t-2 border-[#191A17]/30 flex items-center justify-between text-[10px] font-mono font-bold text-[#191A17]">
                        <span>{station.code}</span>
                        <span>{station.time}</span>
                      </div>
                    </div>

                    {/* Dual Striped Support Posts */}
                    <div className="w-full flex justify-around px-8 -mt-1 pointer-events-none z-0">
                      <div
                        className="w-3 h-9 border-x-2 border-b-2 border-[#191A17]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(45deg, #191A17, #191A17 5px, #FFF 5px, #FFF 10px)',
                        }}
                      />
                      <div
                        className="w-3 h-9 border-x-2 border-b-2 border-[#191A17]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(45deg, #191A17, #191A17 5px, #FFF 5px, #FFF 10px)',
                        }}
                      />
                    </div>

                    {/* Minimalist Campus & Course Line Art Graphic */}
                    <div className="w-full h-11 -mt-5 border-b-2 border-[#191A17] flex items-end justify-center px-4 overflow-hidden pointer-events-none opacity-80">
                      <svg viewBox="0 0 200 40" className="w-full h-full fill-none stroke-[#191A17]" strokeWidth="1.5">
                        <path d="M 0 40 L 20 40 L 20 18 L 40 18 L 40 40 L 70 40 L 70 10 L 95 10 L 95 40 L 120 40" />
                        <rect x="75" y="15" width="4" height="6" fill="#191A17" />
                        <rect x="85" y="15" width="4" height="6" fill="#191A17" />
                        <path d="M 120 40 Q 140 25 160 40 Q 180 25 200 40" />
                        <circle cx="160" cy="18" r="7" fill="#FFC36A" />
                      </svg>
                    </div>
                  </div>

                  {/* Station Detail Card */}
                  <div
                    className={`bg-white border-2 border-[#191A17] rounded-2xl p-4 shadow-[4px_4px_0_#191A17] flex-1 flex flex-col justify-between transition-all ${
                      isActive ? 'ring-2 ring-[#1749D1]' : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#686D66] font-bold">
                          {station.date}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1749D1] text-white">
                          {station.badge}
                        </span>
                      </div>

                      <p className="text-xs text-[#191A17] font-medium leading-relaxed mb-3">
                        {station.summary}
                      </p>

                      <div className="space-y-1 text-[11px] text-[#686D66] mb-3">
                        <div className="flex items-center gap-1.5">
                          <Clock size={11} className="text-[#1749D1] shrink-0" />
                          <span className="font-semibold text-[#191A17]">{station.time}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <MapPin size={11} className="text-[#FFA946] shrink-0 mt-0.5" />
                          <span className="truncate">{station.venue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-[#DADBCF]">
                      <div className="flex flex-wrap gap-1">
                        {station.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-semibold bg-[#FFFCEB] border border-[#DADBCF] px-1.5 py-0.5 rounded text-[#191A17]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Interactive Railroad Track / Timeline Scrubber */}
        <div className="pt-3 border-t-2 border-[#191A17]">
          {/* Milestone Labels */}
          <div className="hidden md:flex justify-between items-center mb-1.5 px-1 text-[10px] font-mono font-bold text-[#686D66]">
            {STATIONS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToStation(idx)}
                className={`transition-colors uppercase hover:text-[#191A17] ${
                  activeIndex === idx ? 'text-[#1749D1] font-black underline decoration-2 underline-offset-4' : ''
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* The Railroad Scrubber Track */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const p = Math.max(0, Math.min(1, clickX / rect.width));
              const idx = Math.min(STATIONS.length - 1, Math.round(p * (STATIONS.length - 1)));
              scrollToStation(idx);
            }}
            className="relative w-full h-7 bg-[#FFF7E6] border-2 border-[#191A17] rounded-full overflow-visible shadow-[3px_3px_0_#191A17] flex items-center cursor-pointer"
          >
            {/* Railroad Track Ties Pattern */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none opacity-30"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to right, transparent, transparent 16px, #191A17 16px, #191A17 18px)',
              }}
            />

            {/* Filled Progress Bar */}
            <div
              ref={scrubberFillRef}
              className="absolute left-0 top-0 bottom-0 bg-[#FFC36A]/50 rounded-full transition-[width] duration-100 ease-out border-r-2 border-[#191A17]"
              style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* Milestone Stops on Track */}
            <div className="absolute inset-0 flex justify-between items-center px-3 pointer-events-none">
              {STATIONS.map((st, i) => (
                <div
                  key={st.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToStation(i);
                  }}
                  className={`w-3 h-3 rounded-full border-2 border-[#191A17] transition-all duration-200 pointer-events-auto cursor-pointer hover:scale-125 ${
                    i <= activeIndex ? 'bg-[#1749D1] scale-110' : 'bg-white'
                  }`}
                />
              ))}
            </div>

            {/* Moving Animated Runner Marker */}
            <div
              ref={runnerMarkerRef}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-[left] duration-100 ease-out z-20"
              style={{ left: `${scrollProgress * 100}%` }}
            >
              <div className="flex items-center gap-1 bg-[#191A17] text-white px-2 py-0.5 rounded-full border-2 border-[#FFC36A] shadow-[2px_2px_0_#000] text-xs font-black">
                <span className="text-xs">🏃🏻‍♂️‍➡️</span>
                <span className="text-[9px] font-mono text-[#FFC36A] hidden sm:inline">
                  {activeStation.milestone}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Helper Cue */}
          <div className="md:hidden flex items-center justify-between mt-2 text-[11px] text-[#686D66]">
            <span>Swipe milestones horizontally ← →</span>
            <span className="font-mono font-bold text-[#191A17]">
              Step {activeIndex + 1} of {STATIONS.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
