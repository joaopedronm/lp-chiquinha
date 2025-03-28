'use client'

import React from 'react'
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import Image from 'next/image'

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'projetos',
    path: '/projetos'
  },
  {
    name: 'blog',
    path: '/blog'
  },
  {
    name: 'contato',
    path: '/contato'
  },
]

const MobileNav = () => {

  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>

      <SheetContent className='flex flex-col items-center'>
        <SheetTitle>
          <div className='mt-16 mb-16 text-center text-2xl'>
            <Link href="/">
              <Image
                src='/assets/logo.png'
                alt='logo-chiquinha-do-pixica'
                width={180}
                height={100}
              />
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
        </nav>
        
      </SheetContent>

    </Sheet>
  )
}

export default MobileNav