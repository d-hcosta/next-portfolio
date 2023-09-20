import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useLanguageContext } from "@/hooks"
import { Reveal } from "@/components"
import Image from "next/image"

import { RxOpenInNewWindow } from "react-icons/rx"

export function FeaturedProject({
  projectName,
  projectShortDescription,
  imgSrc,
  techArray,
  reverse,
  openDetailedProject,
}: FeaturedProjectProps) {
  const { translate } = useLanguageContext()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const techControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      techControls.start("visible")
    }
  }, [isInView, techControls])

  return (
    <div className={`flex flex-col gap-6 ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"}`}>
      <div
        className="group relative h-auto w-full cursor-pointer xl:w-1/2"
        onClick={() => openDetailedProject()}
      >
        <div>
          <Reveal>
            <Image
              className="h-full w-full object-contain"
              alt={projectName}
              src={imgSrc}
              priority
            />
          </Reveal>

          <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-black/30 duration-300 group-hover:bg-transparent"></div>
        </div>
      </div>

      <div className="z-10 flex w-full flex-col items-end gap-6 text-right lgl:justify-between xl:-ml-16 xl:w-1/2">
        <div>
          <Reveal>
            <p className="text-right font-titleFont text-sm tracking-wide text-textGreen">
              {translate("ProjectsSectionSubtitle")}
            </p>
          </Reveal>

          <Reveal>
            <h3 className="text-2xl font-bold">{projectName}</h3>
          </Reveal>
        </div>

        <motion.p
          ref={ref}
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={techControls}
          transition={{ duration: 0.5, delay: 0.65 }}
          className={`rounded-md bg-[#232323] p-2 text-sm md:p-6 md:text-base ${
            reverse && "xl:-mr-16"
          }`}
        >
          {projectShortDescription}
        </motion.p>

        <ul className="flex justify-between gap-2 font-titleFont text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
          {techArray?.map((tech, index) => (
            <motion.li
              ref={ref}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              animate={techControls}
              transition={{ duration: 0.5, delay: 0.25 }}
              key={index}
            >
              {tech}
            </motion.li>
          ))}
        </ul>

        <div className="flex gap-4 text-2xl">
          <motion.div
            ref={ref}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            animate={techControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex cursor-pointer gap-2 font-bodyFont font-semibold text-textGreen duration-300 hover:text-textGreen/75"
            onClick={() => openDetailedProject()}
          >
            <RxOpenInNewWindow /> {translate("ProjectsSectionSeeMore")}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
