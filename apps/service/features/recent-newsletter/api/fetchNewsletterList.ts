import { RecentNewsletter } from '../model'

const fetchNewsletterList = async (
  userId: string,
): Promise<RecentNewsletter[]> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/articles/recent`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  const { mypageArticles } = data
  return mypageArticles
}

export default fetchNewsletterList
