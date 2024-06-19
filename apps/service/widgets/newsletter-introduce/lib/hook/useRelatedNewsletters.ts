import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'
import { RelatedNewslettersResponse } from '../../model'
import { fetchRelatedNewsletters } from '../../api'

export default function useRelatedNewsletters(
  newsletterId: string,
): UseSuspenseQueryResult<RelatedNewslettersResponse, unknown> {
  return useSuspenseQuery({
    queryKey: ['related-newsletters', newsletterId],
    queryFn: () => fetchRelatedNewsletters(newsletterId),
  })
}
