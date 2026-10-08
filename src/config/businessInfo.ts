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
    description: 'Shields growing mangoes from fruit flies, sunburn scorch, bird pecks, and external mechanical abrasions.',
    tag: 'External Defense',
  },
  {
    index: '02',
    title: 'Better Appearance',
    description: 'Maintains uniform skin coloration and an unblemished outer finish for export and grade-A market value.',
    tag: 'Market Quality',
  },
  {
    index: '03',
    title: 'Easy Application',
    description: 'Engineered with quick-tie secure fasteners that allow orchard workers to bag hundreds of fruits quickly.',
    tag: 'Quick Tie',
  },
  {
    index: '04',
    title: 'Practical & Efficient',
    description: 'Breathable micro-porous material permits balanced airflow and light penetration without moisture trapping.',
    tag: 'Farm Tested',
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
  },
  {
    step: '02',
    label: 'Secure',
    title: 'Secure the Fastener',
    description: 'Fasten the integrated soft-tie around the fruit pedicel securely to keep winds and pests out while allowing natural growth.',
    tip: 'Leave comfortable breathing space at the bag base for ventilation.',
  },
  {
    step: '03',
    label: 'Grow',
    title: 'Grow to Harvest',
    description: 'Allow the fruit to ripen in a pristine micro-climate shielded from harsh weather, birds, and insects until harvest day.',
    tip: 'Bags can be easily loosened prior to harvest to inspect ripening hue.',
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
    description: 'Vigorous orchards produce tender blossom clusters that set into young developing mangoes on sturdy branches.',
  },
  {
    stage: 'Stage 2',
    title: 'Growing Fruit',
    subtitle: 'Vulnerable Development Window',
    description: 'As fruits grow, they become prime targets for fruit flies, intense solar heat, and branch friction marks.',
  },
  {
    stage: 'Stage 3',
    title: 'Protected Mango',
    subtitle: 'Bagged Micro-Shielding',
    description: 'Bags provide an active breathable shield, regulating light, blocking insects, and preventing wind scratches.',
  },
  {
    stage: 'Stage 4',
    title: 'Clean Harvest',
    subtitle: 'Pristine Market-Grade Yield',
    description: 'Harvest clean, spotless mangoes with natural bloom and superior appeal ready for premium market dispatch.',
  },
];

/**
 * Farmer Value Highlights (NO fake statistics)
 */
export const TRUST_HIGHLIGHTS = [
  {
    title: 'Easy to Use',
    description: 'Designed for fast, ergonomic orchard hand-bagging with zero specialized tools required.',
    badge: 'Orchard Ready',
  },
  {
    title: 'Farmer Friendly',
    description: 'Durable, lightweight structure crafted specifically to withstand seasonal rain, high humidity, and sun.',
    badge: 'Weather Resilient',
  },
  {
    title: 'Practical Design',
    description: 'Micro-perforated material ensures optimal air circulation and moisture drainage at all times.',
    badge: 'Optimal Airflow',
  },
  {
    title: 'Made for Mangoes',
    description: 'Dimensions and shape tailored to fit major commercial mango varieties across growing stages.',
    badge: 'Custom Sized',
  },
];
