import { NewsletterProfileResponse } from '../model/type'

export default async function fetchNewsletterProfile(
  newsletterId: string,
): Promise<NewsletterProfileResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletters/${newsletterId}`,
  )
  const res = await fetch(apiURL.href)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
