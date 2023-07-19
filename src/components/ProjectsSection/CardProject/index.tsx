'use client'
import Image from 'next/image'
import Link from 'next/link'
import { LuGithub, LuLink } from 'react-icons/lu'
import { motion } from 'framer-motion'

import { LinkGeneric } from '@/components/LinkGeneric'
import { dataProjectProps } from '@/types/projectType'
import { ComponentProps } from 'react'

type CardProjectProps = {
  data: dataProjectProps
} & ComponentProps<typeof motion.div>

export const CardProject = ({ data, ...rest }: CardProjectProps) => {
  return (
    <motion.div className="w-full md:w-[31.25rem] " {...rest}>
      <div className="h-[12.5rem] overflow-hidden rounded opacity-50 transition-all duration-300 hover:opacity-95 hover:shadow-blue-shadow md:h-[15.625rem]">
        <Image
          className="h-full w-full cursor-pointer object-cover object-top transition-all duration-500 hover:scale-105"
          src={data.img}
          alt=""
        />
      </div>
      <h3 className="mb-4 mt-6 text-lg font-medium text-secondaryLigth md:text-2xl">
        {data.name}
      </h3>
      <p className="text-sm font-light leading-5 tracking-wide">
        {data.description}
      </p>
      <div className="mb-8 mt-4 flex w-36 cursor-pointer items-center gap-2 hover:text-secondaryLigth">
        <Link
          className=" text-sm font-medium"
          href={data.linkGithub}
          target="_blank"
        >
          Acessar Github
        </Link>
        <LuGithub size={24} />
      </div>
      <LinkGeneric href={data.linkProject} target="_blank">
        <LuLink />
        {data.linkProject ? 'Visualizar' : 'Indisponível'}
      </LinkGeneric>
    </motion.div>
  )
}
