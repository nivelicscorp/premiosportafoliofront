import CardsPortafolio from '@molecules/Cards/CardsPortafolio/CardsPortafolio'
import styles from '@styles/scss/organisms/morePortafolio.module.scss'
import { FreeMode, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import getSubComponentByUuid from '@actions/getSubComponentByUuid'
import { useEffect } from 'react'

type Props = {
  data: MorePortafolioSectionModel
}

const MorePortafolioSection = ({ data }: Props) => {
  console.log('🚀 ~ MorePortafolioSection ~ data:', data)
  return (
    <section className={styles.morePortafolio}>
      <div className={styles.morePortafolio__title}>
        <h2>{data.title}</h2>
        <hr />
      </div>
      <div className={styles.morePortafolio__carrousel}>
        <Swiper
          modules={[FreeMode, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1.1}
          className={'swiper portafolio__swiper'}
          freeMode={true}
          pagination={true}
          navigation={true}
          loop={false}
          breakpoints={{
            768: {
              slidesPerView: 1.8,
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
          <SwiperSlide>
            <CardsPortafolio />
          </SwiperSlide>
          <SwiperSlide>
            <CardsPortafolio />
          </SwiperSlide>
          <SwiperSlide>
            <CardsPortafolio />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.morePortafolio__block}>
        <CardsPortafolio />
        <CardsPortafolio />
        <CardsPortafolio />
        <CardsPortafolio />
      </div>
    </section>
  )
}

export default MorePortafolioSection
