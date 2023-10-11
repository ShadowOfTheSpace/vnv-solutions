type HighlightedTextProps = {
  children: string;
}

export const HighlightedText = ({ children }: HighlightedTextProps) => {
  return (
    <span className="highlighted">{children}</span>
  )
}
