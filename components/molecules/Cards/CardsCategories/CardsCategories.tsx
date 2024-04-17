import Image from 'next/image'
import React from 'react'

import styles from '@styles/scss/molecules/cards/cards-categories.module.scss'
import { CategoryCard } from '@models/categories.model'

const CardsCategories = ({
  title,
  description,
  types,
  image,
  icon,
}: CategoryCard) => {
  return (
    <div className={styles?.cardCategories}>
      <div className={styles?.cardCategories__top}>
        <Image
          src={icon}
          alt={`Icono de ${title}`}
          height={70}
          width={65}
          className={styles?.cardCategories__top__image}
        />
        <h3 className={styles?.cardCategories__top__title}>{title}</h3>
      </div>

      <div className={styles?.cardCategories__detail}>
        <p>{description}</p>
      </div>

      <button className={styles?.cardCategories__seeMore}> SABER MÁS </button>
    </div>
  )
}

export default CardsCategories
