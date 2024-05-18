import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import axios from 'axios'
import { useForm } from 'react-hook-form'

interface SendEmailResetProps {
  handleSubmitForm: (email: string) => void
}

const SendEmailReset = ({ handleSubmitForm }: SendEmailResetProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    axios
      .post(`${process.env.BASE_DOMAIN}/user/lost-password?_format=hal_json`, {
        mail: data.email,
      })
      .then(() => {
        handleSubmitForm(data.email)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='email'
          label='Correo electrónico'
          placeholder='Correo electrónico...'
          hasError={errors?.email ? true : false}
          {...register('email', {
            required: 'El correo es requerido.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'El correo no es válido.',
            },
          })}
        />
        <Button title='Enviar' variant='primary' />
      </form>
    </div>
  )
}

export default SendEmailReset
