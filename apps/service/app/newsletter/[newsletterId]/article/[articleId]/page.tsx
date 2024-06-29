import { Metadata } from 'next'
import { getPrevArticle } from '@/widgets/newsletter-introduce'
import { ArticleView } from '@/entities/user-article'
import { Container } from '@/shared/ui'

interface PrevArticleDetailPageProps {
  params: {
    newsletterId: string
    articleId: string
  }
}

export const revalidate = 300

export const metadata: Metadata = {
  title: '지난 아티클',
}

export default async function PrevArticleDetailPage({
  params,
}: PrevArticleDetailPageProps) {
  const newsletterId = Number(params.newsletterId)
  const articleId = Number(params.articleId)

  if ([newsletterId, articleId].some(Number.isNaN)) {
    throw new Error('유효하지 않은 요청이에요')
  }

  const { data } = await getPrevArticle({ newsletterId, articleId })

  return (
    <Container>
      <ArticleView
        id={data.id}
        title={data.title}
        contentUrl={data.contentUrl}
        newsletterId={data.newsletter.id}
        newsletterThumbnailUrl={data.newsletter.thumbnailUrl}
        newsletterName={data.newsletter.name}
        receivedAt={data.receivedAt}
        readingTime={data.readingTime}
        articleType="prev"
        censored
      />
    </Container>
  )
}
