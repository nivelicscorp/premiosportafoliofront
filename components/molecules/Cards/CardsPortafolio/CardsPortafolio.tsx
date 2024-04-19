import { CardsMorePortafolioModel } from '@models/morePortafolioSection.model'
import styles from '@styles/scss/molecules/cards/cards-portafolio.module.scss'
import { myLoader } from '@utils/customLoaderImages'
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
        <div className={styles.card__image}>
          <Image
            loader={myLoader}
            src={image.source}
            alt={image.alt}
            objectFit='cover'
            width={115}
            height={90}
          />
        </div>
        <div className={styles.card__text}>
          <h3>{category}</h3>
          <p>{title}</p>
        </div>
      </a>
    </Link>
  )
}

export default CardsPortafolio
