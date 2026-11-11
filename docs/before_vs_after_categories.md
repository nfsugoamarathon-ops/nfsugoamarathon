# Categories ("Choose your race") Section — GSAP Scroll Animations

## Summary

Added GSAP `ScrollTrigger` animations and container alignment to [`frontend/src/components/Categories.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Categories.jsx) for the **"Choose your race"** section while keeping all category selection, accessibility, and registration routing logic intact.

---

## Before vs. After Code Changes

### 1. Static Section → GSAP ScrollTrigger Choreography

#### Before:
- Static render (`useState` only) with no scroll entrance, no track progress indicator, and narrower `max-w-6xl` wrapper.

#### After:
- **Header Stagger (`.categories-header-item`)**: Eyebrow (`Choose your race`), serif heading (`Find your distance.`), and subtitle glide up smoothly (`y: 24 -> 0`, `opacity: 0 -> 1`, `stagger: 0.08`, `power3.out`) on scroll (`start: "top 85%"`).
- **Scroll-Scrubbed Tri-Color Track Line (`trackLineRef`)**: A `2px` divider above the race cards sweeps across from left to right (`scaleX: 0 -> 1`, `from-[#FFC36A] via-[#1749D1] to-[#9B59C8]`) synced directly to scroll (`scrub: 0.6`, `start: "top 92%"`, `end: "top 50%"`).
- **Staggered Race Card Reveal (`.category-card`)**: All three cards (`3 KM`, `6 KM`, `10 KM`) rise in sequentially (`y: 40 -> 0`, `scale: 0.95 -> 1`, `opacity: 0 -> 1`, `stagger: 0.12`, `power3.out`) with `clearProps: "transform"` and subtle hover lift (`hover:-translate-y-1`).
- **Elastic Badge Pop (`.category-badge`)**: Distance pill badges pop in (`scale: 0.7 -> 1`, `back.out(1.7)`, `stagger: 0.12`).
- **Inclusions Micro-Stagger (`.category-inclusion`)**: Included perks list items slide in cleanly (`x: -10 -> 0`, `stagger: 0.03`).
- **Footer Note Reveal (`.categories-note`)**: Registration fee/ID reminder fades up (`y: 16 -> 0`) on scroll.
- **Reduced Motion & Alignment**: Respects `prefers-reduced-motion: reduce`, cleans up via `gsap.context().revert()`, and aligns container width to `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12` matching Hero, EventFacts, and About.

---

## Verification

- `npm run build` executed inside `frontend/`:
  - `✓ 2074 modules transformed.`
  - `dist/index.html 1.08 kB │ gzip: 0.62 kB`
  - `dist/assets/index-B02Cgub6.css 77.31 kB │ gzip: 13.01 kB`
  - `dist/assets/index-BivqyTtb.js 535.35 kB │ gzip: 166.31 kB`
  - `✓ built in 651ms` (0 errors)

