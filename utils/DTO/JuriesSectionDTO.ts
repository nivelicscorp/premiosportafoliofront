import { JuriesCardModel, JuriesSectionModel } from '@models/juries.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import getImage from '@utils/getImage'

const JuriesSectionDTO = (sectionData: any): JuriesSectionModel | null => {
  if (!sectionData) {
    return null
  }
  const parsedCards: JuriesCardModel[] = []
  sectionData?.personajes_field_nombre.forEach(
    (content: any, index: number) => {
      parsedCards.push({
        name: sectionData?.personajes_field_nombre[index],
        businessRole: sectionData?.personajes_field_cargo[index],
        photo: {
          source: getImage(sectionData?.personaje_imagen_url[index]),
          alt: sectionData?.personaje_imagen_alt[index],
          title: sectionData?.personaje_imagen_title[index],
        },
      })
    }
  )
  return {
    title: arrayDestructuring(sectionData?.field_titulo, 'Categorías'),
    icon: {
      source: getImage(arrayDestructuring(sectionData?.icono_url, '')),
      alt: arrayDestructuring(sectionData?.icono_alt, ''),
      title: arrayDestructuring(sectionData?.icono_title, ''),
    },
    juries: parsedCards ?? [],
  }
}

export default JuriesSectionDTO
