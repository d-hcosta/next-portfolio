import Image from "next/image"
import { motion } from "framer-motion"

import { Reveal,SectionTitle } from "@/components"
import { characterAbout } from "@/assets"
import { BackEndSkills, FrontEndSkills, OtherSkills } from "@/constants"
import { useLanguageContext } from "@/hooks"
import { Skills } from "./Skills"
import { SlideProps } from "./models"

export function About() {
  const { translate } = useLanguageContext()

  const settings: SlideProps = {
    slidesPerView: 6,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      pauseOnMouseEnter: false,
    },
    draggable: false,
    loop: false,
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
      <SectionTitle number="01" title={translate("AboutSectionTitle")} />

      <div className="flex flex-col gap-16 lgl:flex-row">
        <div className="flex w-full flex-col gap-4 text-base font-medium tracking-wide text-textDark lgl:w-2/3">
          <Reveal>
            <p>{translate("AboutSectionDescription")}</p>
          </Reveal>

          <Reveal>
            <p className="font-bold">{translate("AboutSectionStacksSubtitle")}</p>
          </Reveal>

          <div className="overflow-hidden">
            <Skills data={FrontEndSkills} settings={settings} title="Front-End" />
          </div>

          <div className="overflow-hidden">
            <Skills data={BackEndSkills} settings={settings} title="Back-End" />
          </div>

          <div className="overflow-hidden">
            <Skills data={OtherSkills} settings={settings} title={translate("AboutSectionOtherTech")} />
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
