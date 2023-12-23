import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

// https://www.youtube.com/watch?v=zgGhzuBZOQg&t=176s
const Header = () => {
  return (
    <div className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently Logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="hidden md:flex-between w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Log In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Header;
