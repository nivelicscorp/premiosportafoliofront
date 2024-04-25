import CardsJudges from '@molecules/Cards/CardsJudges/CardsJudges'
import React from 'react'

import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const JudgesSection = () => {
  return (
    <div>
        <h2> title </h2>
        <Swiper
            modules={[FreeMode, Navigation, Pagination]}
            slidesPerView={1.5}
            className={'swiper__grayscale__swiper noBackground noPaginatorDesktop'}
            freeMode={true}
            navigation={true}
            pagination={true}
            centeredSlides={true}
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
                slidesPerView: 5,
            },
        }}
      >
          <SwiperSlide>
            <SwiperSlide>
                <CardsJudges/>
            </SwiperSlide>
            <SwiperSlide>
                <CardsJudges/>
            </SwiperSlide>
            <SwiperSlide>
                <CardsJudges/>
            </SwiperSlide>
            <SwiperSlide>
                <CardsJudges/>
            </SwiperSlide>
            <SwiperSlide>
                <CardsJudges/>
            </SwiperSlide>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default JudgesSection