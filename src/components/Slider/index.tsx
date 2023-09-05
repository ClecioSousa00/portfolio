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
import { StyledComponents } from '@/components/Icons/StyledComponents'
import { TailwindSvg } from '@/components/Icons/TailwindSgv'
import { MoreSvg } from '@/components/Icons/MoreSvg'

import 'swiper/css'
import 'swiper/css/effect-cards'

export const Slider = () => {
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

    { name: 'Em breve mais', icon: MoreSvg },
  ]

  return (
    <div className=" relative h-[25rem] w-[12.5rem] origin-center md:w-[15.625rem]">
      <div className="absolute bottom-16 h-48 w-48 rounded-full bg-radial-gradient md:bottom-4 md:h-64  md:w-64"></div>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <CardSlider name={item.name} icon={item.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
