import { DEFAULT_LIST_SIZE } from '../constant'
import type { UserArticlesResponse, UserArticleListOption } from '../model'

export default async function getUserArticleList({
  userId,
  ...params
}: UserArticleListOption) {
  const path = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/articles`
  const searchParams = {
    ...params,
    page: params.page ?? 0,
    size: params.size ?? DEFAULT_LIST_SIZE,
    category:
      params.category && params.category.length > 0
        ? params.category.join(',')
        : undefined,
  }
  const searchParamsToString = Object.entries(searchParams)
    .map((entry) => (entry[1] !== undefined ? entry.join('=') : undefined))
    .filter((param) => !!param)
    .join('&')

  const res = await fetch(`${path}?${searchParamsToString}`)
  const data: UserArticlesResponse = await res.json()

  if (!res.ok) {
    throw Error('보관함 데이터를 가져오는데 실패했어요')
  }

  return data
}
