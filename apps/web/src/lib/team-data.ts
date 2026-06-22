export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  image?: string; // path under /images/team/ — falls back to initials if missing
  credentials?: string[];
};

export const team: TeamMember[] = [
  {
    name: 'Dr Precious Garnett',
    role: 'CEO & Medical Doctor',
    initials: 'PG',
    image: '/images/clinic/dr-precious-portrait-orange.jpg',
    bio: 'Founder of VITO Med & Aesthetics, Dr Garnett is a qualified medical doctor with over 15 years of experience treating a wide range of medical and surgical conditions in South Africa. She leads every aspect of patient care with warmth, precision and full transparency.',
    credentials: [
      'MBChB — University of Cape Town',
      'Master of Public Health (Epidemiology of Infectious Diseases) — UCT',
      'Diploma in Advanced HIV Management — College of Medicine of South Africa',
      'Travel Medicine certification — University of the Witwatersrand',
      'Medical Aesthetics certification — American Academy of Aesthetic Medicine',
    ],
  },
  {
    name: 'Qophelo Hlatshwayo',
    role: 'Business / Practice Manager',
    initials: 'QH',
    image: '/images/team/Qophelo-Hlatshwayo.jpg',
    bio: 'Qophelo keeps VITO running smoothly — overseeing the practice, looking after patients and making sure every visit feels effortless from booking through to follow-up.',
  },
  {
    name: 'Anthia Geduld',
    role: 'Beauty Therapist & Admin',
    initials: 'AG',
    image: '/images/team/Anthia-Geduld.jpg',
    bio: "Anthia brings a warm, attentive touch to the clinic's aesthetic and administrative care, helping patients feel comfortable and well looked after at every step.",
  },
];
