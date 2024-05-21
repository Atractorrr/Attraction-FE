import MainAds from '@/widgets/mainAds/ui'
import RecentArticles from '@/widgets/recentArticles/ui'
import TrendNewsletters from '@/widgets/trendNewsletters/ui'
import UserRank from '@/widgets/userRank/ui'

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
