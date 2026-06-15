import type { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0D2040] via-[#0A1929] to-[#0F2A50] pt-[128px] pb-16 sm:pt-[150px] sm:pb-20">
      <div className="absolute -right-20 -top-10 h-64 w-64 rounded-full bg-[#1A7FD4]/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#6E7F63]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex items-center gap-2 text-xs text-white/55">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#90C8F8]">{crumb}</span>
        </nav>
        <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#1A7FD4]">
          <span className="h-px w-6 bg-[#1A7FD4]" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl font-cormorant-garamond text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
