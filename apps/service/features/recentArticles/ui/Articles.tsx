'use client'

import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/shared/carousel/ui'
import Article from '@/entities/recentArticles/ui'
import { RecentArticleReponse } from '@/widgets/recentArticles/model'

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
}

export default function Articles({ mainArticles }: RecentArticleReponse) {
  return (
    <section className="overflow-x-auto">
      <EmblaCarousel
        options={carouselOptions}
        slides={mainArticles}
        slideRenderer={(articleProps) => <Article {...articleProps} />}
        showBlur="right"
      />
    </section>
  )
}
