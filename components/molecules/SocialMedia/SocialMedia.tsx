import React from 'react'
import styles from '@styles/scss/molecules/socialMedia.module.scss'
import Link from 'next/link'

const SocialMedia = () => {
  return (
    <ul className={styles?.socialmedia}>
      <li>
        <Link href={'https://twitter.com/portafolioco'} passHref>
          <a
            className={styles?.socialmedia__icon}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30px'
              height='27px'
              viewBox='0 0 33 30'
              version='1.1'
            >
              <g id='surface1'>
                <path d='M 25.988281 0.0078125 L 31.050781 0.0078125 L 19.996094 12.707031 L 33 29.992188 L 22.816406 29.992188 L 14.839844 19.511719 L 5.714844 29.992188 L 0.652344 29.992188 L 12.476562 16.40625 L 0 0.0078125 L 10.441406 0.0078125 L 17.652344 9.589844 Z M 24.214844 26.949219 L 27.015625 26.949219 L 8.917969 2.890625 L 5.910156 2.890625 Z M 24.214844 26.949219 ' />
              </g>
            </svg>
          </a>
        </Link>
      </li>
      <li>
        <Link href={'https://www.linkedin.com/company/portafolio-co'} passHref>
          <a
            className={styles?.socialmedia__icon}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 26 26'
              width='30px'
              height='30px'
            >
              <path d='M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z' />
            </svg>
          </a>
        </Link>
      </li>
      <li>
        <Link href={'https://www.linkedin.com/company/portafolio-co'} passHref>
          <a
            className={styles?.socialmedia__icon}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='38.8'
              height='27.117'
              viewBox='0 0 38.8 27.117'
              className='youtube'
            >
              <path
                id='Icon_simple-youtube'
                data-name='Icon simple-youtube'
                d='M38,9.611A4.863,4.863,0,0,0,34.62,6.234c-3.024-.81-15.2-.81-15.2-.81s-12.141-.016-15.2.81A4.863,4.863,0,0,0,.852,9.611,50.535,50.535,0,0,0,.008,19a50.535,50.535,0,0,0,.844,9.353,4.863,4.863,0,0,0,3.377,3.377c3.021.812,15.2.812,15.2.812s12.139,0,15.2-.812A4.863,4.863,0,0,0,38,28.352,50.535,50.535,0,0,0,38.806,19,50.535,50.535,0,0,0,38,9.611ZM15.54,24.807V13.174L25.67,19Z'
                transform='translate(-0.007 -5.424)'
              />
            </svg>
          </a>
        </Link>
      </li>
      <li>
        <Link passHref href='https://facebook.com/portafolioco'>
          <a
            className={styles?.socialmedia__icon}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='30px'
              height='30px'
            >
              <path d='M18.7,0H5.3C2.4,0,0,2.4,0,5.3v13.3C0,21.6,2.4,24,5.3,24h7.5v-9.3H9.7v-3.6h3.1V8.4c0-3.1,1.9-4.8,4.7-4.8 c0.9,0,1.9,0,2.8,0.1V7h-1.9c-1.5,0-1.8,0.7-1.8,1.8v2.3h3.6l-0.5,3.6h-3.2V24h2.1c2.9,0,5.3-2.4,5.3-5.3V5.3C24,2.4,21.6,0,18.7,0z' />
            </svg>
          </a>
        </Link>
      </li>
      <li>
        <Link href='https://instagram.com/portafolioco' passHref>
          <a
            className={styles?.socialmedia__icon}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='30px'
              height='30px'
            >
              <path d='M14.5,0C6.5,0,0,6.5,0,14.5v18.9C0,41.5,6.5,48,14.5,48h18.9c8,0,14.5-6.5,14.5-14.5V14.5C48,6.5,41.5,0,33.5,0H14.5z M14.5,3.8h18.9c6,0,10.7,4.8,10.7,10.7v18.9c0,6-4.8,10.7-10.7,10.7H14.5c-6,0-10.7-4.8-10.7-10.7V14.5C3.8,8.6,8.6,3.8,14.5,3.8z M36.6,8.8c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5S38,8.8,36.6,8.8z M24,11.4c-7,0-12.6,5.7-12.6,12.6 S17,36.6,24,36.6S36.6,31,36.6,24S31,11.4,24,11.4z M24,15.2c4.9,0,8.8,3.9,8.8,8.8s-3.9,8.8-8.8,8.8s-8.8-3.9-8.8-8.8 S19.1,15.2,24,15.2z' />
            </svg>
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default SocialMedia
