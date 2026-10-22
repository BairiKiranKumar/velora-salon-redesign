# Comprehensive Audit: SR Salon Reference Website (srsalon.co.in)

**Audit Date:** October 2026  
**Auditor:** Research Specialist (`competitor-researcher`) & UX Lead (`ux-researcher`)  
**Reference Site:** [https://srsalon.co.in/](https://srsalon.co.in/)  
**Objective:** Deconstruct the existing architecture, service taxonomy, pricing structure, and booking workflow to establish a high-fidelity baseline and uncover design, usability, and technical opportunities for **VELORA Studio**.

---

## 1. Executive Summary

SR Salon is a commercial salon website built primarily on standard HTML/PHP with Bootstrap 5, FontAwesome, and jQuery/vanilla JavaScript calling a third-party backend API (`https://salonxo.cloud/v1/app/modules/salon/public_api/`). While functional as a local salon landing page, it suffers from severe branding fragmentation, duplicate and uncurated category taxonomy, clumsy mobile interactions, an overwhelming 193-service checkbox list, lack of responsive pricing feedback, and zero modern motion or luxury aesthetic.

---

## 2. Information Architecture & Page Structure

The current website operates as a long single-page landing site with an auxiliary `menu.php`:

| Section | Component / Content | Technical Mechanism | Key Observations |
| :--- | :--- | :--- | :--- |
| **Header / Nav** | Fixed navbar, logo icon (`fas fa-cut`), anchor navigation, 'Book Now' CTA button. | Bootstrap 5 Navbar collapse. | Basic styling, generic scissors icon, lacking brand refinement. |
| **Hero** | Background image with dark overlay, generic headline ("Welcome to SR Salon"), dual CTAs ("Book Appointment", "View Services"). | Static HTML + Bootstrap grid. | Generic Unsplash imagery, no video background, no editorial typography, standard Bootstrap buttons. |
| **About** | 2-column layout: interior photo (`unsplash/photo-1560066984-138dadb4c035`), intro copy, 4 feature bullet points (Premium Quality, Hygiene First, Expert Team, Customer Satisfaction). | Bootstrap grid + FontAwesome icons. | Cliché salon copy, lack of brand storytelling, static presentation. |
| **Services Overview** | Grid of category cards with service counts and starting prices. "Book Now" buttons filter booking step 1. | Dynamic JS rendering via `API_CONFIG`. | Confusing duplicate categories (e.g., both "Add masks" & "Addmasks", "Cleanup" & "cleanup", "D-tan" & "D-Tan"). |
| **Experts / Staff** | 5 team member cards (Lina, Rahul, Raju, Sanghamitra, Saswati) with placeholder avatar `user.jpg`. | Bootstrap grid + round avatars. | Every expert displays identical "1 years experience" and generic avatar placeholder. |
| **Gallery** | 6 static image grid with zoom icon hover overlay. | Static Unsplash stock photos. | No filtering, no before/after comparisons, no lightbox integration. |
| **Booking Flow** | 5-step interactive appointment wizard (Service → Date → Time → Details → Confirm). | Custom multi-step DOM toggling via JS classes. | Step 1 lists over 190 items with hidden/unhidden checkbox rows. Lacks search, duration totals, and cart clarity. |
| **Pricing & Packages**| 3 membership/package cards (Basic ₹255/mo, Premium ₹1,920/mo, Elite ₹77/mo). | Static Bootstrap cards. | Illogical pricing (Elite ₹77/mo vs Premium ₹1,920/mo), inconsistent feature matrices. |
| **Testimonials** | Bootstrap carousel featuring 3 reviews (Jessica, Amanda, Rachel). | Bootstrap 5 Carousel. | Generic stock photos and testimonials, no verified client badges or rating metrics. |
| **Contact & Map** | Contact details (Samantarapur, Bhubaneswar - 751002, +91 987456321) + Google Maps embed. | Static HTML + Google Maps iFrame. | Clear contact data, but phone number format is incomplete (+91 987456321 is 9 digits). |
| **Footer** | 4 columns: About, Quick Links, Services, Newsletter/Contact. | Bootstrap 5 footer. | Standard footer, lacks modern elegance and social media richness. |

---

## 3. Service Taxonomy & Pricing Audit

The current site exposes 193 distinct services across 20 raw categories. An analysis of the data reveals significant taxonomy issues:

### A. Raw Categories Identified:
1. `Add masks` (3 services, ₹400 - ₹500)
2. `Addmasks` (3 services, ₹400 - ₹500) *[Duplicate of #1]*
3. `Cleanup` (5 services, ₹700 - ₹1,500)
4. `cleanup` (4 services, ₹700 - ₹1,500) *[Duplicate of #3]*
5. `color` (16 services, ₹200 - ₹4,000)
6. `D-tan` (9 services, ₹300 - ₹3,000)
7. `D-Tan` (12 services, ₹200 - ₹800) *[Duplicate of #6]*
8. `Facial` (29 services, starting ₹500+)
9. `Groom makeup` (1 service, ₹4,000)
10. `Hair` (10 services, ₹100 - ₹350)
11. `Hair and styling` (10 services, ₹200 - ₹900) *[Overlaps with #10]*
12. `Hair spa` (9 services, ₹300 - ₹1,200)
13. `Hair treatment` (18 services, ₹1,000 - ₹6,000)
14. `Makeup` (10 services, ₹500 - ₹15,000)
15. `Manicure` (7 services, ₹200 - ₹1,000)
16. `massage` (8 services, ₹500 - ₹3,500)
17. `Pedicure` (11 services, ₹200 - ₹1,500)
18. `Rica wax` (10 services, ₹200 - ₹3,000)
19. `Threading and piercing` (9 services, ₹30 - ₹600)
20. `Waxing` (9 services, ₹50 - ₹700) *[Overlaps with #18]*

### B. Strategic Deficiencies in Taxonomy:
- **Redundancy & Case Sensitivity Bugs:** Casing discrepancies ("Cleanup" vs "cleanup", "D-tan" vs "D-Tan", "Add masks" vs "Addmasks") pollute the UI and confuse clients.
- **Cognitive Overload:** Exposing 193 raw checkboxes with a manual "View More Services" button forces infinite scrolling and friction.
- **Uncurated Presentation:** Services range from a ₹30 threading to a ₹15,000 bridal package without tiering, description tags, or curation.

---

## 4. Deep Dive: Booking Flow Mechanics & UX Friction

The booking funnel consists of 5 sequential steps:
1. **Step 1: Select Service(s)**
   - *Current Implementation:* Checkbox list with data attributes (`data-price`, `data-duration`). A category filter banner appears only if entered from a category card.
   - *Friction Points:* No live price calculator, no running time summary, no search bar, and clicking "View More Services" shows an unsegmented wall of 190 items.
2. **Step 2: Select Date**
   - *Current Implementation:* Native HTML5 `<input type="date">`.
   - *Friction Points:* No custom luxury calendar, no visual indication of salon closed days, no past-date visual blocking until submission.
3. **Step 3: Select Time Slot**
   - *Current Implementation:* Dynamic pill grid generated via JS based on selected date.
   - *Friction Points:* Disabled buttons provide no explanation of stylist capacity or salon operating hours.
4. **Step 4: Customer Details**
   - *Current Implementation:* Name, Phone, Email, Special Requests.
   - *Friction Points:* Phone field does not validate Indian 10-digit mobile standards; no live inline validation before clicking "Next".
5. **Step 5: Confirmation & Summary**
   - *Current Implementation:* Static summary card showing chosen service, total, date, time, and customer info. Clicking "Confirm" dispatches a POST request to `api/booking.php`.
   - *Friction Points:* No booking reference ID, no calendar invite (.ics) download, no clear demo sandbox badge.

---

## 5. Performance, Accessibility & Design Critique

1. **Visual Aesthetics:** Standard Bootstrap 5 template aesthetic with primary blue `#0d6efd` and basic cards. It fails to evoke the sensory, luxurious, and pampered atmosphere of an elite salon.
2. **Typography:** Uses Playfair Display + Poppins, but line heights, tracking, and hierarchy feel crowded and generic.
3. **Accessibility (WCAG 2.2 AA):**
   - Low contrast on secondary muted text `#6c757d` on light gray backgrounds.
   - Form inputs lack programmatic labels with explicit `aria-describedby` error bindings.
   - Dynamic step changes do not announce step transitions via `aria-live="polite"`.
4. **Mobile Responsiveness:**
   - 193 checkboxes create enormous vertical DOM scrolling on mobile screens.
   - Table-like booking summaries overflow small screens.

---

## 6. Transformation Blueprint for VELORA Studio

| Dimension | SR Salon (Current Baseline) | VELORA Studio (New Standard) |
| :--- | :--- | :--- |
| **Brand Identity** | Generic suburban salon template | Fictional high-fashion luxury studio ("The Art of Refined Beauty") |
| **Palette** | Bootstrap Blue, Light Gray, White | Velvet Noir (`#0B0C10`), Champagne Gold (`#D4AF37`), Alabaster (`#F8F6F0`), Deep Charcoal (`#1A1C23`) |
| **Typography** | Generic Google Fonts pairing | Editorial luxury: *Cormorant Garamond* (headings) + *Plus Jakarta Sans* (refined UI body) |
| **Service Catalog** | 193 uncurated, redundant checkboxes | 6 curated Haute Collections with category pills, search bar, duration tags, and detail accordions |
| **Booking Engine** | Clunky 5-step form with no real-time feedback | Cinematic 4-step interactive booking suite with live cart, time accumulator, VIP stylist selection, and instant demo confirmation modal |
| **Architecture** | PHP + Bootstrap + jQuery | Angular 19 Standalone Components, Signals, Reactive Forms, SCSS design tokens, GSAP micro-animations |
| **Proof & Trust** | 3 static fake reviews, placeholder staff | Editorial client testimonials, curated master stylist dossiers, and transparent consultation protocols |
