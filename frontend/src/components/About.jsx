import { useEffect, useRef } from 'react';
import { Users, Sun, GraduationCap, Award, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    num: '01',
    icon: Users,
    title: 'Community',
    desc: 'Runners of all ages and backgrounds, united on one course.',
    accent: '#1749D1',
    iconBg: 'bg-[#1749D1]/10 text-[#1749D1]',
  },
  {
    num: '02',
    icon: Sun,
    title: 'Goa Spirit',
    desc: 'Race at dawn as Ponda’s lush green hills come alive with the rising sun.',
    accent: '#0EA5E9',
    iconBg: 'bg-sky-500/10 text-sky-600',
  },
  {
    num: '03',
    icon: GraduationCap,
    title: 'NFSU Goa Pride',
    desc: 'Organised by the National Forensic Sciences University, Goa.',
    accent: '#FFC36A',
    iconBg: 'bg-[#FFC36A]/20 text-[#9A6200]',
  },
  {
    num: '04',
    icon: Award,
    title: 'Inclusivity',
    desc: 'Three distances for every fitness level, age 14 to 60+.',
    accent: '#1749D1',
    iconBg: 'bg-[#1749D1]/10 text-[#1749D1]',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Left editorial text entrance
      gsap.fromTo(
        '.about-text-item',
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 86%',
            once: true,
          },
        }
      );

      // Right visual frame reveal
      gsap.fromTo(
        '.about-visual',
        { y: 32, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 86%',
            once: true,
          },
        }
      );

      // Subtle image parallax zoom on scroll
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.09, y: -10 },
          {
            scale: 1,
            y: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: '.about-visual',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );
      }

      // Staggered pillar cards entrance (outer wrapper has no CSS transitions)
      gsap.fromTo(
        '.about-pillar',
        { y: 30, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.09,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.about-pillars-grid',
            start: 'top 90%',
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
      id="about"
      className="relative bg-[#FFFCEB] pt-12 sm:pt-16 pb-4 sm:pb-6 scroll-mt-16 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle ambient background accent */}
      <div
        className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(23,73,209,0.05)_0%,_transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,_rgba(255,195,106,0.08)_0%,_transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Left Column: Editorial Story ── */}
          <div className="lg:col-span-6">
            <div className="about-text-item inline-flex items-center gap-2 bg-[#1749D1]/[0.08] border border-[#1749D1]/20 rounded-full px-3.5 py-1.5 text-[#1749D1] text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1749D1]" />
              About the Event
            </div>

            <h2
              id="about-heading"
              className="about-text-item font-serif text-4xl sm:text-5xl xl:text-[3.4rem] text-[#191A17] leading-[1.08] tracking-tight mb-6"
            >
              Where dawn meets{' '}
              <span className="italic text-[#1749D1] block sm:inline">determination.</span>
            </h2>

            <p className="about-text-item text-[#4F544E] text-base sm:text-[17px] leading-relaxed mb-5">
              <strong className="text-[#191A17] font-semibold">Adamya Dhāvanam</strong> meaning
              &ldquo;indomitable run&rdquo; is NFSU Goa&apos;s inaugural marathon, bringing together
              students, faculty, local runners, and families along a scenic Ponda route that
              begins as the sun rises over the green hills of Goa.
            </p>

            <p className="about-text-item text-[#686D66] text-base leading-relaxed mb-5">
              Organised by the National Forensic Sciences University, Goa Campus, this event is
              more than a race it is a statement of resilience, community, and spirit. Whether
              you are a first-time fun runner or a seasoned athlete, there is a distance for you.
            </p>

            <p className="about-text-item text-[#686D66] text-base leading-relaxed mb-8">
              Three categories {' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#FFC36A]/25 text-[#191A17] font-semibold text-sm mx-0.5">
                3 km
              </span>
              ,{' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#1749D1]/10 text-[#1749D1] font-semibold text-sm mx-0.5">
                6 km
              </span>
              , and{' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#111A17]/10 text-[#191A17] font-semibold text-sm mx-0.5">
                10 km
              </span>{' '}
              are open to participants across a wide age range, including young runners and
              senior athletes.
            </p>

            <div className="about-text-item flex flex-wrap items-center gap-4">
              <a
                href="#categories"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 bg-[#111A17] hover:bg-[#1749D1] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-[#1749D1]/25"
              >
                Explore Race Categories
                <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              {/* <span className="text-xs font-medium text-[#686D66] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#FFC36A]" />
                6 December 2026 · Ponda Sunrise Route
              </span> */}
            </div>
          </div>

          {/* ── Right Column: Cinematic Photo Showcase ── */}
          <div className="lg:col-span-6">
            <div className="about-visual relative">
              {/* Outer soft aura */}
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#1749D1]/15 via-transparent to-[#FFC36A]/20 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Main framed Ponda marathon runners photograph */}
              <div className="relative rounded-3xl bg-[#111A17] overflow-hidden aspect-[4/3] shadow-[0_24px_60px_-15px_rgba(17,26,23,0.35)] border border-[#111A17]/10">
                <img
                  ref={imgRef}
                  src="/about-marathon.jpg"
                  alt="Runners of all ages jogging together along the palm-lined green hills of Ponda, Goa at sunrise"
                  className="w-full h-full object-cover object-center will-change-transform"
                  loading="lazy"
                />

                {/* Cinematic dark vignette for glass overlay contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0b1320]/80 via-[#0b1320]/10 to-[#0b1320]/30 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top-left glass badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-2 bg-[#0b1320]/65 backdrop-blur-xl border border-white/15 rounded-full px-3.5 py-1.5 text-white/90 text-[11px] font-medium tracking-wide shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#FFC36A] animate-pulse" />
                  Inaugural Edition · NFSU Goa Campus
                </div>

                {/* Bottom-right glass info chip */}
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#0b1320]/75 backdrop-blur-xl border border-white/15 rounded-2xl px-4 py-2.5 text-right shadow-xl">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-[#FFC36A] font-semibold">
                    अदम्यधावनम्
                  </span>
                  <span className="block text-white text-xs sm:text-sm font-bold mt-0.5">
                    Ponda Dawn Run
                  </span>
                </div>
              </div>

              {/* Circular official emblem badge overlapping bottom-left */}
              <div className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-6 bg-[#111A17] rounded-full p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.28)] border-2 border-[#FFFCEB]">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden border border-white/15">
                  <img
                    src="/marathon-logo.png"
                    alt="Adamya Dhavanam official crest"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4 Event Pillars Grid ── */}
        <div className="about-pillars-grid mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="about-pillar h-full">
                <div className="group relative h-full bg-white/90 backdrop-blur-sm border border-[#DADBCF] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-12px_rgba(17,26,23,0.12)] hover:border-[#1749D1]/30 overflow-hidden">
                  {/* Hover top accent border */}
                  <span
                    className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: p.accent }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#686D66]/50 group-hover:text-[#1749D1]/70 transition-colors">
                      {p.num}
                    </span>
                  </div>

                  <h3 className="font-semibold text-[#191A17] text-lg mb-1.5 group-hover:text-[#1749D1] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[#686D66] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
