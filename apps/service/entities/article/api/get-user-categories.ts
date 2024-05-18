import { NewsletterCategory } from '../types'

export default async function getUserCategories({
  memberId,
}: {
  memberId: string | number
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FE_URL}/api/v1/member/${memberId}/categories`,
  )
  const data: { categories: NewsletterCategory[] } = await res.json()

  return data
}
