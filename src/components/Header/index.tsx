'use client'

import {  useState,useEffect } from "react"
// import { Container } from "../Container"
import { Logo } from "../Logo"
import { NavBar } from "../NavBar"

export const Header=()=>{
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
    
  

  return(
    
      <header 
          className={`pt-4 relative px-4 md:px-10 lg:px-20 flex items-center justify-between  md:border-b-[1px] md:border-opacity-20
          md:border-secondary md:fixed md:top-0 md:w-full md:z-50 ${scroll && 'bg-primary/95'}`}>
        <Logo/>
        <NavBar/>
      </header>
    
  )
}