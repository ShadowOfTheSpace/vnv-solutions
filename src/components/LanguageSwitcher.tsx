import { LanguageItem } from './LanguageItem';

type LanguageSwitcherProps = {
  languageList: [string, string];

}

export const LanguageSwitcher = ({ languageList }: LanguageSwitcherProps) => {
  return (
    <div className='language-switcher'>
      <LanguageItem>{languageList[0]}</LanguageItem>
      <span className='language-splitter' />
      <LanguageItem>{languageList[1]}</LanguageItem>
    </div>
  )
}
