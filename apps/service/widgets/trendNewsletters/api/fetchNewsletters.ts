import { NewsletterCategory } from '@/constants/category'
// eslint-disable-next-line import/no-cycle
import { TrendNewsletterResponse } from '..'

export default async function fetchNewsletters(
  category: NewsletterCategory = 'RECOMMEND',
  size: number = 10,
): Promise<TrendNewsletterResponse> {
  const apiURL = new URL(`http://localhost:3000/api/v1/newsletters/recommend`)
  apiURL.searchParams.set('category', category)
  apiURL.searchParams.set('size', size.toString())

  const res = await fetch(apiURL)

  return res.json()
}
