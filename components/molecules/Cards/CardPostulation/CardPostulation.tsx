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
      </div>
      <Tooltip
        tooltipLabel='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
        closePosition
      />
      <Link href={'/usuario/postulacion'} passHref>
        <a
          onClick={() => {
            sessionStorage.setItem('postulation', JSON.stringify(data))
            sessionStorage.setItem('uuid', uuid)
          }}
        >
          Continuar
        </a>
      </Link>
    </div>
  )
}

export default CardPostulation
