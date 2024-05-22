import { MainAds } from '@/widgets/mainAds'
import { RecentArticles } from '@/widgets/recentArticles'
import { TrendNewsletters } from '@/widgets/trendNewsletters'
import { UserRank } from '@/widgets/userRank'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col gap-5 lg:flex-row">
        <div className="grid max-w-3xl justify-items-center gap-y-5 lg:max-w-4xl">
          <RecentArticles />
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
