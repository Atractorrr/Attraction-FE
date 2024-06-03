import { NewsletterPreviousArticlesResponse } from '../model'

export default async function fetchNewsletterPreviousArticles(
  newsletterId: string,
  size: number = 5,
): Promise<NewsletterPreviousArticlesResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletters/${newsletterId}/articles/prev`,
  )

  apiURL.searchParams.set('size', size.toString())

  const res = await fetch(apiURL.href)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
