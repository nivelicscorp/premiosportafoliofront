import { WinnerCardModel } from '@models/winner.model'
import styles from '@styles/scss/molecules/cards/cards-winners.module.scss'
import checkCategoryCard from '@utils/checkCategoryCard'
import getImage from '@utils/getImage'
import Image from 'next/image'

const CardsWinner = ({ name, award, photo }: WinnerCardModel) => {
  const IMAGES = JSON.parse(process.env.IMAGES || '{}')
  return (
    <div className={styles.card}>
      <div className={styles.card__photo}>
        <Image
          src={getImage(
            photo.source,
            IMAGES.WINNERS.CROP_WINNERS.WIDTH,
            IMAGES.WINNERS.CROP_WINNERS.HEIGHT
          )}
          alt={photo.alt}
          height={175}
          width={175}
          quality={100}
        />
      </div>
      <h3
        className={styles.card__name + ' ' + checkCategoryCard(award, styles)}
      >
        {name}
      </h3>
      <p className={styles.card__award}>{award}</p>
    </div>
  )
}

export default CardsWinner
