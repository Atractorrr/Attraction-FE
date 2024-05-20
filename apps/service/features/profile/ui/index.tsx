'use client'

import React from 'react'
import { Button } from '@attraction/design-system'
import * as Entities from '@/entities'
import { UserProfileType } from '../model/types'

type Props = {
  userProfile: UserProfileType
}

export default function Profiles({ userProfile }: Props) {
  return (
    <div className="relative flex w-full flex-col rounded-lg bg-white">
      <Entities.Profile.ProfileBackground imgSrc={userProfile.backgroundImg} />
      <div className="flex size-full flex-col pl-5 md:flex-row md:pl-14">
        <div className="size-20 md:size-auto">
          <Entities.Profile.ProfileImage imaSrc={userProfile.profileImg} />
        </div>
        <div className="w-full p-5">
          <Entities.Profile.UserInfo
            userName={userProfile.name}
            userEmail={userProfile.email}
          />
          <div className="flex flex-col justify-between gap-4 lg:flex-row">
            <Entities.Profile.PreferTagList
              categories={userProfile.categories}
              renderItem={(category) => (
                <Entities.Profile.PreferTagItem
                  key={category}
                  category={category}
                />
              )}
            />
            <div className="flex gap-2">
              <Button className="w-full rounded-lg bg-[#F4F6F8] px-3 py-1.5 lg:w-fit">
                개인설정
              </Button>
              <Button className="w-full rounded-lg bg-[#41474E] px-3 py-1.5 text-white lg:w-fit">
                프로필 공유
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
