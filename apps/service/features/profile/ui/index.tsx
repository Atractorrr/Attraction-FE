import React from 'react'
import { Button } from '@attraction/design-system'
import * as Entities from '@/entities'

export default function UI() {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white">
      <Entities.Profile.UI.ProfileBackground imgSrc="https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
      <div className="flex size-full pl-14">
        <Entities.Profile.UI.ProfileImage imaSrc="https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
        <div className="w-full p-5">
          <Entities.Profile.UI.UserInfo
            userName="woogie0303"
            userEmail="rkdehddnr15123@gmail.com"
          />
          <div className="flex justify-between">
            <Entities.Profile.UI.PreferTagList
              categories={['연애', '결혼', '경제']}
              renderItem={(category) => (
                <Entities.Profile.UI.PreferTagItem
                  key={category}
                  category={category}
                />
              )}
            />
            <div className="space-x-2">
              <Button className="rounded-lg bg-[#F4F6F8] px-3 py-1.5">
                개인설정
              </Button>
              <Button className="rounded-lg bg-[#41474E] px-3 py-1.5 text-white">
                프로필 공유
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
