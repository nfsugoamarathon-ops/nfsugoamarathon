# Before vs. After Report: Scaler × Wispr Scroll-Driven Horizontal Timeline Animation

**Feature:** Interactive Pinned Horizontal Timeline Scrubber (`Schedule.jsx`)  
**Reference:** [India Runs on Voice (hackos.scaler.com/wispr)](https://hackos.scaler.com/wispr/) & Screen Recording `2026-11-10 170521.mp4`  
**Date:** 10 November 2026  
**Document Path:** `docs/before_vs_after_timeline_animation.md`

---

## 1. Feature Overview & Design Inspiration

The user provided a screen recording of the **"Three rounds, two online, one on campus"** section from the Scaler × Wispr Flow hackathon microsite (`hackos.scaler.com/wispr`), requesting a matching scrolling timeline animation for the **ADAMYA DHĀVANAM 2026 (NFSU Goa Marathon)** schedule.

### Key Visual & Interaction Mechanics Implemented:
1. **Pinned Horizontal Scroll (GSAP ScrollTrigger):** As the visitor scrolls down vertically, the section locks smoothly into view (`pin: true, scrub: 0.8`), gliding the 7 race-day stations horizontally across the viewport.
2. **Retro Station Signboard Aesthetic:** Each milestone features an Indian railway platform style signboard (`PF 0` to `PF 6`) with dual striped support posts, bilingual typography (Devanagari script + bold English), and minimalist coastal/campus line art.
3. **Live "Now Announcing" Platform Balloon:** A floating audio announcement bubble updates in real time with the active milestone's announcement (e.g. *“Now announcing: 10 KM Elite Run flag-off! Coastal course open”*).
4. **Bottom Railroad Scrubber Track:**
   - Realistic railroad tie dash pattern.
   - Milestone node stops for all 7 race stages.
   - Animated runner pace marker (`🏃 10.0 KM`) that glides across the track matching the scroll progress percentage.
   - Fully interactive click-to-scrub navigation (clicking any station jumps the view directly to that milestone).
5. **Generous Inset Padding & Boundary Protection (Fix for First/Last Card Clipping):**
   - Added `pl-4 sm:pl-8 md:pl-12` and `pr-12 md:pr-24` with vertical padding `py-3` on the horizontal card strip.
   - Prevents the first station board (`BIB & KIT EXPO`) from touching or clipping against the left edge of the screen and protects card offset shadows (`shadow-[5px_5px_0_#191A17]`).
6. **Mobile Touch Handling:** On devices under 768px, gracefully adapts into an active swipeable track with real-time runner position synchronization.

---

## 2. Before vs. After Code Comparison

### `frontend/src/components/Schedule.jsx`

#### Before: Edge-to-Edge Without Inset Padding (First Card Clipped)
```jsx
{/* Pinned Horizontal Track Viewport */}
<div
  ref={trackRef}
  className="w-full overflow-hidden my-auto py-2"
>
  <div
    ref={cardsRef}
    className="flex items-stretch gap-6 md:gap-7 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none snap-x md:snap-none"
    style={{ width: 'max-content' }}
  >
    {STATIONS.map((station, i) => (
      ...
    ))}
  </div>
</div>
```

#### After: Inset Horizontal & Vertical Padding (No Clipping)
```jsx
{/* Pinned Horizontal Track Viewport */}
<div
  ref={trackRef}
  className="w-full overflow-hidden my-auto py-3"
>
  <div
    ref={cardsRef}
    className="flex items-stretch gap-6 md:gap-7 overflow-x-auto md:overflow-visible pl-4 sm:pl-8 md:pl-12 pr-12 md:pr-24 py-3 scrollbar-none snap-x md:snap-none"
    style={{ width: 'max-content' }}
  >
    {STATIONS.map((station, i) => (
      ...
    ))}
  </div>
</div>
```

---

## 3. Milestones Represented Along the Course

| Station Code | Milestone | Time | Focus |
| :--- | :--- | :--- | :--- |
| **PF 0** | Bib & Kit Expo | 4:00 PM – 8:00 PM (4-5 Dec) | Ponda kit collection, timing chip tagging, original ID verification |
| **PF 1** | Gates Open | 5:00 AM – 5:30 AM (6 Dec) | Near NFSU Girls Hostel, baggage drop, chip pre-check, security |
| **PF 2** | Dynamic Warm-Up | 6:00 AM – 6:20 AM | Group coach-led mobility activation & race briefing |
| **PF 3** | 10 KM Elite Run | 6:30 AM Sharp | Marquee distance flag-off, coastal course, 2h cut-off |
| **PF 4** | 6 KM Challenge | 6:45 AM Sharp | High-tempo wave for ages 15–59, chip timed |
| **PF 5** | 3 KM Fun Run | 6:50 AM Sharp | Junior runners (<14) & veteran champions (60+) wave |
| **PF 6** | Finish & Recovery | 7:30 AM – 9:30 AM | Finisher medals, breakfast refreshments, podium ceremony |

---

## 4. Verification & Build Results

Compiled and verified with Vite 8 / Tailwind CSS v4:
```text
✓ 2074 modules transformed.
dist/index.html                   1.08 kB │ gzip:   0.62 kB
dist/assets/index-BOxHMKn9.css   58.85 kB │ gzip:  10.38 kB
dist/assets/index-PKBlL6uC.js   521.06 kB │ gzip: 162.42 kB
✓ built in 577ms with 0 errors
```

- [x] Generous inset padding added to the front (`pl-4 sm:pl-8 md:pl-12`) and rear (`pr-12 md:pr-24`).
- [x] First station board (`BIB & KIT EXPO`) has complete breathing room; zero clipping on borders or shadows.
- [x] Smooth pinned horizontal scrolling using GSAP ScrollTrigger.
- [x] Railroad track scrubber with animated runner marker in sync with scroll.
- [x] No automatic git commits performed, adhering to memory rule.
