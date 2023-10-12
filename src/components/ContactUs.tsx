import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { z as zod } from 'zod'
import { ReactComponent as EmailIcon } from '../assets/images/svg/email-icon.svg'
import { ReactComponent as TelegramIcon } from '../assets/images/svg/telegram-icon.svg'
import { ReactComponent as ViberIcon } from '../assets/images/svg/viber-icon.svg'
import { ReactComponent as WhatsAppIcon } from '../assets/images/svg/whatsapp-icon.svg'
import { AnimatedSectionTitle } from './AnimatedSectionTitle'
import { Button } from './Button'
import { ErrorMessage } from './ErrorMessage'
import { SocialButton } from './SocialButton'
import { useTranslation, TranslationContextType } from '../hooks/useTranslation'

const contactMethods = [
  {
    title: 'Email',
    icon: <EmailIcon />,
    type: 'email',
    placeholder: 'example@example.com',
    mask: ''
  },
  {
    title: 'Telegram',
    icon: <TelegramIcon />,
    type: 'text',
    placeholder: '@nickname',
    mask: '@' + '*'.repeat(32)
  },
  {
    title: 'Viber',
    icon: <ViberIcon />,
    type: 'number',
    placeholder: '+380 (__) __-__-___',
    mask: '+380 (99) 999-99-99'
  },
  {
    title: 'WhatsApp',
    icon: <WhatsAppIcon />,
    type: 'number',
    placeholder: '+380 (__) __-__-___',
    mask: '+380 (99) 999-99-99'
  }
]

export const ContactUs = () => {
  const { translate } = useTranslation() as TranslationContextType

  const [currentContactMethod, setCurrentContactMethod] = useState(0)

  useEffect(() => {
    resetField('contacts')
  }, [currentContactMethod])

  const currentContactMethodTitle = contactMethods[currentContactMethod].title
  const messageSchema = zod.object({
    name: zod.string().min(2, "TooShortName").max(30, "TooLongName"),
    contacts:
      currentContactMethodTitle === 'Email' ?
        zod.string().email("NonEmail") :
        currentContactMethodTitle === 'Telegram' ?
          zod.string().startsWith("@", "NonTelegramNickname") :
          zod.string().length(19, "NonPhoneNumber").refine((value) => !value.includes('_'), "NonPhoneNumber"),
    messageText: zod.string().optional()
  })

  type Message = zod.infer<typeof messageSchema>

  const submitMessage = (message: Message) => {
    console.log({
      ...message,
      contactMethod: contactMethods[currentContactMethod].title
    });
  }

  const {
    register,
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<Message>({ resolver: zodResolver(messageSchema) })

  return (
    <section className='contact-us' id='contacts'>
      <AnimatedSectionTitle>{translate("Contact us")}</AnimatedSectionTitle>
      <motion.div
        className='contact-us-form-container'
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true, }}
      >
        <h3>{translate("Select a communication method")}</h3>
        <ul className='contacts-methods-list'>
          {contactMethods.map((contactMethod, index) =>
            <SocialButton
              key={index}
              isActive={currentContactMethod == index}
              onClick={() => setCurrentContactMethod(index)}
            >{contactMethod.icon}
            </SocialButton>
          )}
        </ul>
        <form className='contact-us-form' onSubmit={handleSubmit(submitMessage)}>
          <input
            type='text'
            placeholder={translate("Name")}
            autoComplete='off'
            {...register("name")}
          />
          <ErrorMessage>{errors.name ? errors.name.message : ""}</ErrorMessage>
          <Controller
            name='contacts'
            defaultValue={''}
            control={control}
            render={({ field: { ref, ...rest } }) =>
              <InputMask
                mask={contactMethods[currentContactMethod].mask}
                maskChar={contactMethods[currentContactMethod].title === 'Telegram' ? null : '_'}
                placeholder={contactMethods[currentContactMethod].placeholder}
                autoComplete='off'
                {...rest}
              />
            }
          />
          <ErrorMessage>{errors.contacts ? errors.contacts.message : ""}</ErrorMessage>
          <textarea
            placeholder={translate("Additional information")}
            {...register("messageText")}
          />
          <Button arrow type='submit'>{translate("Send")}</Button>
        </form>
      </motion.div>
    </section>
  )
}
