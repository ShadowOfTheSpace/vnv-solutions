import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z as zod } from 'zod'
import { ReactComponent as ExitIcon } from '../assets/images/svg/exit-icon.svg'
import { Button } from './Button'
import { ErrorMessage } from './ErrorMessage'
import { HighlightedText } from './HighlightedText'
import { useEffect, useState } from 'react'
import { ResizablePanel } from './ResizablePanel'

const emailSchema = zod.object({
  email: zod.string().email("NonEmail")
})

type Email = zod.infer<typeof emailSchema>

export const LeadMagnet = () => {
  const [leadMagnetIsVisible, setLeadMagnetVisibility] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLeadMagnetVisibility(true)
    }, Math.random() * 8000 + 2000);
  }, [])
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({ resolver: zodResolver(emailSchema) })

  const submitEmail = (email: Email) => {
    console.log({ ...email });
    setSuccess(true)
  }

  return (
    <AnimatePresence initial={false}>
      {leadMagnetIsVisible &&
        <motion.div
          className='lead-magnet-container'
          initial={{ opacity: 0, x: '150%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '150%' }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <ResizablePanel>
            <div className="lead-magnet-content">
              <div className="lead-magnet-header">
                {!isSuccess ?
                  <h4>Бажаєте отримати <HighlightedText>безкоштовну консультацію</HighlightedText>?</h4> :
                  <h4>Успішно</h4>}
                <div className="exit-button">
                  <ExitIcon onClick={() => setLeadMagnetVisibility(false)} />
                </div>
              </div>
              {!isSuccess ? <>
                <form className='lead-magnet-form' onSubmit={handleSubmit(submitEmail)}>
                  <input
                    type='text'
                    placeholder="Введіть ваш email..."
                    autoComplete='off'
                    {...register("email")}
                  />
                  <ErrorMessage>{errors.email ? errors.email.message : ""}</ErrorMessage>
                  <Button arrow type='submit'>Отримати</Button>
                </form>
              </> :
                <div className='success-content'>
                  <h4>Безкоштовна консультація закріплена за Вашою поштою, зв'яжіться з нами якнайшвидше!</h4>
                </div>}
            </div>
          </ResizablePanel>
        </motion.div>}
    </AnimatePresence>
  )
}
