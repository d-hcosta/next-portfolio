import { brazilSvg, usaSvg } from "@/assets"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"

export function LanguageModal({ isOpen, setIsOpen }: LanguageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-[slate-900/20] p-8 backdrop-blur"
        >
          <button className="absolute right-5 top-5">
            <AiOutlineClose />
          </button>

          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm cursor-default overflow-hidden rounded-lg bg-[#232323] p-6 text-white shadow-xl"
          >
            <ul className="flex gap-8">
              <li className="cursor-pointer">
                <Image src={brazilSvg} alt="brazilFlag" />
              </li>

              <li className="cursor-pointer">
                <Image src={usaSvg} alt="usaFlag" />
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
