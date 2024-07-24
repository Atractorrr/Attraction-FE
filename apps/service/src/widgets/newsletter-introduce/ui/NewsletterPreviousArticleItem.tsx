'use client'

import { ArticleCard, ReadingTimeBadge } from '@/shared/ui'
import { useCheckDevice } from '@/shared/lib'
import { NewsletterPreviousArticleData } from '../model'

interface NewsletterPreviousArticleItemProps
  extends NewsletterPreviousArticleData {
  newsletterId: number
}

export default function NewsletterPreviousArticleItem({
  newsletterId,
  ...props
}: NewsletterPreviousArticleItemProps) {
  const { isMobileView } = useCheckDevice()

  return (
    <ArticleCard
      key={props.id}
      id={props.id}
      newsletterId={newsletterId}
      title={props.title}
      type={isMobileView ? 'gallery' : 'list'}
      to="previous">
      <ArticleCard.Thumbnail url={props.thumbnailUrl}>
        <ReadingTimeBadge readingTime={props.readingTime} />
      </ArticleCard.Thumbnail>
      <ArticleCard.Content>
        <ArticleCard.DescriptionGroup>
          <ArticleCard.Description>
            {props.contentSummary}
          </ArticleCard.Description>
          <ArticleCard.Status
            name={props.newsletterName}
            receivedAt={props.receivedAt}
          />
        </ArticleCard.DescriptionGroup>
      </ArticleCard.Content>
    </ArticleCard>
  )
}
