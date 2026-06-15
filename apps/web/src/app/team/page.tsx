import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppFab from '@/components/site/WhatsAppFab';
import ScrollReveal from '@/components/site/ScrollReveal';
import PageHero from '@/components/site/PageHero';
import TeamPhoto from '@/components/site/TeamPhoto';
import Achievements from '@/components/site/Achievements';
import { site } from '@/lib/site';
import { team } from '@/lib/team-data';

export const metadata = {
  title: 'Our Team | VITO Med & Aesthetics',
  description: 'Meet the team behind VITO Med & Aesthetics, led by founder Dr Precious Garnett.',
};

export default function TeamPage() {
  return (
    <main className="bg-[#E8F4FF] text-[#1F2A24]">
      <Header />
      <PageHero
        crumb="Team"
        eyebrow="Our Team"
        title="The people behind your care"
        description="A small, dedicated team led by a qualified medical doctor — here to make sure you always feel safe, heard and well looked after."
      />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24 md:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#B0CFEE] bg-white vito-lift">
                <TeamPhoto src={member.image} alt={member.name} initials={member.initials} />
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24]">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#6E7F63]">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5B6157]">{member.bio}</p>
                  {member.credentials ? (
                    <div className="mt-5 space-y-2 border-t border-[#B0CFEE] pt-5">
                      {member.credentials.map((c) => (
                        <div
                          key={c}
                          className="flex items-start gap-2 text-xs leading-relaxed text-[#5B6157]"
                        >
                          <span className="text-[#1A7FD4]">—</span>
                          {c}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </section>

      {/* Doctor's Achievements */}
      <Achievements light />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-24">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#B0CFEE] bg-white px-8 py-12 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-cormorant-garamond text-2xl font-semibold text-[#1F2A24] sm:text-3xl">
                Come and meet us
              </h2>
              <p className="mt-2 text-sm text-[#5B6157]">
                Visit our clinic in Sandown Square, or reach out on WhatsApp.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6E7F63] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4F5E46]"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </Link>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B0CFEE] px-6 py-3 text-sm font-medium text-[#1F2A24] transition-colors hover:border-[#6E7F63]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
      <WhatsAppFab />
    </main>
  );
}
