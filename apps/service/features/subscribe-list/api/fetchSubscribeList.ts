import { SubscribeItem } from '../model'

const fetchSubscribeList = async (userId: string): Promise<SubscribeItem[]> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/member/${userId}/subscribe-list`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  const { subscribeList } = data

  return subscribeList
}

export default fetchSubscribeList
