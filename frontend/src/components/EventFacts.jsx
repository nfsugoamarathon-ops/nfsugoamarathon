import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, Flag, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FACTS = [
  { icon: Calendar, label: 'Date', value: '6 December 2026', accent: '#1749D1' },
  { icon: MapPin, label: 'Venue', value: 'NFSU Goa Campus', accent: '#FFC36A' },
  { icon: Clock, label: 'Reporting', value: '5:00 – 5:30 AM', accent: '#1749D1' },
  { icon: Flag, label: 'Flag-off', value: '6:30 AM onwards', accent: '#FFC36A' },
  { icon: Layers, label: 'Distances', value: '3 km · 6 km · 10 km', accent: '#1749D1' },
];

function Fact({ icon: Icon, label, value, accent, isLast }) {
  return (
    <div
      className={`fact-card group relative flex flex-col gap-2 py-5 px-4 sm:py-6 sm:px-5 sm:px-6 transition-colors duration-300 hover:bg-[#1749D1]/[0.03] ${
        isLast ? 'col-span-2 md:col-span-1' : ''
      }`}
    >
      {/* Top hover indicator line */}
      <span
        className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-2 text-[#686D66] text-xs font-semibold uppercase tracking-widest">
        <span className="fact-icon w-6 h-6 rounded-md bg-[#111A17]/[0.05] group-hover:bg-[#1749D1]/10 text-[#1749D1] flex items-center justify-center transition-colors duration-300">
          <Icon size={13} />
        </span>
        <span>{label}</span>
      </div>

      <span className="text-[#191A17] font-semibold text-base leading-snug group-hover:translate-x-0.5 transition-transform duration-300">
        {value}
      </span>
    </div>
  );
}

export default function EventFacts() {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.fact-card', sectionRef.current);
      const icons = gsap.utils.toArray('.fact-icon', sectionRef.current);

      // Scroll-scrubbed gradient accent bar sweeping across top of section
      if (progressLineRef.current) {
        gsap.fromTo(
          progressLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 95%',
              end: 'top 45%',
              scrub: 0.6,
            },
          }
        );
      }

      // Staggered card entrance on scroll
      gsap.fromTo(
        cards,
        { y: 28, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.09,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            once: true,
          },
        }
      );

      // Elastic icon pop synced with card stagger
      gsap.fromTo(
        icons,
        { scale: 0.5, rotate: -14, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          delay: 0.08,
          ease: 'back.out(1.7)',
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
      className="relative bg-[#FFFCEB] border-y border-[#DADBCF] overflow-hidden"
      aria-label="Event facts at a glance"
    >
      {/* Scroll-scrubbed top accent bar */}
      <div
        ref={progressLineRef}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#1749D1] via-[#FFC36A] to-[#1749D1] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#DADBCF]">
          {FACTS.map((fact, idx) => (
            <Fact
              key={fact.label}
              icon={fact.icon}
              label={fact.label}
              value={fact.value}
              accent={fact.accent}
              isLast={idx === FACTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
