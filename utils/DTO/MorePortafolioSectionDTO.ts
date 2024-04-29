import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import getImage from '@utils/getImage'

const MorePortafolioSectionDTO = (
  sectionData: any
): MorePortafolioSectionModel | null => {
  if (!sectionData) {
    return null
  }
  return {
    title: arrayDestructuring(sectionData?.field_titulo, 'Más de Portafolio'),
    cards:
      sectionData?.items_contenido_uuid.map((item: any) => ({
        category: arrayDestructuring(item.field_categoria, ''),
        title: arrayDestructuring(item.field_titulo, ''),
        image: {
          source: getImage(arrayDestructuring(item.imagen_url, '')),
          alt: arrayDestructuring(item.imagen_alt, ''),
          title: arrayDestructuring(item.imagen_title, ''),
        },
        url: arrayDestructuring(item.url_enlace, ''),
      })) ?? [],
  }
}

export default MorePortafolioSectionDTO
