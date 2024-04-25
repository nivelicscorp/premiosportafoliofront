import { ImagesModel } from './image.model'

export type JuriesSectionModel = {
  title: string
  icon: ImagesModel
  juries: JuriesCardModel[]
}

export type JuriesCardModel = {
  name: string
  businessRole: string
  photo: ImagesModel
}
