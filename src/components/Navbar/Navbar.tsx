"use client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

import { MdOutlineClose } from "react-icons/md"

export function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const mobileMenu = useRef<string | unknown>("")

  function handleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()

    const { href } = event.currentTarget

    const targetId = href.replace(/.*\#/, "")
    const element = document.getElementById(targetId)

    element?.scrollIntoView({ behavior: "smooth" })

    const links = document.querySelectorAll(".nav-link")

    links.forEach((link) => {
      link.classList.remove("active")
    })

    event.currentTarget.classList.add("active")
  }

  function handleMobileMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <div className="shadow-navbarShadow sticky top-0 z-50 h-20 w-full bg-bodyColor px-4 lg:h-[12vh]">
      <div className="mx-auto flex h-full max-w-container items-center justify-between py-1 font-titleFont">
        <div>{/* <Image className="w-14" src={} /> */}</div>

        <div className="hidden items-center gap-7 mdl:inline-flex">
          <ul className="flex gap-7 text-[13px]">
            <Link
              href="#home"
              className="nav-link active flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              href="#about"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                About
              </motion.li>
            </Link>

            <Link
              href="#experience"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Experience
              </motion.li>
            </Link>

            <Link
              href="#contact"
              onClick={handleScroll}
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>

          <a href="" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="rounded-md border border-textGreen px-4 py-2 text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
            >
              Resume
            </motion.button>
          </a>
        </div>

        <div
          onClick={handleMobileMenu}
          className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-textGreen mdl:hidden"
        >
          <span className="inline-flex h-[2px] w-full transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
          <span className="inline-flex h-[2px] w-full translate-x-3 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
        </div>

        {showMenu && (
          <div
            ref={(node) => (mobileMenu.current = node)}
            className="absolute right-0 top-0 flex h-screen w-full  flex-col items-end bg-black bg-opacity-50 mdl:hidden"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="scrollbarHide relative flex h-full w-[80%] flex-col items-center overflow-y-scroll bg-[#112240] px-4 py-10"
            >
              <MdOutlineClose
                className="absolute right-4 top-4 cursor-pointer text-3xl text-textGreen hover:text-red-500"
                onClick={handleMobileMenu}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
