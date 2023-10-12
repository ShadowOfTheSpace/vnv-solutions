import { LanguageSwitcher } from './LanguageSwitcher'
import { Navigation } from './Navigation'

export const Header = () => {

  return (
    <header className='header'>
      <a href="/vnv-solutions">
        <div className='header-logo'>
          <img src={require('../assets/images/vnv-logo.png')} alt='vnv-logo' />
        </div>
      </a>
      <div className='header-right'>
        <Navigation />
        <LanguageSwitcher languageList={["ua", "en"]} />
      </div>
    </header>
  )
}
