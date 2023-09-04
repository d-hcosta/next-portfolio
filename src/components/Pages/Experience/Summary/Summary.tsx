import { Reveal } from "@/components"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { TiArrowForward } from "react-icons/ti"

function SummaryDescriptionLi({ description }: SummaryDescriptionProp) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const arrowControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      arrowControl.start("visible")
    }
  }, [isInView, arrowControl])

  return (
    <motion.li
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={arrowControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex gap-2 text-base text-textDark"
    >
      <span className="mt-l text-textGreen">
        <TiArrowForward />
      </span>
      <Reveal>{description}</Reveal>
    </motion.li>
  )
}

export function Summary({
  projectUrl,
  projectName,
  periodInTheProject,
  arrayOfDescriptions,
  positionHeld,
}: SummaryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const titleControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      titleControl.start("visible")
    }
  }, [isInView, titleControl])

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={titleControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-titleFont text-xl font-medium">
        {positionHeld}
        <a href={projectUrl} target="_blank">
          <span className="tracking-wide text-textGreen">@{projectName}</span>
        </a>
      </h3>

      <p className="mt-l text-sm font-medium text-textDark">{periodInTheProject}</p>

      <ul className="mt-6 flex flex-col gap-3 ">
        {arrayOfDescriptions?.map((item, index) => (
          <SummaryDescriptionLi key={`desc-${index}`} description={item} />
        ))}
      </ul>
    </motion.div>
  )
}
