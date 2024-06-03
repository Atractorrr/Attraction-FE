import type { UserArticleParams } from '../model'

type PutUserArticleParams = { percentage: number } & UserArticleParams

export default async function putUserArticle({
  userId,
  articleId,
  percentage,
}: PutUserArticleParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/article/${articleId}?percentage=${percentage}`,
    {
      method: 'PUT',
      body: JSON.stringify({ percentage }),
    },
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data?.message ?? '읽은 양 추적에 실패했어요')
  }

  return data
}
