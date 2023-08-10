'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '../Container'
import { CopyButton } from '../CopyButton'
import { LuLinkedin, LuGithub, LuInstagram } from 'react-icons/lu'

import photo from '@/assets/photo.png'

const links = [
  {
    href: 'https://www.linkedin.com/in/clécio-sousa',
    icon: <LuLinkedin size={24} />,
  },
  {
    href: 'https://github.com/ClecioSousa00',
    icon: <LuGithub size={24} />,
  },
  {
    href: 'https://instagram.com/clecio_sousa_?igshid=NGExMmI2YTkyZg==',
    icon: <LuInstagram size={24} />,
  },
]

const generateLinks = () => {
  return links.map((link, index) => (
    <Link key={index} href={link.href} target="_blank">
      <span className="cursor-pointer hover:text-secondaryLigth">
        {link.icon}
      </span>
    </Link>
  ))
}

export const AboutSection = () => {
  return (
    <section id="about" className=" overflow-hidden bg-primary py-10 md:py-28">
      <Container>
        <div className="flex  flex-col-reverse items-center gap-6 md:flex-row-reverse md:justify-between lg:justify-around">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-2xl font-semibold uppercase text-secondaryLigth">
              Sobre Mim
            </h2>
            <p className="mb-2 text-base font-medium text-secondaryLigth">
              Santa Terezinha, PE
            </p>
            <p className="w-full text-justify text-sm font-light leading-5 tracking-wide md:max-w-[25rem] lg:max-w-[28.125rem]">
              Salve, dev! Atualmente, estou cursando Ciência da Computação na
              UEPB Câmpus VII(Patos). Meu objetivo principal é ingressar no
              mercado de trabalho como desenvolvedor Front-End, área que
              despertou meu grande interesse durante meus estudos. Estou em
              busca de oportunidades de estágio ou emprego para colocar em
              prática os conhecimentos adquiridos.
            </p>
            <div className="my-8 flex items-center gap-4">
              {generateLinks()}
            </div>
            <div className="flex items-center gap-3">
              <span>clecio.dev3@gmail.com</span>
              <CopyButton />
            </div>
          </motion.div>
          <motion.div
            className="group relative h-64 w-64 origin-center  cursor-pointer rounded-full lg:h-80 lg:w-80"
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -inset-0.5 rounded-full bg-border-gradient opacity-75 blur-md transition-all group-hover:opacity-100"></div>
            <div className="relative h-full w-full overflow-hidden rounded-full bg-primary transition-all">
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
