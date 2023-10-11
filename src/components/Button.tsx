import { ReactComponent as RightArrow } from '../images/svg/right-arrow.svg'

type ButtonProps = {
  arrow?: boolean
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ arrow, children, onClick}: ButtonProps) => {
  return (
    <button
      className={`button ${arrow ? "button-with-arrow" : ""}`}
      onClick={onClick}
    >
      {children}
      {arrow && <RightArrow />}
    </button>
  )
}
