import { UserRecord } from '@/widgets/user-record'
import { SubscribeList, fetchSubscribeList } from '@/features/subscribe-list'
import { ProfileContainer } from '@/features/profile-container'
import {
  RecentNewsletterContainer,
  fetchNewsletterList,
} from '@/features/recent-newsletter'

interface MyPageProps {
  params: { userId: string }
}

export default async function MyPage({ params }: MyPageProps) {
  // TODO: 사이즈 커질때 배치 신경(max-width 설정)
  const [recentNewLetterList, subscribeList] = await Promise.all([
    fetchNewsletterList(params.userId),
    fetchSubscribeList(params.userId),
  ])

  return (
    <div className="w-full">
      <ProfileContainer userId={params.userId} />
      <UserRecord userId={params.userId} />
      <div className="mt-6 flex flex-col items-stretch justify-start gap-6 lg:flex-row lg:justify-between">
        <div className="h-auto w-full lg:w-2/3">
          <RecentNewsletterContainer
            recentNewLetterList={recentNewLetterList}
          />
        </div>
        <div className="h-auto w-full lg:w-1/3">
          <SubscribeList subscribeList={subscribeList} />
        </div>
      </div>
    </div>
  )
}
