// ─────────────────────────────────────────────────────────────────────────────
// VITO Med & Aesthetics — Image configuration
//
// All images are now hosted LOCALLY in /public/images/ so they always display.
// To swap in a real photo: drop your file into the matching folder and update
// the path below (e.g. hero: '/images/stock/hero.jpg' → '/images/gallery/my-clinic.jpg').
// ─────────────────────────────────────────────────────────────────────────────

export const images = {
  // ── Main site images (local) ───────────────────────────────────────────────
  hero:       '/images/stock/clinic-reception.png',
  reception:  '/images/stock/reception.jpg',
  ivDrip:     '/images/stock/iv-drip.jpg',
  aesthetics: '/images/stock/aesthetics.jpg',
  travel:     '/images/stock/travel.jpg',
  medical:    '/images/stock/medical.jpg',
  weightLoss: '/images/stock/weight-loss.jpg',
} as const;

// ── "What We Offer" pillar background images (faded + blurred behind cards) ──
// Drop your Gemini-generated images into /images/services/ with these names.
// If a file is missing, the card simply shows its solid background — no breakage.
export const pillarBackgrounds: Record<string, string> = {
  'medical-aesthetics': '/images/stock/aesthetics.jpg',
  'travel-clinic': '/images/stock/travel.jpg',
  'medical-care': '/images/stock/medical.jpg',
};

// ── Founder photo (used on homepage founder section) ─────────────────────────
export const founderImage = '/images/team/dr-precious.jpg';

// ── Gallery images (local) ───────────────────────────────────────────────────
// Add real photos by dropping them into /images/gallery/ and adding a line here.
export const galleryImages: { src: string; caption: string; category: string }[] = [
  { src: '/images/stock/aesthetics.jpg', caption: 'Aesthetic Treatments', category: 'Treatments' },
  { src: '/images/stock/iv-drip.jpg', caption: 'IV Vitamin Drips', category: 'Treatments' },
  { src: '/images/stock/weight-loss.jpg', caption: 'Medical Weight Loss', category: 'Treatments' },
  { src: '/images/stock/reception.jpg', caption: 'Our Clinic Space', category: 'Clinic' },
  { src: '/images/stock/travel.jpg', caption: 'Travel Clinic', category: 'Clinic' },
  { src: '/images/stock/medical.jpg', caption: 'Medical Care', category: 'Clinic' },
  // Add more, e.g.:
  // { src: '/images/gallery/before-after-1.jpg', caption: 'Skin Glow Results', category: 'Results' },
];

// ── Blog post images (local) ─────────────────────────────────────────────────
export const blogImages = {
  skinGlow:     '/images/stock/aesthetics.jpg',
  ivDrip:       '/images/stock/iv-drip.jpg',
  travelHealth: '/images/stock/travel.jpg',
  // Replace with: '/images/blog/skin-glow-blog.jpg' etc.
} as const;
