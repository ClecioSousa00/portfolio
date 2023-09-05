import { dataProjectProps } from './types/projectType'
import bannerBlizzard from '@/assets/banner-blizzard 1.png'
import bannerSpacetime from '@/assets/bannerSpacetime.png'
import bannerPaqueta from '@/assets/bannerPaqueta.png'
import bannerRickAndMorty from '@/assets/banner-rickAndMorty.png'
import bannerFortnite from '@/assets/bannerFortnite.png'
import bannerMova from '@/assets/bannerMova.png'

export const dataProjects: dataProjectProps[] = [
  {
    img: bannerMova,
    name: 'Mova',
    description:
      'Mova é um aplicativo de filmes que utiliza a api do TMDB para obter os dados. Nele o usuário pode criar conta, fazer login, buscar filmes, adicionar filmes aos favoritos. Este app foi desenvolvido com o propósito de estudar mais sobre react native',
    linkGithub: 'https://github.com/ClecioSousa00/appMova',
    linkProject: '',
  },
  {
    img: bannerRickAndMorty,
    name: 'Rick and Morty',
    description:
      'Este projeto é uma plataforma do universo de "Rick and Morty". Com funcionalidades de paginação de personagens busca e opção de adicionar ao favoritos.',
    linkGithub: 'https://github.com/ClecioSousa00/rick-and-morty',
    linkProject: 'https://rick-and-morty-42r2bwumj-cleciosousa00.vercel.app/',
  },
  {
    img: bannerBlizzard,
    name: 'Blizzard',
    description:
      'Desafio do Br Challenges: Criar uma landing page da Blizzard. Neste projeto temos que seguir o layout disponível e fazer o mais próximo possível, também foi disponibilizado uma api para pegar os dados dos jogos.',
    linkGithub: 'https://github.com/ClecioSousa00/br-challenges-blizzard',
    linkProject: 'https://br-challenges-blizzard-tau.vercel.app/',
  },
  {
    img: bannerFortnite,
    name: 'Fortnite Slider',
    description:
      'Este Projeto é um Slider de personagens do Fortnite. Para este projeto foi usado React, Nextjs, Typescript, Swiper, Tailwind.',
    linkGithub: 'https://github.com/ClecioSousa00/fortnite-slider',
    linkProject: 'https://fortnite-slider-haa3motml-cleciosousa00.vercel.app//',
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
  // {
  //   img: bannerSpacetime,
  //   name: 'SpaceTime',
  //   description:
  //     'SpaceTime é uma plataforma de cápsula do tempo onde você pode fazer seu cadastro usando sua conta no Github e com isso você pode armazenar suas memórias, colocando uma foto, descrição e data. Este projeto foi desenvolvido no evento NlW Spacetime pela Rocketseat.',
  //   linkGithub: 'https://github.com/ClecioSousa00/spacetime-rocketseat',
  //   linkProject: '',
  // },
]
