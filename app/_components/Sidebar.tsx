/*
  This is a client component because it was imported by the PageContainer component, which is a client component
  Based on this component's function and position, it is more reasonable to change the tag div
  -> change div to aside
  Since the child component SidebarItem and Library is only used by this component, it is more reasonble to move it to the same folder
  -> move SidebarItem to the same folder
  -> move Library to the same folder
  The previous method of check if the link is active can not handle if there are more routes in the useMemo
  -> change it to a better way 
*/

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';

import Box from '@/components/Box';
import Library from './Library';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname === '/',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );

  return (
    <aside className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
      <Box>
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}
            />
          ))}
        </div>
      </Box>
      <Box className="overflow-y-auto h-full">
        <Library />
      </Box>
    </aside>
  );
};

export default Sidebar;
