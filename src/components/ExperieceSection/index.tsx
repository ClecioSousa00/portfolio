'use client'
import { Container } from '../Container'
import { Animation } from './Animation'
import { motion } from 'framer-motion'

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-primary py-10 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-2xl font-semibold uppercase text-secondaryLigth">
            Experiências
          </h2>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-around">
            <p className="w-full max-w-[25rem] text-justify tracking-wide">
              Ainda não possuo experiência no mercado de trabalho, mas espero
              mudar o status em breve.
            </p>
            <Animation />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
