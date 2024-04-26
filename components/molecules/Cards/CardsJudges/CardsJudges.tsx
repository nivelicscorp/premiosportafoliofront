/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import styles from '@styles/scss/molecules/cards/cards-judges.module.scss'
import { JuriesCardModel } from '@models/juries.model'
import { myLoader } from '@utils/customLoaderImages'

const CardsJudges = ({ businessRole, name, photo }: JuriesCardModel) => {
  return (
    <div className={styles?.cardJudges}>
      <div className={styles?.cardJudges__img}>
        <Image
          loader={myLoader}
          src={photo?.source}
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
