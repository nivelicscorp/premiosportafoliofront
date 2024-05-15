import LinkButton from '@atoms/LinkButton/LinkButton'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie, setCookie } from 'cookies-next'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'

const DashboardPage = () => {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      setUserName(userDataParsed?.current_user?.name ?? 'Usuario')
      setCookie('temp-role', userDataParsed?.current_user?.role)
    }
    decypherData()
  }, [])

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
