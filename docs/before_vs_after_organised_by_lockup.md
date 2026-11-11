# Before vs. After: Conference-Room "Organised By" Institutional Lockup

## Overview
Redesigned the **Organised by** block in [`frontend/src/components/Sponsors.jsx`](../frontend/src/components/Sponsors.jsx) to match the official NFSU Goa Campus conference room institutional header structure, featuring the Ministry of Home Affairs emblem on the left, bilingual Hindi/English institutional typography in the center, and the official NFSU crest with Devanagari motto on the right.

---

## 1. Logo Assets Copied to `frontend/public/`

| Source (`docs/`) | Destination (`frontend/public/`) | Usage |
| :--- | :--- | :--- |
| `docs/Ministry_of_Home_Affairs_India.svg` | `frontend/public/mha-logo.svg` | Left Ministry of Home Affairs emblem in the `Organised by` lockup |
| `docs/National_Forensic_Sciences_University_Logo.png` | `frontend/public/nfsu-crest.png` | Right official NFSU Crest Shield (`विद्यया अमृतं अश्नुते`) |
| `docs/emblem.png` | `frontend/public/nfsu-logo.png` | Full horizontal NFSU wordmark logo asset |
| `docs/nfsu-light-logo.png` | `frontend/public/nfsu-light-logo.png` | White-text horizontal NFSU logo asset for dark surfaces |

---

## 2. Sponsors / Organiser Lockup — `frontend/src/components/Sponsors.jsx`

- **Before:**
  Displayed a simple inline row with `/marathon-logo.png` (`48x48`) next to two-line text (`National Forensic Sciences University` / `Goa Campus`):
  ```jsx
  <div className="flex flex-col items-center gap-3">
    <p className="text-[#686D66] text-xs uppercase tracking-widest">Organised by</p>
    <div className="flex items-center gap-3">
      <img src="/marathon-logo.png" alt="NFSU Goa marathon logo" className="h-12 w-12 object-contain" />
      <div>
        <p className="font-semibold text-[#191A17]">National Forensic Sciences University</p>
        <p className="text-[#686D66] text-sm">Goa Campus</p>
      </div>
    </div>
  </div>
  ```

- **After:**
  Replaced with a 3-column institutional plaque (`grid-cols-1 lg:grid-cols-[160px_1fr_160px]`) matching the conference room header structure:
  - **Left column**: `/mha-logo.svg` (Ministry of Home Affairs, Government of India)
  - **Center column** (bilingual stacked hierarchy):
    1. `राष्ट्रीय न्यायालयिक विज्ञान विश्वविद्यालय`
    2. `राष्ट्रीय महत्त्व का संस्थान, गृह मंत्रालय, भारत सरकार`
    3. `National Forensic Sciences University`
    4. `Institution of National Importance, MHA, Government of India`
    5. `गोवा कैंपस | Goa Campus`
  - **Right column**: `/nfsu-crest.png` (Official NFSU Crest Shield with `विद्यया अमृतं अश्नुते`)

---

## Verification
- Ran `npm run build` in `frontend/`: `2074 modules transformed`, built cleanly in `vite build` with exit code `0`.

