import { LinkGeneric } from "../LinkGeneric"
import { LuLinkedin,LuGithub } from "react-icons/lu"
import { HeroAnimation } from "./HeroAnimation"
import { Container } from "../Container"

export const Hero=()=>{
  return(
    <section className="bg-primaryDark">
      <Container>
        <div className="grid lg:grid-cols-2 items-center h-[80vh]">
          <div className="mt-20 md:mt-0">
            <p className="text-base text-secondary uppercase md:text-xl">Olá, eu sou</p>
            <h1 className="text-3xl text-secondaryLigth my-2 font-medium uppercase md:text-6xl md:my-3">Clécio Sousa</h1>
            <p className="text-sm  text-secondary uppercase md:text-xl">Desenvolvedor front-end</p>
            <div className="mt-16 flex gap-3">
              <LinkGeneric  href={'https://www.linkedin.com/in/clécio-sousa'} target="_blank">
                <LuLinkedin size={22}/>
                Linkedin
              </LinkGeneric>
              <LinkGeneric href={'https://github.com/ClecioSousa00'} target="_blank">
                <LuGithub size={22}/>
                Github
              </LinkGeneric>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroAnimation/>
          </div>
        </div>
      </Container>
    </section>
  )
}