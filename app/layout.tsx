import './globals.css';
import { Figtree } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';

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
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
