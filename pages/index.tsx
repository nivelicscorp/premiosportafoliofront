import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '@styles/Home.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href='/registro' passHref>
            <a className={styles.card}>
              <h2>Registro &rarr;</h2>
              <p>Prueba de ruta del registro</p>
            </a>
          </Link>

          <Link href='/usuario' passHref>
            <a className={styles.card}>
              <h2>Dashboard &rarr;</h2>
              <p>Prueba de ruta a la zona de usuario</p>
            </a>
          </Link>

          <Link href='/test-page' passHref>
            <a className={styles.card}>
              <h2>Test page &rarr;</h2>
              <p>Prueba de ruta a la pagina de pruebas</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
