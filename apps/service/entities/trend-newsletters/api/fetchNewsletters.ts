import type { TrendNewsletterResponse } from '@/entities/trend-newsletters'
import type { NewsletterCategory } from '@/shared/type'

export default async function fetchNewsletters(
  category: NewsletterCategory | 'RECOMMEND' = 'RECOMMEND',
  size: number = 10,
): Promise<TrendNewsletterResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletters/recommend`,
  )

  apiURL.searchParams.set('category', category)
  apiURL.searchParams.set('size', size.toString())

  const res = await fetch(apiURL)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
