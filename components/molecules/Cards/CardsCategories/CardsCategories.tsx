/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

import styles from '@styles/scss/molecules/cards/cards-categories.module.scss'

interface props {
  category?: 
    'export' | 'environment' | 'client' | 'digital' | 'master' |
    'student' | 'social' | 'leader' | 'humanResourses' | 'innovation' | 'community',
}

const CardsCategories = ({category}:props) => {
  return (
    <div className={styles?.cardCategories}>
      <div className={
        styles?.cardCategories__top + ' ' + 
        (
          category === 'export' ? styles?.export : 
          category === 'environment' ? styles?.environment : 
          category === 'client' ? styles?.client : 
          category === 'digital' ? styles?.digital : 
          category === 'master' ? styles?.master : 
          category === 'student' ? styles?.student : 
          category === 'social' ? styles?.social : 
          category === 'leader' ? styles?.leader : 
          category === 'humanResourses' ? styles?.humanResourses : 
          category === 'innovation' ? styles?.innovation : 
          category === 'community' ? styles?.community : ' '
        )    

      }>
        <img
          src='https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg'
          alt=''
          height={70}
          width={65}
          className={
            styles?.cardCategories__top__image }
        />
        <h3 className={styles?.cardCategories__top__title}>
          Gestión del Recurso Humano
        </h3>
      </div>

      <div className={styles?.cardCategories__detail}>
        <p>
         Se destacarán las empresas que adoptaron las tecnologías 4.0 con el objetivo de ser sostenibles, estables, incrementar su productividad y competitividad, mediante la mejora continua de sus productos y/o servicios, los cuales responden de manera ágil, efectiva y personalizada a las necesidades del mercado.
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
