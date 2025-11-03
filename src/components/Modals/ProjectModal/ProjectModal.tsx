import { AnimatePresence, motion } from "framer-motion"
import { useLanguageContext } from "@/hooks"
import Image from "next/image"

import { RxOpenInNewWindow } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import { TbBrandGithub } from "react-icons/tb"

export function ProjectModal({ isOpen, setIsOpen, project }: ProjectModalProps) {
  const { translate, languageCode } = useLanguageContext()

  const projectGithubLink = project?.githubLink
  const projectLiveLink = project?.liveLink

  const githubLink = typeof projectGithubLink === "string" ? projectGithubLink : undefined
  const liveLink = typeof projectLiveLink === "string" ? projectLiveLink : undefined
  const hasGithubLink = Boolean(githubLink)

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
            className="relative h-full w-full max-w-3xl cursor-default overflow-hidden overflow-y-scroll rounded-lg bg-[#232323] p-6 text-white shadow-xl"
          >
            <Image src={project?.image} alt="modal-img" className="w-full" priority />

            <div className="py-4">
              <h3 className="font-titleFont text-2xl font-semibold">{project?.name}</h3>

              <div className="mt-2 flex flex-wrap gap-5 font-bodyFont text-base font-semibold text-textGreen">
                {project?.techArray.join(", ")}
              </div>

              <div className="mt-3 flex flex-col gap-7 tracking-wide">
                {project?.completeDescription &&
                  project?.completeDescription[languageCode].map((desc, i) => (
                    <p key={`desc-${i}`}>{desc}</p>
                  ))}
              </div>

              {project?.showFooter && (
                <div className="mt-9">
                  <p className="mb-3 font-titleFont text-2xl font-extrabold">
                    {translate("ProjectsSectionModalFooterSubtitle")}
                    <span className="text-textGreen">.</span>
                  </p>

                  <div className="flex justify-between">
                    <div>
                      <button disabled={!hasGithubLink}>
                        <a
                          href={githubLink}
                          target="_blank"
                          className={`flex items-center gap-1 ${
                            hasGithubLink
                              ? "text-textGreen"
                              : "cursor-not-allowed text-textGreen/50"
                          }`}
                        >
                          <TbBrandGithub />
                          <p>{translate("ProjectsSectionModalSourceCode")}</p>
                        </a>
                      </button>
                    </div>

                    <div>
                      <a
                        href={liveLink}
                        target="_blank"
                        className="flex items-center gap-1 text-textGreen"
                      >
                        <RxOpenInNewWindow />
                        <p>{translate("ProjectsSectionModalLiveProject")}</p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
