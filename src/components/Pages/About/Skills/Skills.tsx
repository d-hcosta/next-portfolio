import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { SliderProps } from "./models"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, A11y, Navigation, FreeMode } from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/free-mode"
export function Skills({ settings, data, title, icon }: SliderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref}>
      <motion.h2
        className="mb-2 text-lg font-semibold"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {title}
      </motion.h2>

      <Swiper {...settings} modules={[Autoplay, A11y,
        Navigation, FreeMode]}>
        {data.map(({ icon: IconComponent, name }, index ) => (
          <SwiperSlide key={`icon-${index}`}>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              animate={mainControls}
              title={name}
              className="flex h-20 w-24 items-center justify-center rounded-lg bg-[#232323] text-textGreen hover:text-textGreen/80"
            >
              <IconComponent
                title={name}
                className="h-14 w-14 transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
