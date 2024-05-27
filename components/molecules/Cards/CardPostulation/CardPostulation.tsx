import Tooltip from '@atoms/Tooltip/Tooltip'
import styles from '@styles/scss/molecules/postulations.module.scss'

interface CardPostulationProps {
  title: string
  description: string
  numeration: number
}

const CardPostulation = ({
  title,
  description,
  numeration,
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
    </div>
  )
}

export default CardPostulation
