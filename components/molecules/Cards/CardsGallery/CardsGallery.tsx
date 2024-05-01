import { GalleryCardModel } from '@models/gallery.model'
import styles from '@styles/scss/molecules/cards/cards-gallery.module.scss'
import getImage from '@utils/getImage'
import Image from 'next/image'

const CardsGallery = ({
  urlSource,
  type,
  isActive = false,
}: GalleryCardModel) => {
  const IMAGES = JSON.parse(process.env.IMAGES || '{}')
  return (
    <div className={styles.card}>
      {type === 'image' && (
        <Image
          src={getImage(
            urlSource,
            IMAGES.GALLERY.CROP_THUMBNAIL.WIDTH,
            IMAGES.GALLERY.CROP_THUMBNAIL.HEIGHT
          )}
          alt='img1'
          width={322}
          height={208}
        />
      )}
      {type === 'video' && (
        <>
          <Image
            src={`https://img.youtube.com/vi/${urlSource}/0.jpg`}
            alt='img1'
            width={322}
            height={208}
          />
          <div className={styles.card__icon}>
            <Image
              src='/img/gallery/play-video.svg'
              alt='img1'
              width={64}
              height={64}
            />
          </div>
        </>
      )}
      <div
        className={`${styles.card__bar} ${isActive ? styles.active : ''}`}
        style={{ backgroundColor: type === 'image' ? '#31ABAA' : '#D79C26' }}
      ></div>
    </div>
  )
}

export default CardsGallery
