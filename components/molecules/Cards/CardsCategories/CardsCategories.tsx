/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

import styles from '@styles/scss/molecules/cards/cards-categories.module.scss'

const CardsCategories = () => {
  return (
    <div className={styles?.cardCategories}>
      <div className={styles?.cardCategories__top}>
        <img
          src='https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg'
          alt=''
          height={70}
          width={65}
          className={styles?.cardCategories__top__image}
        />
        <h3 className={styles?.cardCategories__top__title}>
          Gestión del Recurso Humano
        </h3>
      </div>

      <div className={styles?.cardCategories__detail}>
        <p>
          Recompensa la labor de los profesores que a lo largo de su carrera han
          dado muestra de excelencia en la enseñanza en las áreas de
          administración de empresas, Economía o Ingeniería en todo el país.
        </p>
      </div>

      <button className={styles?.cardCategories__seeMore}> SABER MÁS </button>
      {/* <Link href='' passHref>
        <a> SABER MÁS </a>
      </Link> */}
    </div>
  )
}

export default CardsCategories
