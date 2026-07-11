'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CalendarCheck, Loader2 } from 'lucide-react';
import { site } from '@/lib/site';

const serviceOptions = [
  'Medical Aesthetics — Anti-Wrinkle Injectables & Fillers',
  'IV Vitamin Drips',
  'Skin Treatments & Peels',
  'Medical Weight Loss',
  'Travel Clinic & Vaccines',
  'Acute / Chronic Medical Care',
  'Online Consultation',
  'Other / Not sure yet',
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

const fieldClass =
  'w-full rounded-lg border border-[#B0CFEE] bg-white px-4 py-3 text-sm text-[#1F2A24] placeholder:text-[#7B9AAE] transition-colors focus:border-[#6E7F63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E7F63]/30';

const labelClass = 'mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-[#6E7F63]';

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialState);

  // Best-effort save to our records. WhatsApp is the guaranteed delivery channel,
  // so a failure here (e.g. database not configured) never blocks the booking.
  const mutation = useMutation({
    mutationFn: async (payload: FormState) => {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Could not save request.');
      }
      return res.json();
    },
    onError: (error: Error) => {
      // Silent — the WhatsApp hand-off below still delivers the booking.
      console.error('Appointment DB save failed:', error.message);
    },
  });

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const buildWhatsAppUrl = (data: FormState) => {
    const lines = [
      '*New Booking Request — VITO Med & Aesthetics*',
      `Name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      data.service ? `Service: ${data.service}` : null,
      data.preferredDate ? `Preferred date: ${data.preferredDate}` : null,
      data.preferredTime ? `Preferred time: ${data.preferredTime}` : null,
      data.message ? `Message: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');
    return `${site.whatsappHref}?text=${encodeURIComponent(lines)}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone) {
      toast.error('Please add your name, email and phone number.');
      return;
    }

    // 1) Save a backup record (best effort — never blocks the booking).
    mutation.mutate(form);

    // 2) Hand off to WhatsApp so the clinic always receives the request.
    //    Opened synchronously inside the click handler so it isn't popup-blocked.
    window.open(buildWhatsAppUrl(form), '_blank', 'noopener,noreferrer');

    toast.success('Opening WhatsApp — just press send to confirm your booking with VITO.');
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name *
          </label>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={update('fullName')}
            placeholder="Your name"
            className={fieldClass}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="+27 ..."
            className={fieldClass}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="you@email.com"
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service of interest
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update('service')}
          className={fieldClass}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Preferred date
          </label>
          <input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={update('preferredDate')}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="preferredTime" className={labelClass}>
            Preferred time
          </label>
          <input
            id="preferredTime"
            type="time"
            value={form.preferredTime}
            onChange={update('preferredTime')}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          value={form.message}
          onChange={update('message')}
          rows={4}
          placeholder="Tell us a little about what you're looking for…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6E7F63] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#4F5E46] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E7F63] focus-visible:ring-offset-2"
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <CalendarCheck className="h-4 w-4" />
            Request Appointment
          </>
        )}
      </button>
      <p className="text-center text-xs text-[#7B9AAE]">
        We'll never share your details. Confidential, in line with the POPI Act.
      </p>
    </form>
  );
}
