import React from 'react'
import * as Features from '@/features'
import * as Widgets from '@/widgets'

type Props = {}

export default function Page({}: Props) {
  return (
    <div className="bg-[#F4F6F8] px-40 py-10">
      <Features.Profile.UI />
      <div className="mt-8 flex w-full gap-6">
        <Widgets.UserRecord.UI />
      </div>

      <div className="mt-6 flex gap-6">
        <Features.RecentNewsletter />
        <Features.SubscribeList />
      </div>
    </div>
  )
}
