import { BusinessConfig } from '../types';

/**
 * ============================================================================
 * EDITABLE BUSINESS & PRODUCT CONFIGURATION
 * ============================================================================
 * You can customize all company details, contact information, addresses, and
 * product metadata right here in this file. Changes made here will update
 * throughout the entire website (Navbar, Footer, Contact Page, About Page, and Modals).
 */

export const BUSINESS_CONFIG: BusinessConfig = {
  // Brand & Company Identity
  companyName: 'Quality Fruits',
  tagline: 'Protect Every Mango. Grow Better. Harvest Better.',
  subtagline: 'Smart protection for healthier, cleaner and better-quality mangoes.',

  // Contact Information (Updated business contact details)
  contact: {
    phone: '7017685484',                  // Raw phone number for tel: links
    phoneFormatted: '7017685484',          // Formatted display number
    email: 'er.azeem7@gmail.com',          // Company inquiry email
    address: 'Image Associate, Near Godawari Hotel, Delhi Road, Roorkee',
    city: 'Haridwar',
    state: 'Uttarakhand',
    country: 'India',
    workingHours: 'Monday - Saturday: 8:00 AM – 7:00 PM IST',
    whatsappNumber: '917017685484',        // Without '+' for api.whatsapp.com link
  },

  // Social Media & Messaging Links
  socialLinks: {
    // Replace these placeholder URLs with your official accounts:
    instagram: 'https://instagram.com/qualityfruits_placeholder',
    facebook: 'https://facebook.com/qualityfruits_placeholder',
    whatsapp: 'https://wa.me/917017685484?text=Hello%20Quality%20Fruits,%20I%20would%20like%20to%20inquire%20about%20Mango%20Protection%20Bags',
  },

  // Product Specification Details
  product: {
    name: 'Mango Protection Bags',
    category: 'Agricultural Produce Shielding',
    defaultPackSize: 100, // Default minimum recommendation for small growers
    priceGuide: 'Competitive bulk farm rates available upon direct request',
  },
};

/**
 * Feature highlights used in the "Why Protect Your Mangoes?" section
 */
export const PRODUCT_FEATURES = [
  {
    index: '01',
    title: 'Fruit Protection',
    description: 'Creates a physical shield around growing mangoes to keep away fruit flies, harsh sun scorch, and branch scratches.',
    tag: 'Physical Barrier',
    image: '/images/features/fruit-protection.jpg',
    imageAlt: 'Young mango protected inside a breathable protection bag on the tree',
  },
  {
    index: '02',
    title: 'Better Appearance',
    description: 'Helps fruit develop a clean, smooth, and spot-free skin for better customer appeal and higher market grade.',
    tag: 'Clean Fruit',
    image: '/images/features/better-appearance.jpg',
    imageAlt: 'Comparison showing a protected blemish-free mango alongside an exposed fruit',
  },
  {
    index: '03',
    title: 'Easy Application',
    description: 'Simple slip-on shape with an integrated soft tie so orchard workers can bag fruit quickly with no special tools.',
    tag: 'Quick Tie',
    image: '/images/features/easy-application.jpg',
    imageAlt: 'Farmer hands slipping the protection bag easily over a young mango',
  },
  {
    index: '04',
    title: 'Practical & Efficient',
    description: 'Small breathable openings allow air to move through naturally while helping prevent moisture from staying trapped.',
    tag: 'Breathable Mesh',
    image: '/images/features/practical-design.jpg',
    imageAlt: 'Close-up of the breathable micro-porous fabric texture of the protection bag',
  },
];

/**
 * 3-Step Process for the Product Showcase Section
 */
