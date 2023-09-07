import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { RiPagesLine } from "react-icons/ri"
import { GoPerson } from "react-icons/go"

export const NavbarConstants = [
  {
    name: "Home",
    href: "#home",
    icon: <AiOutlineHome />,
  },
  {
    name: "About",
    href: "#about",
    icon: <GoPerson />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <RiPagesLine />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <AiOutlineMail />,
  },
]
