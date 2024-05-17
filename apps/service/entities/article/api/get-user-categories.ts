import { NewsletterCategories } from '../types'

export default async function getUserCategories({
  memberId,
}: {
  memberId: string | number
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FE_URL}/api/v1/member/${memberId}/categories`,
  )
  const data: { categories: NewsletterCategories[] } = await res.json()

  return data
}
