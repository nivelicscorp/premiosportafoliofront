
import React, { useState } from 'react'
import Styles from '../../../styles/scss/molecules/modalDetails.module.scss'
import CardsCategories from '@molecules/Cards/CardsCategories/CardsCategories'

const ModalDetails = () => {
    const [closeModal, setModal] = useState(false)
    const closeModalDetail = () => {
        setModal(!closeModal)
    }

    return (
        <div className={Styles?.modal + ' ' + (closeModal ? Styles?.close : '')}>

            <button className={Styles?.modal__close} onClick={closeModalDetail}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </button>

            <div>
                <div className={Styles?.modal__card}>
                    <CardsCategories
                        title={'Transformación digital'}
                        description={''}
                        variant='modal'
                        summary={'Se destacarán las empresas que adoptaron las tecnologías 4.0 con el objetivo de ser sostenibles, estables, incrementar su productividad y competitividad, mediante la mejora continua de sus productos y/o servicios, los cuales responden de manera ágil, efectiva y personalizada a las necesidades del mercado.'}
                        image={{
                            source: '',
                            alt: '',
                            title: ''
                        }}
                        icon={{
                            source: '',
                            alt: '',
                            title: ''
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ModalDetails

