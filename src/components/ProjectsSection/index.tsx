import Link from "next/link"
import { CardProject } from "../CardProject"
import { Container } from "../Container"
import { FaArrowRightLong } from "react-icons/fa6"

export const ProjectSection=()=>{
  return(
    <section className="py-10 md:py-20">
      <Container>
        <h2 className="text-2xl font-semibold text-secondaryLigth mb-4 md:mb-10 uppercase">Projetos</h2>
        <div className="flex flex-col items-center gap-y-10 md:flex-row md:justify-between">
          <CardProject/>
          <CardProject/>
        </div>
        
          <Link 
            className=" text-sm font-medium w-24 flex items-center gap-2 mt-10 hover:text-secondaryLigth cursor-pointer"
            href={'https://github.com/ClecioSousa00'} 
            target="_blank"
          >
              Ver mais
            <FaArrowRightLong/>
          </Link>
        
      </Container>
    </section>
  )
}