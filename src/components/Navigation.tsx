import { TranslationContextType, useTranslation } from '../hooks/useTranslation'
import { NavigationItem } from './NavigationItem'

export const Navigation = () => {
  const navigationList = ["services", "portfolio", "contacts"]
  const { translate } = useTranslation() as TranslationContextType

  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        {navigationList.map((value, index) =>
          <NavigationItem key={index} href={`#${value}`}>
            {translate(value)}
          </NavigationItem>
        )}
      </ul>
    </nav>
  )
}
