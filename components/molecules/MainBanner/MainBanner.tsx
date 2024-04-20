/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/molecules/banner.module.scss'
import SocialMedia from '@molecules/SocialMedia/SocialMedia'

const MainBanner = () => {
  return (
    <div className={styles?.banner}>
      <div className={styles?.banner__bgMain}>
      <picture>
        <source srcSet='/img/main-banner/bg-desktop.png' media='(min-width: 720px)' />
        <img src='/img/main-banner/bg-mobile.png' alt="MDN" />
      </picture>
        {/* <Image
          src='/img/main-banner/bg-mobile.png'
          alt=''
          width={208}
          height={781}
        /> */}
      </div>
      <div className={styles?.banner__content}>
        <div className={styles?.banner__logo}>
          <Image
            src='/img/main-banner/logo-30.png'
            width={290}
            height={170}
          />
        </div>
        <p className={styles?.banner__text}>
          Es el reconocimiento más importante del país a las empresas y personas que han superado las expectativas y promedios de sus propios sectores y entornos.
        </p>
        <span className={styles?.banner__hashtag}>#Premiosportafolio</span>
        <div className={styles?.banner__socialMedia}>
          <SocialMedia />
        </div>
        <div className={styles?.banner__prize}>
          <div className={styles?.banner__prize__phrase}>
            <Image
              src='/img/main-banner/phrase.png'
              alt=''
              width={218}
              height={67}
            />
          </div>
          <div className={styles?.banner__prize__award}>
            <Image
              src='/img/main-banner/main-prize.png'
              alt=''
              width={179}
              height={270}
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default MainBanner
