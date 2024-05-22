'use client'

import { EmblaOptionsType } from 'embla-carousel'
import { RecentArticles, RecentArticleReponse } from '@/entities/recentArticles'
import { Carousel } from '@/shared/ui'

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
}

export default function Articles({ mainArticles }: RecentArticleReponse) {
  const articleList = mainArticles.map((articleProps) => (
    <RecentArticles key={articleProps.id} {...articleProps} />
  ))

  return (
    <section className="overflow-x-auto">
      <Carousel
        options={carouselOptions}
        slides={articleList}
        showBlur="right"
      />
    </section>
  )
}
