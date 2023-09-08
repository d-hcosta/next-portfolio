type LanguageContextProps = {
  languageCode: keyof TLanguage
  translate: (key: TLanguageKey) => string
  handleChangeLanguage: (language: keyof TLanguage) => void
}

type LanguageProviderProps = {
  children: React.ReactNode
}

type TLanguage = {
  BR: string
  EN: string
}

type TLanguageKey = string
