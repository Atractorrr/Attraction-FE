import { RelatedNewsletter } from '@/entities/related-newsletter-item'

export default interface RelatedNewslettersResponse {
  data: RelatedNewsletter[]
  status: number
}
