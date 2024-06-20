import { Container, GuideTxt } from '@/shared/ui'
import { fetchDiscoverArticles } from '../api'
import DiscoverArticleItem from './DiscoverArticleItem'

interface DiscoverArticlesProps {
  keyword: string
}

export default async function DiscoverArticles({
  keyword,
}: DiscoverArticlesProps) {
  const data = await fetchDiscoverArticles(keyword, 0)

  return (
    <Container>
      <div className="w-full p-5">
        <p>
          <strong>{`"${keyword}"`}</strong>에 대한 검색 결과에요
        </p>
        {data.data.content.length ? (
          <div>
            {data.data.content.map((article) => (
              <div key={article.id} className="mt-6">
                <DiscoverArticleItem {...article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center pb-40 pt-32">
            <GuideTxt
              title="검색 결과가 없어요"
              sub="다른 키워드로 검색해보세요"
            />
          </div>
        )}
      </div>
    </Container>
  )
}
