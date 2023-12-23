'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex flex-col w-full items-start gap-5 md:flex-row">
      {headerLinks.map((headerLink) => {
        const isActive = pathname === headerLink.route;

        return (
          <li
            key={headerLink.label}
            className={`
            ${isActive && 'text-primary-500'}
            flex-center p-medium-16 whitespace-nowrap
            `}
          >
            <Link href={headerLink.route}>{headerLink.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
