import Image from "next/image"
import { motion } from "framer-motion"

import { characterAbout } from "@/assets"
import { SectionTitle } from "@/components/SectionTitle"
import { Reveal, SlideProps, Slider } from "@/components"
import { BackEndSkills, FrontEndSkills } from "@/constants"

export function About() {
  const settings: SlideProps = {
    slidesPerView: 6,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      pauseOnMouseEnter: false,
    },
    draggable: false,
    loop: true,
    freeMode: true,
    breakpoints: {
      300: {
        slidesPerView: 3,
        navigation: true,
        slidesPerGroup: 1,
      },
      800: {
        slidesPerView: 6,
        slidesPerGroup: 1,
      },
    },
  }

  return (
    <section
      id="about"
      className="mx-auto flex max-w-containerSmall flex-col gap-8 py-10 lgl:py-32"
    >
      <SectionTitle number="01" title="About" />

      <div className="flex flex-col gap-16 lgl:flex-row">
        <div className="flex w-full flex-col gap-4 text-base font-medium tracking-wide text-textDark lgl:w-2/3">
          <Reveal>
            <p>
              I'm a curious and competent full-stack software developer. I see myself as an eternal
              learner, motivated to solve complex problems. Programming for me is a way to find
              peace in the midst of chaos.
            </p>
          </Reveal>

          <Reveal>
            <p>Here are a few technologies i work:</p>
          </Reveal>

          <div className="overflow-hidden">
            <h2 className="mb-2 text-lg font-semibold">Front-End</h2>

            <Slider settings={settings} data={FrontEndSkills} />
          </div>

          <div className="overflow-hidden">
            <h2 className="mb-2 text-lg font-semibold">Back-End</h2>

            <Slider settings={settings} data={BackEndSkills} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="group relative h-80 w-full lgl:w-1/3"
        >
          <div className="absolute -left-6 -top-6 h-80 w-full rounded-lg">
            <div className="relative z-20 flex h-full w-full pl-6 lgl:pl-0">
              <Image
                className="h-full rounded-lg object-cover"
                src={characterAbout}
                alt="characterAbout"
              />
              <div className="absolute left-0 top-0 hidden h-80 w-full rounded-md bg-textGreen/5 duration-300 group-hover:bg-transparent lgl:inline-block"></div>
            </div>
          </div>
          <div className="hidden h-80 w-full rounded-md border-2 border-textGreen transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 lgl:inline-flex"></div>
        </motion.div>
      </div>
    </section>
  )
}
