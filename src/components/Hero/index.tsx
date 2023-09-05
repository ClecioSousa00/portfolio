'use client'
import { LinkGeneric } from '../LinkGeneric'
import { LuLinkedin, LuGithub } from 'react-icons/lu'
import { HeroAnimation } from './HeroAnimation'
import { Container } from '../Container'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="bg-primaryDark">
      <Container>
        <div className="grid h-[60vh] items-center  lg:h-full lg:grid-cols-2 ">
          <motion.div
            className="mt-20 md:mt-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base uppercase text-secondary md:text-xl">
              Olá, eu sou
            </p>
            <h1 className="my-2 text-3xl font-medium uppercase text-secondaryLigth md:my-3 md:text-6xl">
              Clécio Sousa
            </h1>
            <p className="text-sm  uppercase text-secondary md:text-xl">
              Desenvolvedor front-end
            </p>
            <div className="mt-16 flex gap-3">
              <LinkGeneric href={'https://www.linkedin.com/in/clécio-sousa'}>
                <LuLinkedin size={22} />
                Linkedin
              </LinkGeneric>
              <LinkGeneric href={'https://github.com/ClecioSousa00'}>
                <LuGithub size={22} />
                Github
              </LinkGeneric>
            </div>
          </motion.div>
          <div className="overflow-hidden">
            <HeroAnimation />
          </div>
        </div>
      </Container>
    </section>
  )
}
