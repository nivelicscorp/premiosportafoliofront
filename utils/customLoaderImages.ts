/**
 * Custom loader for images
 */
export const myLoader = ({ src, width, height, quality }: any) => {
  return `${src}?w=${width}&h=${height}&q=${quality || 75}`
}
