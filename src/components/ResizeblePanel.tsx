import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import useMeasure from 'react-use-measure'

type ResizeblePanelProps = {
  custom?: number,
  children: React.ReactNode
}

export const ResizeblePanel = ({ custom, children }: ResizeblePanelProps) => {
  const [ref, { height }] = useMeasure()

  return (
    <motion.div animate={{ height}}  >
      <AnimatePresence initial={false} custom={custom}>
        <motion.div ref={ref} >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
