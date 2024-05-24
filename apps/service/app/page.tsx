import { MainAds } from '@/widgets/main-ads'
import { RecentArticlesContainer } from '@/widgets/recent-articles-container'
import { TrendNewsletters } from '@/widgets/trend-newsletters'
import { UserRank } from '@/widgets/user-rank'

export default function Home() {
  return (
    <main className="flex items-center justify-center lg:p-6">
      <section className="grid max-w-6xl gap-6 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-y-5 lg:col-span-2">
          <RecentArticlesContainer />
          <TrendNewsletters />
        </div>
        <div className="flex w-full flex-col justify-items-center gap-y-5">
          <UserRank />
          <MainAds />
        </div>
      </section>
    </main>
  )
}
