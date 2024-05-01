import { CardsMorePortafolioModel } from '@models/morePortafolioSection.model'
import styles from '@styles/scss/molecules/cards/cards-portafolio.module.scss'
import getImage from '@utils/getImage'
import Image from 'next/image'
import Link from 'next/link'

const CardsPortafolio = ({
  category,
  title,
  image,
  url,
}: CardsMorePortafolioModel) => {
  const IMAGES = JSON.parse(process.env.IMAGES || '{}')
  return (
    <Link href={url} passHref>
      <a className={styles.card}>
        <div className={styles.card__image}>
          <Image
            src={getImage(
              image.source,
              IMAGES.MORE_PORTAFOLIO.CROP_MORE_PORTAFOLIO.WIDTH,
              IMAGES.MORE_PORTAFOLIO.CROP_MORE_PORTAFOLIO.HEIGHT
            )}
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
