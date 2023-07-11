import { NavBar } from "../NavBar";

export const Header=()=>{
  return(
    <header className="relative px-6 pt-7 flex items-center justify-between md:px-20 md:pt-10">
        <h1>Logo</h1>
        <NavBar/>
    </header>
  )
}