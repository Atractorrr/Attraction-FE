import { fetchArticles } from '@/widgets/recentArticles/api'
import Articles from '@/features/recentArticles/ui/Articles'
import Title from '@/shared/title/ui'
import Background from '@/shared/background/ui'
import { ClockOutline } from '@attraction/icons'

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
          <a className="text-sm text-gray-400">보관함 바로가기</a>
        </div>
        <Articles mainArticles={mainArticles} />
      </div>
    </Background>
  )
}
