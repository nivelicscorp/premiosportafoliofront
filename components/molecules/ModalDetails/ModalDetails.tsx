import React, { useState } from 'react'
import Styles from '../../../styles/scss/molecules/modalDetails.module.scss'
import CardsCategories from '@molecules/Cards/CardsCategories/CardsCategories'
import { CategoryCardModel } from '@models/categories.model'

interface Props extends CategoryCardModel {
  emitClose: () => void
}

const ModalDetails = ({
  title,
  description,
  summary,
  image,
  icon,
  variant,
  emitClose,
}: Props) => {
  return (
    <div className={Styles?.modal}>
      <button className={Styles?.modal__close} onClick={() => emitClose()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 -960 960 960'
          width='24'
        >
          <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
        </svg>
      </button>

      <div>
        <div className={Styles?.modal__card}>
          <CardsCategories
            title={title}
            description={description}
            variant='modal'
            summary={summary}
            image={image}
            icon={icon}
            emitSelection={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalDetails
