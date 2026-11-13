import { useState } from 'react';
import {
  Mail, FileText, Send, Home, Layers, CalendarDays,
  ShieldCheck, HelpCircle
} from 'lucide-react';
import { EVENT } from '../data/eventData';

/* ─── Social Brand Icons (Rounded Squircle Buttons) ─────────────── */
const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const LiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74V9.89H5.07v8.61h2.78z"/>
  </svg>
);

const YtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#051124"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

/* ─── Specialty Outline Icons Matching Inspo Exactly ─────────────── */
const WhatsAppOutlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MedicalKitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect x="3" y="6" width="18" height="15" rx="3" />
    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <line x1="9.5" y1="13.5" x2="14.5" y2="13.5" />
  </svg>
);

const RouteOutlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <circle cx="18" cy="5" r="3" />
  </svg>
);

/* ─── 1. TOP CURVES WITH SUNRISE & RUNNERS (ANIMATED LIKE HERO) ───── */
function TopHillsAndRunners() {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none h-[110px] sm:h-[135px] md:h-[155px] lg:h-[170px] -mt-[1px]">
      <svg
        viewBox="0 0 1440 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full animate-hero-wave-glow"
      >
        <defs>
          {/* Sunrise Golden Radial Glow (matches Hero Sunrise) */}
          <radialGradient id="runnerSunrise" cx="84%" cy="28%" r="22%">
            <stop offset="0%" stopColor="#FFC36A" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#FF9E00" stopOpacity="0.55" />
            <stop offset="65%" stopColor="#FF6F00" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#051124" stopOpacity="0" />
          </radialGradient>

          {/* Hero-matched wave fill gradients */}
          <linearGradient id="footerWaveFill" x1="0" y1="0" x2="1440" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#071730" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#051124" stopOpacity="0.98" />
            <stop offset="78%" stopColor="#0b284d" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#051124" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="footerWaveBack" x1="0" y1="20" x2="1440" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1d9bf0" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#0ea5e9" stopOpacity="0.1" />
            <stop offset="82%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1749D1" stopOpacity="0.22" />
          </linearGradient>

          {/* Glowing Animated Wave Stroke (Cyan -> Bright Gold near Runners) */}
          <linearGradient id="footerWaveStroke" x1="0" y1="40" x2="1440" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="25%" stopColor="#7dd3fc" stopOpacity="0.8" />
            <stop offset="52%" stopColor="#bae6fd" stopOpacity="0.75" />
            <stop offset="72%" stopColor="#FFC36A" stopOpacity="0.9" />
            <stop offset="86%" stopColor="#FFE082" stopOpacity="1" />
            <stop offset="94%" stopColor="#FFB300" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFC36A" stopOpacity="0.45" />
          </linearGradient>

          {/* Hero Wave Glow Filter */}
          <filter id="waveGlow" x="-10%" y="-40%" width="120%" height="180%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── 0. AREA ABOVE CURVE: PURE #FFFCEB (Completely eliminates dark slab above curve) ── */}
        <path
          d="M-40,-5 L1480,-5 L1480,42 C1380,32 1300,20 1220,24 C1040,32 940,62 840,60 C660,56 460,70 300,55 C160,42 60,32 -40,42 Z"
          fill="#FFFCEB"
        />

        {/* ── 1. WARM GOLDEN SUNRISE AMBIENT LIGHT (Pulses like Hero Glow) ── */}
        <ellipse
          cx="1215"
          cy="32"
          rx="150"
          ry="65"
          fill="url(#runnerSunrise)"
          className="animate-hero-glow"
        />

        {/* ── 2. BACK LAYER: SLOW SWAYING SECONDARY WAVE (Hero Animation) ── */}
        <g className="animate-hero-wave-slow">
          <path
            d="M-40,68 C220,25 480,95 760,70 C1020,45 1190,8 1480,36 L1480,175 L-40,175 Z"
            fill="url(#footerWaveBack)"
            opacity="0.85"
          />
          <path
            d="M-40,68 C220,25 480,95 760,70 C1020,45 1190,8 1480,36"
            stroke="#38bdf8"
            strokeOpacity="0.4"
            strokeWidth="2"
            filter="url(#waveGlow)"
          />
        </g>

        {/* ── 3. FRONT LAYER: SWAYING MAIN HILL CONTOUR (Hero Animation) ── */}
        <g className="animate-hero-wave">
          {/* Main Dark Hill Fill flowing into footer body */}
          <path
            d="M-40,42 C60,32 160,42 300,55 C460,70 660,56 840,60 C940,62 1040,32 1220,24 C1300,20 1380,32 1480,42 L1480,175 L-40,175 Z"
            fill="url(#footerWaveFill)"
          />

          {/* Luminous Glowing Hill Edge Stroke with Filter */}
          <path
            d="M-40,42 C60,32 160,42 300,55 C460,70 660,56 840,60 C940,62 1040,32 1220,24 C1300,20 1380,32 1480,42"
            stroke="url(#footerWaveStroke)"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#waveGlow)"
          />

          {/* Secondary Subtly Highlight Line */}
          <path
            d="M-40,50 C180,42 420,74 720,68 C1000,62 1180,30 1480,48"
            stroke="#7dd3fc"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
        </g>

        {/* ── 4. TWO SPRINTING RUNNER SILHOUETTES AT CREST ── */}
        <g id="runners-silhouette">
          {/* Runner 1 (Trail Runner - Female Athletic Form) */}
          <g transform="translate(1185, -2) scale(0.66)" className="animate-pulse" style={{ animationDuration: '4s' }}>
            {/* Head & Ponytail */}
            <circle cx="28" cy="8" r="4.2" fill="#040c1a" />
            <path d="M25 8 C21 7 18 10 16 13" stroke="#040c1a" strokeWidth="2.2" strokeLinecap="round" />
            {/* Torso */}
            <path d="M27 12 L24 28" stroke="#040c1a" strokeWidth="4.5" strokeLinecap="round" />
            {/* Forward Arm */}
            <path d="M26 16 L34 22 L40 18" stroke="#040c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Back Arm */}
            <path d="M26 16 L17 21 L13 28" stroke="#040c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Lead Leg (forward bend) */}
            <path d="M24 28 L32 37 L38 47" stroke="#040c1a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Trail Leg (extended push-off) */}
            <path d="M24 28 L14 34 L8 45" stroke="#040c1a" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* Runner 2 (Lead Runner - Male Stride Form) */}
          <g transform="translate(1230, -7) scale(0.70)" className="animate-pulse" style={{ animationDuration: '3.5s' }}>
            {/* Head */}
            <circle cx="26" cy="8" r="4.6" fill="#040c1a" />
            {/* Torso leaning into sprint */}
            <path d="M25 12 L22 29" stroke="#040c1a" strokeWidth="5.2" strokeLinecap="round" />
            {/* Forward Arm */}
            <path d="M24 16 L33 21 L38 16" stroke="#040c1a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Back Arm */}
            <path d="M24 16 L15 22 L11 30" stroke="#040c1a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Lead Leg driving high */}
            <path d="M22 29 L32 38 L36 50" stroke="#040c1a" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
            {/* Trail Leg full extension back */}
            <path d="M22 29 L12 36 L4 46" stroke="#040c1a" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

