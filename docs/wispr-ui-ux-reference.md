# Wispr × Scaler "India Runs on Voice" — UI/UX Style Reference Guide

> **Source:** [hackos.scaler.com/wispr](https://hackos.scaler.com/wispr)  
> **Purpose:** A complete design-language and UI/UX reference to guide AI-assisted development of your website in a similar style.

---

## 1. Overview & Design Philosophy

The site is a **high-impact hackathon landing page** built with a "premium editorial tech event" aesthetic. It blends:

- **Editorial warmth** (cream backgrounds, serif headlines, warm ink tones)
- **Tech precision** (monospace labels, animated waveforms, keyboard-key widgets)
- **Playful interactivity** (scroll-triggered animations, word-reveal effects, animated counters, floating pills)
- **Indian identity** (Rupee symbols, Hindi/Bharat references, voice-first narrative)

The page reads like a **"transcript" of a conversation** — sections are timestamped (`00:08`, `00:43`, `01:09`, `01:20`) and attributed to speakers (Wispr Flow / Scaler), mimicking a voice dictation experience. This is the site's core conceptual hook.

---

## 2. Color Palette

All colors are defined as CSS custom properties on `:root`.

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#FFFFEB` | Primary page background |
| `--cream2` | `#F6F6E0` | Hover/subtle bg, card interiors |
| `--line` | `#E4E4D0` | Borders, dividers |
| `--ink` | `#1A1A1A` | Primary text, borders, dark fill |
| `--ink2` | `#4A4A43` | Secondary / body text |
| `--mute` | `#8C8C80` | Labels, metadata, placeholder |
| `--ghost` | `#C9C9B8` | Inactive/greyed text, decorative |
| `--green` | `#034F46` | Scrubber/timeline dark section |
| `--lav` | `#F0D7FF` | Lavender — accent (CTA bg, card, highlights) |
| `--orange` | `#FFA946` | Warm accent (progress bars, waveform head, prize card) |
| `--pink` | `#FFBCF2` | Soft accent (tags, prize medal) |
| `--mint` | `#34D399` | Success / check state |
| `--blue` | `#0041CA` | Primary action (CTA button, links, active state) |
| `--blue2` | `#0033A3` | Blue hover state |

### Key Color Rules
- **Background:** Always `--cream` (never white or pure black).
- **Dark sections:** Background `--ink` (`#1A1A1A`), text `--cream`. Used for the registration/final section.
- **Lavender** is the "delight" accent — used on CTAs, highlighted tags, and hover states.
- **Orange** is the "energy/progress" accent — waveform heads, progress fills, prize highlights.
- **Blue** is the "authority/action" accent — primary buttons, active nav, Scaler brand link.

---

## 3. Typography System

Fonts are loaded from Google Fonts.

| Token | Font | Use |
|---|---|---|
| `--serif` | `DM Sans` (variable, 400–700) | Body, UI labels, buttons |
| `--it` | `DM Serif Display` (italic) | Display/headline italic accent |
| `--sans` | `Plus Jakarta Sans` (400–800) | Primary headings, marketing copy |
| `--mono` | `Plus Jakarta Sans` | Used with uppercase + letter-spacing for labels/metadata |

### Typography Scale

| Element | CSS | Style |
|---|---|---|
| H1 (Hero) | `clamp(42px, 5.1vw, 76px)` | `DM Serif Display`, weight 600, tracking `-0.035em`, line-height `0.98` |
| H2 (Section large) | `clamp(84px, 13vw, 220px)` | `DM Serif Display`, weight 400, line-height `0.86` |
| `.say` (spoken quote) | `clamp(38px, 4.8vw, 74px)` | `DM Serif Display`, tracking `-0.015em`, line-height `1.04` |
| Body | `17px` | `Plus Jakarta Sans`, line-height `1.55` |
| Section sub-heading | `clamp(16px, 1.3vw, 19px)` | Weight 500 |
| `.mono` label | `12px` | `Plus Jakarta Sans`, `letter-spacing: 0.12em`, `text-transform: uppercase` |
| Buttons | `15–16px` | Weight 600 |

### Key Typography Rules
- **Serif display font** (`DM Serif Display`) is reserved for large headline moments — the `.say` quote blocks, the registration hero headline.
- **Italic** in `DM Serif Display` creates a conversational, spoken emphasis.
- **Monospace labels** (`.mono` class) are used for timestamps, metadata, section numbers — always UPPERCASE with generous letter-spacing.
- **Filler word** styling: Words like "um", "uh" are shown with orange highlight + strikethrough, reinforcing the voice/transcription concept.

---

## 4. Layout System

```css
--wrap: 1320px;      /* Max content width */
--pad: clamp(20px, 4vw, 56px);   /* Responsive horizontal padding */
--gut: 190px;        /* Left gutter for section speaker labels */
```

### Grid Patterns Used

| Pattern | CSS | Used for |
|---|---|---|
| Transcript layout | `grid-template-columns: var(--gut) minmax(0, 1fr)` | All `article.turn` sections — left side = speaker label, right = content |
| 2-col card grid | `grid-template-columns: 1fr 1fr` | FAQ, prizes, tracks |
| 3-col card grid | `grid-template-columns: repeat(3, minmax(0, 1fr))` | Steps/process, track categories, podium bars |
| Stats bar | `grid-template-columns: repeat(4, 1fr)` | Fact strip (dates, prize total, etc.) |
| Track selector | `grid-template-columns: minmax(230px, .75fr) 1.6fr` | Track tab + detail panel |

### Section Structure
Every major section follows the **"transcript turn" pattern**:
```
<article class="turn">
  <span class="dot">   <!-- timeline connector dot -->
  <div class="gut">    <!-- left column: timestamp, speaker avatar, label -->
  <div class="body">   <!-- right column: main content -->
    <p class="say">    <!-- Large spoken headline -->
    <div class="att">  <!-- Interactive "attachment" widget -->
  </div>
</article>
```

The left `gut` column shows:
- Timestamp in monospace (`00:08`)
- Speaker avatar (Wispr circle or Scaler square icon)
- Speaker name
- Floating color pill tag (e.g., "Filler removed" in orange)

---

## 5. Component Library

### 5.1 Buttons (`.btn`)

```css
height: 54px;
border-radius: 12px;
padding: 0 24px;
font-size: 16px; font-weight: 600;
display: inline-flex; align-items: center; gap: 10px;
transition: background 0.3s, transform 0.5s var(--ease);
border: 2px solid var(--ink);
```

| Variant | Class | Background | Text | Hover |
|---|---|---|---|---|
| Primary (Blue) | `.btn-blue` | `--blue` | White | `--blue2` |
| Lavender | `.btn-lav` | `--lav` | `--ink` | `#E6C4FA` |
| Outline | `.btn-line` | White | `--ink` | `--cream2` |
| Small | `.btn.sm` | — | — | Height 44px, radius 10px |

- Arrow icon (`.arr`) inside button slides right `4px` on hover.
- Active press: `transform: scale(0.98)`.

### 5.2 Cards

**Standard bordered card:**
```css
border: 2px solid var(--ink);
box-shadow: 6px 6px 0 var(--ink);   /* hard offset shadow, no blur */
border-radius: 22px;
background: #fff;
```

**Dark card:**
```css
background: var(--ink);
color: var(--cream);
border-radius: 28px;
```

The **6px hard drop shadow** is a signature visual element — used on most card components. It creates a flat/sticker aesthetic.

### 5.3 Tags / Pills (`.tag`)

```css
border: 1.5px solid var(--ink);
border-radius: 999px;
padding: 6px 12px;
font-size: 13px; font-weight: 600;
white-space: nowrap;
```

Color variants:
- `.tag.f` → orange background (`--orange`)
- `.tag.c` → pink background (`--pink`)  
- `.tag.r` → lavender background (`--lav`)

Tags animate in with `opacity 0 → 1` and `transform: translateY(12px) → 0`.

### 5.4 Fixed Floating Pill (`.pill`)

A sticky bottom pill CTA that persists while scrolling:
```css
position: fixed; bottom: 22px; left: 50%; transform: translate(-50%);
background: var(--ink); color: var(--cream);
height: 62px; border-radius: 999px;
border: 2px solid var(--cream);
box-shadow: 0 20px 50px -14px rgba(0,0,0,0.5);
```
Contains: animated waveform bars, countdown text, and a lavender "Register now →" CTA. Hides when hero CTA is visible.

### 5.5 Waveform Animation (`.wv`)

Voice waveform bars — used throughout as a "listening/active" indicator:
```css
display: inline-flex; align-items: center; gap: 3px; height: 20px;
/* Each bar: */
width: 3px; border-radius: 2px; background: currentColor;
transform: scaleY(0.22);
animation: wv 1s ease-in-out infinite;
/* Each bar gets random animationDelay and animationDuration */

@keyframes wv {
  0%, 100% { transform: scaleY(0.22); }
  50%       { transform: scaleY(1); }
}
```

### 5.6 Navigation (`.nav`)

Fixed top nav, 72px height:
- **Transparent** by default
- **Scrolled:** `backdrop-filter: blur(14px)`, cream tint background, bottom border
- **Dark mode** (over dark section): transparent dark background, cream text

Nav links: `.chap` — monospace uppercase, 11.5px. Active: `background: var(--ink); color: var(--cream); border-radius: 999px`.

Logos: `Scaler × Wispr Flow` lockup with the `×` separator in serif font.

### 5.7 FAQ Accordion (`.fq-i`)

```css
/* Closed */
.fq-a { display: grid; grid-template-rows: 0fr; }
/* Open */
.fq-i.open .fq-a { grid-template-rows: 1fr; }
/* Smooth via transition */
transition: grid-template-rows 0.45s var(--ease);
```

The expand icon (`.fq-ic`) is a pure CSS `+` / `−` using `::before` and `::after` pseudo-elements rotating.

### 5.8 Modal Sheet (`.sheet`)

Centered modal dialog:
```css
position: fixed; top: 50%; left: 50%;
transform: translate(-50%, -47%) scale(0.97);  /* closed */
/* open: */
transform: translate(-50%, -50%);
border-radius: 24px; max-height: calc(100dvh - 32px);
/* backdrop: */
backdrop-filter: blur(4px) on .sheet-bg overlay
```

### 5.9 Keyboard Widget (`.kbd`)

Displays keyboard keys with 3D press effect:
```css
.kbd i {
  border: 1.5px solid var(--ink);
  box-shadow: 0 2.5px 0 var(--ink);   /* 3D key effect */
  border-radius: 7px; width: 28px; height: 28px;
}
/* Pressed state: */
.kbd i.on {
  background: var(--orange);
  box-shadow: 0 0 0 var(--ink);
  transform: translateY(2.5px);
}
```

### 5.10 Prize Podium

Three-column bar chart for prize positions:
- P1 (1st): `background: --blue`, height 100%
- P2 (2nd): White, height 76%, `transition-delay: 0.12s`
- P3 (3rd): `background: --lav`, height 58%, `transition-delay: 0.24s`

Animated via `IntersectionObserver` — bars animate from 0 to full height with `1.4s var(--ease)` transition.

---

## 6. Animation System

### Easing Curves

```css
--ease:  cubic-bezier(0.16, 1, 0.3, 1);   /* Snappy ease-out (spring-like) */
--ease2: cubic-bezier(0.76, 0, 0.24, 1);  /* Sharp ease-in-out */
```

### Core Animation Patterns

| Pattern | Description | Implementation |
|---|---|---|
| **Word reveal** | Words appear one by one left-to-right | Wrap each word in `<span class="w">`, stagger `setTimeout` by `70ms` per word, add class `.in` → `opacity: 1` |
| **Filler word removal** | Orange-highlighted "um/uh" words slide out | `.w.f.gone` → `opacity: 0, max-width: 0, padding: 0` with transition |
| **Scroll-triggered** | Elements animate on entering viewport | `IntersectionObserver` with `threshold: 0.3–0.6` |
| **Counter count-up** | Numbers animate from 0 to target | `requestAnimationFrame` loop with easing `1-(1-t)^3` |
| **Typing cursor** | Blinking cursor in text | `animation: blink 0.9s step-end infinite` |
| **Navbar transition** | Transparent → frosted glass on scroll | `scroll` event, toggle `.scrolled` class |
| **Card hover lift** | Cards lift upward on hover | `transform: translateY(-4px)` with `0.6s var(--ease)` |

### Scroll-Driven Transcript

The left column `.gut-in` is `position: sticky; top: 110px` — the speaker label stays fixed as the content scrolls by, reinforcing the "transcript" metaphor.

---

## 7. Section-by-Section Breakdown

### 7.1 Hero Section

- **Layout:** Centered, full-width, stacked
- **Superheading:** Monospace uppercase label
- **H1:** Serif display, large, `em` highlighted in `--blue`
- **Lede:** Medium-weight body text, max-width `38em`, centered
- **CTAs:** Two buttons side-by-side (`.btn-blue` + `.btn-lav`)
- **Decoration:** Floating tag pills scattered around the CTA area, animated in with rotation + scale
- **Bottom:** A large SVG illustration/waveform ribbon flows into the stats bar

### 7.2 Stats Bar

4-column grid with top/bottom borders:
- Monospace label above, serif bold number below
- Separated by `1px solid --line` vertical dividers

### 7.3 Transcript Sections

A vertical timeline:
- Left column (`190px`) = speaker identity + timestamp
- Right column = Large serif quote + interactive widget
- Left edge has a continuous `1px` vertical line running through all sections

### 7.4 Rounds / Timeline

Three color-coded cards (Lavender → Orange → Blue):
- Each card has an inline SVG city/scene illustration
- Station-board style header (departure board aesthetic)
- A progress bar beneath shows current round

### 7.5 Highlights Ticker

Two rows of text scrolling in opposite directions. A circular badge overlaid with spinning "FREE TO ENTER" text using SVG `textPath`.

### 7.6 Prize / Rewards Section

- Large counter: `₹30 L` counting up from 0 on scroll-enter
- 3-column animated podium bars
- Prize cards: Illustrated SVG trophy icons, place label, amount in serif font
- Side panel: Total amount in orange box + perks list

### 7.7 FAQ Section

- 2-column grid of FAQ items
- Left sidebar: Category filter tabs (All / Hackathon / Rules & Tools)
- Each FAQ: numbered monospace index, serif question, expand/collapse
- Sidebar: Illustration + "Still stuck? Join our Discord →"

### 7.8 Registration Section (`.final`)

- **Background:** `--ink` (full dark)
- **Headline:** Enormous serif text with lavender italic `em`
- **Interactive badge card:** Personalisable event pass with:
  - Name input (voice or typed)
  - 6 color theme swatches
  - 4 pattern options (voice bars, dots, rings, stripes)
  - Card style (wave/poster/ticket)
  - Download button
  - Physics-based swinging/draggable card animation
- **Canvas waveform:** Full-width animated waveform bars, mouse-interactive

### 7.9 Footer

Dark background, 3-column grid:
- Brand lockup + tagline
- Hackathon anchor links
- Scaler + Wispr descriptions
- Large animated footer text: "Build for Bharat." (words animate in one by one)
- Copyright bar with legal links + "Back to top ↑"

---

## 8. Form / Registration Flow

A modal sheet with 5 sequential panes:
1. **Register** — Full name, email, phone (+91 prefix)
2. **OTP verification** — 6 individual digit inputs, auto-advance, resend timer
3. **Login** — Phone-only, then OTP
4. **Team invite** — Accept/decline flow
5. **Success** — Confirmation + "Go to dashboard →"

Form field styles:
```css
border: 1.5px solid #D4D4BE;
border-radius: 12px; padding: 13px 14px;
font-size: 16px;
/* Focus: */
border-color: var(--blue);
box-shadow: 0 0 0 4px rgba(0,65,202,0.12);
```

---

## 9. Responsive Breakpoints

| Breakpoint | Key Changes |
|---|---|
| ≤ 1080px | Nav chapter links hide |
| ≤ 1000px | Track selector, steps grid → single column |
| ≤ 900px | Dual-pane duel/lanes → single column |
| ≤ 760px | Timeline rail goes vertical; pill label shortens |
| ≤ 600px | Hero CTA buttons shrink; FAQ padding adjusts; some keyboard UI hides |
| ≤ 480px | Prize podium gap/padding reduces; pill meta hides |
| ≤ 380px | Pill meta fully hidden |

---

## 10. Microinteractions & Special Effects

| Effect | Description |
|---|---|
| **Nav active tracking** | `IntersectionObserver` activates matching nav item on scroll |
| **Dot timeline** | Left gutter dots change from grey border → filled `--ink` or `--blue` as section enters viewport |
| **Word-by-word reveal** | `.say` paragraphs animate in with 70ms stagger, filler words then slide out |
| **Paste flash** | Element briefly gets lavender background that fades: `animation: paste 1.1s ease-out` |
| **Card drag/swing** | Event pass card has physics-based swinging via `requestAnimationFrame` |
| **Canvas waveform** | Mouse proximity makes waveform bars react (Gaussian falloff from cursor X) |
| **Scroll-lock gutters** | Speaker label sticky positioning creates "talking head" experience |
| **Keyboard key press** | Individual keys animate down 2.5px + lose shadow to simulate press |

---

## 11. AI Prompt Template

Use the following structured prompt when asking AI to build pages inspired by this design:

```
Build a [PAGE TYPE] page with the following design system:

COLORS:
- Background: #FFFFEB (warm cream)
- Primary text: #1A1A1A
- Secondary text: #4A4A43
- Muted/labels: #8C8C80
- Accent blue (CTA): #0041CA
- Accent lavender (hover/delight): #F0D7FF
- Accent orange (energy/progress): #FFA946
- Accent pink: #FFBCF2
- Dark section bg: #1A1A1A with cream text
- Borders/dividers: #E4E4D0

TYPOGRAPHY:
- Display headings: "DM Serif Display", large (clamp 42-76px), weight 600, tracking -0.035em
- Body: "Plus Jakarta Sans", 17px, line-height 1.55
- Labels/metadata: "Plus Jakarta Sans" uppercase, letter-spacing 0.12em, 11-12px
- Italic emphasis: "DM Serif Display" italic for spoken/editorial moments

CARDS:
- border: 2px solid #1A1A1A
- box-shadow: 6px 6px 0 #1A1A1A  (hard offset, no blur — signature style)
- border-radius: 22px
- background: white or accent color

BUTTONS:
- Primary: background #0041CA, border 2px solid #1A1A1A, color white,
  height 54px, radius 12px, weight 600
- Secondary: background #F0D7FF, border 2px solid #1A1A1A, color #1A1A1A
- Outline: border 2px solid #1A1A1A, background white

ANIMATIONS:
- Easing: cubic-bezier(0.16, 1, 0.3, 1) for all transitions
- Scroll-triggered word reveals (staggered 70ms per word)
- IntersectionObserver for section entry animations
- Transition durations: 0.3s for color, 0.5s for transform, 0.6s for card hover

LAYOUT:
- Max width: 1320px
- Responsive padding: clamp(20px, 4vw, 56px)
- Section structure: left gutter label (190px wide) + right content column
- Timeline/transcript feel: vertical left-side line connecting sections

STYLE NOTES:
- Use hard drop shadows (no blur) for card elevation
- Pill/tag shapes: border-radius 999px
- Voice/waveform bars: animated 3px wide bars with scaleY animation
- Monospace uppercase labels for all metadata
- DM Serif Display italic for the "spoken word" moments
- Keep white space generous — the cream background IS the breathing room
- Always use 2px solid #1A1A1A borders on interactive elements
```

---

## 12. Key Design Decisions to Emulate

1. **The Transcript Metaphor** — Structure your page like a conversation. Timestamps, speaker labels, and "spoken" headings make the UI feel alive.

2. **Hard Drop Shadows** — Use `6px 6px 0 #1A1A1A` on cards instead of soft box-shadows. This creates a flat, sticker-like, printed quality.

3. **Cream Background** — Never pure white. `#FFFFEB` is warm and maintains a premium editorial feel.

4. **Serif + Sans Pairing** — `DM Serif Display` for drama, `Plus Jakarta Sans` for clarity. The italic serif is used sparingly for maximum impact.

5. **Lavender as the "Delight" Color** — Use `#F0D7FF` for secondary CTAs, hover states, and surprise moments.

6. **Progressive Disclosure Through Scroll** — Use `IntersectionObserver` to reveal words, cards, and counters as the user scrolls.

7. **Voice Waveform as a Universal Indicator** — Animated waveform bars (`3px`, `border-radius: 2px`, `scaleY` animation) appear everywhere.

8. **Monospace Labels** — Every section has a monospace uppercase label grounding the reader. Use `letter-spacing: 0.1em` and `font-size: 11-12px`.

9. **Fixed Floating CTA** — The sticky pill at the bottom ensures conversion is always one click away.

10. **Interactive Identity Card** — The personalisable badge in the registration section makes visitors feel ownership before signing up.

---

*Document generated from live HTML analysis of https://hackos.scaler.com/wispr — Nov 2026*
