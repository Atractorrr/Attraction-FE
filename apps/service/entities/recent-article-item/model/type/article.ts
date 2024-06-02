export interface RecentArticle {
  id: number
  newsletterThumbnailUrl: string
  newsletterTitle: string
  articleThumbnailUrl: string
  title: string
  date: Date
  readingTime: number
  readPercentage: number
}

export interface RecentArticleResponse {
  mainPageArticles: RecentArticle[]
}
