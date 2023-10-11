import React from 'react'

type NavigationItemProps = {
  children: React.ReactNode,
  href: string
}

export const NavigationItem = ({ children, href }: NavigationItemProps) => {
  return (
    <li className='navigation-element'>
      <a href={href}>{children}</a>
    </li>
  )
}
