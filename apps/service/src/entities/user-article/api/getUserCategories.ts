import { NewsletterCategory } from '@/shared/type'
import type { UserEmail } from '../model'

export default async function getUserCategories({
  userEmail,
}: {
  userEmail: UserEmail
}) {
  if (!userEmail) {
    throw new Error('카테고리에 접근하는데 실패했어요')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userEmail}/categories`,
  )
  const { data }: { data: NewsletterCategory[] } = await res.json()

  if (!res.ok) {
    throw new Error('카테고리를 가져오는데 실패했어요')
  }

  return data
}
