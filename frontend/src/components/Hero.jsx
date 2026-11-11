import { ChevronRight, ChevronDown, MapPin, Calendar, Clock } from 'lucide-react';
import { EVENT, openRegistration } from '../data/eventData';
import { useState, useEffect } from 'react';

/* ─── Countdown Hook ──────────────────────────────────── */
function useCountdown(targetISO) {
  const [time, setTime] = useState(() => {
    const diff = new Date(targetISO).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  });

  useEffect(() => {
    const calculateTime = () => {
      const diff = new Date(targetISO).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      };
    };
    const id = setInterval(() => setTime(calculateTime()), 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return time;
}

/* ─── Countdown Digit Card ────────────────────────────── */
function CountdownCard({ value, label }) {
  return (
    <div className="countdown-card bg-[#0b182e]/85 backdrop-blur-xl border border-cyan-400/25 rounded-2xl w-[62px] h-[74px] sm:w-[70px] sm:h-[82px] lg:w-[66px] lg:h-[82px] xl:w-[74px] xl:h-[90px] flex flex-col items-center justify-center shrink-0 shadow-[0_12px_36px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 hover:scale-[1.03]">
      <span className="font-sans text-2xl sm:text-3xl xl:text-[2.15rem] font-black text-white tabular-nums leading-none tracking-tight">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-white/55 text-[8px] sm:text-[9px] xl:text-[10px] uppercase tracking-[0.2em] mt-1.5 font-semibold leading-none">
        {label}
      </span>
    </div>
  );
}

/* ─── Glowing Coastal Waves Overlay (Desktop >=1024px) ─────────────────── */
function HeroWaves() {
  return (
    <div
      className="hidden lg:block absolute bottom-0 left-0 right-0 h-[260px] pointer-events-none z-[6] overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full animate-hero-wave-glow"
      >
        <defs>
          <linearGradient id="heroWaveFill" x1="0" y1="0" x2="1440" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#071730" stopOpacity="0.92" />
            <stop offset="50%" stopColor="#081428" stopOpacity="0.95" />
            <stop offset="78%" stopColor="#0b284d" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#071429" stopOpacity="0.98" />
          </linearGradient>

          <linearGradient id="heroWaveBack" x1="0" y1="40" x2="1440" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1d9bf0" stopOpacity="0.28" />
            <stop offset="45%" stopColor="#0ea5e9" stopOpacity="0.06" />
            <stop offset="82%" stopColor="#38bdf8" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#1749D1" stopOpacity="0.18" />
          </linearGradient>

          <linearGradient id="heroWaveStroke" x1="0" y1="120" x2="1440" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="28%" stopColor="#7dd3fc" stopOpacity="0.85" />
            <stop offset="52%" stopColor="#bae6fd" stopOpacity="0.95" />
            <stop offset="78%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.55" />
          </linearGradient>

          <filter id="waveGlow" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="animate-hero-wave-slow">
          <path
            d="M-40,145 C220,230 430,115 700,175 C940,228 1065,12 1265,30 C1365,39 1430,78 1480,108 L1480,285 L-40,285 Z"
            fill="url(#heroWaveBack)"
          />
          <path
            d="M-40,145 C220,230 430,115 700,175 C940,228 1065,12 1265,30 C1365,39 1430,78 1480,108"
            stroke="#38bdf8"
            strokeOpacity="0.45"
            strokeWidth="2"
            filter="url(#waveGlow)"
          />
        </g>

        <g className="animate-hero-wave">
          <path
            d="M-40,185 C190,235 405,130 675,188 C915,240 1055,58 1245,62 C1345,64 1420,96 1480,128 L1480,285 L-40,285 Z"
            fill="url(#heroWaveFill)"
          />
          <path
            d="M-40,185 C190,235 405,130 675,188 C915,240 1055,58 1245,62 C1345,64 1420,96 1480,128"
            stroke="url(#heroWaveStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#waveGlow)"
          />
          <path
            d="M-40,222 C240,262 520,175 825,212 C1060,240 1240,148 1480,192"
            stroke="#7dd3fc"
            strokeOpacity="0.16"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN HERO COMPONENT
   Strictly Preserves Desktop (>=1024px)
   Matches Reference Mockup on Mobile & Tablet (<1024px)
   ═══════════════════════════════════════════════════════ */
export default function Hero() {
  const countdown = useCountdown(EVENT.dateISO + 'T06:30:00+05:30');

  return (
    <section
      className="hero-section relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between overflow-hidden bg-[#051124]"
      aria-label="Hero — Adamya Dhavanam marathon"
    >
      {/* ───────────────────────────────────────────────────────────
          1. BACKGROUND IMAGERY & GRADIENT OVERLAYS
          ─────────────────────────────────────────────────────────── */}

      {/* ── Desktop Background Photo (>=1024px) - Strictly Unchanged ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="/hero-bg1.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* ── Desktop Gradient Overlays (>=1024px) - Strictly Unchanged ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Left side — gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1020]/95 via-[#0a1020]/75 to-transparent" />
        {/* Bottom — darker floor for countdown & seamless section transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/95 via-[#0a1020]/25 to-transparent" />
        {/* Top — subtle dark strip for navbar area */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0a1020]/70 to-transparent" />
        {/* Subtle blue tint */}
        <div className="absolute inset-0 bg-[#1749D1]/[0.03]" />
      </div>

      {/* ── Mobile & Tablet Background Imagery (<1024px) ── */}
      {/* Positioned so runners, sunrise, and coastal palm trees are clearly visible behind the crest */}
      <div className="lg:hidden absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="/hero-bg1.jpg"
          alt=""
          className="w-full h-full object-cover object-[center_60%]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Top dark navy gradient: ensures 100% crisp readability for text & badge */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030b18] via-[#04142e]/85 via-42% to-[#030d1e]/92" />
        {/* Warm golden sunrise glow in the center */}
        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle,_rgba(255,184,0,0.14)_0%,_transparent_70%)] blur-2xl" />
        {/* Bottom ocean gradient floor */}
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#051124] via-[#051124]/90 to-transparent" />
      </div>


      {/* ───────────────────────────────────────────────────────────
          2. MOBILE & TABLET LAYOUT (<1024px)
          Exact match to user's uploaded reference mockup
          ─────────────────────────────────────────────────────────── */}
      <div className="lg:hidden relative z-10 flex flex-col items-center justify-between w-full max-w-lg mx-auto px-5 pt-20 sm:pt-24 pb-6 min-h-screen text-center">
        
        {/* Top Group: Pill Badge + Sanskrit + Titles + Tagline + Facts + Buttons */}
        <div className="w-full flex flex-col items-center animate-hero-fadeUp">
          
          {/* Date & Venue Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-full px-4 py-1.5 text-white/90 text-xs sm:text-sm font-medium tracking-wide shadow-md mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#FFB800] shrink-0 animate-pulse" />
            <span>6 December 2026 · NFSU Goa Campus</span>
          </div>

          {/* Sanskrit Title */}
          <span className="block font-serif italic text-[#FFC36A] text-xl sm:text-2xl mb-1 sm:mb-1.5 tracking-wide font-medium">
            {EVENT.nameDevanagari}
          </span>

          {/* Main Title: ADAMYA Dhāvanam */}
          <h1 className="text-white mb-3 sm:mb-4">
            <span className="block font-sans font-black text-5xl sm:text-6xl tracking-tight uppercase leading-[0.92]">
              ADAMYA
            </span>
            <span className="block font-serif italic text-white/90 text-4xl sm:text-5xl tracking-normal leading-[1.05] mt-0.5">
              Dhāvanam
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-5">
            {EVENT.tagline} A marathon of courage at{' '}
            <strong className="text-white font-semibold">NFSU Goa Campus</strong>, where the sea meets the starting line.
          </p>

          {/* Quick Facts Row */}
          <div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 mb-6 sm:mb-7">
            <div className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm">
              <Calendar size={13} className="text-[#FFC36A] shrink-0" />
              <span>{EVENT.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm">
              <MapPin size={13} className="text-[#FFC36A] shrink-0" />
              <span>NFSU Goa Campus</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm">
              <Clock size={13} className="text-[#FFC36A] shrink-0" />
              <span>Flag-off: 6:30 AM</span>
            </div>
          </div>

          {/* Vertically Stacked CTA Buttons */}
          <div className="flex flex-col items-center gap-3 w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-4 sm:mb-6">
            <a
              href={EVENT.googleFormUrl || '#contact'}
              target={EVENT.googleFormUrl ? '_blank' : undefined}
              rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
              onClick={openRegistration}
              className="w-full py-3 sm:py-3.5 px-6 rounded-full bg-[#0052FF] hover:bg-[#0042db] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(0,82,255,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Register Now</span>
              <ChevronRight size={16} />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-2.5 sm:py-3 px-6 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 backdrop-blur-sm transition-all"
            >
              <span>Learn more</span>
              <ChevronDown size={14} />
            </a>
          </div>
        </div>

        {/* Central Circular Crest over Scenic Runners Horizon */}
        <div className="relative my-3 sm:my-5 flex items-center justify-center animate-hero-fadeUp" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 rounded-full bg-[#FFC36A]/15 blur-xl pointer-events-none" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-[3.5px] border-white shadow-[0_12px_40px_rgba(0,0,0,0.65)] overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/marathon-logo-square.png"
              alt="Adamya Dhāvanam Marathon — NFSU Goa"
              className="w-full h-full object-cover object-center"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="eager"
            />
          </div>
        </div>

        {/* Luminous Cyan Coastal Wave SVG Ribbon */}
        <div className="w-full max-w-sm sm:max-w-md my-1 pointer-events-none overflow-hidden" aria-hidden="true">
          <svg
            viewBox="0 0 400 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8"
            preserveAspectRatio="none"
          >
            <path
              d="M-20 20 C60 28, 140 8, 200 16 C260 24, 330 6, 420 14"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
              filter="drop-shadow(0 0 6px rgba(56,189,248,0.7))"
            />
            <path
              d="M-20 24 C80 32, 160 14, 220 20 C280 26, 350 12, 420 18"
              stroke="#1d9bf0"
              strokeWidth="1.2"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Bottom Section: Countdown Timer + Scroll Indicator */}
        <div className="w-full flex flex-col items-center mt-1 animate-hero-fadeUp" style={{ animationDelay: '0.35s' }}>
          {/* Countdown Header & Cards */}
          <div className="w-full flex flex-col items-center mb-5 sm:mb-6">
            <span className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-2.5">
              Time to Flag-off
            </span>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <CountdownCard value={countdown.days} label="Days" />
              <span className="text-cyan-400/50 text-xl font-light select-none animate-pulse">:</span>
              <CountdownCard value={countdown.hours} label="Hours" />
              <span className="text-cyan-400/50 text-xl font-light select-none animate-pulse">:</span>
              <CountdownCard value={countdown.minutes} label="Mins" />
              <span className="text-cyan-400/50 text-xl font-light select-none animate-pulse">:</span>
              <CountdownCard value={countdown.seconds} label="Secs" />
            </div>
          </div>

          {/* Scroll to Explore Indicator */}
          <div className="flex flex-col items-center gap-1.5 text-white/40 pb-2">
            <div className="w-4 h-6 rounded-full border border-white/30 flex items-start justify-center pt-1">
              <div className="w-1 h-1.5 rounded-full bg-white/60 animate-hero-scrollDot" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium">
              Scroll to explore
            </span>
            <ChevronDown size={14} className="animate-bounce" />
          </div>
        </div>

      </div>


      {/* ───────────────────────────────────────────────────────────
          3. DESKTOP LAYOUT (>=1024px)
          STRICTLY UNCHANGED — Preserves 100% of Original Desktop Code
          ─────────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex relative z-10 flex-1 flex-col justify-center w-full max-w-[1440px] mx-auto px-14 xl:px-16 pt-28 pb-0">
        
        {/* Top: Event Badge */}
        <div className="animate-hero-fadeUp mb-4 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-lg border border-white/[0.15] rounded-full px-3.5 py-1.5 text-white/90 text-xs font-medium tracking-wide shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFC36A] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC36A]" />
            </span>
            6 December 2026 · NFSU Goa Campus
          </div>
        </div>

        {/* Middle: Two-zone layout */}
        <div className="flex flex-row items-center justify-between gap-12">

          {/* LEFT: Text Content */}
          <div className="flex-1 max-w-2xl animate-hero-fadeUp" style={{ animationDelay: '0.1s' }}>

            {/* Title Block */}
            <h1 className="text-white leading-[0.88] mb-4">
              <span className="block font-serif italic text-[#FFC36A] text-2xl mb-1.5 tracking-[0.03em]">
                {EVENT.nameDevanagari}
              </span>
              <span className="block font-sans font-black text-7xl xl:text-[5.5rem] tracking-[-0.035em] uppercase leading-[0.9]">
                ADAMYA
              </span>
              <span className="block font-serif italic text-white/70 text-6xl xl:text-[4.2rem] tracking-[-0.02em] leading-[1]">
                Dhāvanam
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-white/60 text-base font-light max-w-md leading-relaxed mb-4">
              {EVENT.tagline} A marathon of courage at{' '}
              <strong className="text-white/85 font-semibold">NFSU Goa Campus</strong>, where the
              sea meets the starting line.
            </p>

            {/* Quick Facts */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-6">
              {[
                { icon: Calendar, text: EVENT.date },
                { icon: MapPin, text: 'NFSU Goa Campus' },
                { icon: Clock, text: 'Flag-off: 6:30 AM' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-white/55 text-sm">
                  <Icon size={13} className="text-[#FFC36A]/80" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={EVENT.googleFormUrl || '#contact'}
                target={EVENT.googleFormUrl ? '_blank' : undefined}
                rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
                onClick={openRegistration}
                className="group inline-flex items-center gap-2 bg-[#1749D1] hover:bg-[#1340b8] text-white font-bold px-7 py-3 rounded-full text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1749D1] shadow-[0_8px_24px_-4px_rgba(23,73,209,0.5)] hover:shadow-[0_12px_32px_-4px_rgba(23,73,209,0.6)]"
              >
                Register Now
                <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 border border-white/20 hover:border-white/40 text-white/65 hover:text-white font-medium px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-white/[0.04] backdrop-blur-sm"
              >
                Learn more
                <ChevronDown size={13} />
              </a>
            </div>

          </div>

          {/* RIGHT: Marathon Logo */}
          <div className="flex flex-col items-end animate-hero-fadeUp shrink-0 ml-auto" style={{ animationDelay: '0.25s' }}>
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-full bg-[#1749D1]/[0.08] blur-3xl animate-hero-glow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full bg-[#FFC36A]/[0.05] blur-2xl animate-hero-glow pointer-events-none" style={{ animationDelay: '3s' }} />

              {/* Logo */}
              <div className="relative w-52 h-52 xl:w-64 xl:h-64 rounded-full overflow-hidden border-2 border-white/[0.12] shadow-[0_0_50px_rgba(23,73,209,0.2),0_0_80px_rgba(255,195,106,0.06)]">
                <img
                  src="/marathon-logo.png"
                  alt="Adamya Dhāvanam Marathon — NFSU Goa"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Section: Scroll Indicator + Countdown Bar (Desktop Only >= 1024px) ── */}
      <div className="hidden lg:block hero-bottom-bar relative z-10 w-full max-w-[1440px] mx-auto px-14 xl:px-16 pb-7 pt-0">
        <div className="hero-bottom-inner flex items-end justify-between gap-4">

          {/* Scroll Indicator — Bottom Left */}
          <div className="hero-scroll-indicator flex items-center gap-2.5 animate-hero-fadeUp pb-1" style={{ animationDelay: '0.5s' }}>
            <div className="w-5 h-7 rounded-full border border-white/20 flex items-start justify-center pt-1">
              <div className="w-1 h-1.5 rounded-full bg-white/40 animate-hero-scrollDot" />
            </div>
            <span className="text-white/35 text-[10px] tracking-[0.25em] uppercase font-medium">Scroll to explore</span>
          </div>

          {/* Right: Countdown Cards (center-aligned beneath logo) */}
          <div className="hero-countdown-wrap flex flex-col items-center w-52 xl:w-64 animate-hero-fadeUp" style={{ animationDelay: '0.35s' }}>
            <p className="w-full text-center text-white/55 text-[11px] uppercase tracking-[0.25em] mb-2 font-semibold">
              Time to Flag-off
            </p>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <CountdownCard value={countdown.days} label="Days" />
              <span className="text-cyan-300/60 text-xl sm:text-2xl font-light select-none animate-pulse">:</span>
              <CountdownCard value={countdown.hours} label="Hours" />
              <span className="text-cyan-300/60 text-xl sm:text-2xl font-light select-none animate-pulse">:</span>
              <CountdownCard value={countdown.minutes} label="Mins" />
              <span className="text-cyan-300/60 text-xl sm:text-2xl font-light select-none animate-pulse">:</span>
              <CountdownCard value={countdown.seconds} label="Secs" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Glowing Layered Coastal Waves (Desktop) ── */}
      <HeroWaves />

      {/* ── Desktop Bottom edge gradient ── */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#071429] to-transparent pointer-events-none z-[5]" aria-hidden="true" />
    </section>
  );
}
