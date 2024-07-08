import getProfile from '@actions/getProfile'
import postLogin from '@actions/postLogin'
import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { GetProfileModel } from '@models/getProfile.model'
import { PostLoginModel } from '@models/postLogin.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import decryptCryptoData from '@utils/decryptCryptoData'
import encryptCryptoData from '@utils/encryptCryptoData'
import { getCookie, setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const LoginForm = () => {
  const router = useRouter()
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      if (userDataParsed?.csrf_token) {
        router.replace('/usuario', undefined, { scroll: false })
      }
    }
    decypherData()
  }, [])
  /**
   * State to know if the data is being sent to the backend
   */
  const [sendingData, setSendingData] = useState(false)
  /**
   * Form hook to handle the form data
   */
  const {
    register,
    setError,
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
    setSendingData(true)
    await postLogin(dataToSend)
      .then(async (res) => {
        if (res.data?.csrf_token) {
          getProfile(res.data.current_user.uid, res.data.csrf_token)
            .then(async (resProfile: GetProfileModel) => {
              if (!resProfile?.field_tipo_de_usuario) {
                setSendingData(false)
                return
              }
              res.data.current_user.role = arrayDestructuring(
                resProfile.field_tipo_de_usuario,
                ''
              )?.value
              res.data.current_user.name = arrayDestructuring(
                resProfile.field_nombre,
                ''
              )?.value
              res.data.current_user.email = arrayDestructuring(
                resProfile.mail,
                ''
              )?.value
              res.data.current_user.phone = arrayDestructuring(
                resProfile.field_numero_de_telefono,
                ''
              )?.value
              const stringifiedData = JSON.stringify(res.data)
              const securedData = await encryptCryptoData(stringifiedData)
              setCookie('user-data', securedData)
              router.replace('/usuario', undefined, { scroll: false })
            })
            .catch((err: any) => {
              console.error('Error al iniciar sesión el usuario')
              setSendingData(false)
            })
        }
      })
      .catch(async (err) => {
        console.error('Error al iniciar sesión el usuario')
        setError('password', {
          type: 'manual',
          message: 'El correo y la contraseña no coinciden.',
        })
        setSendingData(false)
      })
  }
  return (
    <section className={'form-content'}>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <fieldset className={'form__fieldset'}>
          <div className='form__top'>
            <h1 className='form__top__title'> Bienvenido de nuevo </h1>
            <div className='form__top__img'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='66'
                height='66'
                viewBox='0 0 66 66'
              >
                <defs>
                  <clipPath id='clip-path'>
                    <rect
                      id='Rectángulo_64692'
                      data-name='Rectángulo 64692'
                      width='24'
                      height='24'
                      transform='translate(-0.377 0)'
                      fill='#fff'
                      stroke='#707070'
                      stroke-width='1'
                    />
                  </clipPath>
                </defs>
                <g
                  id='Grupo_112056'
                  data-name='Grupo 112056'
                  transform='translate(0.377 0)'
                >
                  <g
                    id='Icon_-_person_-_user'
                    data-name='Icon - person - user'
                    transform='translate(14.148 14)'
                  >
                    <g id='Grupo_108120' data-name='Grupo 108120'>
                      <path
                        id='Trazado_391984'
                        data-name='Trazado 391984'
                        d='M18.923,0A18.923,18.923,0,1,1,0,18.923,18.923,18.923,0,0,1,18.923,0Z'
                        fill='#31abaa'
                      />
                      <g
                        id='Enmascarar_grupo_62127'
                        data-name='Enmascarar grupo 62127'
                        transform='translate(6.852 7)'
                        clipPath='url(#clip-path)'
                      >
                        <path
                          id='Icon_awesome-user-alt'
                          data-name='Icon awesome-user-alt'
                          d='M9.694,10.905A5.453,5.453,0,1,0,4.241,5.453,5.454,5.454,0,0,0,9.694,10.905Zm4.847,1.212H12.454a6.592,6.592,0,0,1-5.521,0H4.847A4.846,4.846,0,0,0,0,16.964v.606a1.818,1.818,0,0,0,1.818,1.818H17.57a1.818,1.818,0,0,0,1.818-1.818v-.606A4.846,4.846,0,0,0,14.541,12.117Z'
                          transform='translate(2.377 2.229)'
                          fill='#fff'
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id='Elipse_1905'
                    data-name='Elipse 1905'
                    transform='translate(-0.377 0)'
                    fill='none'
                    stroke='#31abaa'
                    stroke-width='2'
                  >
                    <circle cx='33' cy='33' r='33' stroke='none' />
                    <circle cx='33' cy='33' r='32' fill='none' />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <Input
            type='text'
            placeholder='Correo...'
            label='Correo'
            errorMessage={errors?.email?.message?.toString()}
            {...register('email', {
              required: 'El correo es requerido.',
              pattern: {
                value: /^[^\s@]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/,
                message:
                  '<p>El correo diligenciado <span>no tiene el formato</span> correcto</p>',
              },
            })}
          />
          <Input
            type='password'
            placeholder='Contraseña...'
            label='Contraseña'
            hasError={errors?.password ? true : false}
            errorMessage={errors?.password?.message?.toString()}
            {...register('password', {
              required: true,
            })}
          />
          <div className='form__btn'>
            <Button
              title='Iniciar sesión'
              variant='secondary'
              disabled={sendingData}
            />
          </div>
        </fieldset>
      </form>
      <div className='form__links'>
        <Link href='/restaurar-contrasena' passHref scroll={false}>
          <a>¿Olvidaste tu contraseña?</a>
        </Link>
        <Link href='/registro' passHref scroll={false}>
          <a>
            ¿Aún no estas registrado? <span> ¡Regístrate ahora! </span>{' '}
          </a>
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
