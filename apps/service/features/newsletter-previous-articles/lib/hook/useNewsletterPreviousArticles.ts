import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { NewsletterPreviousArticlesResponse } from '../../model'
import { fetchNewsletterPreviousArticles } from '../../api'

export default function useNewsletterPreviousArticles(
  newsletterId: string,
): UseQueryResult<NewsletterPreviousArticlesResponse, Error> {
  return useQuery({
    queryKey: ['newsletterPreviousArticles', newsletterId],
    queryFn: () => fetchNewsletterPreviousArticles(newsletterId),
  })
}
