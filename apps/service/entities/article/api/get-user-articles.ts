import type { Article, UserArticlesOption } from '../types'
import * as Shared from '@/shared'

type GetUserArticlesResponse = { articles: Article[] } & Shared.Types.Pagination

export default async function getUserArticles({
  memberId,
  ...params
}: UserArticlesOption) {
  const path = `${process.env.NEXT_PUBLIC_FE_URL}/api/v1/member/${memberId}/articles`
  const searchParams = {
    ...params,
    category: params.category?.join(','),
  }
  const searchParamsToString = Object.entries(searchParams)
    .map((entry) => (entry[1] !== undefined ? entry.join('=') : undefined))
    .filter((e) => !!e)
    .join('&')

  const res = await fetch(`${path}?${searchParamsToString}`)
  const data: GetUserArticlesResponse = await res.json()

  return data
}
