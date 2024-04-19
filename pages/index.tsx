import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'
import LandingPageDTO from '@utils/DTO/LandingPageDTO'
import MorePortafolioSectionDTO from '@utils/DTO/MorePortafolioSectionDTO'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage<{
  pageData: any
  morePortafolioData: MorePortafolioSectionModel
}> = (props) => {
  return (
    <>
      <BtnFloat />
      {/* <CategoriesSection categories={categories} /> */}
      <MorePortafolioSection data={props.morePortafolioData} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageData = LandingPageDTO(await getLandingPage())
  const morePortafolioData = MorePortafolioSectionDTO(
    pageData.seeMorePortafolio
  )
  return {
    props: {
      pageData,
      morePortafolioData,
    },
  }
}

export default Home
