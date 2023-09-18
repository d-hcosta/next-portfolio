import { Swiper, SwiperSlide } from "swiper/react"
import { Skills } from "@/components/Pages/About/Skills"
import { Autoplay, A11y, Navigation, FreeMode } from "swiper/modules"
import { SliderProps } from "./models"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/free-mode"

export function Slider({ settings, data }: SliderProps) {
  return (
    <Swiper {...settings} modules={[Autoplay, A11y, Navigation, FreeMode]}>
      {data?.map((item, index) => (
        <SwiperSlide key={`skill-${index}`}>
          <Skills icon={item.icon} name={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
