import Image from 'next/image'
import React from 'react'

type Props = {
  imageSrc: string
}

export default function ProfileImage({ imageSrc }: Props) {
  return (
    <div className="size-40 shrink-0 -translate-y-10 rounded-full bg-white p-2 ">
      <div className="relative size-full">
        <Image src={imageSrc} alt="프로필 사진" fill className="rounded-full" />
      </div>
    </div>
  )
}
