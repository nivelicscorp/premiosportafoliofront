import Image from 'next/image'
import React from 'react'

import styles from '@styles/scss/molecules/cards/cards-categories.module.scss'
import { CategoryCard } from '@models/categories.model'
import { myLoader } from '@utils/customLoaderImages'

// const CardsCategories = ({
//   title,
//   description,
//   types,
//   image,
//   icon,
// }: CategoryCard) => {
//   return (
//     <div className={styles?.cardCategories}>
//       <div className={styles?.cardCategories__top}>
//         <Image
//           src={icon}
//           alt={`Icono de ${title}`}
// interface props {
//   category?:
//     'export' | 'environment' | 'client' | 'digital' | 'master' |
//     'student' | 'social' | 'leader' | 'humanResourses' | 'innovation' | 'community',
// }

const CardsCategories = ({
  title,
  description,
  types,
  image,
  icon,
  category,
}: CategoryCard) => {
  return (
    <div className={styles?.cardCategories}>
      <div
        className={
          styles?.cardCategories__top +
          ' ' +
          (category === 'export'
            ? styles?.export
            : category === 'environment'
            ? styles?.environment
            : category === 'client'
            ? styles?.client
            : category === 'digital'
            ? styles?.digital
            : category === 'master'
            ? styles?.master
            : category === 'student'
            ? styles?.student
            : category === 'social'
            ? styles?.social
            : category === 'leader'
            ? styles?.leader
            : category === 'humanResourses'
            ? styles?.humanResourses
            : category === 'innovation'
            ? styles?.innovation
            : category === 'community'
            ? styles?.community
            : ' ')
        }
      >
        <div className={styles?.cardCategories__top__image}>
          <Image
            loader={myLoader}
            src={icon}
            alt={`Icono de ${title}`}
            height={70}
            width={65}
          />
        </div>

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
