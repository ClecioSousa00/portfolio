'use client'
import Link from "next/link";
import { ToogleMenu } from "../ToogleMenu/inde";
import { useState } from "react";

const links =[
  {
    href: '#',
    name: 'Home',
  },
  {
    href: '#',
    name: 'Sobre Mim',
  },
  {
    href: '#',
    name: 'Skills',
  },
  {
    href: '#',
    name: 'Projetos',
  },
  {
    href: '#',
    name: 'Contato',
  }
]

export const NavBar=()=>{
  
  const[menuIsOpen, setMenuIsOpen] = useState(false)


  return(
   <>
     <nav className={`bg-primaryDark absolute z-10 inset-0 h-screen w-0 overflow-hidden transition-all 
        md:static md:h-auto md:w-auto md:bg-inherit ${menuIsOpen && 'w-full'}`}>
      <ul className="mt-20 md:mt-0 md:flex md:gap-7">
        {links.map(link =>( 
          <li className=" ml-6  mt-4 md:ml-0 md:mt-0">
          <Link className="font-alt text-lg md:text-base" href={link.href}>{link.name}</Link> 
        </li>))}
      </ul>
    </nav>
    <ToogleMenu menuIsOpen={menuIsOpen} onClick={()=> setMenuIsOpen(!menuIsOpen)}/>
   </>
  )
}