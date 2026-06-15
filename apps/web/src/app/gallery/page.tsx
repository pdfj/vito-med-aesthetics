import Link from 'next/link';
import { CalendarCheck, ImageIcon } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import PageHero from '@/components/site/PageHero';
import { galleryImages } from '@/lib/images';

export const metadata = {
  title: 'Gallery | VITO Med & Aesthetics',
  description:
    'See inside VITO Med & Aesthetics — our clinic space, treatments, and patient results at our Table View and Khayelitsha branches.',
};

const categories = ['All', 'Treatments', 'Clinic', 'Results', 'Team'];

export default function GalleryPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="Gallery"
        eyebrow="Our Gallery"
        title="Inside VITO Med & Aesthetics"
        description="A look at our clinic spaces, treatments and results at our Table View and Khayelitsha branches. Real people, real results."
      />

      {/* ── Category filter pills ── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                cat === 'All'
                  ? 'bg-[#6E7F63] text-white'
                  : 'border border-[#B0CFEE] bg-white text-[#5B6157] hover:border-[#6E7F63]'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── Image Grid ── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12 pb-24">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-[#B0CFEE] bg-white group">
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#1A7FD4]">
                      {img.category}
                    </span>
                    <p className="text-sm font-medium text-white">{img.caption}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Coming soon notice */}
        <ScrollReveal>
          <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#B0CFEE] bg-white py-16 px-8 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6E7F63]/10 text-[#4F5E46]">
              <ImageIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
              More photos coming soon
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#5B6157]">
              We're adding real clinic photos, treatment images and before &amp; after results.
              Check back soon — or book your visit and see for yourself!
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#6E7F63] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4F5E46]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Branches note ── */}
      <section className="bg-[#0A1929] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { name: 'Table View Branch', address: 'Block B207, Sandown Square, Passerina Road, Sandown, Table View' },
              { name: 'Khayelitsha Branch', address: '70 Ngcwalazi Drive, Litha Park, Khayelitsha, Cape Town' },
            ].map((branch) => (
              <div key={branch.name} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#1A7FD4]">
                  {branch.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{branch.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
