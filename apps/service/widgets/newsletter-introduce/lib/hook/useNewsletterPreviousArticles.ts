import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { fetchNewsletterPreviousArticles } from '../../api'
import { NewsletterPreviousArticlesResponse } from '../../model'

export default function useNewsletterPreviousArticles(
  newsletterId: string,
): UseSuspenseQueryResult<NewsletterPreviousArticlesResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['newsletterPreviousArticles', newsletterId],
    queryFn: () => fetchNewsletterPreviousArticles(newsletterId),
  })
}
