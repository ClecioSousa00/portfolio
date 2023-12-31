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
    <motion.div className="w-full md:w-[31.25rem]" {...rest}>
      <div
        className="h-[12.5rem] overflow-hidden rounded opacity-50 
        transition-all duration-300 hover:opacity-95 hover:shadow-blue-shadow md:h-[15.625rem]"
      >
        <Link href={`${data.linkGithub}`} target="_blank">
          <Image
            className="h-full w-full  object-cover object-top transition-all duration-500 hover:scale-105"
            src={data.img}
            alt=""
          />
        </Link>
      </div>
      <h3 className="mb-4 mt-6 text-lg font-medium text-secondaryLigth md:text-2xl">
        {data.name}
      </h3>
      <p className="text-sm font-light leading-5 tracking-wide">
        {data.description}
      </p>
      <div className="mb-8 mt-4 flex  items-center justify-between  ">
        <Link
          className=" flex items-center gap-2 text-sm font-medium hover:text-secondaryLigth"
          href={data.linkGithub}
          target="_blank"
        >
          Acessar Github
          <LuGithub size={24} title="Github" />
        </Link>
        {data.linkProject && (
          <LinkGeneric href={data.linkProject}>
            <LuLink />
            Visualizar
          </LinkGeneric>
        )}
      </div>
    </motion.div>
  )
}
