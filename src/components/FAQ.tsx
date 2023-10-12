import { AnimatedSectionTitle } from "./AnimatedSectionTitle"
import { QuestionAnswerItem } from "./QuestionAnswerItem"

const QAList = [
  {
    question: "Dolor in veniam irure elit exercitation quis et anim nostrud.",
    answer: "Do ipsum Lorem adipisicing consequat veniam excepteur ea dolor sunt aute consectetur commodo excepteur. Ad consectetur exercitation ex consequat id minim consequat labore. Amet aute cillum culpa cillum ad."
  },
  {
    question: "Duis qui sunt occaecat nisi sit et commodo.",
    answer: "Ea Lorem aliqua id mollit pariatur est. Aliquip culpa ex excepteur minim magna nisi. Elit excepteur irure minim voluptate proident consectetur. Nulla ad reprehenderit nostrud exercitation excepteur labore. Cupidatat adipisicing elit pariatur anim sint ut ut tempor aute."
  },
  {
    question: "Ullamco laborum veniam sunt reprehenderit sunt.",
    answer: "Veniam eu nisi voluptate nisi est mollit eiusmod commodo fugiat esse consequat. Ex consequat dolor nostrud anim veniam pariatur et exercitation qui labore reprehenderit commodo. Duis commodo officia et magna pariatur dolore laborum sit ad esse minim exercitation proident. Officia velit qui ad exercitation cupidatat."
  },
  {
    question: "Est et enim qui reprehenderit incididunt ad ipsum id officia ex do do.",
    answer: "Sint mollit adipisicing exercitation Lorem irure. Non id dolore do labore reprehenderit consequat nulla enim laborum adipisicing ex est. Magna veniam sit commodo anim do cillum reprehenderit magna. Lorem deserunt cupidatat voluptate labore labore non culpa culpa. Ad et magna Lorem anim nostrud do aliquip commodo cupidatat ad laborum labore."
  }
]

export const FAQ = () => {
  return (
    <section className="faq">
      <AnimatedSectionTitle duration={0.5}>FAQ</AnimatedSectionTitle>
      <ul className="question-answer-list">
        {QAList.map((qa, index) => <QuestionAnswerItem key={index} index={index} question={qa.question} answer={qa.answer} />)}
      </ul>
    </section>
  )
}
