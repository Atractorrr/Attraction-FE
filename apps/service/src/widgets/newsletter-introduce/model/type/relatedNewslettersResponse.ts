export interface RelatedNewslettersResponse {
  status: string
  message: string
  data: RelatedNewsletter[]
}

export interface RelatedNewsletter {
  id: number
  thumbnailUrl: string
  name: string
  description: string
}
