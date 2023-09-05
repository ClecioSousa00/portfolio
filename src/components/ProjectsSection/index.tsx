import { CardProject } from './CardProject'
import { Container } from '../Container'
import { dataProjects } from '@/DataProjects'

export const ProjectSection = () => {
  return (
    <section id="project" className="bg-primary py-10 md:py-28">
      <Container>
        <h2 className="mb-4 text-2xl font-semibold uppercase text-secondaryLigth lg:mb-10">
          Projetos
        </h2>
        <div className="flex flex-col flex-wrap items-center gap-y-10 lg:flex-row lg:items-start lg:justify-between">
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
