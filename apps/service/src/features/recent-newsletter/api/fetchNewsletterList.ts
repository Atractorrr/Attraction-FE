import { RecentNewsletterResponse } from '../model'

const fetchNewsletterList = async (
  userId: string,
): Promise<RecentNewsletterResponse> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/articles/recent`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  return data
}

export default fetchNewsletterList
