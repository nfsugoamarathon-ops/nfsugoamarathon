# Prominent Participants & Dignitaries - Before vs. After (Update 2)

**Date:** 2026-11-19  
**Task:**
1. Remove running category displays (e.g. "10 KM Elite", "6 KM Challenge", "Registered Competitor") from the Dignitaries / Prominent Participants feature.
2. Replace sample entry with **Dr. Gaurav Desai**, Ayurvedic Doctor (BAMS, MD) affiliated with the International Institute of Ayurveda (`https://iiayurveda.com/about`).
3. Integrate the new photo of Dr. Gaurav Desai (`/ppd/dr_gaurav_desai.jpg`).

---

## 1. Summary of Changes

| Area | Before | After |
|---|---|---|
| **Dignitary Profile 2** | `Shri. Raghu Nagraj` (sports patron placeholder) | **`Dr. Gaurav Desai`**, Ayurvedic Doctor, BAMS, MD (Ayurveda), Senior Faculty & Consultant affiliated with the International Institute of Ayurveda (`iiayurveda.com`). |
| **Dignitary Image 2** | `/ppd/Raghunagraj.jpg` | `/ppd/dr_gaurav_desai.jpg` (uploaded portrait of Dr. Gaurav Desai). |
| **Institution Link** | None | Added official link to `https://iiayurveda.com/about`. |
| **Running Category Fields** | Included `category: '10 KM Elite Run'`, `category: '6 KM Challenge Run'`, runner badges, distance filter pills | **Removed all running category labels and distance filters** from dignitaries. Replaced with dignitary honor badges (e.g., `Distinguished Dignitary`, `Prominent Dignitary`) and medical/academic credentials (`BAMS, MD (Ayurveda)`). |
| **Component (`ProminentParticipants.jsx`)** | Filtered by distance (`activeCategory === '10k' / '6k'`) and displayed category pills | Displays clean dignitary roster without distance tags; highlights credentials, designation, organization, and institution links. |
| **Page (`pages/ProminentParticipants.jsx`)** | Filter buttons for `10 KM Elite` and `6 KM Challenge` | Streamlined search-based roster for all honoured guests and dignitaries without distance categorization. |

---

## 2. Code Comparison: Before vs. After

### A. Data Layer (`frontend/src/data/eventData.js`)

#### Before
```javascript
export const PROMINENT_PARTICIPANTS = [
  {
    id: 'naveen-kumar',
    name: 'Shri. Naveen Kumar',
    honorific: 'Shri.',
    designation: 'Managing Director',
    organization: 'NDDB (National Dairy Development Board)',
    role: 'Member Secretary',
    category: '10 KM Elite Run',
    badge: 'Dignitary Runner',
    image: '/ppd/naveen_kumar_md.jpg',
    description: '...',
    quote: '...',
    highlights: ['Managing Director, NDDB', 'Member Secretary', 'Patron of Public Health & Athletics'],
  },
  {
    id: 'raghu-nagraj',
    name: 'Shri. Raghu Nagraj',
    honorific: 'Shri.',
    designation: 'Distinguished Participant & Sports Patron',
    organization: 'Goa Sports & Athletics Community',
    role: 'Prominent Runner',
    category: '6 KM Challenge Run',
    badge: 'Prominent Runner',
    image: '/ppd/Raghunagraj.jpg',
    description: '...',
    quote: '...',
    highlights: ['Sports Patron', '6 KM Challenge Runner', 'Community Fitness Champion'],
  },
];
```

#### After
```javascript
export const PROMINENT_PARTICIPANTS = [
  {
    id: 'naveen-kumar',
    name: 'Shri. Naveen Kumar',
    honorific: 'Shri.',
    designation: 'Managing Director',
    organization: 'NDDB (National Dairy Development Board)',
    role: 'Member Secretary',
    badge: 'Distinguished Dignitary',
    image: '/ppd/naveen_kumar_md.jpg',
    description:
      'Managing Director at NDDB and Member Secretary. A visionary administrator and public leadership stalwart supporting Adamya Dhāvanam 2026 to inspire resilience, youth fitness, and community wellness.',
    quote:
      'Endurance in sports mirrors leadership in public service-perseverance, discipline, and the determination to cross every milestone.',
    highlights: ['Managing Director, NDDB', 'Member Secretary', 'Patron of Public Health & Athletics'],
  },
  {
    id: 'gaurav-desai',
    name: 'Dr. Gaurav Desai',
    honorific: 'Dr.',
    credentials: 'BAMS, MD (Ayurveda)',
    designation: 'Ayurvedic Doctor & Consultant',
    organization: 'International Institute of Ayurveda (IIA)',
    website: 'https://iiayurveda.com/about',
    role: 'Senior Faculty & Health Patron',
    badge: 'Prominent Dignitary',
    image: '/ppd/dr_gaurav_desai.jpg',
    description:
      'Renowned Ayurvedic Doctor (BAMS, MD), clinical practitioner, and senior faculty affiliated with the International Institute of Ayurveda (iiayurveda.com) and Gomantak Ayurveda Hospital. A leading voice in holistic wellness, preventive healthcare, and natural endurance.',
    quote:
      'True endurance begins from within-harmonizing body, mind, and breath through the timeless principles of Ayurveda.',
    highlights: ['Ayurvedic Doctor (BAMS, MD)', 'International Institute of Ayurveda', 'Holistic Health & Wellness Expert'],
  },
];
```

---

### B. Category Filters & Badges Removal

#### Before (`components/ProminentParticipants.jsx`)
```jsx
// Distance Category Badge on photo
<span className="inline-flex items-center gap-1 bg-[#1749D1]/90 ...">
  <span>{person.category}</span>
</span>
```

#### After (`components/ProminentParticipants.jsx`)
```jsx
// Dignitary Badge & Credentials (no distance category)
<span className="inline-flex items-center gap-1.5 bg-[#FFC36A] text-[#071730] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
  <Award size={13} className="shrink-0" />
  <span>{person.badge || 'Distinguished Dignitary'}</span>
</span>
{person.credentials && (
  <span className="inline-flex items-center gap-1 bg-[#1749D1]/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full shadow-sm w-fit">
    <span>{person.credentials}</span>
  </span>
)}
```

---

## 3. Verification & Compliance
- Verified `npx oxlint src` with **0 errors**.
- Image copied to `frontend/public/ppd/dr_gaurav_desai.jpg`.
- Git commit rule preserved (no automatic git commits).
