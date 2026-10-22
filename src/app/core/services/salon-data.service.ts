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
      name: 'All Collections',
      tagline: 'Complete portfolio of bespoke atelier rituals',
      icon: 'sparkles'
    },
    {
      id: 'coiffure',
      name: 'Haute Coiffure',
      tagline: 'Architectural precision haircuts & sculpting',
      icon: 'scissors'
    },
    {
      id: 'color',
      name: 'Couture Colour',
      tagline: 'French balayage, glossing & multi-dimensional light',
      icon: 'palette'
    },
    {
      id: 'aesthetics',
      name: 'Derma Aesthetics',
      tagline: 'Clinical hydration & 24K cellular renewal',
      icon: 'wand'
    },
    {
      id: 'rituals',
      name: 'Restorative Spa',
      tagline: 'Holistic basalt massage & kinetic stress release',
      icon: 'leaf'
    },
    {
      id: 'hands-feet',
      name: 'Hand & Foot Couture',
      tagline: 'Russian precision manicures & marine pedicures',
      icon: 'gem'
    },
    {
      id: 'bridal',
      name: 'Bridal Atelier',
      tagline: 'High-definition couture glamour & royal styling',
      icon: 'crown'
    }
  ];

  readonly services: SalonService[] = [
    // --- Haute Coiffure ---
    {
      id: 'hc-01',
      name: 'Atelier Signature Scissor Sculpt',
      category: 'coiffure',
      price: 1800,
      durationMinutes: 60,
      shortDescription: 'Custom architectural haircut tailored to facial geometry and natural texture.',
      detailedDescription: 'Includes botanical scalp consultation, cleansing wash with French lavender essences, blow-dry finish, and bespoke styling tips.',
      benefits: ['Bespoke face-framing symmetry', 'Scalp detox wash included', 'Long-lasting texture retention'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'hc-02',
      name: 'Velvet Silk Blowout & Thermal Glaze',
      category: 'coiffure',
      price: 1200,
      durationMinutes: 45,
      shortDescription: 'High-gloss volume styling with Italian argan seal and anti-humidity shield.',
      detailedDescription: 'Designed for gala events and long-lasting glass-hair brilliance without weighing down strands.',
      benefits: ['72-hour frizz protection', 'Diamond light reflection', 'Heat defense infusion'],
      isPopular: true
    },
    {
      id: 'hc-03',
      name: 'Botanical Keratin Infusion & Rebuild',
      category: 'coiffure',
      price: 4500,
      durationMinutes: 120,
      shortDescription: 'Deep protein micro-molecular bonding treatment to restore chemically stressed hair.',
      detailedDescription: 'Formaldehyde-free organic amino acid formula restores natural elasticity, shine, and silkiness.',
      benefits: ['Zero harsh chemicals', 'Repairs split cortical bonds', 'Lasts up to 12 weeks'],
      isSignature: true
    },
    {
      id: 'hc-04',
      name: 'Gentlemen Bespoke Cut & Beard Architecture',
      category: 'coiffure',
      price: 1100,
      durationMinutes: 45,
      shortDescription: 'Scissor-over-comb master cut with hot towel beard lineation and oil massage.',
      benefits: ['Razor-sharp contours', 'Organic cedarwood beard nourishment', 'Invigorating scalp wash'],
      isPopular: true
    },

    // --- Couture Colour ---
    {
      id: 'cc-01',
      name: 'Parisian Sun-Kissed Balayage',
      category: 'color',
      price: 5200,
      durationMinutes: 180,
      shortDescription: 'Freehand French surface painting for seamless, lived-in multi-tonal radiance.',
      detailedDescription: 'Handcrafted tonal blending calibrated to skin undertones with bond-protecting oligo-elements.',
      benefits: ['Zero harsh regrowth lines', 'Personalized tone calibration', 'Includes gloss toner and blow-dry'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'cc-02',
      name: 'Luminous Acidic French Glossing',
      category: 'color',
      price: 2400,
      durationMinutes: 60,
      shortDescription: 'Translucent conditioning glaze providing mirrorshine color refreshment.',
      benefits: ['pH-balancing technology', 'Instant reflective gloss', 'Neutralizes unwanted brassiness'],
      isPopular: true
    },
    {
      id: 'cc-03',
      name: 'Ammonia-Free Velvet Root Restoration',
      category: 'color',
      price: 2200,
      durationMinutes: 75,
      shortDescription: '100% gentle grey coverage with organic botanical oils and deep scalp comfort.',
      benefits: ['Zero scalp irritation or ammonia odor', 'Velvet pigment saturation', 'Botanical oil barrier']
    },
    {
      id: 'cc-04',
      name: 'Avant-Garde Dimension & Foil Highlights',
      category: 'color',
      price: 4800,
      durationMinutes: 150,
      shortDescription: 'Micro-weave foils creating shimmering contrast, depth, and illumination.',
      benefits: ['Precision placement', 'Custom dual-tone dimension', 'Bond-building treatment included']
    },

    // --- Derma Aesthetics ---
    {
      id: 'da-01',
      name: '24K Aurum Cellular Lift Facial',
      category: 'aesthetics',
      price: 3800,
      durationMinutes: 75,
      shortDescription: 'Precious colloidal gold leaf and peptide infusion stimulating collagen synthesis.',
      detailedDescription: 'Includes sonic cleansing, mild enzymatic peel, lymphatic drainage roller massage, and 24K gold membrane seal.',
      benefits: ['Immediate contour firming', 'Luminous lit-from-within glow', 'Cellular oxidation defense'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'da-02',
      name: 'Hydra-Vortex Micro-Infusion Treatment',
      category: 'aesthetics',
      price: 2900,
      durationMinutes: 60,
      shortDescription: 'Painless vortex pore extraction combined with multi-weight hyaluronic acid hydration.',
      benefits: ['Unclogs congested pores without redness', 'Plumps fine dehydration lines', 'Zero downtime'],
      isPopular: true
    },
    {
      id: 'da-03',
      name: 'Pure O3+ Derma Clarifying Detox',
      category: 'aesthetics',
      price: 2200,
      durationMinutes: 60,
      shortDescription: 'Medical-grade oxygenated purifying ritual for blemish-prone and stressed skin.',
      benefits: ['Deep bacterial neutralization', 'Calms inflammation and redness', 'Balances sebum production']
    },
    {
      id: 'da-04',
      name: 'Radiance Botanical D-Tan & Brightening Peel',
      category: 'aesthetics',
      price: 1600,
      durationMinutes: 45,
      shortDescription: 'Gentle fruit enzyme and milk protein blend reversing sun damage and hyperpigmentation.',
      benefits: ['Evening skin tone', 'Removes dead cellular debris', 'Gentle on sensitive Indian skin']
    },

    // --- Restorative Spa ---
    {
      id: 'rs-01',
      name: 'Volcanic Basalt Hot Stone Equilibrium',
      category: 'rituals',
      price: 3200,
      durationMinutes: 75,
      shortDescription: 'Heated volcanic stones glide over energetic meridians melting chronic muscular tension.',
      detailedDescription: 'Infused with warm sandalwood and ylang-ylang organic oils to soothe nervous system fatigue.',
      benefits: ['Deep myofascial release', 'Promotes sound sleep cycles', 'Improves lymphatic circulation'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'rs-02',
      name: 'Aroma-Botanique Stress Relief Massage',
      category: 'rituals',
      price: 2600,
      durationMinutes: 60,
      shortDescription: 'Custom pressure Swedish strokes tailored to neck, shoulders, and lower lumbar stiffness.',
      benefits: ['Releases posture strain', 'Relieves mental exhaustion', 'Pure organic essential oils']
    },
    {
      id: 'rs-03',
      name: 'Detoxifying Herbal Body Scrub & Cocoon',
      category: 'rituals',
      price: 2800,
      durationMinutes: 60,
      shortDescription: 'Himalayan pink salt crystals and crushed rose petals exfoliate and renew dry skin.',
      benefits: ['Silky baby-soft epidermis', 'Flushes stagnant fluid', 'Aromatherapeutic serenity']
    },

    // --- Hand & Foot Couture ---
    {
      id: 'hf-01',
      name: 'Russian Couture Dry Manicure & Gel Glaze',
      category: 'hands-feet',
      price: 1400,
      durationMinutes: 60,
      shortDescription: 'Micro-precision electric file cuticle detailing with chip-resistant vegan gel polish.',
      benefits: ['Immaculate 3+ week durability', 'Safe, sterile cuticle alignment', 'High-shine diamond topcoat'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'hf-02',
      name: 'Marine Collagen Velvet Spa Pedicure',
      category: 'hands-feet',
      price: 1800,
      durationMinutes: 60,
      shortDescription: 'Dead sea mineral soak, callus smoothing, seaweed foot mask, and acupressure massage.',
      benefits: ['Deep heel cracking repair', 'Eases foot fatigue', 'Softens hardened skin tissue'],
      isPopular: true
    },
    {
      id: 'hf-03',
      name: 'Warm Botanical Paraffin Immersion (Add-on)',
      category: 'hands-feet',
      price: 700,
      durationMinutes: 25,
      shortDescription: 'Therapeutic warm wax bath infused with peach kernel oil for intense skin nourishment.',
      benefits: ['Immediate soothing for dry hands/feet', 'Soothes joint stiffness', 'Velvety texture']
    },

    // --- Bridal Atelier ---
    {
      id: 'br-01',
      name: 'The Empress Bespoke Bridal Masterpiece',
      category: 'bridal',
      price: 18500,
      durationMinutes: 240,
      shortDescription: 'The pinnacle bridal experience with Master Stylist Ari & team. Complete couture artistry.',
      detailedDescription: 'Includes HD airbrush makeup, haute bridal hair sculpting with jewelry placement, pre-event skin prep ritual, and touch-up luxury kit.',
      benefits: ['18-hour waterproof tear-resistant wear', 'Flawless camera and 4K video finish', 'Private bridal dressing suite'],
      isSignature: true,
      isPopular: true
    },
    {
      id: 'br-02',
      name: 'Pre-Bridal Glow Symphony (2-Day Ritual)',
      category: 'bridal',
      price: 12000,
      durationMinutes: 180,
      shortDescription: 'Full body polishing, 24K cellular facial, hair keratin glaze, and luxury nail couture.',
      benefits: ['Complete head-to-toe readiness', 'Conducted 48 hours prior to wedding', 'Custom champagne gift box']
    },
    {
      id: 'br-03',
      name: 'Royal Sovereign Groom Styling & Glow',
      category: 'bridal',
      price: 4500,
      durationMinutes: 90,
      shortDescription: 'Precision hair sculpting, beard alignment, anti-shine HD skin finish, and eye de-puffing.',
      benefits: ['Subtle camera-ready natural grooming', 'Scalp and shoulder relaxation', 'Includes matte finish setting']
    }
  ];

  readonly stylists: MasterStylist[] = [
    {
      id: 'st-01',
      name: 'Aria Vance',
      title: 'Creative Director & Master Colourist',
      experienceYears: 12,
      specialties: ['French Balayage', 'Hair Reconstruction', 'Editorial Styling'],
      bio: 'Trained at the prestigious L’Académie de Coiffure in Paris, Aria brings over a decade of international editorial styling and multidimensional colour mastery to VELORA.',
      signatureTreatment: 'Parisian Sun-Kissed Balayage',
      rating: 4.98,
      reviewCount: 342,
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'st-02',
      name: 'Kavya Sen',
      title: 'Lead Aesthetician & Derma Specialist',
      experienceYears: 9,
      specialties: ['Clinical Facials', '24K Gold Therapy', 'Micro-Dermabrasion'],
      bio: 'Certified clinical skin therapist obsessed with barrier restoration, non-invasive radiance treatments, and personalized botanical formulations for South Asian skin.',
      signatureTreatment: '24K Aurum Cellular Lift Facial',
      rating: 4.96,
      reviewCount: 288,
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'st-03',
      name: 'Marcus Thorne',
      title: 'Senior Barber & Hair Sculptor',
      experienceYears: 8,
      specialties: ['Architectural Scissor Cuts', 'Beard Lineation', 'Textural Tapers'],
      bio: 'Renowned for sharp structural scissors and classic British razor discipline. Marcus crafts timeless silhouettes designed to hold shape as hair grows out effortlessly.',
      signatureTreatment: 'Atelier Signature Scissor Sculpt',
      rating: 4.95,
      reviewCount: 215,
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'st-04',
      name: 'Zoya Qureshi',
      title: 'Haute Bridal & Red Carpet Artist',
      experienceYears: 10,
      specialties: ['HD Airbrush Makeup', 'Traditional & Modern Bridal', 'Glass Skin'],
      bio: 'Sought after by brides across the country, Zoya crafts luminous, photographic skin and regal hair structures that harmonize heritage tradition with modern editorial grace.',
      signatureTreatment: 'The Empress Bespoke Bridal Masterpiece',
      rating: 4.99,
      reviewCount: 410,
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80'
    }
  ];

  readonly packages: MembershipPackage[] = [
    {
      id: 'pkg-01',
      name: 'Privilege Member',
      tier: 'Privilege',
      monthlyPrice: 2400,
      savingsPercentage: 20,
      description: 'Ideal for bi-weekly grooming, signature blowouts, and regular hair health upkeep.',
      features: [
        '2 Signature Scissor Cuts or Blowouts monthly',
        'Complimentary Botanical Scalp Treatment',
        '15% privilege discount on all additional services',
        'Priority weekday booking reservation'
      ],
      isBestValue: false
    },
    {
      id: 'pkg-02',
      name: 'Atelier Reserve',
      tier: 'Atelier Reserve',
      monthlyPrice: 4800,
      savingsPercentage: 35,
      description: 'Our most coveted membership for complete monthly skin radiance and hair perfection.',
      features: [
        '1 Hydra-Vortex or O3+ Detox Facial monthly',
        '2 Bespoke Cuts or Velvet Blowouts monthly',
        '1 Russian Manicure or Marine Pedicure',
        '20% privilege discount on all colour & retail',
        'Guaranteed weekend slot access with 24h notice'
      ],
      isBestValue: true,
      accentBadge: 'Most Cherished'
    },
    {
      id: 'pkg-03',
      name: 'Haute Bespoke Club',
      tier: 'Haute Bespoke',
      monthlyPrice: 9500,
      savingsPercentage: 45,
      description: 'Unlimited luxury atelier access with dedicated Master Stylist and private suite priority.',
      features: [
        'Unlimited Cuts, Glosses & Thermal Blowouts',
        'Choice of 1 24K Aurum or Cellular Facial monthly',
        '1 Volcanic Basalt Stone Massage monthly',
        'Full Nail Couture Suite (Manicure + Pedicure)',
        'Private VIP Dressing & Consultation Suite access',
        'Direct WhatsApp Concierge booking hotline'
      ],
      isBestValue: false
    }
  ];

  readonly transformations: TransformationItem[] = [
    {
      id: 'tf-01',
      title: 'French Balayage & Honey Caramel Glaze',
      category: 'Colour Artistry',
      description: 'Seamless transformation from dull box dye to multidimensional luminous sunlit warmth.',
      beforeTag: 'Flat monotone brown',
      afterTag: 'Multitonal glossed balayage',
      stylistName: 'Aria Vance',
      imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'tf-02',
      title: 'Architectural Butterfly Cut & Silk Blow',
      category: 'Haute Coiffure',
      description: 'Layered weight removal bringing dramatic kinetic bounce, framing the jawline perfectly.',
      beforeTag: 'Heavy unshaped length',
      afterTag: 'Voluminous cascading layers',
      stylistName: 'Marcus Thorne',
      imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'tf-03',
      title: '24K Aurum Cellular Radiant Skin Revital',
      category: 'Derma Aesthetics',
      description: 'Deep hydration and peptide lift visibly restoring firmness and glass skin translucency.',
      beforeTag: 'Dehydrated urban stress',
      afterTag: 'Plump glass skin luminescence',
      stylistName: 'Kavya Sen',
      imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f5be6bb9239?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'tf-04',
      title: 'Royal Regal Bridal Heritage Glamour',
      category: 'Bridal Atelier',
      description: 'High-definition airbrush finish and sculpted regal updo holding flawlessly through wedding celebrations.',
      beforeTag: 'Bare canvas consultation',
      afterTag: 'Couture bride luminescence',
      stylistName: 'Zoya Qureshi',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80'
    }
  ];

  readonly testimonials: VerifiedTestimonial[] = [
    {
      id: 'tm-01',
      clientName: 'Nandini Rathore',
      clientRole: 'Creative Director, Studio Aura',
      city: 'Bhubaneswar',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'VELORA Studio is on par with the finest ateliers in Milan and London. Aria transformed my colour with such precision that it still looks glowing 8 weeks later. The serene ambiance is unmatched.',
      verifiedTreatment: 'Parisian Sun-Kissed Balayage',
      date: 'October 2026'
    },
    {
      id: 'tm-02',
      clientName: 'Vikramaditya Mohapatra',
      clientRole: 'Managing Partner, Zenith Capital',
      city: 'Bhubaneswar',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'Marcus is a master of scissor geometry. No rushed clippers or generic styling; he took the time to understand my hairline and crafted the sharpest cut I have ever had. The hot towel ritual is pure therapy.',
      verifiedTreatment: 'Atelier Signature Scissor Sculpt',
      date: 'September 2026'
    },
    {
      id: 'tm-03',
      clientName: 'Dr. Meera Sanjeev',
      clientRole: 'Dermatologist & Wellness Researcher',
      city: 'Bhubaneswar',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'As a dermatologist, I am notoriously strict about hygiene and skincare protocols. Kavya’s Hydra-Vortex and 24K treatment are clinically immaculate. Highly recommended for sensitive Indian skin.',
      verifiedTreatment: '24K Aurum Cellular Lift Facial',
      date: 'October 2026'
    }
  ];

  readonly faqs: SalonFaq[] = [
    {
      question: 'How do consultations work prior to my treatment?',
      answer: 'Every appointment begins with a 10-minute private consultation. Your master stylist analyzes your hair porosity, skin undertones, face shape, and lifestyle goals before starting.',
      category: 'Appointments'
    },
    {
      question: 'What is the cancellation and rescheduling protocol?',
      answer: 'We appreciate at least 6 hours advance notice for rescheduling so we can release the reserved artisan slot to waiting guests. There are zero cancellation penalties.',
      category: 'Appointments'
    },
    {
      question: 'Are the products used cruelty-free and organic?',
      answer: 'Yes. We curate strictly from certified cruelty-free, formaldehyde-free, and ammonia-free formulations sourced from premier botanical laboratories in France, Italy, and Japan.',
      category: 'Treatments'
    },
    {
      question: 'Can I book multiple services in one single appointment?',
      answer: 'Yes. Our smart booking engine calculates cumulative appointment duration and coordinates master stylists so you can seamlessly enjoy coiffure, facials, and nail couture without waiting.',
      category: 'Booking'
    },
    {
      question: 'Is this appointment a live transaction or a portfolio demo?',
      answer: 'This application is a portfolio concept demonstration for VELORA Studio. Bookings generate real-time frontend confirmations and calendar invites without charging cards or dispatching real SMS notifications.',
      category: 'General'
    }
  ];
}
