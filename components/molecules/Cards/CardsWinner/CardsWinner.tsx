import { WinnerCardModel } from '@models/winner.model'
import styles from '@styles/scss/molecules/cards/cards-winners.module.scss'
import checkCategoryCard from '@utils/checkCategoryCard'
import { myLoader } from '@utils/customLoaderImages'
import Image from 'next/image'

const CardsWinner = ({ name, award, photo }: WinnerCardModel) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__photo}>
        <Image
          loader={myLoader}
          src={photo.source}
          alt={photo.alt}
          height={175}
          width={175}
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
