import React from 'react'
import * as Entities from '@/entities'
import Image from 'next/image'

type Props = {}

export default function UI({}: Props) {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-5">
      <div className="relative h-64 w-full overflow-hidden rounded-md">
        <Image
          alt="배경사진"
          src="https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex size-full">
        <Entities.Profile.UI.ProfileImage imageSrc="https://images.pexels.com/photos/22669930/pexels-photo-22669930.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" />
        <div className="w-full">
          <Entities.Profile.UI.PreferTagList
            categories={['연애', '결혼', '경제']}
            renderItem={(category) => (
              <Entities.Profile.UI.PreferTagItem
                key={category}
                category={category}
              />
            )}
          />
        </div>
      </div>
    </div>
  )
}
