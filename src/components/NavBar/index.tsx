'use client'
import Link from "next/link"
import { useState } from "react"
import {ToogleMenu} from '@/components/NavBar/ToogleMenu'

const links =[
  {
    href: '#home',
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
    href: '#experience',
    name: 'Experiências',
  },
  {
    href: '#project',
    name: 'Projetos',
  },
]

export const NavBar=()=>{
  
  const[menuIsOpen, setMenuIsOpen] = useState(false)


  return(
   <>
     <nav className={`bg-primaryDark absolute z-10 inset-0 h-screen w-0 overflow-hidden transition-all 
        md:static md:h-auto md:w-auto  md:bg-transparent ${menuIsOpen && 'w-full'}`}>
      <ul className="mt-20 md:mt-0 md:flex md:gap-7 group">
        {links.map((link,index) =>( 
          <li key={index} 
            onClick={()=>setMenuIsOpen(false)} 
            className="hover:bg-secondary rounded px-3 py-1 ml-6 w-fit  mt-4 md:ml-0 md:mt-0 transition-all group-hover:opacity-50 hover:!opacity-100 hover:text-secondaryLigth" >
            <Link className="text-lg md:text-base " href={link.href}>{link.name}</Link> 
          </li>))}
      </ul>
    </nav>
    <ToogleMenu menuIsOpen={menuIsOpen} onClick={()=> setMenuIsOpen(!menuIsOpen)}/>
   </>
  )
}