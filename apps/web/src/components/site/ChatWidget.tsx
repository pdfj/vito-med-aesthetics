'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { site } from '@/lib/site';

type Msg = { from: 'bot' | 'user'; text: string };

const QUICK = [
  'What services do you offer?',
  'What are your hours?',
  'Where are you located?',
  'How do I book?',
  'Tell me about IV drips',
];

// Lightweight on-device assistant. Answers from the clinic's real data.
function answer(qRaw: string): string {
  const q = qRaw.toLowerCase();

  const has = (...words: string[]) => words.some((w) => q.includes(w));

  if (has('hour', 'open', 'time', 'when can'))
    return `We're open:\n• Mon–Fri: 08:30 – 18:00\n• Saturday: 09:00 – 14:00\n• Sunday & public holidays: Closed`;

  if (has('where', 'location', 'address', 'branch', 'find you'))
    return `We have two branches in Cape Town:\n\n📍 Table View — Block B207, Sandown Square, Passerina Road, Sandown\n📍 Khayelitsha — 70 Ngcwalazi Drive, Litha Park\n\nVisit the Contact page for maps & directions.`;

  if (has('book', 'appointment', 'reserve', 'schedule', 'consult'))
    return `Booking is easy! 📅\nYou can:\n• Use the booking form on our Contact page\n• Call us on ${site.phonePrimary}\n• WhatsApp us anytime\n\nWould you like the booking link? Head to /contact.`;

  if (has('iv', 'drip', 'vitamin'))
    return `Our IV Vitamin Drips include 16+ formulas 💧\nSkin Glow, Skin Lightening, Glutathione, Anti-Aging, Brain Boost, Energy, Immune, Libido, Fertility, Detox, Anti-Inflammatory, Sports Endurance & Recovery, VIP 5-in-1 Cocktail, Weight Loss & Weight Gain — all given by a qualified doctor.`;

  if (has('botox', 'wrinkle', 'filler', 'aesthetic'))
    return `Our medical aesthetics include Anti-Wrinkle (Botox), Dermal Fillers, hyperpigmentation & acne treatments, chemical peels, micro-needling, derma-planing, LED therapy and more — all doctor-administered. ✨`;

  if (has('skin', 'pigment', 'acne', 'peel', 'laser'))
    return `For skin we offer treatment for hyperpigmentation & dark spots, acne, chemical peels, micro-needling, derma-planing, LED photodynamic therapy, and laser/IPL care. Dr Garnett creates a personalised plan for your skin.`;

  if (has('weight', 'slim', 'ozempic', 'fat'))
    return `We offer medically-supervised weight management: fat-dissolving injections, weight-loss injections, the Slender Wonder programme and Ozempic. All under a qualified doctor's care.`;

  if (has('travel', 'vaccine', 'malaria', 'immun'))
    return `Our Travel Clinic covers travel medical assessments, vaccines & immunizations, malaria prophylaxis, travel self-care kits, certifications and in-country/virtual advice. ✈️`;

  if (has('price', 'cost', 'how much', 'fee', 'quote'))
    return `Pricing depends on the treatment and is confirmed on consultation, so you always get an honest, tailored quote. Pop in a booking or message us and we'll guide you. 💬`;

  if (has('doctor', 'precious', 'garnett', 'who', 'qualified', 'nurse'))
    return `VITO is led by Dr Precious Garnett — a qualified medical doctor (MBChB, UCT) with 10+ years' experience, plus qualifications in Public Health, HIV Management, Travel Medicine and Medical Aesthetics. Not a nurse or therapist — a real doctor. 👩‍⚕️`;

  if (has('service', 'offer', 'treatment', 'do you do', 'what can'))
    return `We offer three pillars of care:\n1️⃣ Medical Aesthetics (Botox, fillers, IV drips, skin & laser)\n2️⃣ Travel Clinic (vaccines, assessments, kits)\n3️⃣ Acute & Chronic Medical Care\n\nWhich would you like to know more about?`;

  if (has('phone', 'call', 'number', 'contact', 'whatsapp', 'email'))
    return `Reach us anytime:\n📞 ${site.phonePrimary}\n💬 WhatsApp: ${site.whatsapp}\n✉️ ${site.email}`;

  if (has('hi', 'hello', 'hey', 'good morning', 'good afternoon'))
    return `Hi there! 👋 I'm VITO's assistant. I can help with services, pricing, hours, location and booking. What would you like to know?`;

  if (has('thank', 'thanks', 'cheers'))
    return `You're most welcome! 😊 Anything else I can help with?`;

  return `Great question! I can help with our services, IV drips, skin & laser, travel clinic, hours, location, pricing and booking. You can also reach the team directly on ${site.phonePrimary} or WhatsApp. Try one of the quick options below 👇`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: 'bot',
      text: "Hi! 👋 I'm VITO's virtual assistant. Ask me about treatments, prices, hours, our branches or booking an appointment.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, typing, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: 'user', text: t }]);
    setInput('');
    setTyping(true);
    // simulate thinking
    window.setTimeout(() => {
      setMsgs((m) => [...m, { from: 'bot', text: answer(t) }]);
      setTyping(false);
    }, 650);
  };

  return (
    <>
      {/* Launcher */}
      <button
        aria-label="Open chat assistant"
        onClick={() => setOpen((o) => !o)}
        className="vito-glow-sage fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#6E7F63] to-[#4F5E46] text-white shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1A7FD4] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1A7FD4]" />
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="vito-pop fixed bottom-24 right-5 z-50 flex h-[520px] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-[#B0CFEE] bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#0D2040] to-[#0A1929] px-5 py-4 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A7FD4]/20 text-[#90C8F8]">
              <Sparkles className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">VITO Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7CDF9A]" />
                Online · replies instantly
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-[#E8F4FF] px-4 py-4">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.from === 'user'
                      ? 'rounded-br-sm bg-[#6E7F63] text-white'
                      : 'rounded-bl-sm border border-[#B0CFEE] bg-white text-[#1F2A24]'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-[#B0CFEE] bg-white px-4 py-3">
                  <span className="vito-dot h-2 w-2 rounded-full bg-[#6E7F63]" />
                  <span className="vito-dot h-2 w-2 rounded-full bg-[#6E7F63]" />
                  <span className="vito-dot h-2 w-2 rounded-full bg-[#6E7F63]" />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="flex gap-2 overflow-x-auto border-t border-[#B0CFEE] bg-white px-3 py-2.5">
            {QUICK.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="whitespace-nowrap rounded-full border border-[#B0CFEE] bg-[#E8F4FF] px-3 py-1.5 text-xs text-[#5B6157] transition-colors hover:border-[#6E7F63] hover:text-[#1F2A24]"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-[#B0CFEE] bg-white px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 rounded-full border border-[#B0CFEE] bg-[#E8F4FF] px-4 py-2.5 text-sm text-[#1F2A24] outline-none transition-colors focus:border-[#6E7F63]"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6E7F63] text-white transition-colors hover:bg-[#4F5E46]"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
