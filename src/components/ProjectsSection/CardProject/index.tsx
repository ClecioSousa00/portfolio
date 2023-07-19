'use client'
import Image from "next/image"
import Link from "next/link"
import { LuGithub,LuLink } from "react-icons/lu"
import { motion } from "framer-motion"

import { LinkGeneric } from "@/components/LinkGeneric"
import { dataProjectProps } from "@/types/projectType"
import { ComponentProps } from "react"

type CardProjectProps={
  data: dataProjectProps
} & ComponentProps<typeof motion.div>

export const CardProject=({data,...rest}: CardProjectProps)=>{
  return(
    <motion.div className="w-full md:w-[31.25rem] " {...rest}>
      <div className="h-[12.5rem] md:h-[15.625rem] rounded overflow-hidden opacity-50 transition-all duration-300 hover:opacity-95 hover:shadow-blue-shadow">
        <Image className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer object-top" 
          src={data.img} 
          alt=""
        />
      </div>
      <h3 className="text-lg text-secondaryLigth mt-6 mb-4 md:text-2xl font-medium">{data.name}</h3>
      <p className="text-sm font-light">{data.description}</p>
      <div className="flex w-36 items-center gap-2 mt-4 mb-8 hover:text-secondaryLigth cursor-pointer">
        <Link 
          className=" text-sm font-medium"
          href={data.linkGithub} 
          target="_blank"
        >
            Acessar Github
        </Link>
        <LuGithub size={24}/>
      </div>
      < LinkGeneric href={data.linkProject} target="_blank">
        <LuLink/>
        {data.linkProject ? 'Visualizar' : 'Indisponível'}
      </LinkGeneric>
    </motion.div>
  )
}

