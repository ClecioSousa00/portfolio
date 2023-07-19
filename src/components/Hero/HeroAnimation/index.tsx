'use client'
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "framer-motion"

export const HeroAnimation=()=>{
  return(
    <motion.div
      className="hidden lg:block "
      initial={{opacity:0, y:200, scale: 0.5}}
      whileInView={{opacity:1, y:0, scale:1}}
      exit={{opacity:0, y:200, scale: 0.5}}
      transition={{duration:0.5}}
    >
      <Player
          autoplay
          loop
          src='https://lottie.host/4abaf900-1d41-4ebc-a132-953cef5dcd3d/Po0RF46C3E.json'
          style={{ height: '500px', width: '500px' }}
        />
    </motion.div>
  )
}