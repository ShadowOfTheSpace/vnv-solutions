import { useState } from 'react'
import { AnimatedImageCarousel } from './AnimatedImageCarousel'
import { AnimatedSwiper } from './AnimatedSwiper'
import { AnimatedSectionTitle } from './AnimatedSectionTitle'
import { motion } from 'framer-motion'

const projects = [
  {
    preview: require('../assets/images/portfolio-iren-banquet-hall-1.jpg'),
    content: [
      {
        src: require('../assets/images/portfolio-iren-banquet-hall-1.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/portfolio-iren-banquet-hall-2.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/portfolio-iren-banquet-hall-3.jpg'),
        type: 'image'
      }
    ]
  },
  {
    preview: require('../assets/images/portfolio-learn-it-live-1.jpg'),
    content: [
      {
        src: require('../assets/images/portfolio-learn-it-live-1.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/portfolio-learn-it-live-2.jpg'),
        type: 'image'
      }
    ]
  },
  {
    preview: require('../assets/images/video-preview-1.jpg'),
    content: [
      {
        src: require('../assets/videos/video.mp4'),
        type: 'video'
      },
      {
        src: require('../assets/images/video-preview-1.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/video-preview-2.jpg'),
        type: 'image'
      }
    ]
  },
  {
    preview: require('../assets/images/portfolio-iren-banquet-hall-1.jpg'),
    content: [
      {
        src: require('../assets/images/portfolio-iren-banquet-hall-1.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/portfolio-iren-banquet-hall-2.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/portfolio-iren-banquet-hall-3.jpg'),
        type: 'image'
      }
    ]
  },
  {
    preview: require('../assets/images/portfolio-learn-it-live-1.jpg'),
    content: [
      {
        src: require('../assets/images/portfolio-learn-it-live-1.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/portfolio-learn-it-live-2.jpg'),
        type: 'image'
      }
    ]
  },
  {
    preview: require('../assets/images/video-preview-1.jpg'),
    content: [
      {
        src: require('../assets/videos/video.mp4'),
        type: 'video'
      },
      {
        src: require('../assets/images/video-preview-1.jpg'),
        type: 'image'
      },
      {
        src: require('../assets/images/video-preview-2.jpg'),
        type: 'image'
      }
    ]
  },
]

export const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentContent, setCurrentContent] = useState(0)

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
          <div className="content-container">
            <AnimatedSwiper
              contentType={projects[currentProject].content[currentContent].type}
              contentAnimationKey={currentProject}
              contentIndex={currentContent}
              setNextContentIndex={setCurrentContent}
              contentListLength={projects[currentProject].content.length}
              currentContentSrc={projects[currentProject].content[currentContent].src}
            />
          </div>
        </motion.div>
        <motion.div className="project-selector">
          <AnimatedImageCarousel
            type={'vertical'}
            itemClass={'project-selector-item'}
            containerClass={'project-selector-container'}
            imageSrcList={projects.map(project => project.preview)}
            onImageClick={() => setCurrentContent(0)}
            setSelectedImage={setCurrentProject}
          />
        </motion.div>
      </div>
    </section>
  )
}
