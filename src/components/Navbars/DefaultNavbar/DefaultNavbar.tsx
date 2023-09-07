import { motion } from "framer-motion"
import Link from "next/link"

export function DefaultNavbar() {
  function handleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()

    const { href } = event.currentTarget

    const targetId = href.replace(/.*\#/, "")
    const element = document.getElementById(targetId)

    element?.scrollIntoView({ behavior: "smooth" })

    const links = document.querySelectorAll(".nav-link")

    links.forEach((link) => {
      link.classList.remove("text-textGreen")
    })

    event.currentTarget.classList.add("text-textGreen")
  }

  return (
    <div className="navbarBlur shadow-NavbarShadow fixed left-6 right-6 top-6 z-50 mx-auto flex w-[calc(400px+2rem)] items-center justify-center rounded-xl bg-bodyColor/60 lg:h-[8vh]">
      <div className="flex h-full max-w-container items-center justify-between py-1 font-titleFont">
        <div className="hidden items-center gap-7 mdl:inline-flex">
          <ul className="flex gap-7 text-[13px]">
            <Link
              href="#home"
              className="nav-link flex cursor-pointer items-center gap-1 font-medium text-textGreen duration-300 hover:text-textGreen"
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
              transition={{ delay: 0.25 }}
              className="rounded-md border border-textGreen px-4 py-2 text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
            >
              Resume
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  )
}
