import postRegister from '@actions/postRegister'
import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { PostRegisterData } from '@models/postRegister.model'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from '@styles/scss/components/forms/register.module.scss'
import FormNote from '@molecules/FormNote/FormNote'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie } from 'cookies-next'

const RegisterForm = () => {
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  /**
   * Watch the type of user to show the fields according to the type
   */
  const typeUser = watch('type')
  /**
   * Function to send the data to the backend
   * @param data - Data to send to the backend
   */
  const onSubmit: SubmitHandler<any> = async (data) => {
    const dataToSend: PostRegisterData = {
      name: [
        {
          value: data.email,
        },
      ],
      mail: [
        {
          value: data.email,
        },
      ],
      pass: [
        {
          value: data.password,
        },
      ],
      field_tipo_de_usuario: [
        {
          value: data.type.toLowerCase(),
        },
      ],
      field_numero_de_telefono: [
        {
          value: typeUser === 'Agencia' ? data.telephoneNumber : '',
        },
      ],
      field_numero_de_identificacion: [
        {
          value:
            typeUser === 'Persona'
              ? data.idPerson
              : typeUser === 'Empresa'
              ? data.businessNit
              : data.agencyNit,
        },
      ],
      field_nombre: [
        {
          value: data?.firstName,
        },
      ],
    }
    setSendingData(true)
    await postRegister(dataToSend)
      .then((res) => {
        if (res.data?.uuid?.length > 0) {
          router.replace('/login', undefined, { scroll: false })
        }
      })
      .catch((err) => {
        console.error('Error al registrar el usuario')
        setSendingData(false)
      })
  }

  return (
    <section className={styles?.register + ' form-content'}>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <fieldset className={'form__fieldset'}>
          <Input
            type='text'
            placeholder='Nombre...'
            label='Nombre'
            errorMessage={errors?.firstName?.message?.toString()}
            {...register('firstName', {
              required:
                '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
            })}
          />
          <Input
            type='email'
            placeholder='Correo...'
            label='Correo'
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
          <Input
            type='password'
            placeholder='Contraseña...'
            label='Contraseña'
            errorMessage={errors.password?.message?.toString()}
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
          <Input
            type='password'
            placeholder='Confirmar contraseña...'
            label='Confirmar contraseña'
            errorMessage={errors.confirmPassword?.message?.toString()}
            {...register('confirmPassword', {
              required:
                '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
              validate: (value) =>
                value === watch('password') ||
                '<p>Las contraseñas <span>no coinciden</span>, inténtalo de nuevo</p>',
            })}
          />
          <h3 className='form__title'>Seleccione el tipo de inscripción</h3>
          <Input
            type='select'
            placeholder='Empresa...'
            label='¿Quién realiza la inscripción?'
            options={['', 'Empresa', 'Persona', 'Agencia']}
            errorMessage={errors.type?.message?.toString()}
            {...register('type', {
              required:
                '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
            })}
          />
          {typeUser === 'Empresa' && (
            <Input
              type='text'
              placeholder='NIT de la empresa'
              label='NIT'
              errorMessage={errors.businessNit?.message?.toString()}
              {...register('businessNit', {
                required:
                  '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
              })}
            />
          )}
          {typeUser === 'Persona' && (
            <>
              <Input
                type='text'
                placeholder='Número de identificación'
                label='Número de identificación'
                errorMessage={errors.idPerson?.message?.toString()}
                {...register('idPerson', {
                  required:
                    '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
                })}
              />
            </>
          )}
          {typeUser === 'Agencia' && (
            <>
              <Input
                type='text'
                placeholder='Nombre de la agencia'
                label='Nombre de la agencia'
                errorMessage={errors.nameAgency?.message?.toString()}
                {...register('nameAgency', {
                  required:
                    '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
                })}
              />
              <Input
                type='text'
                placeholder='NIT de la agencia'
                label='NIT'
                errorMessage={errors.agencyNit?.message?.toString()}
                {...register('agencyNit', {
                  required:
                    '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
                })}
              />
              <Input
                type='tel'
                placeholder='Número de teléfono'
                label='Número de teléfono'
                errorMessage={errors.telephoneNumber?.message?.toString()}
                {...register('telephoneNumber', {
                  required:
                    '<p>Este campo no puede estar vacio</p><p>*Por favor <span>diligenciarlo</span> antes de enviar</p>',
                })}
              />
            </>
          )}
        </fieldset>
        <FormNote textNote='Durante el proceso puede actualizar su información en su perfil' />
        <fieldset className={'form__fieldset tyc'}>
          <Input
            type='checkbox'
            label='Autorizo el tratamiento de mis datos personales conforme con la <strong>Política de Tratamiento de Datos</strong> de CASA EDITORIAL EL TIMPO S.A. y su Política de datos de Navegación/cookies, las cuales declaro que he leído y entiendo.'
            errorMessage={errors.termsAndConditions?.message?.toString()}
            {...register('termsAndConditions', {
              required:
                '<p>Este campo no puede estar vacio</p><p>*Debe <span>aceptar las políticas</span> de tratamiento de datos para poder continuar</p>',
            })}
          />
        </fieldset>
        <div className='form__btn'>
          <Button
            title='Regístrate aquí'
            variant='secondary'
            disabled={sendingData}
          />
        </div>
      </form>
      <div className='form__links'>
        <Link href='/login' passHref scroll={false}>
          <a>
            ¿Ya tienes un perfil registrado?
            <span> Inicia sesión </span>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default RegisterForm
