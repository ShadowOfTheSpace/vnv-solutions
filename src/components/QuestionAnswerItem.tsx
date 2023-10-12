import { useState } from "react"
import { ReactComponent as DownArrow } from "../assets/images/svg/down-arrow.svg"
import { AnimatedListContainer } from "./AnimatedListContainer"
import { ResizablePanel } from "./ResizablePanel"

type QuestionAnswerItemProps = {
  question: string
  answer: string
  index: number
}

export const QuestionAnswerItem = ({ question, answer, index }: QuestionAnswerItemProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <AnimatedListContainer index={index}>
      <div className="question-answer-item" onClick={() => setOpen(!isOpen)}>
        <div className="question-answer-item-header">
          <h3>{question}</h3>
          <DownArrow className={`question-answer-item-arrow ${isOpen ? "open" : ""}`} />
        </div>
        {<ResizablePanel>
            {isOpen && <p className="question-answer-item-text">
              {answer}
            </p>}
          </ResizablePanel>}
      </div>
    </AnimatedListContainer>
  )
}
