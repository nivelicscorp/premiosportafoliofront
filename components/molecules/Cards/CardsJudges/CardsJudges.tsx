/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

import styles from '@styles/scss/molecules/cards/cards-judges.module.scss'

interface judges {
    name?: string,
    position?: string,
}

const CardsJudges = ({position, name}:judges) => {
  return (
    <div className={styles?.cardJudges}>
        <div className={styles?.cardJudges__img}>
            <Image 
                src='/img/categories/hand.png'
                height='250'
                width='250'
            />
        </div>
        <div className={styles?.cardJudges__data}>
            <p className={styles?.cardJudges__name}> {name} </p>
            <p className={styles?.cardJudges__position}> {position} </p>
        </div>
    </div>
  )
}

export default CardsJudges