import { ImagesModel } from './image.model'

export type WinnerSectionModel = {
  title: string
  winners: WinnerCardModel[]
}

export type WinnerCardModel = {
  name: string
  award: string
  photo: ImagesModel
}
