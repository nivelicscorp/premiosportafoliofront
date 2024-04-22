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
import { CategoryCard } from '@models/categories.model'

type Props = {
  categories: CategoryCard[]
}

const CategoriesSection = ({ categories }: Props) => {
  return (
    <section className={styles?.categories}>
      <h2 className={styles?.categories__title}> Categorías </h2>
      <p className={styles?.categories__intro}>
        Presentamos nuestra <span> 30° edición </span> de{' '}
        <strong>Premios Portafolio</strong>, mostrando nuestras 11 categorías.
      </p>
      <Swiper
        modules={[FreeMode, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        className={'swiper primary__swiper'}
        freeMode={true}
        pagination={true}
        navigation={true}
        loop={categories.length > 4}
        breakpoints={{
          768: {
            slidesPerView: 2,
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
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CardsCategories {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href='/registro' passHref>
        <a className={styles?.categories__link}>
          Postular en algunas categorías
        </a>
      </Link>
    </section>
  )
}

export default CategoriesSection
