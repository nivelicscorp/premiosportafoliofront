import { CardStudiesProps } from '@models/studies.model'

const CardStudies = ({
  study,
  institution,
  year,
  others,
  handleClick,
}: CardStudiesProps) => {
  return (
    <div
      style={{
        position: 'relative',
        boxShadow: '0px 3px 6px #00000029',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <div style={{ display: 'flex', gap: '5px' }}>
        <div>
          <p>Estudio</p>
          <p>{study}</p>
        </div>
        <div>
          <p>Institución</p>
          <p>{institution}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <div>
          <p>Año</p>
          <p>{year}</p>
        </div>
        <div>
          <p>Otros</p>
          <p>{others}</p>
        </div>
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

export default CardStudies
