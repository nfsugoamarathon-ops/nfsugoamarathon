import { useState, useEffect, useRef } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CATEGORIES, EVENT, openRegistration } from '../data/eventData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const COLOR_MAP = {
  marigold: {
    bg: 'bg-[#FFF7E6]',
    border: 'border-[#e8e337]',
    badge: 'bg-[#e8e337] text-[#191A17]',
    btn: 'bg-[#e8e337] hover:bg-[#f0b04f] text-[#191A17]',
    ring: 'ring-[#e8e337]',
    dot: 'bg-[#e8e337]',
  },
  'race-blue': {
    bg: 'bg-[#EEF2FF]',
    border: 'border-[#1749D1]',
    badge: 'bg-[#1749D1] text-white',
    btn: 'bg-[#1749D1] hover:bg-[#1340b8] text-white',
    ring: 'ring-[#1749D1]',
    dot: 'bg-[#1749D1]',
  },
  'dawn-lilac': {
    bg: 'bg-[#F5EEFF]',
    border: 'border-[#9B59C8]',
    badge: 'bg-[#9B59C8] text-white',
    btn: 'bg-[#9B59C8] hover:bg-[#8347b0] text-white',
    ring: 'ring-[#9B59C8]',
    dot: 'bg-[#9B59C8]',
  },
  emerald: {
    bg: 'bg-[#F0FDF4]',
    border: 'border-[#10B981]',
    badge: 'bg-[#10B981] text-white',
    btn: 'bg-[#10B981] hover:bg-[#059669] text-white',
    ring: 'ring-[#10B981]',
    dot: 'bg-[#10B981]',
  },
};

