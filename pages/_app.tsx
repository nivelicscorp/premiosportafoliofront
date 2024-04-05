import BasicMainBanner from '@molecules/BasicMainBanner/BasicMainBanner'
import '@styles/globals.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Premios portafolio 2024 | Portafolio</title>
        <meta
          name='description'
          content='
Los Premios Portafolio 2024 ya están aquí! Celebramos la excelencia en diversos campos, desde los negocios y la economía hasta la cultura y el medio ambiente.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BasicMainBanner />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
