import getProfile from '@actions/getProfile'
import postLogin from '@actions/postLogin'
import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { GetProfileModel } from '@models/getProfile.model'
import { PostLoginModel } from '@models/postLogin.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import encryptCryptoData from '@utils/encryptCryptoData'
import { getCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const LoginForm = () => {
  const router = useRouter()
  /**
   * State to know if the data is being sent to the backend
   */
  const [sendingData, setSendingData] = useState(false)
  /**
   * Form hook to handle the form data
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  /**
   * Function to send the data to the backend
   * using postLogin to get the access token
   * and getProfile to get the user profile and role
   * @param data - Data to send to the backend
   */
  const onSubmit: SubmitHandler<any> = async (data) => {
    const dataToSend: PostLoginModel = {
      name: data.email,
      pass: data.password,
    }
    // setSendingData(true)
    await postLogin(dataToSend)
      .then(async (res) => {
        if (res.data?.csrf_token) {
          getProfile(res.data.current_user.uid, res.data.csrf_token)
            .then(async (resProfile: GetProfileModel) => {
              res.data.current_user.role = arrayDestructuring(
                resProfile.field_tipo_de_usuario,
                ''
              )?.value
              const stringifiedData = JSON.stringify(res.data)
              console.log('🚀 ~ .then ~ stringifiedData:', stringifiedData)
              const securedData = await encryptCryptoData(stringifiedData)
              setCookie('user-data', securedData)
              // router.replace('/usuario', undefined, { scroll: false })
            })
            .catch((err: any) => {
              console.log('🚀 ~ .then ~ err:', err)
              console.error('Error al iniciar sesión el usuario')
              setSendingData(false)
            })
        }
      })
      .catch(async (err) => {
        console.error('Error al iniciar sesión el usuario')
        setSendingData(false)
      })
  }
  return (
    <div
      style={{
        margin: '50px auto',
        textAlign: 'center',
        width: '50%',
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Input
          type='text'
          placeholder='Correo...'
          label='Correo'
          errorMessage={errors?.email?.message?.toString()}
          {...register('email', {
            required: 'El correo es requerido.',
            // pattern: {
            //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            //   message: 'El correo no es válido.',
            // },
          })}
        />
        <Input
          type='password'
          placeholder='Contraseña...'
          label='Contraseña'
          errorMessage={errors?.password?.message?.toString()}
          {...register('password', { required: 'La contraseña es requerida.' })}
        />
        <Button
          title='Iniciar sesión'
          variant='secondary'
          disabled={sendingData}
        />
      </form>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link href='/registro' passHref scroll={false}>
          <a>¿Aún no estas registrado? ¡Regístrate ahora!</a>
        </Link>
        <Link href='/recuperar-contrasena' passHref scroll={false}>
          <a>¿Olvidaste tu contraseña?</a>
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
