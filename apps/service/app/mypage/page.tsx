import { cookies } from 'next/headers'
import { UserRecord } from '@/widgets/user-record'
import { SubscribeList, fetchSubscribeList } from '@/features/subscribe-list'
import { ProfileContainer } from '@/features/profile-container'
import {
  RecentNewsletterContainer,
  fetchNewsletterList,
} from '@/features/recent-newsletter'
import { WithAuth } from '@/entities/auth'

async function MyPageContent() {
  const email = cookies().get('email')?.value as string

  const [recentNewsletterList, subscribeList] = await Promise.all([
    fetchNewsletterList(email),
    fetchSubscribeList(email),
  ])

  return (
    <div className="w-full">
      <ProfileContainer userId={email} />
      <UserRecord userId={email} />
      <div className="mt-6 flex flex-col items-stretch justify-start gap-6 lg:flex-row-reverse lg:justify-between">
        <div className="h-auto w-full lg:w-2/3">
          <RecentNewsletterContainer
            recentNewsletterList={recentNewsletterList}
          />
        </div>
        <div className="h-auto w-full lg:w-1/3">
          <SubscribeList subscribeList={subscribeList} />
        </div>
      </div>
    </div>
  )
}

export default function MyPage() {
  return (
    <WithAuth>
      <MyPageContent />
    </WithAuth>
  )
}
