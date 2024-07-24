import type { RecentReadArticle, RecentReadArticlesResponse } from '../model'

interface GetRecentReadArticlesParams {
  userEmail?: string
}

export default async function getRecentReadArticles({
  userEmail,
}: GetRecentReadArticlesParams): Promise<RecentReadArticle[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/articles/recent`,
    { cache: 'no-store' },
  )

  if (!res.ok) {
    throw new Error('최근 읽은 아티클을 불러오는데 실패했어요')
  }

  const { data }: RecentReadArticlesResponse = await res.json()

  return data.mypageArticles
}
