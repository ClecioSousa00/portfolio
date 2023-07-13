import { Container } from "../Container"
import { Slider } from "../Slider"

export const SkillsSection=()=>{
  return(
    <section className="py-10 md:py-20">
      <Container>
        <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 uppercase">Skills</h2>
        <div className="h-full  flex justify-center items-center md:bg-bg-skiils md:bg-center  md:bg-contain overflow-hidden">
          <div className=" relative h-[400px] w-[200px] md:w-[250px]">
            <div className="absolute w-64 h-64 rounded-full bottom-4  bg-radial-gradient"></div>
            <Slider/>
          </div>
        </div>
      </Container>
    </section>
  )
}