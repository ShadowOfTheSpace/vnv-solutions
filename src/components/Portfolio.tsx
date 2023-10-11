import { useState } from 'react'
import { AnimatedImageCarousel } from './AnimatedImageCarousel'
import { AnimatedSwiper } from './AnimatedSwiper'
import { AnimatedSectionTitle } from './AnimatedSectionTitle'
import { motion } from 'framer-motion'
// import portfolio1 from '../images/portfolio1.png'
// import portfolio2 from '../images/portfolio2.png'
// import portfolio3 from '../images/portfolio3.png'

const projects = [

  // {
  //   preview: portfolio1,
  //   images: [
  //     portfolio1,
  //     portfolio2,
  //     portfolio3
  //   ]
  // },
  // {
  //   preview: portfolio2,
  //   images: [
  //     portfolio1,
  //     portfolio2,
  //     portfolio3
  //   ]
  // },
  // {
  //   preview: portfolio3,
  //   images: [
  //     portfolio1,
  //     portfolio2,
  //     portfolio3,
  //   ]
  // },
  // {
  //   preview: portfolio1,
  //   images: [
  //     portfolio1,
  //     portfolio2,
  //     portfolio3
  //   ]
  // },
  // {
  //   preview: portfolio2,
  //   images: [
  //     portfolio1,
  //     portfolio2,
  //     portfolio3
  //   ]
  // },
  // {
  //   preview: portfolio3,
  //   images: [
  //     portfolio1,
  //     portfolio2,
  //     portfolio3,
  //   ]
  // },
  {
    preview: 'https://www.v-n-v.tech/img/learnitlive.png',
    images: [
      'https://www.v-n-v.tech/img/learnitlive.png',
      'https://www.v-n-v.tech/img/volstiny_production.png',
      'https://www.v-n-v.tech/img/iren.png'
    ]
  },
  {
    preview: 'https://www.v-n-v.tech/img/iren.png',
    images: [
      'https://www.v-n-v.tech/img/iren.png',
      'https://www.v-n-v.tech/img/volstiny_production.png',
      'https://www.v-n-v.tech/img/learnitlive.png',
    ]
  },
  {
    preview: 'https://www.v-n-v.tech/img/learnitlive.png',
    images: [
      'https://www.v-n-v.tech/img/learnitlive.png',
      'https://www.v-n-v.tech/img/volstiny_production.png',
      'https://www.v-n-v.tech/img/iren.png'
    ]
  },
  {
    preview: 'https://www.v-n-v.tech/img/volstiny_production.png',
    images: [
      'https://www.v-n-v.tech/img/volstiny_production.png',
      'https://www.v-n-v.tech/img/iren.png',
      'https://www.v-n-v.tech/img/learnitlive.png',
    ]
  },
  {
    preview: 'https://www.v-n-v.tech/img/iren.png',
    images: [
      'https://www.v-n-v.tech/img/iren.png',
      'https://www.v-n-v.tech/img/volstiny_production.png',
      'https://www.v-n-v.tech/img/learnitlive.png',
    ]
  },
  {
    preview: 'https://www.v-n-v.tech/img/learnitlive.png',
    images: [
      'https://www.v-n-v.tech/img/learnitlive.png',
      'https://www.v-n-v.tech/img/volstiny_production.png',
      'https://www.v-n-v.tech/img/iren.png'
    ]
  },
  {
    preview: 'https://www.v-n-v.tech/img/volstiny_production.png',
    images: [
      'https://www.v-n-v.tech/img/volstiny_production.png',
      'https://www.v-n-v.tech/img/iren.png',
      'https://www.v-n-v.tech/img/learnitlive.png',
    ]
  },

]

export const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <section className='portfolio' id='portfolio'>
      <AnimatedSectionTitle>Наші проекти</AnimatedSectionTitle>
      <div className="projects-viewer" >
        <motion.div
          className="project-viewer"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          viewport={{ once: true, margin: '-15%' }}
        >
          <div className="image-container">
            <AnimatedSwiper
              imageAnimationKey={currentProject}
              imageIndex={currentImage}
              setNextImageIndex={setCurrentImage}
              imagesListLength={projects[currentProject].images.length}
              currentImageSrc={projects[currentProject].images[currentImage]}
            />
          </div>
        </motion.div>
        <motion.div
          className="project-selector"
        >
          <AnimatedImageCarousel
            type={'vertical'}
            itemClass={'project-selector-item'}
            containerClass={'project-selector-container'}
            imageSrcList={projects.map(project => project.preview)}
            onImageClick={() => setCurrentImage(0)}
            setSelectedImage={setCurrentProject}
          />
        </motion.div>
      </div>
    </section>
  )
}
