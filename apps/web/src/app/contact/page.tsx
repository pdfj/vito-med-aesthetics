import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
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
    <main className="bg-[#FAF7F1] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Book your appointment"
        description="Send us an enquiry and our team will phone you back to confirm your preferred time — or reach us directly by phone, WhatsApp or email."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: details */}
          <ScrollReveal>
            <div className="space-y-5">
              {/* Contact cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={site.phonePrimaryHref}
                  className="group flex flex-col gap-3 rounded-2xl border border-[#E8E2D6] bg-white p-6 transition-colors hover:border-[#6E7F63]/50"
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
                  className="group flex flex-col gap-3 rounded-2xl border border-[#E8E2D6] bg-white p-6 transition-colors hover:border-[#6E7F63]/50"
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
                  className="group flex flex-col gap-3 rounded-2xl border border-[#E8E2D6] bg-white p-6 transition-colors hover:border-[#6E7F63]/50"
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
                <div className="flex flex-col gap-3 rounded-2xl border border-[#E8E2D6] bg-white p-6">
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
              <div className="rounded-2xl border border-[#E8E2D6] bg-white p-6">
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
                      className="flex items-center justify-between border-b border-[#E8E2D6] pb-2.5 text-sm last:border-0 last:pb-0"
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
                  <div key={branch.name} className="rounded-2xl border border-[#E8E2D6] bg-white p-6">
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
                  <div key={branch.name} className="overflow-hidden rounded-2xl border border-[#E8E2D6] bg-white">
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

          {/* Right: form */}
          <ScrollReveal delay={120}>
            <div className="rounded-2xl border border-[#E8E2D6] bg-white p-7 sm:p-9 lg:sticky lg:top-24">
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
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
