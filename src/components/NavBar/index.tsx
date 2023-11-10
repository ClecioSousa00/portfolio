'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ToogleMenu } from '@/components/NavBar/ToogleMenu'

const links = [
  {
    href: '#',
    name: 'Home',
  },
  {
    href: '#about',
    name: 'Sobre Mim',
  },
  {
    href: '#skill',
    name: 'Skills',
  },

  {
    href: '#project',
    name: 'Projetos',
  },
]

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <nav
        className={`absolute inset-0 z-10 h-screen w-0 overflow-hidden bg-primaryDark transition-all 
        md:static md:h-auto md:w-auto  md:bg-transparent ${
          menuIsOpen && 'w-full'
        }`}
      >
        <ul className="group mt-20 md:mt-0 md:flex md:gap-7">
          {links.map((link, index) => (
            <li
              key={index}
              onClick={() => setMenuIsOpen(false)}
              className="ml-6 mt-4 w-fit cursor-pointer rounded px-3 py-1  transition-all hover:bg-secondary hover:text-primary hover:!opacity-100 group-hover:opacity-50 md:ml-0 md:mt-0"
            >
              <Link className="text-lg  md:text-base" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ToogleMenu
        menuIsOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      />
    </>
  )
}
