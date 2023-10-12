import React, { createContext, useContext, useEffect, useState } from 'react';

type Translations = {
  [key: string]: {
    [key: string]: string
  };
};

export type TranslationContextType = {
  language: string;
  setLanguage: (language: string) => void;
  translate: (key: string) => string;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

type TranslationProviderProps = {
  children: React.ReactNode;
};

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const languageFromStorage = localStorage.getItem("vnv-language")
  const [language, setLanguage] = useState<string>(languageFromStorage === null ? 'ua' : languageFromStorage);

  useEffect(() => {
    localStorage.setItem("vnv-language", language)
  }, [language])


  const translate = (key: string) => {
    const translations: Translations = {
      en: require('../localization/en.json'),
      ua: require('../localization/ua.json')
    };
    return translations[language][key] || key;
  }

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};


export function useTranslation() {
  return useContext(TranslationContext);
}