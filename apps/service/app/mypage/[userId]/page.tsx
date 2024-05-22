import { SubscribeList, fetchSubscribeList } from '@/features/subscribe-list'
import {
  ProfileContainer,
  fetchUserProfile,
} from '@/features/profile-container'
import { UserRecord } from '@/widgets/user-record'
import {
  RecentNewsletter,
  fetchNewsletterList,
} from '@/features/recent-newsletter'

type Props = {
  params: { userId: string }
}

export default async function Page({ params }: Props) {
  // TODO: 사이즈 커질때 배치 신경
  const userProfile = await fetchUserProfile(params.userId)
  const recentNewLetterList = await fetchNewsletterList(params.userId)
  const subscribeList = await fetchSubscribeList(params.userId)

  return (
    <div className="min-h-screen bg-gray-50 p-0 md:px-32 md:py-8 lg:px-40 lg:py-10">
      <ProfileContainer userProfile={userProfile} />
      <UserRecord userId={params.userId} />
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <RecentNewsletter recentNewLetterList={recentNewLetterList} />
        <SubscribeList subscribeList={subscribeList} />
      </div>
    </div>
  )
}
