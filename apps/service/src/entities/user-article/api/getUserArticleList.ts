import { DEFAULT_LIST_SIZE } from '../constant'
import type { UserArticlesResponse, UserArticleListOption } from '../model'

export default async function getUserArticleList({
  userEmail,
  pageType,
  page = 0,
  size = DEFAULT_LIST_SIZE,
  ...params
}: UserArticleListOption) {
  if (!userEmail) {
    throw new Error('보관함 접근에 실패했어요')
  }

  const path = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/articles${pageType === 'bookmark' ? '/bookmark' : ''}`
  const searchParams = { ...params, page, size }
  const searchParamsToString = Object.entries(searchParams)
    .map((entry) => (entry[1] ? entry.join('=') : undefined))
    .filter((param) => !!param)
    .join('&')

  const res = await fetch(`${path}?${searchParamsToString}`)
  const data: UserArticlesResponse = await res.json()

  if (!res.ok) {
    throw new Error('보관함 데이터를 가져오는데 실패했어요')
  }

  return data
}
