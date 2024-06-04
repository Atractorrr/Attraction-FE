import { cookies } from 'next/headers'
import { ArticleDetail } from '@/widgets/inbox'

interface ArticleDetailPageProps {
  params: { articleId: string }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const email = cookies().get('email')?.value ?? 12 // TODO: 테스트용 상수 제거
  const articleId = Number(params.articleId)

  return <ArticleDetail userId={email} articleId={articleId} />
}
