import Link from 'next/link';
import {
  CalendarCheck,
  FlaskConical,
  Handshake,
  MapPinned,
  HeartHandshake,
  ShieldCheck,
  Eye,
  Sparkles,
} from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import PageHero from '@/components/site/PageHero';
import { SectionHeading, Eyebrow } from '@/components/site/SectionHeading';
import { images } from '@/lib/images';

export const metadata = {
  title: 'About | VITO Med & Aesthetics',
  description:
    'The story behind VITO Med & Aesthetics — a 100% black-owned, South African medical clinic founded by Dr Precious Garnett in Cape Town.',
};

const visionItems = [
  {
    icon: FlaskConical,
    title: 'In-house skincare',
    description:
      'Developing our own range of moisturisers, sunscreens, toners and exfoliators to extend care beyond the treatment room.',
  },
  {
    icon: Handshake,
    title: 'Corporate medical partner',
    description:
      'Becoming the medical partner of choice for work-travel corporations — cruise lines, private yachts and international hotel groups.',
  },
  {
    icon: MapPinned,
    title: 'Growing nationally',
    description:
      'Expanding beyond Cape Town into Johannesburg, Durban and other key markets — and one day, beyond our borders.',
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: 'Patient-first',
    description:
      "You're part of every decision. Treatment plans are explained clearly and shaped around your goals.",
  },
  {
    icon: ShieldCheck,
    title: 'Medical integrity',
    description:
      'Every treatment is grounded in real medical expertise, safety and full transparency.',
  },
  {
    icon: Sparkles,
    title: 'Quiet luxury',
    description: 'A calm, immaculate space where exceptional care feels personal, never clinical.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="About"
        eyebrow="About VITO"
        title="Exceptional medical care, made personal"
        description="VITO Med & Aesthetics was founded to make high-quality medical, travel and aesthetic care genuinely accessible — for travellers, residents and everyone in between."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <ScrollReveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight tracking-tight text-[#1F2A24] sm:text-4xl md:text-[44px] md:leading-[1.1]">
              A clinic built on care, qualification and trust.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#5B6157]">
              <p>
                VITO Med &amp; Aesthetics was founded by Dr Precious Garnett to offer medical
                services that aren't always readily available or accessible — a comprehensive,
                multi-pronged offering of general medical care, travel medicine and aesthetic
                medicine, all in one considered space.
              </p>
              <p>
                It's a one-stop shop for your medical and aesthetic needs — whether you're a
                traveller, planning to travel, or a loyal resident of our beautiful country. Above
                all, it's care led by a qualified medical doctor, where your wellbeing always comes
                first.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-[#B0CFEE] bg-white p-6">
              <p className="font-cormorant-garamond text-xl font-semibold text-[#1F2A24]">
                Proudly South African
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6157]">
                VITO Med &amp; Aesthetics (Pty) Ltd is a 100% black-owned, South African registered
                business — driven by a genuine passion for health, skin and community.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[#B0CFEE] bg-gradient-to-br from-[#6E7F63] to-[#4F5E46]">
              <img
                src="/images/clinic/iv-drip-4.jpg"
                alt="Patient receiving treatment at VITO Med & Aesthetics"
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission band */}
      <section className="bg-[#0A1929] py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <ScrollReveal>
            <Eyebrow light>Our Mission</Eyebrow>
            <p className="mt-6 font-cormorant-garamond text-3xl font-semibold leading-snug text-white sm:text-4xl md:text-[40px] md:leading-[1.25]">
              “To offer medical, travel and aesthetic care that is accessible, trustworthy and
              deeply personal — helping every patient feel their best, inside and out.”
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
        <ScrollReveal>
          <SectionHeading eyebrow="What We Stand For" title="Our values" align="center" />
        </ScrollReveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-[#B0CFEE] bg-white p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6E7F63]/10 text-[#4F5E46]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-cormorant-garamond text-xl font-semibold text-[#1F2A24]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5B6157]">{value.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Vision / beyond procedures */}
      <section className="bg-white border-y border-[#B0CFEE] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Looking Ahead"
              title="Care beyond procedures"
              description="Our vision reaches further than treatments — building lasting value for our patients, partners and communities."
            />
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {visionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-2xl border border-[#B0CFEE] bg-[#E8F4FF] p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A7FD4]/15 text-[#0F5FA8]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-medium text-[#1F2A24]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B6157]">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br from-[#0D2040] via-[#0A1929] to-[#0F2A50] px-8 py-14 text-center">
            <Eye className="h-8 w-8 text-[#1A7FD4]" />
            <h2 className="max-w-2xl font-cormorant-garamond text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Experience the VITO difference for yourself
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A7FD4] px-7 py-3.5 text-sm font-medium text-[#1F2A24] transition-colors hover:bg-[#0F5FA8]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
