# Before vs. After: Hide Built-In Registration Section & Login Portals (Google Form Transition)

## Overview
Because participant registration is moving to an external **Google Form**, the built-in `#register` form section and all portal login entry points (Runner / Participant Login, Admin Console / Dashboard) have been hidden across the landing page without deleting the underlying component files (`RegistrationForm.jsx`, `ParticipantDashboard.jsx`, `AdminDashboard.jsx`).

All active `"Register"` / `"Register Now"` CTAs now route through a shared `openRegistration()` helper backed by `EVENT.googleFormUrl` in `frontend/src/data/eventData.js` (falling back to `#contact` until the Google Form URL is populated).

---

## 1. Central Config & Registration Helper — `frontend/src/data/eventData.js`

### Google Form URL & `openRegistration()` Helper
- **Before:**
  `EVENT` had no external Google Form URL field, and CTA buttons scrolled directly to `#register`.
  ```js
  export const EVENT = {
    name: 'Adamya Dhāvanam',
    ...
    website: 'nfsugoamarathon.in',
    date: '6 December 2026',
    ...
  };
  ```
- **After:**
  Added `EVENT.googleFormUrl` and a shared `openRegistration(e)` helper exported from `eventData.js`:
  ```js
  export const EVENT = {
    name: 'Adamya Dhāvanam',
    ...
    website: 'nfsugoamarathon.in',
    // Set your Google Form URL here when live (e.g. 'https://forms.gle/...')
    googleFormUrl: '',
    date: '6 December 2026',
    ...
  };

  export function openRegistration(e) {
    if (e?.preventDefault) e.preventDefault();
    if (EVENT.googleFormUrl) {
      window.open(EVENT.googleFormUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  ```

### FAQ Copy Update (`FAQS` -> `Registration` -> `'How do I register?'`)
- **Before:**
  `'Select your category (3K / 6K / 10K), fill in your details, upload ID proof if you are under 18, and complete payment online. You will receive a confirmation SMS and email with your Registration ID within 5 minutes.'`
- **After:**
  `'Registrations are handled via our official Google Form. Select your category (3K / 6K / 10K), fill in your participant details, upload ID proof if required, and follow the instructions in the form.'`

---

## 2. Main App Shell — `frontend/src/App.jsx`

- **Before:**
  - Unconditionally switched views to `<ParticipantDashboard />` or `<AdminDashboard />` when `currentView` was `'participant'` or `'admin'`.
  - Unconditionally rendered `<RegistrationForm onOpenPortal={(portal) => setCurrentView(portal)} />` between `<Categories />` and `<Schedule />`.
  - Passed `(portal) => setCurrentView(portal)` to `<Navbar />` and `<CinematicFooter />`.
- **After:**
  - Added top-level feature flags:
    ```js
    const SHOW_PORTALS = false;
    const SHOW_BUILT_IN_REGISTRATION = false;
    ```
  - Guarded `ParticipantDashboard` and `AdminDashboard` views behind `SHOW_PORTALS`.
  - Guarded `<RegistrationForm />` behind `{SHOW_BUILT_IN_REGISTRATION && (<RegistrationForm onOpenPortal={handleOpenPortal} />)}` so the `#register` section is hidden while preserving the component file.
  - Passes `handleOpenPortal` (`undefined` when `SHOW_PORTALS` is `false`).

---

## 3. Top Navigation Bar — `frontend/src/components/Navbar.jsx`

- **Before:**
  - Desktop header rendered **Runner Login** (`onOpenPortal?.('participant')`) and **Admin** (`onOpenPortal?.('admin')`) buttons alongside **Register** (`href="#register"`).
  - Mobile drawer rendered a 2-column grid with **Runner Portal** and **Admin Console** buttons above **Register Now** (`href="#register"`).
  - Imported unused `User` and `Shield` icons for those buttons.
- **After:**
  - Removed `Runner Login`, `Admin`, `Runner Portal`, and `Admin Console` buttons from desktop and mobile menus, along with unused `User` and `Shield` imports.
  - Updated desktop **Register** and mobile **Register Now** links to use `EVENT.googleFormUrl || '#contact'` and `openRegistration`.

---

## 4. Hero Section CTA — `frontend/src/components/Hero.jsx`

- **Before:**
  ```jsx
  <a
    href="#register"
    onClick={(e) => {
      e.preventDefault();
      document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
    }}
    ...
  >
    Register Now
  ```
- **After:**
  ```jsx
  <a
    href={EVENT.googleFormUrl || '#contact'}
    target={EVENT.googleFormUrl ? '_blank' : undefined}
    rel={EVENT.googleFormUrl ? 'noopener noreferrer' : undefined}
    onClick={openRegistration}
    ...
  >
    Register Now
  ```

---

## 5. Categories Section CTAs — `frontend/src/components/Categories.jsx`

- **Before:**
  `handleRegister(categoryId)` scrolled to `#register` and dispatched `selectCategory` for the built-in form.
- **After:**
  `handleRegister()` calls `openRegistration()` imported from `../data/eventData`.

---

## 6. Curtain-Reveal Footer — `frontend/src/components/ui/motion-footer.tsx`

- **Before:**
  - Primary pill actions included **Register Now (3K · 6K · 10K)** (`scrollToSection('#register')`) and **Runner Portal & e-Bib** (`onOpenPortal?.('participant')`).
  - Bottom utility pills included **Admin Console** (`onOpenPortal?.('admin')`).
- **After:**
  - Removed **Runner Portal & e-Bib** and **Admin Console** buttons completely from the footer UI.
  - Wired **Register Now (3K · 6K · 10K)** pill to `EVENT.googleFormUrl || '#contact'` and `openRegistration`.

---

## 7. Legacy Footer Component — `frontend/src/components/Footer.jsx`

- **Before:**
  Rendered a **Portals** column containing **Participant Portal** (`onOpenPortal('participant')`), **Admin Dashboard** (`onOpenPortal('admin')`), and **Register as Runner** (`href="#register"`), using the `Shield` icon.
- **After:**
  Removed **Participant Portal** and **Admin Dashboard** buttons (and unused `Shield` import), renamed column to **Registration**, and updated **Register as Runner** to use `EVENT.googleFormUrl || '#contact'` and `openRegistration`.

---

## Verification
- Executed `npm run build` inside `frontend/`:
  - `2074 modules transformed`
  - Built in `689ms` with exit code `0` (`dist/index.html`, `dist/assets/index-BIQXwsDb.css`, `dist/assets/index-DXFvaE1r.js`).

## How to Add Your Google Form Link
1. Open `frontend/src/data/eventData.js`.
2. Set `googleFormUrl: 'https://forms.gle/YOUR_FORM_ID'` inside `export const EVENT`.
3. All **Register** / **Register Now** buttons across the Navbar, Hero, Categories, and Footer will automatically open your Google Form in a new tab.

