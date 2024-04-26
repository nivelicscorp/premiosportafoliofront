import { ButtonModel } from './button.model'
import { ImagesModel } from './image.model'

export type BestMomentsSectionModel = {
  backgroundDesktop: ImagesModel
  backgroundMobile: ImagesModel
  logo: ImagesModel
  title: string
  button: ButtonModel[]
}
