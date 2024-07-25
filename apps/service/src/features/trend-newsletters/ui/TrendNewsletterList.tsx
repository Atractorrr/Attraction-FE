'use client'

import { Suspense } from 'react'
import { GuideTxt, NewsletterItem } from '@/shared/ui'
import TrendNewsletterSkeleton from './TrendNewsletterSkeleton'
import { MainCategory, useTrendNewsletters } from '../model'

function TrendNewsletterContent({ category }: { category: MainCategory }) {
  const { data } = useTrendNewsletters(category)

  return (
    <div>
      {data.mainPageNewsletters.length ? (
        <ul className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {data.mainPageNewsletters.map((newsletter) => (
            <li key={newsletter.id}>
              <NewsletterItem id={newsletter.id} name={newsletter.name}>
                <NewsletterItem.Thumbnail
                  url={newsletter.newsletterThumbnailUrl}
                />
                <NewsletterItem.Content>
                  <NewsletterItem.Description>
                    {newsletter.description}
                  </NewsletterItem.Description>
                </NewsletterItem.Content>
              </NewsletterItem>
            </li>
          ))}
        </ul>
      ) : (
        <div className="pb-40 pt-32">
          <GuideTxt title="데이터가 없어요" sub="최대한 빠르게 추가할게요" />
        </div>
      )}
    </div>
  )
}

export default function TrendNewsletterList({
  category,
}: {
  category: MainCategory
}) {
  return (
    <Suspense fallback={<TrendNewsletterSkeleton />}>
      <TrendNewsletterContent category={category} />
    </Suspense>
  )
}
