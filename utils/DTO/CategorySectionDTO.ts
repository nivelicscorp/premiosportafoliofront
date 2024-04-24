import {
  CategoryCardModel,
  CategorySectionModel,
} from '@models/categories.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import getImage from '@utils/getImage'

const CategorySectionDTO = (sectionData: any): CategorySectionModel => {
  const parsedCards: CategoryCardModel[] = []
  sectionData?.card_titulo.forEach((content: any, index: number) => {
    parsedCards.push({
      title: sectionData?.card_titulo[index],
      description: sectionData?.card_descripciom[index],
      summary: sectionData?.card_resumen[index],
      image: {
        source: getImage(sectionData?.card_imagen_url[index]),
        alt: sectionData?.card_imagen_alt[index],
        title: sectionData?.card_imagen_title[index],
      },
      icon: {
        source: getImage(sectionData?.card_icono_url[index]),
        alt: sectionData?.card_icono_alt[index],
        title: sectionData?.card_icono_title[index],
      },
    })
  })
  return {
    title: arrayDestructuring(sectionData?.field_titulo, 'Categorías'),
    description: arrayDestructuring(sectionData?.descripcion, ''),
    downLink: arrayDestructuring(sectionData?.texto_link_footer, ''),
    card: parsedCards ?? [],
  }
}

export default CategorySectionDTO
