// ─────────────────────────────────────────────────────────────────────────────
// VITO Med & Aesthetics — Image configuration
//
// All images are now hosted LOCALLY in /public/images/ so they always display.
// To swap in a real photo: drop your file into the matching folder and update
// the path below (e.g. hero: '/images/stock/hero.jpg' → '/images/gallery/my-clinic.jpg').
// ─────────────────────────────────────────────────────────────────────────────

export const images = {
  // ── Main site images ───────────────────────────────────────────────────────
  hero:       '/images/clinic/dr-precious-iv-prep.jpg',
  reception:  '/images/clinic/iv-drip-2.jpg',
  ivDrip:     '/images/clinic/iv-drip-1.jpg',
  aesthetics: '/images/clinic/aesthetics-consultation.jpg',
  travel:     '/images/stock/travel.jpg',
  medical:    '/images/clinic/aesthetics-injection.jpg',
  weightLoss: '/images/stock/weight-loss.jpg',
  branchTableView:   '/images/clinic/branch-exterior.jpg',
  branchKhayelitsha: '/images/clinic/skincare-products-2.jpg',
} as const;

// ── "What We Offer" pillar background images (faded + blurred behind cards) ──
export const pillarBackgrounds: Record<string, string> = {
  'medical-aesthetics': '/images/clinic/aesthetics-botox.jpg',
  'travel-clinic': '/images/stock/travel.jpg',
  'medical-care': '/images/clinic/dr-precious-portrait.jpg',
};

// ── Founder photo (used on homepage founder section) ─────────────────────────
export const founderImage = '/images/clinic/dr-precious-portrait.jpg';

// ── Gallery images ───────────────────────────────────────────────────────────
export const galleryImages: { src: string; caption: string; category: string }[] = [
  { src: '/images/clinic/aesthetics-consultation.jpg', caption: 'Aesthetic Consultation', category: 'Treatments' },
  { src: '/images/clinic/aesthetics-botox.jpg',         caption: 'Anti-Wrinkle Injections', category: 'Treatments' },
  { src: '/images/clinic/facial-treatment-1.jpg',       caption: 'Chemical Peel Treatment', category: 'Treatments' },
  { src: '/images/clinic/facial-treatment-3.jpg',       caption: 'Skin Brightening Facial', category: 'Treatments' },
  { src: '/images/clinic/led-therapy.jpg',              caption: 'LED Light Therapy', category: 'Treatments' },
  { src: '/images/clinic/mens-facial-1.jpg',            caption: 'Men\'s Skin Treatment', category: 'Treatments' },
  { src: '/images/clinic/iv-drip-1.jpg',               caption: 'IV Vitamin Drip', category: 'Treatments' },
  { src: '/images/clinic/iv-drip-2.jpg',               caption: 'IV Wellness Session', category: 'Treatments' },
  { src: '/images/clinic/iv-drip-4.jpg',               caption: 'IV Drip — Happy Patient', category: 'Treatments' },
  { src: '/images/clinic/dr-precious-portrait.jpg',     caption: 'Dr Precious Garnett', category: 'Clinic' },
  { src: '/images/clinic/dr-precious-portrait-2.jpg',   caption: 'Dr Precious — VITO Founder', category: 'Clinic' },
  { src: '/images/clinic/branch-exterior.jpg',          caption: 'VITO Med — Table View', category: 'Clinic' },
  { src: '/images/clinic/clinic-event.jpg',             caption: 'Community Clinic Event', category: 'Clinic' },
  { src: '/images/clinic/skincare-products.jpg',        caption: 'VITO Skincare Products', category: 'Clinic' },
];

// ── Blog post images (local) ─────────────────────────────────────────────────
export const blogImages = {
  skinGlow:     '/images/stock/aesthetics.jpg',
  ivDrip:       '/images/stock/iv-drip.jpg',
  travelHealth: '/images/stock/travel.jpg',
  // Replace with: '/images/blog/skin-glow-blog.jpg' etc.
} as const;
