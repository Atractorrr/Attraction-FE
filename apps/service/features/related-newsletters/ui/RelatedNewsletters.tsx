'use client'

import { Background, LoadingSpinner, Title } from '@/shared/ui'
import { RelatedNewsletterItem } from '@/entities/related-newsletter-item'
import { useRelatedNewsletters } from '../lib'

interface RelatedNewsletterProps {
  newsletterId: string
}

export default function RelatedNewsletters({
  newsletterId,
}: RelatedNewsletterProps) {
  const { data, isPending } = useRelatedNewsletters(newsletterId)

  return (
    <Background>
      <div className="flex w-full flex-col justify-start gap-y-5">
        <Title text="연관 뉴스레터" />
        {isPending || !data ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col gap-y-5">
            {data.data.map((newsletter) => (
              <RelatedNewsletterItem key={newsletter.id} {...newsletter} />
            ))}
          </div>
        )}
      </div>
    </Background>
  )
}
