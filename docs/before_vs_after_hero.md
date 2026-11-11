# Hero Section — Coastal Waves Effect & Larger Logo-Aligned Countdown

## Summary

Updated [`frontend/src/components/Hero.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Hero.jsx) and [`frontend/src/index.css`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/index.css) to add the glowing layered coastal wave silhouette along the bottom edge, increase the countdown size and presence, and align the countdown center directly beneath the marathon logo with `"Time to Flag-off"` centered.

---

## Before vs. After Code Changes

### 1. Glowing Layered Coastal Waves (`HeroWaves`)

#### Before:
- Bottom of the hero only used a flat vertical fade gradient (`from-[#0a1020] to-transparent`), with no wave contour or glowing coastal crest.

#### After:
- Added [`HeroWaves`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Hero.jsx#L39-L114) (`z-[6]`) spanning the bottom `190px–260px` of the Hero section:
  - **Layer 1 (Back Sweeping Wave)**: Translucent cyan gradient ribbon (`#1d9bf0` / `#38bdf8`) with subtle animated drift (`animate-hero-wave-slow`) and glowing upper rim.
  - **Layer 2 (Foreground Ocean Wave)**: Deep navy gradient fill (`#071730` → `#081428` → `#0b284d`) with a luminous cyan crest stroke (`url(#heroWaveStroke)` + SVG `feGaussianBlur` glow filter) that dips near center and sweeps upward on the right to frame the countdown timer.
  - **Inner Reflection Arc**: Subtle secondary hairline stroke (`#7dd3fc`, 16% opacity) for multi-layered depth.

---

### 2. Larger Countdown Cards & Integrated Labels (`CountdownCard`)

#### Before:
```jsx
function CountdownCard({ value, label }) {
  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.14] rounded-lg sm:rounded-xl w-[50px] h-[56px] sm:w-[54px] sm:h-[62px] xl:w-[56px] xl:h-[64px] flex items-center justify-center ...">
        <span className="font-sans text-xl sm:text-2xl font-bold text-white tabular-nums leading-none">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/45 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] mt-1.5 font-semibold">
        {label}
      </span>
    </div>
  );
}
```

#### After:
```jsx
function CountdownCard({ value, label }) {
  return (
    <div className="bg-[#0b182e]/75 backdrop-blur-xl border border-cyan-300/20 rounded-xl sm:rounded-2xl w-[56px] h-[68px] sm:w-[64px] sm:h-[78px] lg:w-[66px] lg:h-[82px] xl:w-[74px] xl:h-[90px] flex flex-col items-center justify-center shrink-0 shadow-[0_12px_36px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-300 hover:scale-[1.03]">
      <span className="font-sans text-2xl sm:text-3xl xl:text-[2.15rem] font-extrabold text-white tabular-nums leading-none tracking-tight">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-white/55 text-[8px] sm:text-[9px] xl:text-[10px] uppercase tracking-[0.2em] mt-1.5 font-semibold leading-none">
        {label}
      </span>
    </div>
  );
}
```
- **Why**:
  - Increased card dimensions up to `74px × 90px` (`xl`) and digit typography up to `2.15rem` `font-extrabold` for strong visual legibility inside the wave crest.
  - Placed `DAYS`, `HOURS`, `MINS`, `SECS` inside each frosted cyan-tinted glass card, matching the reference graphic and keeping the overall height comfortably inside `100vh`.

---

### 3. Logo Alignment & Centered `"Time to Flag-off"` Label

#### Before:
- Countdown container had `items-end`, which pushed `"Time to Flag-off"` and the countdown cards flush-right rather than centered with the logo above.

#### After:
- Countdown wrapper uses `flex flex-col items-center lg:w-52 xl:w-64` (matching the `w-52 xl:w-64` emblem width directly above it) and `w-full text-center` on `"Time to Flag-off"`, centering both the heading and the 4 countdown cards cleanly beneath the marathon logo.

---

### 4. CSS Keyframes Added (`frontend/src/index.css`)

- Added `@keyframes hero-wave-sway` and `@keyframes hero-wave-glow` with utility classes `.animate-hero-wave`, `.animate-hero-wave-slow`, and `.animate-hero-wave-glow`.

---

## Verification

- `npm run build` executed inside `frontend/`:
  - `✓ 2074 modules transformed.`
  - `dist/index.html 1.08 kB │ gzip: 0.62 kB`
  - `dist/assets/index-DUEimGx_.css 68.78 kB │ gzip: 11.89 kB`
  - `dist/assets/index-BhKY4mbn.js 528.04 kB │ gzip: 164.29 kB`
  - `✓ built in 609ms` (0 errors)
