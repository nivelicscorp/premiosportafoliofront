import { ImagesModel } from './image.model'

export type MainBanneSectionModel = {
  description: string
  backgroundDesktop: ImagesModel
  backgroundMobile: ImagesModel
  mainIcon: ImagesModel
  auxiliaryIcon: ImagesModel
  logo: ImagesModel
  hashtag: {
    text: string
    url: string
  }
  socialMedia: SocialMediaModel[]
}

export type SocialMediaModel = {
  url: string
  type: string
}
