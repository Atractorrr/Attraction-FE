import { WithAuth } from '@/entities/auth'
import { ProfileContainer } from '@/features/profile-container'
import ProfileContainerSkeleton from '@/features/profile-container/ui/ProfileContainerSkeleton'
import { RecentReadArticlesContainer } from '@/features/recent-read-article'
import { SubscribeList } from '@/features/subscribe-list'
import { Header } from '@/widgets/menu'
import { UserRecord } from '@/widgets/user-record'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: '마이페이지',
}

export default function MyPage() {
  return (
    <>
      <Header title="마이페이지" mobileDisabled />
      <WithAuth>
        <div className="w-full">
          <Suspense fallback={<ProfileContainerSkeleton />}>
            <ProfileContainer />
          </Suspense>
          <UserRecord />
          <div className="mt-6 flex flex-col items-stretch justify-start gap-6 xl:flex-row-reverse xl:justify-between">
            <div className="h-auto w-full xl:w-2/3">
              <RecentReadArticlesContainer />
            </div>
            <div className="h-auto w-full xl:w-1/3">
              <SubscribeList />
            </div>
          </div>
        </div>
      </WithAuth>
    </>
  )
}
