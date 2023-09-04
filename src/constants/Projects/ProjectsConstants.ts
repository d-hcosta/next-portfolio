import { eloRocket, pomodoro, portfolioV1 } from "@/assets"

export const ProjectsConstants = [
  {
    image: eloRocket,
    name: "EloRocket",
    description:
      "EloRocket is an e-commerce platform committed to providing exceptional booster and training services to players, providing a wide range of innovative solutions to enhance their gaming skills and overall experience.",
    techArray: ["React.js", "Node.js", "Styled-Components", "SaSS", "PostgreSQL"],
    reverse: false,
  },
  {
    image: portfolioV1,
    name: "Personal Portfolio V.1",
    description:
      "My previous portfolio, developed in React.js  with Typescript and Sass, featured a language-switching system (pt-BR/en-US) and a theme-switcher both implemented using only React Hooks",
    techArray: ["React.js", "SaSS", "React Hooks", "Typescript"],
    reverse: true,
  },
  {
    image: pomodoro,
    name: "Pomodoro Timer",
    description:
      "I created a robust and efficient Pomodoro Timer using React with Typescript and SaSS. This project demonstrates my ability to develop modern applications, with a minimalist approach, using exclusively React Hooks for state management.",
    techArray: ["React.js", "SaSS", "React Hooks", "Typescript"],
    reverse: false,
  },
]
