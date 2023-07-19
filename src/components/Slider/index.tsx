'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'

import { CardSlider } from './CardSlider'
import { JsSvg } from '@/components/Icons/JsSvg'
import { TypescriptSvg } from '@/components/Icons/TypescripSvg'
import { HtmlSvg } from '@/components/Icons/HtmlSvg'
import { CssSvg } from '@/components/Icons/CssSvg'
import { ReactSvg } from '@/components/Icons/ReactSvg'
import { NextSvg } from '@/components/Icons/NextSvg'
import {  StyledComponents } from '@/components/Icons/StyledComponents'
import { FirebaseSvg } from '@/components/Icons/FirebaseSvg'
import { TailwindSvg } from '@/components/Icons/TailwindSgv'
import { MoreSvg } from '@/components/Icons/MoreSvg'

import 'swiper/css'
import 'swiper/css/effect-cards'

export const Slider=()=>{
  const sliderData = [
    { name: 'JavaScript', icon: JsSvg },
    { name: 'TypeScript', icon: TypescriptSvg },
    { name: 'HTML', icon: HtmlSvg },
    { name: 'Css', icon: CssSvg },
    { name: 'React', icon: ReactSvg },
    { name: 'React Native', icon: ReactSvg },
    { name: 'Nextjs', icon: NextSvg },
    { name: 'Tailwind', icon: TailwindSvg },
    { name: 'Styled-Components', icon: StyledComponents },
    { name: 'Firebase', icon: FirebaseSvg },
    { name: 'Em breve mais', icon:  MoreSvg}
  ]

  return(
    <>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <CardSlider name={item.name} icon={item.icon} />
          </SwiperSlide>
        ))}
    </Swiper>
    </>
  )
}