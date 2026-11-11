# About Section & Event Copy — Ponda, Goa Terrain & Visual Alignment

## Summary

Updated [`frontend/public/about-marathon.jpg`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/public/about-marathon.jpg) and event copy across [`About.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/About.jsx), [`Schedule.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Schedule.jsx), and [`eventData.js`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/data/eventData.js) to reflect the actual **Ponda, Goa** green-hill inland route instead of a coastal/beach setting.

---

## Before vs. After Changes

### 1. Photograph Update (`frontend/public/about-marathon.jpg`)

#### Before:
- Coastal highway photograph showing runners beside ocean waves and shoreline.

#### After:
- Replaced with a 4:3 editorial photograph of runners on a scenic winding road surrounded by lush green Western Ghats foothills, coconut palms, and warm dawn light in inland **Ponda, Goa** (matching the geography of the Ponda route map around Curti, Prabhu Nagar, Silva Nagar, Kurtarkar Nagari, and Betora).

---

### 2. Copy & Icon Corrections

#### [`frontend/src/components/About.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/About.jsx)
- Replaced `Waves` pillar icon with `Sun` and updated **"Goa Spirit"** description from *"Race at dawn where the coast comes alive with the rising sun."* → *"Race at dawn as Ponda’s lush green hills come alive with the rising sun."*
- Updated intro paragraph from *"on a coastal course"* → *"along a scenic Ponda route that begins as the sun rises over the green hills of Goa."*
- Updated micro-tag from *"Sunrise Coastal Route"* → *"Ponda Sunrise Route"* and bottom-right glass chip from *"Coastline Dawn Run"* → *"Ponda Dawn Run"*.

#### [`frontend/src/components/Schedule.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Schedule.jsx)
- Updated station `10k-elite` venue/summary/announcement from `"Coastal Course"` / `"over the coast"` → `"Ponda Course"` / `"over Ponda’s green hills"` / `"Ponda route open"`.
- Updated timeline heading from `"dawn at the coast"` → `"dawn in Ponda"`.

#### [`frontend/src/data/eventData.js`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/data/eventData.js)
- Updated `6k` description from *"coastal course"* → *"scenic Ponda course"*.
- Updated `10k` description from *"along the Goa coastline"* → *"across the hills and avenues of Ponda, Goa"*.

---

## Verification

- `npm run build` executed inside `frontend/`:
  - `✓ 2074 modules transformed.`
  - `dist/index.html 1.08 kB │ gzip: 0.62 kB`
  - `dist/assets/index-CAVVuHYC.css 76.50 kB │ gzip: 12.94 kB`
  - `dist/assets/index-DOxZq2zO.js 533.86 kB │ gzip: 166.22 kB`
  - `✓ built in 552ms` (0 errors)
