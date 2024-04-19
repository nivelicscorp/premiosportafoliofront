import { ImagesModel } from './image.model'

export type MorePortafolioSectionModel = {
  title: string
  cards: CardsMorePortafolioModel[]
}

export type CardsMorePortafolioModel = {
  category: string
  title: string
  image: ImagesModel
  url: string
}
