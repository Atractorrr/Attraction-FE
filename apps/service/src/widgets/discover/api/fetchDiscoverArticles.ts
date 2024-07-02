import type { DiscoverArticleResponse } from '../model'

export default async function fetchDiscoverArticles(
  keyword: string,
  page: number,
  size: number = 10,
): Promise<DiscoverArticleResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/search/article`,
  )

  apiURL.searchParams.set('q', keyword)
  apiURL.searchParams.set('size', size.toString())
  apiURL.searchParams.set('page', page.toString())

  const res = await fetch(apiURL)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
