import { LanguageSwitcher } from './LanguageSwitcher'
import { Navigation } from './Navigation'

export const Header = () => {

  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={require('../assets/images/vnv-logo.png')} alt='vnv-logo' />
      </div>
      <div className='header-right'>
        <Navigation />
        <LanguageSwitcher languageList={["ua", "en"]} />
      </div>
    </header>
  )
}
