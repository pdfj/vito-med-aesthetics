import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import { site } from '@/lib/site';

export const metadata = {
  title: 'IV Vitamin Drips in Cape Town: A Guide to Wellness, Skin Glow & Body Support | VITO Med',
  description:
    'Looking for professional IV Vitamin Drips in Cape Town? VITO Med & Aesthetics offers a range of wellness and aesthetic IV therapies — Skin Glow, Energy, Immune Boost, Iron Infusions and more.',
};

export default function IVDripsBlogPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />

      {/* Hero */}
      <div className="relative bg-[#0A1929] pt-[77px]">
        <div className="relative aspect-[21/7] max-h-[420px] overflow-hidden">
          <img
            src="/images/clinic/iv-drip-dr-blue.jpg"
            alt="Dr Precious Garnett with patient during IV drip treatment at VITO Med"
            className="h-full w-full object-cover object-top opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 sm:px-8">
              <span className="inline-flex rounded-full bg-[#1A7FD4] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                IV Therapy
              </span>
              <h1 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                IV Vitamin Drips in Cape Town: A Guide to Wellness, Skin Glow &amp; Body Support
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> June 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> 7 min read
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
            Looking for professional IV Vitamin Drips in Cape Town? At VITO Med &amp; Aesthetics, we offer a range of wellness and aesthetic IV therapies designed to support hydration, skin health, energy levels, recovery, and overall wellbeing.
          </p>

          <p>
            IV vitamin drip therapy has become one of the most sought-after wellness treatments in Cape Town. Whether you're preparing for a special occasion, looking to support healthy-looking skin, recovering from a demanding schedule, or simply prioritising self-care, IV therapy offers a convenient and personalised wellness experience.
          </p>

          {/* In-article image 1 */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-[#B0CFEE]">
            <img
              src="/images/clinic/iv-patient-red-lounge.jpg"
              alt="Patient relaxing during IV drip session at VITO Med & Aesthetics"
              className="h-72 w-full object-cover object-top"
            />
          </div>

          <h2>What Is IV Vitamin Drip Therapy?</h2>
          <p>
            IV vitamin drip therapy involves administering fluids together with selected vitamins, minerals, and nutrients directly into the bloodstream. Because the nutrients bypass the digestive system, this treatment is often chosen by individuals seeking hydration support and a wellness-focused experience.
          </p>
          <p>
            Many clients choose IV therapy in Cape Town as part of their health, beauty, and lifestyle routines.
          </p>

          <h2>IV Drips Available at VITO Med &amp; Aesthetics</h2>
          <p>We offer a variety of IV treatments tailored to individual goals:</p>
          <ul>
            <li>Skin Glow Drip</li>
            <li>Skin Lightening Drip</li>
            <li>Anti-Aging Drip</li>
            <li>Glutathione Drip</li>
            <li>Brain Boost Drip</li>
            <li>Energy Boost Drip</li>
            <li>Immune Boost Drip</li>
            <li>Detox Drip</li>
            <li>Iron Infusion</li>
            <li>Weight Loss Drip</li>
            <li>Weight Gain Drip</li>
            <li>Libido Boost Drip</li>
            <li>Fertility Boost Drip</li>
            <li>Sports Endurance Drip</li>
            <li>Sports Recovery Drip</li>
          </ul>

          <h2>Skin Glow Drip — Our Signature Favourite</h2>
          <p>
            The Skin Glow Drip is one of our most requested aesthetic wellness treatments. It is often selected by clients looking to support hydrated, healthy-looking, radiant skin while complementing their skincare routine.
          </p>
          <p>
            Many clients also choose this treatment before weddings, photoshoots, holidays, and special events.
          </p>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Supports hydrated-looking skin</li>
            <li>Promotes healthy, bright, glowing skin</li>
            <li>Helps reduce the appearance of hyperpigmentation (<em>amashubaba</em>)</li>
            <li>Supports improvement in the appearance of dark spots and blemishes</li>
            <li>Complements a consistent skincare routine</li>
            <li>Promotes a refreshed and rejuvenated appearance</li>
          </ul>
          <p>
            For those searching for Skin Glow Drips in Cape Town, VITO Med &amp; Aesthetics offers personalised treatment plans based on your aesthetic goals.
          </p>

          {/* In-article image 2 */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-[#B0CFEE]">
            <img
              src="/images/clinic/iv-pink-scrubs-cannula.jpg"
              alt="IV cannula insertion at VITO Med & Aesthetics"
              className="h-72 w-full object-cover object-top"
            />
          </div>

          <h2>Iron Infusions in Cape Town</h2>
          <p>
            Iron infusions differ from standard wellness IV drips and are used to deliver iron directly into the bloodstream when clinically appropriate. Iron treatment should only be administered following a healthcare assessment and where medically indicated.
          </p>
          <h3>Potential Benefits When Medically Appropriate</h3>
          <ul>
            <li>Supports restoration of iron levels</li>
            <li>May support energy where iron deficiency exists</li>
            <li>Supports oxygen transport</li>
            <li>Can complement treatment plans under medical guidance</li>
          </ul>
          <p>
            Before receiving an Iron Infusion in Cape Town, a consultation and assessment are required to determine suitability.
          </p>

          <h2>Energy Boost Drip</h2>
          <p>
            Modern lifestyles can leave many people feeling depleted. The Energy Boost Drip is designed for individuals seeking hydration and wellness support during demanding schedules.
          </p>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Supports hydration</li>
            <li>Supports general wellbeing</li>
            <li>Complements an active lifestyle</li>
            <li>Supports daily wellness goals</li>
          </ul>

          <h2>Brain Boost Drip</h2>
          <p>
            The Brain Boost Drip is popular among professionals, entrepreneurs, students, and individuals with demanding schedules.
          </p>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Supports hydration and wellbeing</li>
            <li>May assist with maintaining focus</li>
            <li>Complements productivity goals</li>
            <li>Supports mental wellness routines</li>
          </ul>

          <h2>Immune Boost Drip</h2>
          <p>
            The Immune Boost Drip contains carefully selected vitamins and nutrients commonly used to support wellness and immune health.
          </p>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Supports immune wellness</li>
            <li>Supports hydration</li>
            <li>Complements healthy lifestyle habits</li>
            <li>Supports recovery and wellbeing</li>
          </ul>

          <h2>Detox Drip</h2>
          <p>
            The Detox Drip focuses on hydration and wellness support and is commonly selected as part of a balanced self-care routine.
          </p>
          <h3>Potential Benefits</h3>
          <ul>
            <li>Hydration support</li>
            <li>Complements recovery and wellness habits</li>
            <li>Supports overall wellbeing</li>
            <li>Helps maintain healthy lifestyle goals</li>
          </ul>

          <h2>Why Choose VITO Med &amp; Aesthetics?</h2>
          <ul>
            <li><strong>Professional medical oversight</strong> — all IV treatments are administered under doctor supervision</li>
            <li><strong>Personalised treatment plans</strong> — we assess your goals and recommend the right drip for you</li>
            <li><strong>Premium wellness and aesthetic IV therapies</strong> — a full menu of carefully curated formulas</li>
            <li><strong>Comfortable and welcoming environment</strong> — relax in our dedicated IV lounge</li>
            <li><strong>Two convenient Cape Town locations</strong> — Table View and Khayelitsha, Litha Park</li>
            <li><strong>Focus on patient care and wellbeing</strong> — your safety and comfort come first, always</li>
          </ul>

          <h2>Book Your IV Vitamin Drip in Cape Town</h2>
          <p>
            Discover personalised aesthetic and wellness care with VITO Med &amp; Aesthetics and explore IV therapy options designed around your individual goals.
          </p>
          <p>
            Our team is ready to help you find the treatment that best aligns with your wellness journey.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-[#B0CFEE] bg-white p-8 text-center">
          <p className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
            Ready to book your IV drip?
          </p>
          <p className="mt-2 text-sm text-[#5B6157]">
            Contact VITO Med &amp; Aesthetics — Table View or Khayelitsha, Cape Town.
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
