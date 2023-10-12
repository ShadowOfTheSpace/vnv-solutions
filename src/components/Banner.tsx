import { motion } from "framer-motion"
import { AnimatedMovingText } from "./AnimatedMovingText"
import { Button } from "./Button"
import { HighlightedText } from "./HighlightedText"
import { useTranslation, TranslationContextType } from "../hooks/useTranslation"

export const Banner = () => {
  const {translate } = useTranslation() as TranslationContextType
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <h1>
            <AnimatedMovingText index={0}><HighlightedText>{translate("VNV Solutions")}</HighlightedText> - <br /></AnimatedMovingText>
            <AnimatedMovingText index={1}>{translate("simple and quality")}<br /></AnimatedMovingText>
            <AnimatedMovingText index={2}>{translate("IT solutions")}<br /></AnimatedMovingText>
            <AnimatedMovingText index={3}>{translate("for your business")}<br /></AnimatedMovingText>
          </h1>
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, type: 'spring', duration: 1 }}
          >
            <a href="#contacts">
              <Button arrow >{translate("order")}</Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
