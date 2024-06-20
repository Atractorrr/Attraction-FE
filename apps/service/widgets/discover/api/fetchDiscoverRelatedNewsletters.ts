import { DiscoverRelatedNewsletterResponse } from '../model'

export default async function fetchDiscoverArticles(
  keyword: string,
  page: number,
  size: number = 20,
): Promise<DiscoverRelatedNewsletterResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/search/newsletter`,
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
