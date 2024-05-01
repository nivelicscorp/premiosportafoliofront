/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import styles from '@styles/scss/molecules/cards/cards-judges.module.scss'
import { JuriesCardModel } from '@models/juries.model'
import getImage from '@utils/getImage'

const CardsJudges = ({ businessRole, name, photo }: JuriesCardModel) => {
  const IMAGES = JSON.parse(process.env.IMAGES || '{}')
  return (
    <div className={styles?.cardJudges}>
      <div className={styles?.cardJudges__img}>
        <Image
          src={getImage(
            photo?.source,
            IMAGES.JURIES.CROP_JURIES.WIDTH,
            IMAGES.JURIES.CROP_JURIES.HEIGHT
          )}
          alt={photo?.alt}
          title={photo?.title}
          height='250'
          width='250'
        />
      </div>
      <div className={styles?.cardJudges__data}>
        <p className={styles?.cardJudges__name}> {name} </p>
        <p className={styles?.cardJudges__position}> {businessRole} </p>
      </div>
    </div>
  )
}

export default CardsJudges
