type LanguageItemProps = {
  children: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  isActive: boolean
}

export const LanguageItem = ({ children, onClick, isActive }: LanguageItemProps) => {
  return (
    <div
      className={`navigation-element ${isActive ? 'selected-language' : ''}`}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </div>
  )
}
