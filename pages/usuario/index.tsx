import LinkButton from '@atoms/LinkButton/LinkButton'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import styles from '@styles/scss/molecules/welcome.module.scss'
import ContactBlock from '@molecules/ContactBlock/ContactBlock'

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
      <div className={styles?.welcomBlock + ' form-content'}>
        <div className={styles?.welcomBlock__title}>
          <h1>
            <span> Hola </span>
            <span>{userName} </span>
            <p>Bienvenido a tu cuenta</p>
          </h1>
        </div>
        <div
          className={styles?.welcomBlock__msg}
          onClick={() => {
            sessionStorage.removeItem('postulation')
            sessionStorage.removeItem('uuid')
          }}
        >
          <p>
            Para comenzar con tu postulación has clic en el botón y sigue estos
            pasos
          </p>
          <LinkButton
            variant='secondary'
            target='_self'
            url='/usuario/postulacion'
            title='¡Postúlate aquí!'
          />
        </div>
      </div>
      <ContactBlock />
    </>
  )
}

export default DashboardPage
