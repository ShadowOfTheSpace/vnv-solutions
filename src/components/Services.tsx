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

const services = [
  {
    title: "Розробка ПЗ",
    benefits: [{
      title: "Швидко",
      icon: <FlashIcon />
    },
    {
      title: "Якісно",
      icon: <MedalIcon />
    },
    {
      title: "Перспективно",
      icon: <RocketIcon />
    }],
    icon: <CodeImage />,
    description: "Наше програмне забезпечення спрямоване на вирішення ваших бізнес-проблем і задоволення конкретних бізнес-потреб. Наша досвідчена команда може розробити програмне забезпечення для широкого кола галузей промисловості та застосувань, зокрема сільського господарства, фінансів, охорони здоров’я та логістики тощо. Наша мета — надати високоякісне програмне забезпечення, яке вирішить ваші бізнес-завдання та проблеми, а також оптимізує робочі процеси, щоб допомогти вашому бізнесу розвиватися."
  },
  {
    title: "Створення ERP системи",
    benefits: [{
      title: "Важливий кожен",
      icon: <HeartsIcon />
    },
    {
      title: "Лідерство в галузі",
      icon: <CupIcon />
    },
    {
      title: "Гнучкість",
      icon: <DumbbellsIcon />
    }],
    icon: <ClipboardImage />,
    description: "Розробка індивідуальних систем ERP (Enterprise Resource Planning) - системи, які оптимізують ваші бізнес-операції, покращують зв’язок між відділами та автоматизують процеси. Наші ERP-рішення адаптовані до унікальних потреб вашого бізнесу та можуть бути інтегровані з іншими програмними рішеннями для створення комплексної системи управління бізнесом."
  },
  {
    title: "Створення інтернет-магазину",
    benefits: [{
      title: "Комунікація",
      icon: <DialogIcon />
    },
    {
      title: "Ефективність",
      icon: <FlameIcon />
    },
    {
      title: "Якість",
      icon: <MedalIcon />
    }],
    icon: <CartImage />,
    description: "Ми пропонуємо послуги з розробки інтернет-магазину для клієнтів, які хочуть створити онлайн-версію свого бізнесу. Наша команда може розробити та налаштувати веб-сайт для електронної комерції, який буде простим у використанні та забезпечить безперебійну взаємодію з користувачем. Наша мета — допомогти вам збільшити онлайн-продажі, розширити клієнтську базу та покращити загальну ефективність бізнесу. Глибоке розуміння та великий досвід дозволяє нам створювати найбільш конверсійні інтернет-магазини для вас."
  },
  {
    title: "Розробка ботів",
    benefits: [{
      title: "Автоматизація",
      icon: <CogwheelIcon />
    },
    {
      title: "Інновації",
      icon: <StarsIcon />
    },
    {
      title: "Якість",
      icon: <MedalIcon />
    }],
    icon: <GhostImage />,
    description: "Ми спеціалізуємося на розробці індивідуальних ботів, які можуть автоматизувати завдання та підвищити ефективність. Ми можемо створювати ботів для широкого спектру програм, включаючи обслуговування клієнтів, соціальні мережі та продажі тощо. Наша мета — надати вам передову технологію, яка покращує продуктивність і покращує взаємодію з клієнтами."
  },
  {
    title: "Перенесення сайтів",
    benefits: [{
      title: "Вміння",
      icon: <StarsIcon />
    },
    {
      title: "Результативність",
      icon: <FlameIcon />
    },
    {
      title: "В ногу з часом",
      icon: <RocketIcon />
    }],
    icon: <CopyImage />,
    description: "Ми пропонуємо послуги перенесення веб-сайту для клієнтів, які хочуть перенести свій веб-сайт з однієї платформи на іншу. Наша команда розробників гарантує, що перехід буде плавним і безперебійним, а веб-сайт залишатиметься повністю функціональним протягом усього процесу. Наша мета полягає в тому, щоб звести до мінімуму будь-які збої в онлайн бізнесі наших клієнтів і гарантувати що їхній веб-сайт продовжить відповідати їхнім потребам."
  },
  {
    title: "Підтримка та оновлення",
    benefits: [{
      title: "Постійні покращення",
      icon: <CogwheelIcon />
    },
    {
      title: "Контроль",
      icon: <ChecklistIcon />
    },
    {
      title: "Спілкування",
      icon: <DialogIcon />
    }],
    icon: <CogwheelImage />,
    description: "Ми спеціалізуємося на розробці індивідуальних ботів, які можуть автоматизувати завдання та підвищити ефективність. Ми можемо створювати ботів для широкого спектру програм, включаючи обслуговування клієнтів, соціальні мережі та продажі тощо. Наша мета — надати вам передову технологію, яка покращує продуктивність і покращує взаємодію з клієнтами."
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
          <ResizablePanel>
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
                  {services[currentService].icon}
                  <a href="#contacts"><Button>Хочу!</Button></a>
                </div>
              </div>
            </AnimatedCarousel>
          </ResizablePanel>
        </motion.div>
      </div>
    </section>
  )
}