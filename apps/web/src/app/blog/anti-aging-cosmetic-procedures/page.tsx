import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Anti-Aging Cosmetic Procedures: Advanced Skin Rejuvenation at VITO Med | Cape Town',
  description:
    'Explore advanced anti-aging treatments at VITO Med & Aesthetics Cape Town — microneedling, chemical peels, photo dynamic therapy, dermaplaning and medical-grade skincare. Personalised treatment plans.',
};

export default function AntiAgingBlogPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />

      {/* Hero */}
      <div className="relative bg-[#0A1929] pt-[77px]">
        <div className="relative aspect-[21/7] max-h-[420px] overflow-hidden">
          <img
            src="/images/clinic/antiaging-chemical-peel.jpg"
            alt="Chemical peel treatment at VITO Med & Aesthetics Cape Town"
            className="h-full w-full object-cover object-top opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 sm:px-8">
              <span className="inline-flex rounded-full bg-[#1A7FD4] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                Skin Rejuvenation
              </span>
              <h1 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Anti-Aging Cosmetic Procedures: Advanced Skin Rejuvenation Treatments at VITO Med &amp; Aesthetics
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
            As we age, our skin naturally undergoes changes that can affect texture, elasticity, tone, and overall appearance. Fine lines, wrinkles, pigmentation, enlarged pores, acne scarring, and loss of radiance are common concerns for many individuals seeking aesthetic treatments.
          </p>
          <p>
            At VITO Med &amp; Aesthetics, we offer a range of advanced anti-aging treatments in Cape Town designed to support healthy-looking skin, improve skin quality, and help clients maintain a refreshed, youthful appearance.
          </p>
          <p>Our most popular skin rejuvenation treatments include:</p>
          <ul>
            <li>Microneedling</li>
            <li>Chemical Peels</li>
            <li>Photo Dynamic Therapy (PDT)</li>
            <li>Medical Grade Skincare</li>
            <li>Dermaplaning</li>
          </ul>
          <p>
            Whether your goal is brighter skin, smoother texture, reduced pigmentation, or overall skin rejuvenation, our experienced aesthetic team will help create a personalised treatment plan tailored to your unique skin concerns.
          </p>

          <h2>Why Anti-Aging Treatments Matter</h2>
          <p>
            Healthy skin is about more than appearance. Daily exposure to UV radiation, environmental pollutants, stress, lifestyle factors, and natural aging can all impact skin quality over time.
          </p>
          <p>Professional aesthetic treatments can help support:</p>
          <ul>
            <li>Skin renewal</li>
            <li>Improved skin texture</li>
            <li>Reduction in the appearance of fine lines</li>
            <li>Brighter-looking skin</li>
            <li>More even skin tone</li>
            <li>Improved hydration and radiance</li>
            <li>Overall skin rejuvenation</li>
          </ul>

          {/* In-article image 1 — Microneedling */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-[#B0CFEE]">
            <img
              src="/images/clinic/antiaging-microneedling.jpg"
              alt="Microneedling treatment at VITO Med & Aesthetics"
              className="h-72 w-full object-cover object-top"
            />
          </div>

          <h2>Microneedling for Skin Rejuvenation</h2>
          <p>
            Microneedling is one of the most effective non-surgical skin rejuvenation treatments available today. The procedure uses tiny sterile needles to create controlled micro-channels in the skin, stimulating the body's natural healing response and encouraging collagen production.
          </p>
          <h3>What Can Microneedling Help With?</h3>
          <ul>
            <li>Fine lines and wrinkles</li>
            <li>Acne scars</li>
            <li>Enlarged pores</li>
            <li>Uneven skin texture</li>
            <li>Skin laxity</li>
            <li>Sun-damaged skin</li>
            <li>Overall skin rejuvenation</li>
          </ul>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Supports collagen production</li>
            <li>Improves skin texture</li>
            <li>Promotes smoother-looking skin</li>
            <li>Supports a more youthful appearance</li>
            <li>Enhances skin firmness</li>
          </ul>
          <p>
            Microneedling is one of the most requested anti-aging treatments in Cape Town due to its versatility and minimal downtime.
          </p>

          {/* In-article image 2 — PDT */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-[#B0CFEE]">
            <img
              src="/images/clinic/antiaging-pdt-redlight.jpg"
              alt="Photo Dynamic Therapy red light treatment at VITO Med"
              className="h-72 w-full object-cover object-center"
            />
          </div>

          <h2>Photo Dynamic Therapy (PDT)</h2>
          <p>
            Photo Dynamic Therapy (PDT) combines specialised light therapy with photosensitising products to support skin rejuvenation and skin wellness. This treatment is commonly used for individuals looking to improve skin appearance and support overall skin health.
          </p>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Supports skin rejuvenation</li>
            <li>Promotes a brighter complexion</li>
            <li>Helps improve overall skin appearance</li>
            <li>Supports healthy-looking skin</li>
            <li>Complements anti-aging treatment plans</li>
          </ul>
          <p>PDT is often combined with other aesthetic treatments to maximise results.</p>

          {/* In-article image 3 — Chemical Peel / Facial */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-[#B0CFEE]">
            <img
              src="/images/clinic/antiaging-facial-gauze.jpg"
              alt="Facial treatment at VITO Med & Aesthetics"
              className="h-72 w-full object-cover object-top"
            />
          </div>

          <h2>Chemical Peels</h2>
          <p>
            Chemical peels remain one of the most effective methods for improving skin tone and texture. A carefully selected solution is applied to the skin to encourage natural exfoliation and renewal.
          </p>
          <h3>Chemical Peels May Help Improve:</h3>
          <ul>
            <li>Pigmentation</li>
            <li>Uneven skin tone</li>
            <li>Dull skin</li>
            <li>Fine lines</li>
            <li>Acne-prone skin</li>
            <li>Sun damage</li>
          </ul>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Brighter-looking skin</li>
            <li>Improved skin texture</li>
            <li>More even skin tone</li>
            <li>Enhanced skin radiance</li>
            <li>Supports skin renewal</li>
          </ul>
          <p>Many clients choose chemical peels before special events to achieve a refreshed appearance.</p>

          <h2>Medical Grade Skincare</h2>
          <p>
            Professional treatments work best when paired with an effective home skincare routine. Medical-grade skincare products contain higher concentrations of active ingredients than many over-the-counter alternatives and are selected according to your skin concerns.
          </p>
          <h3>Common Skin Concerns Addressed</h3>
          <ul>
            <li>Aging skin</li>
            <li>Pigmentation</li>
            <li>Acne-prone skin</li>
            <li>Dry skin</li>
            <li>Sensitive skin</li>
            <li>Uneven skin texture</li>
          </ul>
          <h3>Benefits of Medical Grade Skincare</h3>
          <ul>
            <li>Supports long-term skin health</li>
            <li>Enhances treatment outcomes</li>
            <li>Promotes healthy-looking skin</li>
            <li>Supports skin hydration</li>
            <li>Helps maintain treatment results</li>
          </ul>
          <p>
            At VITO Med &amp; Aesthetics, we provide personalised skincare recommendations based on your skin assessment.
          </p>

          <h2>Dermaplaning</h2>
          <p>
            Dermaplaning is a gentle exfoliation treatment that removes dead skin cells and fine facial hair from the skin's surface. This treatment is ideal for clients seeking smoother, brighter-looking skin with no downtime.
          </p>
          <h3>Benefits of Dermaplaning</h3>
          <ul>
            <li>Instantly smoother skin</li>
            <li>Improved product absorption</li>
            <li>Brighter complexion</li>
            <li>Better makeup application</li>
            <li>Enhanced skin radiance</li>
          </ul>
          <p>
            Dermaplaning is frequently combined with chemical peels and medical-grade skincare for enhanced results.
          </p>

          {/* In-article image 4 — Consultation */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-[#B0CFEE]">
            <img
              src="/images/clinic/antiaging-consultation.jpg"
              alt="Personalised skin consultation at VITO Med & Aesthetics"
              className="h-72 w-full object-cover object-top"
            />
          </div>

          <h2>Personalised Anti-Aging Treatment Plans</h2>
          <p>No two skins are the same.</p>
          <p>
            At VITO Med &amp; Aesthetics, every client receives a comprehensive consultation to assess:
          </p>
          <ul>
            <li>Skin type</li>
            <li>Skin concerns</li>
            <li>Lifestyle factors</li>
            <li>Treatment goals</li>
            <li>Existing skincare routines</li>
          </ul>
          <p>This allows us to create customised treatment plans designed specifically around your needs.</p>

          <h2>What to Expect During Your Consultation</h2>
          <p>Your journey begins with a professional skin assessment where we discuss:</p>
          <ul>
            <li>Current skin concerns</li>
            <li>Treatment expectations</li>
            <li>Lifestyle factors</li>
            <li>Medical history</li>
            <li>Recommended treatment options</li>
          </ul>
          <p>
            Our goal is to provide personalised care and realistic treatment recommendations tailored to your individual needs.
          </p>

          <h2>Book Your Anti-Aging Consultation in Cape Town</h2>
          <p>
            If you are looking for professional anti-aging treatments in Cape Town — microneedling, chemical peels, photo dynamic therapy, medical-grade skincare, or dermaplaning — VITO Med &amp; Aesthetics can help.
          </p>
          <p>
            Our team is committed to helping you achieve healthy, radiant-looking skin through safe, personalised aesthetic treatments designed around your goals.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-[#B0CFEE] bg-white p-8 text-center">
          <p className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
            Ready to start your skin rejuvenation journey?
          </p>
          <p className="mt-2 text-sm text-[#5B6157]">
            Book a consultation with Dr Precious Garnett — Table View or Khayelitsha, Cape Town.
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
