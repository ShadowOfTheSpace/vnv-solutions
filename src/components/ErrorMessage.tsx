import React from 'react'
import { useTranslation, TranslationContextType } from '../hooks/useTranslation'

type ErrorMessageProps = {
  children: React.ReactNode
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  const { translate } = useTranslation() as TranslationContextType
  return (
    <p className='error-message'>{translate(children as string)}</p>
  )
}
