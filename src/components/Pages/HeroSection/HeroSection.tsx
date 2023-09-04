import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-contentContainer flex-col gap-4 py-10 mdl:px-10 mdl:py-24 lgl:gap-8 xl:px-4 "
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col font-titleFont lgl:text-6xl"
      >
        <span className="text-8xl font-extrabold">
          Hey, i'm Diego<span className="text-8xl font-extrabold text-textGreen">.</span>
        </span>

        <span className="mt-2 text-5xl font-medium text-textLight/80 lgl:mt-4">
          I'm a{" "}
          <span className="mt-2 font-semibold text-textGreen lgl:mt-4">Software Developer</span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-base font-medium text-textDark md:max-w-[650px]"
      >
        I've spent the last 4 years building and scaling software for some pretty cool companies. My
        expertise spans both <span className="font-semibold text-textGreen">front-end</span> and{" "}
        <span className="font-semibold text-textGreen">back-end</span> development, underpinned by a
        robust foundation. Presently, I am immersing myself in the realm of{" "}
        <span className="font-semibold text-textGreen">Python</span> and{" "}
        <span className="font-semibold text-textGreen">Ruby</span> programming languages, further
        enriching my skill set.
      </motion.p>

      <motion.button
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="h-14 w-52 rounded-md border border-textGreen font-titleFont text-sm tracking-wide text-textGreen duration-300 hover:bg-hoverColor"
      >
        Check out my Projects!
      </motion.button>
    </section>
  )
}
