import 'styles.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import MainBanner from '@molecules/MainBanner/MainBanner'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'
import Header from '@molecules/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [mainBannerData, setMainBannerData] = useState<any>(null)
  const [morePortafolioData, setMorePortafolioData] = useState<any>(null)
  const [cookieValue, setCookieValue] = useState<any>(null)
  /**
   * UseEffect to get the data from the sessionStorage and avoid the flickering
   * Keeping the state from MainBanner and MorePortafolioSection to
   * simulate the data fetching from the backend and have a cache for session
   *
   * Always check the cookie value to know if the user is logged in
   *
   * Added the exception to main page to refresh the data each time user visit
   * the landingPage
   */
  useEffect(() => {
    if (
      sessionStorage.getItem('bannerData') != JSON.stringify(mainBannerData)
    ) {
      setMainBannerData(
        JSON.parse(sessionStorage.getItem('bannerData') || 'null')
      )
    }
    if (
      sessionStorage.getItem('portafolioData') !=
      JSON.stringify(morePortafolioData)
    ) {
      setMorePortafolioData(
        JSON.parse(sessionStorage.getItem('portafolioData') || 'null')
      )
    }
    setCookieValue(JSON.parse(getCookie('user-data') ?? '{}'))
  }, [router.pathname])

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
        {cookieValue?.iv && <Header />}
        {mainBannerData && router.pathname !== '/' && (
          <MainBanner data={mainBannerData} />
        )}
        <Component {...pageProps} />
        {morePortafolioData && router.pathname !== '/' && (
          <MorePortafolioSection data={morePortafolioData} />
        )}
      </main>
    </div>
  )
}

export default MyApp
