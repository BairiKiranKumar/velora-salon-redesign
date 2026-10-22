# Engineering Implementation Plan: VELORA Studio

**Author:** Technical Lead & Frontend Architect (`frontend-architect` / `angular-specialist`)  
**Project:** VELORA Studio – Luxury Hair, Skin & Bridal Salon  
**Target Git Branch:** `feat/velora-salon-redesign`  
**Execution Order:** Research → Brand → Design → Angular UI → Interactions → QA → Deployment preparation  

---

## 1. Technical Stack & Architectural Architecture

- **Framework:** Angular 19 (Standalone Components, Signals, `app.config.ts`, Zoneless/Fine-grained reactivity ready).
- **Language:** TypeScript 5.6+ with `strict: true`.
- **Styling Architecture:** Pure SCSS with modular design tokens (`_variables.scss`, `_mixins.scss`, `_typography.scss`), CSS Custom Properties, and responsive flex/grid layouts.
- **Motion & Micro-interactions:** GSAP 3 (GreenSock Animation Platform) for smooth scroll reveals, hero parallax, counter interpolations, and drawer transitions.
- **Iconography:** Bespoke inline luxury SVG iconography for crisp retina rendering and zero external font or icon pack render-blocking.
- **Data Flow & State Management:** Angular Signals (`signal`, `computed`, `effect`) for instantaneous reactive price calculation, service selection, and slot availability.

---

## 2. Component Hierarchy & Modular Structure

```text
src/app/
├── core/
│   ├── models/
│   │   ├── service.model.ts        # Service, Category, Duration, Price tiering
│   │   ├── booking.model.ts        # BookingState, Step, CustomerDetails, DemoConfirmation
│   │   ├── stylist.model.ts        # Stylist profile, specialties, availability
│   │   └── testimonial.model.ts    # Verified review model
│   └── services/
│       ├── salon-data.service.ts   # Curated service catalog, master stylists, packages
│       └── booking.service.ts      # Reactive Signals store for multi-step appointment wizard
├── shared/
│   ├── components/
│   │   ├── luxury-button/          # Reusable gold-foil & outline button
│   │   ├── section-header/         # Reusable editorial serif eyebrow & title
│   │   └── modal-dialog/           # Accessible dialog backdrop with ESC & focus trapping
├── features/
│   ├── header/                     # Glassmorphic fixed navigation, brand badge, quick book trigger
│   ├── hero/                       # Cinematic editorial hero with floating accolades & CTAs
│   ├── brand-story/                # About the atelier, philosophy, 4 craft pillars
│   ├── collections/                # Curated service catalog with category tabs, search & card drawers
│   ├── packages/                   # VIP membership & curated ritual bundles
│   ├── stylists/                   # Master resident stylists with specialties & experience
│   ├── transformations/            # Editorial visual gallery with category filtering
│   ├── booking/                    # Interactive 4-step appointment suite (Service → Slot → Details → Confirm)
│   ├── reviews/                    # Client testimonials with verified badges & rating stars
│   ├── concierge/                  # Location details, opening hours, interactive FAQ accordion
│   └── footer/                     # Architectural luxury footer with brand mark & newsletter mockup
└── app.component.ts                # Root container orchestrating sections & floating appointment tray
```

---

## 3. End-to-End Booking Suite Specification

The booking suite is engineered as both an inline section (`#booking`) and an accessible slide-over/modal drawer triggered from any "Book Appointment" CTA on the page.

### The 4-Step Interactive Funnel:
1. **Step 1: Curated Service Selection**
   - Filter by collection pill (`All`, `Coiffure`, `Colour`, `Aesthetics`, `Rituals`, `Hands & Feet`, `Bridal`).
   - Live real-time search input for rapid service discovery.
   - Dynamic service card with checkbox toggle.
   - *Signals Reactive Engine:* As services are selected, a persistent summary pill immediately calculates total investment (`₹2,400`) and cumulative duration (`1h 45m`).
2. **Step 2: Master Stylist & Date/Time Scheduling**
   - Optional selection of preferred Master Stylist (or "First Available Specialist").
   - Bespoke interactive date picker showing next 14 available days with visual indications of salon hours.
   - Dynamic morning, afternoon, and evening time slot pills (e.g., `10:00 AM`, `11:30 AM`, `02:00 PM`, `04:30 PM`, `06:00 PM`).
3. **Step 3: Client Dossier & Special Requests**
   - Typed Reactive Form with strict validation:
     - Full Name (required, min 3 chars).
     - Indian Mobile Number (10 digits with regex check `^[6-9]\d{9}$`).
     - Email Address (valid RFC standard).
     - Consultation Notes / Allergies (optional).
4. **Step 4: Review & Demo Confirmation Modal**
   - Itemized luxury invoice receipt breakdown.
   - Explicit demo notification badge: `[DEMO APPOINTMENT: No payment charged, no external SMS dispatched]`.
   - Unique generated appointment identifier (e.g. `VEL-9241-BLR`).
   - Instant action buttons: "Add to Calendar (.ics download)", "Book Another Ritual", or "Print Summary".

---

## 4. Verification & QA Protocol

Per agentForge standards, independent specialist review agents will validate each domain before marking the project complete:
- **`accessibility-tester`:** WCAG 2.2 AA audit covering keyboard navigability (Tab/Shift-Tab, ESC to dismiss modals), focus trap in booking modal, contrast ratios on gold/dark surfaces (minimum 4.5:1 for body text, 3:1 for large display), form labels, and ARIA live regions for step transitions.
- **`performance-engineer`:** Bundle size audit via Angular production build, zero layout shift (CLS), CSS hardware acceleration for GSAP transitions, optimized image assets.
- **`code-reviewer` / `qa-lead`:** Production build verification (`ng build --configuration production`), strict TypeScript compliance, zero console warnings, end-to-end user booking flow check.
