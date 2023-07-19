'use client'

import { useState, useEffect } from 'react'
import { Logo } from '../Logo'
import { NavBar } from '../NavBar'

export const Header = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={` relative flex items-center justify-between px-4 pt-4 transition-all duration-300 2xl:container md:fixed
          md:top-0 md:z-50 md:mx-auto md:w-full md:border-b-[1px]  md:border-secondary md:border-opacity-20 md:px-10  ${
            scroll && 'bg-primary/95'
          }`}
    >
      <Logo />
      <NavBar />
    </header>
  )
}
