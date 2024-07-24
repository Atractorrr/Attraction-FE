export interface RecentReadArticle {
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

export interface RecentReadArticlesResponse {
  status: string
  message: string
  data: {
    mypageArticles: RecentReadArticle[]
  }
}
