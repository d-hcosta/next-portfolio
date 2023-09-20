type LanguageContextProps = {
  languageCode: keyof TLanguage
  translate: (key: TLanguageKey) => string | ReactNode
  handleChangeLanguage: (language: keyof TLanguage) => void
  handleOpenLanguageModal: () => void
  isLanguageModalOpen: boolean
}

type LanguageProviderProps = {
  children: React.ReactNode
}

type TLanguage = {
  BR: string | string[]
  EN: string | string[]
}

type TLanguageKey = string
