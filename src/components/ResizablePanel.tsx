import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import useMeasure from 'react-use-measure'

type ResizeblePanelProps = {
  custom?: number,
  children: React.ReactNode
}

export const ResizablePanel = ({ custom, children }: ResizeblePanelProps) => {
  const [ref, { height }] = useMeasure()

  return (
    <motion.div animate={{ height }} style={{ width: '100%' }}>
      <AnimatePresence initial={false} custom={custom}>
        <motion.div ref={ref} >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
