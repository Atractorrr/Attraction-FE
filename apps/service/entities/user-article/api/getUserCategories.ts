import { NewsletterCategory } from '@/shared/type'

export default async function getUserCategories({
  userId,
}: {
  userId: string | number
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/categories`,
  )
  const { data }: { data: NewsletterCategory[] } = await res.json()

  if (!res.ok) {
    throw new Error('카테고리를 가져오는데 실패했어요')
  }

  return data
}
