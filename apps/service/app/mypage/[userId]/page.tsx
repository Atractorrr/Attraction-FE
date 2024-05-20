import * as Features from '@/features'
import * as Widgets from '@/widgets'

type Props = {
  params: { userId: string }
}

export default async function Page({ params }: Props) {
  const userProfile = await Features.fetchUserProfile(params.userId)

  return (
    <div className="bg-[#F4F6F8] p-0 md:px-32 md:py-8 lg:px-40 lg:py-10">
      <Features.Profiles userProfile={userProfile} />
      <Widgets.UserRecord />
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <Features.RecentNewsletter />
        <Features.SubscribeList />
      </div>
    </div>
  )
}
