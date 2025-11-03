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
    EN: "Hello, I'm Diego Costa",
  },
  HeroSectionSubtitle: {
    BR: "Eu atuo como",
    EN: "I'm a",
  },
  HeroSectionStacks: {
    BR: [
      "Desenvolvedor de Software",
      "Desenvolvedor Fullstack",
      "Entusiasta de Segurança Cibernética",
    ],
    EN: ["Software Developer", "Fullstack Developer", "Cybersecurity Enthusiast"],
  },
  HeroSectionDescription: {
    BR: "Ao longo dos últimos 5 anos, tenho projetado e escalado produtos digitais para empresas de diferentes segmentos. Atuo em {{front-end}} e {{back-end}} com foco em qualidade técnica, governança de código e experiência do usuário. Recentemente, tenho aprofundado estudos em {{Python}} e {{Rust}} para ampliar minha atuação em plataformas de alta performance.",
    EN: "Over the past five years I've been designing and scaling digital products for companies across multiple industries. I work across {{front-end}} and {{back-end}} initiatives with a strong focus on technical quality, code governance, and user experience. Recently I've been expanding my knowledge in {{Python}} and {{Rust}} to support high-performance platforms.",
  },
  AboutSectionTitle: {
    BR: "Sobre",
    EN: "About",
  },
  AboutSectionDescription: {
    BR: "Sou um desenvolvedor full-stack orientado a resultados, apaixonado por transformar desafios de negócio em soluções robustas e mensuráveis. Valorizo processos colaborativos, comunicação transparente e melhoria contínua.",
    EN: "I'm a results-driven full-stack developer who loves turning business challenges into reliable, measurable solutions. I value collaborative processes, transparent communication, and continuous improvement.",
  },
  AboutSectionStacksSubtitle: {
    BR: "Algumas das tecnologias com as quais mais tenho trabalhado:",
    EN: "A selection of the technologies I work with most frequently:",
  },
  AboutSectionOtherTech: {
    BR: "Ferramentas complementares",
    EN: "Complementary tooling",
  },
  ExperiencesSectionTitle: {
    BR: "Experiências profissionais",
    EN: "Professional experience",
  },
  ProjectsSectionTitle: {
    BR: "Projetos em destaque",
    EN: "Featured projects",
  },
  ProjectsSectionSeeMore: {
    BR: "Ver mais",
    EN: "See More",
  },
  ProjectsSectionSubtitle: {
    BR: "Case de destaque",
    EN: "Highlight case study",
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
    BR: "Projeto em produção",
    EN: "Live project",
  },
  ContactSectionTitle: {
    BR: "Vamos conversar?",
    EN: "Ready to talk?",
  },
  ContactSectionSubtitle: {
    BR: "Contato",
    EN: "Contact",
  },
  ContactSectionDescription: {
    BR: "Estou disponível para novas conversas sobre oportunidades, consultoria técnica ou projetos desafiadores. Você pode me enviar um e-mail diretamente ou conectar-se comigo também pelo",
    EN: "I'm available to discuss new opportunities, technical consulting, or challenging projects. Feel free to email me directly or reach out as well on",
  },
  ContactSectionEndDescription: {
    BR: "caso prefira uma conversa rápida e objetiva.",
    EN: "if you prefer a quick and direct conversation.",
  },
  ResumeButton: {
    BR: "Curriculo",
    EN: "Resume",
  },
}
