'use client'

import React from 'react'
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { LuSun } from "react-icons/lu";

const links = [
  {
    name: 'home',
    path: '/'
  },
  // {
  //   name: 'services',
  //   path: '/services'
  // },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'portfolio',
    path: '/portfolio'
  },
  {
    name: 'contact',
    path: '/contact'
  },
  {
    name: 'blog',
    path: '/blog'
  },
  {
    name: 'snippets',
    path: '/snippets'
  },
]

const MobileNav = () => {

  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>

      <SheetContent className='flex flex-col'>
        <SheetTitle>
          <div className='mt-16 mb-16 text-center text-2xl'>
            <Link href="/">
            <h1 className='text-2xl font-semibold text-accent xl:text-4xl'>
              &#123; <span className='text-white'>João Pedro </span> &#125;
            </h1>
            </Link>
          </div>
        </SheetTitle>

        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
          <LuSun className='cursor-pointer' onClick={() => window.alert("Sorry! Devs don't like light themes :(")} />
        </nav>
        
      </SheetContent>

    </Sheet>
  )
}

export default MobileNav