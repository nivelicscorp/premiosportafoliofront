import { WinnerCardModel, WinnerSectionModel } from '@models/winner.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import getImage from '@utils/getImage'

export const WinnerSectionDTO = (sectionData: any): WinnerSectionModel => {
  const parsedCards: WinnerCardModel[] = []
  sectionData?.personajes_field_nombre.forEach(
    (content: any, index: number) => {
      parsedCards.push({
        name: sectionData?.personajes_field_nombre[index],
        award: sectionData?.personajes_field_cargo[index],
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
    winners: parsedCards ?? [],
  }
}
