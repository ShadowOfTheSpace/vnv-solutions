import { AnimatedSectionTitle } from "./AnimatedSectionTitle"
import { QuestionAnswerItem } from "./QuestionAnswerItem"

const QAList = [
  {
    question: "Dolor in veniam irure elit exercitation quis et anim nostrud.",
    answer: "Do ipsum Lorem adipisicing consequat veniam excepteur ea dolor sunt aute consectetur commodo excepteur. Ad consectetur exercitation ex consequat id minim consequat labore. Amet aute cillum culpa cillum ad."
  },
  {
    question: "Dolor in veniam irure elit exercitation quis et anim nostrud.",
    answer: "Do ipsum Lorem adipisicing consequat veniam excepteur ea dolor sunt aute consectetur commodo excepteur. Ad consectetur exercitation ex consequat id minim consequat labore. Amet aute cillum culpa cillum ad."
  },
  {
    question: "Dolor in veniam irure elit exercitation quis et anim nostrud.",
    answer: "Do ipsum Lorem adipisicing consequat veniam excepteur ea dolor sunt aute consectetur commodo excepteur. Ad consectetur exercitation ex consequat id minim consequat labore. Amet aute cillum culpa cillum ad."
  },
  {
    question: "Dolor in veniam irure elit exercitation quis et anim nostrud.",
    answer: "Do ipsum Lorem adipisicing consequat veniam excepteur ea dolor sunt aute consectetur commodo excepteur. Ad consectetur exercitation ex consequat id minim consequat labore. Amet aute cillum culpa cillum ad."
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
