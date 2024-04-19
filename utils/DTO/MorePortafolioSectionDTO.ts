import { MorePortafolioSectionModel } from '@models/morePortafolioSection.model'
import arrayDestructuring from '@utils/arrayDestructuring'

const MorePortafolioSectionDTO = (
  sectionData: any
): MorePortafolioSectionModel => {
  return {
    title: arrayDestructuring(sectionData.field_titulo, ''),
    cards: sectionData.items_contenido_uuid,
  }
}

export default MorePortafolioSectionDTO
