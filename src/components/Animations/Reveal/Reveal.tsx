import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function Reveal({ children, width = "fit-content" }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.55 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0, opacity: 0 },
          visible: { left: "100%", opacity: 1 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, easy: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#0aff9d",
          zIndex: 20,
        }}
      />
    </div>
  )
}
