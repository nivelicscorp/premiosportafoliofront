import { BestMomentsSectionModel } from '@models/bestMoments.model'
import { ButtonModel } from '@models/button.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import getImage from '@utils/getImage'

const BestMomentSectionDTO = (
  sectionData: any
): BestMomentsSectionModel | null => {
  if (!sectionData) {
    return null
  }
  const parseButton: ButtonModel[] = []
  sectionData?.texto_botones?.forEach((element: any, index: number) => {
    parseButton.push({
      title: sectionData?.texto_botones[index],
      url: sectionData?.enlaces_botones[index],
      variant: index === 0 ? 'primary' : 'secondary',
    })
  })
  return {
    backgroundDesktop: {
      source: getImage(
        arrayDestructuring(sectionData?.background_desktop_url, '')
      ),
      alt: arrayDestructuring(sectionData?.background_desktop_alt, ''),
      title: arrayDestructuring(sectionData?.background_desktop_title, ''),
    },
    backgroundMobile: {
      source: getImage(
        arrayDestructuring(sectionData?.background_mobile_url, '')
      ),
      alt: arrayDestructuring(sectionData?.background_mobile_alt, ''),
      title: arrayDestructuring(sectionData?.background_mobile_title, ''),
    },
    logo: {
      source: getImage(arrayDestructuring(sectionData?.imagen_dos_url, '')),
      alt: arrayDestructuring(sectionData?.imagen_dos_alt, ''),
      title: arrayDestructuring(sectionData?.imagen_dos_title, ''),
    },
    title: arrayDestructuring(sectionData?.field_titulo, ''),
    button: parseButton,
  }
}

export default BestMomentSectionDTO
