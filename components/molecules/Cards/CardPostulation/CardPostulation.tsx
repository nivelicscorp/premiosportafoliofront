import Tooltip from '@atoms/Tooltip/Tooltip'

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
    <div style={{ display: 'flex', position: 'relative' }}>
      <h2>{numeration}</h2>
      <div>
        <h3>{title}</h3>
        <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
      </div>
      <Tooltip
        tooltipLabel='Resalta el empeño de las compañías que participan dedicadamente en la búsqueda de mercados externos.'
        closePosition
      />
    </div>
  )
}

export default CardPostulation
