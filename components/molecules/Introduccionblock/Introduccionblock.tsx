import Head from '@atoms/Head/Head'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import styles from '@styles/scss/molecules/introduccionblock.module.scss'

interface introBlock {
  textTitle: string
  children?: ReactNode
}

const Introduccionblock = ({ textTitle, children }: introBlock) => {
  return (
    <div className={styles?.introduccionblock}>
      <Head text={textTitle} />
      <div className={styles?.introduccionblock__info}>
        <div className={styles?.introduccionblock__info__img}>
          <Image
            src='/img/forms/prize-lineblack.svg'
            alt=''
            width={20}
            height={46}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Introduccionblock
