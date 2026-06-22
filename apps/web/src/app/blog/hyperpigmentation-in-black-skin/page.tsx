import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Hyperpigmentation in Black African Skin: Causes, Prevention & Treatments | VITO Med',
  description:
    'Hyperpigmentation is one of the most common skin concerns affecting Black African skin. Dr Precious Garnett explains the causes, best treatments and daily habits to prevent dark spots.',
};

export default function HyperpigmentationBlogPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />

      {/* Hero */}
      <div className="relative bg-[#0A1929] pt-[77px]">
        <div className="relative aspect-[21/7] max-h-[420px] overflow-hidden">
          <img
            src="/images/clinic/facial-microneedling.jpg"
            alt="Facial treatment for hyperpigmentation at VITO Med & Aesthetics"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 sm:px-8">
              <span className="inline-flex rounded-full bg-[#1A7FD4] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                Skin Concerns
              </span>
              <h1 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Hyperpigmentation in Black African Skin: Causes, Prevention &amp; The Best Treatments for Dark Spots
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> June 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> 8 min read
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Dr Precious Garnett — VITO Med &amp; Aesthetics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto max-w-3xl px-5 sm:px-8 py-14 md:py-20">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-[#5B6157] transition-colors hover:text-[#1F2A24]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="prose prose-slate max-w-none text-[#1F2A24]">

          <p className="lead text-lg leading-relaxed text-[#5B6157]">
            Hyperpigmentation is one of the most common skin concerns affecting Black African skin. The good news? It can be treated safely and effectively — with the right diagnosis, professional guidance, and a personalised treatment plan.
          </p>

          <h2>What Is Hyperpigmentation?</h2>
          <p>
            Hyperpigmentation occurs when certain areas of the skin produce excess melanin, resulting in patches or spots that appear darker than the surrounding skin.
          </p>
          <p>
            In Black and African skin, melanin-producing cells (melanocytes) are more reactive, meaning even minor inflammation or irritation can trigger darker pigmentation.
          </p>
          <p>It may appear as:</p>
          <ul>
            <li>Dark spots</li>
            <li>Brown patches</li>
            <li>Uneven skin tone</li>
            <li>Acne marks</li>
            <li>Sun spots</li>
            <li>Post-treatment pigmentation</li>
            <li>Melasma</li>
            <li>Blemishes (commonly referred to by some as <em>"amashubaba"</em>)</li>
          </ul>

          <h2>Common Causes of Hyperpigmentation in Black Skin</h2>

          <h3>1. Post-Inflammatory Hyperpigmentation (PIH)</h3>
          <p>
            The most common cause of dark spots. It occurs after acne breakouts, eczema, irritation, burns, aggressive treatments or shaving irritation. The inflammation triggers melanocytes to overproduce pigment, leaving a dark mark even after the original wound has healed.
          </p>

          <h3>2. Acne &amp; Blemishes</h3>
          <p>
            Inflamed pimples stimulate melanin production, leaving visible marks after breakouts disappear. Professional acne treatment combined with pigmentation management gives the best results — treating one without the other often leads to ongoing frustration.
          </p>

          <h3>3. Sun Exposure</h3>
          <p>
            UV exposure remains a major trigger for pigmentation and melasma. Daily SPF helps prevent existing dark spots from becoming darker and protects the skin while treatments take effect. Without SPF, even the best treatments will underperform.
          </p>

          <h3>4. Melasma</h3>
          <p>
            Melasma causes larger patches of pigmentation, typically on the face. Triggers include hormonal changes, pregnancy, contraceptives, heat exposure and genetics. It requires a tailored approach as it can be stubborn and prone to recurrence.
          </p>

          <h3>5. Incorrect Skincare Products</h3>
          <p>
            Over-exfoliation, harsh scrubs, bleaching products or unsuitable actives can worsen pigmentation — particularly in melanin-rich skin that is more prone to irritation-triggered darkening. Always use products formulated for your skin type and seek professional guidance before starting actives.
          </p>

          <h2>Best Treatments for Dark Spots &amp; Hyperpigmentation</h2>
          <p>
            Successful treatment depends on identifying the underlying cause. Professional assessment is important before starting any pigmentation treatment.
          </p>

          <h3>1. Chemical Peels for Hyperpigmentation</h3>
          <p>
            One of the most effective facial treatments for dark spots when performed correctly for darker skin tones. At VITO Med, chemical peels are carefully selected and applied with darker skin in mind to ensure safe, effective results.
          </p>
          <p>Benefits include:</p>
          <ul>
            <li>Reduces pigmentation</li>
            <li>Improves skin texture</li>
            <li>Treats acne and dark spots</li>
            <li>Stimulates skin renewal</li>
            <li>Brightens dull skin</li>
          </ul>
          <p>Multiple sessions are often recommended for optimal results.</p>

          <h3>2. Medical-Grade Skincare</h3>
          <p>
            Targeted ingredients help fade dark marks safely while strengthening the skin. Professional-grade products go far beyond what is available over the counter, with actives at therapeutic concentrations. Key ingredients include:
          </p>
          <ul>
            <li>Vitamin C</li>
            <li>Niacinamide</li>
            <li>Azelaic acid</li>
            <li>Tranexamic acid</li>
            <li>Retinoids</li>
            <li>Hydroquinone (when appropriate)</li>
            <li>Gentle exfoliating acids</li>
          </ul>

          <h3>3. Microneedling</h3>
          <p>
            Microneedling is a minimally invasive treatment that uses fine needles to create controlled micro-channels in the skin, stimulating collagen production and encouraging skin renewal. Treatment should always be adapted for melanin-rich skin. Benefits include:
          </p>
          <ul>
            <li>Uneven pigmentation</li>
            <li>Acne scarring</li>
            <li>Skin texture improvement</li>
            <li>Overall skin rejuvenation</li>
          </ul>

          <h3>4. Hydration &amp; Skin Wellness Support</h3>
          <p>
            Wellness therapies can complement your skincare journey and support your skin from the inside out. Many patients enquire about IV drips for skin, vitamin drips for glowing skin, and hydration drip options as part of their overall pigmentation management plan.
          </p>
          <ul>
            <li>IV therapy / IV drip therapy</li>
            <li>Vitamin IV drips</li>
            <li>Hydration drip options</li>
            <li>Vitamin infusion treatments</li>
          </ul>

          <h2>Daily Habits That Help Prevent Hyperpigmentation</h2>
          <ul>
            <li><strong>Wear sunscreen every day (SPF 30–50).</strong> Reapply regularly, especially if outdoors. This is non-negotiable for managing pigmentation.</li>
            <li><strong>Avoid picking pimples</strong> — this increases inflammation and significantly raises the risk of dark marks.</li>
            <li><strong>Use products made for melanin-rich skin.</strong> Avoid harsh DIY remedies that can worsen irritation.</li>
            <li><strong>Start treatment early</strong> — fresh pigmentation generally responds faster than long-standing marks.</li>
          </ul>

          <h2>When Should You See a Professional?</h2>
          <p>
            Consult a qualified aesthetic practitioner or doctor for dark spots if your hyperpigmentation:
          </p>
          <ul>
            <li>Continues worsening despite home care</li>
            <li>Returns repeatedly after improvement</li>
            <li>Follows acne breakouts consistently</li>
            <li>Does not improve with over-the-counter products</li>
            <li>Affects your confidence or quality of life</li>
          </ul>
          <p>
            Self-treating pigmentation without professional guidance can sometimes make matters worse — especially in darker skin tones where the wrong products or treatments can cause additional irritation and more pigmentation. A proper diagnosis ensures you treat the right cause with the right approach.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Hyperpigmentation in Black African skin is common — but it does not have to be permanent. With the right combination of professional treatments, personalised skincare and consistent sun protection, clearer, brighter and more even-toned skin is achievable.
          </p>
          <p>
            <strong>You deserve expert care for your skin.</strong> Book a consultation at VITO Med &amp; Aesthetics and let Dr Garnett create a personalised plan for your skin.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-[#B0CFEE] bg-white p-8 text-center">
          <p className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
            Your skin deserves expert care
          </p>
          <p className="mt-2 text-sm text-[#5B6157]">
            Book a pigmentation consultation with Dr Precious Garnett — Table View or Khayelitsha.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1A7FD4] px-7 py-3 text-sm font-medium text-white transition-all hover:bg-[#0F5FA8] hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#B0CFEE] px-7 py-3 text-sm font-medium text-[#1F2A24] transition-all hover:border-[#1A7FD4] hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-xs text-[#5B6157]">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[#6E7F63]" />
          <span>VITO Med &amp; Aesthetics — Table View &amp; Khayelitsha, Cape Town</span>
        </div>
      </article>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
