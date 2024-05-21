import { NewsletterCategory } from '../model/types'

export default async function getUserCategories({
  userId,
}: {
  userId: string | number
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/${userId}/categories`,
  )
  const data: { categories: NewsletterCategory[] } = await res.json()

  return data
}
