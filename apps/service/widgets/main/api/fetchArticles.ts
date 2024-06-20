import type { RecentArticleResponse } from '../model'

export default async function fetchArticles(
  email: string,
): Promise<RecentArticleResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${email}/articles/received`,
  )
  const res = await fetch(apiURL.href)

  return res.json()
}
