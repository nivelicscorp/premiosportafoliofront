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
import { myLoader } from '@utils/customLoaderImages'

interface JudgesSectionProps {
  data: JuriesSectionModel
}

const JudgesSection = ({ data }: JudgesSectionProps) => {
  return (
    <section className={styles?.JudgesSection}>
      <div className={styles?.JudgesSection__title}>
        <div className={styles?.JudgesSection__title__img}>
          <Image
            loader={myLoader}
            src={data?.icon?.source}
            alt={data?.icon?.alt}
            title={data?.icon?.title}
            height='250'
            width='250'
          />
        </div>
        <h2> {data?.title} </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1.5}
        className={'swiper swiper__judges'}
        navigation={true}
        pagination={true}
        spaceBetween={50}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
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
