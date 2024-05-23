import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface SendEmailResetProps {
  handleSubmitForm: (email: string) => void
}

const SendEmailReset = ({ handleSubmitForm }: SendEmailResetProps) => {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    setSubmitting(true)
    axios
      .post(`${process.env.BASE_DOMAIN}/user/lost-password?_format=hal_json`, {
        mail: data.email,
      })
      .then(() => {
        setSubmitting(false)
        handleSubmitForm(data.email)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className='form__fieldset'>
        <Input
          type='email'
          label='Correo electrónico'
          placeholder='Correo electrónico...'
          hasError={errors?.email ? true : false}
          errorMessage={errors.email?.message?.toString()}
          {...register('email', {
            required:
              '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
            pattern: {
              value: /^[^\s@]+@[a-zA-Z]+\.[a-zA-Z]+$/,
              message:
                '<p>El correo diligenciado <span>no tiene el formato</span> correcto</p>',
            },
          })}
        />
        <div className='form__btn'>
          <Button title='Enviar' variant='primary' disabled={submitting} />
        </div>
      </div>
    </form>
  )
}

export default SendEmailReset
