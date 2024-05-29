import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { RelatedNewslettersResponse } from '../../model'
import { fetchRelatedNewsletters } from '../../api'

export default function useRelatedNewsletters(
  newsletterId: string,
): UseQueryResult<RelatedNewslettersResponse, Error> {
  return useQuery({
    queryKey: ['related-newsletters', newsletterId],
    queryFn: () => fetchRelatedNewsletters(newsletterId),
  })
}
