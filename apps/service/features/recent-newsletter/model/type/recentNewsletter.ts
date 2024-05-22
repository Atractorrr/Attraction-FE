export interface RecentNewsletter {
  id: number
  image: {
    thumbnail: string
    profile: string
  }
  info: {
    title: string
    name: string
    date: string
    readingTime: number
    readingPercentage: number
  }
}
