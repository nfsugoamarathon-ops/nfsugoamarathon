# Dedicated PwD Registration Form Link - Before vs. After

## Overview

Following the user's requirement:
> "pwd form link is different else remain same pwd form link : https://forms.gle/K4c6jexzm47kxjT3A"

The application has been updated so that:
1. **Persons with Disabilities (PwD) Category**: Points specifically and exclusively to the dedicated Google Form: **`https://forms.gle/K4c6jexzm47kxjT3A`**.
2. **General Categories (3 KM Fun Run, 6 KM Challenge Run, 10 KM Elite Run)**: Continue pointing to the official general registration Google Form: **`https://forms.gle/mJH5q4Rnm3N2k8Uv5`**.
3. **Helper Functions & Event FAQs**: Updated to cleanly route PwD participants to the accessible form while keeping general CTAs pointing to the main registration form.

---

## Detailed Before vs. After Code Comparison

### 1. Event Data Configuration (`frontend/src/data/eventData.js`)

#### Before:
Only a single registration URL was defined:
```javascript
export const EVENT = {
  // ...
  googleFormUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  // ...
};
```
And `CATEGORIES` had no individual `formUrl` attributes.

#### After:
Added `pwdGoogleFormUrl` and per-category `formUrl` mapping:
```javascript
export const EVENT = {
  // ...
  // Official Google Form registration URL
  googleFormUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  // Dedicated Google Form registration URL for Persons with Disabilities (PwD)
  pwdGoogleFormUrl: 'https://forms.gle/K4c6jexzm47kxjT3A',
  // ...
};

export const CATEGORIES = [
  {
    id: '3k',
    label: '3 KM',
    // ...
    formUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  },
  {
    id: '6k',
    label: '6 KM',
    // ...
    formUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  },
  {
    id: '10k',
    label: '10 KM',
    // ...
    formUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  },
  {
    id: 'pwd',
    label: '3 KM',
    distance: '3 km',
    name: 'Inclusive Run',
    color: 'emerald',
    flagOff: '6:50 AM',
    eligibility: 'PwD',
    ageGroups: ['Open to all PwD'],
    inclusions: ['Finisher medal', 'Participation e-certificate', 'T-shirt', 'Volunteer assistance', 'Water & refreshments'],
    fee: 'FREE',
    cutoff: '2 hours',
    description: 'Dedicated inclusive race for Persons with Disabilities with volunteer support.',
    formUrl: 'https://forms.gle/K4c6jexzm47kxjT3A',
  },
];
```

#### Updated `openRegistration` Function:
```javascript
/**
 * Opens the Google Form registration link when configured, or scrolls to
 * `#contact` so runners can reach organizers while the link is finalized.
 * Accepts an optional category id ('pwd', '3k', etc.) or explicit URL.
 */
export function openRegistration(e, categoryOrUrl) {
  let targetUrl = EVENT.googleFormUrl;
  if (typeof categoryOrUrl === 'string') {
    if (categoryOrUrl.startsWith('http')) {
      targetUrl = categoryOrUrl;
    } else if (categoryOrUrl === 'pwd') {
      targetUrl = EVENT.pwdGoogleFormUrl || EVENT.googleFormUrl;
    } else {
      const cat = CATEGORIES.find((c) => c.id === categoryOrUrl);
      if (cat?.formUrl) {
        targetUrl = cat.formUrl;
      }
    }
  }

  if (targetUrl) {
    if (e?.currentTarget?.tagName === 'A') {
      return;
    }
    if (e?.preventDefault) e.preventDefault();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  if (e?.preventDefault) e.preventDefault();
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}
```

---

### 2. Category Card CTA Integration (`frontend/src/components/Categories.jsx`)

#### Before:
All cards opened `EVENT.googleFormUrl` without distinguishing category type:
```jsx
<a
  href={EVENT.googleFormUrl || '#contact'}
  target={EVENT.googleFormUrl ? '_blank' : undefined}
  rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
  onClick={(e) => {
    e.stopPropagation();
    openRegistration(e);
  }}
>
```

#### After:
The CTA dynamically detects `cat.formUrl` and category ID:
```jsx
<a
  href={cat.formUrl || (cat.id === 'pwd' ? EVENT.pwdGoogleFormUrl : EVENT.googleFormUrl) || '#contact'}
  target={(cat.formUrl || EVENT.googleFormUrl) ? '_blank' : undefined}
  rel={(cat.formUrl || EVENT.googleFormUrl) ? 'noopener noreferrer' : undefined}
  className={`mt-auto w-full flex items-center justify-center gap-1.5 font-semibold py-2.5 sm:py-3 rounded-xl transition-all text-xs sm:text-sm ${c.btn} focus-visible:outline-2 focus-visible:outline-offset-2`}
  onClick={(e) => {
    e.stopPropagation();
    openRegistration(e, cat.id);
  }}
  aria-label={`Register for ${cat.label} ${cat.name}`}
>
  <span>{cat.id === 'pwd' ? 'Register for PwD' : `Register for ${cat.label}`}</span>
  <ChevronRight size={14} />
</a>
```

---

### 3. FAQ Guidance Updated (`frontend/src/data/eventData.js`)

Updated the FAQ entries under Registration to explicitly inform participants about both distinct links:
- Standard registration: `https://forms.gle/mJH5q4Rnm3N2k8Uv5`
- Dedicated PwD registration: `https://forms.gle/K4c6jexzm47kxjT3A`

---

## Verification & Build Results

1. **Production Build**:
   ```bash
   npm --prefix frontend run build
   ```
   - Compiled with 0 errors.

2. **Linter Check**:
   ```bash
   npm --prefix frontend run lint
   ```
   - 0 errors across all files.
