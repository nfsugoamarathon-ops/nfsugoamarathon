# Sponsors & Dignitaries Update — Change Log

**Date:** 2026-11-20

---

## 1. New Gold Sponsor — Shri. Madhavrao Dhavalikar Charitable Trust

**File changed:** `frontend/src/components/Sponsors.jsx`  
**Asset added:** `frontend/public/sponsors/madhavrao_dhavalikar_trust.jpg`

Added as 2nd Gold Sponsor in the `GOLD_SPONSORS` array:

```js
{
  id: 'madhavrao-dhavalikar-trust',
  name: 'Shri. Madhavrao Dhavalikar Charitable Trust',
  logo: '/sponsors/madhavrao_dhavalikar_trust.jpg',
  rank: 2,
}
```

---

## 2. New Dignitary — Shri. Ajay Gaude

**File changed:** `frontend/src/data/eventData.js`  
**Asset added:** `frontend/public/ppd/ajay_gaude.jpg`

Added as 3rd entry in `PROMINENT_PARTICIPANTS`:

```js
{
  id: 'ajay-gaude',
  name: 'Shri. Ajay Gaude',
  honorific: 'Shri.',
  designation: 'Director of Sports & Youth Affairs',
  organization: 'Government of Goa',
  image: '/ppd/ajay_gaude.jpg',
  description: 'Director of Sports & Youth Affairs, Government of Goa — championing grassroots fitness and youth participation across the state.',
}
```

---

## 3. Bug Fix — Dignitary Card Hover Flicker & Border Flash

**File changed:** `frontend/src/components/ProminentParticipants.jsx`

### Root Cause
`hover:-translate-y-1` moved the card upward, causing the cursor to briefly leave the element boundary and re-enter, creating a rapid hover on/off cycle (flicker). The simultaneous `border` color change on hover triggered a repaint that compounded the flicker.

### Fix (Before → After)

**Before:**
```jsx
className="... border border-white/10 ... transition-all duration-300
           hover:border-[#FFC36A]/40 ... hover:-translate-y-1"
```

**After:**
```jsx
className="... will-change-transform transform-gpu transition-shadow duration-300
           ring-1 ring-white/10 hover:ring-[#FFC36A]/40"
```

- Removed `hover:-translate-y-1` (the translate was the flicker cause)
- Replaced `border` + `hover:border` with `ring-1` + `hover:ring` — ring does not affect layout so no repaint loop
- Added `will-change-transform` and `transform-gpu` to promote the card to its own compositing layer for smooth GPU-accelerated shadow transitions
- Narrowed `transition` to `transition-shadow` only (was `transition-all`) to avoid animating border/ring and causing repaints
