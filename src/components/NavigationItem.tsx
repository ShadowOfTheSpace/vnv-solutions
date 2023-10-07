import React from 'react'

type NavigationItemProps = {
  children: React.ReactNode
}

export const NavigationItem = ({ children }: NavigationItemProps) => {
  return (
    <li className='navigation-element'>
      <a>{children}</a>
    </li>
  )
}
