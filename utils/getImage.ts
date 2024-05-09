const IMAGES = JSON.parse(process.env.IMAGES || '{}')
/**
 * Get the image from the string or array
 * @param url - The image url
 * @returns The image url
 */
const getImage = (
  url: string,
  width: number = 0,
  heigth: number = 0
): string => {
  if (!url) {
    return ''
  }
  // Get the image WITHOUT crop
  if (width === 0 || heigth === 0) {
    return `${IMAGES?.FOLDER_OF_IMAGES ?? '/'}${url
      ?.replace('public://', '')
      .replace('sites/premios-portafolio/files/', '')}`
  }
  // Get the image from string WITH crop
  return `${
    IMAGES?.FOLDER_OF_IMAGES ?? '/'
  }/styles/${width}x${heigth}/public${url
    ?.replace('public://', '')
    .replace('sites/premios-portafolio/files/', '')}`
}

export default getImage
