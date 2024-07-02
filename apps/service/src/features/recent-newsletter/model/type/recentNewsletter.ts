interface RecentNewsletter {
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

export interface RecentNewsletterResponse {
  status: string
  message: string
  data: {
    mypageArticles: RecentNewsletter[]
  }
}
