import { useLanguageContext } from "@/hooks"
import { motion } from "framer-motion"
import { BsGlobeAmericas } from "react-icons/bs"

export function AsideRight() {
  const { handleOpenLanguageModal } = useLanguageContext()

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex"
      >
        <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-textLight">
          <div className="flex flex-col gap-4">
            <span
              onClick={handleOpenLanguageModal}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen"
            >
              <BsGlobeAmericas />
            </span>
          </div>

          <span className="inline-flex h-32 w-[2px] bg-textDark"></span>
        </div>
      </motion.div>
    </>
  )
}
