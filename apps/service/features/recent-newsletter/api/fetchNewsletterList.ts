import { RecentNewsletterType } from '../models/types'

export const fetchNewsletterList = async (
  userId: string,
): Promise<RecentNewsletterType[]> => {
  const data = await fetch(
    `${process.env.API_URL}/api/v1/member/${userId}/articles/recent`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  const { myPageArticles } = data
  return myPageArticles
}
