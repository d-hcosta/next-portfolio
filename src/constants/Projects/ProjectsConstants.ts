import { eloRocket, pomodoro, portfolioV1 } from "@/assets"

export const ProjectsConstants = [
  {
    image: eloRocket,
    name: "EloRocket",
    shortDescription:
      "EloRocket is an e-commerce platform committed to providing exceptional booster and training services to players, providing a wide range of innovative solutions to enhance their gaming skills and overall experience.",
    techArray: ["React.js", "Node.js", "Styled-Components", "SaSS", "PostgreSQL"],
    completeDescription: [
      "During my journey as a web developer, I had the honor of leading the development of the EloRocket website, a platform dedicated to elevating the experience of League of Legends players in search of improvement and excellence in the game.",
      "I developed advanced features such as a player and booster search system, a complete admin control panel to manage the entire site and database in a simple way.",
      "I have adopted strict measures to guarantee the security of user data, implementing advanced data protection and encryption protocols, guaranteeing the confidentiality and integrity of information.",
    ],
    reverse: false,
  },
  {
    image: portfolioV1,
    name: "Personal Portfolio V.1",
    shortDescription:
      "My previous portfolio, developed in React.js  with Typescript and Sass, featured a language-switching system (pt-BR/en-US) and a theme-switcher both implemented using only React Hooks",
    techArray: ["React.js", "SaSS", "React Hooks", "Typescript"],
    reverse: true,
    completeDescription: [
      "I designed a modern and efficient architecture that allows for a fluid and responsive user experience. The use of React.js and Typescript provided a solid foundation for the development of the site.",
      "Implemented a language exchange system (pt-BR/en-US) that improves accessibility and usability for an international audience. This was achieved by applying best practices in React Hooks.",
      "Added a theme switcher that allows users to customize the experience to their preferences. This demonstrates my focus on customization and design adaptability.",
    ],
  },
  {
    image: pomodoro,
    name: "Pomodoro Timer",
    shortDescription:
      "I created a robust and efficient Pomodoro Timer using React with Typescript and SaSS. This project demonstrates my ability to develop modern applications, with a minimalist approach, using exclusively React Hooks for state management.",
    techArray: ["React.js", "SaSS", "React Hooks", "Typescript"],
    reverse: false,
    completeDescription: [
      "I designed the Pomodoro Timer to be highly effective and easy to use. Work and rest cycles are clearly defined, and the user interface is clean and intuitive.",
      "I demonstrated my mastery of managing state in React applications, using exclusively React Hooks to maintain clean and highly readable code.",
      "Implemented built-in notifications to remind users when work and rest cycles were about to end, improving the user experience.",
    ],
  },
]
