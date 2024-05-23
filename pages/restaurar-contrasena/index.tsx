import ResetPassword from '@molecules/ResetPassword/ResetPassword'
import SendEmailReset from '@molecules/SendEmailReset/SendEmailReset'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ResetPage = () => {
  const router = useRouter()
  const [sent, setSent] = useState<string | undefined>()
  return (
    <div className='form-content small'>
      {!sent && (
        <div className='form'>
          <div className='form__top'>
            <h1 className='form__top__title'>Ingrese su correo electronico</h1>
          </div>
          <SendEmailReset handleSubmitForm={(event) => setSent(event)} />
        </div>
      )}
      {sent && (
        <div className='form'>
          <div className='form__top'>
            <h1 className='form__top__title'>Ingrese su nueva contraseña</h1>
          </div>
          <ResetPassword
            email={sent}
            handleSubmitForm={() =>
              router.replace('/login', undefined, { scroll: false })
            }
          />
        </div>
      )}
    </div>
  )
}

export default ResetPage
