import { MapPin, Phone, Mail, Clock, MessageCircle, CalendarCheck, ArrowRight } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import PageHero from '@/components/site/PageHero';
import AppointmentForm from '@/components/site/AppointmentForm';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Contact & Book | VITO Med & Aesthetics',
  description:
    "Book an appointment at VITO Med & Aesthetics in Sandown Square, Cape Town. Call, WhatsApp or send an enquiry and we'll get back to you.",
};

const mapSrcs = site.branches.map(
  (b) => `https://www.google.com/maps?q=${encodeURIComponent(b.mapQuery)}&output=embed`,
);

export default function ContactPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Book your appointment"
        description="Send us an enquiry and our team will phone you back to confirm your preferred time — or reach us directly by phone, WhatsApp or email."
      />

      {/* ── Quick booking band — three direct ways to book ── */}
      <section className="border-b border-[#B0CFEE] bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {/* 1 — WhatsApp */}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#B0CFEE] bg-[#E8F4FF] p-5 transition-all hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1c9c4b]">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#1F2A24]">WhatsApp Us</p>
                <p className="truncate text-xs text-[#5B6157]">Fastest reply — chat now</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-[#1A7FD4] transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* 2 — Call */}
            <a
              href={site.phonePrimaryHref}
              className="group flex items-center gap-4 rounded-2xl border border-[#B0CFEE] bg-[#E8F4FF] p-5 transition-all hover:-translate-y-0.5 hover:border-[#1A7FD4]/60 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A7FD4]/15 text-[#0F5FA8]">
                <Phone className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#1F2A24]">Call the Clinic</p>
                <p className="truncate text-xs text-[#5B6157]">{site.phonePrimary}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-[#1A7FD4] transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* 3 — Request form */}
            <a
              href="#book-form"
              className="group flex items-center gap-4 rounded-2xl border border-[#1A7FD4] bg-[#1A7FD4] p-5 text-white transition-all hover:-translate-y-0.5 hover:bg-[#0F5FA8] hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                <CalendarCheck className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">Request Appointment</p>
                <p className="truncate text-xs text-white/80">Fill in the booking form</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Booking form — lead with this */}
          <ScrollReveal>
            <div id="book-form" className="scroll-mt-28 rounded-2xl border border-[#B0CFEE] bg-white p-7 sm:p-9 lg:sticky lg:top-24">
              <h2 className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24] sm:text-3xl">
                Request an appointment
              </h2>
              <p className="mt-2 text-sm text-[#5B6157]">
                Fill in your details and we'll be in touch to confirm.
              </p>
              <div className="mt-7">
                <AppointmentForm />
              </div>
            </div>
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal delay={120}>
            <div className="space-y-5">
              {/* Contact cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={site.phonePrimaryHref}
                  className="group flex flex-col gap-3 rounded-2xl border border-[#B0CFEE] bg-white p-6 transition-colors hover:border-[#6E7F63]/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6E7F63]/10 text-[#4F5E46]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#6E7F63]">Call us</p>
                    <p className="mt-1 text-sm font-medium text-[#1F2A24]">{site.phonePrimary}</p>
                  </div>
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 rounded-2xl border border-[#B0CFEE] bg-white p-6 transition-colors hover:border-[#6E7F63]/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1c9c4b]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#6E7F63]">WhatsApp</p>
                    <p className="mt-1 text-sm font-medium text-[#1F2A24]">{site.whatsapp}</p>
                  </div>
                </a>
                <a
                  href={site.emailHref}
                  className="group flex flex-col gap-3 rounded-2xl border border-[#B0CFEE] bg-white p-6 transition-colors hover:border-[#6E7F63]/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6E7F63]/10 text-[#4F5E46]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#6E7F63]">Email</p>
                    <p className="mt-1 break-all text-sm font-medium text-[#1F2A24]">
                      {site.email}
                    </p>
                  </div>
                </a>
                <div className="flex flex-col gap-3 rounded-2xl border border-[#B0CFEE] bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6E7F63]/10 text-[#4F5E46]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#6E7F63]">2 Branches</p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-[#1F2A24]">
                      Table View &amp; Khayelitsha
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-[#B0CFEE] bg-white p-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#6E7F63]" />
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6E7F63]">
                    Opening hours
                  </p>
                </div>
                <div className="mt-4 space-y-2.5">
                  {site.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between border-b border-[#B0CFEE] pb-2.5 text-sm last:border-0 last:pb-0"
                    >
                      <span className="text-[#5B6157]">{h.day}</span>
                      <span className="font-medium text-[#1F2A24]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branch addresses */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {site.branches.map((branch) => (
                  <div key={branch.name} className="rounded-2xl border border-[#B0CFEE] bg-white p-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#6E7F63]" />
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#6E7F63]">
                        {branch.name} Branch
                      </p>
                    </div>
                    <address className="mt-3 not-italic text-sm leading-relaxed text-[#5B6157]">
                      {branch.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                ))}
              </div>

              {/* Maps */}
              <div className="space-y-4">
                {site.branches.map((branch, i) => (
                  <div key={branch.name} className="overflow-hidden rounded-2xl border border-[#B0CFEE] bg-white">
                    <p className="px-4 pt-4 text-xs font-medium uppercase tracking-[0.16em] text-[#6E7F63]">
                      {branch.name} Branch
                    </p>
                    <iframe
                      title={`VITO Med & Aesthetics — ${branch.name}`}
                      src={mapSrcs[i]}
                      width="100%"
                      height="220"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{ border: 0 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
