import type { Article, UserArticleParams } from '../model'

export default async function getArticle({
  userId,
  articleId,
}: UserArticleParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/article/${articleId}`,
  )
  const data: { data: Article } = await res.json()

  if (!res.ok) {
    throw new Error('아티클을 가져오는데 실패했어요')
  }

  return data.data
}
