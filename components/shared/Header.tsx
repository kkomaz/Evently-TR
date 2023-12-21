import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

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
        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </div>
  );
};

export default Header;
