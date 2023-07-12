import { Container } from "../Container";
import { Logo } from "../Logo";
import { NavBar } from "../NavBar";

export const Header=()=>{
  return(
    <Container>
      <header className="pt-4 flex items-center justify-between  md:border-b-[1px] md:border-opacity-20 md:border-secondary">
        <Logo/>
        <NavBar/>
      </header>
    </Container>
  )
}