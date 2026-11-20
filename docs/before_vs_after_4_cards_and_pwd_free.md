# 4 Cards Single Row Layout & PwD Free Category - Before vs. After

## Overview

This document provides a comprehensive summary of the changes implemented based on the user's latest directives:
1. **4 Cards in Single Row** in the *"Find your distance"* section (`#categories`) on desktop (`lg:grid-cols-4`).
2. **3 KM Fun Run Price**: Set to **₹400** (reduced from ₹750).
3. **PwD Inclusive Run Category**: Added as a first-class 4th category card alongside 3 KM, 6 KM, and 10 KM, with fee explicitly set to **FREE** (no price).
4. **Clean Layout**: Removed any redundant standalone accordion / large section below the cards.
5. **Dignitary Vertical Card & Minimalist Copy**: Redesigned Dr. Gaurav Desai's dignitary showcase card to a vertical layout with enlarged hero photography, punchy 1-sentence bio, tag pills, and removed all external website links (`iiayurveda.com`).

---

## Detailed Before vs. After Code Comparison

### 1. Categories Grid & PwD Integration (`frontend/src/components/Categories.jsx`)

#### Before:
- Grid was 3 columns on desktop (`grid-cols-1 md:grid-cols-3`).
- 3 KM card had an internal banner or a separate large PwD accordion section below.
- PwD was not represented as an equal card in the main category grid.

