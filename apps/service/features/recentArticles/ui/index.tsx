'use client'

import { EmblaOptionsType } from 'embla-carousel'
import { Carousel } from '@/shared/ui'
import {
  RecentArticleItem,
  RecentArticleResponse,
} from '@/entities/recentArticleItem'

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
}

export default function Articles({ mainArticles }: RecentArticleResponse) {
  const articleList = mainArticles.map((articleProps) => (
    <RecentArticleItem key={articleProps.id} {...articleProps} />
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
