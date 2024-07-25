import type { UserEmail, NewsletterItem } from '../model'

export default async function getUserNewsletters({
  userEmail,
}: {
  userEmail: UserEmail
}) {
  if (!userEmail) {
    throw new Error('구독한 뉴스레터에 접근하는데 실패했어요')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/newsletters`,
  )
  const { data }: { data: NewsletterItem[] } = await res.json()

  if (!res.ok) {
    throw new Error('구독한 뉴스레터를 가져오는데 실패했어요')
  }

  return data
}
