import Image from 'next/image'
import React from 'react'

import styles from '@styles/scss/molecules/cards/cards-categories.module.scss'
import { CategoryCardModel } from '@models/categories.model'
import { myLoader } from '@utils/customLoaderImages'
import checkCategoryCard from '@utils/checkCategoryCard'
import Link from 'next/link'

interface Props extends CategoryCardModel {
  emitSelection: (category: CategoryCardModel) => void
}

const CardsCategories = ({
  title,
  description,
  summary,
  image,
  icon,
  variant,
  emitSelection,
}: Props) => {
  return (
    <div
      className={styles?.cardCategories + ' ' + (variant ? styles?.modal : '')}
    >
      {variant ? (
        <div
          className={
            styles?.cardCategories__imgModal + ' ' + checkCategoryCard(title)
          }
        >
          <Image
            loader={myLoader}
            src={image?.source}
            alt={image?.alt}
            title={image?.title}
            height={147}
            width={142}
          />
        </div>
      ) : (
        ''
      )}
      <div
        className={styles?.cardCategories__top + ' ' + checkCategoryCard(title)}
      >
        <div className={styles?.cardCategories__top__image}>
          <Image
            loader={myLoader}
            src={icon?.source}
            alt={icon?.alt}
            title={icon?.title}
            height={70}
            width={65}
          />
        </div>
        <h3 className={styles?.cardCategories__top__title}>{title}</h3>
        <svg
          className={styles?.colorCategory}
          xmlns='http://www.w3.org/2000/svg'
          width='314'
          height='22'
          viewBox='0 0 314 22'
        >
          <linearGradient
            id='linear-gradient'
            x1='0.601'
            y1='0.601'
            x2='0.429'
            y2='0.461'
            gradientUnits='objectBoundingBox'
          >
            <stop offset='0' stop-color='#666' />
            <stop offset='0.095' stop-color='#888' />
            <stop offset='0.232' stop-color='#d5d5d5' />
            <stop offset='0.552' stop-color='#797979' />
            <stop offset='0.804' stop-color='#d5d5d5' />
            <stop offset='1' stop-color='#d5d5d5' />
          </linearGradient>
          <g
            id='Enmascarar_grupo_62315'
            data-name='Enmascarar grupo 62315'
            transform='translate(-616.597 -185.15)'
            clip-path='url(#clip-path)'
          >
            <path
              d='M0,0,677.342,67.079,1806.333,178.887H0Z'
              transform='matrix(0.998, -0.07, 0.07, 0.998, -150, 172.696)'
              fill='url(#linear-gradient)'
            />
            <path
              className={styles?.category}
              d='M0,0,1806.333,160.288H0Z'
              transform='matrix(0.998, -0.07, 0.07, 0.998, -150, 184.639)'
              fill='#0c95ae'
            />
          </g>
        </svg>
      </div>
      <div
        className={styles?.cardCategories__detail}
        dangerouslySetInnerHTML={{ __html: variant ? description : summary }}
      />
      {variant ? (
        <Link href={'/registro'} passHref>
          <a className={styles?.cardCategories__postulate}>
            Postular
            <svg
              id='a'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 33.9 40'
              width={20}
              height={20}
            >
              <path
                fill='#fff'
                d='m13.28,0c.36,0,.73,0,1.09,0,.04.02.09.06.13.07,1.93.4,3.24,1.87,3.32,3.84.06,1.38.02,2.76.02,4.14,0,.15,0,.3,0,.47,2.15-.52,3.76.15,4.89,1.96,2.27-.95,4.6.05,5.54,2.18.82-.31,1.65-.41,2.51-.19,1.85.47,3.09,2.08,3.1,4.05.01,2.69-.02,5.39.01,8.08.02,1.48-.15,2.93-.44,4.38-.67,3.33-1.65,6.57-2.64,9.82-.18.61-.54,1.02-1.15,1.21H11.87c-.58-.2-.9-.65-1.15-1.19-1.19-2.59-2.52-5.1-4.11-7.47-1.09-1.63-2.17-3.28-3.2-4.94-.97-1.57-1.93-3.15-2.82-4.76-.53-.96-.74-2.04-.48-3.13.57-2.37,3.4-3.6,5.57-2.49.71.36,1.23.9,1.73,1.48.75.87,1.52,1.74,2.35,2.69v-.52c0-3.62,0-7.24,0-10.85,0-1.55,0-3.1,0-4.65,0-1.31.51-2.39,1.52-3.24.58-.49,1.27-.73,1.99-.92Zm-.78,13.95c0,3.22,0,6.43-.01,9.65,0,.36-.1.77-.3,1.05-.52.74-1.52.7-2.18-.05-1.6-1.82-3.19-3.64-4.78-5.47-.14-.16-.27-.32-.42-.46-.43-.39-1.11-.45-1.59-.13-.43.28-.58.74-.37,1.35.13.38.28.76.49,1.1.89,1.5,1.79,2.99,2.72,4.46,2.42,3.79,5.04,7.46,6.88,11.6.05.11.28.21.42.21,4.92.01,9.84,0,14.76.01.26,0,.35-.08.42-.33.6-2.18,1.23-4.35,1.8-6.54.41-1.57.8-3.16.81-4.8.03-3.01.01-6.01,0-9.02,0-.19-.02-.39-.07-.58-.16-.57-.71-.96-1.29-.93-.59.03-1.1.46-1.2,1.04-.04.2-.04.41-.04.62,0,1.21.01,2.42-.01,3.63-.02.93-.79,1.52-1.66,1.33-.66-.14-1.06-.71-1.06-1.53,0-1.89,0-3.78,0-5.66,0-.18,0-.37-.02-.55-.06-.53-.47-.97-.98-1.09-.84-.2-1.59.42-1.6,1.34-.01,1.43,0,2.86,0,4.3,0,.71-.41,1.25-1.02,1.4-.9.22-1.7-.41-1.7-1.37-.01-2,0-4.01,0-6.01,0-.87-.52-1.46-1.28-1.47-.78-.01-1.32.57-1.33,1.46,0,1.31,0,2.63,0,3.94,0,.18,0,.37-.03.55-.09.65-.62,1.13-1.27,1.17-.6.04-1.2-.37-1.36-.96-.06-.23-.07-.49-.07-.73,0-4.01,0-8.02,0-12.03,0-.18,0-.37-.03-.55-.09-.69-.62-1.18-1.28-1.18-.65,0-1.21.5-1.3,1.17-.02.15-.02.31-.02.47,0,3.19,0,6.38,0,9.57Z'
              />
            </svg>
          </a>
        </Link>
      ) : (
        <button
          className={styles?.cardCategories__seeMore}
          onClick={() =>
            emitSelection({ title, description, summary, image, icon })
          }
        >
          {' '}
          SABER MÁS{' '}
        </button>
      )}
    </div>
  )
}

export default CardsCategories
