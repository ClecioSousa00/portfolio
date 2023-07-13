import { Container } from "../Container"
import { LinkGeneric } from "../LinkGeneric"

import Image from "next/image"

import { LuLinkedin,LuGithub, LuInstagram } from "react-icons/lu"
import { FaArrowRightLong } from "react-icons/fa6"
import photo from '@/assets/photo.png'
import Link from "next/link"

export const AboutSection=()=>{
  return(
    <section className=" bg-primary py-10 md:py-20">
      <Container>
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row-reverse  md:justify-around">
          <div className="">
            <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 uppercase">Sobre Mim</h2>
            <p className="text-base font-medium text-secondaryLigth mb-2">Santa Terezinha, PE</p>
            <p className="text-sm font-light leading-5 max-w-[450px] w-full">
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
            <LinkGeneric href={'#'}>
              Enviar Mensagen 
              <FaArrowRightLong/>
            </LinkGeneric>
          </div>
          <div className="relative w-64 h-64 rounded-full cursor-pointer  group md:w-80 md:h-80">
            <div className="absolute -inset-0.5 rounded-full blur-md opacity-75 bg-border-gradient group-hover:opacity-100 transition-all"></div>
            <div className="relative rounded-full h-full w-full transition-all overflow-hidden bg-primary">
              <Image
                className="w-full "
                src={photo}
                alt="Minha foto de perfil"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}