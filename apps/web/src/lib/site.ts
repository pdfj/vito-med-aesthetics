// Central business configuration for VITO Med & Aesthetics.
// All details sourced from the clinic. Update here to change everywhere.

export const site = {
  name: 'VITO Med & Aesthetics',
  shortName: 'VITO',
  founder: 'Dr Precious Garnett',
  tagline: 'Healthy body, Healthy skin.',
  intro:
    'Vito Med & Aesthetics is a professionally operated wellness and aesthetic clinic in Table View offering skin, body, and non-surgical aesthetic treatments in a welcoming and inclusive environment. Services include Botox, dermal fillers, facial treatments, IV vitamin therapy, weight management support, and body-focused aesthetic procedures.',
  summary:
    'Vito Med & Aesthetics is a professionally operated wellness and aesthetic clinic in Table View offering skin, body, and non-surgical aesthetic treatments in a welcoming and inclusive environment. The clinic focuses on personalised care, client comfort, and medically guided wellness treatments tailored to individual goals and confidence.',
  keywords:
    'skincare, botox, filler, skin treatment, anti-aging, hyperpigmentation, pigmentation, skin glow, aesthetics, medical aesthetics, travel clinic, travel doctor, doctor, travel medical, IV drips, Cape Town',
  legal: 'VITO Med & Aesthetics (Pty) Ltd · 100% black-owned, South African registered business.',
  // Contact
  phonePrimary: '+27 79 872 1230',
  phonePrimaryHref: 'tel:+27798721230',
  phoneSecondary: '+27 79 872 1230',
  phoneSecondaryHref: 'tel:+27798721230',
  whatsapp: '+27 79 872 1230',
  whatsappHref: 'https://wa.me/27798721230',
  email: 'info@vitomed.co.za',
  emailHref: 'mailto:info@vitomed.co.za',
  bookingsEmail: 'info@vitomed.co.za',
  bookingsEmailHref: 'mailto:info@vitomed.co.za',
  // Branches
  branches: [
    {
      name: 'Table View',
      addressLines: [
        'Block B207, Sandown Square',
        'Passerina Road, Sandown',
        'Table View, Cape Town',
      ],
      addressOneLine: 'Block B207, Sandown Square, Passerina Road, Sandown, Table View, Cape Town',
      mapQuery: 'Sandown Square Business Park, Passerina Road, Sandown, Table View, Cape Town',
    },
    {
      name: 'Khayelitsha',
      addressLines: [
        '70 Ngcwalazi Drive',
        'Litha Park, Khayelitsha',
        'Cape Town',
      ],
      addressOneLine: '70 Ngcwalazi Drive, Litha Park, Khayelitsha, Cape Town',
      mapQuery: '70 Ngcwalazi Drive, Litha Park, Khayelitsha, Cape Town',
    },
  ],
  // Primary location (Table View) kept for backward compat
  addressLines: [
    'Block B207, Sandown Square',
    'Passerina Road, Sandown',
    'Table View, Cape Town',
  ],
  addressOneLine: 'Block B207, Sandown Square, Passerina Road, Sandown, Table View, Cape Town',
  mapQuery: 'Sandown Square Business Park, Passerina Road, Sandown, Table View, Cape Town',
  // Hours
  hours: [
    { day: 'Monday – Friday', time: '08:30 – 18:00' },
    { day: 'Saturday', time: '09:00 – 14:00' },
    { day: 'Sunday & Public Holidays', time: 'Closed' },
  ],
  // Socials
  socials: {
    instagram: 'https://www.instagram.com/vito_med_aesthetics/',
    instagramKhayelitsha: 'https://www.instagram.com/vito_med-aesthetics_k.litsha/',
    facebook: 'https://www.facebook.com/VitoMedAesthetics',
    tiktok: 'https://www.tiktok.com/@vito_med_aesthetics',
    twitter: 'https://twitter.com/vitomed_',
    linkedin: 'https://www.linkedin.com/company/vito-med-aesthetics/',
  },
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

// Brand palette (use as Tailwind arbitrary values e.g. text-[#1F2A24]).
export const brand = {
  cream: '#FAF7F1',
  creamDeep: '#F2ECE0',
  ink: '#1F2A24',
  bodyText: '#5B6157',
  sage: '#6E7F63',
  sageDeep: '#4F5E46',
  gold: '#B89968',
  goldDeep: '#9A7C4F',
  border: '#E8E2D6',
} as const;
