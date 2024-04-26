import { WinnerSectionModel } from '@models/winner.model'
import CardsWinner from '@molecules/Cards/CardsWinner/CardsWinner'
import style from '@styles/scss/organisms/winners.module.scss'
import { Navigation, Pagination } from 'swiper/modules'
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
        modules={[Navigation, Pagination]}
        slidesPerView={1.5}
        className={'swiper swiper__grayscale'}
        navigation={true}
        pagination={true}
        loop={data?.winners?.length > 5}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            pagination: false,
            spaceBetween: 50,
            slidesPerView: 4,
          },
          1280: {
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
