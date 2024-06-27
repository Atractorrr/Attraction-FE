import type { SubscribeNewsletterParams } from '../model'

export default async function checkSubscribeState({
  userEmail,
  newsletterId,
}: SubscribeNewsletterParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/subscriptions/${newsletterId}/is-subscribed`,
    {
      credentials: 'include',
    },
  )

  if (!res.ok) {
    throw new Error('구독 상태 조회에 실패했어요')
  }

  const { data }: { data: boolean } = await res.json()

  return data
}
