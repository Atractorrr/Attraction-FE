import { Article } from '../model/types'

export default async function getArticle({
  articleId,
}: {
  articleId: string | number
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/${articleId}`,
  )
  const data: { article: Article } = await res.json()

  return data
}
