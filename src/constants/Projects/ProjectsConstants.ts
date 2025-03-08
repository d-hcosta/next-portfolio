import { eloRocket, pomodoro, portfolioV1, toniello } from "@/assets"

export const ProjectsConstants = [
  {
    image: toniello,
    name: "Toniello Chat",
    shortDescription: {
      BR: "Um software de chat empresarial moderno e seguro, utilizando Next.js no front-end e NestJS no back-end para maximizar desempenho e escalabilidade.",
      EN: "An enterprise-grade chat software using modern technologies, built with Next.js for the front-end and NestJS for the back-end to maximize performance and scale.",
    },
    completeDescription: {
      BR: [
        "Integração LDAP: Autenticação de usuários utilizando Microsoft Active Directory para login seguro e gerenciamento de acessos.",
        "Comunicação em tempo real: Desenvolvido com Socket.IO para fornecer mensagens instantâneas e atualizações de status entre usuários.",
        "Implantação e DevOps: Uso de Docker para ambientes de desenvolvimento e produção, garantindo segurança adicional ao ser implantado em uma rede interna protegida por VPN.",
        "Segurança avançada: Gerenciamento de sessão utilizando JWT integrado ao LDAP para controle de autenticação.",
        "Uploads de arquivos: Implementação de manipulação de arquivos utilizando AWS S3 para um armazenamento confiável e escalável.",
        "Canais baseados em departamentos: Funcionalidade que permite aos usuários conversarem em canais específicos de departamentos e mensagens privadas para uma comunicação mais segmentada.",
        "Painel administrativo: Implementação de um painel de controle para gestão de usuários e departamentos, supervisão de chats e monitoramento da atividade dos usuários para melhor administração.",
      ],
      EN: [
        "LDAP Integration: Used LDAP to authenticate users against Microsoft Active Directory for secure login and management.",
        "Real-time Communication: Developed with Socket.IO to provide instant messaging and status updates between users.",
        "Deployment and DevOps: Used Docker files for both dev and prod, and with an added layer of enterprise security by deploying on a VPN-secured internal network.",
        "Advanced Security: Session management utilizing JWT strategy integrated with LDAP token management.",
        "File Uploads: Implemented file handling with AWS S3 integration for reliable and scalable file storage.",
        "Department-based Channels: Included a feature that allows users to chat in department-specific channels and private messages for tailored communication.",
        "Admin Dashboard: Implemented a dashboard for user and department management, chat oversight, and monitoring user activity for improved administrative control.",
      ],
    },
    techArray: [
      "Next.js",
      "NestJS",
      "Tailwind",
      "MongoDB",
      "Redis",
      "Docker",
      "Amazon S3",
      "Microsoft LDAP",
    ],
    githubLink: false,
    liveLink: false,
    showFooter: false,
    reverse: true,
  },
  {
    image: eloRocket,
    name: "EloRocket",
    shortDescription: {
      BR: "EloRocket é uma plataforma de comércio eletrônico comprometida em fornecer serviços excepcionais de reforço e treinamento aos jogadores, fornecendo uma ampla gama de soluções inovadoras para aprimorar suas habilidades de jogo e experiência geral.",
      EN: "EloRocket is an e-commerce platform committed to providing exceptional booster and training services to players, providing a wide range of innovative solutions to enhance their gaming skills and overall experience.",
    },
    techArray: ["React.js", "Node.js", "Styled-Components", "SaSS", "PostgreSQL"],
    completeDescription: {
      BR: [
        "Durante minha jornada como desenvolvedor web, tive a honra de liderar o desenvolvimento do site EloRocket, plataforma dedicada a elevar a experiência dos jogadores de League of Legends em busca de aprimoramento e excelência no jogo.",
        "Desenvolvi recursos avançados como sistema de busca de players e boosters, painel de controle administrativo completo para gerenciar todo o site e banco de dados de forma simples.",
        "Adotei medidas rigorosas para garantir a segurança dos dados dos usuários, implementando protocolos avançados de proteção e criptografia de dados, garantindo a confidencialidade e integridade das informações.",
      ],
      EN: [
        "During my journey as a web developer, I had the honor of leading the development of the EloRocket website, a platform dedicated to elevating the experience of League of Legends players in search of improvement and excellence in the game.",
        "I developed advanced features such as a player and booster search system, a complete admin control panel to manage the entire site and database in a simple way.",
        "I have adopted strict measures to guarantee the security of user data, implementing advanced data protection and encryption protocols, guaranteeing the confidentiality and integrity of information.",
      ],
    },
    githubLink: false,
    liveLink: "https://www.elorocket.com/",
    showFooter: true,
    reverse: false,
  },
  {
    image: portfolioV1,
    name: "Personal Portfolio V.1",
    shortDescription: {
      BR: "Meu portfólio anterior, desenvolvido em React.js com Typescript e Sass, apresenta um sistema de troca de linguagem (pt-BR/en-US) e um alternador de tema ambos implementados usando apenas React Hooks",
      EN: "My previous portfolio, developed in React.js  with Typescript and Sass, featured a language-switching system (pt-BR/en-US) and a theme-switcher both implemented using only React Hooks",
    },
    techArray: ["React.js", "SaSS", "React Hooks", "Typescript"],
    reverse: true,
    completeDescription: {
      BR: [
        "Projetei uma arquitetura moderna e eficiente que permite uma experiência de usuário fluida e responsiva. O uso de React.js e Typescript proporcionou uma base sólida para o desenvolvimento do site.",
        "Implementei um sistema de intercâmbio de idiomas (pt-BR/en-US) que melhora a acessibilidade e usabilidade para um público internacional. Isso foi conseguido através da aplicação das melhores práticas em React Hooks.",
        "Adicionou um alternador de tema que permite aos usuários personalizar a experiência de acordo com suas preferências. Isso demonstra meu foco na personalização e adaptabilidade do design.",
      ],
      EN: [
        "I designed a modern and efficient architecture that allows for a fluid and responsive user experience. The use of React.js and Typescript provided a solid foundation for the development of the site.",
        "Implemented a language exchange system (pt-BR/en-US) that improves accessibility and usability for an international audience. This was achieved by applying best practices in React Hooks.",
        "Added a theme switcher that allows users to customize the experience to their preferences. This demonstrates my focus on customization and design adaptability.",
      ],
    },
    githubLink: "https://github.com/d-hcosta/react-portfolio",
    liveLink: "https://dhcosta.vercel.app/",
    showFooter: true,
  },
  {
    image: pomodoro,
    name: "Pomodoro Timer",
    shortDescription: {
      BR: "Criei um Pomodoro Timer robusto e eficiente usando React com Typescript e SaSS. Este projeto demonstra minha capacidade de desenvolver aplicações modernas, com uma abordagem minimalista, utilizando exclusivamente React Hooks para gerenciamento de estado.",
      EN: "I created a robust and efficient Pomodoro Timer using React with Typescript and SaSS. This project demonstrates my ability to develop modern applications, with a minimalist approach, using exclusively React Hooks for state management.",
    },
    techArray: ["React.js", "SaSS", "React Hooks", "Typescript"],
    reverse: false,
    completeDescription: {
      BR: [
        "Eu projetei o Pomodoro Timer para ser altamente eficaz e fácil de usar. Os ciclos de trabalho e descanso são claramente definidos e a interface do usuário é limpa e intuitiva.",
        "Demonstrei meu domínio de gerenciamento de estado em aplicações React, usando exclusivamente React Hooks para manter código limpo e altamente legível.",
        "Implementamos notificações integradas para lembrar os usuários quando os ciclos de trabalho e descanso estavam prestes a terminar, melhorando a experiência do usuário.",
      ],
      EN: [
        "I designed the Pomodoro Timer to be highly effective and easy to use. Work and rest cycles are clearly defined, and the user interface is clean and intuitive.",
        "I demonstrated my mastery of managing state in React applications, using exclusively React Hooks to maintain clean and highly readable code.",
        "Implemented built-in notifications to remind users when work and rest cycles were about to end, improving the user experience.",
      ],
    },
    githubLink: "https://github.com/d-hcosta/pomodoro-react",
    liveLink: "https://vrag-pomodoro.vercel.app/",
    showFooter: true,
  },
]
