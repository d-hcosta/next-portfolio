"use client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

export function Navbar() {
  return (
    <div className="shadow-navbarShadow sticky top-0 z-50 h-20 w-full bg-bodyColor px-4 lg:h-[12vh]">
      <div className="mx-auto flex h-full max-w-container items-center justify-between py-1 font-titleFont">
        <div>{/* <Image className="w-14" src={} /> */}</div>

        <div className="hidden items-center gap-7 mdl:inline-flex">
          <ul className="flex gap-7 text-[13px]">
            <Link
              href="#home"
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textDark duration-300 hover:text-textGreen"
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

        <div className="group flex h-5 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-textGreen mdl:hidden">
          <span className="inline-flex h-[2px] w-full transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
          <span className="inline-flex h-[2px] w-full translate-x-3 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
          <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-textGreen transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
        </div>
      </div>
    </div>
  )
}
