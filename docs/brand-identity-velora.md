# Brand Identity & Creative Direction: VELORA Studio

**Author:** Creative Director (`creative-director`) & UI Designer (`ui-designer`)  
**Brand Concept:** VELORA Studio  
**Positioning:** Haute Coiffure, Dermatological Skin Rituals & Editorial Styling  
**Target Audience:** Modern professionals, discerning beauty connoisseurs, and bridal clientele seeking bespoke, high-touch salon artistry in a serene, architectural sanctuary.

---

## 1. Brand Essence & Voice

### A. The Core Manifesto
> *"Beauty is not merely styled; it is sculpted with intention, science, and artistry."*

VELORA Studio departs completely from the generic, transactional strip-mall salon experience. Every appointment is conceived as an unhurried, private ritual where personalized consultations precede every scissor stroke and bespoke pigment blend.

### B. Tone of Voice Guidelines
- **Elevated yet Welcoming:** Sophisticated and poetic without ever sounding aloof or intimidating.
- **Evidence-Backed Precision:** Explaining the *why* behind hair and skin treatments (e.g., pH balance, botanical peptides, micro-molecular hydration).
- **Format Discipline:** Clean Indian English, prices formatted in INR (`₹`), clear duration indicators, zero corporate clichés or exaggerated claims.
- **No Em Dashes:** Strict compliance with agentForge style guidelines.

---

## 2. Visual Identity & Design System

### A. Color Architecture
The palette marries the deep intimacy of an editorial atelier with the warmth of champagne gold and luminous ivory:

```scss
// Primary Canvas & Neutrals
$velora-noir:        #0B0C10; // Deepest background tone
$velora-surface:     #14161D; // Card backgrounds and modal containers
$velora-surface-alt: #1D212B; // Hover and active card states
$velora-border:      rgba(212, 175, 55, 0.15); // Delicate gold hairline borders
$velora-border-focus:#D4AF37; // Focused interactive border

// Luxury Accents
$velora-gold:        #D4AF37; // Signature champagne metallic
$velora-gold-hover:  #ECC86E; // Illuminated hover state
$velora-gold-subtle: rgba(212, 175, 55, 0.08); // Tinted badge backgrounds
$velora-rose-gold:   #E2A782; // Warm secondary accent for bridal / spa highlights

// Typography & Content
$velora-cream:       #FDFBF7; // Primary high-contrast text on dark backgrounds
$velora-pearl:       #E0DDD5; // Secondary headlines
$velora-muted:       #9E9EA7; // Captions, duration tags, and metadata
$velora-success:     #4ADE80; // Demo booking confirmation & active indicators
$velora-error:       #F87171; // Form field validation
```

### B. Typography Hierarchy
- **Primary Display & Headings:** `Cormorant Garamond` (Google Font: weights 400, 600, 700). High-fashion editorial serif with generous tracking and sculpted ligatures.
- **UI, Navigation & Body:** `Plus Jakarta Sans` (Google Font: weights 300, 400, 500, 600, 700). Ultra-clean geometric sans providing crisp legibility across mobile viewports, tabular data, and booking forms.

---

## 3. Curated Service Collections

Replacing SR Salon's raw, duplicated 193-service list with 6 curated collections designed for intuitive browsing, category filtering, and instant booking selection:

| Collection ID | Collection Title | Scope & Highlights | Price Range (INR) | Duration Span |
| :--- | :--- | :--- | :--- | :--- |
| `coiffure` | **Haute Coiffure & Styling** | Precision Architectural Cuts, Velvet Blowouts, Texture Waves, Scalp Peeling | ₹600 – ₹2,200 | 45m – 90m |
| `color` | **Couture Hair Colouring** | French Balayage, Luminous Glossing, Multi-Dimensional Highlights, Root Melts | ₹1,500 – ₹6,500 | 60m – 180m |
| `aesthetics` | **Dermatological Facials** | 24K Gold Cellular Lift, Hydra-Glow Infusion, Pure O3+ Detox, Botanical Purify | ₹1,200 – ₹4,500 | 45m – 75m |
| `rituals` | **Holistic Spa & Body** | Hot Basalt Stone Calm, Deep Tissue Kinetic Therapy, Aromatherapy Release | ₹1,500 – ₹4,200 | 60m – 90m |
| `hands-feet` | **Hand & Foot Couture** | Russian Precision Manicure, Marine Collagen Pedicure, Paraffin Bath Infusion | ₹700 – ₹2,400 | 45m – 75m |
| `bridal` | **Bridal & Red Carpet** | Royal Bespoke Bridal Glamour, High-Definition Airbrush, Groom Couture Styling | ₹4,500 – ₹22,000 | 90m – 240m |

---

## 4. Master Stylists & Resident Artisans

1. **Aria Vance** – *Creative Director & Master Colorist* (12+ years experience. Specializes in French Balayage and transformative hair reconstruction).
2. **Kavya Sen** – *Lead Aesthetician & Derma Specialist* (9+ years experience. Certified in medical Hydra-dermabrasion and non-invasive glow therapies).
3. **Marcus Thorne** – *Senior Barber & Hair Sculptor* (8+ years experience. Master of classic British scissoring and architectural beard shaping).
4. **Zoya Qureshi** – *Haute Bridal & Red Carpet Artist* (10+ years experience. Celebrity bridal artisan recognized for luminous editorial finishes).

---

## 5. UI & Interaction Principles

1. **Cinematic Ambient Lighting:** Gentle gradient orbs (`radial-gradient`) in champagne and deep amber behind dark glassmorphic cards (`backdrop-filter: blur(16px)`).
2. **Micro-Interactions with GSAP:** Smooth element reveals upon scrolling with staggered transitions.
3. **Cart & Duration Accumulator:** Reactive dynamic total investment and duration computation as services are selected.
4. **Transparent Demo Confirmation:** Clearly labeled demo confirmation modal featuring booking reference code (e.g. `#VEL-8924`), selected slot, breakdown, and "Save to Calendar (.ics)" trigger. Zero real external APIs called.
