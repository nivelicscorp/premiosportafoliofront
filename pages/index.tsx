import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import { CategoryCard } from '@models/categories.model'
import { ContactUsSectionModel } from '@models/contactUs.model'
import { GallerySectionModel } from '@models/gallery.model'
import { MainBanneSectionModel } from '@models/mainBanner.model'
import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import MainBanner from '@molecules/MainBanner/MainBanner'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import ContactUsSection from '@organisms/ContactUsSection/ContactUsSection'
import GallerySection from '@organisms/GallerySection/GallerySection'
import MorePortafolioSection from '@organisms/MorePortafolioSection/MorePortafolioSection'
import ContactUsSectionDTO from '@utils/DTO/ContactUsSectionDTO'
import GallerySectionDTO from '@utils/DTO/GallerySectionDTO'
import LandingPageDTO from '@utils/DTO/LandingPageDTO'
import MainBannerDTO from '@utils/DTO/MainBannerDTO'
import MorePortafolioSectionDTO from '@utils/DTO/MorePortafolioSectionDTO'
import getImage from '@utils/getImage'
import type { GetServerSideProps, NextPage } from 'next'
const Home: NextPage<{
  pageData: any
  mainBannerData: MainBanneSectionModel
  categoriesData: CategoryCard[]
  galleryData: GallerySectionModel
  contactUsData: ContactUsSectionModel
  morePortafolioData: MorePortafolioSectionModel
}> = (props) => {
  return (
    <>
      <BtnFloat />
      {props.mainBannerData && <MainBanner banner={props.mainBannerData} />}
      {/* <CategoriesSection categories={categories} /> */}
      {props.categoriesData && (
        <CategoriesSection categories={props.categoriesData} />
      )}
      {props.galleryData && <GallerySection data={props.galleryData} />}
      {props.contactUsData && <ContactUsSection data={props.contactUsData} />}
      {props.morePortafolioData && (
        <MorePortafolioSection data={props.morePortafolioData} />
      )}
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
  const galleryData = GallerySectionDTO(pageData?.gallerySection)
  const contactUsData = ContactUsSectionDTO(pageData?.contactBanner)
  const morePortafolioData = MorePortafolioSectionDTO(
    pageData?.seeMorePortafolio
  )
  const categoriesData: CategoryCard[] = [
    {
      title: 'Category 1',
      description: 'This is category 1',
      image: 'category1.jpg',
      icon: getImage('/sites/premios-portafolio/files/2024-04/equipo_0.png'),
      category: 'export',
      types: ['type1', 'type2', 'type3'],
    },
    {
      title: 'Category 2',
      description: 'This is category 2',
      image: getImage('/sites/premios-portafolio/files/2024-04/equipo_0.png'),
      icon: getImage('/sites/premios-portafolio/files/2024-04/equipo_0.png'),
      category: 'environment',
      types: ['type1', 'type2', 'type3'],
    },
    {
      title: 'Category 3',
      description: 'This is category 3',
      image: getImage('/sites/premios-portafolio/files/2024-04/equipo_0.png'),
      icon: getImage('/sites/premios-portafolio/files/2024-04/equipo_0.png'),
      category: 'client',
      types: ['type1', 'type2', 'type3'],
    },
  ]

  return {
    props: {
      pageData,
      mainBannerData,
      categoriesData,
      contactUsData,
      morePortafolioData,
      galleryData,
    },
  }
}

export default Home
