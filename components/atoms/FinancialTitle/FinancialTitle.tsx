import React, { ReactNode } from 'react'
import styles from '@styles/scss/atoms/financialTitle.module.scss'

interface finantial {
  children: ReactNode
}

export const FinancialTitle = ({ children }: finantial) => {
  return (
    <div className={styles?.financialTitle}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18.8'
        height='21.485'
        viewBox='0 0 18.8 21.485'
      >
        <path
          id='Icon_awesome-calendar-day'
          data-name='Icon awesome-calendar-day'
          d='M0,19.471a2.015,2.015,0,0,0,2.014,2.014H16.786A2.015,2.015,0,0,0,18.8,19.471V8.057H0Zm2.686-8.057a.673.673,0,0,1,.671-.671H7.386a.673.673,0,0,1,.671.671v4.029a.673.673,0,0,1-.671.671H3.357a.673.673,0,0,1-.671-.671Zm14.1-8.728H14.771V.671A.673.673,0,0,0,14.1,0H12.757a.673.673,0,0,0-.671.671V2.686H6.714V.671A.673.673,0,0,0,6.043,0H4.7a.673.673,0,0,0-.671.671V2.686H2.014A2.015,2.015,0,0,0,0,4.7V6.714H18.8V4.7A2.015,2.015,0,0,0,16.786,2.686Z'
          fill='#fff'
        />
      </svg>
      <h3 className='FinancialTitle'>{children}</h3>
    </div>
  )
}
