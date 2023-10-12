import { motion } from "framer-motion"
import { useState } from "react"
import { useTrend } from "../hooks/useTrend"

import { ReactComponent as HeartsIcon } from "../assets/images/svg/hearts-icon.svg"
import { ReactComponent as FlashIcon } from "../assets/images/svg/flash-icon.svg"
import { ReactComponent as DialogIcon } from "../assets/images/svg/dialog-icon.svg"
import { ReactComponent as CupIcon } from "../assets/images/svg/cup-icon.svg"
import { ReactComponent as CogwheelIcon } from "../assets/images/svg/cogwheel-icon.svg"
import { ReactComponent as ChecklistIcon } from "../assets/images/svg/checklist-icon.svg"
import { ReactComponent as RocketIcon } from "../assets/images/svg/rocket-icon.svg"
import { ReactComponent as DumbbellsIcon } from "../assets/images/svg/dumbbells-icon.svg"
import { ReactComponent as StarsIcon } from '../assets/images/svg/stars-icon.svg'
import { ReactComponent as FlameIcon } from '../assets/images/svg/flame-icon.svg'
import { ReactComponent as MedalIcon } from '../assets/images/svg/medal-icon.svg'

import { ReactComponent as CodeImage } from '../assets/images/svg/code-image.svg'
import { ReactComponent as ClipboardImage } from '../assets/images/svg/clipboard-image.svg'
import { ReactComponent as CartImage } from '../assets/images/svg/cart-image.svg'
import { ReactComponent as GhostImage } from '../assets/images/svg/ghost-image.svg'
import { ReactComponent as CopyImage } from '../assets/images/svg/copy-image.svg'
import { ReactComponent as CogwheelImage } from '../assets/images/svg/cogwheel-image.svg'


import { AnimatedCarousel } from "./AnimatedCarousel"
import { AnimatedListContainer } from "./AnimatedListContainer"
import { AnimatedSectionTitle } from "./AnimatedSectionTitle"
import { Button } from "./Button"
import { ResizablePanel } from "./ResizablePanel"
import { useTranslation, TranslationContextType } from "../hooks/useTranslation"

const services = [
  {
    title: "Software Development",
    benefits: [{
      title: "Fast",
      icon: <FlashIcon />
    },
    {
      title: "Qualitatively",
      icon: <MedalIcon />
    },
    {
      title: "Promising",
      icon: <RocketIcon />
    }],
    icon: <CodeImage />,
    description: "service-description-1"
  },
  {
    title: "Development of a Unique ERP System",
    benefits: [{
      title: "Everyone Matters",
      icon: <HeartsIcon />
    },
    {
      title: "Leadership is Here to Serve",
      icon: <CupIcon />
    },
    {
      title: "Resilient",
      icon: <DumbbellsIcon />
    }],
    icon: <ClipboardImage />,
    description: "service-description-2"
  },
  {
    title: "Online-Store Development",
    benefits: [{
      title: "Комунікація",
      icon: <DialogIcon />
    },
    {
      title: "Efficiency",
      icon: <FlameIcon />
    },
    {
      title: "Quality",
      icon: <MedalIcon />
    }],
    icon: <CartImage />,
    description: "service-description-4"
  },
  {
    title: "Bot Development",
    benefits: [{
      title: "Automation",
      icon: <CogwheelIcon />
    },
    {
      title: "Innovation",
      icon: <StarsIcon />
    },
    {
      title: "Quality",
      icon: <MedalIcon />
    }],
    icon: <GhostImage />,
    description: "service-description-4"
  },
  {
    title: "Website Transferring",
    benefits: [{
      title: "Skills",
      icon: <StarsIcon />
    },
    {
      title: "Result",
      icon: <FlameIcon />
    },
    {
      title: "Experience",
      icon: <RocketIcon />
    }],
    icon: <CopyImage />,
    description: "service-description-5"
  },
  {
    title: "Support and Updates",
    benefits: [{
      title: "Continuous Improvements",
      icon: <CogwheelIcon />
    },
    {
      title: "Expertise",
      icon: <ChecklistIcon />
    },
    {
      title: "Communication",
      icon: <DialogIcon />
    }],
    icon: <CogwheelImage />,
    description: "service-description-6"
  },

]

export const Services = () => {
  const [currentService, setCurrentService] = useState(0)
  let trend = useTrend(currentService)
  const { translate } = useTranslation() as TranslationContextType
  return (
    <section className="services" id="services">
      <AnimatedSectionTitle>{translate("Services")}</AnimatedSectionTitle>
      <div className="service-viewer">
        <ul className="service-buttons">
          {services.map((value, index) =>
            <AnimatedListContainer key={index} index={index}>
              <button
                className={`service-button ${index == currentService ? "active" : ""}`}
                onClick={() => setCurrentService(index)}
              >
                {translate(value.title)}
              </button>
            </AnimatedListContainer>
          )}
        </ul>
        <motion.div
          className="service-window"
          initial={{ y: '30%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ResizablePanel>
            <AnimatedCarousel index={currentService} direction='y' trend={trend}>
              <div className="service-window-content">
                <div className="service-left">
                  <div className="service-benefits">
                    {services[currentService].benefits.map((value, index) =>
                      <div key={index} className="service-benefit">
                        {value.icon}
                        <h3>{translate(value.title)}</h3>
                      </div>
                    )}
                  </div>
                  <p className="service-description">{translate(services[currentService].description)}</p>
                </div>
                <div className="service-right">
                  {services[currentService].icon}
                  <a href="#contacts"><Button>{translate("I want it!")}</Button></a>
                </div>
              </div>
            </AnimatedCarousel>
          </ResizablePanel>
        </motion.div>
      </div>
    </section>
  )
}