import { ReactComponent as TelegramIcon } from '../images/svg/telegram-icon.svg'
import { AnimatedSectionTitle } from "./AnimatedSectionTitle"
import { WhyUsCard } from "./WhyUsCard"
const whyUsCards = [
  {
    title: "Назва",
    icon: <TelegramIcon />,
    description: "Do eu consequat ipsum laboris sunt culpa aliqua esse cupidatat laborum id fugiat. Quis labore exercitation voluptate veniam non. Cupidatat voluptate laboris id dolore ex. Incididunt laboris officia fugiat laboris. Occaecat proident minim dolore esse occaecat quis est. Enim sunt culpa sit aute id quis commodo magna consectetur.",
  },
  {
    title: "Назва",
    icon: <TelegramIcon />,
    description: "Occaecat esse cillum ex minim amet occaecat mollit cillum. Consequat adipisicing pariatur veniam consectetur irure ipsum quis. Ullamco veniam cillum commodo exercitation consectetur minim sit Lorem ullamco sunt incididunt dolore officia esse.",
  },
  {
    title: "Назва",
    icon: <TelegramIcon />,
    description: "Pariatur reprehenderit do non incididunt et in tempor ut. Cupidatat sit fugiat magna enim pariatur eiusmod. Incididunt ullamco occaecat duis culpa do veniam do minim aliqua exercitation non. Lorem laboris eu non dolore elit nisi mollit amet dolore ut aliqua nulla. Minim laborum in adipisicing Lorem aute do reprehenderit consequat excepteur aliquip.",
  }, {
    title: "Назва",
    icon: <TelegramIcon />,
    description: "Aliquip laboris velit magna laboris do voluptate est enim ea. Elit reprehenderit ex exercitation amet tempor nulla exercitation ea anim et mollit. Reprehenderit minim veniam dolor esse est cillum.",
  },
  {
    title: "Назва",
    icon: <TelegramIcon />,
    description: "Enim culpa amet proident sunt cillum exercitation ut et. Quis ea irure dolor quis enim anim fugiat commodo qui id nisi mollit. Minim et id incididunt et ut fugiat reprehenderit velit nisi anim officia. Ex reprehenderit veniam consectetur ea aliquip et irure cupidatat excepteur duis anim aliquip sunt aute.",
  },
  {
    title: "Назва",
    icon: <TelegramIcon />,
    description: "Et aute tempor non laborum incididunt quis culpa veniam. Ad cillum qui dolore ullamco qui irure proident aliquip nostrud labore minim voluptate eu et. Reprehenderit sint excepteur consectetur tempor."
  }
]



export const WhyUs = () => {

  return (
    <section className="why-us">
      <AnimatedSectionTitle>Чому ми?</AnimatedSectionTitle>
      <div className="why-us-cards">
        {whyUsCards.map((whyUsCard, index) => <WhyUsCard key={index} index={index} title={whyUsCard.title} icon={whyUsCard.icon} description={whyUsCard.description} />)}
      </div>
    </section>
  )
}