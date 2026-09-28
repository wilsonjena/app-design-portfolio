import { LightingPreset, MaterialOption, SpatialScene, PricingPlan, FaqItem, Testimonial } from '../types';

export const LIGHTING_PRESETS: LightingPreset[] = [
  {
    id: 'golden',
    name: 'Golden Hour',
    time: '17:45',
    kelvin: '2,900K',
    lux: '680 Lux',
    description: 'Warm low-angle sun casting long, soft shadows across travertine and warm plaster.',
    bgColor: '#FAF4ED',
    glowColor: 'rgba(212, 126, 62, 0.45)',
    shadowAngle: 'rotate-12',
    ambientHex: '#F6E9DD'
  },
  {
    id: 'morning',
    name: 'Morning Sol',
    time: '08:45',
    kelvin: '4,400K',
    lux: '920 Lux',
    description: 'Crisp morning illumination emphasizing sculptural geometric edges and natural stone pores.',
    bgColor: '#F8F6F2',
    glowColor: 'rgba(235, 190, 130, 0.35)',
    shadowAngle: '-rotate-6',
    ambientHex: '#F3EFE9'
  },
  {
    id: 'twilight',
    name: 'Twilight Dune',
    time: '19:40',
    kelvin: '2,200K',
    lux: '260 Lux',
    description: 'Intimate evening ambience with warm recessed underglow and soft candle-lit warmth.',
    bgColor: '#2D231E',
    glowColor: 'rgba(224, 118, 50, 0.55)',
    shadowAngle: 'rotate-45',
    ambientHex: '#382B24'
  },
  {
    id: 'gallery',
    name: 'Gallery Neutral',
    time: '12:00',
    kelvin: '5,000K',
    lux: '1,150 Lux',
    description: 'Balanced museum-grade diffuse daylight for accurate material pigment and reflectance inspection.',
    bgColor: '#F5F5F3',
    glowColor: 'rgba(215, 205, 190, 0.3)',
    shadowAngle: 'rotate-0',
    ambientHex: '#EDECE8'
  }
];

export const MATERIAL_OPTIONS: MaterialOption[] = [
  {
    id: 'travertine-navona',
    name: 'Navona Travertine',
    category: 'Stone',
    origin: 'Tivoli, Italy',
    reflectance: '46%',
    roughness: '0.42 Ra',
    colorHex: '#E8DEC8',
    textureHint: 'Warm creamy limestone with natural mineral voids and honed tactile surface.',
    specs: 'ASTM C1527 · Compressive Strength 82 MPa'
  },
  {
    id: 'oak-smoked',
    name: 'Fluted Smoked Oak',
    category: 'Wood',
    origin: 'Black Forest, Germany',
    reflectance: '19%',
    roughness: '0.34 Ra',
    colorHex: '#4E3A2F',
    textureHint: 'Linear architectural fluting with deep umber organic grain and matte wax seal.',
    specs: 'FSC-100% Certified · Fire Class B-s1,d0'
  },
  {
    id: 'brass-champagne',
    name: 'Honed Champagne Brass',
    category: 'Metal',
    origin: 'Birmingham, UK',
    reflectance: '74%',
    roughness: '0.18 Ra',
    colorHex: '#C5A880',
    textureHint: 'Directional micro-brushed finish with soft warm specular highlights.',
    specs: 'Alloy C26000 · PVD Protective Micro-Layer'
  },
  {
    id: 'glass-amber-fluted',
    name: 'Murano Cast Fluted Glass',
    category: 'Glass',
    origin: 'Venice, Italy',
    reflectance: '24%',
    roughness: '0.08 Ra',
    colorHex: '#DFC4A6',
    textureHint: 'Textured translucent glass slab with gentle optical refraction and amber tint.',
    specs: 'EN 572-2 · 12mm Low-Iron Monolithic'
  }
];

