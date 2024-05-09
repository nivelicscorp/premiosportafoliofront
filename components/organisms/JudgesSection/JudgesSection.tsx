import CardsJudges from '@molecules/Cards/CardsJudges/CardsJudges'
import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/organisms/judges.module.scss'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'
import { JuriesSectionModel } from '@models/juries.model'
import getImage from '@utils/getImage'

interface JudgesSectionProps {
  data: JuriesSectionModel
}

const JudgesSection = ({ data }: JudgesSectionProps) => {
  return (
    <section className={styles?.JudgesSection}>
      <div className={styles?.JudgesSection__title}>
        <div className={styles?.JudgesSection__title__img}>
          <Image
            src={getImage(data?.icon?.source)}
            alt={data?.icon?.alt}
            title={data?.icon?.title}
            height='250'
            width='250'
            quality={100}
          />
        </div>
        <h2> {data?.title} </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.5}
        className={'swiper swiper__judges'}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={50}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            centeredSlides: false,
            slidesPerView: 3,
          },
          1280: {
            centeredSlides: false,
            slidesPerView: 4,
          },
        }}
      >
        {data?.juries?.map((jury, index) => (
          <SwiperSlide key={index}>
            <CardsJudges
              name={jury.name}
              businessRole={jury.businessRole}
              photo={jury.photo}
            />{' '}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default JudgesSection
