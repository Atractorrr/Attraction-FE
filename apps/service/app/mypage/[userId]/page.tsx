import * as Features from '@/features'
import * as Widgets from '@/widgets'

type Props = {
  params: { userId: string }
}

export default async function Page({ params }: Props) {
  // TODO: 사이즈 커질때 배치 신경
  const userProfile = await Features.fetchUserProfile(params.userId)
  const recentNewLetterList = await Features.fetchNewsletterList(params.userId)
  const subscribeList = await Features.fetchSubscribeList(params.userId)

  return (
    <div className="min-h-screen bg-gray-50 p-0 md:px-32 md:py-8 lg:px-40 lg:py-10">
      <Features.Profiles userProfile={userProfile} />
      <Widgets.UserRecord userId={params.userId} />
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <Features.RecentNewsletter recentNewLetterList={recentNewLetterList} />
        <Features.SubscribeList subscribeList={subscribeList} />
      </div>
    </div>
  )
}
