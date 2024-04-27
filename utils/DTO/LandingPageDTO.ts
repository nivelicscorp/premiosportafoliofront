import { PageData } from '@models/landingPage.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import {
  getCategoriesSection,
  getCeremoniesBanner,
  getContactBanner,
  getGallerySection,
  getJuriesSection,
  getMainBanner,
  getSeeMorePortafolio,
  getWinnersSection,
} from '@utils/findBlockByType'

/**
 * Represents the data structure for the Landing Page.
 */
interface LandingPageDTO {
  mainBanner: any
  categoriesSection: any
  juriesSection: any
  ceremoniesBanner: any
  winnersSection: any
  gallerySection: any
  contactBanner: any
  seeMorePortafolio: any
}

/**
 * Takes the pageData and returns the DTO for the LandingPage with just the data for each section.
 * @param pageData - The data from the landing page.
 * @returns - The DTO for the LandingPage.
 */
const LandingPageDTO = (pageData: PageData[]): LandingPageDTO => {
  const mainBanner = getMainBanner(pageData) ?? null
  const categoriesSection = getCategoriesSection(pageData) ?? null
  const juriesSection = getJuriesSection(pageData) ?? null
  const ceremoniesBanner = getCeremoniesBanner(pageData) ?? null
  const winnersSection = getWinnersSection(pageData) ?? null
  const gallerySection = getGallerySection(pageData) ?? null
  const contactBanner = getContactBanner(pageData) ?? null
  const seeMorePortafolio = getSeeMorePortafolio(pageData) ?? null

  return {
    mainBanner,
    categoriesSection,
    juriesSection,
    ceremoniesBanner,
    winnersSection,
    gallerySection,
    contactBanner,
    seeMorePortafolio,
  }
}

export default LandingPageDTO