#### After:
- Grid updated to **4 columns in a single row on desktop** (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 items-stretch`).
- Added `emerald` theme to `COLOR_MAP` (`bg-[#F0FDF4]`, `border-[#10B981]`, `badge: 'bg-[#10B981] text-white'`).
- Distance badge dynamically renders `3 KM · PwD` for the PwD category, and `cat.label` for others.
- Fee field displays **`FREE`** in bold emerald (`text-emerald-700 font-extrabold text-sm xl:text-base uppercase tracking-wider`).
- CTA button displays `Register for PwD` for the PwD card.
- Track gradient above the cards updated to 4 stops: `from-[#e8e337] via-[#1749D1] via-[#9B59C8] to-[#10B981]`.
- Subtitle updated to: *"Four categories, one race day. Select the distance that matches your ambition then register."*

```jsx
{/* Category cards (4 cards in single row on desktop) */}
<div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 items-stretch">
  {CATEGORIES.map((cat) => {
    const c = COLOR_MAP[cat.color];
    const isSelected = selected === cat.id;
    return (
      <div key={cat.id} className="category-card h-full">
        <div
          className={`relative h-full rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col ${c.bg} ${
            isSelected
              ? `${c.border} ring-2 ${c.ring} ring-offset-2 shadow-xl`
              : 'border-[#DADBCF] hover:border-current hover:shadow-md'
          }`}
          onClick={() => setSelected(cat.id)}
          tabIndex={0}
          role="radio"
          aria-checked={isSelected}
          aria-label={`${cat.label} ${cat.name}`}
        >
          {isSelected && (
            <div className={`absolute top-4 right-4 w-6 h-6 rounded-full ${c.badge} flex items-center justify-center`}>
              <Check size={13} />
            </div>
          )}

          <div className="p-5 xl:p-6 flex-1 flex flex-col">
            <span className={`category-badge self-start inline-block text-xs font-bold px-3 py-1 rounded-full mb-3.5 ${c.badge}`}>
              {cat.id === 'pwd' ? '3 KM · PwD' : cat.label}
            </span>

            <h3 className="text-[#191A17] font-bold text-xl xl:text-2xl mb-1">{cat.name}</h3>
            <p className="text-[#686D66] text-xs xl:text-sm mb-4 leading-relaxed min-h-[40px]">{cat.description}</p>

            <dl className="space-y-1.5 mb-5 text-xs xl:text-sm">
              <div className="flex justify-between text-xs xl:text-sm">
                <dt className="text-[#686D66]">Eligibility</dt>
                <dd className="text-[#191A17] font-medium text-right truncate max-w-[150px]">{cat.eligibility}</dd>
              </div>
              <div className="flex justify-between text-xs xl:text-sm">
                <dt className="text-[#686D66]">Flag-off</dt>
                <dd className="text-[#191A17] font-medium">{cat.flagOff}</dd>
              </div>
              <div className="flex justify-between text-xs xl:text-sm">
                <dt className="text-[#686D66]">Cut-off</dt>
                <dd className="text-[#191A17] font-medium">{cat.cutoff}</dd>
              </div>
              <div className="flex justify-between items-center text-xs xl:text-sm">
                <dt className="text-[#686D66]">Fee</dt>
                <dd className={cat.id === 'pwd' ? 'text-emerald-700 font-extrabold text-sm xl:text-base uppercase tracking-wider' : 'text-[#191A17] font-bold text-sm xl:text-base'}>
                  {cat.fee}
                </dd>
              </div>
            </dl>

            <div className="border-t border-[#DADBCF] pt-3.5 mb-5">
              <p className="text-[#686D66] text-[11px] uppercase tracking-wider font-semibold mb-2.5">Included</p>
              <ul className="space-y-1">
                {cat.inclusions.map((inc) => (
                  <li key={inc} className="category-inclusion flex items-start gap-1.5 text-xs xl:text-sm text-[#191A17]">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                    <span className="leading-tight">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={EVENT.googleFormUrl || '#contact'}
              className={`mt-auto w-full flex items-center justify-center gap-1.5 font-semibold py-2.5 sm:py-3 rounded-xl transition-all text-xs sm:text-sm ${c.btn}`}
              onClick={(e) => {
                e.stopPropagation();
                openRegistration(e);
              }}
            >
              <span>{cat.id === 'pwd' ? 'Register for PwD' : `Register for ${cat.label}`}</span>
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    );
  })}
</div>
```

---

### 2. Event Data Categories & Dignitaries (`frontend/src/data/eventData.js`)

#### Before:
- `3k` fee was `₹750`.
- Only 3 categories existed in `CATEGORIES`.
- Dr. Gaurav Desai had long text, website links (`iiayurveda.com`), and quote snippets.

#### After:
- `3k` category fee set to `'₹400'`.
- Added 4th category `pwd` with `fee: 'FREE'`, `color: 'emerald'`, and volunteer inclusions.
- Dr. Gaurav Desai updated with concise bio and verified credentials:
  - BAMS, MD (Ayurveda) in Ayurvedic Toxicology (KLE's BM Kankanwadi Ayurveda University).
  - Senior Faculty at Gomantak University & Hospital.
  - Clinics in Panjim & Margao.
  - Removed website reference (`iiayurveda.com`).

```javascript
export const CATEGORIES = [
  {
    id: '3k',
    label: '3 KM',
    distance: '3 km',
    name: 'Fun Run',
    color: 'marigold',
    flagOff: '6:50 AM',
    eligibility: 'Age 60+ and under 14',
    ageGroups: ['Under 14', '60 and above'],
    inclusions: ['Finisher medal', 'Participation certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments', 'Result on website within 24h'],
    fee: '₹400',
    cutoff: '2 hours',
    description: 'A spirited short run for the youngest hearts and our senior champions.',
  },
  {
    id: '6k',
    label: '6 KM',
    distance: '6 km',
    name: 'Challenge Run',
    color: 'race-blue',
    flagOff: '6:45 AM',
    eligibility: 'Age 15–35 and 36–59',
    ageGroups: ['15–35', '36–59'],
    inclusions: ['Finisher medal', 'Participation certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments', 'Result on website within 24h'],
    fee: '₹750',
    cutoff: '2 hours',
    description: 'Push your limits on a scenic Ponda course built for driven runners.',
  },
  {
    id: '10k',
    label: '10 KM',
    distance: '10 km',
    name: 'Elite Run',
    color: 'dawn-lilac',
    flagOff: '6:30 AM',
    eligibility: 'Age 15–35 and 36–59',
    ageGroups: ['15–35', '36–59'],
    inclusions: ['Finisher medal', 'Participation certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments', 'Result on website within 24h'],
    fee: '₹750',
    cutoff: '2 hours',
    description: 'The marquee distance - a full test of endurance across the hills and avenues of Ponda, Goa.',
  },
  {
    id: 'pwd',
    label: '3 KM',
    distance: '3 km',
    name: 'Inclusive Run',
    color: 'emerald',
    flagOff: '6:50 AM',
    eligibility: 'Persons with Disabilities',
    ageGroups: ['Open to all PwD'],
    inclusions: ['Finisher medal', 'Participation certificate', 'T-shirt', 'Volunteer assistance', 'Water & refreshments', 'Result on website within 24h'],
    fee: 'FREE',
    cutoff: '2 hours',
    description: 'Dedicated inclusive race for Persons with Disabilities with volunteer support. No registration fee.',
  },
];
```

---

### 3. Vertical Dignitary Card & Enlarged Photo (`frontend/src/components/ProminentParticipants.jsx` & `frontend/src/pages/ProminentParticipants.jsx`)

#### Before:
- Wide horizontal layout with a small photo column and a text-heavy right column containing paragraphs, external URLs, and quote blocks.

#### After:
- Elegant **vertical card format** (`max-w-4xl`, 2 vertical cards side-by-side).
- Photo height enlarged to **`h-[400px] sm:h-[480px]`**, taking up majority of the visual weight.
- Dignitary name and designation anchored at the base of the photo on a dark gradient.
- Description trimmed to a single crisp sentence.
- 3 clean tag pills for specialization and affiliations.
- Completely removed external website URLs.

---

## Verification & Build Results

1. **Production Build**:
   ```bash
   npm --prefix frontend run build
   ```
   - **Result**: `✓ built in 744ms` (0 errors).

2. **Linter Check**:
   ```bash
   npm --prefix frontend run lint
   ```
   - **Result**: 0 errors across 27 files.
