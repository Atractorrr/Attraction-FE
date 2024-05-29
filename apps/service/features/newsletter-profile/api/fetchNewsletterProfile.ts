import { NewsletterProfileResponse } from '../model/types'

export default async function fetchNewsletterProfile(
  newsletterId: string,
): Promise<NewsletterProfileResponse> {
  const apiURL = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletters`,
  )

  apiURL.searchParams.set('newsletterId', newsletterId.toString())

  const res = await fetch(apiURL.href)

  return res.json()
}
