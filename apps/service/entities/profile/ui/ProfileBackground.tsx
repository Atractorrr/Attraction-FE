import Image from 'next/image'
import React from 'react'

type Props = {
  imgSrc: string
}

export default function ProfileImage({ imgSrc }: Props) {
  return (
    <div className="px-5 pt-5">
      <div className="relative h-64 w-full overflow-hidden rounded-md">
        <Image alt="배경사진" src={imgSrc} fill className="object-cover" />
      </div>
    </div>
  )
}
