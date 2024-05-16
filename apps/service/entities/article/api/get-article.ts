import type { Article } from '../types'

type GetArticleParams = { articleId: string | number }

type GetArticleResponse = { article: Article }

export default async function getArticle({ articleId }: GetArticleParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FE_URL}/articles/${articleId}`,
  )
  const data: GetArticleResponse = await res.json()

  return data
}
