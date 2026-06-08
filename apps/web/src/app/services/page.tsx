import Link from 'next/link';
import { Sparkles, Plane, Stethoscope, CalendarCheck, Phone, Info } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import PageHero from '@/components/site/PageHero';
import { site } from '@/lib/site';
import { pillars } from '@/lib/services-data';
import { images } from '@/lib/images';

const pillarIcons = {
  sparkles: Sparkles,
  plane: Plane,
  stethoscope: Stethoscope,
} as const;

export const metadata = {
  title: 'Services | VITO Med & Aesthetics',
  description:
    'Explore medical aesthetics, travel clinic services and acute & chronic medical care at VITO Med & Aesthetics in Cape Town.',
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF7F1] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Comprehensive care for body, skin and wellbeing"
        description="Three connected pillars of care — medical aesthetics, travel medicine and everyday medical care — each delivered with medical expertise and a calm, personal touch."
      />

      {/* Quick nav */}
      <section className="border-b border-[#E8E2D6] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 sm:px-8 py-5">
          {pillars.map((p) => {
            const Icon = pillarIcons[p.icon];
            return (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E8E2D6] px-4 py-2 text-sm text-[#5B6157] transition-colors hover:border-[#6E7F63] hover:text-[#1F2A24]"
              >
                <Icon className="h-4 w-4 text-[#6E7F63]" />
                {p.title}
              </a>
            );
          })}
        </div>
      </section>

      {/* Pillars */}
      {pillars.map((pillar, idx) => {
        const Icon = pillarIcons[pillar.icon];
        const reversed = idx % 2 === 1;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`scroll-mt-24 ${idx % 2 === 1 ? 'bg-white border-y border-[#E8E2D6]' : ''}`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                {/* Image */}
                <ScrollReveal className={reversed ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E8E2D6] bg-gradient-to-br from-[#6E7F63] to-[#4F5E46]">
                    {images[pillar.imageKey] ? (
                      <img
                        src={images[pillar.imageKey]}
                        alt={pillar.title}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal delay={100} className={reversed ? 'lg:order-1' : ''}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6E7F63]/10 text-[#4F5E46]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-[#6E7F63]">
                    {pillar.eyebrow}
                  </span>
                  <h2 className="mt-2 font-cormorant-garamond text-3xl font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-4xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#5B6157]">{pillar.blurb}</p>

                  <div className="mt-8 space-y-5">
                    {pillar.treatments.map((t) => (
                      <div
                        key={t.name}
                        className="border-b border-[#E8E2D6] pb-5 last:border-0 last:pb-0"
                      >
                        <h3 className="flex items-baseline gap-2 text-base font-medium text-[#1F2A24]">
                          <span className="text-[#B89968]">—</span>
                          {t.name}
                        </h3>
                        <p className="mt-1 pl-5 text-sm leading-relaxed text-[#5B6157]">
                          {t.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6E7F63] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4F5E46]"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Book this service
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Pricing note */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8 pt-4">
        <ScrollReveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-[#E8E2D6] bg-white p-7 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#B89968]/15 text-[#9A7C4F]">
              <Info className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <h3 className="font-cormorant-garamond text-xl font-semibold text-[#1F2A24]">
                Pricing on consultation
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[#5B6157]">
                Treatment pricing (in South African Rand) is tailored to your individual plan.
                Contact us for our latest pricing — we accept medical aid, cash and debit/credit
                cards.
              </p>
            </div>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#6E7F63] px-6 py-3 text-sm font-medium text-[#4F5E46] transition-colors hover:bg-[#6E7F63] hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Ask about pricing
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <ScrollReveal>
          <div className="rounded-3xl border border-[#E8E2D6] bg-white px-8 py-14 text-center sm:py-16">
            <h2 className="mx-auto max-w-2xl font-cormorant-garamond text-3xl font-semibold leading-tight text-[#1F2A24] sm:text-4xl">
              Not sure which treatment is right for you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#5B6157]">
              Book a consultation and Dr Garnett will assess your needs and recommend a tailored
              plan.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#6E7F63] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#4F5E46]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book a Consultation
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
