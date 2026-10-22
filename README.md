# VELORA Studio &bull; Haute Coiffure, Derma Aesthetics & Bridal Atelier

[![Angular 19](https://img.shields.io/badge/Angular-19.2-DD0031.svg?style=flat&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/Style-SCSS%20Design%20Tokens-CC6699.svg?style=flat&logo=sass)](https://sass-lang.com)
[![WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-059669.svg?style=flat)](https://www.w3.org/WAI/WCAG22/quickref/)
[![Build Status](https://img.shields.io/badge/Build-Passing%20(450KB)-success)](https://angular.dev)

> **PROJECT 01: VELORA Studio Redesign**  
> Fictional portfolio concept redesign for a luxury beauty atelier based in Old Town, Bhubaneswar.  
> Source Reference Audit: [https://srsalon.co.in/](https://srsalon.co.in/)  
> AI Team Framework: [agentForge](https://github.com/BairiKiranKumar/agentForge.git)

---

## 1. Project Overview & Aesthetic Direction

VELORA Studio is an elevated luxury salon concept designed to replace generic, transactional booking pages with an unhurried, editorial beauty sanctuary experience:

- **Original Brand Identity:** Velvet Noir (`#0A0B0E`), Champagne Gold (`#D4AF37`), Alabaster Ivory (`#FDFBF7`), and Rose Gold accents.
- **Editorial Typography:** Classic serif headings (*Cormorant Garamond*) paired with crisp modern sans-serif body (*Plus Jakarta Sans*).
- **Curated Menu Taxonomy:** 6 Haute Collections (*Haute Coiffure*, *Couture Colour*, *Derma Aesthetics*, *Restorative Spa*, *Hand & Foot Couture*, *Bridal Atelier*) replacing raw, duplicate category listings.
- **Signals-Driven Architecture:** Fine-grained reactivity powered by Angular 19 Signals (`signal`, `computed`, `effect`), reactive forms, and dynamic duration/pricing calculations.
- **Interactive 4-Step Booking Suite:** Fully functional frontend booking flow with service selection, real-time cart accumulator, 14-day schedule selector, guest dossier validation, and sandboxed demo confirmation modal with `.ics` calendar generation.

---

## 2. Documentation & Research Deliverables

All audit findings, brand definitions, implementation specifications, and QA reports are documented in the `docs/` directory:

- [docs/audit-srsalon.md](file:///c:/Projects/salon%20website/velora-salon-redesign/docs/audit-srsalon.md) – Full audit of reference site `srsalon.co.in` (193 services, 5-step funnel, usability friction points, casing bugs).
- [docs/brand-identity-velora.md](file:///c:/Projects/salon%20website/velora-salon-redesign/docs/brand-identity-velora.md) – Original brand manifesto, color tokens, typography scale, master stylist profiles.
- [docs/implementation-plan.md](file:///c:/Projects/salon%20website/velora-salon-redesign/docs/implementation-plan.md) – Technical blueprint, component tree, and Signals reactive state store.
- [docs/qa-report.md](file:///c:/Projects/salon%20website/velora-salon-redesign/docs/qa-report.md) – Independent QA report covering WCAG 2.2 AA accessibility, bundle size budgets, and booking verification.
- [docs/aws-deployment-plan.md](file:///c:/Projects/salon%20website/velora-salon-redesign/docs/aws-deployment-plan.md) – Enterprise AWS deployment architecture (S3 + CloudFront OAC + Route 53; execution gate held for approval).
- [docs/execution-report.md](file:///c:/Projects/salon%20website/velora-salon-redesign/docs/execution-report.md) – AgentForge execution waves report with verified criteria.

---

## 3. Technology Stack

- **Core:** Angular 19 (Standalone Components, `provideRouter`, `app.config.ts`)
- **Language:** TypeScript 5.7+ (`strict: true`)
- **Styling:** Vanilla SCSS with CSS Custom Properties and design tokens (No Tailwind CSS)
- **Forms:** Typed Reactive Forms (`FormBuilder`, `FormGroup`, custom regex validators)
- **State:** Angular Signals (`BookingService`)
- **Motion:** Micro-interactions with GPU-accelerated CSS and GSAP 3

---

## 4. Getting Started Locally

### Prerequisites
- Node.js >= 18.19.1 (tested on Node v24.21.0)
- npm >= 9.0.0

### Installation
```bash
git checkout feat/velora-salon-redesign
npm install
```

### Run Local Development Server
```bash
npm start
# Server starts at http://localhost:4200/
```

### Production Build
```bash
npm run build
# Compiles to dist/velora-salon/browser
```

---

## 5. Booking Flow Demonstration Notice

This website is a portfolio concept demonstration. Submitting appointments through the booking suite produces a realistic confirmation receipt, unique booking reference code (`VEL-XXXX-BLR`), and downloadable `.ics` calendar invitation in memory. No financial transactions are processed, and no real customer communications or external SMS messages are dispatched.
