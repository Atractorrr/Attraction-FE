'use client'

import { EmblaOptionsType } from 'embla-carousel'
import { Carousel, GuideTxt } from '@/shared/ui'
import RecentArticleItem from './RecentArticleItem'
import { RecentArticle } from '../model'

const carouselOptions: EmblaOptionsType = {
  dragFree: true,
}

interface RecentArticlesProps {
  mainPageArticles: RecentArticle[]
}

export default function RecentArticles({
  mainPageArticles,
}: RecentArticlesProps) {
  const articleList =
    mainPageArticles.map((articleProps) => (
      <RecentArticleItem key={articleProps.id} {...articleProps} />
    )) ?? []

  return (
    <div>
      {mainPageArticles.length ? (
        <Carousel options={carouselOptions} slides={articleList} showBlur />
      ) : (
        <div className="pb-32 pt-24">
          <GuideTxt
            title="받은 뉴스레터가 없어요"
            sub="뉴스레터를 구독해볼까요?"
          />
        </div>
      )}
    </div>
  )
}
