import { AnimatedSectionTitle } from './AnimatedSectionTitle'
import { Button } from './Button'
import { ReactComponent as BriefImage } from '../assets/images/svg/brief-image2.svg'
import { motion } from 'framer-motion'
import { useTranslation, TranslationContextType } from '../hooks/useTranslation'

export const Brief = () => {
  const { translate } = useTranslation() as TranslationContextType

  return (
    <section className="brief">
      <AnimatedSectionTitle>{translate("Fill the brief")}</AnimatedSectionTitle>
      <motion.div
        className="brief-container"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
        viewport={{ once: true, }}
      >
        <Button arrow>{translate("Fill out")}</Button>
        <div className="brief-top">
          <p className='brief-description'>
            Lorem esse officia velit nisi magna adipisicing sunt consequat elit ea nulla do. Nisi mollit laboris nisi anim culpa eiusmod. Ullamco consequat cillum incididunt culpa mollit. Irure amet aute dolore eiusmod dolore eu in eiusmod. Anim aliquip eiusmod deserunt cillum eu sunt cupidatat voluptate. Officia sit cillum aliquip qui dolore ex nisi minim aliqua commodo ea incididunt qui culpa.
          </p>
          <BriefImage/>
        </div>
      </motion.div>
    </section>
  )
}
