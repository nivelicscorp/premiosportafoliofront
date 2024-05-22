import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ResetPasswordProps {
  email: string
  handleSubmitForm: () => void
}

const ResetPassword = ({ email, handleSubmitForm }: ResetPasswordProps) => {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    setSubmitting(true)
    axios
      .post(
        `${process.env.BASE_DOMAIN}/user/lost-password-reset?_format=hal_json`,
        {
          name: email,
          temp_pass: data.temporal,
          new_pass: data.password,
        }
      )
      .then(() => {
        setSubmitting(false)
        handleSubmitForm()
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
      >
        <Input
          type='text'
          label='Contraseña temporal'
          placeholder='Contraseña temporal...'
          hasError={errors?.temporal ? true : false}
          errorMessage={errors?.temporal?.message?.toString()}
          {...register('temporal', {
            required:
              '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
          })}
        />
        <Input
          type='password'
          label='Nueva contraseña'
          placeholder='Nueva contraseña...'
          hasError={errors?.password ? true : false}
          errorMessage={errors?.password?.message?.toString()}
          {...register('password', {
            required:
              '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                '<p>La contraseña no cumple con los requisitos</p> <p>*Debe contener un caracter <span>numérico</span>, un caracter <span>alfabético</span> y un caracter <span>especial</span> con un mínimo de <span>8 caracteres</span> en total</p>',
            },
          })}
        />
        <Button title='Enviar' variant='primary' disabled={submitting} />
      </form>
    </div>
  )
}

export default ResetPassword
