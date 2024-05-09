import CardsPortafolio from '@molecules/Cards/CardsPortafolio/CardsPortafolio'
import styles from '@styles/scss/organisms/morePortafolio.module.scss'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import { Fragment } from 'react'
import React from 'react'

type Props = {
  data: MorePortafolioSectionModel
}

const MorePortafolioSection = ({ data }: Props) => {
  return (
    <section className={styles.morePortafolio}>
      <div className={styles.morePortafolio__title}>
        <h2>{data?.title}</h2>
        <hr />
      </div>
      <div className={styles.morePortafolio__carrousel}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1.1}
          className={'swiper swiper__grayscale portafolio'}
          pagination={{ clickable: true }}
          navigation={true}
          loop={data?.cards?.length > 4}
          breakpoints={{
            544: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3.4,
            },
          }}
        >
          {data?.cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardsPortafolio {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.morePortafolio__block}>
        {data?.cards.map((card, index) => (
          <Fragment key={index}>
            <CardsPortafolio {...card} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default React.memo(MorePortafolioSection)
