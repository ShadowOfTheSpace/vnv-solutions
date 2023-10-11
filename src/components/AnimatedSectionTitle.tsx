import { motion } from 'framer-motion'
type AnimatedSectionTitleProps = {
  children: React.ReactNode,
  duration?: number
}
export const AnimatedSectionTitle = ({ children, duration = 1 }: AnimatedSectionTitleProps) => {
  return (
    <motion.h1
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      animate={{ transition: { duration } }}
    >
      {children}
    </motion.h1>
  )
}
