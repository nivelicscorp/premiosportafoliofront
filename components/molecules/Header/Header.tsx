import decryptCryptoData from '@utils/decryptCryptoData'
import { deleteCookie, getCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Header = () => {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      setUserName(userDataParsed?.current_user?.name ?? 'Usuario')
    }
    if (userName === '') {
      decypherData()
    }
  }, [])

  const clearSession = () => {
    deleteCookie('user-data')
    sessionStorage.clear()
    router.reload()
  }

  return (
    <div
      style={{
        display: 'flex',
        position: 'sticky',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        padding: '10px',
        zIndex: '10',
        color: 'white',
      }}
    >
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href='/' passHref>
          <a>Inicio</a>
        </Link>
        <Link href='/usuario/mis-postulaciones' passHref scroll={false}>
          <a>Mis postulaciones</a>
        </Link>
      </div>
      <div style={{ position: 'relative' }}>
        <p onClick={() => setShowMenu(!showMenu)}>{userName}</p>
        {showMenu && (
          <div
            style={{
              position: 'absolute',
              top: '20px',
              backgroundColor: 'white',
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Link href='/usuario/perfil' passHref scroll={false}>
              <a>Mi perfil</a>
            </Link>
            <Link href='/' passHref>
              <a onClick={() => clearSession()}>Cerrar sesion</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
