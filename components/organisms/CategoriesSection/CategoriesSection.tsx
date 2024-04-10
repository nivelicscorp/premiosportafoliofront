import { Swiper, SwiperSlide } from 'swiper/react'
import CardsCategories from '@molecules/Cards/CardsCategories/CardsCategories'
import React from 'react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

import { FreeMode, Pagination, Navigation } from 'swiper/modules'

import styles from '@styles/scss/organisms/categories.module.scss'
import Link from 'next/dist/client/link'

const CategoriesSection = () => {
  return (
    <section className={styles?.categories}>
      <h2 className={styles?.categories__title}> Categorias </h2>
      <p className={styles?.categories__intro}>
        Presentamos nuestra 30° edición de
        <strong> Premios Portafolio, </strong> mostrando nuestras 11 categorías.
      </p>
      <Swiper
        modules={[FreeMode, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        className={'categories__swiper'}
        freeMode={true}
        pagination={true}
        navigation={true}
        breakpoints={{
          720: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className={'styles.slide'}>
          <CardsCategories />
        </SwiperSlide>
        <SwiperSlide className={'styles.slide'}>
          <CardsCategories />
        </SwiperSlide>
        <SwiperSlide className={'styles.slide'}>
          <CardsCategories />
        </SwiperSlide>
        <SwiperSlide className={'styles.slide'}>
          <CardsCategories />
        </SwiperSlide>
      </Swiper>
      <Link href='' passHref>
        <a className={styles?.categories__link}>
          Postular en algunas categorias
        </a>
      </Link>
    </section>
  )
}

export default CategoriesSection
