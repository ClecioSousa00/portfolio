import { Player } from '@lottiefiles/react-lottie-player'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'#'}>
      <Player
        autoplay
        loop
        src="https://lottie.host/53d8a9d4-c7b8-4e18-a9a2-77fb85f0d640/feR7Qm0yjN.json"
        style={{ height: '80px', width: '80px' }}
      />
    </Link>
  )
}
