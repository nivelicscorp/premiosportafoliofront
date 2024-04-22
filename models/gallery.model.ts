export type GallerySectionModel = {
  title: string
  cards: GalleryCardModel[]
}

export type GalleryCardModel = {
  urlSource: string
  alt?: string
  title?: string
  type: string
  isActive?: boolean
}
