import { motion } from "framer-motion"
import { AnimatedMovingText } from "./AnimatedMovingText"
import { Button } from "./Button"
import { HighlightedText } from "./HighlightedText"

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <h1>
            <AnimatedMovingText index={0}><HighlightedText>VNV Solutions</HighlightedText> - <br /></AnimatedMovingText>
            <AnimatedMovingText index={1}>прості та якісні<br /></AnimatedMovingText>
            <AnimatedMovingText index={2}>IT-рішення<br /></AnimatedMovingText>
            <AnimatedMovingText index={3}>для вашого бізнесу<br /></AnimatedMovingText>
          </h1>
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: 'spring', duration: 1 }}
          >
            <a href="#contacts">
              <Button arrow >Замовити</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
