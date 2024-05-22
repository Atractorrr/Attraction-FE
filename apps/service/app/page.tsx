import { MainAds } from '@/widgets/main-ads'
import { RecentArticlesContainer } from '@/widgets/recent-articles-container'
import { TrendNewsletters } from '@/widgets/trend-newsletters'
import { UserRank } from '@/widgets/user-rank'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-5 lg:flex-row">
        <div className="grid max-w-3xl justify-items-center gap-y-5 lg:max-w-4xl">
          <RecentArticlesContainer />
          <TrendNewsletters />
        </div>
        <div className="grid max-w-3xl justify-items-center gap-y-5 lg:max-w-md">
          <UserRank />
          <MainAds />
        </div>
      </section>
    </main>
  )
}
