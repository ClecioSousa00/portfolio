import { Container } from "../Container"
import { Animation } from "./Animation"

export const ExperienceSection=()=>{
  return(
    <section id="experience" className="py-10 md:py-28 bg-primary">
      <Container>
        <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 uppercase">Experiências</h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <p className="max-w-[25rem] w-full">Ainda não possuo experiência no mercado de trabalho, mas espero mudar o status em breve</p>
          <Animation />
        </div>
      </Container>
    </section>
  )
}