import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { fetchNewsletterProfile } from '../../api'
import type { NewsletterProfileResponse } from '../../model'

export default function useNewsletterProfile(
  newsletterId: string,
): UseQueryResult<NewsletterProfileResponse, Error> {
  return useQuery({
    queryKey: ['newsletterProfile', newsletterId],
    queryFn: () => fetchNewsletterProfile(newsletterId),
  })
}
