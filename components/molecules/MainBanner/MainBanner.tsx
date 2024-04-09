/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/molecules/banner.module.scss'
import SocialMedia from '@molecules/SocialMedia/SocialMedia'
import Link from 'next/link'

const MainBanner = () => {
  return (
    <div className={styles?.banner}>
      <Link href={''} passHref>
        <a className={styles?.banner__link}>
          Postular ahora
          <img
            src='/img/main-banner/hand-click.svg'
            alt=''
            width={20}
            height={20}
          />
        </a>
      </Link>
      <div className={styles?.banner__content}>
        <div className={styles?.banner__logo}>
          <img
            src='https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/premiosPrincipal.svg'
            alt=''
          />
          {/* <Image
            src={
              'https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/premiosPrincipal.svg'
            }
            width={290}
            height={170}
          /> */}
        </div>
        <p className={styles?.banner__text}>
          Es el recomocimiento más importante del país a las empresas y personas
          que han superado las expectativas y promedios de sus propios sectores
          y entornos.
        </p>
        <span className={styles?.banner__hashtag}>#Premiosportafolio</span>
        <div className={styles?.banner__socialMedia}>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}

export default MainBanner
