import BasicMainBanner from '@molecules/BasicMainBanner/BasicMainBanner'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <BasicMainBanner />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
