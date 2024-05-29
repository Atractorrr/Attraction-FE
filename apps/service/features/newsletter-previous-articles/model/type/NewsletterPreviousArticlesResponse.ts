import { NewsletterPreviousArticle } from '@/entities/newsletter-previous-article-item'

export interface NewsletterPreviousArticlesResponse {
  data: NewsletterPreviousArticle[]
  status: number
}
