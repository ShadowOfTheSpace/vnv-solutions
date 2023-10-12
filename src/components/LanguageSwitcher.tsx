import { TranslationContextType, useTranslation } from '../hooks/useTranslation';
import { LanguageItem } from './LanguageItem';

type LanguageSwitcherProps = {
  languageList: [string, string];
}

export const LanguageSwitcher = ({ languageList }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useTranslation() as TranslationContextType
  return (
    <div className='language-switcher'>
      <LanguageItem
        isActive={language === languageList[0]}
        onClick={() => setLanguage(languageList[0])}
      >
        {languageList[0]}
      </LanguageItem>
      <span className='language-splitter' />
      <LanguageItem
        isActive={language === languageList[1]}
        onClick={() => setLanguage(languageList[1])}
      >
        {languageList[1]}
      </LanguageItem>
    </div >
  )
}
