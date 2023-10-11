import { motion } from 'framer-motion'
import React from 'react'

type AnimatedMovingTextProps = {
  children: React.ReactNode,
  index: number
}
export const AnimatedMovingText = ({ children, index }: AnimatedMovingTextProps) => {
  return (
    <motion.div
      initial={{ x: '-50%', opacity: 0 }}
      whileInView={{ x: 0, opacity: 1, }}
      transition={{ delay: 0.3 * index, type: 'spring', duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
