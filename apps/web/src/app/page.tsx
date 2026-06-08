import Link from 'next/link';
import {
  Sparkles,
  Plane,
  Stethoscope,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Phone,
  Clock,
} from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import Testimonials from '@/components/site/Testimonials';
import Achievements from '@/components/site/Achievements';
import SmartImage from '@/components/site/SmartImage';
import { SectionHeading, Eyebrow } from '@/components/site/SectionHeading';
import { site } from '@/lib/site';
import { pillars, signatureTreatments, whyVito } from '@/lib/services-data';
import { images, pillarBackgrounds, founderImage } from '@/lib/images';

const pillarIcons = {
  sparkles: Sparkles,
  plane: Plane,
  stethoscope: Stethoscope,
} as const;

const trustMarkers = [
  'Doctor-Led Care',
  'Medical Aid Accepted',
  'POPIA Confidential',
  'Online Consultations',
  'IV Vitamin Drips',
  'Travel Clinic',
];

export default function HomePage() {
  return (
    <main className="bg-[#FAF7F1] text-[#1F2A24]">
      <Header overlay />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Dark base */}
        <div className="absolute inset-0 bg-black" />
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={images.hero}
          className="absolute inset-0 h-full w-full object-cover opacity-60 motion-reduce:hidden"
        >
          <source src="/videos/hero1.mp4" type="video/mp4" />
        </video>
        {/* Heavy dark scrim so text pops cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* ── Main content ── */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 text-center sm:px-8">
          {/* Pill badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B89968]" />
            <span className="text-xs font-medium tracking-[0.18em] text-white/80 uppercase">
              Premium Medical &amp; Aesthetic Care
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-cormorant-garamond text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            Care that you<br />can trust
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Providing premium medical, travel and aesthetic care to Cape Town families — led by{' '}
            {site.founder}, qualified medical doctor.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-between px-8 sm:px-14">
          <span className="text-xs tracking-[0.2em] uppercase text-white/40">Scroll down</span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1">
            <div className="h-1.5 w-0.5 animate-bounce rounded-full bg-white/60" />
          </div>
          <span className="text-xs tracking-[0.2em] uppercase text-white/40">to see more</span>
        </div>
      </section>

      {/* ============ TRUST MARQUEE ============ */}
      <section className="border-b border-[#E8E2D6] bg-[#1F2A24] py-2 overflow-hidden">
        <div className="flex w-max vito-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {trustMarkers.map((marker) => (
                <span
                  key={dup + marker}
                  className="flex items-center whitespace-nowrap px-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60"
                >
                  <span className="mr-5 h-[3px] w-[3px] rounded-full bg-[#B89968]" />
                  {marker}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <Eyebrow>Welcome to VITO</Eyebrow>
            <h2 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-4xl md:text-[44px] md:leading-[1.1]">
              One trusted clinic for medical, travel &amp; aesthetic care.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#5B6157]">
              Founded by Dr Precious Garnett, VITO Med &amp; Aesthetics was created to make
              exceptional medical care accessible — whether you're a traveller, planning a trip, or
              a loyal resident of our beautiful country. Every treatment is medically led,
              thoughtfully explained and tailored to you.
            </p>
            <div className="mt-8 space-y-3">
              {[
                '100% black-owned, South African registered business',
                'Medical aid, card and cash payments welcome',
                'In-person and virtual consultations available',
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 text-[#5B6157]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6E7F63]" />
                  <span className="text-sm">{line}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-[#4F5E46] transition-colors hover:text-[#1F2A24]"
            >
              Read our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#E8E2D6] bg-gradient-to-br from-[#6E7F63] to-[#4F5E46]">
                {images.reception ? (
                  <img
                    src={images.reception}
                    alt="VITO clinic reception"
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>
              <div className="glass-light absolute -bottom-6 -left-6 hidden rounded-xl p-5 sm:block vito-float-slow">
                <p className="font-cormorant-garamond text-4xl font-semibold text-[#1F2A24]">10+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#6E7F63]">
                  Years of medical
                  <br />
                  experience
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ PILLARS ============ */}
      <section className="bg-[#1F2A24] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              light
              eyebrow="What We Offer"
              title="Three pillars of care, under one roof"
              description="From medical-grade aesthetics to travel readiness and everyday medical care — comprehensive, considered and always doctor-led."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon];
              return (
                <ScrollReveal key={pillar.id} delay={i * 100}>
                  <Link
                    href={`/services#${pillar.id}`}
                    className="vito-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-[#B89968]/50 hover:bg-white/10"
                  >
                    {/* faded + blurred background image */}
                    {pillarBackgrounds[pillar.id] ? (
                      <SmartImage
                        src={pillarBackgrounds[pillar.id]}
                        alt=""
                        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-[0.08] blur-[2px] transition-all duration-700 group-hover:opacity-[0.15] group-hover:scale-105"
                      />
                    ) : null}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F2A24]/90 via-[#1F2A24]/40 to-transparent" />

                    <div className="relative">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B89968]/15 text-[#B89968] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#B89968]/25">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="mt-6 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#B89968]">
                        {pillar.eyebrow}
                      </span>
                      <h3 className="mt-2 font-cormorant-garamond text-2xl font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.blurb}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#B89968]">
                        Explore treatments
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ SIGNATURE TREATMENTS ============ */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Signature Treatments" title="Most-loved at VITO" />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#E8E2D6] px-5 py-2.5 text-sm font-medium text-[#1F2A24] transition-colors hover:border-[#6E7F63] sm:self-auto"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signatureTreatments.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 80}>
              <Link href={t.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#E8E2D6] bg-gradient-to-br from-[#6E7F63] to-[#4F5E46]">
                  {images[t.imageKey] ? (
                    <img
                      src={images[t.imageKey]}
                      alt={t.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A24]/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-cormorant-garamond text-xl font-semibold text-white">
                      {t.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{t.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ============ WHY VITO ============ */}
      <section className="bg-[#1F2A24] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              light
              eyebrow="Why VITO"
              title="Medical care you can genuinely trust"
              description="The difference is in the details — real medical expertise, full transparency and a calm, private experience from start to finish."
              align="center"
            />
          </ScrollReveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {whyVito.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col bg-[#1F2A24] p-8">
                  <span className="font-cormorant-garamond text-3xl font-semibold text-[#B89968]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOUNDER ============ */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-5">
            <div className="relative">
              {/* glowing aura behind photo */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#B89968]/30 to-[#6E7F63]/20 blur-2xl vito-float-slow" />
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#E8E2D6] bg-gradient-to-br from-[#3A4A3C] to-[#1F2A24]">
                <SmartImage
                  src={founderImage}
                  fallbackSrc={images.medical}
                  alt="Dr Precious Garnett"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass-light absolute -bottom-5 -right-5 hidden rounded-xl px-5 py-4 sm:block vito-float">
                <p className="font-cormorant-garamond text-3xl font-semibold text-[#1F2A24]">10+</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-[#6E7F63]">
                  Years experience
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120} className="lg:col-span-7">
            <Eyebrow>Meet The Founder</Eyebrow>
            <h2 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-4xl md:text-[44px] md:leading-[1.1]">
              Dr Precious Garnett
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#6E7F63]">
              CEO &amp; Medical Doctor
            </p>
            <p className="mt-6 text-base leading-relaxed text-[#5B6157]">
              With over a decade of experience treating a wide range of medical and surgical
              conditions in South Africa, Dr Garnett founded VITO to offer care that is both highly
              qualified and genuinely personal. Patients are part of every decision, every step of
              the way.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                'MBChB — University of Cape Town',
                'MPH, Epidemiology — UCT',
                'Dip. Advanced HIV Management — CMSA',
                'Travel Medicine — Wits University',
                'Medical Aesthetics — AAAM (USA)',
                '10+ years clinical experience',
              ].map((q) => (
                <div key={q} className="flex items-start gap-2.5 text-sm text-[#5B6157]">
                  <span className="text-[#B89968]">—</span>
                  {q}
                </div>
              ))}
            </div>
            <Link
              href="/team"
              className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-[#4F5E46] transition-colors hover:text-[#1F2A24]"
            >
              Meet the full team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ DOCTOR'S ACHIEVEMENTS ============ */}
      <Achievements />

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-[#2A3B30] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#B89968]">
                <span className="h-px w-6 bg-[#B89968]" />
                Kind Words
                <span className="h-px w-6 bg-[#B89968]" />
              </span>
              <p className="mt-3 font-cormorant-garamond text-3xl font-semibold text-white sm:text-4xl">
                What our patients say
              </p>
            </div>
            <Testimonials dark />
          </ScrollReveal>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="bg-[#FAF7F1] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#E8E2D6] bg-[#E8E2D6] sm:grid-cols-4">
            {[
              { value: '6', label: 'Days open a week' },
              { value: '3', label: 'Pillars of care' },
              { value: '20+', label: 'Treatments offered' },
              { value: '10+', label: 'Years experience' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white py-12 text-center">
                <p className="font-cormorant-garamond text-5xl font-semibold text-[#1F2A24] sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#6E7F63]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24 md:pb-28">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2A3B30] via-[#1F2A24] to-[#3A4A3C] px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#B89968]/15 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#6E7F63]/20 blur-3xl" />
            <div className="relative">
              <Eyebrow light>Book Your Visit</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-2xl font-cormorant-garamond text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Ready to feel your best, inside and out?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Book an appointment or send us a quick enquiry — our team will get back to you to
                confirm your preferred time.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B89968] px-7 py-3.5 text-sm font-medium text-[#1F2A24] transition-colors hover:bg-[#CBB083]"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book an Appointment
                </Link>
                <a
                  href={site.phonePrimaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {site.phonePrimary}
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 text-[#B89968]" />
                Mon–Fri 08:30–18:00 · Sat 09:00–14:00
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
