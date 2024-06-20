export interface NewsletterPreviousArticlesResponse {
  status: number
  message: string
  data: NewsletterPreviousArticleData[]
}

export interface NewsletterPreviousArticleData {
  id: number
  title: string
  thumbnailUrl: string
  contentUrl: string
  contentSummary: string
  readingTime: number
  receivedAt: string
  newsletterName: string
}
