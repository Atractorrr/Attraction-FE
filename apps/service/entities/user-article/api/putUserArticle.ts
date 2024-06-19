import type { UserArticleParams } from '../model'

type PutUserArticleParams = { readPercentage: number } & UserArticleParams

export default async function putUserArticle({
  userEmail,
  articleId,
  readPercentage,
}: PutUserArticleParams) {
  if (!userEmail) {
    throw new Error('보관함 접근에 실패했어요')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/article/${articleId}?readPercentage=${parseInt(String(readPercentage), 10)}`,
    { method: 'PUT' },
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error('읽은 양 추적에 실패했어요')
  }

  return data
}
