import { Swiper, SwiperSlide } from 'swiper/react'
import CardsCategories from '@molecules/Cards/CardsCategories/CardsCategories'
import React, { useState } from 'react'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

import { Pagination, Navigation } from 'swiper/modules'

import styles from '@styles/scss/organisms/categories.module.scss'
import Link from 'next/dist/client/link'
import {
  CategoryCardModel,
  CategorySectionModel,
} from '@models/categories.model'
import ModalDetails from '@molecules/ModalDetails/ModalDetails'

type Props = {
  data: CategorySectionModel
  activeRegister: boolean
}

const CategoriesSection = ({ data, activeRegister }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryCardModel | null>(null)

  return (
    <section className={styles?.categories}>
      <h2 className={styles?.categories__title}>{data.title}</h2>
      <div
        className={styles?.categories__intro}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        className={'swiper swiper__primary'}
        pagination={true}
        navigation={true}
        loop={data?.card?.length > 4}
        breakpoints={{
          620: {
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
        {data?.card?.map((category, index) => (
          <SwiperSlide key={index}>
            <CardsCategories
              {...category}
              emitSelection={(card) => setSelectedCategory(card)}
              activeRegister={activeRegister}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {activeRegister && (
        <Link href='/registro' passHref>
          <a className={styles?.categories__link}>{data.downLink}</a>
        </Link>
      )}
      {selectedCategory && (
        <ModalDetails
          {...selectedCategory}
          emitClose={() => setSelectedCategory(null)}
          activeRegister={activeRegister}
        />
      )}
    </section>
  )
}

export default CategoriesSection
