import { Logo } from '../Logo'
import { NavBar } from '../NavBar'

export const Header = () => {
  // const [scroll, setScroll] = useState(0)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScroll(window.scrollY)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <header
      className={` relative flex items-center px-4 py-6 transition-all duration-300 2xl:container md:fixed md:top-0 md:z-50
          md:mx-auto md:w-full md:justify-center md:border-b-[1px] md:border-secondary  md:border-opacity-20 md:bg-primary/95 md:px-10 md:py-4`}
    >
      {/* <Logo /> */}
      <NavBar />
    </header>
  )
}
