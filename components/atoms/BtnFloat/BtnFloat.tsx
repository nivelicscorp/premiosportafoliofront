import React, { useState } from 'react'
import styles from '@styles/scss/atoms/button-float.module.scss'
import Link from 'next/link'

export const BtnFloat = () => {
  const [openBtn, setBTN] = useState(false)
  const toggleBtn = () => {
    setBTN(!openBtn)
  }
  return (
    <div className={styles?.btnFloat + ' ' + (openBtn ? styles?.open : '')}>
      <div className={styles?.btnFloat__content}>
        <Link href={'/registro'} passHref>
          <a className={styles?.btnFloat__link}>Postular ahora</a>
        </Link>
        <button className={styles?.btnFloat__close} onClick={toggleBtn}>
          close
        </button>
      </div>
    </div>
  )
}
