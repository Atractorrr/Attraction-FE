import type { RecentArticleResponse } from '../model'

export default async function fetchArticles(
  email: string,
): Promise<RecentArticleResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${email}/articles/received`,
  )
  const res = await fetch(apiURL.href)

  if (!res.ok) {
    throw new Error('최근 받은 뉴스레터를 불러오는데 실패했습니다.')
  }

  return res.json()
}
