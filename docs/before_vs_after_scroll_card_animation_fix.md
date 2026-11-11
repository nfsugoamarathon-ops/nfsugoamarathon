# Before vs. After: Fix Scroll Animation Glitches & Alignment Across Animated Cards

## Root Cause
All three scroll-animated card sections (`EventFacts.jsx`, `About.jsx`, and `Categories.jsx`) had two compounding issues causing cards to stall at uneven heights, jitter, or reverse mid-scroll:

1. **CSS `transition-all duration-300` fighting GSAP `ScrollTrigger` transforms:**
   In `Categories.jsx` (`.category-card`) and `About.jsx` (`.about-pillar`), Tailwind's `transition-all duration-300` and `hover:-translate-y-1` were applied directly on the exact same DOM elements animated by GSAP (`y`, `scale`, `opacity`, and `clearProps: 'transform'`). CSS tried to interpolate every GSAP frame over `300ms` and interfered when `clearProps` removed inline `transform` values at different stagger completion times — visibly misaligning `Fun Run`, `Challenge Run`, and `Elite Run` vertically.

2. **`toggleActions: 'play none none reverse'` triggering mid-scroll reversals:**
   Because `.fact-card`, `.about-pillar`, `.category-card`, `.category-badge`, and `.category-inclusion` reversed near bottom viewport thresholds (`top 82%` – `88%`), minor upward nudges or differing thresholds caused cards to reverse unevenly or show partially faded elements.

---

## 1. Race Categories Cards — `frontend/src/components/Categories.jsx`

- **Before:**
  - `.category-card` had `transition-all duration-300 cursor-pointer hover:-translate-y-1` on the same element targeted by `gsap.fromTo('.category-card', ...)`.
  - `.category-card`, `.category-badge`, and `.category-inclusion` used `toggleActions: 'play none none reverse'` with split triggers (`top 86%` and `top 82%`).
  - `clearProps: 'transform'` left opacity un-cleared if reversed/interrupted.

- **After:**
  - Separated the GSAP animation container from the CSS hover card:
    - Outer `<div className="category-card h-full">` has zero CSS transition classes so GSAP owns entrance transforms/opacity cleanly.
    - Inner card `<div>` retains `h-full flex flex-col ... transition-all duration-300 cursor-pointer hover:-translate-y-1` (with `mt-auto` on the CTA button and `items-stretch` on the grid) so hover lift and selection states never fight GSAP and all 3 cards remain equal height and top-aligned.
  - Unified entrance ScrollTriggers (`categories-header-item`, `.category-card`, `.category-badge`, `.category-inclusion`, `.categories-note`) to `once: true` (`start: 'top 90%'` for cards/badges/inclusions) with `clearProps: 'transform,opacity'`.
  - Preserved continuous scroll-scrubbed gradient race line animation (`trackLineRef`).

---

## 2. About Section Pillar Cards — `frontend/src/components/About.jsx`

- **Before:**
  - `.about-pillar` had `transition-all duration-300 hover:-translate-y-1` directly on the GSAP-animated element.
  - `.about-text-item`, `.about-visual`, and `.about-pillar` used `toggleActions: 'play none none reverse'` with `clearProps: 'transform'`.

- **After:**
  - Wrapped each card in an outer `<div className="about-pillar h-full">` (no CSS transition classes) and kept `transition-all duration-300 hover:-translate-y-1` on the inner card wrapper inside `items-stretch` grid.
  - Switched section entrance triggers to `once: true` (`start: 'top 86%'` for header/visual and `start: 'top 90%'` for `.about-pillar`) with `clearProps: 'transform,opacity'`.
  - Preserved continuous scroll-scrubbed image parallax (`imgRef`).

---

## 3. Event Facts Cards — `frontend/src/components/EventFacts.jsx`

- **Before:**
  - `.fact-card` and `.fact-icon` staggered entrances used `toggleActions: 'play none none reverse'` at `start: 'top 88%'` with `clearProps: 'transform'`.

- **After:**
  - Switched `.fact-card` and `.fact-icon` ScrollTriggers to `once: true` at `start: 'top 92%'` with `clearProps: 'transform,opacity'` so cards play smoothly once when entering the viewport and never re-hide or desynchronize during upward scroll.
  - Preserved continuous scroll-scrubbed top accent bar (`progressLineRef`).

---

## Verification
- Ran `npm run build` in `frontend/`: `2074 modules transformed`, built cleanly in `vite build` with exit code `0`.

