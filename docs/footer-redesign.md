# Footer Redesign v3 — Curve Seamless Transition & Hero Element Animations

**Date:** 2026-11-13  
**Status:** Completed  
**Task:**
1. Remove the empty dark slab above the top curve (`media_1794556580291_102aca46.png`), allowing the curve to serve as the seamless transition boundary from the page above.
2. Add hero-section element animations to the waves, glowing strokes, ambient sunrise, dunes, and interactive elements.

---

## 1. Summary of Changes

| Area | Before | After |
|---|---|---|
| **Area Above Curve** | Visible 60-80px tall dark navy `#051124` rectangle caused by footer's background showing behind the empty top SVG coordinate space | Covered with seamless `#FFFCEB` path that matches the exact website page background, so the glowing curve line sits flush against the page with **zero dark slab above it** |
| **App Layout Seam** | `<div className="relative z-10 bg-[#FFFCEB] shadow-2xl rounded-b-3xl">` left a rounded box-shadow seam above the footer | Removed `shadow-2xl rounded-b-3xl` so the page background flows directly into the curved top edge |
| **Top Waves Animation** | Static curve line | Dual animated wave layers: Back wave sways with `animate-hero-wave-slow`, Front hill sways with `animate-hero-wave`, and the wave line pulses with `animate-hero-wave-glow` and `filter="url(#waveGlow)"` |
| **Sunrise Glow** | Static gradient | Golden radial sunrise glow pulses with `animate-hero-glow` behind the runners |
| **Runners Silhouette** | Static silhouettes | Two runners stride on the crest with soft rhythmic running pulse animations |
| **Bottom Dunes Animation** | Static dunes | Layered golden dunes sway with `animate-hero-wave` and `animate-hero-wave-slow`, while the ambient light behind the NFSU building pulses with `animate-hero-glow` |
| **Interactive Elements** | Standard hover | Added smooth scaling `hover:scale-105` on social squircle buttons, hashtag pill, emblem, and email form |

---

## 2. Before vs. After Code Highlights

### TopHillsAndRunners: Area Above Curve & Hero Animations

#### Before
```jsx
// Empty space above y=68 in the SVG showed the footer's dark navy background
<div className="relative w-full overflow-hidden select-none pointer-events-none h-[180px]">
  <svg viewBox="0 0 1440 180" ...>
    {/* Only had a path from y=68 down to 185 */}
    <path d="M-20,68 C220,52 ... L1460,185 L-20,185 Z" fill="url(#hillFrontGrad)" />
  </svg>
</div>
```

#### After
```jsx
function TopHillsAndRunners() {
  return (
    <div className="relative w-full overflow-hidden select-none pointer-events-none h-[110px] sm:h-[135px] md:h-[155px] lg:h-[170px] -mt-[1px]">
      <svg
        viewBox="0 0 1440 170"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full animate-hero-wave-glow"
      >
        {/* ── 0. AREA ABOVE CURVE: PURE #FFFCEB (Eliminates the dark slab completely) ── */}
        <path
          d="M-40,-5 L1480,-5 L1480,42 C1380,32 1300,20 1220,24 C1040,32 940,62 840,60 C660,56 460,70 300,55 C160,42 60,32 -40,42 Z"
          fill="#FFFCEB"
        />

        {/* ── 1. WARM GOLDEN SUNRISE (Hero Glow Animation) ── */}
        <ellipse cx="1215" cy="32" rx="150" ry="65" fill="url(#runnerSunrise)" className="animate-hero-glow" />

        {/* ── 2. BACK LAYER: SLOW SWAYING SECONDARY WAVE (Hero Animation) ── */}
        <g className="animate-hero-wave-slow">
          <path d="M-40,68 C220,25 480,95 760,70 C1020,45 1190,8 1480,36 L1480,175 L-40,175 Z" fill="url(#footerWaveBack)" opacity="0.85" />
          <path d="M-40,68 ... 1480,36" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="2" filter="url(#waveGlow)" />
        </g>

        {/* ── 3. FRONT LAYER: SWAYING MAIN HILL CONTOUR (Hero Animation) ── */}
        <g className="animate-hero-wave">
          <path d="M-40,42 C60,32 ... 1480,42 L1480,175 L-40,175 Z" fill="url(#footerWaveFill)" />
          <path d="M-40,42 ... 1480,42" stroke="url(#footerWaveStroke)" strokeWidth="3.2" strokeLinecap="round" filter="url(#waveGlow)" />
        </g>

        {/* ── 4. TWO SPRINTING RUNNER SILHOUETTES AT CREST ── */}
        <g id="runners-silhouette">
          <g transform="translate(1185, -2) scale(0.66)" className="animate-pulse" style={{ animationDuration: '4s' }}>
            ...
          </g>
          <g transform="translate(1230, -7) scale(0.70)" className="animate-pulse" style={{ animationDuration: '3.5s' }}>
            ...
          </g>
        </g>
      </svg>
    </div>
  );
}
```

---

### App.jsx Container Seam Fix

#### Before
```jsx
<div className="relative z-10 bg-[#FFFCEB] shadow-2xl rounded-b-3xl">
  ...
  <TermsAndConditions />
</div>
<Footer />
```

#### After
```jsx
<div className="relative z-10 bg-[#FFFCEB]">
  ...
  <TermsAndConditions />
</div>
<Footer />
```
*(Removed `shadow-2xl rounded-b-3xl` so the page content flows straight into the footer's top wave).*

---

### BottomBuildingAndDunes Wave Animations

#### After
```jsx
{/* Layer 1: Back Dune Wave (Slow Sway) */}
<g className="animate-hero-wave-slow">
  <path d="M-40,225 ... 1480,185" stroke="url(#duneGoldBack)" strokeWidth="2" opacity="0.8" />
</g>

{/* Layer 2: Main Foreground Golden Glowing Curve (Hero Wave Sway) */}
<g className="animate-hero-wave">
  <path d="M-40,245 ... 1480,210" stroke="url(#duneGoldFront)" strokeWidth="3.2" filter="url(#bottomDuneGlow)" />
</g>
```

---

## 4. Hotfix: Vite Transform Syntax Error

- **Issue:** Line 289 of `Footer.jsx` had a stray quotation mark in JSX attribute: `<rect x={x} y={118" ... />`, causing Vite's oxc parser to fail with `[PARSE_ERROR] Expected '}' but found 'string'`.
- **Fix:** Corrected to `<rect x={x} y={118} ... />`.
- **Status:** Resolved cleanly; HMR compiles without errors.

