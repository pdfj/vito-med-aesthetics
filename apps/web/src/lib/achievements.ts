// Dr Precious Garnett's institutional affiliations & achievements.
//
// HOW TO ADD LOGOS:
//   Drop each logo (PNG with transparent background works best) into:
//   anything/public/images/achievements/
//   Then make sure the `logo` filename below matches your file name exactly.
//
//   If a logo file is missing, the card gracefully shows the institution name only.

export type Achievement = {
  name: string;
  logo?: string; // path under /images/achievements/ — omit if file not yet available
};

export const achievements: Achievement[] = [
  { name: 'American Academy of Aesthetic Medicine' },
  { name: 'University of Cape Town · Groote Schuur Hospital' },
  { name: 'University of the Witwatersrand' },
  { name: 'South African Military Health Service' },
  { name: 'South African Society of Travel Medicine (SASTM)' },
  { name: 'UCT School of Public Health' },
];
