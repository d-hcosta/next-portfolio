import { useLanguageContext } from "@/hooks"
import { motion } from "framer-motion"
import { NavLink } from "./NavLink"
import { NavbarConstants } from "@/constants"

export function DefaultNavbar() {
  const { languageCode, translate } = useLanguageContext()

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
    <div className="navbarBlur shadow-NavbarShadow fixed left-6 right-6 top-6 z-50 mx-auto flex w-[calc(460px+2rem)] items-center justify-center rounded-xl bg-bodyColor/60 lg:h-[8vh]">
      <div className="flex h-full max-w-container items-center justify-between py-1 font-titleFont">
        <div className="hidden items-center gap-7 mdl:inline-flex">
          <ul className="flex gap-7 text-[13px]">
            {NavbarConstants.map((link, index) => (
              <NavLink
                key={`link-${index}`}
                href={link.href}
                name={link.name[languageCode]}
                handleClick={handleScroll}
              />
            ))}
          </ul>

          <a
            href="https://drive.google.com/file/d/1cUvuMYLZP1DVLh_jpY3PLZTn0kKEpdhJ/view?usp=sharing"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="rounded-md border border-textGreen px-4 py-2 text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
            >
              {translate("ResumeButton")}
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  )
}
