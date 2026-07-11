import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './global.css';
import { Providers } from './providers';
import ChatWidget from '@/components/site/ChatWidget';

export const metadata: Metadata = {
  title: 'VITO Med & Aesthetics | Medical Aesthetics, Travel & Medical Care · Cape Town',
  description:
    'Vito Med & Aesthetics is a professionally operated wellness and aesthetic clinic in Table View, Cape Town. Offering anti-wrinkle injectables, dermal fillers, IV vitamin drips, skin treatments, travel medicine and acute & chronic medical care — led by Dr Precious Garnett.',
  keywords:
    'skincare, anti-wrinkle injectables, wrinkle-relaxing treatment, filler, skin treatment, anti-aging, hyperpigmentation, pigmentation, skin glow, aesthetics, medical aesthetics, travel clinic, travel doctor, IV drips, Cape Town, Table View, Khayelitsha',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
        />
        <link
          rel="stylesheet"
          href="/fontawesome/releases/v6.3.0/css/pro.min.css?token=2c15cc0cc7"
        />
      </head>
      <body className="font-inter antialiased">
        <Providers>{children}</Providers>
        <ChatWidget />
      </body>
    </html>
  );
}
