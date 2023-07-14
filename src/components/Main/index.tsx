import { AboutSection } from "../AboutSection"
import { Container } from "../Container"
import { ExperienceSection } from "../ExperieceSection"
import { Hero } from "../Hero"
import { SkillsSection } from "../SkillsSection"

export const Main =()=>{
  return(
   
      <main>
        <Hero/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
      </main>
   
  )
}