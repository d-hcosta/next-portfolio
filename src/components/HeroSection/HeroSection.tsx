"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-contentContainer flex-col gap-4 py-10 mdl:px-10 mdl:py-24 lgl:gap-8 xl:px-4 ">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-titleFont text-lg tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col font-titleFont text-4xl font-semibold lgl:text-6xl"
      >
        Diego Costa. <span className="mt-2 text-textDark lgl:mt-4">I'm a Fullstack Developer.</span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base font-medium text-textDark md:max-w-[650px]"
      >
        I am a <span className="text-textGreen">Software Developer</span>, boasting more than{" "}
        <span className="text-textGreen">four years</span> of professional experience. My expertise
        spans both <span className="text-textGreen">front-end</span> and{" "}
        <span className="text-textGreen">back-end</span> development, underpinned by a robust
        foundation. Presently, I am immersing myself in the realm of{" "}
        <span className="text-textGreen">Python</span> and{" "}
        <span className="text-textGreen">Ruby</span> programming languages, further enriching my
        skill set.
      </motion.p>

      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="h-14 w-52 rounded-md border border-textGreen font-titleFont text-sm tracking-wide text-textGreen duration-300 hover:bg-hoverColor"
      >
        Check out my Projects!
      </motion.button>
    </section>
  )
}
