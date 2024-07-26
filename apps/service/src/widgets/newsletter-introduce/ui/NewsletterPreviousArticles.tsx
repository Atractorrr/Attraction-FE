import { Container, GuideTxt, Title } from '@/shared/ui'
import { ClockOutline } from '@attraction/icons'
import NewsletterPreviousArticleItem from './NewsletterPreviousArticleItem'
import { fetchNewsletterPreviousArticles } from '../api'

interface NewsletterPreviousArticlesProps {
  newsletterId: number
}

export default async function NewsletterPreviousArticles({
  newsletterId,
}: NewsletterPreviousArticlesProps) {
  const { data } = await fetchNewsletterPreviousArticles(newsletterId)

  return (
    <Container className="p-5">
      <Title className="mb-6">
        <ClockOutline className="size-6" />
        지난 아티클
      </Title>
      <div>
        {!data.length ? (
          <div className="pb-40 pt-32">
            <GuideTxt
              title="지난 아티클이 없어요"
              sub="새로운 아티클을 기대해주세요!"
            />
          </div>
        ) : (
          <ul>
            {data.map((newsletter) => (
              <li key={newsletter.id} className="peer peer-[]:mt-5">
                <NewsletterPreviousArticleItem
                  newsletterId={newsletterId}
                  {...newsletter}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Container>
  )
}
