import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { fetchNewsletterProfile } from '../../api'
import { NewsletterProfileResponse } from '../../model'

export default function useNewsletterProfile(
  newsletterId: string,
): UseSuspenseQueryResult<NewsletterProfileResponse, Error> {
  return useSuspenseQuery({
    queryKey: ['newsletterProfile', newsletterId],
    queryFn: () => fetchNewsletterProfile(newsletterId),
  })
}
