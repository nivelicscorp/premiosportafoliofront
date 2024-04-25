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
import { CategorySectionModel } from '@models/categories.model'
import ModalDetails from '@molecules/ModalDetails/ModalDetails'

type Props = {
  categories: CategorySectionModel;
}

const CategoriesSection = ({ categories }: Props) => {
  return (
    <section className={styles?.categories} >
      <h2 className={styles?.categories__title}>{categories.title}</h2>
      <div
        className={styles?.categories__intro}
        dangerouslySetInnerHTML={{ __html: categories.description }}
      />
      <Swiper
        modules={[FreeMode, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        className={'swiper primary__swiper noBackground'}
        freeMode={true}
        pagination={true}
        navigation={true}
        loop={categories?.card?.length > 4}
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
        {categories?.card?.map((category, index) => (
          <SwiperSlide key={index}>
            <CardsCategories {...category} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href='/registro' passHref>
        <a className={styles?.categories__link}>{categories.downLink}</a>
      </Link>
      {/* Modal Detail */}
      <ModalDetails />
    </section>
  )
}

export default CategoriesSection
