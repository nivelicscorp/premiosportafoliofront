import arrayDestructuring from '@utils/arrayDestructuring'

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
  const mainBanner = getMainBanner(pageData)
  const categoriesSection = getCategoriesSection(pageData)
  const juriesSection = getJuriesSection(pageData)
  const ceremoniesBanner = getCeremoniesBanner(pageData)
  const winnersSection = getWinnersSection(pageData)
  const gallerySection = getGallerySection(pageData)
  const contactBanner = getContactBanner(pageData)
  const seeMorePortafolio = getSeeMorePortafolio(pageData)
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

/**
 * Retrieves the main banner data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The main banner data.
 */
const getMainBanner = (pageData: PageData[]): any => {
  return pageData.find((item: any) => item.type === 'banner_compuesto')?.data
}

/**
 * Retrieves the categories section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The categories section data.
 */
const getCategoriesSection = (pageData: PageData[]): any => {
  return pageData.find((item: any) => item.type === 'carrusel_de_cards')?.data
}

/**
 * Retrieves the juries section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The juries section data.
 */
const getJuriesSection = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      item.type === 'carrusel_de_personajes' &&
      arrayDestructuring(item.data?.field_tipo_de_visualizacion, '') ===
        'square'
  )?.data
}

/**
 * Retrieves the ceremonies banner data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The ceremonies banner data.
 */
const getCeremoniesBanner = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      item.type === 'banner_intermedio' &&
      arrayDestructuring(item.data?.texto_botones, false) !== false
  )?.data
}

/**
 * Retrieves the winners section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The winners section data.
 */
const getWinnersSection = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      item.type === 'carrusel_de_personajes' &&
      arrayDestructuring(item.data?.field_tipo_de_visualizacion, '') ===
        'circle'
  )?.data
}

/**
 * Retrieves the gallery section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The gallery section data.
 */
const getGallerySection = (pageData: PageData[]): any => {
  return pageData.find((item: any) => item.type === 'carrusel_multimedia')?.data
}

/**
 * Retrieves the contact banner data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The contact banner data.
 */
const getContactBanner = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      item.type === 'banner_intermedio' &&
      arrayDestructuring(item.data?.texto_botones, false) === false
  )?.data
}

/**
 * Retrieves the "See More Portafolio" data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The "See More Portafolio" data.
 */
const getSeeMorePortafolio = (pageData: PageData[]): any => {
  return pageData.find((item: any) => item.type === 'bloque_mas_de_portafolio')
    ?.data
}

export default LandingPageDTO