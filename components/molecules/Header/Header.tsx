import decryptCryptoData from '@utils/decryptCryptoData'
import { deleteCookie, getCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '@styles/scss/organisms/header.module.scss'
import axios from 'axios'

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
    axios.post('/api/clear-cookie').then((res) => {
      deleteCookie('user-data')
      sessionStorage.clear()
      router.reload()
    })
  }

  return (
    <header className={styles?.header}>
      <div className={styles?.header__content}>
        <nav>
          <ul className={styles?.header__mainMenu}>
            <li>
              <Link href='/' passHref>
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href='/usuario/mis-postulaciones' passHref scroll={false}>
                <a>Mis postulaciones</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles?.header__menu}>
          <button
            className={
              styles?.header__menu__btn + ' ' + (showMenu ? styles?.open : '')
            }
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className={styles?.header__menu__btn__user}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 22 22'
            >
              <g
                transform='matrix(1, 0, 0, 1, -9, -9)'
                filter='url(#Trazado_391984)'
              >
                <path
                  id='Trazado_391984-2'
                  data-name='Trazado 391984'
                  d='M11.044,0A11.044,11.044,0,1,1,0,11.044,11.044,11.044,0,0,1,11.044,0Z'
                  transform='translate(9 9)'
                  fill='#fff'
                />
              </g>
              <g
                id='Enmascarar_grupo_62127'
                data-name='Enmascarar grupo 62127'
                transform='translate(4.141 4.141)'
                clipPath='url(#clip-path)'
              >
                <path
                  id='Icon_awesome-user-alt'
                  data-name='Icon awesome-user-alt'
                  d='M5.658,6.365A3.182,3.182,0,1,0,2.475,3.182,3.183,3.183,0,0,0,5.658,6.365Zm2.829.707H7.269a3.847,3.847,0,0,1-3.222,0H2.829A2.829,2.829,0,0,0,0,9.9v.354a1.061,1.061,0,0,0,1.061,1.061h9.194a1.061,1.061,0,0,0,1.061-1.061V9.9A2.829,2.829,0,0,0,8.486,7.072Z'
                  transform='translate(1.245 1.245)'
                  fill='#31abaa'
                />
              </g>
            </svg>
            {userName}
            <svg
              className={styles?.header__menu__btn__close}
              xmlns='http://www.w3.org/2000/svg'
              width='13.826'
              height='13.826'
              viewBox='0 0 13.826 13.826'
            >
              <defs>
                <clipPath id='clip-path'>
                  <rect
                    id='Rectángulo_63763'
                    data-name='Rectángulo 63763'
                    width='13.826'
                    height='13.826'
                    transform='translate(0 13.826) rotate(-90)'
                    fill='#fff'
                    stroke='#707070'
                    stroke-width='1'
                  />
                </clipPath>
              </defs>
              <g
                id='Botón_flecha_-_Arrow_button'
                data-name='Botón flecha - Arrow button'
                transform='translate(0 13.826) rotate(-90)'
              >
                <g id='Grupo_107550' data-name='Grupo 107550'>
                  <g
                    id='Enmascarar_grupo_859'
                    data-name='Enmascarar grupo 859'
                    transform='translate(13.826 13.826) rotate(180)'
                    clipPath='url(#clip-path)'
                  >
                    <g
                      id='angle-right'
                      transform='translate(11.087 13.826) rotate(180)'
                    >
                      <path
                        id='Trazado_22147'
                        data-name='Trazado 22147'
                        d='M8.063,12.676a.438.438,0,0,0-.138-.319L2.48,6.913,7.924,1.468a.436.436,0,0,0,0-.637L7.232.138a.436.436,0,0,0-.637,0L.138,6.594a.436.436,0,0,0,0,.637l6.456,6.456a.436.436,0,0,0,.637,0l.693-.693a.438.438,0,0,0,.138-.319Z'
                        transform='translate(0 0)'
                        fill='#fff'
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          {showMenu && (
            <ul className={styles?.header__menu__options}>
              <li>
                <Link href='/usuario/perfil' passHref scroll={false}>
                  <a>
                    Mi perfil
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='13'
                      height='13'
                      viewBox='0 0 512 512'
                    >
                      <path
                        d='M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z'
                        fill='#31abaa'
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/' passHref>
                  <a onClick={() => clearSession()}>
                    Cerrar sesion
                    <svg
                      id='Icon_settings_-_ajustes'
                      data-name='Icon settings - ajustes'
                      xmlns='http://www.w3.org/2000/svg'
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                    >
                      <defs>
                        <clipPath id='clip-path'>
                          <rect
                            id='Rectángulo_64692'
                            data-name='Rectángulo 64692'
                            width='13'
                            height='13'
                            fill='#31abaa'
                            stroke='#707070'
                            stroke-width='1'
                          />
                        </clipPath>
                      </defs>
                      <g id='Grupo_108123' data-name='Grupo 108123'>
                        <g
                          id='Enmascarar_grupo_62128'
                          data-name='Enmascarar grupo 62128'
                          clipPath='url(#clip-path)'
                        >
                          <path
                            id='gear'
                            d='M8.667,6.5A2.167,2.167,0,0,0,6.5,4.333,2.167,2.167,0,0,0,4.333,6.5,2.167,2.167,0,0,0,6.5,8.667,2.167,2.167,0,0,0,8.667,6.5ZM13,5.578V7.456a.326.326,0,0,1-.068.195.258.258,0,0,1-.169.11L11.2,8a5.4,5.4,0,0,1-.33.77q.3.423.906,1.168a.327.327,0,0,1,.085.212.282.282,0,0,1-.076.195,8.619,8.619,0,0,1-.838.914q-.609.6-.8.6a.413.413,0,0,1-.22-.076L8.76,10.867a4.835,4.835,0,0,1-.77.322,13.8,13.8,0,0,1-.246,1.574.285.285,0,0,1-.3.237H5.56a.32.32,0,0,1-.207-.072.25.25,0,0,1-.1-.182l-.237-1.558a5.239,5.239,0,0,1-.762-.313l-1.193.906a.3.3,0,0,1-.212.076.292.292,0,0,1-.212-.093,11.164,11.164,0,0,1-1.4-1.422.331.331,0,0,1-.059-.195.326.326,0,0,1,.068-.195q.127-.178.432-.563t.457-.6a4.186,4.186,0,0,1-.347-.838L.246,7.727a.266.266,0,0,1-.178-.106A.322.322,0,0,1,0,7.423V5.544a.326.326,0,0,1,.068-.195.256.256,0,0,1,.161-.11L1.8,5a4.177,4.177,0,0,1,.33-.779q-.339-.482-.906-1.168a.318.318,0,0,1-.084-.2.357.357,0,0,1,.076-.195,8.376,8.376,0,0,1,.834-.91q.614-.605.8-.605a.36.36,0,0,1,.22.085l1.168.906a4.835,4.835,0,0,1,.77-.322A13.8,13.8,0,0,1,5.256.237.285.285,0,0,1,5.56,0H7.439a.32.32,0,0,1,.207.072.251.251,0,0,1,.1.182l.237,1.558a5.239,5.239,0,0,1,.762.313l1.2-.906a.275.275,0,0,1,.2-.076.327.327,0,0,1,.212.085,11.6,11.6,0,0,1,1.4,1.439.274.274,0,0,1,.059.186.326.326,0,0,1-.068.195q-.127.178-.432.563t-.457.6a5.119,5.119,0,0,1,.347.829l1.549.237a.266.266,0,0,1,.178.106.323.323,0,0,1,.068.2Z'
                            transform='translate(0 0)'
                            fill='#31abaa'
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
