import { RecentNewsletter } from '../model'

const fetchNewsletterList = async (
  userId: string,
): Promise<RecentNewsletter[]> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member/${userId}/articles/recent`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  const { myPageArticles } = data
  return myPageArticles
}

export default fetchNewsletterList
