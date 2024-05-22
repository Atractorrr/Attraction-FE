import Image from 'next/image'
import React from 'react'

interface ProfileImageProps {
  imaSrc: string
}

export default function ProfileImage({ imaSrc }: ProfileImageProps) {
  return (
    <div className="relative size-full">
      <Image
        src={imaSrc}
        alt="프로필 사진"
        fill
        className="rounded-full object-cover"
      />
    </div>
  )
}
