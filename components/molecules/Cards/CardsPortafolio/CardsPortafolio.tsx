import styles from '@styles/scss/molecules/cards/cards-portafolio.module.scss'
import Link from 'next/link'

const CardsPortafolio = () => {
  return (
    <Link href='/' passHref>
      <a className={styles.card}>
        <img
          src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
          alt='image'
          className={styles.card__image}
        />
        <div className={styles.card__text}>
          <h3>Sostenibilidad</h3>
          <p>Cartagena: foco de desarrollo sostenible</p>
        </div>
      </a>
    </Link>
  )
}

export default CardsPortafolio
