import type { SubscribeNewsletterParams } from '../model'

export default async function subscribeNewsletter({
  userEmail,
  newsletterId,
}: SubscribeNewsletterParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/subscribe/${newsletterId}`,
    {
      method: 'PUT',
      credentials: 'include',
    },
  )

  if (!res.ok) {
    throw new Error('뉴스레터 구독에 실패했어요')
  }

  return res.json()
}
