import { Container } from "../Container"
import { Slider } from "../Slider"

export const SkillsSection=()=>{
  return(
    <section className="py-10 md:py-20">
      <Container>
        <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 uppercase">Skills</h2>
        <div className="h-full  flex flex-col justify-center items-center gap-4 md:flex-row overflow-hidden">
          <p className="max-w-[25rem] w-full mb-10"
          >
            Estou dedicando meu tempo para estudar novas tecnologias e também aprofundando meu conhecimento nas que já domino.
          </p>
          <div className=" relative h-[25rem] w-[12.5rem] md:w-[15.625rem]">
            <div className="absolute w-48 h-48 bottom-16 md:w-64 md:h-64 rounded-full md:bottom-4  bg-radial-gradient"></div>
            <Slider/>
          </div>
        </div>
      </Container>
    </section>
  )
}