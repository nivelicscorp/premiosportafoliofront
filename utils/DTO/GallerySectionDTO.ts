import { GalleryCardModel, GallerySectionModel } from '@models/gallery.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import getImage from '@utils/getImage'

const GallerySectionDTO = (sectionData: any): GallerySectionModel => {
  let indexImages = 0
  let indexVideos = 0
  const parsedCards: GalleryCardModel[] = []
  sectionData?.multimedia_tipo_de_multimedia.forEach((content: any) => {
    if (content === 'video') {
      parsedCards.push({
        urlSource: sectionData?.multimedia_id_video[indexVideos],
        type: 'video',
      })
      indexVideos++
    } else {
      parsedCards.push({
        urlSource: getImage(sectionData?.multimedia_imagen_url[indexImages]),
        alt: sectionData?.multimedia_imagen_alt[indexImages],
        title: sectionData?.multimedia_imagen_title[indexImages],
        type: 'image',
      })
      indexImages++
    }
  })
  return {
    title: arrayDestructuring(sectionData?.field_titulo, 'Galería 2023'),
    cards: parsedCards ?? [],
  }
}

export default GallerySectionDTO
