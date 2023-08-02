import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
  authors: [
    { name: 'Code With Antonio', url: 'https://youtu.be/2aeMRB8LL4o' },
    { name: 'Xuefeng Wu', url: 'https://portfolio-sirowood.vercel.app/' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
