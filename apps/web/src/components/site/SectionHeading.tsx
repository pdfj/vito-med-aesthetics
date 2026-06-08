import type { ReactNode } from 'react';

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] ${
        light ? 'text-[#B89968]' : 'text-[#6E7F63]'
      }`}
    >
      <span className="h-px w-6 bg-[#B89968]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[44px] md:leading-[1.08] ${
          light ? 'text-white' : 'text-[#1F2A24]'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed ${light ? 'text-white/70' : 'text-[#5B6157]'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
