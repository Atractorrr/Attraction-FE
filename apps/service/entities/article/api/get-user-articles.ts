import type { UserArticlesResponse, UserArticlesOption } from '../types'

export default async function getUserArticles({
  memberId,
  ...params
}: UserArticlesOption) {
  const path = `${process.env.NEXT_PUBLIC_FE_URL}/api/v1/member/${memberId}/articles`
  const searchParams = {
    ...params,
    page: params.page ?? 0,
    category: params.category?.join(','),
  }
  const searchParamsToString = Object.entries(searchParams)
    .map((entry) => (entry[1] !== undefined ? entry.join('=') : undefined))
    .filter((param) => !!param)
    .join('&')

  const res = await fetch(`${path}?${searchParamsToString}`)
  const data: UserArticlesResponse = await res.json()

  return data
}
