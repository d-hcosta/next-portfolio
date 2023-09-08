export const Locales: {
  code: keyof TLanguage
  country: string
  flag: string
}[] = [
  {
    code: "BR",
    country: "Brazil",
    flag: "fi-br",
  },
  {
    code: "EN",
    country: "English",
    flag: "fi-us",
  },
]

export const languages: Record<TLanguageKey, TLanguage> = {
  HomeSubtitle: {
    BR: "Desenvolvedor Fullstack",
    EN: "Fullstack Developer",
  },
}
