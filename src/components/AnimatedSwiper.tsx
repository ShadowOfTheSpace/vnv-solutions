import { PanInfo, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTrend } from '../hooks/useTrend'
import { ReactComponent as LeftArrow } from "../assets/images/svg/left-arrow.svg"
import { ReactComponent as RightArrow } from "../assets/images/svg/right-arrow.svg"
import { AnimatedCarousel } from './AnimatedCarousel'

type AnimatedSwiperProps = {
  contentAnimationKey: number,
  contentIndex: number,
  setNextContentIndex: (value: React.SetStateAction<number>) => void,
  contentListLength: number,
  currentContentSrc: string,
  contentType: string
}

export const AnimatedSwiper = ({
  contentAnimationKey,
  contentIndex,
  setNextContentIndex,
  contentListLength,
  currentContentSrc,
  contentType
}: AnimatedSwiperProps) => {

  let trend = useTrend(contentIndex)

  const handleDrag = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 150) {
      if (contentIndex - 1 >= 0 && info.offset.x > 0) {
        setNextContentIndex(contentIndex - 1)
      }
      if (contentIndex + 1 < contentListLength && info.offset.x < 0) {
        setNextContentIndex(contentIndex + 1)
      }
    }
  }

  return (
    <motion.div
      key={contentAnimationKey}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      {contentIndex - 1 >= 0 &&
        <div className='arrow-container left' onClick={() => setNextContentIndex(contentIndex - 1)}>
          <LeftArrow />
        </div>}
      {contentIndex + 1 < contentListLength &&
        <div className='arrow-container right' onClick={() => setNextContentIndex(contentIndex + 1)}>
          <RightArrow />
        </div>}
      <AnimatedCarousel direction='x' trend={trend} index={contentIndex}>
        {contentType === 'image' ?
          <motion.img
            drag={'x'}
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={handleDrag}
            src={currentContentSrc}
            alt='img' />
          :
          <motion.video
            drag={'x'}
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={handleDrag}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={currentContentSrc} />
          </motion.video>
        }
      </AnimatedCarousel>
    </motion.div>
  )
}
