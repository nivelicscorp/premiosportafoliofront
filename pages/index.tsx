import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import { ContactUsSectionModel } from '@models/contactUs.model'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import ContactUsSection from '@organisms/ContactUsSection/ContactUsSection'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'
import ContactUsSectionDTO from '@utils/DTO/ContactUsSectionDTO'
import LandingPageDTO from '@utils/DTO/LandingPageDTO'
import MorePortafolioSectionDTO from '@utils/DTO/MorePortafolioSectionDTO'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage<{
  pageData: any
  contactUsData: ContactUsSectionModel
  morePortafolioData: MorePortafolioSectionModel
}> = (props) => {
  return (
    <>
      <BtnFloat />
      {/* <CategoriesSection categories={categories} /> */}
      <ContactUsSection data={props.contactUsData} />
      <MorePortafolioSection data={props.morePortafolioData} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pageData = LandingPageDTO(await getLandingPage())
  console.log(
    '🚀 ~ constgetServerSideProps:GetServerSideProps= ~ pageData:',
    pageData
  )
  const contactUsData = ContactUsSectionDTO(pageData?.contactBanner)
  const morePortafolioData = MorePortafolioSectionDTO(
    pageData?.seeMorePortafolio
  )

  return {
    props: {
      pageData,
      contactUsData,
      morePortafolioData,
    },
  }
}

export default Home
