import type { UserArticleParams } from '../model'

type PutUserArticleParams = { readPercentage: number } & UserArticleParams

export default async function putUserArticle({
  userId,
  articleId,
  readPercentage,
}: PutUserArticleParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/article/${articleId}?readPercentage=${parseInt(String(readPercentage), 10)}`,
    { method: 'PUT' },
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data?.message ?? '읽은 양 추적에 실패했어요')
  }

  return data
}
