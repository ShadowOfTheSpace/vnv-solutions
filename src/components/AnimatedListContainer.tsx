import { motion } from 'framer-motion'
import React, { useId } from 'react'

const variants = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index
    }
  })
}

type AnimatedListContainerProps = {
  index: number,
  children: React.ReactNode
}

export const AnimatedListContainer = (
  { index,
    children
  }: AnimatedListContainerProps
) => {
  return (
    <motion.li
      key={useId()}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
      custom={index}
    >
      {children}
    </motion.li>
  )
}
