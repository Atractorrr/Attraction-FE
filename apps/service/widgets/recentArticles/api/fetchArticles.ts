import { RecentArticleReponse } from '@/entities/recentArticles'

export async function fetchArticles(
  size: number = 5,
): Promise<RecentArticleReponse> {
  const apiURL = new URL(`${process.env.API_URL}/api/v1/articles/recent`)
  apiURL.searchParams.set('size', size.toString())

  const res = await fetch('http://localhost:3000/api/v1/articles/recent?size=5')

  return res.json()
}
