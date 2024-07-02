import { Pagination } from '@/shared/type'

export interface DiscoverRelatedNewsletter {
  id: string
  thumbnailUrl: string
  name: string
  description: string
}

export interface DiscoverRelatedNewsletterResponse {
  status: string
  message: string
  data: { content: DiscoverRelatedNewsletter[] } & Pagination
}
