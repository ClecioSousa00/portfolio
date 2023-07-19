'use client'
import { Container } from "../Container"
import { motion } from "framer-motion"


import Image from "next/image"

import { LuLinkedin,LuGithub, LuInstagram } from "react-icons/lu"
import photo from '@/assets/photo.png'
import Link from "next/link"

export const AboutSection=()=>{
  return(
    <section id="about" className=" bg-primary py-10 md:py-28 overflow-hidden">
      <Container>
        <div className="flex  flex-col-reverse items-center gap-6 md:flex-row-reverse md:justify-between lg:justify-around">
          <motion.div
            initial={{opacity:0, x:200}}
            whileInView={{opacity:1, x:0}}
            exit={{opacity:0, y:200}}
            transition={{duration:0.5}}
          >
            <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 uppercase">Sobre Mim</h2>
            <p className="text-base font-medium text-secondaryLigth mb-2">Santa Terezinha, PE</p>
            <p className="text-sm font-light leading-5 md:max-w-[25rem] w-full lg:max-w-[28.125rem]" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. 
              Aenean ac commodo dolor, nec bibendum velit.
            </p>
            <div className="flex items-center gap-4 my-8">
              <Link href={'https://www.linkedin.com/in/clécio-sousa'} target="_blank">
                <LuLinkedin size={24} className="cursor-pointer hover:text-secondaryLigth"/>
              </Link>
              <Link href={'https://github.com/ClecioSousa00'} target="_blank">
                <LuGithub size={24} className="cursor-pointer hover:text-secondaryLigth"/>
              </Link>
              <Link href={'https://instagram.com/clecio_sousa_?igshid=NGExMmI2YTkyZg=='} target="_blank">
                <LuInstagram size={24} className="cursor-pointer hover:text-secondaryLigth"/>
              </Link>
            </div>
           
          </motion.div>
          <motion.div 
            className="relative w-64 h-64 rounded-full cursor-pointer  group lg:w-80 lg:h-80 origin-center"
            initial={{opacity:0, y:200, scale: 0.5}}
            whileInView={{opacity:1, y:0, scale:1}}
            exit={{opacity:0, y:200, scale: 0.5}}
            transition={{duration:0.5}}
          >
            <div className="absolute -inset-0.5 rounded-full blur-md opacity-75 bg-border-gradient group-hover:opacity-100 transition-all"></div>
            <div className="relative rounded-full h-full w-full transition-all overflow-hidden bg-primary">
              <Image
                className="w-full "
                src={photo}
                alt="Minha foto de perfil"
                unoptimized={true}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}