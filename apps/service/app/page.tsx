import { cookies } from 'next/headers'
import { MainAds } from '@/widgets/main-ads'
import { RecentArticlesContainer } from '@/widgets/recent-articles-container'
import { TrendNewsletters } from '@/widgets/trend-newsletters'
import { UserRank } from '@/widgets/user-rank'

export default function Home() {
  const isLoggedIn = cookies().has('accessToken')
  const email = cookies().has('email') ? cookies().get('email')?.value : ''

  return (
    <main>
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex w-full flex-col gap-y-6 lg:col-span-2">
          <RecentArticlesContainer isLoggedIn={isLoggedIn} />
          <TrendNewsletters email={email} />
        </div>
        <div className="flex w-full flex-col justify-items-center gap-y-6">
          <UserRank />
          <MainAds />
        </div>
      </section>
    </main>
  )
}
