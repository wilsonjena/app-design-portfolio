export type LightingMode = 'morning' | 'golden' | 'twilight' | 'gallery';

export interface LightingPreset {
  id: LightingMode;
  name: string;
  time: string;
  kelvin: string;
  lux: string;
  description: string;
  bgColor: string;
  glowColor: string;
  shadowAngle: string;
  ambientHex: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  category: 'Stone' | 'Wood' | 'Metal' | 'Glass';
  origin: string;
  reflectance: string;
  roughness: string;
  colorHex: string;
  textureHint: string;
  specs: string;
}

export interface SpatialScene {
  id: string;
  title: string;
  location: string;
  type: string;
  area: string;
  ceilingHeight: string;
  annotationCount: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tierSubtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  highlighted?: boolean;
  description: string;
  deliverables: string[];
  ctaLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  studio: string;
  city: string;
  projectHighlight: string;
  metric: string;
}
