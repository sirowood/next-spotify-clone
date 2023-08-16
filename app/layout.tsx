/*
  This file is the entry point of the App.
  It renders components inside the HTML <body> element.
  In Next.js 13, it reads page.tsx in each folder as children and pass it to this RootLayout component
  
  It seems make no sense to name the <Sidebar>, the name and actual content is not aligned
  -> renamed to PageContainer
  And it is not reasonable to place the PageContainer to the @/components
  -> move to ./app/_components
*/

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import Player from '@/components/Player';
import PageContainer from './_components/PageContainer';

import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';

import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices';

import './globals.css';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
  authors: [
    { name: 'Code With Antonio', url: 'https://youtu.be/2aeMRB8LL4o' },
    { name: 'Xuefeng Wu', url: 'https://portfolio-sirowood.vercel.app/' },
  ],
};

export const revalidate = 0;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <PageContainer>{children}</PageContainer>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
