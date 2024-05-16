import type { MemberId } from '../types/member-id'

type GetUserCategoriesParams = { memberId: MemberId }

type GetUserCategoriesResponse = { categories: string[] }

export default async function getUserCategories({
  memberId,
}: GetUserCategoriesParams) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_FE_URL}/api/v1/member/${memberId}/categories`,
  )
  const data: GetUserCategoriesResponse = await res.json()

  return data
}
