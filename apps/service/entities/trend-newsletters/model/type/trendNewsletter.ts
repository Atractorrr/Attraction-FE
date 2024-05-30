export interface TrendNewsletter {
  id: number
  newsletterThumbnailUrl: string
  name: string
  description: string
}

export interface TrendNewsletterResponse {
  mainPageNewsletters: TrendNewsletter[]
}
