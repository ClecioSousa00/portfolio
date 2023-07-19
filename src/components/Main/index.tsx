import { AboutSection } from "../AboutSection"
import { Container } from "../Container"
import { ExperienceSection } from "../ExperieceSection"
import { Hero } from "../Hero"
import { ProjectSection } from "../ProjectsSection"
import { SkillsSection } from "../SkillsSection"

export const Main =()=>{
  return(
   
      <main className="lg:pt-24">
        <Hero/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectSection/>
      </main>
   
  )
}