import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock, MapPin } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Dermal Fillers Explained: Everything You Need to Know | VITO Med',
  description:
    'What are dermal fillers? Dr Precious Garnett explains how facial fillers work, which areas they treat, what to expect during treatment, and how to choose a qualified aesthetic practitioner.',
};

export default function FillersBlogPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />

      {/* Hero */}
      <div className="relative bg-[#0A1929] pt-[77px]">
        <div className="relative aspect-[21/7] max-h-[420px] overflow-hidden">
          <img
            src="/images/clinic/dr-lip-filler-injection.jpg"
            alt="Dr Garnett performing lip filler injection at VITO Med"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-[#0A1929]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-3xl px-5 pb-10 sm:px-8">
              <span className="inline-flex rounded-full bg-[#1A7FD4] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                Aesthetics
              </span>
              <h1 className="mt-4 font-cormorant-garamond text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Dermal Fillers Explained: Everything You Need to Know About Facial Fillers
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> June 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> 8 min read
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

        <div className="prose prose-slate max-w-none text-[#1F2A24] blog-content">

          <p className="lead text-lg leading-relaxed text-[#5B6157]">
            One of the most common questions patients ask is: <em>what are dermal fillers?</em> Dermal fillers are injectable treatments designed to restore lost volume, enhance facial features, improve facial balance, and soften certain lines and folds. They are commonly used in aesthetic medicine as a non-surgical option to support facial rejuvenation and enhancement.
          </p>

          <h2>What Are Dermal Fillers?</h2>
          <p>
            You may also hear them referred to as derma filler, face filler, facial fillers, or simply fillers. These terms generally refer to injectable products used to enhance and restore facial contours.
          </p>

          <h2>How Do Dermal Fillers Work?</h2>
          <p>As we age, our skin naturally loses collagen, elastin, fat volume, and hydration. These changes may contribute to:</p>
          <ul>
            <li>Hollow areas</li>
            <li>Reduced facial definition</li>
            <li>Fine lines and folds</li>
            <li>Changes in facial proportions</li>
          </ul>
          <p>
            Dermal fillers work by placing carefully selected injectable products beneath the skin to restore support and improve contour where volume has reduced. Many modern facial fillers contain hyaluronic acid — a substance naturally found in the body that helps maintain hydration and skin structure.
          </p>

          <h2>What Areas Can Fillers for Face Treat?</h2>

          <h3>Cheek Fillers</h3>
          <p>
            Cheek fillers are among the most popular facial rejuvenation treatments. The cheeks naturally lose volume over time, which may contribute to flattening of the mid-face, more prominent folds, and reduced facial definition. Cheek fillers may help restore volume, improve contour, support facial harmony, and create a refreshed appearance.
          </p>

          <h3>Lip Enhancement</h3>
          <p>
            Lip fillers may be used to improve shape, structure, hydration, and balance.
          </p>

          <h3>Laugh Lines / Marionette Lines</h3>
          <p>
            Fillers may soften the appearance of lines extending from the nose toward the mouth, and lines that extend downward from the corners of the mouth — which may contribute to a tired appearance.
          </p>

          <h3>Under-Eye / Tear Trough</h3>
          <p>
            Selected patients may benefit from treatment that supports smoother transitions between the lower eyelid and cheek. This is caused by the loss of the fat cushioning under our eyes as we age — particularly common with dark under-eye circles in African/Black skin.
          </p>

          <h3>Chin and Jawline Definition</h3>
          <p>
            Face fillers may help improve facial proportions and contour for a more defined look.
          </p>

          <h2>What Happens During a Dermal Filler Appointment?</h2>

          <h3>Consultation</h3>
          <p>
            A detailed facial consultation and assessment is performed to understand your goals, medical history, facial anatomy, and treatment suitability.
          </p>

          <h3>Treatment</h3>
          <p>
            Small amounts of derma filler are strategically placed using specialised injection techniques.
          </p>

          <h3>Aftercare</h3>
          <p>Patients are commonly advised to:</p>
          <ul>
            <li>Avoid strenuous exercise immediately after treatment</li>
            <li>Minimise pressure on treated areas</li>
            <li>Follow personalised aftercare guidance which includes massaging the area</li>
          </ul>

          <h2>What Results Can You Expect?</h2>
          <p>
            The most beautiful thing about fillers is the immediate result — although final outcomes may continue to settle over 2–4 weeks. Treatment goals typically focus on natural-looking enhancement, wrinkle reduction, facial balance, restored volume, and a refreshed appearance.
          </p>
          <p>
            <strong>We enhance, not change. We reduce, not make you look unrecognisable.</strong> The aim is to look like you — but better. Your friends and family see that something is different, brighter, better — but they can't put a finger on it.
          </p>

          <h2>Are Dermal Fillers Safe?</h2>
          <p>
            When administered by a qualified healthcare professional following a comprehensive consultation, fillers are widely used in aesthetic practice.
          </p>
          <p>
            <strong>In South Africa only Specialist Doctors and trained aesthetic dentists/nursing practitioners are licensed to offer fillers</strong> — not your beautician or spa. It has to be done by a trained medical professional. This is because they are trained to analyse your face and skin professionally, and to prevent complications. Choose your aesthetic practitioner wisely — it matters.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>What are fillers made of?</h3>
          <p>
            Many commonly used dermal fillers contain hyaluronic acid, although different filler products may exist depending on treatment goals.
          </p>

          <h3>Are cheek fillers permanent?</h3>
          <p>
            Most cheek fillers are temporary. Treatment longevity usually ranges from 12–18 months, but also depends on age, severity of lines/volume loss, and other individual factors.
          </p>

          <h3>Do face fillers look natural?</h3>
          <p>
            Yes, when done properly and your facial proportions are calculated. Treatment goals generally aim to enhance facial balance while maintaining natural expression.
          </p>

          <h3>Is there downtime after facial fillers?</h3>
          <p>
            Many patients return to normal activities shortly after treatment — we call it a <em>lunch break treatment</em>. You visit your aesthetic doctor for approximately one hour in your work lunch break and return to work after. Mild swelling or bruising may occur but resolves spontaneously when done correctly.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Understanding what dermal fillers are helps patients make informed decisions about aesthetic treatments. Do it with a trained health professional — it is a medicine for your skin.
          </p>
          <p>
            Whether your goal is subtle rejuvenation, reducing wrinkles, improved facial proportions, or restoring lost volume, dermal fillers offer a personalised and non-surgical treatment option when performed by a qualified medical professional.
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
