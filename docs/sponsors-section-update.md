# Sponsors Section Update — Change Log

**Date:** 2026-11-20  
**File changed:** `frontend/src/components/Sponsors.jsx`  
**Assets added:** `frontend/public/sponsors/saad-infrastructure-logo.jpg` (converted from PDF)

---

## Summary of Changes

The Sponsors section was previously showing a placeholder "Coming soon" badge with no actual sponsor data. It has now been updated to display real sponsors, categorised by tier.

---

## Before

```jsx
// Sponsors.jsx (before)

// All sponsor slots were commented out:
{/*
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 sm:mb-8">
    {['Title Sponsor', 'Gold Partner', ...].map(...)}
  </div>
*/}

// Only a "Coming soon" badge and a "Become a sponsor" CTA were visible.
<div className="flex justify-center mb-6">
  <div className="inline-flex items-center gap-2 bg-[#FFF7E6] ...">
    <span className="w-2 h-2 rounded-full bg-[#e8e337] animate-pulse" />
    Coming soon
  </div>
</div>
```

---

## After

### 1. Sponsor data arrays added at the top of the file

```js
const PLATINUM_SPONSORS = [
  { id: 'saad-infrastructure',   name: 'Saad Infrastructure',                  logo: '/sponsors/saad-infrastructure-logo.jpg', rank: 1 },
  { id: 'ss-total-construction', name: 'SS Total Construction India Pvt. Ltd.', logo: '/sponsors/ss_total_construction.png',    rank: 2 },
];

const GOLD_SPONSORS = [
  { id: 'treehouse', name: 'Treehouse Hotels, Resorts, Villas &amp; Apartments', logo: '/sponsors/treehouse.jpg', rank: 1 },
];

const IN_KIND_SPONSORS = [
  { id: 'goa-dairy', name: 'Goa Dairy', contribution: 'Flavoured Milk', logo: '/sponsors/goa_dairy.png' },
];
```

### 2. Three rendered tiers replacing the placeholder

| Tier | Sponsors |
|------|----------|
| 🏅 Platinum (rank 1) | Saad Infrastructure |
| 🏅 Platinum (rank 2) | SS Total Construction India Pvt. Ltd. |
| 🥇 Gold (rank 1) | Treehouse Hotels, Resorts, Villas & Apartments |
| 🤝 In-Kind | Goa Dairy — Flavoured Milk |

- "Coming soon" badge **removed**.
- Intro paragraph updated from *"Sponsors will be announced here"* to *"We are grateful to our sponsors…"*
- "Become a sponsor →" CTA and the NFSU organiser lockup at the bottom are **preserved unchanged**.

---

## Asset: PDF → JPG Conversion

| Item | Detail |
|------|--------|
| Source file | `frontend/public/sponsors/saad-infrastructure-logo.pdf` |
| Output file | `frontend/public/sponsors/saad-infrastructure-logo.jpg` |
| Tool used | PyMuPDF (`pymupdf`) — rendered at 3× zoom (1786 × 888 px) |
| Original PDF kept | ✅ yes (not deleted) |
