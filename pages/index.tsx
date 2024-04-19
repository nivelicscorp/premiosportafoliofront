import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'
import LandingPageDTO from '@utils/DTO/LandingPageDTO'
import MorePortafolioSectionDTO from '@utils/DTO/MorePortafolioSectionDTO'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage<{ pageData: any[] }> = (props) => {
  const parsedData = LandingPageDTO(props.pageData)
  console.log('🚀 ~ parsedData:', parsedData)
  return (
    <>
      <BtnFloat />
      {/* <CategoriesSection categories={categories} /> */}
      <MorePortafolioSection
        data={MorePortafolioSectionDTO(parsedData.seeMorePortafolio)}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageData = await getLandingPage()
  return {
    props: {
      pageData,
    },
  }
}

export default Home
