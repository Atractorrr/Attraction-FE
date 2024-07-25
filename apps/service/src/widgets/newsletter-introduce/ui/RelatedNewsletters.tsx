import { Container, GuideTxt, NewsletterItem, Title } from '@/shared/ui'
import { fetchRelatedNewsletters } from '../api'

interface RelatedNewsletterProps {
  newsletterId: number
}

export default async function RelatedNewsletters({
  newsletterId,
}: RelatedNewsletterProps) {
  const { data } = await fetchRelatedNewsletters(newsletterId)

  return (
    <Container>
      <div className="flex w-full flex-col justify-start gap-y-5 p-5">
        <Title text="연관 뉴스레터" />
        <div>
          {data.length ? (
            <ul>
              {data.map((newsletter) => (
                <li key={newsletter.id} className="peer peer-[]:mt-4">
                  <NewsletterItem id={newsletter.id} name={newsletter.name}>
                    <NewsletterItem.Thumbnail url={newsletter.thumbnailUrl} />
                    <NewsletterItem.Content>
                      <NewsletterItem.Description>
                        {newsletter.description}
                      </NewsletterItem.Description>
                    </NewsletterItem.Content>
                  </NewsletterItem>
                </li>
              ))}
            </ul>
          ) : (
            <div className="pb-40 pt-32">
              <GuideTxt
                title="연관 뉴스레터가 없어요"
                sub="데이터 추가 예정이니 조금만 기다려주세요"
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