export default function Categories() {
  const [selected, setSelected] = useState('10k');
  const sectionRef = useRef(null);
  const trackLineRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Header staggered entrance
      gsap.fromTo(
        '.categories-header-item',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      );

      // Scroll-scrubbed gradient race line above the cards
      if (trackLineRef.current) {
        gsap.fromTo(
          trackLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.categories-grid',
              start: 'top 92%',
              end: 'top 50%',
              scrub: 0.6,
            },
          }
        );
      }

      // Staggered race cards entrance (outer wrapper has no CSS transitions)
      gsap.fromTo(
        '.category-card',
        { y: 36, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.categories-grid',
            start: 'top 90%',
            once: true,
          },
        }
      );

      // Elastic badge pop on cards
      gsap.fromTo(
        '.category-badge',
        { scale: 0.75, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          stagger: 0.1,
          delay: 0.12,
          ease: 'back.out(1.7)',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.categories-grid',
            start: 'top 90%',
            once: true,
          },
        }
      );

      // Inclusion list items micro-stagger synced to grid entrance
      gsap.fromTo(
        '.category-inclusion',
        { x: -10, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.025,
          delay: 0.16,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.categories-grid',
            start: 'top 90%',
            once: true,
          },
        }
      );

      // Footer note reveal
      gsap.fromTo(
        '.categories-note',
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.categories-note',
            start: 'top 95%',
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
      id="categories"
      className="bg-[#FFFCEB] pt-4 sm:pt-6 pb-4 sm:pb-6 scroll-mt-16 overflow-hidden"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="categories-header-item text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-3">
            Choose your race
          </p>
          <h2
            id="categories-heading"
            className="categories-header-item font-serif italic text-4xl sm:text-5xl text-[#191A17] leading-tight mb-3"
          >
            Find your distance.
          </h2>
          <p className="categories-header-item text-[#686D66] text-base leading-relaxed">
            Four categories, one race day. Select the distance that matches your ambition then register.
          </p>
        </div>

        {/* Scroll-scrubbed race track divider */}
        <div className="relative h-[2px] w-full bg-[#DADBCF]/60 rounded-full mb-8 overflow-hidden" aria-hidden="true">
          <div
            ref={trackLineRef}
            className="absolute inset-0 origin-left bg-gradient-to-r from-[#e8e337] via-[#1749D1] via-[#9B59C8] to-[#10B981]"
          />
        </div>

        {/* Category cards (4 cards in single row on desktop) */}
        <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 items-stretch">
          {CATEGORIES.map((cat) => {
            const c = COLOR_MAP[cat.color];
            const isSelected = selected === cat.id;
            return (
              <div key={cat.id} className="category-card h-full">
                <div
                  className={`relative h-full rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col ${c.bg} ${
                    isSelected
                      ? `${c.border} ring-2 ${c.ring} ring-offset-2 shadow-xl`
                      : 'border-[#DADBCF] hover:border-current hover:shadow-md'
                  }`}
                  onClick={() => setSelected(cat.id)}
                  tabIndex={0}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`${cat.label} ${cat.name}`}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') setSelected(cat.id);
                  }}
                >
                  {/* Selected indicator */}
                  {isSelected && (
                    <div
                      className={`absolute top-4 right-4 w-6 h-6 rounded-full ${c.badge} flex items-center justify-center`}
                    >
                      <Check size={13} />
                    </div>
                  )}

                  <div className="p-5 xl:p-6 flex-1 flex flex-col">
                    {/* Distance badge */}
                    <span
                      className={`category-badge self-start inline-block text-xs font-bold px-3 py-1 rounded-full mb-3.5 ${c.badge}`}
                    >
                      {cat.id === 'pwd' ? '3 KM · PwD' : cat.label}
                    </span>

                    <h3 className="text-[#191A17] font-bold text-xl xl:text-2xl mb-1">{cat.name}</h3>
                    <p className="text-[#686D66] text-xs xl:text-sm mb-4 leading-relaxed min-h-[40px]">{cat.description}</p>

                    {/* Key details */}
                    <dl className="space-y-1.5 mb-5 text-xs xl:text-sm">
                      <div className="flex justify-between text-xs xl:text-sm">
                        <dt className="text-[#686D66]">Eligibility</dt>
                        <dd className="text-[#191A17] font-medium text-right truncate max-w-[150px]">{cat.eligibility}</dd>
                      </div>
                      <div className="flex justify-between text-xs xl:text-sm">
                        <dt className="text-[#686D66]">Flag-off</dt>
                        <dd className="text-[#191A17] font-medium">{cat.flagOff}</dd>
                      </div>
                      <div className="flex justify-between text-xs xl:text-sm">
                        <dt className="text-[#686D66]">Cut-off</dt>
                        <dd className="text-[#191A17] font-medium">{cat.cutoff}</dd>
                      </div>
                      <div className="flex justify-between items-center text-xs xl:text-sm">
                        <dt className="text-[#686D66]">Fee</dt>
                        <dd className={cat.id === 'pwd' ? 'text-emerald-700 font-extrabold text-sm xl:text-base uppercase tracking-wider' : 'text-[#191A17] font-bold text-sm xl:text-base'}>
                          {cat.fee}
                        </dd>
                      </div>
                    </dl>

                    {/* Inclusions */}
                    <div className="border-t border-[#DADBCF] pt-3.5 mb-5">
                      <p className="text-[#686D66] text-[11px] uppercase tracking-wider font-semibold mb-2.5">Included</p>
                      <ul className="space-y-1">
                        {cat.inclusions.map((inc) => (
                          <li key={inc} className="category-inclusion flex items-start gap-1.5 text-xs xl:text-sm text-[#191A17]">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                            <span className="leading-tight">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Register CTA */}
                    <a
                      href={cat.formUrl || (cat.id === 'pwd' ? EVENT.pwdGoogleFormUrl : EVENT.googleFormUrl) || '#contact'}
                      target={(cat.formUrl || EVENT.googleFormUrl) ? '_blank' : undefined}
                      rel={(cat.formUrl || EVENT.googleFormUrl) ? 'noopener noreferrer' : undefined}
                      className={`mt-auto w-full flex items-center justify-center gap-1.5 font-semibold py-2.5 sm:py-3 rounded-xl transition-all text-xs sm:text-sm ${c.btn} focus-visible:outline-2 focus-visible:outline-offset-2`}
                      onClick={(e) => {
                        e.stopPropagation();
                        openRegistration(e, cat.id);
                      }}
                      aria-label={`Register for ${cat.label} ${cat.name}`}
                    >
                      <span>{cat.id === 'pwd' ? 'Register for PwD' : `Register for ${cat.label}`}</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
