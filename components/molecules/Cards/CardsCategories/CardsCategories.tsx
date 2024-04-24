import Image from 'next/image'
import React from 'react'

import styles from '@styles/scss/molecules/cards/cards-categories.module.scss'
import { CategoryCardModel } from '@models/categories.model'
import { myLoader } from '@utils/customLoaderImages'
import checkCategoryCard from '@utils/checkCategoryCard'

const CardsCategories = ({
  title,
  description,
  summary,
  image,
  icon,
}: CategoryCardModel) => {
  return (
    <div className={styles?.cardCategories}>
      <div
        className={styles?.cardCategories__top + ' ' + checkCategoryCard(title)}
      >
        <div className={styles?.cardCategories__top__image}>
          <Image
            loader={myLoader}
            src={icon.source}
            alt={icon.alt}
            title={icon.title}
            height={70}
            width={65}
          />
        </div>

        <h3 className={styles?.cardCategories__top__title}>{title}</h3>
      </div>

      <div
        className={styles?.cardCategories__detail}
        dangerouslySetInnerHTML={{ __html: summary }}
      />

      <button className={styles?.cardCategories__seeMore}> SABER MÁS </button>
    </div>
  )
}

export default CardsCategories
