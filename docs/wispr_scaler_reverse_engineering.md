# Reverse Engineering Report: India Runs on Voice (Scaler × Wispr Flow)

**Target URL:** [https://hackos.scaler.com/wispr/](https://hackos.scaler.com/wispr/)  
**Analyzed With:** [morluto/rea](https://github.com/morluto/rea) (`rea-agents` v6.7.0)  
**Analysis Date:** November 2026  
**Scope:** UI/UX Design System, Front-End Architecture, Interactive Engineering, Visual Metaphors, Copywriting Strategy  

---

## 1. Executive Summary & Core Concept

**"India Runs on Voice"** is a flagship hackathon microsite created in partnership between **Scaler** and **Wispr Flow**. The hackathon challenges builders across India to develop voice-first applications in Indian regional languages, built hands-free using Wispr Flow’s dictation technology.

Instead of a generic landing page with conventional marketing blocks, the site is designed around a singular, cohesive creative metaphor: **an interactive audio interview transcript between Wispr Flow and Scaler**, infused with **Indian Railway platform aesthetics** and **neo-brutalist tactile editorial design**.

```
┌────────────────────────────────────────────────────────────────────────────┐
│                             CREATIVE CONCEPT                               │
│                                                                            │
│   Audio Interview Metaphor          Train Platform Metaphor                │
│   ┌───────────────────────────┐     ┌──────────────────────────────────┐   │
│   │ • Timestamps (00:08, 01:20)│     │ • Railway announcement boards    │   │
│   │ • "Wispr Flow" vs "Scaler" │     │ • "Round 1 departs PF 1"         │   │
│   │ • "Filler removed" badges │     │ • Pinned horizontal platform run │   │
│   │ • Real-time wave canvas   │     │ • Destination boards             │   │
│   └───────────────────────────┘     └──────────────────────────────────┘   │
│                                 ▲                                          │
│                                 │                                          │
│   Neo-Brutalist Tactile UI ─────┴───── Vernacular Representation           │
│   • Solid ink shadows (4px offset)     • 13 Indian languages & scripts     │
│   • Warm paper/cream background        • 12 everyday citizen personas      │
│   • 3D physical lanyard ticket badge   • Interactive sonar map of India    │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. REA Reverse Engineering Methodology

Using the **REA (Reverse Engineer Anything)** engine:
1. **Extraction & Inventorying:** Extracted 11 distinct embedded/linked stylesheet chunks and 17 JavaScript script units directly from the page response.
2. **Static Application Graph (`rea analyze-javascript-application`):**
   - Built a complete Abstract Syntax Tree (AST), identifier binding graphs, and lexical scope projections across all 16 client-side execution files.
   - Profiled event listeners, canvas rendering routines, mathematical animations, and DOM mutation hooks without running arbitrary code.
3. **CSS Variable & Token Extraction:** Discovered the complete design token system, animation keyframe inventory (37 registered `@keyframes`), and responsive breakpoint matrix.

---

## 3. Brand Identity & Creative Direction

### 3.1 The Headline & Narrative Metaphor
- **Primary Hero Punchline:**  
  > *"India has a billion voices. Build for them."*
- **Sub-tagline:**  
  > *"A nationwide hackathon to build voice-first tools in the languages India actually speaks. You build them the same way: by talking, not typing."*
- **Dialogue-Driven Transcript Structure:**  
  Sections are styled as **conversation turns** (`<article class="turn">`) between two speakers:
  - **Wispr Flow** (Lilac avatar, voice expert): Explains why voice matters, themes, round formats, and rewards.
  - **Scaler** (Blue/black geometric avatar, technical host): Explains vernacular voice diversity, judging rules, and FAQs.
  - Each speaker turn features a literal audio timestamp (`00:08`, `00:14`, `00:26`, `00:37`, `00:43`, `01:09`, `01:20`) and an avatar.

### 3.2 Product-Aligned Signature Micro-Detail: "Filler Removed"
Wispr Flow's flagship product feature is real-time AI removal of speech fillers (*"um"*, *"uh"*, *"like"*).  
The website ingeniously embeds this into the landing page text itself:
- Words like `<span class="f">um</span>` and `<span class="f">like</span>` appear subtly crossed out or highlighted.
- A physical-style tilted sticker badge (`--r: -3deg`, `--r: 3deg`) marked **"Filler removed"** sits next to dialogue snippets.

### 3.3 Cultural Grounding (Indian Rail & Regional Vernacular)
- **Indian Railway Train Indicator Boards:** The hackathon rounds are framed as train platform departures:
  - *"Now announcing: Round 1 departs from platform 1 on 5 Nov"*
  - High-contrast yellow/black flip-dot and platform signage elements (`PF 1 • Online`, `PF 2 • Online`, `PF 3 • Scaler Campus`).
- **Everyday Indian Personas (`#wfPeople`):** Rather than showing generic developer stock photos, the hero section displays 12 illustrated portraits of real Indian users:
  1. *College student* (Delhi)
  2. *Grandmother* (Chennai)
  3. *Retired professor* (Kolkata)
  4. *Nurse* (Guwahati)
  5. *Content creator* (Bengaluru)
  6. *Shop owner* (Amritsar)
  7. *Farmer* (Bhubaneswar)
  8. *Kirana owner* (Mumbai)
  9. *Auto driver* (Hyderabad)
  10. *Schoolgirl* (Patna)
  11. *Fisherman* (Kochi)
  12. *Shawl artisan* (Srinagar)

---

## 4. Design System & Visual Language

### 4.1 Color Palette & CSS Variables

| Token Name | Hex Value | Role / Usage |
|:---|:---|:---|
| `--cream` | `#ffffeb` | Main warm newsprint / retro paper background |
| `--cream2` | `#f6f6e0` | Secondary surface background (cards, gutters) |
| `--line` | `#e4e4d0` | Subtle hairline dividers and borders |
| `--ink` | `#1a1a1a` | Deep carbon black for typography and high-contrast borders |
| `--ink2` | `#4a4a43` | Charcoal secondary text |
| `--mute` | `#8c8c80` | Tertiary / disabled / metadata text |
| `--ghost` | `#c9c9b8` | Faint placeholders and borders |
| `--lav` | `#f0d7ff` | Wispr Flow signature soft lavender/lilac |
| `--orange` | `#ffa946` | Indian marigold / vibrant saffron accent |
| `--pink` | `#ffbcf2` | Playful energetic bubblegum pink |
| `--blue` | `#0041ca` | Scaler signature electric blue |
| `--blue2` | `#0033a3` | Deep cobalt hover state |
| `--mint` | `#34d399` / `#6bd49f` | Fresh verification / success mint |
| `--green` | `#034f46` | Deep emerald green |

### 4.2 Typography Hierarchy

The site combines a classic editorial serif display with an ultra-clean geometric sans and monospace accents:

1. **Editorial Serif (`--it`):**
   - Family: `"DM Serif Display", Georgia, serif`
   - Role: Hero italics, emotional emphasis words (`<em>Build for them</em>`, `<em>voice-first</em>`, `<em>uses</em>`).
2. **Body & Interface Sans (`--sans` & `--serif`):**
   - Families: `"Plus Jakarta Sans", system-ui, sans-serif` & `"DM Sans"`
   - Role: Headings, body text, UI buttons, badge captions.
3. **Monospace / Technical Labels (`--mono`):**
   - Styling: `.mono { font-family: var(--mono); letter-spacing: 0.12em; text-transform: uppercase; font-size: 12px; }`
   - Role: Timestamps, platform tags, round IDs (`01`, `02`), metadata pills.
4. **Fluid Scale Tokens (`clamp()`):**
   - `--t-display`: `clamp(40px, 4.2vw, 60px)`
   - `--t-h2`: `clamp(28px, 2.65vw, 38px)`
   - `--t-h3`: `clamp(19px, 1.55vw, 22px)`
   - `--t-lead`: `clamp(16.5px, 1.25vw, 18px)`
   - `--t-body`: `16px` (line-height: `1.55`)

### 4.3 Elevation & Shadows (Neo-Brutalist Aesthetic)
Unlike SaaS landing pages with blurry diffused drop shadows, Wispr Flow uses **hard, solid-offset borders and shadows**:
- Primary Button / Card Shadow: `box-shadow: 4px 4px 0 var(--ink);` or `6px 6px 0 var(--ink);`
- Outlines: High-contrast `1.5px` to `2px` solid `#1a1a1a` borders.
- Active Press Effect: `transform: translate(2px, 2px); box-shadow: 2px 2px 0 var(--ink);`
- Border Radii:
  - Small pills / badges: `6px` / `8px`
  - Action buttons: `12px`
  - Floating pill & tag shapes: `999px` (full pill)
  - Interactive cards: `22px` to `28px`

### 4.4 Layout & Breakpoints
- Container constraints: `--wrap: 1320px; --pad: clamp(20px, 4vw, 56px); --gut: 190px;`
- Responsive Breakpoints:
  - Desktop Wide: `> 1100px` (dual-column transcript layout with dedicated left speaker gutter)
  - Medium / Tablet: `<= 900px` (pinned horizontal rail unpins into vertical card stack)
  - Mobile: `<= 760px`, `<= 600px`, `<= 480px` (gutters collapse, font clamps scale down)

---

## 5. UI Components & Feature Breakdown

### 5.1 Hero Section (`wf-hero wf-night`)
- **Dark Mode Island:** Styled in dark theme (`background: #1a1a1a`, text `#ffffeb`) to create dramatic visual contrast with the cream/paper body below.
- **Top Brand Badge:** Scaler and Wispr Flow vector SVG marks joined by an interactive multiplication cross (`&times;`).
- **Dynamic Countdown Pill (`#hDays` & `#pcT`):** Live JavaScript countdown timer computing remaining days and hours until registration cutoff (`27 Nov 2026, 11:59 pm IST`).
- **Glowing Map Figure (`#glowMap`):** SVG map of India illuminated with rhythmic glowing city lights across tier-1, tier-2, and tier-3 coordinates.
- **Persona Ribbon (`#wfPeople`):** Horizontal portrait track highlighting everyday Indians.

### 5.2 The 5 Theme Tracks
Structured as an interactive expanding card deck (`.tg-c`):

1. **Civic Services (Track 01):**
   - *Example:* Voice-based grievance filing in municipal offices.
   - *Unlocks:* Public welfare access for non-literate citizens.
2. **Healthcare (Track 02):**
   - *Example:* Regional-language symptom intake.
   - *Unlocks:* Direct medical triage for patients who only speak vernacular languages.
3. **Education (Track 03):**
   - *Example:* Spoken quizzes in local dialects.
   - *Unlocks:* Interactive learning for first-generation learners.
4. **Small Business (Track 04):**
   - *Example:* Voice bookkeeping and billing for shopkeepers.
   - *Unlocks:* Digital accounting for kirana and neighborhood stores.
5. **Everyday Access (Track 05):**
   - *Example:* Hands-free phone utilities for elderly and disabled citizens.
   - *Unlocks:* Digital independence without navigating complex touch UI menus.

### 5.3 Interactive Vernacular Voices Map (`#irMap`)
An interactive SVG visualization plotting 13 Indian linguistic hubs with real coordinates:
- **Languages Covered:**
  - Delhi (Hindi: *"नमस्ते"*)
  - Chennai (Tamil: *"வணக்கம்"*)
  - Kolkata (Bengali: *"নমস্কার"*)
  - Ahmedabad (Gujarati: *"નમસ્તે"*)
  - Guwahati (Assamese: *"নমস্কাৰ"*)
  - Bengaluru (Kannada: *"ನಮಸ್ಕಾರ"*)
  - Amritsar (Punjabi: *"ਸਤ ਸ੍ਰੀ ਅਕਾਲ"*)
  - Bhubaneswar (Odia: *"ନମସ୍କାର"*)
  - Mumbai (Marathi: *"नमस्कार"*)
  - Hyderabad (Telugu: *"నమస్కారం"*)
  - Patna (Bhojpuri: *"प्रणाम"*)
  - Kochi (Malayalam: *"നമസ്കാരം"*)
  - Srinagar (Urdu: *"آداب"*)
- **Micro-Interaction:** Radar rings (`ir-ring`) pulse outward via CSS `@keyframes irRing`, while city hover chips display native orthography alongside English city names.

### 5.4 The Three Rounds (Horizontal Train Platform Rail)
Desktop screens (>900px) use **CSS sticky position and JavaScript horizontal translation (`#trk`, `.gx-pin`, `#gxStrip`)**:
- While the user scrolls down vertically, the section stays pinned in view, scrolling horizontally across three railway platforms:
  - **Round 1 (Warm-Up • Platform 1):** Online mini-tasks (Idea, Prompt, Impact). Every participant gets 1 month of Wispr Flow Pro free.
  - **Round 2 (The Build • Platform 2):** 48-hour online hackathon solving a unified national problem statement. Teams up to 3.
  - **Round 3 (Finale • Platform 3):** In-person on-campus demo and pitch day at the Scaler Campus before AI founders and investors.

### 5.5 Prize Pool Grid (`#prizes`)
- **Headline Stat:** `₹30 L` in prizes (animated counter using `data-to="3000000"`).
- **Tier Cards:**
  - 1st Place: `₹7 L` cash + 12 months Flow Pro per member.
  - 2nd Place: `₹5 L` cash + 12 months Flow Pro per member.
  - 3rd Place: `₹3 L` cash + 12 months Flow Pro per member.
  - Remaining pool: Distributed across track category winners and finalists.

### 5.6 Interactive 3D Hackathon Pass Generator (`#pass`)
One of the most engaging UX features on the page is an interactive badge builder:
- **Physical Skeuomorphism:** A badge suspended from a woven lanyard strap printed with `"SCALER × WISPR"` and a stamped metal clip (`.pw-strap`, `.pw-clip`).
- **Interactive Customizer Controls:**
  - **Name Input & Voice Prompt:** Type a name or click *"Say it"* to speak it aloud.
  - **Title Selector:** Choose from titles like *Prompt Whisperer*, *Localhost Loudmouth*, *Voice-first Hacker*.
  - **Color Palettes:**
    - `Paper`: Light cream card (`#F1F0EC`) with carbon ink (`#1A1A1A`) and orange accent (`#FFA946`).
    - `Lavender`: Lilac card (`#F0D7FF`) with carbon ink and electric blue accent.
    - `Ink`: Black card (`#1A1A1A`) with white text and lavender accent.
    - `Blue`: Scaler blue card (`#0041CA`) with pink accent.
    - `Orange`: Marigold card (`#FFA946`) with white accent.
    - `Pink`: Bubblegum card (`#FFBCF2`) with blue accent.
  - **Pattern Algorithms (Mathematical SVG generation):**
    - `Voice`: 28 vertical equalizer waveform bars generated from the user's name string hash.
    - `Grille`: 8×7 microphone grille dot-matrix with accented nodes.
    - `Rings`: Concentric acoustic shockwaves.
    - `Bars`: Angled acoustic resonance lines.
- **3D Card Flip & Perspective:** Hovering/dragging tilts the badge in 3D space using CSS variables `--rx` and `--ry` and `perspective: 1000px`. Double-clicking flips to the back face showing round dates and a custom barcode (`.pw-bk-bc`).
- **Download Pass (`#pwDl`):** Generates and downloads a high-res image of the personalized ticket for social sharing.

### 5.7 Floating Audio Dictation Pill (`#pill`)
Fixed at the bottom viewport:
- Displays an animated equalizer waveform (`data-wv="10"`).
- Automatically lights up when the user scrolls to simulate active audio playback.
- Hides cleanly when the hero registration button is in view or when registration modals are opened.

---

## 6. Technical Engineering & Motion Design

### 6.1 Interactive Canvas Waveform Physics
The site does not use video or heavy GIF files for its audio waves. Instead, an HTML5 `<canvas class="wave">` calculates real-time fluid acoustic waveforms:
- **Mathematical Formula:** Dual harmonic sine waves combined with a Gaussian spatial cursor falloff:
  ```javascript
  const distance = Math.abs(barX - cursorX);
  const gaussian = Math.exp(-(distance * distance) / 16200);
  const height = 6 + (Math.sin(r * 0.23 + time * 1.6) * 0.5 + 0.5)
                   * (Math.sin(r * 0.07 - time * 0.9) * 0.5 + 0.5)
                   * (36 + intensity * 110)
                   + gaussian * (110 + Math.sin(time * 9 + r) * 20);
  ```
- Result: As the user glides their mouse over the wave canvas, the sound wave peaks smoothly and ripples like water.

### 6.2 Keyframe Inventory (37 Custom Animations)
Among the registered keyframes:
- `@keyframes csvp`: Vertical scale modulation of voice equalizer bars (`scaleY(0.35)` to `scaleY(1)`).
- `@keyframes irRing`: Radial pulse expanding and fading from city coordinates.
- `@keyframes wyspin`: Infinite rotation of the circular *"FREE TO ENTER"* badge.
- `@keyframes fqin`: Smooth expansion of accordion answer containers.
- `@keyframes paste`: Simulated text insertion for dictation demonstration.

### 6.3 Performance & Dependency Profile
- **Zero Heavy JavaScript Frameworks:** The page runs entirely on vanilla JavaScript (no React, Vue, or bulky UI libraries). The page achieves near-instant initial paint despite having 450+ KB of rich SVG assets, interactive canvas routines, and custom 3D card tilt effects.
- **Accessibility (`prefers-reduced-motion`):** Every key script checks `matchMedia('(prefers-reduced-motion: reduce)').matches`, cleanly suppressing parallax, canvas loops, and heavy transforms for users with motion sensitivity.

---

## 7. Key Takeaways for the Marathon '26 Website

When designing the **Marathon '26** website, several techniques from this site can be directly borrowed or adapted:

1. **Metaphor-Driven UX:**  
   Instead of ordinary cards, structure the marathon website around an athletic journey metaphor (e.g., Starting Line ➔ Water Stations ➔ Elevation Checkpoints ➔ Finish Line).
2. **Neo-Brutalist Color & Shadow Style:**  
   The warm paper background (`#ffffeb`), crisp borders, and solid offset ink shadows (`4px 4px 0 #1a1a1a`) create a premium, tactile, editorial aesthetic that stands out from generic flat corporate pages.
3. **Generative Bib / Runner Pass Customizer:**  
   Implement a dynamic Marathon Bib / Badge generator where registered runners can type their name, pick their race category (5K, 10K, Half Marathon, Full Marathon), customize the badge color, and download an official shareable graphic.
4. **Interactive Route & Checkpoint Map:**  
   Use an animated SVG elevation and course map with glowing checkpoints and interactive mile markers, similar to Wispr's India Voice Map.
5. **Dynamic Sticky Milestone Pill:**  
   A floating bottom pill that tracks registration deadlines, countdown timers, or current course registration caps.
