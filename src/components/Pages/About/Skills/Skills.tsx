import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export function Skills({ name, icon }: SkillsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const IconComponent = icon

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={mainControls}
      title={name}
      ref={ref}
      className="flex h-20 w-24 items-center justify-center rounded-lg bg-[#232323] text-textGreen hover:text-textGreen/80"
    >
      <IconComponent className="h-14 w-14" />
    </motion.div>
  )
}
