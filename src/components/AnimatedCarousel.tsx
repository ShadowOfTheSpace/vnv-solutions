import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import useMeasure from 'react-use-measure'

const duration = 0.5
const serviceViewerVariants = {
  initial: ({ direction, trend }: { direction: string, trend: number }) => {
    return ({
      [direction]: `${trend * 100}%`,
      opacity: 0,
      transition: { duration: duration }
    })
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: duration }
  },
  exit: ({ direction, trend }: { direction: string, trend: number }) => ({
    [direction]: `${-trend * 100}%`,
    opacity: 0,
    transition: { duration: duration }
  })
}
type AnimatedCarouselProps = {
  children: React.ReactNode,
  index: number,
  trend: number,
  direction: 'x' | 'y'
}

export const AnimatedCarousel = ({ children, index, trend, direction }: AnimatedCarouselProps) => {
  const [ref, { height }] = useMeasure()
  return (
    <motion.div style={{ height: height || 'auto', }}>
      <AnimatePresence initial={false} custom={{ direction, trend }}>
        <motion.div
          key={index}
          variants={serviceViewerVariants}
          custom={{ direction, trend }}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ position: height ? 'absolute' : 'relative' }}
          ref={ref}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
