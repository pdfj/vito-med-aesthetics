import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Botox: Understanding Wrinkles & Anti-Wrinkle Injections | VITO Med',
  description:
    'Everything you need to know about Botox face treatment — how wrinkles form, prevention tips, and treatment options including facial botox, fillers, microneedling and chemical peels. By Dr Precious Garnett.',
};

export default function BotoxBlogPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />

      {/* Hero */}
      <div className="relative bg-[#0A1929] pt-[77px]">
        <div className="relative aspect-[21/7] max-h-[420px] overflow-hidden">
          <img
            src="/images/clinic/aesthetics-botox.jpg"
            alt="Anti-wrinkle injection treatment"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 sm:px-8">
              <span className="inline-flex rounded-full bg-[#1A7FD4] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                Aesthetics
              </span>
              <h1 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Botox: Understanding Wrinkles and How Anti-Wrinkle Injections Can Give Your Best Skin
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> June 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> 7 min read
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Dr Precious Garnett — VITO Med & Aesthetics
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
            Wrinkles are a natural part of ageing, but today there are multiple treatment options available to help soften their appearance and support healthier-looking skin. One of the most popular non-surgical aesthetic treatments is Botox face treatment, widely used to reduce dynamic wrinkles and refresh facial appearance.
          </p>

          <h2>What Are Wrinkles?</h2>
          <p>
            Wrinkles are creases, lines, or folds that form on the skin due to the natural ageing process or exposure to external factors such as sun damage, smoking and second-hand smoke exposure, environmental pollution, poor nutrition, dehydration, and repetitive facial movements.
          </p>
          <p>
            Although wrinkles are a normal part of life, lifestyle choices and skincare habits can influence how early they appear and how noticeable they become.
          </p>

          <h2>How Are Wrinkles Formed?</h2>
          <p>
            Wrinkles develop because of the gradual breakdown of collagen and elastin fibres in the skin. Collagen provides structure and strength, while elastin gives the skin flexibility and the ability to return to its original shape after movement.
          </p>
          <p>As we age:</p>
          <ul>
            <li>Collagen production naturally decreases</li>
            <li>Elastin fibres weaken</li>
            <li>Skin becomes thinner and less elastic</li>
            <li>Natural oil production reduces, causing dryness</li>
          </ul>
          <p>
            As a result, the skin becomes less able to bounce back after movement, leading to visible lines and wrinkles. Repeated facial expressions such as smiling, squinting, frowning, and raising the eyebrows also contribute to wrinkle formation over time.
          </p>

          <h2>Can You Prevent Wrinkles?</h2>
          <p>
            Although wrinkles cannot be completely avoided, healthy skincare and lifestyle choices may help slow their development.
          </p>

          <h3>Protect Your Skin from the Sun</h3>
          <p>
            Daily sunscreen use is one of the most effective anti-ageing habits. Use broad-spectrum sunscreen with SPF 30 or higher whenever outdoors.
          </p>

          <h3>Keep Your Skin Hydrated</h3>
          <p>
            Moisturising regularly helps maintain skin comfort and supports the appearance of smoother skin.
          </p>

          <h3>Avoid Smoking</h3>
          <p>
            Smoking accelerates skin ageing by reducing blood circulation and increasing collagen breakdown. Second-hand smoke may also contribute to premature ageing.
          </p>

          <h3>Eat a Healthy Diet</h3>
          <p>
            Focus on a balanced diet rich in fruits, vegetables, lean proteins, healthy fats, and adequate water intake.
          </p>

          <h3>Practice Good Skincare Habits</h3>
          <ul>
            <li>Remove makeup before sleeping</li>
            <li>Use gentle skincare products</li>
            <li>Exfoliate appropriately</li>
            <li>Moisturise consistently</li>
            <li>Follow a personalised skincare routine</li>
          </ul>

          <h2>Can We Treat Wrinkles?</h2>
          <p>
            Yes. Modern aesthetic medicine offers several treatment approaches depending on skin type, wrinkle severity, and treatment goals.
          </p>

          <h3>1. Botox Face Treatment (Botulinum Toxin Injections)</h3>
          <p>
            One of the most requested treatments for facial rejuvenation is Botox face treatment. Botulinum toxin is a purified medical product used to temporarily reduce muscle activity. During Botox facial treatment, carefully placed injections help relax muscles responsible for expression lines.
          </p>
          <p>Common areas treated include:</p>
          <ul>
            <li>Forehead lines</li>
            <li>Crow's feet</li>
            <li>Frown lines</li>
            <li>Bunny lines</li>
            <li>Chin dimpling</li>
          </ul>
          <p>
            Because face Botox works by limiting repetitive muscle movement, the skin appears smoother and more refreshed. In addition to cosmetic use, botulinum toxin may also be used medically for conditions such as excessive sweating, muscle spasms, overactive bladder, and certain neurological conditions.
          </p>
          <p>
            Many patients choose Botox for face treatments because they are non-surgical, require minimal downtime, and can produce natural-looking results when administered appropriately.
          </p>

          <h3>2. Dermal Fillers</h3>
          <p>
            Dermal fillers such as hyaluronic acid may restore volume and soften static wrinkles caused by volume loss. Unlike facial Botox, fillers focus on replacing lost structure and volume rather than reducing muscle movement.
          </p>
          <p>
            Best for: under-eye wrinkles/pigmentation (tear trough), laugh lines, dropping face (face lift effect), upper lip lines (especially for smokers — barcode lines), and lips for hydration and enhancing volume.
          </p>

          <h3>3. Microneedling</h3>
          <p>
            Microneedling is a minimally invasive skin rejuvenation treatment that uses very fine needles to create controlled micro-injuries in the skin. This process stimulates the body's natural healing response and encourages the production of collagen and elastin.
          </p>
          <p>Microneedling may help improve:</p>
          <ul>
            <li>Fine lines and wrinkles</li>
            <li>Skin texture and tone</li>
            <li>Mild skin laxity</li>
            <li>Acne scarring</li>
            <li>Overall skin rejuvenation</li>
          </ul>

          <h3>4. Chemical Peels</h3>
          <p>
            Chemical peels use specialised acid solutions to exfoliate the outer skin layers and encourage smoother-looking skin. Benefits may include improved skin texture, reduction in fine lines, and support of natural collagen renewal.
          </p>

          <h3>5. Topical Treatments</h3>
          <p>
            Over-the-counter skincare and prescription products containing ingredients such as retinoids, antioxidants, and alpha hydroxy acids (AHAs) may help improve the appearance of fine lines and support skin renewal.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>Is Botox for face safe?</h3>
          <p>
            When performed by a qualified healthcare professional following appropriate assessment, anti-wrinkle injections are widely used in aesthetic practice.
          </p>

          <h3>How long does Botox face treatment last?</h3>
          <p>Results vary between individuals and treatment areas, but usually between 4–6 months.</p>

          <h3>Does facial Botox make you look frozen?</h3>
          <p>Modern treatment techniques aim to create refreshed and natural-looking outcomes.</p>

          <h3>At what age should someone start anti-wrinkle injections?</h3>
          <p>
            Treatment decisions should be individualised and based on skin concerns rather than age alone.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Wrinkles are a natural part of life, but there are many ways to support skin health and manage visible signs of ageing. Whether through preventative skincare, lifestyle changes, or treatments such as Botox face treatment, personalised care can help you achieve natural and balanced results.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-[#B0CFEE] bg-white p-8 text-center">
          <p className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
            Ready to explore your options?
          </p>
          <p className="mt-2 text-sm text-[#5B6157]">
            Consult with Dr Precious Garnett at VITO Med &amp; Aesthetics — Table View or Khayelitsha.
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
