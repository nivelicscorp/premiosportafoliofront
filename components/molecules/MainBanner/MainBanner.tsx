import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/molecules/banner.module.scss'
import SocialMedia from '@molecules/SocialMedia/SocialMedia'
import Link from 'next/link'
import { MainBanneSectionModel } from '@models/mainBanner.model'
import { myLoader } from '@utils/customLoaderImages'

type Props = {
  data: MainBanneSectionModel
}

const MainBanner = ({ data }: Props) => {
  return (
    <div className={styles?.banner}>
      <div className={styles?.banner__bgMain}>
        <picture>
          <source
            srcSet={data.backgroundDesktop.source}
            media='(min-width: 720px)'
          />
          <img src={data.backgroundMobile.source} alt='MDN' />
        </picture>
      </div>
      <div className={styles?.banner__content}>
        <div className={styles?.banner__logo}>
          <Image
            loader={myLoader}
            src={data.logo.source}
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
              loader={myLoader}
              src={data.mainIcon.source}
              alt={data.mainIcon.alt}
              title={data.mainIcon.title}
              width={218}
              height={67}
            />
          </div>
          <div className={styles?.banner__prize__award}>
            <Image
              loader={myLoader}
              src={data.auxiliaryIcon.source}
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
