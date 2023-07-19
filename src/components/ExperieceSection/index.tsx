'use client'
import { Container } from "../Container"
import { Animation } from "./Animation"
import { motion } from "framer-motion"

export const ExperienceSection=()=>{
  return(
    <section id="experience" className="py-10 md:py-28 bg-primary">
      <Container>
        <motion.div
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          exit={{opacity:0, y:100}}
          transition={{duration:0.7}}
        >
          <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 uppercase">Experiências</h2>
          <div className="flex flex-col items-center justify-center md:flex-row">
            <p className="max-w-[25rem] w-full">Ainda não possuo experiência no mercado de trabalho, mas espero mudar o status em breve.</p>
            <Animation />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}