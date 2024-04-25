import CardsJudges from '@molecules/Cards/CardsJudges/CardsJudges'
import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/organisms/judges.module.scss'

import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

const JudgesSection = () => {
  return (
    <div className={styles?.JudgesSection}>

        <div className={styles?.JudgesSection__title}>
            <div className={styles?.JudgesSection__title__img}>
                <Image 
                    src='/img/btn-float/prize.png'
                    height='250'
                    width='250'
                />
            </div>
            <h2> title </h2>
        </div>
        <Swiper
            modules={[FreeMode, Navigation, Pagination]}
            slidesPerView={1.5}
            className={'swiper swiper__judges'}
            freeMode={true}
            navigation={true}
            pagination={true}
            centeredSlides={true}
            spaceBetween={50}
            breakpoints={{
            768: {
                slidesPerView: 2,
            },
            1024: {
                freeMode: false,
                slidesPerView: 3,
            },
            1280: {
                freeMode: false,
                slidesPerView: 4,
            },
        }}
      >
        <SwiperSlide><CardsJudges name='Andrés Espinosa Fenwar' position='Presidente Banco de Occidente'/> </SwiperSlide>
        <SwiperSlide><CardsJudges name='Andrés Espinosa Fenwar' position='Presidente Banco de Occidente'/> </SwiperSlide>
        <SwiperSlide><CardsJudges name='Andrés Espinosa Fenwar' position='Presidente Banco de Occidente'/> </SwiperSlide>
        <SwiperSlide><CardsJudges name='Andrés Espinosa Fenwar' position='Presidente Banco de Occidente'/> </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default JudgesSection