import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/molecules/banner.module.scss'
import SocialMedia from '@molecules/SocialMedia/SocialMedia'
import Link from 'next/link'
import { MainBanneSectionModel } from '@models/mainBanner.model'
import { myLoader } from '@utils/customLoaderImages'

type Props = {
  banner: MainBanneSectionModel
}

const MainBanner = ({ banner }: Props) => {
  return (
    <div className={styles?.banner}>
      <div className={styles?.banner__bgMain}>
        <picture>
          <source
            srcSet={banner.backgroundDesktop.source}
            media='(min-width: 720px)'
          />
          <img src={banner.backgroundMobile.source} alt='MDN' />
        </picture>
      </div>
      <div className={styles?.banner__content}>
        <div className={styles?.banner__logo}>
          <Image
            loader={myLoader}
            src={banner.logo.source}
            alt={banner.logo.alt}
            title={banner.logo.title}
            width={290}
            height={170}
          />
        </div>
        <div
          className={styles?.banner__text}
          dangerouslySetInnerHTML={{ __html: banner.description }}
        ></div>
        <Link href={banner.hashtag.url} passHref>
          <a className={styles?.banner__hashtag}>{banner.hashtag.text}</a>
        </Link>
        <div className={styles?.banner__socialMedia}>
          <SocialMedia data={banner.socialMedia} />
        </div>
        <div className={styles?.banner__prize}>
          <div className={styles?.banner__prize__phrase}>
            <Image
              loader={myLoader}
              src={banner.mainIcon.source}
              alt={banner.mainIcon.alt}
              title={banner.mainIcon.title}
              width={218}
              height={67}
            />
          </div>
          <div className={styles?.banner__prize__award}>
            <Image
              loader={myLoader}
              src={banner.auxiliaryIcon.source}
              alt={banner.auxiliaryIcon.alt}
              title={banner.auxiliaryIcon.title}
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