export const SPATIAL_SCENES: SpatialScene[] = [
  {
    id: 'scene-1',
    title: 'Brentwood Modernist Pavilion',
    location: 'Los Angeles, CA',
    type: 'Residential Spatial Studio',
    area: '4,450 sq ft',
    ceilingHeight: '14.2 ft',
    annotationCount: 14
  },
  {
    id: 'scene-2',
    title: 'Via Montenapoleone Flagship',
    location: 'Milan, Italy',
    type: 'Luxury Retail Environment',
    area: '3,800 sq ft',
    ceilingHeight: '16.5 ft',
    annotationCount: 22
  },
  {
    id: 'scene-3',
    title: 'Omotesando Sanctuary House',
    location: 'Tokyo, Japan',
    type: 'Private Architectural Retreat',
    area: '2,920 sq ft',
    ceilingHeight: '11.8 ft',
    annotationCount: 9
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'atelier',
    name: 'Solo Atelier',
    tierSubtitle: 'For independent spatial designers and boutique architects',
    monthlyPrice: 69,
    annualPrice: 55,
    description: 'Complete spatial workspace for single practitioners managing bespoke residential and luxury interior projects.',
    deliverables: [
      'Up to 8 active spatial environments',
      'Real-time sun & photometric lighting simulator',
      'Full access to 650+ PBR tactile materials',
      'Interactive client web walkthrough links (no login required)',
      'Direct Rhino 8, SketchUp & Revit CAD ingest',
      'Export 4K photorealistic spatial stills'
    ],
    ctaLabel: 'Start 14-Day Free Trial'
  },
  {
    id: 'studio',
    name: 'Studio Practice',
    tierSubtitle: 'The standard OS for collaborative interior & spatial design teams',
    monthlyPrice: 179,
    annualPrice: 145,
    highlighted: true,
    description: 'Multi-seat workspace with concurrent spatial editing, real-time client annotation pins, and contractor schedule exports.',
    deliverables: [
      'Unlimited active spatial environments',
      'Up to 10 collaborative studio seats included',
      'Custom proprietary material swatch twin creation',
      'Real-time multiplayer cursor & client walkthroughs',
      'Automated contractor schedules & millwork specs',
      'Custom studio branding on client presentation links',
      'Priority GPU cloud rendering pipeline'
    ],
    ctaLabel: 'Start Studio Practice Trial'
  },
  {
    id: 'enterprise',
    name: 'Global Practice',
    tierSubtitle: 'For multi-city architectural practices and hospitality groups',
    monthlyPrice: 420,
    annualPrice: 340,
    description: 'Enterprise architecture governance, dedicated rendering nodes, SSO security, and custom BIM synchronization.',
    deliverables: [
      'Unlimited seats across global studio offices',
      'Dedicated enterprise GPU render cluster',
      'BIM (Revit / ArchiCAD) bidirectional live synchronization',
      'SSO (SAML 2.0 / Okta) & SOC2 Type II compliance',
      'Custom manufacturer catalog integrations',
      'Dedicated studio success manager & 1-hr SLA'
    ],
    ctaLabel: 'Contact Studio Enterprise'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Aura Studio completely transformed how we present spatial atmosphere to clients. Instead of sending static renders that take hours to explain, clients walk through the tactile lighting transitions themselves. Our sign-off cycles dropped from 4 weeks to 6 days.",
    author: "Elena Rostova",
    role: "Founder & Design Principal",
    studio: "Studio Rostova Architects",
    city: "Milan, Italy",
    projectHighlight: "Palazzo Borghese Spatial Renovation",
    metric: "78% faster client design approvals"
  },
  {
    quote: "The fidelity of the tactile material twin library is unmatched. Being able to toggle from morning sun to twilight while reviewing Navona travertine and fluted oak with our client on an iPad closed our largest retail flagship commission in Tokyo.",
    author: "Marcus Vance",
    role: "Director of Spatial Design",
    studio: "Atelier Vance & Co.",
    city: "London & Los Angeles",
    projectHighlight: "Kensington Luxury Flagship Concept",
    metric: "3.2x client conversion on pitch presentations"
  },
  {
    quote: "As an architect, I care about light and honest materiality. Aura is the first software that treats light not as a computer graphic effect, but as an architectural medium. It feels tactile, calm, and unmistakably premium.",
    author: "Kenji Takahashi",
    role: "Principal Architect",
    studio: "Takahashi Spatial Lab",
    city: "Tokyo, Japan",
    projectHighlight: "Karuizawa Pavilion Residence",
    metric: "62 hours saved per project phase"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'Compatibility',
    question: 'What 3D formats and CAD packages are supported?',
    answer: 'Aura Studio natively imports Rhino (.3dm), Revit (.rvt, .ifc), SketchUp (.skp), Blender (.blend), OBJ, and USDZ files. All layers, grouped components, and spatial geometry are parsed cleanly into editable spatial components.'
  },
  {
    category: 'Client Experience',
    question: 'Do my clients need to install software or make an account?',
    answer: 'No. You generate a secure, private studio link that opens immediately on any device (Mac, Windows, iPad, iPhone) inside Safari or Chrome with zero plugins. Clients can rotate, walk through, inspect material tags, and leave pinpoint notes.'
  },
  {
    category: 'Materials & Lighting',
    question: 'How accurate are the material physics and sunlight simulations?',
    answer: 'Aura uses physically-based photometric reflectance (PBR) calibrated against real laboratory samples of travertine, marble, architectural millwork, and metals. The sun simulation calculates real geographic coordinates, month, and solar zenith to reproduce authentic natural light and shadow throw.'
  },
  {
    category: 'Collaboration',
    question: 'Can multiple architects work in the same spatial scene at once?',
    answer: 'Yes. Studio Practice and Enterprise plans feature real-time multiplayer editing with live presence indicators. Two designers can adjust materials, camera keyframes, and lighting simultaneously without file conflicts.'
  },
  {
    category: 'Security & Licensing',
    question: 'Does Aura Studio claim any rights to our designs or client data?',
    answer: 'Never. You retain 100% intellectual property ownership of all CAD files, 3D spatial models, material specifications, and project metadata. All data is encrypted in transit (TLS 1.3) and at rest (AES-256) with strict studio data isolation.'
  },
  {
    category: 'Trial & Billing',
    question: 'What happens after the 14-day free trial?',
    answer: 'You have full unrestricted access to the Studio Practice tier during your 14-day trial without entering a credit card. If you choose not to subscribe, your projects remain safely archived and you can export all your presentation links anytime.'
  }
];
