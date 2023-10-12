import { motion } from 'framer-motion'
import { ReactComponent as Facebook } from '../assets/images/svg/facebook-icon.svg'
import { ReactComponent as Instagram } from '../assets/images/svg/instagram-icon.svg'
import { ReactComponent as LinkedIn } from '../assets/images/svg/linkedin-icon.svg'
import { ReactComponent as TelegramIcon } from '../assets/images/svg/telegram-icon.svg'
import { ReactComponent as TikTok } from '../assets/images/svg/tiktok-icon.svg'
import { AnimatedSectionTitle } from './AnimatedSectionTitle'
import { SocialButton } from './SocialButton'
import { useTranslation, TranslationContextType } from '../hooks/useTranslation'


const socialNetworks = [
  {
    href: 'https://www.facebook.com/people/VNV-Solutions/100088433736254/',
    icon: <Facebook />
  },
  {
    href: 'https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D',
    icon: <Instagram />
  },
  {
    href: 'https://t.me/vnv_solutions',
    icon: <TelegramIcon />
  },
  {
    href: 'https://www.linkedin.com/company/vnv-tech/',
    icon: <LinkedIn />
  },
  {
    href: 'https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1',
    icon: <TikTok />
  },
]

export const SocialNetworks = () => {
  const { translate } = useTranslation() as TranslationContextType

  return (
    <section className='social-networks'>
      <AnimatedSectionTitle>{translate("Follow us")}</AnimatedSectionTitle>
      <ul className='social-networks-list'>
        {
          socialNetworks.map((socialNetwork, index) =>
            <motion.a
              key={index}
              href={socialNetwork.href}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { delay: 0.05 * index } }}
              viewport={{ once: true }}
              target='_blank'
            >
              <li>
                <SocialButton>
                  {socialNetwork.icon}
                </SocialButton>
              </li>
            </motion.a>
          )
        }
      </ul>
    </section>
  )
}
