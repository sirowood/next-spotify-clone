/*
  This used be Sidebar.tsx inside the @/components.
  I checked the logic and feels it maybe more reasonable to rename and divide this component into smaller components.
  -> rename to PageContainer
  -> extract Sidebar component
*/

'use client';

import { twMerge } from 'tailwind-merge';

import Sidebar from './Sidebar';

import usePlayer from '@/hooks/usePlayer';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const player = usePlayer();

  return (
    <div
      className={twMerge(
        `flex h-full`,
        player.activeId && 'h-[calc(100%-80px)]'
      )}
    >
      <Sidebar />
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default PageContainer;
