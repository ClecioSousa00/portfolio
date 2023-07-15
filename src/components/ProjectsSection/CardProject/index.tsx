import Image from "next/image"
import Link from "next/link"
import { LuGithub,LuLink } from "react-icons/lu"
import bannerBlizzard from '@/assets/banner-blizzard 1.png'
import { LinkGeneric } from "@/components/LinkGeneric"

export const CardProject=()=>{
  return(
    <div className="w-full md:w-[31.25rem] ">
      <div className="h-[12.5rem] md:h-[15.625rem] rounded overflow-hidden opacity-50 transition-opacity duration-200 hover:opacity-95">
        <Image className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer object-top" 
          src={bannerBlizzard} 
          alt=""
        />
      </div>
      <h3 className="text-lg text-secondaryLigth mt-6 mb-4 md:text-2xl font-medium">Blizzard</h3>
      <p className="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
      <div className="flex w-36 items-center gap-2 mt-4 mb-8 hover:text-secondaryLigth cursor-pointer">
        <Link 
          className=" text-sm font-medium"
          href={'https://github.com/ClecioSousa00'} 
          target="_blank"
        >
            Acessar Github
        </Link>
        <LuGithub size={24}/>
      </div>
      < LinkGeneric href={'https://github.com/ClecioSousa00'}>
        <LuLink/>
        Visualizar
      </LinkGeneric>
    </div>
  )
}