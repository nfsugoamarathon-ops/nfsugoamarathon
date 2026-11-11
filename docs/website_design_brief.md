# AI Website Design Brief: ADAMYA DHAVANAM

Use this document as the design and UX direction when building or revising the public website for the NFSU Goa Marathon. Treat the existing project notes and implementation as the source of truth for event facts and technical decisions.

## Project

- Event: **ADAMYA DHAVANAM**, NFSU Goa Marathon
- Website: `nfsugoamarathon.in`
- Event date in the project brief: **6 December 2026**
- Current stack in the project brief: **React, Tailwind CSS, Django REST Framework, PostgreSQL**
- Primary audiences: runners and families, participants under 18, volunteers, sponsors, and event administrators
- Primary public action: register for a race category and complete payment

## Visual Reference

Reference page reviewed: [India Runs on Voice, Scaler x Wispr Flow](https://hackos.scaler.com/wispr/).

The reference is a long-form event microsite with a clear visual narrative rather than a sequence of generic marketing cards. Its visible design patterns include:

- A near-black, deep green hero that contrasts with warm, pale sections below.
- A fixed, compact chapter navigation on desktop and a menu button on mobile.
- A large, high-contrast headline with selective italic serif emphasis.
- A strong hero visual that communicates the event's subject immediately, supported by short event facts and a prominent action.
- Editorial section introductions, image-led selectable items, compact labels, and strong spacing between content groups.
- Interactive content that helps visitors explore: selectable theme tracks, a round-by-round timeline, FAQ category filters, and expandable answers.
- A persistent registration action that stays easy to find while scrolling.
- Cultural detail used as part of the information design, not as generic decoration.

Use these as design cues, not as a request to reproduce the reference. Do not copy its logos, text, illustrations, map artwork, brand marks, or exact page composition. Create original visuals for the marathon.

## Creative Direction

Build an event identity around **race day at dawn**: anticipation, movement, community, and Goa. The site should feel energetic and distinctive while remaining trustworthy enough for registration and payment.

Suggested palette, to be adjusted to the marathon logo and any established NFSU brand rules:

| Token | Suggested value | Use |
| --- | --- | --- |
| `--night` | `#111A17` | Hero and footer foundations |
| `--paper` | `#FFFCEB` | Main light sections |
| `--ink` | `#191A17` | Primary text and strong outlines |
| `--muted` | `#686D66` | Supporting text and metadata |
| `--race-blue` | `#1749D1` | Primary action and focus accent |
| `--dawn-lilac` | `#EBD3F5` | Secondary highlight |
| `--marigold` | `#FFC36A` | Race-day detail and small emphasis |
| `--line` | `#DADBCF` | Dividers on light surfaces |

These are starting suggestions, not colors extracted from the reference. Keep text contrast strong and use accents sparingly. Prefer a restrained palette with a few purposeful contrasts over a single-hue interface.

Typography should combine a highly readable sans-serif for body and interface text with an expressive serif used selectively for emotional emphasis. Keep headings compact, labels clear, and forms especially legible. Test Devanagari and other Indian scripts if multilingual content is added; do not assume a Latin font covers them well.

Use original, event-relevant photography or illustration in the hero: runners, the start line, the campus, or a Goa landscape. Do not reveal or fabricate the route map. Until organizers publish it, show a clear **Route to be announced** state instead.

## Page Structure

Build the public page as a guided event journey. Keep navigation short and anchor it to real sections.

1. **Header:** event identity, key page links, account/login entry, and a clear registration action. Use a compact sticky header on desktop; provide an accessible mobile menu.
2. **Hero:** event name, one concise promise, date, venue, reporting/flag-off summary, and primary **Register** action. Include a relevant visual and a secondary link to event details.
3. **Event facts:** date, venue, race distances, registration status, and other confirmed essentials in a quick-scan row or strip.
4. **About the event:** explain the purpose and who can participate without burying practical details.
5. **Choose a category:** make 3K, 6K, and 10K easy to compare. Show eligibility, distance, fee, inclusions, and flag-off time only when confirmed. Selecting a category should lead directly into registration with that choice retained.
6. **Race-day schedule:** present reporting, warm-up, and each category's flag-off in chronological order. Distinguish race-day information from bib-collection dates and locations.
7. **Route:** show the published route only after organizers authorize it. Before then, display the announcement status without implying an unconfirmed map or course detail.
8. **Sponsors and partners:** use supplied logos at consistent visual sizes and link to sponsor sites where appropriate.
9. **FAQs:** group questions into useful categories and use accessible accordions. Include registration, eligibility, payment, bib collection, medical guidance, refunds, and race-day logistics.
10. **Contact and footer:** provide verified contact channels, event links, privacy, terms, and the event identity.

Participant and admin dashboards are separate product surfaces, not extra sections of the public landing page. Keep them visually related to the event identity while optimizing each for its repeated tasks.

## Core UX Flows

### Registration

Make the path understandable before asking for personal data. Show the selected distance, eligibility, fee, and key conditions before checkout. The project notes describe this flow:

1. Select 3K, 6K, or 10K.
2. Enter name, date of birth, gender, WhatsApp number, email, emergency contact, blood group, T-shirt size, and medical condition.
3. Request age-proof upload for participants under 18, subject to the confirmed eligibility and organizer policy.
4. Pay online using the payment methods actually configured.
5. Show a clear success or pending state and provide the registration ID and confirmation details.
6. Give a safe recovery path for payment deducted without confirmation; do not ask users to pay twice while a payment is being reconciled.

Use short steps, inline validation, helpful error messages, visible progress, and preserve entered information when moving between steps. Explain why sensitive health and emergency details are requested. Never claim payment succeeded until the server confirms it.

### Participant Dashboard

Prioritize registration status, payment status, confirmation download, permitted profile edits, bib/event updates, and certificate download. Make pending, successful, failed, and refunded states visually distinct and understandable.

### Admin Dashboard

Keep the admin interface operational rather than promotional. Prioritize registration totals, category counts, payment reconciliation, participant management, T-shirt inventory, volunteer and sponsor management, certificate generation, and Excel/PDF exports. Use tables, filters, clear status labels, and confirmation steps for consequential actions.

## Interaction and Responsive Behavior

- Make the primary registration action visible in the header and at relevant decision points. A bottom sticky action can be used on mobile only when it does not cover form controls or page content.
- Use category selectors, timelines, tabs, or accordions only when they help people compare or find information. Provide a clear selected state and keyboard operation.
- Keep motion purposeful and brief. Respect `prefers-reduced-motion`; do not make essential information depend on animation.
- On small screens, collapse navigation into a labeled menu, stack content in reading order, make category choices full-width and easy to tap, and avoid horizontal scrolling for essential information.
- Keep forms usable with a mobile keyboard: correct input types, visible labels, sensible focus order, and no sticky elements covering the active field or submit button.
- Use real links for navigation and buttons for actions. Provide visible focus, meaningful accessible names, descriptive image alt text, and WCAG-conscious contrast.
- Avoid card-heavy layouts, nested cards, decorative counters without meaning, and motion that competes with the registration task. Use full-width section bands and reserve framed cards for genuinely comparable items such as race categories or prize/inclusion details.

## Content and Data Guardrails

Treat `docs/info.txt` and organizer-confirmed updates as the source of truth. Do not invent fees, sponsor names, registration availability, payment status, event inclusions, venues, or route details.

Verify these source-note conflicts before publishing them:

- Reporting time is listed as **5:30 AM** in one place and **5:00-5:30 AM** elsewhere.
- Category eligibility is listed as 3K for ages under 14 and 60+, with 6K/10K split into 15-35 and 36-59. Confirm the rules and handling for ages 14, 35/36 boundaries, and any missing age group.
- The route is explicitly not disclosed yet. Do not create a plausible-looking route as a placeholder.
- Registration fee values and exact bib-collection venue are not confirmed in the current brief.

Use consistent formatting for dates, times, distances, and category names. Keep medical, refund, liability, and privacy wording faithful to organizer-approved terms; do not paraphrase legal commitments into new promises.

## Implementation Guidance For AI

When working in this project:

- Inspect the current React/Tailwind code and preserve existing conventions before adding a new design system.
- Keep the public website, participant dashboard, and admin dashboard as clearly separated experiences with reusable shared brand elements.
- Build real interactions and connect forms to the existing Django REST Framework APIs. Do not substitute static mock success states for registration or payment behavior.
- Keep secrets and payment verification on the server. Treat client-side payment callbacks as untrusted until verified by the backend.
- Use the existing PostgreSQL-backed data model and API contracts; do not invent endpoints or schema without checking the project.
- Make layouts responsive and accessible as part of implementation, not as a later polish pass.
- Validate changes with the narrowest relevant tests/build and check the page at desktop and mobile widths.
- Do not modify unrelated files or remove existing user work.

## Ready-To-Use Prompt

> Build or improve the NFSU Goa Marathon website for ADAMYA DHAVANAM using `docs/website_design_brief.md` and `docs/info.txt` as guidance. Use the Scaler x Wispr Flow page only as a reference for its editorial storytelling, strong light/dark contrast, concise chapter navigation, expressive typography, useful interactive sections, and persistent registration entry point. Create original marathon visuals and event-specific copy; do not copy the reference's assets or branding. Prioritize an accurate, accessible registration journey for 3K/6K/10K, clear event logistics, and trustworthy payment states. Do not invent unconfirmed event details, and do not disclose or fabricate the route. First inspect the existing code and API contracts, then implement within the project's React/Tailwind and Django REST Framework/PostgreSQL architecture. Verify desktop and mobile behavior and run the relevant checks.

## Reference Limits

This guide is based on a visual and accessibility-structure review of the public reference page on **5 November 2026**. It describes visible design and interaction patterns, not the reference site's source code, exact CSS tokens, backend behavior, or hidden implementation. Reference event dates and countdowns are time-sensitive and are not marathon requirements.