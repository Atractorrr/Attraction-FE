export interface RecentArticle {
  id: number
  title: string
  thumbnailUrl: string
  readingTime: number
  receivedAt: string
  readPercentage: number
  newsletter: {
    id: number
    name: string
    thumbnailUrl: string
  }
}

export interface RecentArticleResponse {
  data: {
    mainPageArticles: RecentArticle[]
  }
}
