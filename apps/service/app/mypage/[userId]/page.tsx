import { UserRecord } from '@/widgets/user-record'
import { SubscribeList, fetchSubscribeList } from '@/features/subscribe-list'
import {
  ProfileContainer,
  fetchUserProfile,
} from '@/features/profile-container'
import {
  RecentNewsletterContainer,
  fetchNewsletterList,
} from '@/features/recent-newsletter'

interface MyPageProps {
  params: { userId: string }
}

export default async function MyPage({ params }: MyPageProps) {
  // TODO: 사이즈 커질때 배치 신경(max-width 설정)
  const [userProfile, recentNewLetterList, subscribeList] = await Promise.all([
    fetchUserProfile(params.userId),
    fetchNewsletterList(params.userId),
    fetchSubscribeList(params.userId),
  ])

  return (
    <div className="w-full">
      <ProfileContainer userProfile={userProfile} />
      <UserRecord userId={params.userId} />
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <RecentNewsletterContainer recentNewLetterList={recentNewLetterList} />
        <SubscribeList subscribeList={subscribeList} />
      </div>
    </div>
  )
}
