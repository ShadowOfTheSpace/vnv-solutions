import { NavigationItem } from './NavigationItem'

export const Navigation = () => {
  const navigationList = ["services", "portfolio", "contacts"]

  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        {navigationList.map((value, index) =>
          <NavigationItem key={index} href={`#${value}`}>
            {value}
          </NavigationItem>
        )}
      </ul>
    </nav>
  )
}
