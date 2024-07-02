import { TrendNewsletters } from '@/features/trend-newsletters'
import MainAds from './MainAds'
import RecentArticlesContainer from './RecentArticlesContainer'
import UserRank from './UserRank'

export default function MainLayout() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="flex w-full flex-col gap-y-6 lg:w-[calc(100%-366px)]">
        <RecentArticlesContainer />
        <TrendNewsletters />
      </div>
      <div className="flex w-full flex-col gap-y-6 lg:w-[366px]">
        <UserRank />
        <MainAds />
      </div>
    </div>
  )
}
