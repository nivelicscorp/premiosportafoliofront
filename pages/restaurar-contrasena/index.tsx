import ResetPassword from '@molecules/ResetPassword/ResetPassword'
import SendEmailReset from '@molecules/SendEmailReset/SendEmailReset'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ResetPage = () => {
  const router = useRouter()
  const [sent, setSent] = useState<string | undefined>()
  return (
    <div style={{ width: '800px', margin: '20px auto' }}>
      {!sent && (
        <div>
          <h1>Ingrese su correo electronico</h1>
          <SendEmailReset handleSubmitForm={(event) => setSent(event)} />
        </div>
      )}
      {sent && (
        <div>
          <h1>Ingrese su nueva contraseña</h1>
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
