import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import axios from 'axios'
import { useForm } from 'react-hook-form'

interface ResetPasswordProps {
  email: string
  handleSubmitForm: () => void
}

const ResetPassword = ({ email, handleSubmitForm }: ResetPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    axios
      .post(`${process.env.BASE_DOMAIN}/user/lost-password?_format=hal_json`, {
        name: email,
        temp_pass: data.temporal,
        new_pass: data.password,
      })
      .then(() => {
        handleSubmitForm()
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='Contraseña temporal'
          placeholder='Contraseña temporal...'
          hasError={errors?.temporal ? true : false}
          {...register('temporal', {
            required: 'La clave es requerida.',
          })}
        />
        <Input
          type='text'
          label='Nueva contraseña'
          placeholder='Nueva contraseña...'
          hasError={errors?.password ? true : false}
          {...register('password', {
            required: 'La clave es requerida.',
          })}
        />
        <Button title='Enviar' variant='primary' />
      </form>
    </div>
  )
}

export default ResetPassword
