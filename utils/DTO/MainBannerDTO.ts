import { MainBanneSectionModel } from '@models/mainBanner.model'
import arrayDestructuring from '@utils/arrayDestructuring'
import checkSocialNetwork from '@utils/checkSocialNetwork'
import getImage from '@utils/getImage'

const MainBannerDTO = (sectionData: any): MainBanneSectionModel | null => {
  if (!sectionData) {
    return null
  }
  const socialMedia = sectionData?.field_enlaces_de_redes?.map((item: any) => ({
    url: item,
    type: checkSocialNetwork(item),
  }))
  return {
    description: arrayDestructuring(sectionData?.descripcion, ''),
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
    mainIcon: {
      source: getImage(arrayDestructuring(sectionData?.icono_url, '')),
      alt: arrayDestructuring(sectionData?.icono_alt, ''),
      title: arrayDestructuring(sectionData?.icono_title, ''),
    },
    auxiliaryIcon: {
      source: getImage(arrayDestructuring(sectionData?.imagen_dos_url, '')),
      alt: arrayDestructuring(sectionData?.imagen_dos_alt, ''),
      title: arrayDestructuring(sectionData?.imagen_dos_title, ''),
    },
    logo: {
      source: getImage(arrayDestructuring(sectionData?.logo_url, '')),
      alt: arrayDestructuring(sectionData?.logo_alt, ''),
      title: arrayDestructuring(sectionData?.logo_title, ''),
    },
    hashtag: {
      text: arrayDestructuring(sectionData?.hashtag, ''),
      url: arrayDestructuring(sectionData?.hashtag_link, ''),
    },
    socialMedia: socialMedia ?? [],
  }
}

export default MainBannerDTO
