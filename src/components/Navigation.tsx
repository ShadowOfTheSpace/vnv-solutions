import { NavigationItem } from './NavigationItem'

export const Navigation = () => {
  const navigationList = ["Послуги", "Портфоліо", "Контакти"]

  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        {navigationList.map((value, index) =>
          <NavigationItem key={index}>
            {value}
          </NavigationItem>
        )}
      </ul>
    </nav>
  )
}
