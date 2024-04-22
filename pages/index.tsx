import getLandingPage from '@actions/getLandingPage'
import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import { CategoryCard } from '@models/categories.model'
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
  categoriesData: CategoryCard[]
  contactUsData: ContactUsSectionModel
  morePortafolioData: MorePortafolioSectionModel
}> = (props) => {
  return (
    <>
      <BtnFloat />
      {/* <CategoriesSection categories={categories} /> */}
      <CategoriesSection categories={props.categoriesData} />
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
  const categoriesData: CategoryCard[] = [
    {
      title: 'Category 1',
      description: 'This is category 1',
      image: 'category1.jpg',
      icon: '/img/vercel.svg',
      category: 'export',
      types: ['type1', 'type2', 'type3'],
    },
    {
      title: 'Category 2',
      description: 'This is category 2',
      image: 'category2.jpg',
      icon: 'icon1.jpg',
      category: 'environment',
      types: ['type1', 'type2', 'type3'],
    },
    {
      title: 'Category 3',
      description: 'This is category 3',
      image: 'category3.jpg',
      icon: 'icon1.jpg',
      category: 'client',
      types: ['type1', 'type2', 'type3'],
    },
  ]

  return {
    props: {
      pageData,
      categoriesData,
      contactUsData,
      morePortafolioData,
    },
  }
}

export default Home
