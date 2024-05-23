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
    <div className=''>
      <div className='form'>
        <div className='form'>
          <Input
            type='text'
            label='Nombre'
            placeholder='Nombre...'
            disabled={!enableEdit}
            hasError={errors.name ? true : false}
            {...register('name', { required: true })}
          />
          <Input
            type='email'
            label='Correo'
            placeholder='Correo...'
            disabled
            {...register('email')}
          />
          <Input
            type='text'
            label='Contraseña'
            placeholder='Contraseña...'
            disabled
            {...register('password')}
          />
          {watch('celphone') && (
            <Input
              type='tel'
              label='Celular'
              placeholder='Celular...'
              disabled={!enableEdit}
              hasError={errors.celphone ? true : false}
              {...register('celphone', { required: true })}
            />
          )}
          <Input
            type='text'
            label='¿Quién realiza la inscripción?'
            disabled
            {...register('role')}
          />
        </div>
        {!enableEdit && (
          <button onClick={() => setEnableEdit(true)}> Editar </button>
        )}
      </div>

      <FormNote textNote='Para editar da clic en el botón superior y recuerda guardar los cambios dando clic en el botón inferior' />

      {enableEdit && (
        <Button
          disabled={sendingData}
          title='Guardar cambios'
          clickHandler={handleSubmit(onSubmit)}
          variant={'secondary'}
        />
      )}
    </div>
  )
}

export default ProfileData
