import { ContactUsSectionModel } from '@models/contactUs.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import getImage from '@utils/getImage'

const ContactUsSectionDTO = (
  sectionData: any
): ContactUsSectionModel | null => {
  if (!sectionData) {
    return null
  }
  return {
    title: arrayDestructuring(sectionData?.field_titulo, 'Contáctanos'),
    description: arrayDestructuring(sectionData?.descripcion, ''),
    backgroundDesktop: {
      source: arrayDestructuring(sectionData?.background_desktop_url, ''),
      alt: arrayDestructuring(sectionData?.background_desktop_alt, ''),
      title: arrayDestructuring(sectionData?.background_desktop_title, ''),
    },
    backgroundMobile: {
      source: arrayDestructuring(sectionData?.background_mobile_url, ''),
      alt: arrayDestructuring(sectionData?.background_mobile_alt, ''),
      title: arrayDestructuring(sectionData?.background_mobile_title, ''),
    },
    auxiliaryImage: {
      source: arrayDestructuring(sectionData?.imagen_dos_url, ''),
      alt: arrayDestructuring(sectionData?.imagen_dos_alt, ''),
      title: arrayDestructuring(sectionData?.imagen_dos_title, ''),
    },
  }
}

export default ContactUsSectionDTO
