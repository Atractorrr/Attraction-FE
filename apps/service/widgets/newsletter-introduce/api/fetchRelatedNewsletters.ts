import { RelatedNewslettersResponse } from '../model'

export default async function fetchRelatedNewsletters(
  newsletterId: number,
  size: number = 5,
): Promise<RelatedNewslettersResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletters/${newsletterId}/related`,
  )

  apiURL.searchParams.append('size', size.toString())

  const res = await fetch(apiURL.href)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
