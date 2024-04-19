import arrayDestructuring from './arrayDestructuring'

const IMAGES = JSON.parse(process.env.IMAGES || '{}')
/**
 * Get the image from the string or array
 * @param url - The image url
 * @returns The image url
 */
const getImage = (url: string | Array<any>): string => {
  if (!url) {
    return ''
  }
  // Get the image from string
  if (typeof url === 'string') {
    return `${IMAGES?.FOLDER_OF_IMAGES ?? '/'}${url?.replace('public://', '')}`
  }
  // Get the image from the images array
  return `${IMAGES?.FOLDER_OF_IMAGES}${arrayDestructuring(url, '')?.replace(
    'public://',
    ''
  )}`
}

export default getImage
