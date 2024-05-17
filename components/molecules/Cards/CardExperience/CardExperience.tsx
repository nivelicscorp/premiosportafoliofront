import { CardExperienceProps } from '@models/experience.model'

const CardExperience = ({
  empleador,
  empleadorLabel,
  cargo,
  cargoLabel,
  anio,
  anioLabel,
  telefono,
  telefonoLabel,
  otras_actividades,
  otras_actividadesLabel,
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
        <p>{empleadorLabel}</p>
        <p>{empleador}</p>
      </div>
      <div>
        <p>{cargoLabel}</p>
        <p>{cargo}</p>
      </div>
      <div>
        <p>{anioLabel}</p>
        <p>{anio}</p>
      </div>
      <div>
        <p>{telefonoLabel}</p>
        <p>{telefono}</p>
      </div>
      <div>
        <p>{otras_actividadesLabel}</p>
        <p>{otras_actividades}</p>
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
