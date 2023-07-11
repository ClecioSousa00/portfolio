import Link from "next/link";

export const NavBarDesktop=()=>{
  return(
    <nav>
      <ul>
        <li> <Link href={'#'}>Home</Link> </li>
        <li> <Link href={'#'}>Sobre Min</Link> </li              >
        <li> <Link href={'#'}>Skills</Link> </li>
        <li> <Link href={'#'}>Projetos</Link> </li>
        <li> <Link href={'#'}>Contato</Link> </li>
      </ul>
    </nav>
  )
}