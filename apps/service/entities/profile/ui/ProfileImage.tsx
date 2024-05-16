import Image from 'next/image'
import React from 'react'

type Props = {
  imaSrc: string
}

export default function ProfileImage({ imaSrc }: Props) {
  return (
    <div className="size-40 shrink-0 -translate-y-1/2 rounded-full bg-white p-2">
      <div className="relative size-full">
        <Image src={imaSrc} alt="프로필 사진" fill className="rounded-full" />
      </div>
    </div>
  )
}
