import { ReactComponent as RightArrow } from '../assets/images/svg/right-arrow.svg'

type ButtonProps = {
  arrow?: boolean
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
}

export const Button = ({ arrow, children, onClick, type }: ButtonProps) => {
  return (
    <button
      className={`button ${arrow ? "button-with-arrow" : ""}`}
      onClick={onClick}
      type={type}
    >
      {children}
      {arrow && <RightArrow />}
    </button>
  )
}
