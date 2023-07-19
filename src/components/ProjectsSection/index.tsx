import Link from "next/link"
import { CardProject } from "./CardProject"
import { Container } from "../Container"
import { dataProjectProps } from "@/types/projectType"
import bannerBlizzard from '@/assets/banner-blizzard 1.png'
import bannerSpacetime from '@/assets/bannerSpacetime.png'
import bannerPaqueta from '@/assets/bannerPaqueta.png'

 
const dataProjects:dataProjectProps[] = [
  {
    img:bannerBlizzard,
    name: "Blizzard",
    description: "Este projeto é uma landing page da Blizzard, que é um desafio do Br Challenges para ser desenvolvido.",
    linkGithub: "https://github.com/ClecioSousa00/br-challenges-blizzard",
    linkProject: "https://br-challenges-blizzard-tau.vercel.app/"
  },
  {
    img:bannerPaqueta,
    name: "Paquetá Calçados",
    description: "Este projeto foi um desafio do Br Challenges, onde temo que desenvolver um e-commerce de calçados.",
    linkGithub: "https://github.com/ClecioSousa00/br-challenges-paqueta-calcados",
    linkProject: "https://br-challenges-paqueta-calcados-one.vercel.app/"
  },
  {
    img:bannerSpacetime,
    name: "SpaceTime",
    description: "spaceTime é uma plataforma para cadastrar memórias. Este projeto foi desenvolvido no evento Nlw da Rocketseat.",
    linkGithub: "https://github.com/ClecioSousa00/spacetime-rocketseat",
    linkProject: ""
  },
  // {
  //   img:bannerBlizzard,
  //   name: "Blizzard",
  //   description: "Este projeto é uma landing page da Blizzard, que é um desafio do Br Challenges",
  //   linkGithub: "https://github.com/ClecioSousa00/br-challenges-blizzard",
  //   linkProject: "https://br-challenges-blizzard-tau.vercel.app/"
  // },
]

export const ProjectSection=()=>{
  return(
    <section id="project" className="py-10 md:py-28">
      <Container>
        <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 lg:mb-10 uppercase">Projetos</h2>
        <div className="flex flex-col flex-wrap items-center gap-y-10 lg:flex-row lg:justify-between">
          {dataProjects.map((project,index) => <CardProject key={index} data={project}/>)}
        </div>
        
          {/* <Link 
            className=" text-sm font-medium w-24 flex items-center gap-2 mt-10 hover:text-secondaryLigth cursor-pointer"
            href={'https://github.com/ClecioSousa00'} 
            target="_blank"
          >
              Ver mais
            <FaArrowRightLong/>
          </Link> */}
        
      </Container>
    </section>
  )
}

