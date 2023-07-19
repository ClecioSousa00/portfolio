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
    description: "Desafio do Br Challenges: Criar uma landing page da Blizzard. Neste projeto temos que seguir o layout disponível e fazer o mais próximo possível, também foi disponibilizado uma api para pegar os dados dos jogos.",
    linkGithub: "https://github.com/ClecioSousa00/br-challenges-blizzard",
    linkProject: "https://br-challenges-blizzard-tau.vercel.app/"
  },
  {
    img:bannerPaqueta,
    name: "Paquetá Calçados",
    description: "Desafio do Br Challenges: Desenvolver um e-commerce de calçados. Neste projeto o foco foi consumir a Api de calçados disponibilizada pelo desafio e implementar um fluxo de adicionar os produtos na sacola e seguir o layout disponível.",
    linkGithub: "https://github.com/ClecioSousa00/br-challenges-paqueta-calcados",
    linkProject: "https://br-challenges-paqueta-calcados-one.vercel.app/"
  },
  {
    img:bannerSpacetime,
    name: "SpaceTime",
    description: "SpaceTime é uma plataforma de cápsula do tempo onde você pode fazer seu cadastro usando sua conta no Github e com isso você pode armazenar suas memórias, colocando uma foto, descrição e data. Este projeto foi desenvolvido no evento NlW Spacetime pela Rocketseat.",
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

