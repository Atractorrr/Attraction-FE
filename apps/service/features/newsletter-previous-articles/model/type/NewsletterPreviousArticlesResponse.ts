import { NewsletterPreviousArticleData } from '@/entities/newsletter-previous-article-item'

export interface NewsletterPreviousArticlesResponse {
  status: number
  message: string
  data: NewsletterPreviousArticleData[]
}
