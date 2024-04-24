import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import { CategorySectionModel } from '@models/categories.model'
import { ContactUsSectionModel } from '@models/contactUs.model'
import { GallerySectionModel } from '@models/gallery.model'
import { MainBanneSectionModel } from '@models/mainBanner.model'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import { WinnerSectionModel } from '@models/winner.model'
import MainBanner from '@molecules/MainBanner/MainBanner'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import ContactUsSection from '@organisms/ContactUsSection/ContactUsSection'
import GallerySection from '@organisms/GallerySection/GallerySection'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'
import WinnersSection from '@organisms/WinnersSection/WinnersSection'
import CategorySectionDTO from '@utils/DTO/CategorySectionDTO'
import ContactUsSectionDTO from '@utils/DTO/ContactUsSectionDTO'
import GallerySectionDTO from '@utils/DTO/GallerySectionDTO'
import LandingPageDTO from '@utils/DTO/LandingPageDTO'
import MainBannerDTO from '@utils/DTO/MainBannerDTO'
import MorePortafolioSectionDTO from '@utils/DTO/MorePortafolioSectionDTO'
import { WinnerSectionDTO } from '@utils/DTO/WinnerSectionDTO'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage<{
  pageData: any
  mainBannerData: MainBanneSectionModel
  categoriesData: CategorySectionModel
  winnersData: WinnerSectionModel
  galleryData: GallerySectionModel
  contactUsData: ContactUsSectionModel
  morePortafolioData: MorePortafolioSectionModel
}> = (props) => {
  return (
    <>
      <BtnFloat />
      <MainBanner data={props.mainBannerData} />
      <CategoriesSection data={props.categoriesData} />
      <WinnersSection data={props.winnersData} />
      <GallerySection data={props.galleryData} />
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
  const mainBannerData = MainBannerDTO(pageData?.mainBanner)
  const categoriesData = CategorySectionDTO(pageData?.categoriesSection)
  const winnersData = WinnerSectionDTO(pageData?.winnersSection)
  const galleryData = GallerySectionDTO(pageData?.gallerySection)
  const contactUsData = ContactUsSectionDTO(pageData?.contactBanner)
  const morePortafolioData = MorePortafolioSectionDTO(
    pageData?.seeMorePortafolio
  )

  return {
    props: {
      pageData,
      mainBannerData,
      categoriesData,
      winnersData,
      galleryData,
      contactUsData,
      morePortafolioData,
    },
  }
}

export default Home
