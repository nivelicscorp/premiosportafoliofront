import React from 'react'
import styles from '@styles/scss/molecules/contactBlock.module.scss'

const ContactBlock = () => {
  return (
    <div className={styles?.contactBlock}>
      <div className={styles?.contactBlock__container}>
        <h2 className={styles?.contactBlock__title}> Contáctanos</h2>
        <p className={styles?.contactBlock__info}>
          Si conoces organizaciones o personas que merezcan destacarse a través
          de Premios Portafolio, postúlate <a href=''> aquí </a> o envía los
          datos al correo eléctronico:
          <strong> premios@portafolio.co</strong>
        </p>
      </div>
    </div>
  )
}

export default ContactBlock
