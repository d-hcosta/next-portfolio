import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

import { RxOpenInNewWindow } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import { TbBrandGithub } from "react-icons/tb"
import { eloRocket } from "@/assets"

export function ProjectModal({ isOpen, setIsOpen, project }: ProjectModalProps) {
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
            className="relative w-full max-w-3xl cursor-default overflow-hidden rounded-lg bg-[#232323] p-6 text-white shadow-xl"
          >
            <Image src={project?.image} alt="modal-img" className="w-full" />

            <div className="py-4">
              <h3 className="font-titleFont text-2xl font-semibold">{project?.name}</h3>

              <div className="mt-2 flex flex-wrap gap-5 font-bodyFont text-base font-semibold text-textGreen">
                {project?.techArray.join(", ")}
              </div>

              <div className="mt-3 flex flex-col gap-7 tracking-wide">
                {project?.completeDescription &&
                  project?.completeDescription.map((desc, i) => <p key={`desc-${i}`}>{desc}</p>)}
              </div>

              <div className="mt-9">
                <p className="mb-3 font-titleFont text-2xl font-extrabold">
                  Project Links<span className="text-textGreen">.</span>
                </p>

                <div className="flex justify-between">
                  <a href="" className="flex items-center gap-1 text-textGreen">
                    <TbBrandGithub />
                    <p>Source Code</p>
                  </a>

                  <a href="" className="flex items-center gap-1 text-textGreen">
                    <RxOpenInNewWindow />
                    <p>Live Project</p>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
