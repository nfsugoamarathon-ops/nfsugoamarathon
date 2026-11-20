# Dignitaries Marquee & Public Assets Cleanup — Change Log

**Date:** 2026-11-20  
**Affected Files:**
- `frontend/src/index.css`
- `frontend/src/components/ProminentParticipants.jsx`
- `frontend/src/pages/ProminentParticipants.jsx`
- `frontend/public/` (asset cleanup)

---

## 1. Marquee Scrolling & Full Center Alignment for Dignitary Cards

### Root Problem
Previously, dignitary cards were displayed in a rigid 4-column CSS grid (`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4`). When 7 dignitaries were present:
- Row 1 rendered 4 cards.
- Row 2 rendered 3 cards aligned strictly to the left, leaving an empty 4th column slot on the right, which looked uncentered and visually unbalanced.

### Solution Implemented
1. **Marquee Carousel on Home Page (`ProminentParticipants.jsx`)**:
   - Added `@keyframes marquee-cards` and `.animate-marquee-cards` in `frontend/src/index.css` for a smooth, continuous horizontal marquee that loops infinitely.
   - Pauses seamlessly on hover (`hover:[animation-play-state:paused]`) so users can comfortably read details.
   - Added subtle left and right gradient fade masks (`from-[#FFFCEB] to-transparent`) for an elegant edge falloff.
2. **Dynamic Center Alignment for 3 or Fewer Cards**:
   - When 3 or fewer dignitaries exist, it automatically switches to a centered flex row (`flex flex-wrap justify-center max-w-5xl mx-auto`).
3. **Centered Alignment on Full Page View (`pages/ProminentParticipants.jsx`)**:
   - Converted the grid into a centered flex layout (`flex flex-wrap justify-center gap-5 lg:gap-6`).
   - Any second row (or a set of 3 cards) is now centered in the container instead of skewed to the left.

---

### Before vs. After: `frontend/src/index.css`

#### Before:
```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 22s linear infinite;
}
```

#### After:
```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 22s linear infinite;
}

@keyframes marquee-cards {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee-cards {
  display: flex;
  width: max-content;
  animation: marquee-cards 32s linear infinite;
}

.animate-marquee-cards:hover {
  animation-play-state: paused;
}
```

---

### Before vs. After: `frontend/src/components/ProminentParticipants.jsx`

#### Before:
```jsx
{/* ── Compact 4-column cards — image only, no bottom section ── */}
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
  {PROMINENT_PARTICIPANTS.map((person) => (
    <div
      key={person.id}
      className="group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(7,23,48,0.22)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(7,23,48,0.38)]"
    >
      ...
    </div>
  ))}
</div>
```

#### After:
```jsx
{/* ── Cards Display: Marquee Carousel (or Center-aligned if <= 3 cards) ── */}
{isFew ? (
  <div className="flex flex-wrap justify-center gap-5 lg:gap-6 max-w-5xl mx-auto">
    {PROMINENT_PARTICIPANTS.map((person) => (
      <div
        key={person.id}
        className="w-[240px] sm:w-[260px] group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(7,23,48,0.22)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(7,23,48,0.38)] shrink-0"
      >
        ...
      </div>
    ))}
  </div>
) : (
  <div className="relative w-full overflow-hidden py-3">
    {/* Left & Right gradient fade masks */}
    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#FFFCEB] to-transparent z-20" />
    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#FFFCEB] to-transparent z-20" />

    {/* Seamless Infinite Marquee Track */}
    <div className="flex animate-marquee-cards hover:[animation-play-state:paused] gap-5 items-stretch py-2 w-max">
      {[...PROMINENT_PARTICIPANTS, ...PROMINENT_PARTICIPANTS].map((person, index) => (
        <div
          key={`${person.id}-${index}`}
          className="w-[240px] sm:w-[260px] group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(7,23,48,0.22)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(7,23,48,0.38)] shrink-0"
        >
          ...
        </div>
      ))}
    </div>
  </div>
)}
```

---

### Before vs. After: `frontend/src/pages/ProminentParticipants.jsx`

#### Before:
```jsx
<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
  {filteredParticipants.map((person, idx) => (
    <article
      key={person.id}
      className="group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
    >
      ...
    </article>
  ))}
</div>
```

#### After:
```jsx
<div className="flex flex-wrap justify-center gap-5 lg:gap-6">
  {filteredParticipants.map((person, idx) => (
    <article
      key={person.id}
      className="w-[calc(50%-10px)] sm:w-[240px] lg:w-[260px] group relative bg-[#071730] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.55)] shrink-0"
    >
      ...
    </article>
  ))}
</div>
```

---

## 2. Public Assets Cleanup

Removed 15 unused or duplicate assets from `frontend/public`, reclaiming ~2.8 MB of disk space:

| File Removed | Reason |
|---|---|
| `public/favicon.svg` | Default Vite template icon; app uses `/marathon-logo.png` |
| `public/icons.svg` | Default Vite icon file; unused |
| `public/hero-bg.jpg` | Replaced by optimized `hero-bg1.jpg` |
| `public/nfsu-light-logo.png` | Unused duplicate logo |
| `public/nfsu-logo.png` | Unused duplicate logo; app uses `nfsu-crest.png` |
| `public/ppd/CD.jpg` | Raw photo of Campus Director; replaced by `naveen_chaudhary.jpg` |
| `public/ppd/dean_professor_goa_campus.jpeg` | Raw photo of Dean Chouhan; replaced by `lokesh_chouhan.jpg` |
| `public/ppd/dharma_gaonkar.jpg` | Unused dignitary image |
| `public/ppd/dr_ajay_gaude.jpg` | 630 KB duplicate photo; replaced by `ajay_gaude.jpg` (96 KB) |
| `public/ppd/Gaurav_Desai.jpg` | Duplicate photo; replaced by `dr_gaurav_desai.jpg` |
| `public/ppd/vc.jpg` | Duplicate photo of VC Junare; replaced by `so_junare.jpg` |
| `public/sponsors/docelar_infra.jpg` | Unused sponsor asset |
| `public/sponsors/MG Hostel.png` | Duplicate with spaces; replaced by `mg_hostel.jpg` |
| `public/sponsors/saad-infrastructure-logo.pdf` | Source PDF converted to `.jpg` format as requested |
| `public/sponsors/SMDCT.jpg` | Duplicate image; replaced by `madhavrao_dhavalikar_trust.jpg` |

---

## Verification
- Run `npm run build`: **passed cleanly with zero errors** (2081 modules transformed, 5.02s).
