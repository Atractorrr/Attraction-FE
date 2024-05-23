import Link from 'next/link'
import { ClockOutline } from '@attraction/icons'
import { RecentArticles } from '@/features/recent-articles'
import { Background, Title } from '@/shared/ui'
import { fetchArticles } from '../api'

// TODO: 다른 페이지 적용 완료되면 Link 적용할 것
export default async function RecentArticlesContainer() {
  const { mainArticles } = await fetchArticles()

  return (
    <Background>
      <div className="grid w-full gap-y-4">
        <div className="flex justify-between">
          <Title
            icon={<ClockOutline className="size-5" />}
            text="최근 받은 아티클"
          />
          <Link href="/" className="text-sm text-gray-400">
            보관함 바로가기
          </Link>
        </div>
        <RecentArticles mainArticles={mainArticles} />
      </div>
    </Background>
  )
}
