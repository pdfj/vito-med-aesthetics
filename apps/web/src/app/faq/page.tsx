import Link from 'next/link';
import { Phone, Mail, CalendarCheck } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import PageHero from '@/components/site/PageHero';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { site } from '@/lib/site';
import { faqs } from '@/lib/faq-data';

export const metadata = {
  title: 'FAQ | VITO Med & Aesthetics',
  description:
    'Answers to common questions about VITO Med & Aesthetics — services, booking, medical aid, online consultations and more.',
};

export default function FaqPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="FAQ"
        eyebrow="Good To Know"
        title="Frequently asked questions"
        description="Everything you might want to know before your visit. Can't find your answer? We're just a message away."
      />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-24 md:py-28">
        <ScrollReveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className="border-b border-[#B0CFEE]"
              >
                <AccordionTrigger className="py-5 text-base font-medium text-[#1F2A24] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-6 text-sm leading-relaxed text-[#5B6157]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* Still have questions */}
        <ScrollReveal>
          <div className="mt-12 rounded-2xl border border-[#B0CFEE] bg-white p-8 text-center">
            <h2 className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
              Still have a question?
            </h2>
            <p className="mt-2 text-sm text-[#5B6157]">
              Our team is happy to help. Reach out and we'll get right back to you.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6E7F63] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4F5E46]"
              >
                <Phone className="h-4 w-4" />
                WhatsApp {site.whatsapp}
              </a>
              <a
                href={site.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B0CFEE] px-6 py-3 text-sm font-medium text-[#1F2A24] transition-colors hover:border-[#6E7F63]"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#4F5E46] transition-colors hover:text-[#1F2A24]"
            >
              <CalendarCheck className="h-4 w-4" />
              Or book an appointment
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
