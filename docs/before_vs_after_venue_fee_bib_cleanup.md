# Website-Wide Update Summary: Fee (₹500), Venue (`NFSU Goa Campus`), Bib Pickup (`Canteen Area`), & Removal of RFID / Timing Chip

## Overview

Updated all components, data definitions, and portal pages across `frontend/src/` to reflect the finalized event logistics:
1. **Registration Fee**: Set uniformly to **`₹500`** across all categories (`3 KM`, `6 KM`, `10 KM`), category notes, and admin stats.
2. **Event Venue**: Standardized all `"NFSU Girls Hostel"` / `"Near NFSU Girls Hostel, NFSU Goa Campus"` / plain `"NFSU Goa"` venue references to **`NFSU Goa Campus`**.
3. **Bib & Kit Distribution Venue**: Changed from `"Ponda"` / `"exact venue to be announced"` to **`NFSU Goa Campus, Canteen Area`**.
4. **No RFID / Timing Chips**: Removed all mentions of `"RFID"`, `"Timing Chip"`, and `"chip-timed"` across ribbons, schedules, registration checkout, terms, and dashboards.

---

## File-by-File Before vs. After Summary

### 1. [`frontend/src/data/eventData.js`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/data/eventData.js)
| Field / Section | Before | After |
|---|---|---|
| `EVENT.organizer` | `'NFSU Goa'` | `'NFSU Goa Campus'` |
| `EVENT.venue` | `'Near NFSU Girls Hostel, NFSU Goa Campus'` | `'NFSU Goa Campus'` |
| `EVENT.bibCollection.venue` | `'Ponda — exact venue to be announced in the event group'` | `'NFSU Goa Campus, Canteen Area'` |
| `CATEGORIES` (`3k`, `6k`, `10k`) `fee` | `'To be announced'` | `'₹500'` |
| FAQ — Bib Collection venue | `'...at Ponda (exact venue to be announced in the event group)...'` | `'...at NFSU Goa Campus, Canteen Area...'` |
| FAQ — Race Day check-in rule | `'No bib means no timing or medal.'` | `'No bib means no official result or medal.'` |
| FAQ — Route start/finish | `'Near NFSU Girls Hostel, NFSU Goa Campus.'` | `'NFSU Goa Campus.'` |

---

### 2. [`frontend/src/components/Navbar.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Navbar.jsx)
- **Reporting Time Ticker**: `'5:00 – 5:30 AM · Near NFSU Girls Hostel, Ponda'` → `'5:00 – 5:30 AM · NFSU Goa Campus'`
- **Bib Distribution Ticker**: `'4 & 5 Dec, 4:00 PM – 8:00 PM at Ponda (Carry Original ID)'` → `'4 & 5 Dec, 4:00 PM – 8:00 PM at NFSU Goa Campus, Canteen Area (Carry Original ID)'`
- **Included Perks Ticker**: `'Finisher Medal, Dry-Fit T-Shirt, Timing Chip & Recovery Breakfast'` → `'Finisher Medal, Dry-Fit T-Shirt, Certificate & Recovery Breakfast'`

---

### 3. [`frontend/src/components/Hero.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Hero.jsx)
- **Top Event Badge**: `'6 December 2026 · NFSU Goa'` → `'6 December 2026 · NFSU Goa Campus'`
- **Tagline Copy**: `...at NFSU Goa,` → `...at NFSU Goa Campus,`

---

### 4. [`frontend/src/components/EventFacts.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/EventFacts.jsx)
- **Venue Fact Card**: `'NFSU Girls Hostel, Goa'` → `'NFSU Goa Campus'`

---

### 5. [`frontend/src/components/Categories.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Categories.jsx)
- **Card Fee Display**: Automatically pulls `₹500` from `CATEGORIES` in `eventData.js` for `3 KM`, `6 KM`, and `10 KM`.
- **Bottom Note**: `'Registration fees will be announced...'` → `'Registration fee is ₹500 across all categories. Age eligibility is verified at bib collection — carry a valid ID proof.'`

---

### 6. [`frontend/src/components/RegistrationForm.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/RegistrationForm.jsx)
- **Confirmation Bib Collection Box**: `'Venue: Ponda, Goa — exact venue will be notified in the runner group.'` → `'Venue: NFSU Goa Campus, Canteen Area.'`
- **Step 4 Payment Summary**: `'Timing Chip & Finisher Medal:'` → `'Race Bib, T-Shirt & Finisher Medal:'` (displays `₹500` via `selectedCategory?.fee`).

---

