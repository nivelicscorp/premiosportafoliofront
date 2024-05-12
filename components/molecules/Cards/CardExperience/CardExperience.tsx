import { CardExperienceProps } from '@models/experience.model'

const CardExperience = ({
  entity,
  labor,
  year,
  phone,
  others,
  handleClick,
}: CardExperienceProps) => {
  return (
    <div
      style={{
        position: 'relative',
        boxShadow: '0px 3px 6px #00000029',
        padding: '10px',
        borderRadius: '5px',
        display: 'grid',
        textAlign: 'left',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      <div>
        <p>Empresa o Universidad</p>
        <p>{entity}</p>
      </div>
      <div>
        <p>Cargo</p>
        <p>{labor}</p>
      </div>
      <div>
        <p>Año</p>
        <p>{year}</p>
      </div>
      <div>
        <p>Teléfono</p>
        <p>{phone}</p>
      </div>
      <div>
        <p>Otras Actividades</p>
        <p>{others}</p>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        x
      </div>
    </div>
  )
}

export default CardExperience
