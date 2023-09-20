import { languages } from "@/constants"
import { useLanguageContext } from "@/hooks"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

export function HeroSection() {
  const { translate, languageCode } = useLanguageContext()

  return (
    <section
      id="home"
      className="mx-auto flex max-w-contentContainer flex-col items-center gap-4 py-10 mdl:px-10 mdl:pt-56 lgl:gap-8 xl:px-4 "
    >
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col font-titleFont lgl:text-6xl"
      >
        <span className="text-8xl font-extrabold">
          {translate("HeroSectionTitle")}
          <span className="text-8xl font-extrabold text-textGreen">.</span>
        </span>

        <div className="flex items-center justify-center">
          <span className="mt-2 inline-flex items-center gap-3 text-4xl font-medium text-textLight/80 lgl:mt-4">
            <p> {translate("HeroSectionSubtitle")}</p>
            <span className="font-semibold text-textGreen">
              <Typewriter
                options={{
                  strings:
                    languageCode === "BR"
                      ? languages.HeroSectionStacks.BR
                      : languages.HeroSectionStacks.EN,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </span>
        </div>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-base font-medium tracking-wide text-textDark md:max-w-[650px]"
      >
        {translate("HeroSectionDescription")}
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
