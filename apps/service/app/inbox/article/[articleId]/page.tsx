'use client'

import { ArticleDetail } from '@/widgets/inbox'

interface ArticleDetailPageProps {
  params: { articleId: string }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const articleId = Number(params.articleId)

  if (Number.isNaN(articleId)) {
    throw new Error('유효하지 않은 아티클이에요')
  }

  return <ArticleDetail articleId={articleId} pageType="default" />
}
