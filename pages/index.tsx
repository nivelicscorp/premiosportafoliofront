import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import { BestMomentsSectionModel } from '@models/bestMoments.model'
import { CategorySectionModel } from '@models/categories.model'
import { ContactUsSectionModel } from '@models/contactUs.model'
import { FloatButtonModel } from '@models/floatButton.model'
import { GallerySectionModel } from '@models/gallery.model'
import { JuriesSectionModel } from '@models/juries.model'
import { MainBanneSectionModel } from '@models/mainBanner.model'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import { WinnerSectionModel } from '@models/winner.model'
import MainBanner from '@molecules/MainBanner/MainBanner'
import BestMomentsSection from '@organisms/BestMomentsSection/BestMomentsSection'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import ContactUsSection from '@organisms/ContactUsSection/ContactUsSection'
import GallerySection from '@organisms/GallerySection/GallerySection'
import JudgesSection from '@organisms/JudgesSection/JudgesSection'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'
import WinnersSection from '@organisms/WinnersSection/WinnersSection'
import BestMomentSectionDTO from '@utils/DTO/BestMomentSectionDTO'
import CategorySectionDTO from '@utils/DTO/CategorySectionDTO'
import ContactUsSectionDTO from '@utils/DTO/ContactUsSectionDTO'
import GallerySectionDTO from '@utils/DTO/GallerySectionDTO'
import JuriesSectionDTO from '@utils/DTO/JuriesSectionDTO'
import LandingPageDTO from '@utils/DTO/LandingPageDTO'
import MainBannerDTO from '@utils/DTO/MainBannerDTO'
import MorePortafolioSectionDTO from '@utils/DTO/MorePortafolioSectionDTO'
import { WinnerSectionDTO } from '@utils/DTO/WinnerSectionDTO'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
const Home: NextPage<{
  floatButton: FloatButtonModel | null
  mainBannerData: MainBanneSectionModel | null
  categoriesData: CategorySectionModel | null
  juriesData: JuriesSectionModel | null
  bestMomentsData: BestMomentsSectionModel | null
  winnersData: WinnerSectionModel | null
  galleryData: GallerySectionModel | null
  contactUsData: ContactUsSectionModel | null
  morePortafolioData: MorePortafolioSectionModel | null
}> = (props) => {
  /**
   * Save the data in the sessionStorage to avoid flickering inside app.tsx
   */
  useEffect(() => {
    sessionStorage.setItem('bannerData', JSON.stringify(props.mainBannerData))
    sessionStorage.setItem(
      'portafolioData',
      JSON.stringify(props.morePortafolioData)
    )
  }, [props.mainBannerData, props.morePortafolioData])

  return (
    <>
      {props.floatButton?.active && <BtnFloat data={props.floatButton} />}
      {props.mainBannerData && <MainBanner data={props.mainBannerData} />}
      {props.categoriesData && (
        <CategoriesSection
          data={props.categoriesData}
          activeRegister={props.floatButton?.active ?? false}
        />
      )}
      {props.juriesData && <JudgesSection data={props.juriesData} />}
      {props.bestMomentsData && (
        <BestMomentsSection data={props.bestMomentsData} />
      )}
      {props.winnersData && <WinnersSection data={props.winnersData} />}
      {props.galleryData && <GallerySection data={props.galleryData} />}
      {props.contactUsData && (
        <ContactUsSection
          data={props.contactUsData}
          activeRegister={props.floatButton?.active ?? false}
        />
      )}
      {props.morePortafolioData && (
        <MorePortafolioSection data={props.morePortafolioData} />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [landingPageData, floatButton] = await getLandingPage()
  const pageData = LandingPageDTO(landingPageData)
  const mainBannerData = MainBannerDTO(pageData?.mainBanner)
  const categoriesData = CategorySectionDTO(pageData?.categoriesSection)
  const bestMomentsData = BestMomentSectionDTO(pageData?.ceremoniesBanner)
  const juriesData = JuriesSectionDTO(pageData?.juriesSection)
  const winnersData = WinnerSectionDTO(pageData?.winnersSection)
  const galleryData = GallerySectionDTO(pageData?.gallerySection)
  const contactUsData = ContactUsSectionDTO(pageData?.contactBanner)
  const morePortafolioData = MorePortafolioSectionDTO(
    pageData?.seeMorePortafolio
  )

  return {
    props: {
      floatButton,
      mainBannerData,
      juriesData,
      categoriesData,
      bestMomentsData,
      winnersData,
      galleryData,
      contactUsData,
      morePortafolioData,
    },
  }
}

export default Home
