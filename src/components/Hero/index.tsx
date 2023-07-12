import { LinkGeneric } from "../LinkGeneric"
import { LuLinkedin,LuGithub } from "react-icons/lu";
import { HeroAnimation } from "./HeroAnimation";

export const Hero=()=>{
  return(
    <section className="grid md:grid-cols-2 md:items-center h-[80vh] ">
      <div className="mt-14 md:mt-0">
        <p className="text-base font-semibold text-blueLinear uppercase md:text-xl">Olá, eu sou</p>
        <h1 className="text-3xl text-secondary my-2 font-semibold uppercase md:text-6xl md:my-3">Clécio Sousa</h1>
        <p className="text-sm font-semibold text-secondary uppercase md:text-xl">Desenvolvedor front-end</p>
        <div className="mt-16 flex gap-6">
          <LinkGeneric  href={'https://www.linkedin.com/in/clécio-sousa'} target="_blank">
            <LuLinkedin size={24}/>
            Linkedin
          </LinkGeneric>
          <LinkGeneric href={'https://github.com/ClecioSousa00'} target="_blank">
            <LuGithub size={24}/>
            Github
          </LinkGeneric>
        </div>
      </div>
      <div className="hidden md:block">
        <HeroAnimation/>
      </div>
    </section>
  )
}