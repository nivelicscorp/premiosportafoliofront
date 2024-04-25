import styles from '@styles/scss/organisms/gallery.module.scss'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import CardsGallery from '@molecules/Cards/CardsGallery/CardsGallery'
import { GallerySectionModel } from '@models/gallery.model'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { myLoader } from '@utils/customLoaderImages'

type Props = {
  data: GallerySectionModel
}
const GallerySection = ({ data }: Props) => {
  const [activeContent, setActiveContent] = useState(data.cards[0])
  useEffect(() => {
    console.log('activeContent', activeContent)
  }, [activeContent])

  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__titleContainer}>
        <div className={styles.gallery__title}>{data.title}</div>
      </div>

      <div className={styles.gallery__preview}>
        {activeContent?.type === 'image' && (
          <Image
            loader={myLoader}
            src={activeContent?.urlSource}
            alt='img1'
            width={815}
            height={458}
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
        slidesPerView={1.2}
        className={'swiper__primary__swiper noBackground'}
        centeredSlides={true}
        pagination={true}
        navigation={true}
        loop={false}
        onActiveIndexChange={(index: any) =>
          setActiveContent(data.cards[index.activeIndex])
        }
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            centeredSlides: true,
            spaceBetween: 50,
            slidesPerView: 3,
          },
          1280: {
            centeredSlides: true,
            slidesPerView: 3.4,
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