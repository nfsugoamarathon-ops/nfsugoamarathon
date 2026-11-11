# EventFacts Section — Scroll Animations & Layout Polish

## Summary

Upgraded [`frontend/src/components/EventFacts.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/EventFacts.jsx) with GSAP `ScrollTrigger` animations and refined responsive grid spacing so the quick-facts strip animates smoothly into view on scroll.

---

## Before vs. After Code Changes

### 1. Static Render → GSAP ScrollTrigger Animations

#### Before:
```jsx
export default function EventFacts() {
  return (
    <section className="bg-[#FFFCEB] border-y border-[#DADBCF]" aria-label="Event facts at a glance">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#DADBCF] overflow-x-auto">
          <Fact icon={Calendar} label="Date" value="6 December 2026" />
          ...
        </div>
      </div>
    </section>
  );
}
```
- No scroll-triggered entrance animations.
- Double vertical borders (`divide-x` on grid + `border-r` inside `Fact`).
- Narrower `max-w-6xl` container with `overflow-x-auto` that left wide side margins on larger viewports.

#### After:
- **Scroll-Scrubbed Top Accent Bar**:
  - Added a `2px` top gradient line (`from-[#1749D1] via-[#FFC36A] to-[#1749D1]`) that sweeps from `scaleX: 0` to `scaleX: 1` tied directly to scroll (`scrub: 0.6`, `start: "top 95%"`, `end: "top 45%"`).
- **Staggered Fact Card Reveal**:
  - `.fact-card` items animate from `{ y: 28, opacity: 0, scale: 0.97 }` to `{ y: 0, opacity: 1, scale: 1 }` with `stagger: 0.09` (`power3.out`) and `toggleActions: "play none none reverse"` triggered at `start: "top 88%"`.
- **Elastic Icon Pop**:
  - Each icon badge (`.fact-icon`) animates from `{ scale: 0.5, rotate: -14, opacity: 0 }` to `{ scale: 1, rotate: 0, opacity: 1 }` with `back.out(1.7)` easing synced to the card stagger.
- **Reduced Motion & Cleanup**:
  - Respects `window.matchMedia('(prefers-reduced-motion: reduce)').matches` and cleans up via `gsap.context(() => ..., sectionRef).revert()`.
- **Grid & Border Polish**:
  - Widened container to `max-w-7xl mx-auto px-4 sm:px-6 lg:px-10`, removed duplicate `border-r` inside `Fact`, and added `col-span-2 md:col-span-1` on the final item so 5 items lay out cleanly on mobile 2-column grids too.
  - Added subtle hover top accent line and background tint per fact card.

---

## Verification

- `npm run build` executed inside `frontend/`:
  - `✓ 2074 modules transformed.`
  - `dist/index.html 1.08 kB │ gzip: 0.62 kB`
  - `dist/assets/index-BfnHX4ZI.css 70.43 kB │ gzip: 12.11 kB`
  - `dist/assets/index-CO12tXZ0.js 529.95 kB │ gzip: 165.23 kB`
  - `✓ built in 464ms` (0 errors)