/* ─── 2. BOTTOM NFSU BUILDING SILHOUETTE & GOLDEN DUNES ─────────── */
function BottomBuildingAndDunes() {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none h-[180px] sm:h-[220px] md:h-[250px] lg:h-[270px]">
      <svg
        viewBox="0 0 1440 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-full animate-hero-wave-glow"
      >
        <defs>
          {/* Golden Dune Gradient 1 */}
          <linearGradient id="duneGoldBack" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
            <stop offset="25%" stopColor="#c8860a" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#e5a93c" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#c8860a" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.25" />
          </linearGradient>

          {/* Golden Dune Gradient 2 (Foreground) */}
          <linearGradient id="duneGoldFront" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c8860a" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#FFC36A" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#FFE082" stopOpacity="1" />
            <stop offset="70%" stopColor="#FFC36A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c8860a" stopOpacity="0.4" />
          </linearGradient>

          {/* Ambient Light behind NFSU Central Dome */}
          <radialGradient id="buildingBackdropGlow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#1749D1" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#051124" stopOpacity="0" />
          </radialGradient>

          <filter id="bottomDuneGlow" x="-10%" y="-40%" width="120%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background Trees & Foliage (Left & Right) ── */}
        {/* Left Palm Trees Cluster */}
        <g stroke="#091b2e" strokeWidth="2.5" strokeLinecap="round" opacity="0.65">
          <path d="M120 220 Q130 160 145 105" strokeWidth="4" />
          <path d="M145 105 Q120 85 95 78 M145 105 Q130 70 120 48 M145 105 Q155 70 170 52 M145 105 Q175 85 195 76 M145 105 Q160 100 185 108" />
          <path d="M70 230 Q80 180 90 130" strokeWidth="3.5" />
          <path d="M90 130 Q70 115 50 110 M90 130 Q75 100 68 85 M90 130 Q105 102 118 88 M90 130 Q118 115 132 108" />
        </g>

        {/* Right Palm Trees Cluster */}
        <g stroke="#091b2e" strokeWidth="2.5" strokeLinecap="round" opacity="0.65">
          <path d="M1320 220 Q1310 160 1295 105" strokeWidth="4" />
          <path d="M1295 105 Q1320 85 1345 78 M1295 105 Q1310 70 1320 48 M1295 105 Q1285 70 1270 52 M1295 105 Q1265 85 1245 76 M1295 105 Q1280 100 1255 108" />
          <path d="M1370 230 Q1360 180 1350 130" strokeWidth="3.5" />
          <path d="M1350 130 Q1370 115 1390 110 M1350 130 Q1365 100 1372 85 M1350 130 Q1335 102 1322 88 M1350 130 Q1322 115 1308 108" />
        </g>

        {/* Ambient Glow behind University Pediment (Hero Glow Animation) */}
        <ellipse cx="720" cy="115" rx="280" ry="70" fill="url(#buildingBackdropGlow)" className="animate-hero-glow" />

        {/* ── NFSU University Building Architectural Drawing ── */}
        <g id="nfsu-facade" opacity="0.85">
          {/* Main Building Body Base Block */}
          <rect x="420" y="98" width="600" height="120" fill="#06162a" stroke="#0e2f52" strokeWidth="1.2" rx="2" />

          {/* Left Wing (Two-story) */}
          <rect x="420" y="105" width="180" height="113" fill="#071b33" stroke="#0e2f52" strokeWidth="1" />
          {[438, 474, 510, 546].map(x => (
            <g key={`w-l-${x}`}>
              <rect x={x} y={118} width="18" height="16" rx="1.5" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
              <rect x={x} y="145" width="18" height="16" rx="1.5" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
              <rect x={x} y="172" width="18" height="16" rx="1.5" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
            </g>
          ))}

          {/* Right Wing (Two-story) */}
          <rect x="840" y="105" width="180" height="113" fill="#071b33" stroke="#0e2f52" strokeWidth="1" />
          {[858, 894, 930, 966].map(x => (
            <g key={`w-r-${x}`}>
              <rect x={x} y={118} width="18" height="16" rx="1.5" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
              <rect x={x} y="145" width="18" height="16" rx="1.5" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
              <rect x={x} y="172" width="18" height="16" rx="1.5" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
            </g>
          ))}

          {/* Wing Roof Balustrade / Battlements */}
          <rect x="415" y="94" width="190" height="8" fill="#08203d" stroke="#0e2f52" strokeWidth="1" />
          <rect x="835" y="94" width="190" height="8" fill="#08203d" stroke="#0e2f52" strokeWidth="1" />
          {[425, 455, 485, 515, 545, 575, 845, 875, 905, 935, 965, 995].map(bx => (
            <rect key={`bal-${bx}`} x={bx} y="88" width="14" height="7" fill="#0b294d" />
          ))}

          {/* ── Central Portico / Classical Pediment ── */}
          <rect x="600" y="80" width="240" height="138" fill="#081e38" stroke="#123b66" strokeWidth="1.5" />

          {/* Grand Triangular Pediment */}
          <polygon points="600,80 720,44 840,80" fill="#0a2545" stroke="#1a4c82" strokeWidth="1.5" />
          <polygon points="616,77 720,49 824,77" fill="#07182e" />

          {/* "NFSU" Inscription on Pediment */}
          <text
            x="720"
            y="70"
            textAnchor="middle"
            fill="#38bdf8"
            opacity="0.9"
            fontSize="13"
            fontWeight="900"
            fontFamily="sans-serif"
            letterSpacing="3"
          >
            NFSU
          </text>

          {/* Portico Cornice & Frieze */}
          <rect x="595" y="79" width="250" height="8" fill="#0e345e" stroke="#1a4c82" strokeWidth="1" />

          {/* 4 Grand Columns */}
          {[620, 670, 770, 820].map(cx => (
            <g key={`col-${cx}`}>
              <rect x={cx - 5} y="87" width="16" height="6" fill="#134375" />
              <rect x={cx - 3} y="93" width="12" height="110" fill="#0a2545" stroke="#123b66" strokeWidth="0.8" />
              <rect x={cx - 5} y="203" width="16" height="6" fill="#134375" />
            </g>
          ))}

          {/* Central Grand Arch Entrance */}
          <path d="M695,208 L695,145 Q720,122 745,145 L745,208 Z" fill="#040e1c" stroke="#1a4c82" strokeWidth="1.5" />
          <path d="M702,208 L702,150 Q720,132 738,150 L738,208 Z" fill="#020812" />
          <path d="M695,145 Q720,122 745,145" stroke="#38bdf8" strokeWidth="1" opacity="0.6" fill="none" />
          <line x1="720" y1="124" x2="720" y2="148" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />

          {/* Central Windows flank of entrance */}
          <rect x="642" y="125" width="18" height="26" rx="2" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
          <rect x="780" y="125" width="18" height="26" rx="2" fill="#0d2847" stroke="#164373" strokeWidth="0.8" />
        </g>

        {/* ── Sinuous Layered Golden Dunes (Hero Wave Animation) ── */}
        {/* Layer 1: Back Dune Wave (Slow Sway) */}
        <g className="animate-hero-wave-slow">
          <path
            d="M-40,225 C220,180 500,240 760,205 C1020,170 1260,225 1480,185 L1480,275 L-40,275 Z"
            fill="#06162a"
            opacity="0.9"
          />
          <path
            d="M-40,225 C220,180 500,240 760,205 C1020,170 1260,225 1480,185"
            stroke="url(#duneGoldBack)"
            strokeWidth="2"
            opacity="0.8"
          />
        </g>

        {/* Layer 2: Main Foreground Golden Glowing Curve (Sways like Hero Wave) */}
        <g className="animate-hero-wave">
          <path
            d="M-40,245 C180,210 460,245 720,218 C980,192 1220,238 1480,210 L1480,275 L-40,275 Z"
            fill="#040f1f"
          />
          <path
            d="M-40,245 C180,210 460,245 720,218 C980,192 1220,238 1480,210"
            stroke="url(#duneGoldFront)"
            strokeWidth="3.2"
            filter="url(#bottomDuneGlow)"
          />
        </g>

        {/* Layer 3: Secondary Accent Curve */}
        <path
          d="M200,250 C480,225 820,250 1180,220"
          stroke="#FFC36A"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN FOOTER COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer
      className="relative w-full overflow-hidden text-white"
      style={{
        background: 'linear-gradient(180deg, #051124 0%, #06152b 40%, #040e1e 100%)',
      }}
      aria-label="Footer — Adamya Dhāvanam Marathon"
    >
      {/* ── TOP SECTION: Animated Rolling Hills, Sunrise Glow & Runners ── */}
      <TopHillsAndRunners />

      {/* ── MAIN CONTENT CONTAINER (The 4 Columns) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-2 sm:pt-4 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.18fr_0.85fr_1.05fr_1.12fr] gap-10 lg:gap-8">

          {/* ═════════════════════════════════════════════════════
              COLUMN 1: BRAND & MISSION
              ═════════════════════════════════════════════════════ */}
          <div className="flex flex-col justify-start">
            {/* Logo Emblem + Divider + Title Block */}
            <div className="flex items-center gap-4">
              {/* Circular Emblem */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full border border-white/20 shadow-[0_0_24px_rgba(56,189,248,0.22)] bg-[#07192e] p-0.5 overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/marathon-logo.png"
                    alt="Adamya Dhāvanam Emblem"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Vertical Hairline Divider */}
              <div className="w-[1px] h-12 bg-white/20 shrink-0" />

              {/* Title & Date */}
              <div>
                <h3 className="font-serif italic text-2xl text-[#FFC36A] tracking-normal leading-tight font-medium">
                  Adamya Dhāvanam
                </h3>
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/60 uppercase mt-1">
                  NFSU GOA &nbsp;•&nbsp; 6 DEC 2026
                </p>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mt-5">
              A flagship marathon at the National Forensic Sciences University, Goa,
              bringing together fitness, community and the spirit of resilience.
            </p>

            {/* Social Media Squircle Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={EVENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/75 hover:text-[#FFC36A] hover:border-[#FFC36A]/50 hover:bg-[#FFC36A]/10 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <IgIcon />
              </a>
              <a
                href={EVENT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/75 hover:text-[#FFC36A] hover:border-[#FFC36A]/50 hover:bg-[#FFC36A]/10 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <LiIcon />
              </a>
              <a
                href={EVENT.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/75 hover:text-[#FFC36A] hover:border-[#FFC36A]/50 hover:bg-[#FFC36A]/10 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <YtIcon />
              </a>
              <a
                href={EVENT.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/75 hover:text-[#FFC36A] hover:border-[#FFC36A]/50 hover:bg-[#FFC36A]/10 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════
              COLUMN 2: EXPLORE
              ═════════════════════════════════════════════════════ */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide">
              Explore
            </h4>
            {/* Golden Underline Accent */}
            <div className="w-7 h-[2px] bg-[#FFC36A] mt-1.5 mb-5 rounded-full" />

            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  onClick={scrollTo('#about')}
                  className="group flex items-center gap-3.5 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <Home className="w-[18px] h-[18px] text-white/80 group-hover:text-[#FFC36A] group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>About Race</span>
                </a>
              </li>
              <li>
                <a
                  href="#categories"
                  onClick={scrollTo('#categories')}
                  className="group flex items-center gap-3.5 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <Layers className="w-[18px] h-[18px] text-white/80 group-hover:text-[#FFC36A] group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  onClick={scrollTo('#schedule')}
                  className="group flex items-center gap-3.5 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <CalendarDays className="w-[18px] h-[18px] text-white/80 group-hover:text-[#FFC36A] group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>Race Day Schedule</span>
                </a>
              </li>
              <li>
                <a
                  href="#route"
                  onClick={scrollTo('#route')}
                  className="group flex items-center gap-3.5 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <RouteOutlineIcon />
                  <span className="group-hover:translate-x-0.5 transition-transform">Route</span>
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={scrollTo('#faqs')}
                  className="group flex items-center gap-3.5 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <HelpCircle className="w-[18px] h-[18px] text-white/80 group-hover:text-[#FFC36A] group-hover:translate-x-0.5 transition-all shrink-0" />
                  <span>FAQs</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ═════════════════════════════════════════════════════
              COLUMN 3: SUPPORT
              ═════════════════════════════════════════════════════ */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide">
              Support
            </h4>
            {/* Golden Underline Accent */}
            <div className="w-7 h-[2px] bg-[#FFC36A] mt-1.5 mb-5 rounded-full" />

            <ul className="space-y-4">
              <li>
                <a
                  href={EVENT.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 text-sm"
                >
                  <WhatsAppOutlineIcon />
                  <div>
                    <span className="block text-white/85 group-hover:text-white transition-colors font-medium">
                      WhatsApp Helpdesk
                    </span>
                    <span className="block text-white/50 text-xs mt-0.5 font-normal">
                      {EVENT.contact.phone}
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EVENT.contact.email}`}
                  className="group flex items-center gap-3.5 text-sm text-white/75 hover:text-white transition-colors"
                >
                  <Mail className="w-[18px] h-[18px] text-white/80 group-hover:text-[#38bdf8] transition-colors shrink-0" />
                  <span>{EVENT.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={scrollTo('#terms')}
                  className="group flex items-center gap-3.5 text-sm text-white/75 hover:text-white transition-colors"
                >
                  <MedicalKitIcon />
                  <span>Terms &amp; Medical Waiver</span>
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={scrollTo('#terms')}
                  className="group flex items-center gap-3.5 text-sm text-white/75 hover:text-white transition-colors"
                >
                  <ShieldCheck className="w-[18px] h-[18px] text-white/80 group-hover:text-[#38bdf8] transition-colors shrink-0" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={scrollTo('#terms')}
                  className="group flex items-center gap-3.5 text-sm text-white/75 hover:text-white transition-colors"
                >
                  <FileText className="w-[18px] h-[18px] text-white/80 group-hover:text-[#FFC36A] transition-colors shrink-0" />
                  <span>Terms &amp; Conditions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ═════════════════════════════════════════════════════
              COLUMN 4: STAY UPDATED
              ═════════════════════════════════════════════════════ */}
          <div>
            <h4 className="text-base font-bold text-white tracking-wide">
              Stay Updated
            </h4>
            {/* Golden Underline Accent */}
            <div className="w-7 h-[2px] bg-[#FFC36A] mt-1.5 mb-5 rounded-full" />

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Get important updates, race alerts and announcements directly in your inbox.
            </p>

            {/* Email Form */}
            {submitted ? (
              <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold py-3 px-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 mb-5">
                <span>✓</span> You're subscribed for race alerts!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="relative flex items-center bg-[#07192e]/90 border border-white/20 focus-within:border-[#38bdf8]/60 rounded-2xl p-1 pl-3.5 pr-1.5 transition-all mb-5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)] group"
              >
                <Mail size={16} className="text-white/40 shrink-0 mr-2.5 group-focus-within:text-[#38bdf8] transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none pr-2"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-9 h-9 rounded-full bg-[#FFC36A] hover:bg-[#ffb84d] text-[#051124] flex items-center justify-center shrink-0 shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={14} className="ml-0.5 text-[#051124] fill-[#051124]" />
                </button>
              </form>
            )}

            {/* Hashtag Oval Pill Button */}
            <div className="flex justify-start">
              <a
                href={EVENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-full border border-[#FFC36A]/70 text-[#FFC36A] font-serif italic text-sm tracking-wide bg-[#FFC36A]/[0.03] hover:bg-[#FFC36A]/10 hover:border-[#FFC36A] hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(255,195,106,0.08)]"
              >
                #AdamyaDhāvanam
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM SECTION: Animated NFSU Building Silhouette & Golden Dunes ── */}
      <BottomBuildingAndDunes />

      {/* ── BOTTOM BAR (Copyright, Divider Line, Credits — NO Back to Top) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-8 pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          {/* Copyright notice */}
          <span className="whitespace-nowrap">
            © 2026 Adamya Dhāvanam · NFSU Goa. All Rights Reserved.
          </span>

          {/* Thin Horizontal Divider Spanning Between Left and Right */}
          <div className="flex-1 h-[1px] bg-white/10 mx-6 hidden md:block" />

          {/* Credits */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span>Organised with</span>
            <span className="text-red-500 text-sm animate-pulse leading-none" aria-hidden="true">
              ❤️
            </span>
            <span>by</span>
            <span className="font-serif italic text-[#FFC36A] font-semibold text-sm ml-0.5">
              NFSU Goa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
