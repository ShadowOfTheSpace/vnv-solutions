import React from 'react'
import { NavigationItem } from './NavigationItem'
import { LanguageSwitcher } from './LanguageSwitcher'



export const Header = () => {
  const navigationList = ["Послуги", "Портфоліо", "Контакти"]


  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={require('../images/vnv-logo.png')} alt='vnv-logo' />
      </div>
      <nav>
        <ul className='navigation-list'>
          {
            navigationList.map((value, index) =>
              <NavigationItem key={index}>
                {value}
              </NavigationItem>
            )
          }
        </ul>
      </nav>
      <LanguageSwitcher languageList={["ua","en"]}/>
    </header>
  )
}
