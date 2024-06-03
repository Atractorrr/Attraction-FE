import { cookies } from 'next/headers'
import dynamic from 'next/dynamic'
import { MainAds } from '@/widgets/main-ads'
import { RecentArticlesContainer } from '@/widgets/recent-articles-container'
import { UserRank } from '@/widgets/user-rank'

const TrendNewsletters = dynamic(
  () =>
    import('@/widgets/trend-newsletters').then((mod) => mod.TrendNewsletters),
  { ssr: false },
)

export default function Home() {
  const email = cookies().has('email') ? cookies().get('email')?.value : ''

  return (
    <main className="flex flex-col gap-6 lg:flex-row">
      <div className="flex w-full flex-col gap-y-6 lg:w-[calc(100%-366px)]">
        <RecentArticlesContainer email={email} />
        <TrendNewsletters email={email} />
      </div>
      <div className="flex w-full flex-col gap-y-6 lg:w-[366px]">
        <UserRank />
        <MainAds />
      </div>
    </main>
  )
}
