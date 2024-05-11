import LinkButton from '@atoms/LinkButton/LinkButton'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie } from 'cookies-next'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

const DashboardPage = () => {
  const cookieValue = JSON.parse(getCookie('user-data') ?? '{}')
  const userData = decryptCryptoData(cookieValue)
  const [userName, setUserName] = useState('')
  useEffect(() => {
    const userDataParsed = JSON.parse(userData ?? '{}')
    setUserName(userDataParsed?.current_user?.name ?? 'Usuario')
  }, [userData])

  return (
    <>
      <div style={{ width: '500px', margin: '20px auto' }}>
        <p>Hola</p>
        <p>{userName}</p>
        <p>Bienvenido a tu cuenta</p>
        <LinkButton
          variant='secondary'
          target='_self'
          url='/usuario/postulacion'
          title='¡Postúlate aquí!'
        />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}

export default DashboardPage
