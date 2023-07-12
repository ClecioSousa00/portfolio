import { Container } from "../Container"
import { EmailSvg } from "../Icons/EmailSvg"
import { LinkGeneric } from "../LinkGeneric"
import Image from "next/image"

import { LuLinkedin,LuGithub, LuInstagram } from "react-icons/lu"
import { FaArrowRightLong } from "react-icons/fa6"
import photo from '@/assets/photo.png'

export const AboutSection=()=>{
  return(
    <section className=" bg-primary py-10">
      <Container>
        <div className="md:flex md:flex-row-reverse items-center md:justify-around">
          <div className="">
            <h2 className="text-2xl font-semibold text-secondaryLigth mb-4">Sobre Mim</h2>
            <p className="text-base font-medium text-secondaryLigth mb-2">Santa Terezinha, PE</p>
            <p className="text-sm font-light leading-5 max-w-[500px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent id egestas dui. Nullam finibus aliquam enim quis faucibus. 
              Aenean ac commodo dolor, nec bibendum velit.
            </p>
            <div className="flex gap-2 my-8">
              <LuLinkedin size={24}/>
              <LuGithub size={24}/>
              <LuInstagram size={24}/>
              <EmailSvg/>
            </div>
            <LinkGeneric href={'#'}>Enviar Mensagen <FaArrowRightLong/> </LinkGeneric>
          </div>
          <div className="w-[270px] rounded overflow-hidden bg-primaryDark ">
            <Image 
              className="w-full"
              src={photo} 
              alt="Minha foto de perfil"
              unoptimized={true}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}