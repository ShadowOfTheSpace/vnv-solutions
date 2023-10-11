import { PanInfo, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useTrend } from '../hooks/useTrend'
import { ReactComponent as LeftArrow } from "../images/svg/left-arrow.svg"
import { ReactComponent as RightArrow } from "../images/svg/right-arrow.svg"
import { AnimatedCarousel } from './AnimatedCarousel'

type AnimatedSwiperProps = {
  imageAnimationKey: number,
  imageIndex: number,
  setNextImageIndex: (value: React.SetStateAction<number>) => void,
  imagesListLength: number,
  currentImageSrc: string
}

export const AnimatedSwiper = ({
  imageAnimationKey,
  imageIndex,
  setNextImageIndex,
  imagesListLength,
  currentImageSrc
}: AnimatedSwiperProps) => {

  let trend = useTrend(imageIndex)

  const handleDrag = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 150) {
      if (imageIndex - 1 >= 0 && info.offset.x > 0) {
        setNextImageIndex(imageIndex - 1)
      }
      if (imageIndex + 1 < imagesListLength && info.offset.x < 0) {
        setNextImageIndex(imageIndex + 1)
      }
    }
  }

  return (
    <motion.div
      key={imageAnimationKey}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      {imageIndex - 1 >= 0 &&
        <div className='arrow-container left' onClick={() => setNextImageIndex(imageIndex - 1)}>
          <LeftArrow />
        </div>}
      {imageIndex + 1 < imagesListLength &&
        <div className='arrow-container right' onClick={() => setNextImageIndex(imageIndex + 1)}>
          <RightArrow />
        </div>}
      <AnimatedCarousel direction='x' trend={trend} index={imageIndex}>
        <motion.img
          drag={'x'}
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          src={currentImageSrc}
          alt='img' />
      </AnimatedCarousel>
    </motion.div>
  )
}
