'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

// Components
import { Nav } from './Nav';
import MobileNav from './MobileNav';

export const Header = () => {
  return (
    <header className='py-8 xl:py-6 text-primary' style={{borderBottom: '1px solid #fbb703'}}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
        <Image
          src='/assets/logo.png'
          alt='logo-chiquinha-do-pixica'
          width={180}
          height={100}
        />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};