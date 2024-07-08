import Tooltip from '@atoms/Tooltip/Tooltip'
import styles from '@styles/scss/molecules/postulations.module.scss'
import Link from 'next/link'

interface CardPostulationProps {
  title: string
  description: string
  numeration: number
  data: any
  uuid: string
}

const CardPostulation = ({
  title,
  description,
  numeration,
  data,
  uuid,
}: CardPostulationProps) => {
  return (
    <div className={styles?.postulations__card}>
      <h2 className={styles?.postulations__card__number}>{numeration}</h2>
      <div>
        <h3 className={styles?.postulations__card__category}>{title}</h3>
        <p className={styles?.postulations__card__desc}>
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </p>
        {data?.status === 'undone' && (
          <Link href={'/usuario/postulacion'} passHref>
            <a
              className={styles?.postulations__card__link}
              onClick={() => {
                sessionStorage.setItem('postulation', JSON.stringify(data))
                sessionStorage.setItem('uuid', uuid)
              }}
            >
              Continuar postulación
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='16px'
                viewBox='0 -960 960 960'
                width='16px'
                fill='#e8eaed'
              >
                <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
              </svg>
            </a>
          </Link>
        )}
      </div>
      {/* <Tooltip
        tooltipLabel='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
        closePosition
      /> */}
    </div>
  )
}

export default CardPostulation
