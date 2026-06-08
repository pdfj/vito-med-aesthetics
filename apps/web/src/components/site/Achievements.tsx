'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/site/ScrollReveal';
import { achievements } from '@/lib/achievements';

function LogoCard({ name, logo, delay }: { name: string; logo?: string; delay: number }) {
  const [errored, setErrored] = useState(false);
  return (
    <ScrollReveal delay={delay}>
      <div className="vito-lift group flex aspect-[3/2] items-center justify-center rounded-2xl border border-[#E8E2D6] bg-white p-6">
        {logo && !errored ? (
          <img
            src={logo}
            alt={name}
            title={name}
            onError={() => setErrored(true)}
            className="max-h-20 w-auto max-w-[80%] object-contain opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          />
        ) : (
          <span className="text-center text-xs font-medium uppercase tracking-[0.12em] text-[#6E7F63]">
            {name}
          </span>
        )}
      </div>
    </ScrollReveal>
  );
}

export default function Achievements({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? 'bg-white' : 'bg-[#FAF7F1]'}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Heading */}
          <ScrollReveal className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#B89968]">
              <span className="h-px w-6 bg-[#B89968]" />
              Credentials
            </span>
            <h2 className="mt-4 font-cormorant-garamond text-4xl font-semibold leading-[1.05] tracking-tight text-[#1F2A24] sm:text-5xl">
              Doctor&apos;s
              <br />
              Achievements
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#5B6157]">
              Have a look at what Dr Precious Garnett has achieved to date in the medical space —
              both locally and internationally. Real qualifications, from real institutions.
            </p>
          </ScrollReveal>

          {/* Logo grid */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:col-span-8">
            {achievements.map((a, i) => (
              <LogoCard key={a.name} name={a.name} logo={a.logo} delay={i * 70} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
