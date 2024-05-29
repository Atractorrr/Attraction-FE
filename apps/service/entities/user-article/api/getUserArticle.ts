import type { Article, UserArticleParams } from '../model'

export default async function getArticle({
  userId,
  articleId,
}: UserArticleParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/article/${articleId}`,
  )
  const data: { data: Article } = await res.json()

  return data.data
}
