import { Pagination } from '@/shared/type'

export interface DiscoverRelatedNewsletter {
  id: number
  thumbnailUrl: string
  name: string
  description: string
}

export interface DiscoverRelatedNewsletterResponse {
  status: string
  message: string
  data: { content: DiscoverRelatedNewsletter[] } & Pagination
}
