'use client'

import { EmblaOptionsType } from 'embla-carousel'
import {
  RecentArticleItem,
  RecentArticleResponse,
} from '@/entities/recent-article-item'
import { Carousel } from '@/shared/ui'

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
}

export default function RecentArticles({
  mainArticles,
}: RecentArticleResponse) {
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
