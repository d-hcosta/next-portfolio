import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai"
import { RiPagesLine } from "react-icons/ri"
import { GoPerson } from "react-icons/go"

export const NavbarConstants = [
  {
    name: {
      BR: "Início",
      EN: "Home",
    },
    href: "#home",
    icon: <AiOutlineHome />,
  },
  {
    name: {
      BR: "Sobre",
      EN: "About",
    },
    href: "#about",
    icon: <GoPerson />,
  },
  {
    name: {
      BR: "Experiência",
      EN: "Experience",
    },
    href: "#experience",
    icon: <RiPagesLine />,
  },
  {
    name: {
      BR: "Projetos",
      EN: "Projects",
    },
    href: "#projects",
    icon: <AiOutlineProject />,
  },
  {
    name: {
      BR: "Contato",
      EN: "Contact",
    },
    href: "#contact",
    icon: <AiOutlineMail />,
  },
]
