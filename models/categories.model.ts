import { ImagesModel } from './image.model'

export type CategoryCardModel = {
  title: string
  description: string
  summary: string
  image: ImagesModel
  icon: ImagesModel
}

export type CategorySectionModel = {
  title: string
  description: string
  downLink: string
  card: CategoryCardModel[]
}
