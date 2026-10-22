import { Injectable } from '@angular/core';
import { SalonService, ServiceCategory, MembershipPackage } from '../models/service.model';
import { MasterStylist } from '../models/stylist.model';
import { VerifiedTestimonial, TransformationItem } from '../models/testimonial.model';

export interface SalonFaq {
  question: string;
  answer: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class SalonDataService {
  readonly categories: ServiceCategory[] = [
    {
      id: 'all',
      name: 'All Services',
      tagline: 'Personalised hair, skin and bridal care in Bhubaneswar',
      icon: 'sparkles'
    },
    {
      id: 'hair',
      name: 'Hair & Styling',
      tagline: 'Precision haircuts, bouncy blowouts & restorative care',
      icon: 'scissors'
    },
    {
      id: 'color',
      name: 'Balayage & Colour',
      tagline: 'French balayage, glossing & root touch-ups for dark hair',
      icon: 'palette'
    },
    {
      id: 'skin',
      name: 'Skin & Aesthetics',
      tagline: 'Hydra-infusion & botanical brightening facials',
      icon: 'wand'
    },
    {
      id: 'bridal',
      name: 'Bridal & Occasion',
      tagline: 'Odisha bridal sarees, temple jewellery styling & HD makeup',
      icon: 'crown'
    },
    {
      id: 'men',
      name: 'Men’s Grooming',
      tagline: 'Bespoke cuts, beard architecture & hot towel therapy',
      icon: 'gem'
    },
    {
      id: 'spa',
      name: 'Restorative Spa',
      tagline: 'Warm basalt stones & botanical stress relief',
      icon: 'leaf'
    }
  ];

  readonly services: SalonService[] = [
    // --- 1. SIGNATURE SERVICES (Featured first on page) ---
    {
      id: 'sig-01',
      name: 'Signature Haircut & Styling',
      category: 'hair',
      price: 1200,
      durationMinutes: 60,
      shortDescription: 'Personalised scissor cut calibrated to your face shape, natural hair texture, and daily styling needs.',
      detailedDescription: 'Includes an unhurried consultation, relaxing botanical scalp wash, precision styling, and practical tips for Bhubaneswar weather.',
      benefits: ['Face-framing shape calibrated to your texture', 'Invigorating botanical scalp wash included', 'Blowout styling and practical home-care advice'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'sig-02',
      name: 'Men’s Haircut & Beard Styling',
      category: 'men',
      price: 750,
      durationMinutes: 45,
      shortDescription: 'Scissor-over-comb master cut with clean beard lineation, hot towel wrap, and nourishing beard oil.',
      detailedDescription: 'Crisp scissor work, tidy sideburn tapers, and relaxing hot towel care with organic cedarwood and argan oil.',
      benefits: ['Razor-clean contours & beard detailing', 'Relaxing warm towel service', 'Scalp detox wash included'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'sig-03',
      name: 'French Balayage & Gloss',
      category: 'color',
      price: 4200,
      durationMinutes: 180,
      shortDescription: 'Freehand dimensional surface painting creating seamless, sunlit warmth tailored to dark Indian hair.',
      detailedDescription: 'Gradual, natural-looking dimension without harsh regrowth lines, finished with a luminous pH-balancing gloss glaze.',
      benefits: ['Natural seamless grow-out with no harsh lines', 'Calibrated to your skin undertone', 'Includes conditioning gloss & blowout'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'sig-04',
      name: 'Signature Bridal Makeup & Hair',
      category: 'bridal',
      price: 14500,
      durationMinutes: 240,
      shortDescription: 'Complete traditional or contemporary bridal styling: Odisha handloom saree draping, temple jewellery setting, fresh gajra, and tear-resistant HD makeup.',
      detailedDescription: 'Crafted for timeless photography and celebration wear. Includes private suite access, personalized jewellery pinning, and touch-up kit.',
      benefits: ['Camera-ready HD finish tested under warm lighting', 'Authentic Odisha saree draping & jewellery pinning', 'Private bridal dressing suite'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'sig-05',
      name: 'Hydra-Infusion Glow Facial',
      category: 'skin',
      price: 2400,
      durationMinutes: 60,
      shortDescription: 'Painless vortex pore extraction combined with hyaluronic hydration and botanical calming serum.',
      detailedDescription: 'Gently clears environmental impurities and pollution residue while infusing deep moisture suited to Bhubaneswar humidity.',
      benefits: ['Cleanses congested pores without irritation', 'Restores natural moisture barrier', 'Ideal for Bhubaneswar humidity and dust'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'sig-06',
      name: 'Restorative Botanical Spa & Scalp Therapy',
      category: 'spa',
      price: 2200,
      durationMinutes: 60,
      shortDescription: 'Warm herbal hair mask, neck and shoulder acupressure, and heated stone massage melting daily fatigue.',
      detailedDescription: 'A quiet, sensory ritual using pure sesame, neem, and sandalwood extracts to replenish roots and calm stress.',
      benefits: ['Soothes scalp tension and dryness', 'Myofascial shoulder and neck relief', 'Aromatherapeutic warm botanical oils'],
      isSignature: true,
      isPopular: true
    },

    // --- 2. ADDITIONAL HAIR SERVICES ---
    {
      id: 'hr-02',
      name: 'Bouncy Velvet Blowout',
      category: 'hair',
      price: 850,
      durationMinutes: 45,
      shortDescription: 'High-gloss volume styling with anti-humidity shield for festive gatherings or events.',
      benefits: ['Frizz control in humid air', 'Lightweight movement and shine', 'Heat defense infusion'],
      isPopular: true
    },
    {
      id: 'hr-03',
      name: 'Botanical Keratin Rebuild',
      category: 'hair',
      price: 3800,
      durationMinutes: 120,
      shortDescription: 'Gentle formaldehyde-free amino acid smoothing that softens unruly frizz while keeping natural body.',
      benefits: ['Zero harsh formaldehyde chemicals', 'Reduces daily styling time by half', 'Lasts up to 10 weeks']
    },
    {
      id: 'hr-04',
      name: 'Deep Scalp Detox & Exfoliation',
      category: 'hair',
      price: 1100,
      durationMinutes: 40,
      shortDescription: 'Tea tree and rosemary clay scrub to unclog hair follicles and balance oily scalp conditions.',
      benefits: ['Removes product build-up', 'Cooling menthol sensation', 'Stimulates healthy follicle growth']
    },

    // --- 3. COLOUR SERVICES ---
    {
      id: 'cl-02',
      name: 'Luminous Hair Glossing',
      category: 'color',
      price: 1800,
      durationMinutes: 45,
      shortDescription: 'Translucent conditioning glaze that revives faded color and adds high reflective shine.',
      benefits: ['Ammonia-free shine boost', 'Neutralizes brassy copper tones', 'Fast 45-minute treatment']
    },
    {
      id: 'cl-03',
      name: 'Gentle Grey Coverage & Root Touch-Up',
      category: 'color',
      price: 1600,
      durationMinutes: 60,
      shortDescription: 'Complete grey coverage with botanical oils and gentle scalp protection.',
      benefits: ['No burning or chemical odor', 'Even seamless root matching', 'Scalp barrier shield included']
    },
    {
      id: 'cl-04',
      name: 'Foil Dimension Highlights',
      category: 'color',
      price: 3600,
      durationMinutes: 150,
      shortDescription: 'Fine micro-foils placing soft ribbons of caramel or hazelnut through top and crown layers.',
      benefits: ['Custom placement to frame face', 'Blended soft transition', 'Bond protector included']
    },

    // --- 4. SKIN & AESTHETICS ---
    {
      id: 'sk-02',
      name: 'Radiance Botanical D-Tan & Enzyme Peel',
      category: 'skin',
      price: 1400,
      durationMinutes: 45,
      shortDescription: 'Papaya and lactic fruit enzyme mask reversing sun tanning and environmental dullness.',
      benefits: ['Restores natural even skin tone', 'Removes dead skin without abrasive scrubbing', 'Gentle on sensitive Indian skin']
    },
    {
      id: 'sk-03',
      name: 'Clarifying Deep Pore Cleanse',
      category: 'skin',
      price: 1800,
      durationMinutes: 60,
      shortDescription: 'Targeted care for blemish-prone skin: steam softening, gentle extractions, and tea-tree pack.',
      benefits: ['Calms redness and active congestion', 'Balances excess surface oil', 'Purifying antibacterial finish']
    },
    {
      id: 'sk-04',
      name: 'Golden Radiance Occasion Facial',
      category: 'skin',
      price: 3200,
      durationMinutes: 75,
      shortDescription: 'Kunkumadi oil and botanical extract facial giving instant, photographic glow for celebrations.',
      benefits: ['Deep nourishment with ayurvedic oils', 'Instant dewy glow before weddings/events', 'Relaxing lymphatic face roll']
    },

    // --- 5. MEN’S GROOMING ---
    {
      id: 'mn-02',
      name: 'Executive Scissor Cut & Wash',
      category: 'men',
      price: 500,
      durationMinutes: 30,
      shortDescription: 'Classic haircut tailored to your natural growth pattern, finished with a cooling shampoo wash.',
      benefits: ['Clean neckline and side contours', 'Quick efficient service', 'Styling clay finish']
    },
    {
      id: 'mn-03',
      name: 'Royal Hot Towel Beard Trim',
      category: 'men',
      price: 350,
      durationMinutes: 25,
      shortDescription: 'Beard shaping, mustache trim, two warm eucalyptus towels, and hydrating post-shave balm.',
      benefits: ['Prevents ingrown hairs', 'Softens coarse beard hair', 'Relaxing warmth']
    },

    // --- 6. RESTORATIVE SPA & NAIL CARE ---
    {
      id: 'sp-02',
      name: 'Volcanic Basalt Hot Stone Back Massage',
      category: 'spa',
      price: 2400,
      durationMinutes: 60,
      shortDescription: 'Smooth heated basalt stones glide across shoulders, upper back, and lumbar to dissolve tightness.',
      benefits: ['Melt muscular stiffness', 'Promotes sound sleep', 'Warm herbal massage oil']
    },
    {
      id: 'sp-03',
      name: 'Classic Spa Pedicure with Callus Care',
      category: 'spa',
      price: 950,
      durationMinutes: 50,
      shortDescription: 'Warm salt soak, gentle heel smoothing, cooling peppermint scrub, and light foot massage.',
      benefits: ['Relieves foot fatigue', 'Softens cracked heels', 'Neat cuticle trimming']
    },
    {
      id: 'sp-04',
      name: 'Precision Manicure & Nail Care',
      category: 'spa',
      price: 750,
      durationMinutes: 40,
      shortDescription: 'Nail shaping, gentle cuticle care, hand exfoliation, and natural buffing or polish.',
      benefits: ['Clean, polished nail appearance', 'Nourishing almond cuticle oil', 'Relaxing hand massage']
    },

    // --- 7. BRIDAL CARE ---
    {
      id: 'br-02',
      name: 'Pre-Bridal Head-to-Toe Prep (Full Day)',
      category: 'bridal',
      price: 7500,
      durationMinutes: 210,
      shortDescription: 'Complete body polishing, brightening facial, hair conditioning spa, and manicure-pedicure.',
      benefits: ['Conducted 2-3 days before ceremony', 'Head-to-toe relaxation', 'Complimentary herbal tea and refreshments']
    }
  ];

  readonly stylists: MasterStylist[] = [
    {
      id: 'st-01',
      name: 'Ananya Dash',
      title: 'Creative Director & Hair Specialist',
      experienceYears: 9,
      specialties: ['Signature Haircuts', 'French Balayage', 'Hair Texture Consultations'],
      bio: 'With 9 years of dedicated salon craft across leading Indian salons, Ananya specializes in haircuts that work effortlessly with natural waves and Bhubaneswar’s humid seasons. She believes every memorable look begins with listening.',
      signatureTreatment: 'Signature Haircut & Styling',
      rating: 4.9,
      reviewCount: 88,
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      isConceptProfile: true
    },
    {
      id: 'st-02',
      name: 'Rajesh Mohanty',
      title: 'Lead Barber & Men’s Grooming Specialist',
      experienceYears: 8,
      specialties: ['Precision Scissor Cuts', 'Beard Architecture', 'Hot Towel Therapy'],
      bio: 'Rajesh brings disciplined scissor craft and relaxed hospitality to men’s grooming. Known for clean fades, natural tapers, and an unhurried hot-towel grooming experience right here in Old Town.',
      signatureTreatment: 'Men’s Haircut & Beard Styling',
      rating: 4.9,
      reviewCount: 74,
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
      isConceptProfile: true
    },
    {
      id: 'st-03',
      name: 'Priya Patnaik',
      title: 'Senior Bridal & Occasion Makeup Artist',
      experienceYears: 8,
      specialties: ['Authentic Odisha Bridal', 'Saree Draping & Jewellery Setting', 'HD Occasion Makeup'],
      bio: 'Specializing in authentic Odisha bridal traditions, Priya pairs rich handloom sarees and temple jewellery with radiant, contemporary makeup that stays flawless across long celebrations and candid photography.',
      signatureTreatment: 'Signature Bridal Makeup & Hair',
      rating: 5.0,
      reviewCount: 96,
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
      isConceptProfile: true
    },
    {
      id: 'st-04',
      name: 'Smita Mishra',
      title: 'Senior Skin & Wellness Therapist',
      experienceYears: 7,
      specialties: ['Hydrating Facials', 'Barrier Restoration', 'Botanical Peels'],
      bio: 'Smita focuses on gentle, barrier-friendly treatments calibrated to Indian skin tones. Her appointments prioritize immaculate hygiene, relaxing pressure points, and long-lasting glow without abrasive redness.',
      signatureTreatment: 'Hydra-Infusion Glow Facial',
      rating: 4.9,
      reviewCount: 65,
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80',
      isConceptProfile: true
    }
  ];

  readonly transformations: TransformationItem[] = [
    {
      id: 'tf-01',
      title: 'French Balayage & Soft Waves Gloss',
      category: 'Balayage & Styling',
      description: 'Lived-in warm caramel balayage with face-framing layers and reflective conditioning gloss on dark Indian hair.',
      beforeTag: 'Flat unshaped dark hair',
      afterTag: 'Sunlit caramel balayage & gloss',
      beforeImageUrl: 'images/hair-before.jpg',
      afterImageUrl: 'images/hair-after.jpg',
      imageUrl: 'images/hair-after.jpg',
      durationText: '3.5 hrs',
      treatmentName: 'French Balayage & Gloss',
      stylistName: 'Ananya Dash',
      isPairedComparison: true
    },
    {
      id: 'tf-02',
      title: 'Traditional Odisha Bridal Styling & Saree Draping',
      category: 'Bridal Atelier',
      description: 'Authentic crimson handloom saree draping, temple jewellery setting, fresh jasmine gajra, and tear-resistant HD makeup.',
      beforeTag: 'Pre-wedding bridal trial',
      afterTag: 'Complete traditional Odisha bridal look',
      imageUrl: 'images/odisha-bride.jpg',
      durationText: '4.0 hrs',
      treatmentName: 'Signature Bridal Makeup & Hair',
      stylistName: 'Priya Patnaik',
      isPairedComparison: false
    },
    {
      id: 'tf-03',
      title: 'Botanical Hydra-Infusion & Barrier Care',
      category: 'Skin Care',
      description: 'Pore-clearing vortex hydration and antioxidant botanical infusion restoring calm, plump radiance to tired skin.',
      beforeTag: 'Sun-dulled & congested skin',
      afterTag: 'Hydrated, calm, lit-from-within glow',
      imageUrl: 'images/facial-treatment.jpg',
      durationText: '60 mins',
      treatmentName: 'Hydra-Infusion Glow Facial',
      stylistName: 'Smita Mishra',
      isPairedComparison: false
    }
  ];

  readonly testimonials: VerifiedTestimonial[] = [
    {
      id: 'tm-01',
      clientName: 'Sneha Mohanty',
      clientRole: 'Architect',
      city: 'Saheed Nagar, Bhubaneswar',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'The haircut from Ananya was exactly what I needed—she took time to understand how my wavy hair behaves in Bhubaneswar’s monsoon humidity. The unhurried scalp wash and calm studio ambiance made the visit so refreshing.',
      verifiedTreatment: 'Signature Haircut & Styling',
      date: 'October 2026',
      isConceptSample: true
    },
    {
      id: 'tm-02',
      clientName: 'Rohan Das',
      clientRole: 'Product Designer',
      city: 'Patia, Bhubaneswar',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'Rajesh is exceptionally skilled with scissor work and beard shaping. Clean salon, zero rush, and the hot-towel treatment afterwards was top tier. Easily the best grooming experience in Old Town.',
      verifiedTreatment: 'Men’s Haircut & Beard Styling',
      date: 'September 2026',
      isConceptSample: true
    },
    {
      id: 'tm-03',
      clientName: 'Sonali Mishra',
      clientRole: 'Educator',
      city: 'Old Town, Bhubaneswar',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'Priya did my sister’s bridal saree draping and makeup for her wedding ceremony. The look felt authentic to our Odisha traditions while staying comfortable and photo-ready through the whole celebration.',
      verifiedTreatment: 'Signature Bridal Makeup & Hair',
      date: 'October 2026',
      isConceptSample: true
    }
  ];

  readonly packages: MembershipPackage[] = [
    {
      id: 'pkg-01',
      name: 'Essential Care Membership',
      tier: 'Privilege',
      monthlyPrice: 1800,
      savingsPercentage: 20,
      description: 'Designed for bi-weekly grooming, blowouts, and regular hair health upkeep.',
      features: [
        '2 Signature Haircuts or Blowouts per month',
        'Complimentary Scalp Detox wash session',
        '15% privilege discount on all additional treatments',
        'Priority weekday appointment booking'
      ],
      isBestValue: false
    },
    {
      id: 'pkg-02',
      name: 'Glow & Style Routine',
      tier: 'Atelier Reserve',
      monthlyPrice: 3800,
      savingsPercentage: 30,
      description: 'Our most balanced package for monthly skin radiance and hair maintenance.',
      features: [
        '1 Hydra-Infusion Glow Facial monthly',
        '2 Precision Haircuts or Blowouts monthly',
        '1 Spa Manicure or Callus Pedicure',
        '20% member benefit on colour & retail products',
        'Guaranteed weekend slot access with 24h notice'
      ],
      isBestValue: true,
      accentBadge: 'Most Popular'
    },
    {
      id: 'pkg-03',
      name: 'Signature Patron Club',
      tier: 'Haute Bespoke',
      monthlyPrice: 6500,
      savingsPercentage: 40,
      description: 'All-inclusive personal salon care with dedicated stylist priority and private suite access.',
      features: [
        'Unlimited Haircuts, Blowouts & Conditioning Glosses',
        'Choice of 1 Hydra Facial or Hot Stone Massage monthly',
        'Complete Hand & Foot Spa care monthly',
        'Private consultation room priority',
        'Direct WhatsApp Concierge reservation line'
      ],
      isBestValue: false
    }
  ];

  readonly faqs: SalonFaq[] = [
    {
      question: 'Where in Old Town, Bhubaneswar is VELORA Studio located?',
      answer: 'We are conveniently located in Old Town at Samantarapur, on the upper floor above Bank of Baroda, just minutes from the historic Lingaraj Temple approach road. Dedicated visitor parking is available on site.',
      category: 'Location'
    },
    {
      question: 'How do personal consultations work prior to styling?',
      answer: 'Every appointment begins with a brief 10-minute consultation. Your stylist listens to your routine, assesses your natural hair texture or skin undertone, and recommends what will work best for you in local weather.',
      category: 'Appointments'
    },
    {
      question: 'Can I book directly via WhatsApp?',
      answer: 'Yes! While our online reservation suite is instant and requires no advance payment, you are always welcome to message our concierge team directly on WhatsApp at +91 94370 00000 for consultations or group bookings.',
      category: 'Booking'
    },
    {
      question: 'What hygiene standards do you follow?',
      answer: 'We adhere to medical-grade hygiene protocols: all scissors, combs, and metal implements are sanitized in UV-C sterilizers between every guest, and fresh laundered towels and capes are provided for every client.',
      category: 'Hygiene'
    },
    {
      question: 'Is this appointment website a live production booking system?',
      answer: 'VELORA Studio is a curated portfolio design concept created for demonstration. Appointments placed here generate instant client confirmations and downloadable calendar (.ics) files without charging credit cards or sending real SMS notifications.',
      category: 'General'
    }
  ];
}
