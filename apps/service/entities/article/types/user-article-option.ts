import type { MemberId } from './member-id'

export type UserArticlesOption = {
  memberId: MemberId
  page?: number
  size?: number
  sort?: string
  category?: string[]
  q?: string
}
