// Service & treatment content for VITO Med & Aesthetics.

export type Treatment = {
  name: string;
  description: string;
};

export type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  icon: 'sparkles' | 'plane' | 'stethoscope';
  imageKey: 'aesthetics' | 'travel' | 'medical';
  treatments: Treatment[];
};

export const pillars: Pillar[] = [
  {
    id: 'medical-aesthetics',
    eyebrow: 'Body & Skin',
    title: 'Medical Aesthetics',
    blurb:
      'Doctor-led, medical-grade aesthetic treatments designed to refresh, restore and enhance — never overdone.',
    icon: 'sparkles',
    imageKey: 'aesthetics',
    treatments: [
      {
        name: 'Dermal Fillers',
        description:
          'Restore volume and definition — lip enhancement, cheeks, nasolabial folds and subtle facial contouring using medical-grade dermal fillers, administered by a qualified doctor.',
      },
      {
        name: 'Botox (Anti-Wrinkle)',
        description:
          'Smooth fine lines and soften expression wrinkles with precise, natural-looking Botulinum Toxin injections — always administered by Dr Garnett, never a nurse or therapist.',
      },
      {
        name: 'Treatment for Hyperpigmentation',
        description:
          'Medical-grade treatment for dark spots, uneven skin tone and pigmentation using targeted peels, Skin IV Vitamin drips and prescription-grade topicals tailored to your skin.',
      },
      {
        name: 'Treatment for Acne',
        description:
          'Doctor-led acne management addressing root cause — combining prescription treatments, chemical peels, LED therapy and a personalised skincare plan.',
      },
      {
        name: 'IV Vitamin Drips',
        description:
          'A full menu of drip formulas administered by a qualified doctor: Skin Glow · Skin Lightening · Glutathione · Anti-Aging · Brain Boost · Energy Boost · Immune System Boost · Libido Boost · Fertility Boost · Detox · Anti-Inflammatory · Sports Endurance · Sports Recovery · VIP Cocktail 5-in-1 (Skin Glow, Energy, Brain, Immune & Detox) · Weight Loss · Weight Gain · Iron Infusion.',
      },
      {
        name: 'Facial Treatments',
        description:
          'Chemical Facial Peels · Micro-needling · Derma-planing · Photodynamic Therapy (LED) — all designed to resurface, brighten and rejuvenate your complexion.',
      },
      {
        name: 'Body Treatments',
        description:
          'Fat Dissolving Injections and Weight Loss Injections — medically supervised body contouring and weight management solutions tailored to your goals.',
      },
    ],
  },
  {
    id: 'travel-clinic',
    eyebrow: 'Travel Well',
    title: 'Travel Clinic',
    blurb:
      'Everything you need to travel safely — assessments, vaccinations, certifications and expert advice, in person or virtually.',
    icon: 'plane',
    imageKey: 'travel',
    treatments: [
      {
        name: 'Travel Medical Assessments',
        description:
          'Pre-travel medical assessments for leisure, visas, immigration and work abroad.',
      },
      {
        name: 'Travel Vaccines & Immunizations',
        description:
          'Routine vaccinations, malaria prophylaxis and selective traveller vaccines tailored to your destination.',
      },
      {
        name: 'Travel Self-Care Kits',
        description:
          'Curated kits for malaria, gastro, respiratory infections, allergies and immune support on the road.',
      },
      {
        name: 'Travel Certifications',
        description:
          "Certifications for work abroad or tourism, plus customs doctor's letters for restricted medication (insulin, injectables, patches).",
      },
      {
        name: 'In-Country & Virtual Advice',
        description:
          "Expert travel medical guidance before you leave and virtual support while you're away.",
      },
    ],
  },
  {
    id: 'medical-care',
    eyebrow: 'General Practice',
    title: 'Acute & Chronic Medical Care',
    blurb:
      'Trusted general medical care from a qualified doctor — for everyday illness, ongoing conditions and prevention.',
    icon: 'stethoscope',
    imageKey: 'medical',
    treatments: [
      {
        name: 'Acute & Emergency Care',
        description:
          'Management of acute illness, immediate medical care, infection management and minor surgical procedures.',
      },
      {
        name: 'Chronic Care Services',
        description:
          'Ongoing management of HIV/TB, High Blood Pressure, Pre-diabetes & Diabetes, High Cholesterol and other chronic conditions — with medication management, monitoring and follow-up.',
      },
      {
        name: 'Health Screenings & Prevention',
        description:
          'Physical examinations, preventive services, health screenings and patient education.',
      },
      {
        name: 'Online Consultations',
        description:
          'Virtual consultations with the doctor — history, diagnosis and prescription, accessible from anywhere in the world.',
      },
      {
        name: 'Scripts & Sick Notes',
        description:
          'Prescriptions of medications and sick notes issued following consultation with the doctor.',
      },
    ],
  },
];

// Signature treatments highlighted on the home page.
export const signatureTreatments = [
  {
    title: 'IV Vitamin Drips',
    description: 'Restore energy, immunity and glow from the inside out.',
    imageKey: 'ivDrip' as const,
    href: '/services#medical-aesthetics',
  },
  {
    title: 'Anti-Wrinkle & Fillers',
    description: 'Refined, natural results from a qualified medical doctor.',
    imageKey: 'aesthetics' as const,
    href: '/services#medical-aesthetics',
  },
  {
    title: 'Skin & Peels',
    description: 'Brighten, resurface and even your complexion.',
    imageKey: 'medical' as const,
    href: '/services#medical-aesthetics',
  },
  {
    title: 'Medical Weight Loss',
    description: 'Doctor-supervised programmes built around you.',
    imageKey: 'weightLoss' as const,
    href: '/services#medical-aesthetics',
  },
];

export const whyVito = [
  {
    title: 'A real medical doctor',
    description:
      'Treatments are performed by Dr Precious Garnett — a qualified medical doctor, not a nurse or therapist.',
  },
  {
    title: 'Medical-grade & safe',
    description:
      'Every plan is assessed, explained and tailored to you, with side effects discussed every step of the way.',
  },
  {
    title: 'Private & confidential',
    description:
      'Your information is handled with strict confidentiality, in full accordance with the POPI Act.',
  },
  {
    title: 'Medical aid accepted',
    description:
      'We accept medical aid as well as cash and debit/credit card payments for your convenience.',
  },
];
