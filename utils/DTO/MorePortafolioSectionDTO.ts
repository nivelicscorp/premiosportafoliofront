import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import arrayDestructuring from '@utils/arrayDestructuring'

const MorePortafolioSectionDTO = (
  sectionData: any
): MorePortafolioSectionModel => {
  return {
    title: arrayDestructuring(sectionData?.field_titulo, ''),
    cards: sectionData?.items_contenido_uuid.map((item: any) => ({
      category: arrayDestructuring(item.field_categoria, ''),
      title: arrayDestructuring(item.field_titulo, ''),
      image: {
        source: arrayDestructuring(item.imagen_url, ''),
        alt: arrayDestructuring(item.imagen_alt, ''),
        title: arrayDestructuring(item.imagen_title, ''),
      },
      url: arrayDestructuring(item.url_enlace, ''),
    })),
  }
}

export default MorePortafolioSectionDTO
