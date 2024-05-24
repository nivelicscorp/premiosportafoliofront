import putProfile from '@actions/putProfile'
import Button from '@atoms/Button/Button'
import Input from '@atoms/Input/Input'
import FormNote from '@molecules/FormNote/FormNote'
import arrayDestructuring from '@utils/arrayDestructuring'
import decryptCryptoData from '@utils/decryptCryptoData'
import encryptCryptoData from '@utils/encryptCryptoData'
import { getCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const ProfileData = () => {
  const [enableEdit, setEnableEdit] = useState(false)
  const [uid, setUid] = useState('')
  const [token, setToken] = useState('')
  /**
   * State to know if the data is being sent to the backend
   */
  const [sendingData, setSendingData] = useState(false)
  const [userData, setUserData] = useState<any>()
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      setUserData(userDataParsed)
      setUid(userDataParsed?.current_user?.uid)
      setToken(userDataParsed?.csrf_token)
      setValue('name', userDataParsed?.current_user?.name)
      setValue('email', userDataParsed?.current_user?.email)
      setValue('password', '********')
      setValue('celphone', userDataParsed?.current_user?.phone)
      setValue(
        'role',
        userDataParsed?.current_user?.role?.charAt(0).toUpperCase() +
          userDataParsed?.current_user?.role?.slice(1)
      )
    }
    decypherData()
  }, [])
  /**
   * Form hook to handle the form data
   */
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()
  /**
   * Function to send the data to the backend
   * @param data - Data to send to the backend
   */
  const onSubmit = (data: any) => {
    setSendingData(true)
    putProfile(uid, token, data?.name, data?.celphone)
      .then(async (res) => {
        if (!res?.field_tipo_de_usuario) {
          setSendingData(false)
          return
        }
        const userDataTemp = userData
        userDataTemp.current_user.name = arrayDestructuring(
          res.field_nombre,
          ''
        )?.value
        userDataTemp.current_user.phone = arrayDestructuring(
          res.field_numero_de_telefono,
          ''
        )?.value
        const stringifiedData = JSON.stringify(userDataTemp)
        const securedData = await encryptCryptoData(stringifiedData)
        setCookie('user-data', securedData)
        window.location.reload()
      })
      .catch(() => {
        setSendingData(false)
      })
  }

  return (
    <div className='form'>
      <div className='form profile'>
        <div className='form__fieldset'>
          <h1 className='user-title'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='40px'
              viewBox='0 0 24 24'
              width='40px'
              fill='#31abaa'
            >
              <path d='M0 0h24v24H0V0z' fill='none' />
              <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
            </svg>
            Mi Perfil
          </h1>
          {!enableEdit && (
            <button className='btn-edit' onClick={() => setEnableEdit(true)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#2f323c'
              >
                <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z' />
              </svg>
              Editar
            </button>
          )}
          <Input
            type='text'
            label='Nombre'
            placeholder='Nombre...'
            disabled={!enableEdit}
            hasError={errors.name ? true : false}
            {...register('name', { required: true })}
            profile
          />
          <Input
            type='email'
            label='Correo'
            placeholder='Correo...'
            disabled
            {...register('email')}
            profile
          />
          <Input
            type='text'
            label='Contraseña'
            placeholder='Contraseña...'
            disabled
            {...register('password')}
            profile
          />
          {watch('celphone') && (
            <Input
              type='tel'
              label='Celular'
              placeholder='Celular...'
              disabled={!enableEdit}
              hasError={errors.celphone ? true : false}
              {...register('celphone', { required: true })}
              profile
            />
          )}
          <Input
            type='text'
            label='¿Quién realiza la inscripción?'
            disabled
            {...register('role')}
            profile
          />
        </div>
      </div>

      <FormNote textNote='Para editar da clic en el botón superior y recuerda guardar los cambios dando clic en el botón inferior' />

      {enableEdit && (
        <div className='form-btn'>
          <Button
            disabled={sendingData}
            title='Guardar cambios'
            clickHandler={handleSubmit(onSubmit)}
            variant={'secondary'}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileData
