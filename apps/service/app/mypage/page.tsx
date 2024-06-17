import { UserRecord } from '@/widgets/user-record'
import { SubscribeList, fetchSubscribeList } from '@/features/subscribe-list'
import { ProfileContainer } from '@/features/profile-container'
import {
  RecentNewsletterContainer,
  fetchNewsletterList,
} from '@/features/recent-newsletter'
import { cookies } from 'next/headers'
import WithAuth from '@/entities/auth/ui/WithAuth'

async function MypageContent() {
  const email = cookies().get('email')?.value as string

  const [recentNewLetterList, subscribeList] = await Promise.all([
    fetchNewsletterList(email),
    fetchSubscribeList(email),
  ])

  return (
    <div className="w-full">
      <ProfileContainer userId={email} />
      <UserRecord userId={email} />
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

export default async function MyPage() {
  return WithAuth(<MypageContent />)
}
