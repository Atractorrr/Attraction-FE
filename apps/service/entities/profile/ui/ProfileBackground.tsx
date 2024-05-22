import Image from 'next/image'
import React from 'react'

interface ProfileImageProps {
  imgSrc: string
}

export default function ProfileImage({ imgSrc }: ProfileImageProps) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-md">
      <Image alt="배경사진" src={imgSrc} fill className="object-cover" />
    </div>
  )
}
