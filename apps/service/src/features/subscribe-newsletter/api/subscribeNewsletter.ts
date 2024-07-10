import type { SubscribeNewsletterParams } from '../model'

export default async function subscribeNewsletter({
  type = 'subscribe',
  userEmail,
  newsletterId,
}: SubscribeNewsletterParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/${type}/${newsletterId}`,
    {
      method: type === 'unsubscribe' ? 'PATCH' : 'PUT',
      credentials: 'include',
    },
  )

  if (!res.ok) {
    throw new Error(
      `뉴스레터 구독${type === 'unsubscribe' ? '취소' : ''}에 실패했어요`,
    )
  }

  return res.json()
}
