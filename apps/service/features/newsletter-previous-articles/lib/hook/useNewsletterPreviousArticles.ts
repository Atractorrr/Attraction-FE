import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { NewsletterPreviousArticlesResponse } from '../../model'
import { fetchNewsletterPreviousArticles } from '../../api'

export default function useNewsletterPreviousArticles(
  newsletterId: string,
): UseSuspenseQueryResult<NewsletterPreviousArticlesResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['newsletterPreviousArticles', newsletterId],
    queryFn: () => fetchNewsletterPreviousArticles(newsletterId),
  })
}
