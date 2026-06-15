import Link from 'next/link';
import { ArrowRight, Clock, CalendarDays } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import PageHero from '@/components/site/PageHero';
import ScrollReveal from '@/components/site/ScrollReveal';

export const metadata = {
  title: 'Blog | VITO Med & Aesthetics',
  description:
    'Educational articles on aesthetic treatments, skin health and medical wellness — written by Dr Precious Garnett at VITO Med & Aesthetics, Cape Town.',
};

const posts = [
  {
    slug: 'botox-anti-wrinkle-injections',
    title: 'Botox: Understanding Wrinkles and How Anti-Wrinkle Injections Work',
    excerpt:
      'Everything you need to know about Botox for face treatments — how wrinkles form, how to prevent them, and what treatment options are available from chemical peels to anti-wrinkle injections.',
    image: '/images/clinic/aesthetics-botox.jpg',
    category: 'Aesthetics',
    readTime: '7 min read',
    date: 'June 2026',
  },
  {
    slug: 'dermal-fillers-explained',
    title: 'Dermal Fillers Explained: Everything You Need to Know About Facial Fillers',
    excerpt:
      'What are dermal fillers, how do they work, and which areas can they treat? Dr Precious breaks down cheek fillers, lip enhancement, tear trough, jawline definition and more.',
    image: '/images/clinic/aesthetics-consultation.jpg',
    category: 'Aesthetics',
    readTime: '8 min read',
    date: 'June 2026',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="Blog"
        eyebrow="Educational Content"
        title="Skin health & aesthetic insights"
        description="Treatment guides and skin health education written by Dr Precious Garnett — so you can make informed decisions about your care."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-[#B0CFEE] bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[#1A7FD4]/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#6E7F63] to-[#4F5E46]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#1A7FD4] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-[#5B6157]">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-cormorant-garamond text-xl font-semibold leading-snug text-[#1F2A24] group-hover:text-[#1A7FD4] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5B6157]">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#1A7FD4] transition-transform group-hover:translate-x-0.5">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
