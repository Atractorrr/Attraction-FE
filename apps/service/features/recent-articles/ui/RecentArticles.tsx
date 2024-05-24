'use client'

import { EmblaOptionsType } from 'embla-carousel'
import { Carousel } from '@/shared/ui'
import {
  RecentArticle,
  RecentArticleItem,
} from '@/entities/recent-article-item'

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
}

interface RecentArticlesProps {
  mainArticles: RecentArticle[]
}

export default function RecentArticles({ mainArticles }: RecentArticlesProps) {
  const articleList = mainArticles.map((articleProps) => (
    <RecentArticleItem key={articleProps.id} {...articleProps} />
  ))

  return (
    <section className="overflow-x-auto">
      <Carousel options={carouselOptions} slides={articleList} />
    </section>
  )
}
