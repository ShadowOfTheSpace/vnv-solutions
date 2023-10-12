import React from 'react'

type SocialButtonProps = {
  children: React.ReactNode,
  isActive?: boolean,
  onClick?: () => void
}

export const SocialButton = ({ children, isActive = false, onClick }: SocialButtonProps) => {
  return (
    <div
      className={`social-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
