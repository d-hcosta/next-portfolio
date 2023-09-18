import { FaLaravel, FaNode, FaPhp, FaPython, FaReact } from "react-icons/fa"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiJavascript } from "react-icons/di"
import { SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si"

export const FrontEndSkills: SkillItem[] = [
  {
    name: "HTML5",
    icon: AiFillHtml5,
  },
  {
    name: "CSS",
    icon: DiCss3,
  },
  {
    name: "Javascript",
    icon: DiJavascript,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
]

export const BackEndSkills: SkillItem[] = [
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "Node",
    icon: FaNode,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "PHP",
    icon: FaPhp,
  },
  {
    name: "Laravel",
    icon: FaLaravel,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
]
