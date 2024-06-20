import { Container, GuideTxt, Title } from '@/shared/ui'
import { fetchDiscoverRelatedNewsletters } from '../api'
import DiscoverRelatedNewsletterItem from './DiscoverRelatedNewsletterItem'

interface DiscoverRelatedNewslettersProps {
  keyword: string
}

export default async function DiscoverRelatedNewsletters({
  keyword,
}: DiscoverRelatedNewslettersProps) {
  const data = await fetchDiscoverRelatedNewsletters(keyword, 0)

  return (
    <Container>
      <div className="p-5">
        <Title text="관련 뉴스레터" />
        {data.data.content.length ? (
          <div>
            {data.data.content.map((newsletter) => (
              <div key={newsletter.id} className="mt-6">
                <DiscoverRelatedNewsletterItem {...newsletter} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center pb-28 pt-24">
            <GuideTxt
              title="관련 뉴스레터 결과가 없어요"
              sub="다른 키워드로 검색해보세요"
            />
          </div>
        )}
      </div>
    </Container>
  )
}
