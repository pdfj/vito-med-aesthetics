import Link from 'next/link';
import { CalendarCheck, ArrowRight, Clock } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import PageHero from '@/components/site/PageHero';
import { blogImages } from '@/lib/images';

export const metadata = {
  title: 'Health & Skin Blog | VITO Med & Aesthetics',
  description:
    'Health tips, skincare advice, and treatment guides from Dr Precious Garnett at VITO Med & Aesthetics — your Cape Town medical aesthetics clinic.',
};

const posts = [
  {
    title: 'What Are IV Vitamin Drips — And Are They Right for You?',
    excerpt:
      'IV vitamin drips deliver nutrients directly into your bloodstream for immediate absorption. Dr Precious Garnett explains what to expect, who benefits most, and the full range of drips we offer — from Skin Glow to VIP 5-in-1 Cocktail.',
    image: blogImages.ivDrip,
    category: 'IV Therapy',
    readTime: '5 min read',
    date: 'May 2026',
    href: '#',
  },
  {
    title: 'Hyperpigmentation, Dark Spots & Acne: A Doctor\'s Guide to Clearer Skin',
    excerpt:
      'Many patients come to us frustrated after trying countless over-the-counter products. As a medical doctor, Dr Garnett takes a different approach — identifying the root cause and creating a personalised treatment plan that actually works.',
    image: blogImages.skinGlow,
    category: 'Skin Treatments',
    readTime: '6 min read',
    date: 'April 2026',
    href: '#',
  },
  {
    title: 'Travelling Soon? Here\'s What You Need to Know About Travel Medicine',
    excerpt:
      'From malaria prophylaxis to yellow fever vaccines, travel self-care kits to customs letters for your medication — our travel clinic at VITO Med covers everything you need to stay healthy wherever in the world you\'re heading.',
    image: blogImages.travelHealth,
    category: 'Travel Clinic',
    readTime: '4 min read',
    date: 'March 2026',
    href: '#',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#FAF7F1] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="Blog"
        eyebrow="Health & Skin"
        title="Advice from Dr Garnett"
        description="Trusted health tips, skincare guides and treatment explainers — written from a medical doctor's perspective, in plain language."
      />

      {/* ── Featured posts ── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 100}>
              <Link href={post.href} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E2D6] bg-white transition-shadow hover:shadow-md">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#6E7F63] to-[#4F5E46]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A24]/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#B89968] px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-4 text-xs text-[#9AA093]">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 font-cormorant-garamond text-xl font-semibold leading-snug text-[#1F2A24] group-hover:text-[#4F5E46] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#5B6157] flex-1">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#4F5E46] group-hover:text-[#1F2A24] transition-colors">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* More posts placeholder */}
        <ScrollReveal>
          <div className="mt-16 rounded-2xl border border-dashed border-[#E8E2D6] bg-white p-10 text-center">
            <p className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
              More articles coming soon
            </p>
            <p className="mt-2 text-sm text-[#5B6157]">
              Dr Garnett will be sharing educational content on skincare, medical aesthetics, travel health and chronic care.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Newsletter / CTA ── */}
      <section className="bg-[#1F2A24] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#B89968]">
                Have a question?
              </p>
              <h2 className="mt-4 font-cormorant-garamond text-3xl font-semibold text-white sm:text-4xl">
                Speak directly to Dr Garnett
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Book a consultation — in person at our Table View or Khayelitsha branch, or online from anywhere.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#B89968] px-7 py-3.5 text-sm font-medium text-[#1F2A24] transition-colors hover:bg-[#CBB083]"
              >
                <CalendarCheck className="h-4 w-4" />
                Book a Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
