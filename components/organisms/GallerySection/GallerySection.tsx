import styles from '@styles/scss/organisms/gallery.module.scss'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import CardsGallery from '@molecules/Cards/CardsGallery/CardsGallery'
import { GallerySectionModel } from '@models/gallery.model'
import Image from 'next/image'
import { useState } from 'react'
import getImage from '@utils/getImage'

type Props = {
  data: GallerySectionModel
}
const GallerySection = ({ data }: Props) => {
  const IMAGES = JSON.parse(process.env.IMAGES || '{}')
  const [activeContent, setActiveContent] = useState(data.cards[0])

  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__titleContainer}>
        <div className={styles.gallery__title}>{data.title}</div>
      </div>

      <div className={styles.gallery__preview}>
        {activeContent?.type === 'image' && (
          <Image
            src={getImage(
              activeContent?.urlSource,
              IMAGES.GALLERY.CROP_MAIN_DESKTOP.WIDTH,
              IMAGES.GALLERY.CROP_MAIN_DESKTOP.HEIGHT
            )}
            alt='img1'
            width={815}
            height={458}
            quality={100}
          />
        )}
        {activeContent?.type === 'video' && (
          <iframe
            width='815'
            height='458'
            src={`https://www.youtube.com/embed/${activeContent?.urlSource}?si=MwuCjLCaszt1nozK`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        )}
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        className={'swiper swiper__primary swiper__gallery'}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={true}
        slideToClickedSlide={true}
        loop={true}
        onActiveIndexChange={(index: any) => {
          setActiveContent(data.cards[index.realIndex])
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            spaceBetween: 50,
            slidesPerView: 3,
          },
          1280: {
            spaceBetween: 50,
            slidesPerView: 3.5,
          },
        }}
      >
        {data.cards.map((card, index) => (
          <SwiperSlide key={index}>
            <CardsGallery
              urlSource={card.urlSource}
              type={card.type}
              isActive={activeContent === card}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default GallerySection
