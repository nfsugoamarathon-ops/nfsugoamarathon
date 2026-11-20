# 3 KM Price Update (₹400) & Compact PwD Category Card - Before vs. After

## Summary

Following the user's feedback ("dont need big card small card like this I provided you info for your knowldedge"):
1. **Clean Category Cards (3 KM, 6 KM, 10 KM)**:
   - 3 KM Fun Run price is set to **₹400** (was ₹750).
   - Removed the internal banner from inside the 3 KM card so all three category cards retain their identical height, structure, and clean typography.
2. **Compact PwD Category Card ("Small card like this")**:
   - Replaced the large multi-accordion section with a dedicated **compact card** styled identically to the category cards:
     - Badge: `3 KM` with `PwD Category` pill.
     - Title: `Inclusive Run`
     - Description: Concise summary of the 3 KM inclusive race.
     - Key details: Eligibility (Persons with Disabilities), Flag-off (6:50 AM), Cut-off (2 hours), Fee (₹400).
     - Inclusions: Finisher medal, cash prizes, volunteer/guide assistance, accessible resting/water points, dry-fit T-shirt & refreshments, results within 24h.
     - Action button: `Register for 3 KM PwD >` with link to official registration.
     - Verification note: ID and Disability / UDID Card verification reminder.

---

## Before vs. After Code Changes

### 1. Categories Component (`frontend/src/components/Categories.jsx`)

#### Before:
- 3 KM card contained an extra internal banner (`Inclusive PwD Category (₹400) View Details ↓`) that increased card height unevenly.
- Rendered a large multi-section PwD area below.

#### After:
- Restored 3 KM card to a clean layout identical to 6 KM and 10 KM, with `cat.fee` set to `₹400`.
- Renders a compact `<PwDSection />` below the category cards with a "small card like this".

---

### 2. PwD Component (`frontend/src/components/PwDSection.jsx`)

#### Before:
- Contained an 8-accordion list of full legal guidelines, multiple alert boxes, wide statistics cards, and photo/waiver sections.

#### After:
- Compact card matching the exact structure, padding (`p-7`), rounded corners (`rounded-2xl`), badge style, definition list, inclusion dots, and CTA button as the category cards.

```jsx
<div id="pwd-details" className="mt-12 sm:mt-14 pt-8 border-t border-[#DADBCF]/70 scroll-mt-20">
  <div className="max-w-2xl mb-6 sm:mb-8">
    <p className="text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-2">
      Inclusive Participation
    </p>
    <h3 className="font-serif italic text-3xl sm:text-4xl text-[#191A17] leading-tight mb-2">
      Persons with Disabilities (PwD)
    </h3>
    <p className="text-[#686D66] text-sm sm:text-base leading-relaxed">
      At Adamya Dhāvanam, determination and courage go beyond physical limitations. We warmly invite PwD participants to take part in the designated 3 KM race with dedicated volunteer assistance and accessibility arrangements.
    </p>
  </div>

  <div className="max-w-md">
    <div className="relative rounded-2xl border-2 border-[#e8e337] bg-[#FFF7E6] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col p-7">
      {/* 3 KM badge, PwD tag, Inclusive Run title, details, inclusions, CTA button */}
    </div>
  </div>
</div>
```

---

### 3. Event Data (`frontend/src/data/eventData.js`)

- `3k` category fee set to `'₹400'`.
- Clean description: `'A spirited short run for the youngest hearts and our senior champions.'`
- Eligibility: `'Age 60+ and under 14'`.

---

## Verification & Build Results

1. **Build**:
   ```bash
   npm --prefix frontend run build
   ```
   - `✓ built in 1.30s` (0 errors)
   - Bundle size reduced from 572 kB to 543 kB.

2. **Lint**:
   ```bash
   npm --prefix frontend run lint
   ```
   - 0 errors across 28 files.
