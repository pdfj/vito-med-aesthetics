'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/testimonials-data';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-[#B89968] text-[#B89968]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ dark = false }: { dark?: boolean }) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <div className="mx-auto max-w-3xl text-center">

      {/* Stars */}
      <Stars count={active.stars ?? 5} />

      {/* Quote icon */}
      <Quote className="mx-auto mt-5 h-8 w-8 text-[#B89968]/60" />

      {/* Review text */}
      <blockquote className={`mt-5 font-cormorant-garamond text-2xl leading-relaxed sm:text-[26px] sm:leading-relaxed ${dark ? 'text-white/90' : 'text-[#1F2A24]'}`}>
        &ldquo;{active.quote}&rdquo;
      </blockquote>

      {/* Name + detail */}
      <div className="mt-7 flex flex-col items-center gap-1">
        <p className={`text-sm font-semibold ${dark ? 'text-white' : 'text-[#1F2A24]'}`}>{active.name}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-[#B89968]">{active.detail}</p>
      </div>

      {/* Counter */}
      <p className={`mt-2 text-xs ${dark ? 'text-white/40' : 'text-[#9AA093]'}`}>{index + 1} of {total}</p>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89968] ${
            dark
              ? 'border-white/20 text-white/70 hover:border-[#B89968] hover:text-[#B89968]'
              : 'border-[#E8E2D6] text-[#1F2A24] hover:border-[#6E7F63] hover:text-[#6E7F63]'
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? 'h-2 w-6 bg-[#B89968]'
                  : dark
                    ? 'h-1.5 w-1.5 bg-white/20 hover:bg-[#B89968]'
                    : 'h-1.5 w-1.5 bg-[#E8E2D6] hover:bg-[#B89968]'
              }`}
            />
          ))}
        </div>

        <button
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89968] ${
            dark
              ? 'border-white/20 text-white/70 hover:border-[#B89968] hover:text-[#B89968]'
              : 'border-[#E8E2D6] text-[#1F2A24] hover:border-[#6E7F63] hover:text-[#6E7F63]'
          }`}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
