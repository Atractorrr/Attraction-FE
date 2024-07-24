'use client'

import { useCheckDevice } from '@/shared/lib'
import { ArticleCard, ReadingTimeBadge } from '@/shared/ui'
import { DiscoverArticle } from '../model'

export default function DiscoverArticleItem({ ...props }: DiscoverArticle) {
  const { isMobileView } = useCheckDevice()

  return (
    <ArticleCard
      key={props.id}
      id={props.id}
      newsletterId={props.newsletter.id}
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
            name={props.newsletter.name}
            receivedAt={props.receivedAt}
          />
        </ArticleCard.DescriptionGroup>
      </ArticleCard.Content>
    </ArticleCard>
  )
}
