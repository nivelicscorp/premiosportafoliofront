import { CardExperienceProps } from '@models/experience.model'
import styles from '@styles/scss/molecules/cards/cardExperience.module.scss'
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
          <th> {empleadorLabel} </th>
          <th> {cargoLabel} </th>
        </tr>
        <tr>
          <td> {empleador} </td>
          <td> {cargo} </td>
        </tr>
        <tr>
          <th> {anioLabel} </th>
          <th> {telefonoLabel} </th>
        </tr>
        <tr>
          <td> {anio} </td>
          <td> {telefono} </td>
        </tr>
        <tr>
          <th colSpan={2}> {otras_actividadesLabel}</th>
        </tr>
        <tr>
          <td colSpan={2}> {otras_actividades} </td>
        </tr>
      </table>
    </div>
  )
}

export default CardExperience
