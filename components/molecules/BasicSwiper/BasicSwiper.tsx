import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '@styles/Test.module.scss'
import 'swiper/css'

const BasicSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default BasicSwiper
