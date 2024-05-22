import { RecentArticleResponse } from '@/entities/recent-article-item'

export default async function fetchArticles(
  size: number = 5,
): Promise<RecentArticleResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles/recent`,
  )
  apiURL.searchParams.set('size', size.toString())

  const res = await fetch(apiURL.href)

  return res.json()
}
