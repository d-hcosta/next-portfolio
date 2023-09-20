import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps)

import { languages } from "@/constants"

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false)
  const [languageCode, setLanguageCode] = useState<keyof TLanguage>("BR")

  const translate = (key: TLanguageKey) => {
    const translation = languages[key][languageCode]
    if (translation) {
      // Check if translation is an array of strings
      if (Array.isArray(translation)) {
        return translation.map((text, index) => (
          <span key={index} className="text-textGreen">
            {text}
          </span>
        ))
      }

      // Split the translation string into parts using '{{' and '}}' as delimiters
      const parts = translation.split(/({{.*?}})/g)

      // Map each part to JSX elements for spans or plain text
      const translatedText = parts.map((part, index) => {
        if (part.startsWith("{{") && part.endsWith("}}")) {
          // Remove '{{' and '}}' and use the inner content as the span text
          const spanText = part.substring(2, part.length - 2)
          return (
            <span key={index} className="text-textGreen">
              {spanText}
            </span>
          )
        } else {
          return part
        }
      })

      return <>{translatedText}</>
    }

    // Fallback to English or return an empty string if no translation is found
    return languages[key]["EN"] || ""
  }

  const handleChangeLanguage = (language: keyof TLanguage) => {
    setLanguageCode(language)
    localStorage.setItem("selectedLang", language)
  }

  function handleOpenLanguageModal() {
    setIsLanguageModalOpen(!isLanguageModalOpen)
  }

  useEffect(() => {
    const storageLang = localStorage.getItem("selectedLang")
    if (storageLang !== null) handleChangeLanguage(storageLang as keyof TLanguage)
  }, [languageCode])

  const provide = {
    languageCode,
    translate,
    isLanguageModalOpen,
    handleOpenLanguageModal,
    handleChangeLanguage,
  }
  return <LanguageContext.Provider value={provide}>{children}</LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext)
