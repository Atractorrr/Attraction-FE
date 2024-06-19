import type { Article, UserArticleParams } from '../model'

export default async function getArticle({
  userEmail,
  articleId,
}: UserArticleParams) {
  if (!userEmail) {
    throw new Error('보관함 접근에 실패했어요')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/article/${articleId}`,
  )
  const { data }: { data: Article } = await res.json()

  if (!res.ok) {
    throw new Error('아티클을 가져오는데 실패했어요')
  }

  return data
}
