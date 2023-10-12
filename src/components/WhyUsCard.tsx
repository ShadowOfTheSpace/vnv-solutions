import { motion } from "framer-motion"
import { useTranslation, TranslationContextType } from "../hooks/useTranslation"

type WhyUsCardProps = {
  title: string
  icon: React.ReactNode
  description: string
  index: number
}

const variants = {
  initial: {
    y: 100,
    opacity: 0
  },
  whileInView: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.05
    }
  })
}

export const WhyUsCard = ({ title, icon, description, index }: WhyUsCardProps) => {
  const { translate } = useTranslation() as TranslationContextType
  return (
    <motion.div
      className="why-us-card"
      variants={variants}
      initial='initial'
      whileInView='whileInView'
      viewport={{ once: true }}
      custom={index}
    >
      <div className="why-us-card-header">
        <h3>{translate(title)}</h3>
        {icon}
      </div>
      <p className='why-us-card-text'>
        {translate(description)}
      </p>
    </motion.div>
  )
}
