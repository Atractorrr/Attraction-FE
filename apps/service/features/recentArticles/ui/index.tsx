'use client'

import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/shared/ui/carousel'
import Article from '@/entities/recentArticles/ui'
import { RecentArticleReponse } from '@/entities/recentArticles/model'

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
}

export default function Articles({ mainArticles }: RecentArticleReponse) {
  const articleList = mainArticles.map((articleProps) => (
    <Article key={articleProps.id} {...articleProps} />
  ))

  return (
    <section className="overflow-x-auto">
      <EmblaCarousel
        options={carouselOptions}
        slides={articleList}
        showBlur="right"
      />
    </section>
  )
}
