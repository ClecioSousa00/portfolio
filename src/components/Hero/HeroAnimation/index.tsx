'use client'
import { Player } from '@lottiefiles/react-lottie-player';

export const HeroAnimation=()=>{
  return(
    <Player
        autoplay
        loop
        src='https://lottie.host/4abaf900-1d41-4ebc-a132-953cef5dcd3d/Po0RF46C3E.json'
        style={{ height: '500px', width: '500px' }}
      />
  )
}