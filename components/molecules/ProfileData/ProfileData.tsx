import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const ProfileData = () => {
  const [enableEdit, setEnableEdit] = useState(false)
  /**
   * Form hook to handle the form data
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <div
      style={{
        width: '800px',
        margin: '20px auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          width: 'fit-content',
          margin: '20px auto',
        }}
      >
        <div
          style={{
            width: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Input
            type='text'
            label='Nombre'
            placeholder='Nombre...'
            disabled={!enableEdit}
            {...register('name')}
          />
          <Input
            type='email'
            label='Correo'
            placeholder='Correo...'
            disabled={!enableEdit}
            {...register('email')}
          />
          <Input
            type='text'
            label='Contraseña'
            placeholder='Contraseña...'
            disabled
            {...register('password')}
          />
          <Input
            type='tel'
            label='Celular'
            placeholder='Celular...'
            disabled={!enableEdit}
            {...register('celphone')}
          />
          <Input
            type='text'
            label='¿Quién realiza la inscripción?'
            disabled
            {...register('role')}
          />
        </div>
        {!enableEdit && (
          <button onClick={() => setEnableEdit(true)}>Editar</button>
        )}
      </div>
      <p>
        Nota: Para editar da clic en el botón superior y recuerda guardar los
        cambios dando clic en el botón inferior
      </p>
      {enableEdit && (
        <Button
          title='Guardar cambios'
          clickHandler={handleSubmit((data) => console.log(data))}
          variant={'secondary'}
        />
      )}
    </div>
  )
}

export default ProfileData
