import getPostulations from '@actions/getPostulations'
import Button from '@atoms/Button/Button'
import CardPostulation from '@molecules/Cards/CardPostulation/CardPostulation'
import SimpleSkeleton from '@molecules/SimpleSkeleton/SimpleSkeleton'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie } from 'cookies-next'
import { useState, useEffect, Fragment } from 'react'
import styles from '@styles/scss/molecules/postulations.module.scss'
import LinkButton from '@atoms/LinkButton/LinkButton'

const MyPostulations = () => {
  const [postulations, setPostulations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState(3)
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      getPostulations(
        userDataParsed?.current_user?.uid,
        userDataParsed?.csrf_token,
        userDataParsed?.current_user?.role
      ).then((res) => {
        setLoading(false)
        setPostulations(res)
      })
    }
    decypherData()
  }, [])
  return (
    <div className={styles?.postulations + ' form'}>
      <div className='form profile'>
        <div className='form__fieldset'>
          <h1 className='user-title'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='50px'
              viewBox='0 -960 960 960'
              width='41px'
              fill='#31abaa'
            >
              <path d='M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z' />
            </svg>
            Mis postulaciones
          </h1>
          <div className='form__top'>
            <div className='form__top__img'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='66'
                height='66'
                viewBox='0 0 43.462 43.462'
              >
                <defs>
                  <clipPath id='clip-path'>
                    <rect
                      id='Rectángulo_64692'
                      data-name='Rectángulo 64692'
                      width='15.804'
                      height='15.804'
                      transform='translate(0 0)'
                      fill='#fff'
                      stroke='#707070'
                      stroke-width='1'
                    />
                  </clipPath>
                </defs>
                <g
                  id='Grupo_112056'
                  data-name='Grupo 112056'
                  transform='translate(0.197)'
                >
                  <g
                    id='Icon_-_person_-_user'
                    data-name='Icon - person - user'
                    transform='translate(9.368 9.219)'
                  >
                    <g id='Grupo_108120' data-name='Grupo 108120'>
                      <path
                        id='Trazado_391984'
                        data-name='Trazado 391984'
                        d='M12.461,0A12.461,12.461,0,1,1,0,12.461,12.461,12.461,0,0,1,12.461,0Z'
                        fill='#31abaa'
                      />
                      <g
                        id='Enmascarar_grupo_62127'
                        data-name='Enmascarar grupo 62127'
                        transform='translate(4.264 4.609)'
                        clipPath='url(#clip-path)'
                      >
                        <path
                          id='Icon_awesome-user-alt'
                          data-name='Icon awesome-user-alt'
                          d='M6.383,7.181A3.591,3.591,0,1,0,2.793,3.591,3.592,3.592,0,0,0,6.383,7.181Zm3.192.8H8.2a4.341,4.341,0,0,1-3.636,0H3.192A3.191,3.191,0,0,0,0,11.171v.4a1.2,1.2,0,0,0,1.2,1.2H11.57a1.2,1.2,0,0,0,1.2-1.2v-.4A3.191,3.191,0,0,0,9.575,7.979Z'
                          transform='translate(1.813 1.468)'
                          fill='#fff'
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id='Elipse_1905'
                    data-name='Elipse 1905'
                    transform='translate(-0.197)'
                    fill='none'
                    stroke='#31abaa'
                    stroke-width='2'
                  >
                    <circle cx='21.731' cy='21.731' r='21.731' stroke='none' />
                    <circle cx='21.731' cy='21.731' r='20.731' fill='none' />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          {loading && (
            <>
              <SimpleSkeleton /> <SimpleSkeleton /> <SimpleSkeleton />
            </>
          )}
          {!loading && (!postulations || postulations?.length === 0) && (
            <>
              <p className={styles?.postulations__texts}>
                Esta cuenta no tiene postulaciones en curso, si conoces
                organizaciones o personas que merezcan destacarse a través de
                Premios Portafolio has clic en el botón y sigue los pasos
              </p>
              <LinkButton
                variant='secondary'
                target='_self'
                url='/usuario/postulacion'
                title='¡Postúlate aquí!'
                className={styles?.postulations__btn}
              />
            </>
          )}
          {!loading &&
            postulations?.slice(0, pagination).map((postulation, index) => (
              <Fragment key={index}>
                <CardPostulation
                  title='Categoría'
                  description={postulation?.name_category}
                  numeration={index + 1}
                  data={postulation.data}
                  uuid={postulation.uuid}
                />
              </Fragment>
            ))}
          {postulations?.length > pagination && (
            <Button
              title='Cargar más'
              clickHandler={() => setPagination(pagination + 3)}
              variant='secondary'
              className={styles?.postulations__btn}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MyPostulations
