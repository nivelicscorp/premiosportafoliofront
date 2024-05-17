import { CardStudiesProps } from '@models/studies.model'

const CardStudies = ({
  estudio,
  estudioLabel,
  institucion,
  institucionLabel,
  anio,
  anioLabel,
  otros,
  otrosLabel,
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
          <p>{estudioLabel}</p>
          <p>{estudio}</p>
        </div>
        <div>
          <p>{institucionLabel}</p>
          <p>{institucion}</p>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <div>
          <p>{anioLabel}</p>
          <p>{anio}</p>
        </div>
        <div>
          <p>{otrosLabel}</p>
          <p>{otros}</p>
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
