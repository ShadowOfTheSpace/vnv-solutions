import React from 'react'
type LanguageItemProps = {
  children: string
}

export const LanguageItem = ({ children }: LanguageItemProps) => {
  return (
    <div className='navigation-element'>{children.toUpperCase()}</div>
  )
}
