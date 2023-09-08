import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps)

import { languages } from "@/constants"

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [languageCode, setLanguageCode] = useState<keyof TLanguage>("BR")

  const translate = (key: TLanguageKey) => {
    const getLanguage = languages[key][languageCode]
    return getLanguage
  }

  const handleChangeLanguage = (language: keyof TLanguage) => {
    setLanguageCode(language)
    localStorage.setItem("selectedLang", language)
  }

  useEffect(() => {
    const storageLang = localStorage.getItem("selectedLang")
    if (storageLang !== null) handleChangeLanguage(storageLang as keyof TLanguage)
  }, [languageCode])

  const provide = { languageCode, translate, handleChangeLanguage }
  return <LanguageContext.Provider value={provide}>{children}</LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext)
