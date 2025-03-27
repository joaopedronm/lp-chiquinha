import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const socials = [
  { icon: <FaInstagram />, path: 'https://github.com/joaopedronm' },
  { icon: <FaFacebook />, path: 'https://www.linkedin.com/in/joaopedronascimento/' },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target='_blank'
            rel='noopener'
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials