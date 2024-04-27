import { GetServerSideProps, NextPage } from 'next'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import getLandingPage from '@actions/getLandingPage'
import RegistryPageDTO from '@utils/DTO/RegistryPageDTO'
import MainBannerDTO from '@utils/DTO/MainBannerDTO'
import MorePortafolioSectionDTO from '@utils/DTO/MorePortafolioSectionDTO'
import MainBanner from '@molecules/MainBanner/MainBanner'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import { MainBanneSectionModel } from '@models/mainBanner.model'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'

const UserPage: NextPage<{
  mainBannerData: MainBanneSectionModel | null
  morePortafolioData: MorePortafolioSectionModel | null
}> = (props) => {
  const userData = {
    name: 'John Doe',
    token: '1234567890',
  }
  const router = useRouter()
  setCookie('userData', JSON.stringify(userData))

  const deleteCookieUser = () => {
    deleteCookie('userData')
    router.push('/')
  }

  return (
    <>
      {props.mainBannerData && <MainBanner data={props.mainBannerData} />}
      <h1>Registro works</h1>
      <button onClick={() => deleteCookieUser()}>Logout</button>
      <Link href='/'>Volver</Link>
      {props.morePortafolioData && (
        <MorePortafolioSection data={props.morePortafolioData} />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const [landingPageData, floatButton] = await getLandingPage()
  const pageData = RegistryPageDTO(landingPageData)
  const mainBannerData = MainBannerDTO(pageData?.mainBanner)
  const morePortafolioData = MorePortafolioSectionDTO(
    pageData?.seeMorePortafolio
  )
  return {
    props: {
      mainBannerData,
      morePortafolioData,
    },
  }
}

export default UserPage
