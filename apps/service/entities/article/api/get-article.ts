import type { Article } from '../types'

export default async function getArticle({
  articleId,
}: {
  articleId: string | number
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FE_URL}/articles/${articleId}`,
  )
  const data: { article: Article } = await res.json()

  return data
}