### 7. [`frontend/src/components/Schedule.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Schedule.jsx)
- **PF 0 (`BIB & KIT EXPO`)**:
  - `venue`: `'Ponda, Goa (Venue in runner group)'` → `'NFSU Goa Campus, Canteen Area'`
  - `summary`: Removed `'chip-timed'` → `'Official race kit pickup, race bib verification, and dry-fit t-shirt collection.'`
  - `announcement`: `'Now announcing: Bib collection counters active at NFSU Goa Campus, Canteen Area. Carry government ID + Reg ID.'`
  - `tags`: `'Timing Chip Tagged'` → `'Official Race Bib'`
- **PF 1 (`GATES OPEN`)**:
  - `venue`: `'Near NFSU Girls Hostel, Goa'` → `'NFSU Goa Campus'`
  - `announcement`: `'Reporting gates open at NFSU Goa Campus. Pin your bib visibly on your chest.'`
- **PF 4 (`6 KM CHALLENGE`)**:
  - `summary`: Removed `'with RFID chip tracking'` → `'Fast and spirited distance for competitive runners aged 15–59 along the scenic Ponda course.'`
  - `tags`: `'RFID Timing'` → `'Official Timing'`

---

### 8. [`frontend/src/components/Route.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Route.jsx)
- **Course Copy & Start/Finish Box**: Updated `'near the NFSU Girls Hostel, NFSU Goa Campus'` / `'Near NFSU Girls Hostel, NFSU Goa Campus'` → `'at NFSU Goa Campus'` / `'NFSU Goa Campus'`.

---

### 9. [`frontend/src/components/Contact.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Contact.jsx)
- **Event Details Box**: `'Venue: Near NFSU Girls Hostel, NFSU Goa Campus'` → `'Venue: NFSU Goa Campus'`

---

### 10. [`frontend/src/components/TermsAndConditions.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/TermsAndConditions.jsx)
- **Code of Conduct**: `'No bib = no timing or medal.'` → `'No bib = no official result or medal.'`

---

### 11. [`frontend/src/components/Footer.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/components/Footer.jsx)
- **Logistics Address**: `'Near NFSU Girls Hostel, NFSU Goa Campus, Ponda, Goa'` → `'NFSU Goa Campus, Ponda, Goa'`
- **Bib Distribution Card**: `'4 & 5 Dec 2026, 4:00 PM – 8:00 PM at Ponda...'` → `'4 & 5 Dec 2026, 4:00 PM – 8:00 PM at NFSU Goa Campus, Canteen Area...'`

---

### 12. [`frontend/src/pages/ParticipantDashboard.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/pages/ParticipantDashboard.jsx)
- **Digital Runner Pass (`Start Venue`)**: `'Near NFSU Girls Hostel'` → `'NFSU Goa Campus'`
- **Bib Distribution Copy**: Removed `'with timing chip'` → `'includes your official running bib, event dry-fit T-shirt...'`
- **Bib Distribution Venue**: `'Ponda, Goa / Exact spot announced in runner WhatsApp group'` → `'NFSU Goa Campus, Canteen Area / Carry original photo ID & Registration ID'`
- **Certificate Body**: `'at NFSU Goa on 6th December 2026'` → `'at NFSU Goa Campus on 6th December 2026'`
- **Certificate Footnote**: `'Official finishing chip timing...'` → `'Official finishing results...'`

---

### 13. [`frontend/src/pages/AdminDashboard.jsx`](file:///d:/Yash%20Bhagwani/NFSU%20DFIS/Banner/Marathon_26/website/frontend/src/pages/AdminDashboard.jsx)
- **Sample Participant Fees**: Updated all `₹750` / `₹550` / `₹350` sample rows to `'₹500'`.
- **Overview Metrics**:
  - `Total Fee Collected`: `'₹5,98,400'` → `'₹5,19,500'` (aligned with `1,039 × ₹500`).
  - `Bibs Assigned` subtitle: `'Chip timing synchronized'` → `'Bib numbers verified'`.
  - `Duplicate Refunds Processed`: `'2 (₹1,500)'` → `'2 (₹1,000)'`.
- **Default Broadcast Notice**: `'...at Ponda. Venue details to be shared.'` → `'...at NFSU Goa Campus, Canteen Area.'`

---

## Verification

- Global grep audit confirmed zero remaining mentions of `girls hostel`, `rfid`, `chip timing`/`timing chip`, old fee amounts (`₹750`/`₹550`/`₹350`), or Bib pickup `"at Ponda"`.
- `npm run build` in `frontend/` passed cleanly:
  - `✓ 2074 modules transformed.`
  - `dist/assets/index-B02Cgub6.css   77.31 kB`
  - `dist/assets/index-CpUQerBM.js   535.17 kB`
  - `✓ built in 627ms` (0 errors)