export const SHOWCASE_STEPS = [
  {
    step: '01',
    label: 'Place',
    title: 'Place Over Fruit',
    description: 'Gently slip the breathable protection bag over the young developing mango once the fruit reaches marble size.',
    tip: 'Ensure the stem rests naturally in the upper opening without twisting.',
    image: '/images/how-it-works/place-mango-bag.jpg',
    imageAlt: 'Hand placing protection bag gently over young mango',
  },
  {
    step: '02',
    label: 'Secure',
    title: 'Secure the Fastener',
    description: 'Fasten the integrated soft tie around the fruit stem securely to keep winds and pests out while allowing natural growth.',
    tip: 'Leave comfortable breathing space at the bag base for ventilation.',
    image: '/images/how-it-works/secure-mango-bag.jpg',
    imageAlt: 'Fastening the soft tie securely around the mango stem',
  },
  {
    step: '03',
    label: 'Grow',
    title: 'Grow to Harvest',
    description: 'Allow the fruit to develop naturally inside its breathable protective shield until harvest day.',
    tip: 'Bags can be easily loosened prior to harvest to inspect ripening hue.',
    image: '/images/how-it-works/protected-mango-growth.jpg',
    imageAlt: 'Protected mango continuing natural growth on tree',
  },
];

/**
 * Visual Storytelling Stages (Timeline)
 */
export const JOURNEY_STAGES = [
  {
    stage: 'Stage 1',
    title: 'Mango Tree',
    subtitle: 'Healthy Flowering & Fruit Set',
    description: 'Healthy orchard trees produce tender blossom clusters that develop into small young fruit sets.',
    image: '/images/journey/mango-tree-stage.jpg',
    imageAlt: 'Lush blooming mango tree with flower clusters in orchard',
  },
  {
    stage: 'Stage 2',
    title: 'Growing Fruit',
    subtitle: 'Vulnerable Development Window',
    description: 'As small young mangoes expand, they face constant threats from pests, sun scorch, and branch scratches.',
    image: '/images/journey/growing-mango-stage.jpg',
    imageAlt: 'Young tender green mangoes before protective bagging',
  },
  {
    stage: 'Stage 3',
    title: 'Protected Mango',
    subtitle: 'Protected While Fruit Grows',
    description: 'Enclosing fruit in the breathable sleeve creates a dependable barrier that stays on throughout development.',
    image: '/images/journey/protected-mango-stage.jpg',
    imageAlt: 'Mango growing safely inside Quality Fruits protection sleeve',
  },
  {
    stage: 'Stage 4',
    title: 'Clean Harvest',
    subtitle: 'Clean High-Grade Yield',
    description: 'Harvest spotless, market-ready mangoes with natural color and zero insect puncture marks.',
    image: '/images/journey/clean-harvest-stage.jpg',
    imageAlt: 'Crate of spotless harvest mangoes ready for market',
  },
];

/**
 * Farmer Value Highlights (NO fake statistics)
 */
export const TRUST_HIGHLIGHTS = [
  {
    title: 'Easy to Use',
    description: 'Designed for fast, comfortable hand-bagging in the field with zero specialized tools required.',
    badge: 'Orchard Ready',
    image: '/images/trust/easy-to-use.jpg',
    imageAlt: 'Quick and simple hand tying of mango protection bag',
  },
  {
    title: 'Farmer Friendly',
    description: 'Durable, lightweight structure crafted specifically to withstand seasonal rain, high humidity, and direct sun.',
    badge: 'Weather Resilient',
    image: '/images/trust/farmer-friendly.jpg',
    imageAlt: 'Smiling orchard farmer comfortably bagging healthy mangoes',
  },
  {
    title: 'Practical Design',
    description: 'Small breathable openings allow air to move through while helping prevent moisture from staying trapped.',
    badge: 'Optimal Airflow',
    image: '/images/trust/breathable-material.jpg',
    imageAlt: 'Close-up of breathable fabric openings on mango bag',
  },
  {
    title: 'Made for Mangoes',
    description: 'Dimensions and shape tailored to fit major commercial mango varieties comfortably across growth stages.',
    badge: 'Custom Sized',
    image: '/images/trust/mango-fitted-bag.jpg',
    imageAlt: 'Fitted protection bag on developing mango fruit',
  },
];
