import { SubscribeItemType } from '../model/types'

export const fetchSubscribeList = async (
  userId: string,
): Promise<SubscribeItemType[]> => {
  const data = await fetch(
    `${process.env.API_URL}/api/v1/member/${userId}/subscribe-list`,
    { cache: 'no-store' },
  ).then((res) => res.json())

  const { subscribeList } = data

  return subscribeList
}
