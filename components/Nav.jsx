"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

export const Nav = () => {

  const pathName = usePathname()
  
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} text-lg capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
