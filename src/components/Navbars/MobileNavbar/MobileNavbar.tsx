import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useLanguageContext } from "@/hooks"

import { BsGlobeAmericas } from "react-icons/bs"

import { NavbarLi } from "./NavbarLi"
import { NavbarConstants } from "@/constants"

export function MobileNavbar() {
  const { handleOpenLanguageModal, languageCode } = useLanguageContext()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const mobileMenu = useRef<string | unknown>("")

  function handleMobileMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <div className="fixed right-0 top-0 p-4">
        <div
          onClick={handleMobileMenu}
          className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-textGreen mdl:hidden"
        >
          <span className="inline-flex h-[2px] w-full transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
          <span className="inline-flex h-[2px] w-full translate-x-3 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
        </div>
      </div>

      {showMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={(node) => (mobileMenu.current = node)}
          onClick={handleMobileMenu}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-[slate-900/20] p-8 backdrop-blur"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="fixed bottom-0 left-0 h-32 w-full max-w-3xl cursor-default overflow-hidden rounded-lg bg-[#232323] p-6 text-white shadow-xl"
          >
            <div className="flex flex-col items-center gap-6">
              <ul className="mt-1 grid grid-cols-5 gap-8">
                {NavbarConstants.map((data, index) => (
                  <NavbarLi
                    key={`data-${index}`}
                    href={data.href}
                    icon={data.icon}
                    name={data.name[languageCode]}
                    onClick={handleMobileMenu}
                  />
                ))}
              </ul>

              <div className="cursor-pointer" onClick={handleOpenLanguageModal}>
                <BsGlobeAmericas />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
