export const Locales: {
  code: keyof TLanguage
  country: string
}[] = [
  {
    code: "BR",
    country: "Brazil",
  },
  {
    code: "EN",
    country: "English",
  },
]

export const languages: Record<TLanguageKey, TLanguage> = {
  HeroSectionTitle: {
    BR: "Olá, me chamo Diego",
    EN: "Hey, I'm Diego",
  },
  HeroSectionSubtitle: {
    BR: "Eu sou um",
    EN: "I'm a",
  },
  HeroSectionStacks: {
    BR: ["Desenvolvedor de Software", "Desenvolvedor Fullstack", "Estudante de Cyber Segurança"],
    EN: ["Software Developer", "Fullstack Developer", "Cyber Security Student"],
  },
  HeroSectionDescription: {
    BR: "Passei os últimos 4 anos construindo e escalando software's para algumas empresas excelentes. Minha experiência abrange o desenvolvimento {{front-end}} e {{back-end}}, sustentado por uma base sólida. Atualmente, estou mergulhando no domínio das linguagens de programação {{Python}} e {{Ruby}}, enriquecendo ainda mais meu conjunto de skills.",
    EN: "I've spent the last 4 years building and scaling software for some pretty cool companies. My expertise spans both {{front-end}} and {{back-end}} development, underpinned by a robust foundation. Presently, I am immersing myself in the realm of {{Python}} and {{Ruby}} programming languages, further enriching my skill set.",
  },
  AboutSectionTitle: {
    BR: "Sobre",
    EN: "About",
  },
  AboutSectionDescription: {
    BR: "Sou um desenvolvedor de software full-stack curioso e competente. Vejo-me como um eterno aprendiz, motivado para resolver problemas complexos. Programar para mim é uma forma de encontrar paz em meio ao caos.",
    EN: "I'm a curious and competent full-stack software developer. I see myself as an eternal learner, motivated to solve complex problems. Programming for me is a way to find peace in the midst of chaos.",
  },
  AboutSectionStacksSubtitle: {
    BR: "Aqui estão algumas tecnologias que eu trabalho:",
    EN: "Here are a few technologies i work:",
  },
  ExperiencesSectionTitle: {
    BR: "Onde eu trabalhei",
    EN: "Where I have worked",
  },
  ProjectsSectionTitle: {
    BR: "Algumas coisas que construi",
    EN: "Some things I built",
  },
  ProjectsSectionSeeMore: {
    BR: "Ver mais",
    EN: "See More",
  },
  ProjectsSectionSubtitle: {
    BR: "Projeto em destaque",
    EN: "Featured Project",
  },
  ProjectsSectionModalFooterSubtitle: {
    BR: "Links do projeto",
    EN: "Project Links",
  },
  ProjectsSectionModalSourceCode: {
    BR: "Repositório do Projeto",
    EN: "Source Code",
  },
  ProjectsSectionModalLiveProject: {
    BR: "Site do Projeto",
    EN: "Live Project",
  },
  ContactSectionTitle: {
    BR: "E agora?",
    EN: "What's next?",
  },
  ContactSectionSubtitle: {
    BR: "Contato",
    EN: "Contact",
  },
  ContactSectionDescription: {
    BR: "Fique à vontade para entrar em contato comigo por e-mail se desejar estabelecer uma conexão. Além disso, estou disponível em",
    EN: "Please feel free to contact me via email if you would like to establish a connection. Also, I'm available on",
  },
  ContactSectionEndDescription: {
    BR: "se você preferir uma abordagem mais ágil de comunicação.",
    EN: "if you prefer a more agile approach to communication.",
  },
  ResumeButton: {
    BR: "Curriculo",
    EN: "Resume",
  },
}
