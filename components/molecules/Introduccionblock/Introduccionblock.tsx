import Head from '@atoms/Head/Head'
import React from 'react'
import Image from 'next/image'
import styles from '@styles/scss/molecules/introduccionblock.module.scss'

const Introduccionblock = () => {
  return (
    <div className={styles?.introduccionblock}>
        <Head text='Regístrate en Premios Portafolio 2024' />
        <div className={styles?.introduccionblock__info}>
            <div className={styles?.introduccionblock__info__img}>
              <Image src='/img/forms/prize-lineblack.svg' alt="" width={20} height={46}/>
            </div>
            <p> Si quiere realizar el proceso de <strong> inscripción como empresa y persona, </strong> deberá hacer el registro con <mark> usuarios diferentes </mark>  para cada postulación. </p>
        </div>
    </div>
  )
}

export default Introduccionblock