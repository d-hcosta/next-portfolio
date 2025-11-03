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
        "Arquitetura moderna: Next.js e NestJS em TypeScript, com Socket.IO para tempo real, MongoDB para persistência e Redis para cache, presença, filas de trabalho e pub/sub.",
        "Integração corporativa: Autenticação via LDAP/Active Directory, sincronização de atributos e grupos, e gerenciamento centralizado de acessos.",
        "Segurança e governança: RBAC (owner/admin/membro), política granular de permissões (criar grupos, adicionar/remover membros, enviar mídia, mencionar @todos), sessões com JWT e rotacionamento de tokens, rate limiting e validação de payload.",
        "Grupos e canais: Criação de grupos públicos/privados, links de convite com expiração, aprovação de entrada, silenciamento, fixação de mensagens e menções.",
        "Departamentos: Canais segmentados por departamento com provisionamento automático a partir do diretório e suporte a mensagens privadas entre usuários.",
        "Mensagens em tempo real: Confirmação de leitura, indicadores de digitação e presença, edição/remoção com registro de histórico e pesquisa por texto/usuário/canal.",
        "Uploads e mídias: Armazenamento no AWS S3 com links assinados, verificação de tipo e tamanho, pré-visualização de arquivos comuns e expiração configurável de downloads.",
        "Operação e DevOps: Imagens Docker para dev e prod, implantação em rede interna protegida por VPN, variáveis seguras e migrações versionadas.",
        "Observabilidade: Logs estruturados, métricas de aplicação e monitoramento de filas/latência; alertas para falhas de entrega e picos de erro.",
        "Resiliência e escala: Balanceamento horizontal de gateways WebSocket, retry e reconexão automática do cliente, e degradação controlada quando Redis ou S3 estão indisponíveis.",
        "Painel administrativo: Gestão de usuários, grupos e departamentos, auditoria de ações, visão de saúde dos serviços e aplicação de políticas (retenção, tamanho de anexos, nomes de canais).",
      ],
      EN: [
        "Modern architecture: Next.js and NestJS in TypeScript, Socket.IO for real time, MongoDB for persistence, and Redis for caching, presence, work queues, and pub/sub.",
        "Enterprise integration: Authentication via LDAP/Active Directory, attribute/group sync, and centralized access management.",
        "Security & governance: RBAC (owner/admin/member), granular permissions (create groups, add/remove members, send media, @everyone), JWT-based sessions with token rotation, rate limiting, and payload validation.",
        "Groups & channels: Public/private groups, expiring invite links, join approval, mute, pinned messages, and mentions.",
        "Departments: Department-scoped channels auto-provisioned from the directory plus private user-to-user messaging.",
        "Real-time messaging: Read receipts, typing and presence indicators, edit/delete with history, and search by text/user/channel.",
        "Files & media: AWS S3 storage with signed URLs, type/size enforcement, common file previews, and configurable download expiry.",
        "Ops & DevOps: Docker images for dev/prod, deployment on a VPN-secured internal network, secure env management, and versioned migrations.",
        "Observability: Structured logging, app metrics, and queue/latency monitoring with alerts for delivery failures and error spikes.",
        "Resilience & scale: Horizontally scaled WebSocket gateways, client retry/reconnect, and graceful degradation on Redis/S3 incidents.",
        "Admin dashboard: User/group/department management, action audit trails, service health, and policy enforcement (retention, attachment size, channel naming).",
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
