// ─────────────────────────────────────────────────────────────────────────────
// VITO Med & Aesthetics — Image configuration
//
// All images are now hosted LOCALLY in /public/images/ so they always display.
// To swap in a real photo: drop your file into the matching folder and update
// the path below (e.g. hero: '/images/stock/hero.jpg' → '/images/gallery/my-clinic.jpg').
// ─────────────────────────────────────────────────────────────────────────────

export const images = {
  // ── Main site images ───────────────────────────────────────────────────────
  hero:       '/images/clinic/dr-precious-clinic-entrance.jpg',
  reception:  '/images/clinic/iv-room-busy.jpg',
  ivDrip:     '/images/clinic/iv-patient-blonde.jpg',
  aesthetics: '/images/clinic/dr-lip-filler-injection.jpg',
  travel:     '/images/stock/travel.jpg',
  medical:    '/images/clinic/dr-consultation-smiling.jpg',
  weightLoss: '/images/stock/weight-loss.jpg',
  branchTableView:   '/images/clinic/branch-exterior.jpg',
  branchKhayelitsha: '/images/clinic/khayelitsha-reception-desk.jpg',
} as const;

// ── "What We Offer" pillar background images (faded + blurred behind cards) ──
export const pillarBackgrounds: Record<string, string> = {
  'medical-aesthetics': '/images/clinic/aesthetics-botox.jpg',
  'travel-clinic': '/images/stock/travel.jpg',
  'medical-care': '/images/clinic/dr-precious-portrait.jpg',
};

// ── Founder photo (used on homepage founder section) ─────────────────────────
export const founderImage = '/images/clinic/dr-precious-portrait-orange.jpg';

// ── Gallery images ───────────────────────────────────────────────────────────
export const galleryImages: { src: string; caption: string; category: string }[] = [
  // Treatments
  { src: '/images/clinic/dr-lip-filler-injection.jpg',     caption: 'Lip Filler — Dr Garnett', category: 'Treatments' },
  { src: '/images/clinic/lip-filler-result.jpg',           caption: 'Lip Filler Result', category: 'Treatments' },
  { src: '/images/clinic/botox-injection-close.jpg',       caption: 'Botox Injection', category: 'Treatments' },
  { src: '/images/clinic/botox-forehead.jpg',              caption: 'Anti-Wrinkle Treatment', category: 'Treatments' },
  { src: '/images/clinic/facial-microneedling.jpg',        caption: 'Microneedling Facial', category: 'Treatments' },
  { src: '/images/clinic/facial-treatment-blue-scrubs.jpg',caption: 'Facial Treatment', category: 'Treatments' },
  { src: '/images/clinic/led-therapy.jpg',                 caption: 'LED Light Therapy', category: 'Treatments' },
  // IV Drips
  { src: '/images/clinic/iv-room-busy.jpg',                caption: 'IV Drip Lounge', category: 'IV Drips' },
  { src: '/images/clinic/iv-patient-blonde.jpg',           caption: 'IV Wellness Session', category: 'IV Drips' },
  { src: '/images/clinic/iv-patient-recliner-b.jpg',       caption: 'IV Vitamin Drip', category: 'IV Drips' },
  { src: '/images/clinic/dr-iv-turquoise-patient.jpg',     caption: 'IV Drip with Dr Garnett', category: 'IV Drips' },
  { src: '/images/clinic/iv-patient-sunglasses.jpg',       caption: 'IV Drip — Khayelitsha', category: 'IV Drips' },
  { src: '/images/clinic/dr-iv-male-cannula.jpg',          caption: 'IV Drip — Male Patient', category: 'IV Drips' },
  // Clinic
  { src: '/images/clinic/dr-precious-portrait-orange.jpg', caption: 'Dr Precious Garnett', category: 'Clinic' },
  { src: '/images/clinic/dr-precious-clinic-entrance.jpg', caption: 'Dr Garnett — VITO Founder', category: 'Clinic' },
  { src: '/images/clinic/dr-consultation-smiling.jpg',     caption: 'Doctor Consultation', category: 'Clinic' },
  { src: '/images/clinic/dr-precious-patient-bag.jpg',     caption: 'Happy Patient', category: 'Clinic' },
  { src: '/images/clinic/khayelitsha-reception-desk.jpg',  caption: 'VITO Khayelitsha Reception', category: 'Clinic' },
  { src: '/images/clinic/branch-exterior.jpg',             caption: 'VITO Med — Table View', category: 'Clinic' },
  { src: '/images/clinic/clinic-event.jpg',                caption: 'Community Clinic Event', category: 'Clinic' },
];

// ── Blog post images (local) ─────────────────────────────────────────────────
export const blogImages = {
  skinGlow:     '/images/stock/aesthetics.jpg',
  ivDrip:       '/images/stock/iv-drip.jpg',
  travelHealth: '/images/stock/travel.jpg',
  // Replace with: '/images/blog/skin-glow-blog.jpg' etc.
} as const;
