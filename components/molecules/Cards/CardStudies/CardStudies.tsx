import { CardStudiesProps } from '@models/studies.model'
import styles from '@styles/scss/molecules/cards/cardExperience.module.scss'

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
    <div className={styles?.cardExperience}>
      <button className={styles?.cardExperience__btn} onClick={handleClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          fill='#31abaa'
        >
          <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
        </svg>
      </button>
      <table>
        <tr>
          <th>{estudioLabel}</th>
          <th> {institucionLabel} </th>
        </tr>
        <tr>
          <td>{estudio}</td>
          <td>{institucion}</td>
        </tr>
        <tr>
          <th>{anioLabel}</th>
          <th>{otrosLabel}</th>
        </tr>
        <tr>
          <td>{anio}</td>
          <td>{otros}</td>
        </tr>
      </table>
    </div>
  )
}

export default CardStudies
