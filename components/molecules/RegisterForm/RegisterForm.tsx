import postRegister from '@actions/postRegister'
import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { PostRegisterData } from '@models/postRegister.model'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const RegisterForm = () => {
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
          value: data.firstName,
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
          value: typeUser === 'Agencia' ? data.nameAgency : '',
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
          placeholder='Nombre...'
          label='Nombre'
          errorMessage={errors?.firstName?.message?.toString()}
          {...register('firstName', { required: 'El nombre es requerido.' })}
        />
        <Input
          type='email'
          placeholder='Correo...'
          label='Correo'
          errorMessage={errors.email?.message?.toString()}
          {...register('email', {
            required: 'El correo es requerido.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'El correo no es válido.',
            },
          })}
        />
        <Input
          type='password'
          placeholder='Contraseña...'
          label='Contraseña'
          errorMessage={errors.password?.message?.toString()}
          {...register('password', {
            required: 'La contraseña es requerida.',
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                'La contraseña debe tener al menos 8 caracteres, una letra, un número y un carácter especial.',
            },
          })}
        />
        <Input
          type='password'
          placeholder='Confirmar contraseña...'
          label='Confirmar contraseña'
          errorMessage={errors.confirmPassword?.message?.toString()}
          {...register('confirmPassword', {
            required: 'La confirmación de la contraseña es requerida.',
            validate: (value) =>
              value === watch('password') || 'Las contraseñas no coinciden.',
          })}
        />
        <h3>Seleccione el tipo de inscripción</h3>
        <Input
          type='select'
          placeholder='Empresa...'
          label='¿Quién realiza la inscripción?'
          options={['', 'Empresa', 'Persona', 'Agencia']}
          errorMessage={errors.type?.message?.toString()}
          {...register('type', {
            required: 'El tipo de inscripción es requerido.',
          })}
        />
        {typeUser === 'Empresa' && (
          <Input
            type='text'
            placeholder='NIT de la empresa'
            label='NIT'
            errorMessage={errors.businessNit?.message?.toString()}
            {...register('businessNit', { required: 'El NIT es requerido.' })}
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
                required: 'El número de identificación es requerido.',
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
                required: 'El nombre de la agencia es requerido.',
              })}
            />
            <Input
              type='text'
              placeholder='NIT de la agencia'
              label='NIT'
              errorMessage={errors.agencyNit?.message?.toString()}
              {...register('agencyNit')}
            />
            <Input
              type='tel'
              placeholder='Número de teléfono'
              label='Número de teléfono'
              errorMessage={errors.telephoneNumber?.message?.toString()}
              {...register('telephoneNumber', {
                required: 'El número de teléfono es requerido.',
              })}
            />
          </>
        )}
        <p>
          Nota: Durante el proceso puede actualizar su información en su perfil
        </p>
        <Input
          type='checkbox'
          label='Autorizo el tratamiento de mis datos personales conforme con la <strong>Política de Tratamiento de Datos</strong> de CASA EDITORIAL EL TIMPO S.A. y su Política de datos de Navegación/cookies, las cuales declaro que he leído y entiendo.'
          errorMessage={errors.termsAndConditions?.message?.toString()}
          {...register('termsAndConditions', {
            required: 'Debe aceptar los términos y condiciones.',
          })}
        />
        <Button
          title='Regístrate aquí'
          variant='secondary'
          disabled={sendingData}
        />
      </form>
      <Link href='/login' passHref scroll={false}>
        <a>¿Ya tienes un perfil registrado? Inicia sesión</a>
      </Link>
    </div>
  )
}

export default RegisterForm
