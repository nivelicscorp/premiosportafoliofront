import React from 'react'
import styles from '@styles/scss/atoms/head.module.scss'

interface head {
  text?: string
}

const Head = ({ text }: head) => {
  return <h1 className={styles?.head}>{text}</h1>
}

export default Head
