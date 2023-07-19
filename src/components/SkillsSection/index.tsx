'use client'
import { Container } from '../Container'
import { Slider } from '../Slider'
import { motion } from 'framer-motion'
export const SkillsSection = () => {
  return (
    <section id="skill" className=" py-10 md:py-28">
      <Container>
        <h2 className="mb-4 text-2xl font-semibold uppercase text-secondaryLigth">
          Skills
        </h2>
        <motion.div
          className="flex  h-full flex-col items-center justify-center gap-4 overflow-hidden md:flex-row md:justify-around"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-10 w-full max-w-[25rem] text-justify tracking-wide">
            Estou dedicando meu tempo para estudar novas tecnologias e também
            aprofundando meu conhecimento nas que já domino.
          </p>
          <Slider />
        </motion.div>
      </Container>
    </section>
  )
}
