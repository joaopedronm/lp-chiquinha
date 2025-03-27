'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { LuSun } from 'react-icons/lu';
import Image from 'next/image'

// Components
import { Nav } from './Nav';
import MobileNav from './MobileNav';

// Shadcn/ui Dialog components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

export const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-primary'>
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
          <Link href='https://wa.me/message/DR5ECQ5AD5UPA1' target='_blank' rel='noopener'>
            <Button>Talk to me</Button>
          </Link>

          {/* Modal Trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <LuSun className='cursor-pointer' />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Oops! 😅</DialogTitle>
                <DialogDescription>
                  Sorry! Devs don't like light themes :(
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};