import { WinnerSectionModel } from '@models/winner.model'
import CardsWinner from '@molecules/Cards/CardsWinner/CardsWinner'
import style from '@styles/scss/organisms/winners.module.scss'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface WinnersSectionProps {
  data: WinnerSectionModel
}

const WinnersSection = ({ data }: WinnersSectionProps) => {
  return (
    <div className={style.winners}>
      <div className={style.winners__title}>
        <hr />
        <h2>{data.title}</h2>
        <hr />
      </div>
      <Swiper
        modules={[FreeMode, Navigation, Pagination]}
        slidesPerView={1.5}
        className={'swiper swiper__grayscale noPaginatorDesktop'}
        freeMode={true}
        navigation={true}
        pagination={true}
        centeredSlides={true}
        loop={data?.winners?.length > 5}
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
        {data?.winners?.map((winner, index) => (
          <SwiperSlide key={index}>
            <CardsWinner {...winner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default WinnersSection
