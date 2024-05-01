import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/molecules/banner.module.scss'
import SocialMedia from '@molecules/SocialMedia/SocialMedia'
import Link from 'next/link'
import { MainBanneSectionModel } from '@models/mainBanner.model'
import getImage from '@utils/getImage'

type Props = {
  data: MainBanneSectionModel
}

const MainBanner = ({ data }: Props) => {
  const IMAGES = JSON.parse(process.env.IMAGES || '{}')
  return (
    <div className={styles?.banner}>
      <div className={styles?.banner__bgMain}>
        <picture>
          <source
            srcSet={getImage(
              data.backgroundDesktop.source,
              IMAGES.MAIN_BANNER.CROP_BANNER_DESKTOP.WIDTH,
              IMAGES.MAIN_BANNER.CROP_BANNER_DESKTOP.HEIGHT
            )}
            media='(min-width: 720px)'
          />
          <img
            src={getImage(
              data.backgroundMobile.source,
              IMAGES.MAIN_BANNER.CROP_BANNER_MOBILE.WIDTH,
              IMAGES.MAIN_BANNER.CROP_BANNER_MOBILE.HEIGHT
            )}
            alt='MDN'
          />
        </picture>
      </div>
      <div className={styles?.banner__content}>
        <div className={styles?.banner__logo}>
          <Image
            src={getImage(data.logo.source)}
            alt={data.logo.alt}
            title={data.logo.title}
            width={290}
            height={170}
          />
        </div>
        <div
          className={styles?.banner__text}
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        <Link href={data.hashtag.url} passHref>
          <a className={styles?.banner__hashtag}>{data.hashtag.text}</a>
        </Link>
        <div className={styles?.banner__socialMedia}>
          <SocialMedia data={data.socialMedia} />
        </div>
        <div className={styles?.banner__prize}>
          <div className={styles?.banner__prize__phrase}>
            <Image
              src={getImage(data.mainIcon.source)}
              alt={data.mainIcon.alt}
              title={data.mainIcon.title}
              width={218}
              height={67}
            />
          </div>
          <div className={styles?.banner__prize__award}>
            <Image
              src={getImage(data.auxiliaryIcon.source)}
              alt={data.auxiliaryIcon.alt}
              title={data.auxiliaryIcon.title}
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
