import { CardProject } from './CardProject'
import { Container } from '../Container'
import { dataProjectProps } from '@/types/projectType'
import bannerBlizzard from '@/assets/banner-blizzard 1.png'
import bannerSpacetime from '@/assets/bannerSpacetime.png'
import bannerPaqueta from '@/assets/bannerPaqueta.png'

const dataProjects: dataProjectProps[] = [
  {
    img: bannerBlizzard,
    name: 'Blizzard',
    description:
      'Desafio do Br Challenges: Criar uma landing page da Blizzard. Neste projeto temos que seguir o layout disponível e fazer o mais próximo possível, também foi disponibilizado uma api para pegar os dados dos jogos.',
    linkGithub: 'https://github.com/ClecioSousa00/br-challenges-blizzard',
    linkProject: 'https://br-challenges-blizzard-tau.vercel.app/',
  },
  {
    img: bannerPaqueta,
    name: 'Paquetá Calçados',
    description:
      'Desafio do Br Challenges: Desenvolver um e-commerce de calçados. Neste projeto o foco foi consumir a Api de calçados disponibilizada pelo desafio e implementar um fluxo de adicionar os produtos na sacola e seguir o layout disponível.',
    linkGithub:
      'https://github.com/ClecioSousa00/br-challenges-paqueta-calcados',
    linkProject: 'https://br-challenges-paqueta-calcados-one.vercel.app/',
  },
  {
    img: bannerSpacetime,
    name: 'SpaceTime',
    description:
      'SpaceTime é uma plataforma de cápsula do tempo onde você pode fazer seu cadastro usando sua conta no Github e com isso você pode armazenar suas memórias, colocando uma foto, descrição e data. Este projeto foi desenvolvido no evento NlW Spacetime pela Rocketseat.',
    linkGithub: 'https://github.com/ClecioSousa00/spacetime-rocketseat',
    linkProject: '',
  },
]

export const ProjectSection = () => {
  return (
    <section id="project" className="py-10 md:py-28">
      <Container>
        <h2 className="mb-4 text-2xl font-semibold uppercase text-secondaryLigth lg:mb-10">
          Projetos
        </h2>
        <div className="flex flex-col flex-wrap items-center gap-y-10 lg:flex-row lg:justify-between">
          {dataProjects.map((project, index) => (
            <CardProject
              key={index}
              data={project}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
