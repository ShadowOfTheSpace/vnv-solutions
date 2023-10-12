import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { ReactComponent as DownArrow } from "../assets/images/svg/down-arrow.svg"
import { ReactComponent as LeftArrow } from "../assets/images/svg/left-arrow.svg"
import { ReactComponent as RightArrow } from "../assets/images/svg/right-arrow.svg"
import { ReactComponent as UpperArrow } from "../assets/images/svg/upper-arrow.svg"

type AnimatedImageCarouselProps = {
  type: 'vertical' | 'horizontal',
  itemClass: string,
  containerClass: string,
  imageSrcList: string[],
  onImageClick: () => void
  setSelectedImage: (value: React.SetStateAction<number>) => void,
}

const variants = {
  initial: {
    opacity: 0
  },

  whileInView: ({ index }: { index: number, type: 'vertical' | 'horizontal' }) => ({
    opacity: 1,
    transition: { delay: index > 3 ? 0 : index * 0.05, duration: 0.5, type: 'spring' },
  }),
}

export const AnimatedImageCarousel = ({
  type,
  itemClass,
  containerClass,
  imageSrcList,
  onImageClick,
  setSelectedImage,
}: AnimatedImageCarouselProps) => {
  const selectorRef = useRef<null | HTMLDivElement>(null)
  const [upperScrollIsVisible, setUpperScrollIsVisible] = useState(false)
  const [lowerScrollIsVisible, setLowerScrollIsVisible] = useState(true)
  const [maxScrollHeight, setMaxScrollHeight] = useState(0)
  const [ref, bounds] = useMeasure()
  const scrollIncrement = type === 'vertical' ? bounds.height : bounds.width

  useEffect(() => {
    if (selectorRef.current) {
      setMaxScrollHeight(
        type === 'vertical' ?
          selectorRef.current.scrollHeight - selectorRef.current.clientHeight :
          selectorRef.current.scrollWidth - selectorRef.current.clientWidth
      )
    }
  }, [selectorRef.current, bounds])

  const onSelectionScroll = () => {
    const element = selectorRef.current
    if (element) {
      setUpperScrollIsVisible(
        type === 'vertical' ?
          element.scrollTop > 0 :
          element.scrollLeft > 0
      )
      setLowerScrollIsVisible(
        type === 'vertical' ?
          Math.abs(element.scrollTop - maxScrollHeight) >= 1 :
          Math.abs(element.scrollLeft - maxScrollHeight) >= 1
      )
    } else {
      setLowerScrollIsVisible(true)
      setUpperScrollIsVisible(true)
    }
  }

  const scrollTo = (direction: 'positive' | 'negative', increment: number) => {
    selectorRef.current?.scrollBy({
      [type === 'vertical' ? 'top' : 'left']: direction === 'positive' ? -increment : increment,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {upperScrollIsVisible &&
        <div
          className={`arrow-container ${type === 'vertical' ? 'upper' : 'left'}`}
          onClick={() => scrollTo('positive', scrollIncrement)}
        >
          {type === 'vertical' ? <UpperArrow /> : <LeftArrow />}
        </div>}
      {lowerScrollIsVisible &&
        <div
          className={`arrow-container ${type === 'vertical' ? 'down' : 'right'}`}
          onClick={() => scrollTo('negative', scrollIncrement)}
        >
          {type === 'vertical' ? <DownArrow /> : <RightArrow />}
        </div>}

      <div className={containerClass} ref={selectorRef} onScroll={onSelectionScroll}>
        {imageSrcList.map((image, index) =>
          <div key={index}>
            <motion.img
              viewport={{ once: true, }}
              variants={variants}
              initial="initial"
              whileInView="whileInView"
              whileHover={{ opacity: 0.6 }}
              whileTap={{ scale: 0.9 }}
              custom={{ type, index }}
              ref={ref}
              className={itemClass}
              src={image}
              alt='img'
              onClick={() => {
                setSelectedImage(index)
                onImageClick()
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}
