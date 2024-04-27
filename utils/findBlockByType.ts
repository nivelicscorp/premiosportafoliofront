import { PageData } from '@models/landingPage.model'
import arrayDestructuring from './arrayDestructuring'

/**
 * Retrieves the main banner data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The main banner data.
 */
export const getMainBanner = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') === 'banner_compuesto'
  )
}

/**
 * Retrieves the categories section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The categories section data.
 */
export const getCategoriesSection = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') === 'carrusel_de_cards'
  )
}

/**
 * Retrieves the juries section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The juries section data.
 */
export const getJuriesSection = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') ===
        'carrusel_de_personajes' &&
      arrayDestructuring(item.field_tipo_de_visualizacion, '') === 'square'
  )
}

/**
 * Retrieves the ceremonies banner data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The ceremonies banner data.
 */
export const getCeremoniesBanner = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') === 'banner_intermedio' &&
      arrayDestructuring(item?.texto_botones, false) !== false
  )
}

/**
 * Retrieves the winners section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The winners section data.
 */
export const getWinnersSection = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') ===
        'carrusel_de_personajes' &&
      arrayDestructuring(item.field_tipo_de_visualizacion, '') === 'circle'
  )
}

/**
 * Retrieves the gallery section data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The gallery section data.
 */
export const getGallerySection = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') === 'carrusel_multimedia'
  )
}

/**
 * Retrieves the contact banner data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The contact banner data.
 */
export const getContactBanner = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') === 'banner_intermedio' &&
      arrayDestructuring(item.texto_botones, false) === false
  )
}

/**
 * Retrieves the "See More Portafolio" data from the pageData.
 * @param pageData - The data from the landing page.
 * @returns - The "See More Portafolio" data.
 */
export const getSeeMorePortafolio = (pageData: PageData[]): any => {
  return pageData.find(
    (item: any) =>
      arrayDestructuring(item.component_type, '') === 'bloque_mas_de_portafolio'
  )
}
