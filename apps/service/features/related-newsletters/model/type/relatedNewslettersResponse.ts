import { RelatedNewsletter } from '@/entities/related-newsletter-item'

export default interface RelatedNewslettersResponse {
  status: string
  message: string
  data: RelatedNewsletter[]
}
