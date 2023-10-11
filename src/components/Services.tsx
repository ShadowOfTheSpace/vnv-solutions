import { motion } from "framer-motion"
import { useState } from "react"
import { useTrend } from "../hooks/useTrend"
import { ReactComponent as TelegramIcon } from "../images/svg/telegram-icon.svg"
import { AnimatedCarousel } from "./AnimatedCarousel"
import { AnimatedListContainer } from "./AnimatedListContainer"
import { AnimatedSectionTitle } from "./AnimatedSectionTitle"
import { Button } from "./Button"
import { ResizeblePanel } from "./ResizeblePanel"

const services = [
  {
    title: "Розробка ПЗ",
    benefits: [{
      title: "Швидко",
      icon: <TelegramIcon />
    },
    {
      title: "Якісно",
      icon: <TelegramIcon />
    },
    {
      title: "Перспективно",
      icon: <TelegramIcon />
    }],
    description: "0Velit reprehenderit nisi voluptate ut quis eiusmod magna nulla eiusmod dolore. Quis ullamco est fugiat incididunt incididunt. Enim officia excepteur consequat proident. Sit ipsum anim ad ut velit est esse irure Lorem proident laborum culpa irure. Exercitation do magna pariatur consectetur id amet consectetur qui veniam. Incididunt magna elit labore aliquip ipsum ea irure est et reprehenderit deserunt voluptate. Reprehenderit dolor dolore exercitation irure enim fugiat consequat incididunt excepteur excepteur et."
  },
  {
    title: "Створення ERP системи",
    benefits: [{
      title: "Швидко",
      icon: <TelegramIcon />
    },
    {
      title: "Якісно",
      icon: <TelegramIcon />
    },
    {
      title: "Перспективно",
      icon: <TelegramIcon />
    }],
    description: "Nostrud cillum deserunt ullamco fugiat dolor excepteur aliquip ex elit. Mollit voluptate cupidatat irure aute. Reprehenderit pariatur magna reprehenderit sunt pariatur consequat aute Lorem. Dolore eu ullamco id eiusmod esse sint consectetur ea."
  },
  {
    title: "Створення інтернет-магазину",
    benefits: [{
      title: "Швидко",
      icon: <TelegramIcon />
    },
    {
      title: "Якісно",
      icon: <TelegramIcon />
    },
    {
      title: "Перспективно",
      icon: <TelegramIcon />
    }],
    description: "Qui non excepteur Lorem dolore esse tempor do laboris veniam enim commodo in exercitation. Excepteur irure officia est sunt occaecat in incididunt nulla anim nisi cillum laboris. Pariatur fugiat eiusmod aute do ullamco deserunt culpa Lorem tempor velit elit deserunt mollit irure."
  },
  {
    title: "Розробка ботів",
    benefits: [{
      title: "Швидко",
      icon: <TelegramIcon />
    },
    {
      title: "Якісно",
      icon: <TelegramIcon />
    },
    {
      title: "Перспективно",
      icon: <TelegramIcon />
    }],
    description: "Id occaecat reprehenderit ipsum aliqua fugiat cupidatat ex fugiat magna incididunt. Reprehenderit sit consectetur enim culpa enim veniam laborum exercitation ipsum eiusmod laboris anim. Do irure ea adipisicing ipsum cillum. Fugiat ea cillum proident in sunt consectetur ad esse incididunt labore. Ea dolore officia dolor sint commodo officia sint est reprehenderit magna. Duis enim sunt ex et deserunt tempor qui quis occaecat laborum. Eiusmod in enim nulla sit excepteur."
  },
  {
    title: "Перенесення сайтів",
    benefits: [{
      title: "Швидко",
      icon: <TelegramIcon />
    },
    {
      title: "Якісно",
      icon: <TelegramIcon />
    },
    {
      title: "Перспективно",
      icon: <TelegramIcon />
    }],
    description: "Incididunt anim deserunt elit voluptate deserunt voluptate dolore enim irure non laborum. Dolore ut adipisicing culpa occaecat. Cupidatat occaecat consequat nulla do eiusmod non in duis proident quis."
  },
  {
    title: "Підтримка та оновлення",
    benefits: [{
      title: "Швидко",
      icon: <TelegramIcon />
    },
    {
      title: "Якісно",
      icon: <TelegramIcon />
    },
    {
      title: "Перспективно",
      icon: <TelegramIcon />
    }],
    description: "Sunt labore quis enim exercitation culpa velit et adipisicing fugiat. Ullamco labore aliqua sit fugiat laboris occaecat eiusmod officia culpa ut. Ut incididunt Lorem officia ea ex est irure minim. In consequat fugiat officia do qui quis sunt excepteur cupidatat fugiat cupidatat dolor. Nisi esse laboris eu eu adipisicing minim amet fugiat aliqua sit."
  },

]

export const Services = () => {
  const [currentService, setCurrentService] = useState(0)
  let trend = useTrend(currentService)

  return (
    <section className="services" id="services">
      <AnimatedSectionTitle>Послуги</AnimatedSectionTitle>
      <div className="service-viewer">
        <ul className="service-buttons">
          {services.map((value, index) =>
            <AnimatedListContainer key={index} index={index}>
              <button
                className={`service-button ${index == currentService ? "active" : ""}`}
                onClick={() => setCurrentService(index)}
              >
                {value.title}
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
          <ResizeblePanel>
            <AnimatedCarousel index={currentService} direction='y' trend={trend}>
              <div className="service-window-content">
                <div className="service-left">
                  <div className="service-benefits">
                    {services[currentService].benefits.map((value, index) =>
                      <div key={index} className="service-benefit">
                        {value.icon}
                        {value.title}
                      </div>
                    )}
                  </div>
                  <p className="service-description">{services[currentService].description}</p>
                </div>
                <div className="service-right">
                  <Button>Хочу!</Button>
                </div>
              </div>
            </AnimatedCarousel>
          </ResizeblePanel>
        </motion.div>
      </div>
    </section>
  )
}