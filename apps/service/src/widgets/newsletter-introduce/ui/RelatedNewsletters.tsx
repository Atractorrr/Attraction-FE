import { Container, GuideTxt, Title } from '@/shared/ui'
import { fetchRelatedNewsletters } from '../api'
import RelatedNewsletterItem from './RelatedNewsletterItem'

interface RelatedNewsletterProps {
  newsletterId: number
}

export default async function RelatedNewsletters({
  newsletterId,
}: RelatedNewsletterProps) {
  const { data } = await fetchRelatedNewsletters(newsletterId)

  return (
    <Container className="p-5">
      <Title className="mb-5">연관 뉴스레터</Title>
      {data.length ? (
        <ul>
          {data.map((newsletter) => (
            <li key={newsletter.id} className="peer peer-[]:mt-4">
              <RelatedNewsletterItem {...newsletter} />
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
    </Container>
  )
}
