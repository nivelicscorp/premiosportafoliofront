import { PageData } from '@models/landingPage.model'
import { getMainBanner, getSeeMorePortafolio } from '@utils/findBlockByType'

interface RegistryPageDTO {
  mainBanner: any
  seeMorePortafolio: any
}

const RegistryPageDTO = (pageData: PageData[]): RegistryPageDTO => {
  const mainBanner = getMainBanner(pageData) ?? null
  const seeMorePortafolio = getSeeMorePortafolio(pageData) ?? null

  return {
    mainBanner,
    seeMorePortafolio,
  }
}

export default RegistryPageDTO
