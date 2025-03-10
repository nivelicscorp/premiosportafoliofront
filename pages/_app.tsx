import 'styles.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import MainBanner from '@molecules/MainBanner/MainBanner'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title> Premios portafolio 2024 | Portafolio </title>
        <meta
          name='description'
          content='Los Premios Portafolio 2024 ya están aquí! Celebramos la excelencia en diversos campos, desde los negocios y la economía hasta la cultura y el medio ambiente.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
