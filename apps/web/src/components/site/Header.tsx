'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, Mail, CalendarCheck, MapPin } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { site, navLinks } from '@/lib/site';

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isTransparent = overlay && !scrolled;
  const navColor = isTransparent ? 'text-white/85' : 'text-[#5B6157]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* â”€â”€ Utility strip â”€â”€ */}
      <div className="bg-[#0A1929] text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-1 px-5 text-xs sm:justify-between sm:px-8">
          <div className="flex items-center gap-1">
            <a
              href={site.phonePrimaryHref}
              className="inline-flex items-center gap-1.5 font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phonePrimary}
            </a>
            <span className="mx-2.5 text-white/40">|</span>
            <a
              href={site.emailHref}
              className="hidden items-center gap-1.5 text-white/85 hover:text-white transition-colors sm:inline-flex"
            >
              <Mail className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
          <span className="hidden items-center gap-1.5 text-white/85 lg:inline-flex">
            <MapPin className="h-3.5 w-3.5" />
            Table View &amp; Khayelitsha &middot; Cape Town
          </span>
        </div>
      </div>

      {/* â”€â”€ Main nav row â”€â”€ */}
      <div
        className={`transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent'
            : 'glass-nav'
        }`}
      >
        <div className="mx-auto max-w-7xl pl-3 pr-5 sm:pl-4 sm:pr-8">
          <div className="flex h-[68px] items-center justify-between gap-4">
            {/* Brand */}
            <Link href="/" className="flex shrink-0 items-center group">
              <img
                src="/vito-logo.jpeg"
                alt="VITO Med & Aesthetics"
                className={`h-14 w-14 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.04] ${
                  isTransparent
                    ? 'border-2 border-white/85 shadow-lg'
                    : 'border-2 border-[#1A7FD4]/35'
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm tracking-wide transition-colors ${
                      isTransparent
                        ? 'text-white/85 hover:text-white'
                        : active
                          ? 'text-[#1F2A24]'
                          : 'text-[#5B6157] hover:text-[#1F2A24]'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#1A7FD4] transition-all duration-300 ${
                        active ? 'w-full' : 'w-0'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex shrink-0 items-center">
              <Link
                href="/contact"
                className="vito-shine inline-flex items-center gap-2 rounded-full bg-[#6E7F63] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#4F5E46] hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E7F63] focus-visible:ring-offset-2"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </Link>
            </div>

            {/* Mobile trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className={`xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                    isTransparent
                      ? 'border-white/40 bg-white/10 text-white backdrop-blur-sm'
                      : 'border-[#B0CFEE] text-[#1F2A24]'
                  }`}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[86%] max-w-sm border-l border-[#B0CFEE] bg-[#E8F4FF] p-0"
              >
                <div className="flex h-full flex-col">
                  <SheetTitle className="sr-only">VITO Med &amp; Aesthetics navigation</SheetTitle>
                  <SheetDescription className="sr-only">
                    Browse pages and contact options
                  </SheetDescription>
                  <div className="flex items-center gap-3 border-b border-[#B0CFEE] px-6 py-4">
                    <img
                      src="/vito-logo.jpeg"
                      alt="VITO Med & Aesthetics"
                      className="h-14 w-14 rounded-full border-2 border-[#1A7FD4]/35 object-cover shadow-sm"
                    />
                    <span className="font-cormorant-garamond text-lg font-semibold text-[#1F2A24]">
                      VITO Med &amp; Aesthetics
                    </span>
                  </div>
                  <nav className="flex flex-col px-3 py-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={`rounded-lg px-3 py-3 text-base transition-colors ${
                            pathname === link.href
                              ? 'bg-white text-[#1F2A24] font-medium'
                              : 'text-[#5B6157] hover:bg-white hover:text-[#1F2A24]'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto space-y-3 border-t border-[#B0CFEE] px-6 py-6">
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-[#6E7F63] px-5 py-3 text-sm font-medium text-[#4F5E46]"
                    >
                      <Phone className="h-4 w-4" />
                      WhatsApp {site.whatsapp}
                    </a>
                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#6E7F63] px-5 py-3 text-sm font-medium text-white"
                      >
                        <CalendarCheck className="h-4 w-4" />
                        Book Appointment
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
