import { Container, GuideTxt, Title } from '@/shared/ui'
import { ClockOutline } from '@attraction/icons'
import NewsletterPreviousArticleItem from './NewsletterPreviousArticleItem'
import { fetchNewsletterPreviousArticles } from '../api'

interface NewsletterPreviousArticlesProps {
  newsletterId: string
}

export default async function NewsletterPreviousArticles({
  newsletterId,
}: NewsletterPreviousArticlesProps) {
  const { data } = await fetchNewsletterPreviousArticles(newsletterId)

  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-y-5 p-5">
        <Title icon={<ClockOutline className="size-6" />} text="지난 아티클" />
        <div>
          {!data.length ? (
            <div className="pb-40 pt-32">
              <GuideTxt
                title="지난 아티클이 없어요"
                sub="새로운 아티클을 기대해주세요!"
              />
            </div>
          ) : (
            <div className="flex w-full flex-col gap-y-5">
              {data.map((newsletter) => (
                <NewsletterPreviousArticleItem
                  key={newsletter.id}
                  newsletterId={newsletterId}
                  {...newsletter}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
