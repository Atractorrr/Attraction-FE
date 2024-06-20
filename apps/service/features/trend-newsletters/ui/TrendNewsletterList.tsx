'use client'

import { Suspense } from 'react'
import { GuideTxt } from '@/shared/ui'
import TrendNewsletterSkeleton from './TrendNewsletterSkeleton'
import TrendNewsletterItem from './TrendNewsletterItem'
import { MainCategory, useTrendNewsletters } from '../model'

function TrendNewsletterContent({ category }: { category: MainCategory }) {
  const { data } = useTrendNewsletters(category)

  return (
    <div>
      {data.mainPageNewsletters.length ? (
        <div className="grid gap-4 xl:grid-cols-2">
          {data.mainPageNewsletters.map((newsletter) => (
            <TrendNewsletterItem key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
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
