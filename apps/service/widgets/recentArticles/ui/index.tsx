import { ClockOutline } from '@attraction/icons'
import Link from 'next/link'
import { Background, Title } from '@/shared/ui'
import { fetchArticles } from '../api'
import { Articles } from '@/features/recentArticles'

// TODO: 다른 페이지 적용 완료되면 Link 적용할 것
export default async function RecentArticles() {
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
        <Articles mainArticles={mainArticles} />
      </div>
    </Background>
  )
}
