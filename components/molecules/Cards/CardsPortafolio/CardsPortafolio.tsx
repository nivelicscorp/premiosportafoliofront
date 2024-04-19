import { CardsMorePortafolioModel } from '@models/morePortafolioSection.model'
import styles from '@styles/scss/molecules/cards/cards-portafolio.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const CardsPortafolio = ({
  category,
  title,
  image,
  url,
}: CardsMorePortafolioModel) => {
  return (
    <Link href={url} passHref>
      <a className={styles.card}>
        <Image
          src={image.source}
          alt={image.alt}
          className={image.title}
          layout='fill'
        />
        <div className={styles.card__text}>
          <h3>{category}</h3>
          <p>{title}</p>
        </div>
      </a>
    </Link>
  )
}

export default CardsPortafolio
