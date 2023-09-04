import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function SectionTitle({ number, title }: SectionTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const titleControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      titleControl.start("visible")
    }
  }, [isInView, titleControl])

  return (
    <motion.h2
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={titleControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="flex items-center font-titleFont text-3xl font-semibold"
    >
      <span className="mr-2 text-2xl text-textGreen md:text-lg">{number}.</span>
      {title}
      <span className="ml-6 h-px w-full bg-gray-500 bg-opacity-40 md:inline-flex md:w-60 lgl:w-72"></span>
    </motion.h2>
  )
}
