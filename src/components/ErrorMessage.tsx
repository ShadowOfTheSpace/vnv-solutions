import React from 'react'

type ErrorMessageProps = {
  children: React.ReactNode
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className='error-message'>{children}</p>
  )
}
